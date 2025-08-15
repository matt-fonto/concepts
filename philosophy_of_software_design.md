# The Philosophy of Software Design

- Software design is where developers will spend most of their time

## Industry vs. Academia

- Are they that different?
- Industry: markets, sales, product people
- Academia: freedom to explore

## Tactical Tornadoes vs. 10x Engineers

- Less code, higher functionality
- Tactical coding: short-term focus
  - With AI, tactical coding will become more pervasive
- Strategic coding: long-term focus

## AI and Coding

- Low-level code will be easier to produce and we, as devs, will spend more time on design aspects
- To what degree can AI replace the higher-level design tasks?
  - So far, it doesn't seem likely, even though we're not sure about the future
- Software design will become increasingly important

## Software Design

- Decomposition problem. You take a large, complicated system and divide it up into smaller units you can implement relatively independently
- What is the most important idea in computer science? => **Decomposition**
- How do we take large, complicated problems and break them down?
  - Implementation: going about the invidual pieces
- Design is about managing complexity

### Approaches

- There's no specific recipe
- Back-and-forth process
- Top-down: You start from the whole, and try to break it into different pieces and relatively independent components
- Bottom-up: Less experienced engineers or people who are in a domain they are not familiar with
  - I need this functionality. Then, you pick another piece and build it. Then, you try to put the pieces together

### Complexity

1. Design that can completely eliminate complexity

- Eliminate the need to work on special cases
- Best design on complexity
- We can't eliminate all complexity

2. Modular design, we try to hide complexity

- You break the complexity down into smaller, independent components
- Allows maintenance to "hide" complexity, so when you change something, you reduce the amount of information you need to be aware

### Design Twice

- What would be your second take on this problem?
- How would you approach this problem differently?
- Sometimes, our first idea isn't the ideal one
  - When forced to thing beyond our first idea, usually the second idea is better
- High-level design isn't as time-expensive, therefore, we're talking about 1-2% of the total time to build the system. The trade-off is worth it
  - And a good design gives you way more that 1-2%
- If you take one idea, in design, and push it too far, you'll likely end up in a bad place
  - Balance them off. You learn from experience

### Deep vs Shallow Modules

- How do we eliminate or manage complexity?
- Complexity of the interface vs. Functionality in the Module

- Deep: Simple interface with robust functionality
  - It gives us leverage against complexity
  - No cognitive load
  - Inside the module, there's a lot going on that the "user" doesn't need to be aware of
  - Ideal: Most functionality possible for the simplest possible interface
- Shallow: Complext interface with poor functionality
  - It doesn't doo much hiding

### Error Handling

- Error handling is a big source of complexity
- Where we find the weird, special cases we have to deal with
- How can we reduce the impact error handling has in complexity?
- Every exception you throw imposes complexity on the user of your class
  - Reduce the number of exception
