const myLibrary = [];
const mainContentPage = document.querySelector(".main-content");

const bookObject = {
    title: "",
    author: "",
    numberOfPages: "",
    read: false,
    id: "",

}


function Book(title, author, numberOfPages, read){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;

  this.id = self.crypto.randomUUID();


};

function CreateBookEntry(title, author, numberOfPages, read)
{
    let newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
}


function CreateBookCard(book)
{
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    
    console.log(book.id);

    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const numberPages = document.createElement("p");
    const finishedReading = document.createElement("p");

    bookTitle.textContent = book.title;
    bookTitle.classList.add("book-title");
    cardDiv.appendChild(bookTitle);

    bookAuthor.textContent = book.author;
    bookAuthor.classList.add("book-author");
    cardDiv.appendChild(bookAuthor);

    numberPages.textContent = book.numberOfPages;
    numberPages.classList.add("number-pages");
    cardDiv.appendChild(numberPages);

    finishedReading.textContent = book.read;
    finishedReading.classList.add("finished-reading");
    cardDiv.appendChild(finishedReading);

    mainContentPage.appendChild(cardDiv);
}

function DisplayLibrary(library){

    library.forEach((book) => CreateBookCard(book))

}

CreateBookEntry("Dracula", "Bram Stoker", 300, true);
CreateBookEntry("Salem's Lot", "Stephen King", 476, false);

DisplayLibrary(myLibrary);
