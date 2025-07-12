# Dev Tools

## Fundamentals

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

### Network

- Monitor resource requests
- Inspect HTTP methods, headers, payloads, response codes, resource sizes, and load timing

### Console

- Execute JS code
- View logs, warnings and errors

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

## Cool tricks

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
