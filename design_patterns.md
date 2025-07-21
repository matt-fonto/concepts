# Design Patterns

- Proven solutions to recurring design problems
- Help build flexible, maintainable and reusable code

https://refactoring.guru/design-patterns

- General concepts for solving a particular problem
- Pattern: more high-level solution than an algorithm, which is the implementation

- Algorithm: cooking recipe -> clear steps to achieve a goal
- Pattern: blueprint -> you can see features and results, but open for implementation

### What does the pattern consist of?

- Intent: describes problem and solution
- Motivation: further explains problem and the solution the pattern makes possible
- Structure: shows each part of the pattern and how they relate
- Code example

### History

- They are typical solutions to common problems in object-oriented designed
  - When a solution gets repeated over and over, someone puts a name to it and describe the solution
- Book: Design Patterns: Elements of Reusable Object-Oriented Software

### Why learn them?

- They are a toolkit of tried and tested solutions to common problems in software
- Teaches us how to solve all sorts of problems using principles of object-oriented design
- Define a common language on the team and industry

### Classification of patterns

## Creational: Object Creation

Instead of creating objects directly, these patterns give you more flexibility in how objects come into existence

- When you...
  want only one instance -> Singleton
  want configurable construction -> Builder
  polymorphic creation -> Factory

- Singleton: Ensure a class has only one instance
  - Promotes Single Instance: prevents multiple copies of resources/state
  - Global access point: easy to use anywhere
  - A singleton is basically a glorified global variable

```ts
class Logger {
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  log(msg: string) {
    console.log(msg);
  }
}

const logger = Logger.getInstance();
```

- Builder: separates the construction of a complex object from its representation
  - Allows the creation of complex objects in a more systematic
  - When to use it:
    - Many optional params
    - Immutable final object
    - Improved API readability

```ts
class User {
  private constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly email?: string
  ) {}

  static builder() {
    return new UserBuilder();
  }
}

class UserBuilder {
  private name!: string;
  private age!: number;
  private email?: string;

  setName(name: string) {
    this.name = name;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  build(): User {
    if (!this.name || this.age === null) {
      throw new Error("name and age are required");
    }

    return new User(this.name, this.age, this.email);
  }
}

const user = User.builder()
  .setName("John")
  .setAge(30)
  .setEmail("john@email.com")
  .build();
```

- Factory: Encapsulates object creation, returning instances through a common interface
  - Decouples the code from concrete classes
  - When to use:
    - Centralize and standardize creation logic
    - Support multiple "families" of products
    - Hide concrete types from callers

```ts
// common interface
interface Notification {
  send(message: string): void;
}

// concrete implementations
class EmailNotification implements Notification {
  send(msg: string) {
    console.log(`Email: ${msg}`);
  }
}

class SMSNotification implements Notification {
  send(msg: string) {
    console.log(`SMS: ${msg}`);
  }
}

// factory
class NotificationFactory {
  static create(type: "email" | "sms"): Notification {
    switch (type) {
      case "email":
        return new EmailNoficiation();
      case "sms":
        return new SMSNotification();
      default:
        throw new Error("Unsupported type");
    }
  }
}

// usage
const notifier = NotificationFactory.create("sms");
notifier.send("Hello world");
```

## Structural: The Relation Between Objects

How objects relate to each other. Blueprints for building larger structures from individual pieces

- Building larger structures from individual pieces

- Facade: Provides a simple interface to a complex subsystem, hiding its internal details
  - When to use:
    - Simplify interaction with complex classes
    - Decouple client code from implementation details
    - Provide stable API when subsystems evolve

```ts
// Subsystem classes
class AuthService {
  login(user: string, pass: string) {
    // do something
    console.log("auth login");
  }
}

class DataService {
  fetchData() {
    // do something
    console.log("data fetched");
  }
}

class Logger {
  log(message: string) {
    console.log("log:", message);
  }
}

// facade
class AppFacade {
  private auth = new AuthService();
  private data = new DataService();
  private logger = new Logger();

  initialize(user: string, pass: string) {
    this.logger.log("initializing app");
    this.auth.login(user, pass);
    this.data.fetchData();
    this.logger.log("initialization complete");
  }
}

// usage
const app = new AppFacade();
app.initialize("john", "secret");
```

- Adapter

## Behavioral: Object Communication

How objects communicate and interact to distribute responsibility

- Strategy
- Observer
