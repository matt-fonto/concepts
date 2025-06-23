# How the browser works

- The browser is almost a full-blown OS
- The browser has two main missions
  - Display data
  - Allow you to interact with data

## 1. Architecture

- UI (address bar, back/forward buttons)
- Browser engine (glue between UI and rendering)

  - Rendering engine (parses HTML/CSS into pixels)
    - Responsible for HTML and CSS
    - Most of the rendering engines are written in C++
  - JavaScript Engine (parses, compiles and runs JS)
    - Curiously, JS engine doesn't have timers. Therefore, setTimeout, setInterval are APIs that JS "borrows" from the browser

- Networking (HTTP/TLS requests)
- Storage (cookies, localStorage, sessionStorage, indexedDB)

## 2. Render Tree

- HTML -> DOM Tree
  - How does the browser take the HTML and displays a text into your screen?
    - HTML is interpreted as the DOM for the browser, which is a tree-like structure with nodes, from the root, down to the children
    - Steps:
      1. Load file: It gets it as raw bytes (01101101, etc)
      2. Convertion of bytes to characters: uses the UTF settings to identify what those bytes mean in that context
      3. Tokenization: from the characters, it takes keyterms (if, else, for, h1, body, html, etc)
- CSS -> CSSOM tree
- DOM + CSSOM = Render tree, drives layout and painting
