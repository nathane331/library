let myLibrary = [];
// const mainContentPage = document.querySelector(".main-content");


// const bookObject = {
//     title: "",
//     author: "",
//     numberOfPages: "",
//     read: false,
//     id: "",
//     toggleRead: function(){}
// }


// function Book(title, author, numberOfPages, read){
//     if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor");
//   }
//   this.title = title;
//   this.author = author;
//   this.numberOfPages = numberOfPages;
//   this.read = read;
//   this.toggleRead = function(){
//         console.log("toggle read");
//         this.read = !this.read;
//   };

//   this.id = self.crypto.randomUUID();

// };

const mainContentPage = document.querySelector(".main-content");

const newBookTitle = document.querySelector("#input-title");
const newBookAuthor = document.querySelector("#input-author");
const newBookPages = document.querySelector("#input-numOfPages");
const newBookRead = document.querySelector("#input-finished-reading");



class Book{
    constructor(title, author, numberOfPages, read){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
        this.id = self.crypto.randomUUID();

    }
}

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
        titleAuthorDiv.appendChild(bookIcon);
        titleAuthorDiv.appendChild(bookTitle);

        bookAuthor.textContent = book.author;
        bookAuthor.classList.add("book-author");
        titleAuthorDiv.appendChild(bookAuthor);

        numberPages.textContent = book.numberOfPages + ' pages';
        numberPages.classList.add("number-pages");
        numberReadDiv.appendChild(numberPages);


        
        if(book.read == true){
            finishedReading.checked = true;
        }
        else{
            finishedReading.checked = false;
        }

        finishedReading.classList.add("finished-reading");
        numberReadDiv.appendChild(finishedReading);

        
        const removeIcon = document.createElement("span");
        removeIcon.classList.add("material-symbols-outlined");
        removeIcon.textContent = "close";

        removeBookButton.appendChild(removeIcon);
        numberReadDiv.appendChild(removeBookButton);
        removeBookButton.addEventListener("click", ()=> {
            this.library.removeBookEntry(book.id);
            this.updateDisplay();

        });


    mainContentPage.appendChild(cardDiv);
}

function DisplayLibrary(library){

    library.forEach((book) => CreateBookCard(book))

}

CreateBookEntry("Dracula", "Bram Stoker", 300, true);
CreateBookEntry("Salem's Lot", "Stephen King", 476, false);

DisplayLibrary(myLibrary);