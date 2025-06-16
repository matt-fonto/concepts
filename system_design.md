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
