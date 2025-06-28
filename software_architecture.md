# Software Architecture

- Similar to architects, we also must blend art and science to deliver satisfactory solutions. Instead of bricks, we solve it with code

## 1. Definition

- What is software architecture?

  > "Architecture is about the important stuff. Whatever that is." - Ralph Johnson

  - Focus on structure, instead of implementation details
  - Anticipate expensive choices
  - Core decisions for high quality

### Example: E-commerce

- What should the system do? (Functional requirements)

  - Search inventory
  - Check reviews
  - Buy products
  - Review past orders

- How should the system behave? (Non-functional requirements -> `aka - ilities`)

  - Functionality, usability, reliability, effiency, etc

  - Developed/maintainable for several years -> maintainability
  - Able to serve millions of users -> scalability
  - Available 24/7 -> reliability
  - Short response latency -> efficiency

- Besides functional and non-functional requirements, we might also have `Restrictions`
  - Legal compliance
  - Cost
  - Time-to-market
