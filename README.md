

# Node.js Modules and EJS Showcase

This repository demonstrates my learning and implementation of several popular **Node.js modules** like **figlet**, **uuid**, **faker**, and **EJS**. It is not a full project but a **repository to showcase my skills** with Node.js and these modules, focusing on **dynamic content generation** and **templating**.

## Table of Contents
- [Introduction](#introduction)
- [Modules Used](#modules-used)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
  - [UUID](#uuid)
  - [Faker](#faker)
  - [Figlet](#figlet)
  - [EJS Templating](#ejs-templating)
- [Learnings](#learnings)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository serves as a practice-driven exploration of **Node.js**, focusing on integrating useful **Node modules** and **EJS templating**. Through the use of modules like **figlet**, **uuid**, **faker**, and **EJS**, I explored various aspects of Node.js development, such as:

- Generating **unique identifiers** with **uuid**.
- Creating **dynamic, fake data** with **faker**.
- **Rendering dynamic pages** using **EJS**.
- Adding **styled text** in the terminal with **figlet**.

## Modules Used

1. **figlet**  
   Used to generate **styled text** (ASCII art) in the console.

2. **uuid**  
   Generates **unique IDs** for various application purposes, ensuring data consistency.

3. **faker**  
   Generates **random fake data**, such as names, addresses, and emails, useful for testing or creating mock applications.

4. **EJS**  
   A **templating engine** for rendering HTML with dynamic data, embedding JavaScript directly into HTML views.

## Technologies

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework to build web applications and APIs.
- **EJS**: Templating engine to embed JavaScript in HTML files.

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/nandkumar1000/nodejs-modules-ejs.git
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
npm start
```

## Usage

### UUID
Generates unique identifiers for each data entry.

```javascript
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4()); // Outputs a unique ID
```

### Faker
Generates random data, such as fake names, addresses, etc.

```javascript
const faker = require('@faker-js/faker');
console.log(faker.name.findName()); // Outputs a random name
```

### Figlet
Adds styled text output in the terminal.

```javascript
const figlet = require('figlet');
figlet('Hello World!!', function (err, data) {
  if (err) throw err;
  console.log(data); // Outputs 'Hello World!!' in ASCII art style
});
```

### EJS Templating
Renders dynamic HTML views using EJS.

Example route using EJS:

```javascript
app.get('/user', (req, res) => {
  const randomName = faker.name.findName();
  const userId = uuidv4();
  res.render('user', { name: randomName, id: userId });
});
```

## Learnings

Through this repository, I deepened my understanding of:

- Using **Node.js modules** and managing dependencies via **npm**.
- Creating **dynamic and random data** in real-time with **faker**.
- Implementing **EJS templating** to render dynamic web pages.
- Generating **unique IDs** with **uuid** for applications requiring distinct identifiers.
- Adding fun **console text effects** with **figlet**.
