# The Odin Project: Library

## Summary

A solution to the challenge provided by [The Odin Project's library lesson](https://www.theodinproject.com/lessons/library).

The challenge was to create a web application that could serve as a library, where the user can add and remove books, also update a book status.

This application is based on an observer design pattern, so that at the very moment the state mutates, each component is re-rendered with the new state, and, on every mutation, the state is stored in the browser's local storage.

You can read more about the observer design pattern [here](https://refactoring.guru/design-patterns/observer).

## Start the project

### On Development Mode
```
  $ yarn install
  $ yarn dev
```

### On Production Mode
```
  $ yarn install
  $ yarn build
```

## Usage

[](./examples/form.png)
[](./examples/book.png)

1. Start by filling the **New Book Form**.
2. Update a book **status** by clicking on that book **status button**.
3. Remove a book from the library by clicking on that book **delete button**
