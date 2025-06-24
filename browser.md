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
  - HTML is a document
  - How does the browser take the HTML and displays a text into your screen?
    - HTML is interpreted as the DOM for the browser, which is a tree-like structure with nodes, from the root, down to the children
    - Steps:
      1. Load file: It gets it as raw bytes (01101101, etc)
      2. Convertion of bytes to characters: uses the UTF settings to identify what those bytes mean in that context
      3. Tokenization: from the characters, it takes keyterms (if, else, for, h1, body, html, etc)
      4. Structure the data: once the characters are tokenized, it is structured into an object
         4.1 Model: from the object, we establish relationships (parent, sibling, etc)
      - Big object: DOM
        ```js
        {
            tag: h1
            <!-- properties -->
            data/value: Cool title
        }
        ```
      5. Convertion into Node List: We know the elements and how they relate hierarchically
      - Up until now, this has been the data organization of what eventually will be "rendered" on the screen
      6. CSS: A similar process to the previous one happens
      - The raw content is interpreted as charecters and the charecters tokenized and objects are created
      - Raw -> Character -> Token -> Object -> Relation -> Model
      - CSSOM -> CSS Object Model
      - Up to this point, the DOM and the CSSOM don't have any idea of each other
      7. Render tree
      - DOM + CSSOM -> They are given to the Browser Engine
        - Calculations are done
        - Here, the "painting" starts: the rendering begins
        - Data is seen on the screen
      8. JS Engine
      - Once the browser sees a JS script, it stops the DOM gives priority to JS
        - However, curiously enough, the browser halts the JS execution until CSSOM is ready
      - Because JS manipulates the DOM and CSS, therefore it must have priority
- CSS -> CSSOM tree
- DOM + CSSOM = Render tree, drives layout and painting
