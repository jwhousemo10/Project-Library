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