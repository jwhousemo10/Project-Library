# Project-Library

A small Library app. 

1. Array: all of the book objects are going to be stored in an array.
2. Object Constructor: a constructor for books is needed. 
3. Function: add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array.
4. all book objects should have a unique id, which can be generated using crypto.randomUUID(). This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged.
5. Loop: a function that loops through the array.
6. Display: display each book on the page, in a table, or each on their own “card”.
7. User input: Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages, whether it’s been read. 
8. Button, Remove: Add a button on each book’s display to remove the book from the library.
9. Button, Read: Add a button on each book’s display to change its read status. Create Book prototype function that toggles a book instance’s read status.