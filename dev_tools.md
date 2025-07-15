# Dev Tools

## 1. Fundamentals

### Settings

- You can setup:
  - Preferences: general browser preferences
  - Workspace
  - Experiments: Experimental features
  - Ignore list: Scripts to be ignored
  - Devices: Selecting different emulated devices
  - Throttling: Creating a specific network profile, such as: download/upload speed, latency, to simulate connections
  - Locations: Override geolocation coordinates
  - Shortcuts

### Elements

- HTML Body
- Inspect and live-edit the DOM and CSS
- Traverse HTML tree, tweak stules, attributes and layout

### Sources

- Debug and step through JS
- Set breakpoints, step, watch variables, and live-edit scripts

### Debugging

> Identifying the root of the problem and reproducing it, identifying ways to get rid of it

- Source panel

  - We can debug by line, or by `Event Listener Breakpoints`
  - Therefore, we can stop the code on events such as:
    - DOM Mutation
    - Keyboard events
    - Mouse events
      and many others

- We can add `debugger` to the JavaScript. It will stop execution when it gets there

1. Reproduce & Isolate

- Minimal, self-contained test case

2. Use DevTools Breakpoints

- Pause execution exactly where you need it
- Use "Pause on exceptions" to catch errors as they happen
- We can set `add breakpoints on condition`, then it will evaluate a boolean to identify whether or not to pause the code
- Breakpoints are also interesting to not only see, but also manipulate variables as the code runs.
  - We can check their value on console on that specific iteration
  - We can change their value on the `Sources/Scope`
- We can add breakpoints not only to JS on the `source` tab, but also to the DOM, on the `elements` tab
- We can also add to the console `debug(funcName)`. When this function is called, the breakpoint will kick in

3. If you add your workspace to the browser, the changes you do on the browser will be preserved on the files itself

- It changes the file system

4. You can store `Snippets` on the browser
   > Source/Snippets/New Snippet

### Network

- Monitor resource requests
- Inspect HTTP methods, headers, payloads, response codes, resource sizes, and load timing

### Console

- Execute JS code
- View logs, warnings and errors

#### Types of console

Logging levels: They basically do the same, more or less -> console...

- .debug(): low-prioririty debug messages. They don't appears unless we set `Verbose`
- .info(): informational message. Usually styled with `i` icon
- .warn(): yellow-highlighted
- .error(): red-highlighted. Also prints the stack track

Structure data: Way to dissect further objects and arrays

- .dir(obj): list's objects properties as a collapsible tree
- .table(arr): renders arrays or objects as a sortable table -> Really cool!
  ![alt text](image-6.png)

### Performance

- Analyize: CPU usage, rendering, scripting, painting, and layout breakdowns

### Memory

- Track JS heap usage, take keap snapshots, detect memory leaks

### Application

- Manage client-side storage and state

  - Local storage/Session storage: read/write key-value pairs

    - Local storage: data is persistent, even after the browser is closed
      - Useful for: user preferences, application settings, and cached data
    - Session storage: data is cleared when browser/tab is closed
      - Useful for temp data that is only needed for the duration of the user's visit, such as: form data, shopping cart info

  - IndexedDB: Browser structured storage databases
  - Cookies: Inspect, modify or delete HTTP cookies

### More options

On the dev tools, go to menu beside the settings, where you can change the dock size, search open file, etc, and find `more tools`. There, you will be able to see a list of varied browser resources, such as:

![alt text](image-5.png)

- AI assistance: generate elements selectors, explain CSS rules, mock tests or code snippets
  - You need to turn on these features. Go to the settings, and turn what you need
- Animations: timeline settings for animations
- Autofill: Preview and trigger browser autofill data (addresses, credit cards, etc) on form fields
- Changes: tracks stylesheet/script edits in DevTools. Allows you to review and export the diff
- Coverage: Shows which CSS/JS is actually used on the pages vs. what you can trim to reduce bundle size
- CSS Overview: Sum up report on CSS: color palette, font usage, duplicated rules
- Developer resources: quick links to internal browser pages and specs
- Issues: centralized list of warnings, depcrecations, policy or security violations detected on the page
- Layers: visualize layers, which elements get GPU-accelerated and how they're stacked
- Media: inspect `video` `audio` elements
- Memory inspector: Low-level view of JS heap buffers (ArrayBuffers, TypedArrays) and raw memory layout
- Network conditions: Override user-agent strings, emulate offline or custom network latencies/bandwidth
- Network request blocking: Define URL patterns to block specific resources (ads, analytics, APIs) on the fly
- Performance monitor: Live charts for CPU usage, JS heap size, DOM node count (great for identifying spikes)
- Private and security: Inspect TLS certs, mixed-content issues, CORS errors and security/privacy settings
- Quick source: search source files by name without hunting through sources panel
- Recorder: Record user interactions as playback scripts or performance traceable flows -> really interesting
- Rendering: paint flashing, layer borders, FPS meter, and other visual overlays to debug rendering issues
- Search: Global text search across all loaded files and resources
- Sensors: Emulate geolocation, device orientation, touch support, and override the page's clock
- WebAudio: Graphical debugger for AudioContext: inspect nodes, parameters and real-time audio graph
- WebAuthn: Simulate WebAuthn (passkey) authenticator devices for testing login flows

## 2. Cool tricks

- Logpoints: Instead of adding `console.log()` to the code, you can:

  - Source > JS file > select the line > select `add logpoint` > select the message + value and it'll appear in the log
  - They persist across page reloads
  - `conditional breakpoint`: the code only pauses if certain condition is true

- CMD + SHIFT + P: Open the menu elements of the browser. Quite handy.

- Rendering tab: There are several cool features here, such as:

  - Layer nborder: showing the borders of your layouts
  - Scrolling performance issues
  - Preview website with different themes
  - and many more

- CSS Overview: Allows you yo have a sum up of the CSS

  - Useful for debugging, checking the colors profiles, contrast issues
  - How many font-sizes, font-weight, line-height are being used. Great for identifying issues with consistency

- Full page screenshot: Select the body element and select `take screenshot`

- Copy console: Instead of selecting and then copying the whole console, right click and select `copy console`

- Snippets: You can save custom JS on the browser through the Snippets.

  > sources > snippets > `new snippet`

  - it's like creating your own Chrome extension

- To clean cache: with the DevTools open, select reload, then there will be an option to clean the cache
