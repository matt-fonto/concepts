# React

## 1. React Fiber vs. Virtual Dom

### Virtual DOM

- Basically, it's a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing and optimizing the direct DOM manipulation
- In-memory tree of React elements representing the UI
- On state/prop change, React diffs the old and new trees to compute minimal real-DOM updates (diffing)
- It's a concept and data structure for efficient updates
- You tell React what state you want the UI to be in, and it makes sure the DOM matches data
- Virtual DOM is a concept implemented by JS libraries on top of browsers API

#### VDOM - Step by step

1. Initial rendering: when the app starts, the entire UI is represented as Virtual DOM
   - React elements are created and rendered into the virtual structure
2. State and props change: as state and props change, React re-renders affected components in the VDOM
   - Changes don't immediately impact the real DOM
3. Diffing: React uses a diffing algorithm to compare the current CDOM to the previous version
   - It diffs the two versions
4. Reconciliation: Based on the differences identified, React determines the most efficient ways to update the RDOM
   - Only the parts that need to be changed are, rather than updating the whole RDOM
   - Reconciliation is the way through which React brings the UI up to date with the state of the application data
5. Update the RDOM: React applies the changes
   - Adding, removing, updating elements based on diffs

#### RDOM vs VDOM

- Real DOM

  - Represents the whole HTML document as a tree structure and allows JS to manipulate and change HTML docs
  - When changes occure, the whole document re-renders

- Virtual DOM
  - Uses diff algorithms to compare the current and previous versions
  - Re-renders only the parts of the UI that have changed, instead of the whole thing

#### Benefits of VDOM

1. Simplified development

   - Declarative style
   - Describe what the UI should look like, React takes care of the test
   - Allowed React's declarative syntax and its component-based architecture

2. Improvement performance

   - Manipulating the Real DOM is expensive and takes a while, while the VDOM makes this more performatic

3. Enhanced User Experience

   - Updates are smooth, without full-page refreshes

4. Cross-platform development
   - React Native uses a similar approach

### React Fiber

- Introduced in React 16
- A complete rewrite of React's conciliation engine, using "fiber" nodes instead of plain recursion
- Splits work into small units, supports scheduling (prioritizing, pausing, resuming) and time-slicing for smoother UIs
- Fiber nodes form a linked structure (`child`/`sibling`/`return` pointers) enabling incremental diffing, whereas the classic Virtual DOM diff was a single sync pass
- It divides the rendering working into smaller parts, konwn as `fibers`

#### Before React Fiber

- React used the `Stack Reconciler`

  - changes applied synchronously
  - state, prop changes, React'd traverse the entire component tree. Compare with previous tree, and apply changes on the DOM, in one go.

- `Fiber Reconciler`

  - work is done incrementally
  - React can start and pause work
  - Improved performance and reaction rate

- It's the new (React 16) VDOM reconciler
  - We still build the Virtual DOM tree, but under the hood we reconcile it through Fiber, not the Stack Reconciler
  - The way React processes VDOM

#### Main Concepts React Fiber

1. Incremental rendering

   - Priority-based updates
     - high-priority: user interaction
     - low-priority: data fetching (background)
   - Can split the work into chunks and prioritize tasks
   - Can pause work and come back to it later
   - It's async

2. Concurrency

   - React fiber is still single-threaded, but it schedules tasks on event loop

3. Tree Structure
   - Tree of fibers, in which every UI items has: state, data, and hierarchy position

#### How React Fiber works

- Fiber is just a plain JS object with some properties
- Fiber also represents a unit of work
- React processes the fibers (units of work) and we end up with something called `finishwork()`

  - Then it commits this work, resulting in DOM changes

- 2 phases
  - render phase: processing of fibers happens
    - Async
    - Prioritize tasks
    - Pause work, discard it, return to it, etc
  - commit phase: `commitWork()` is called
    - Sync and it can't be interrupted

## 2. Reconciliation process

- React's process of updating UI by diffing the new, updated element tree against the previous one

1. Render (diff) phase

   - Builds work units: React creates a Fiber tree representign the new elements
     - Links them via `child`/`sibling` pointers
   - Compare nodes:
     - Type change: tear down old subtree and mount new
     - Same type with key: reuse the DOM node, update props
     - List with keys: match by key to reorder, insert, or delete only what changed
   - Prioritize work: Pause and resume diffing based on priority

2. Commit Phase
   - Apply mutations: React walks the completed fiber tree and:
     - inserts, updates, or removes real DOM nodes
     - Run lifecycle effects `useLayoutEffect` synchronously after DOM updates
     - Runs passive effects `useEffect` asynchrounously after paint

### The importance of `unique key` in mapped elements

- Allows React to match elements between renders to apply minimal updates
- Using stable, unique keys ensures consistency
- If indexes are used, list changes order, removed/added items, can confuse React
  - Can also cause unnecessary re-renders
- Unique ids also help in performatic diffing

### Reconciliation priorities

**High-prio** (blocking tasks): processed sync or with very small yields between units so the uI never feels sluggish

- Immediate updates `ImmediatePriority`
  - Rare
  - ReactDOM flushing after `flushSync()`
  - Urgent imperative calls made via API
- User-blocking updates `UserBlockingPriority`
  - User input (click, keystrokes, touches)

**Medium-prio** (normal taks): run between `user-blocking` work, but before background. React time-slices them to keep the app responsive

- Data-driver renders `NormalPriority`
  - State updates from network responses or non-critial prop changes
  - Typical setState calls inside effects or async callbacks

**Low-prio** (background tasks): Can be paused for any higher-priority and resumed later

- Offscreen/preload renders `LowPriority`
  - Render content not currently visible (hidden routes, tabs)
  - Pre-fetching components or data you anticipate needing soon

**Idle-prio**: Executed only when the browser is otherwise idle

- Housekeeping `IdlePriority`
  - Logging, analytics, cache eviction
  - Anything in `requestIdleCallback`
