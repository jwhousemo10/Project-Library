const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

addBookToLibrary("Insomnia", "Stephen King", 805, true);
console.log(myLibrary);

// book display
function displayBooks() {
  const container = document.getElementById("books-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.hasRead ? "Read" : "Not read"}</p>
    `;

    container.appendChild(bookCard);
  });
}

addBookToLibrary("The Shining", "Stephen King", 447, false);
displayBooks();

// add a "new book" button, and Form
const newBookBtn = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form");

newBookBtn.addEventListener("click", () => {
  bookForm.style.display = bookForm.style.display === "none" ? "block" : "none";
});

bookForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const hasRead = document.getElementById("hasRead").checked;

    addBookToLibrary(title, author, pages, hasRead);
    displayBooks();

     // Reset form
    bookForm.reset();
    bookForm.style.display = "none";
});