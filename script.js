// let myLibrary = [];
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

    toggleRead(){
        console.log("toggle read");
        read = !read;
    }
}

class Library{
    constructor(){
        this.libraryArray = [];
        console.log("Initialize Library.");
    }

    createBookEntry(title, author, numberOfPages, read){
        let newBookEntry = new Book(title, author, numberOfPages, read);
        this.libraryArray.push(newBookEntry);
        console.log(newBookEntry);
        //     ClearDisplay();
        //     DisplayLibrary(myLibrary);
    }

    removeBookEntry(id){

        let removeIndex;

        this.libraryArray.forEach(book => {
            if(book.id == id){    
            removeIndex = this.libraryArray.indexOf(book);
            } 
        })

        let newLibrary = this.libraryArray.splice(removeIndex, 1);
        console.log("Removed Entry from Library");

        
    }

}


class LibraryDisplay{

    constructor(library){

        this.library = library;

        this.addBookModal = document.querySelector("dialog");
        const showAddBookModal = document.querySelector(".add-book");
        showAddBookModal.addEventListener("click", () => {this.addBookModal.showModal();});


        const formCancel = document.querySelector("#input-cancel");
        const formSubmit = document.querySelector("#input-submit");

        formCancel.addEventListener("click", ()=> {this.addBookModal.close();});
        formSubmit.addEventListener("click", (event) =>{this.submitNewBook(this);});

        console.log("Initialize Library Display.");
    }

    submitNewBook(libraryDisplay){
        event.preventDefault();
        libraryDisplay.updateDisplay();
        let title = newBookTitle.value;
        let author = newBookAuthor.value;
        let pages = newBookPages.value;
        let read = newBookRead.checked;

        libraryDisplay.library.createBookEntry(title, author, pages, read);
        
        libraryDisplay.addBookModal.close();
        libraryDisplay.updateDisplay(this.library);
        console.log("Book Submitted.");
        
    }

    
    
    createBookCard(book){
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        
        cardDiv.id = book.id;

        const titleAuthorDiv = document.createElement("div");
        titleAuthorDiv.classList.add("title-author-container");

        const numberReadDiv = document.createElement("div");
        numberReadDiv.classList.add("number-read-container");

        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.setAttribute('data-id', book.id);
        
        const removeTooltip = document.createElement("span");
        removeTooltip.classList.add("tooltip-text");
        removeTooltip.textContent = "Remove from Library";

        removeBookButton.appendChild(removeTooltip);

        cardDiv.appendChild(titleAuthorDiv);
        cardDiv.appendChild(numberReadDiv);


        const bookTitle = document.createElement("h1");
        const bookAuthor = document.createElement("h3");
        const numberPages = document.createElement("p");
        
        const finishedReading = document.createElement("input");
        finishedReading.setAttribute('type', "checkbox");
        finishedReading.addEventListener('change', ()=> {
            
            book.toggleRead()
        });


        const bookIcon = document.createElement("span");
        bookIcon.classList.add("material-symbols-outlined");
        bookIcon.textContent = "book";

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

    updateDisplay(){
        mainContentPage.innerHTML = "";
        console.log("Clear Display.");
        this.library.libraryArray.forEach((book) => this.createBookCard(book))
        console.log("Update Display.");
    }

}


// function CreateBookCard(book)
// {
//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");
    
//     cardDiv.id = book.id;

//     const titleAuthorDiv = document.createElement("div");
//     titleAuthorDiv.classList.add("title-author-container");

//     const numberReadDiv = document.createElement("div");
//     numberReadDiv.classList.add("number-read-container");

//     const removeBookButton = document.createElement("button");
//     removeBookButton.classList.add("remove-book-button");
//     removeBookButton.setAttribute('data-id', book.id);
    
//     const removeTooltip = document.createElement("span");
//     removeTooltip.classList.add("tooltip-text");
//     removeTooltip.textContent = "Remove from Library";

//     removeBookButton.appendChild(removeTooltip);

//     cardDiv.appendChild(titleAuthorDiv);
//     cardDiv.appendChild(numberReadDiv);


//     const bookTitle = document.createElement("h1");
//     const bookAuthor = document.createElement("h3");
//     const numberPages = document.createElement("p");
    
//     const finishedReading = document.createElement("input");
//     finishedReading.setAttribute('type', "checkbox");
//     finishedReading.addEventListener('change', ()=> {
        
//         book.toggleRead()
//     });


//     const bookIcon = document.createElement("span");
//     bookIcon.classList.add("material-symbols-outlined");
//     bookIcon.textContent = "book";

//     bookTitle.textContent = book.title;
//     bookTitle.classList.add("book-title");
//     titleAuthorDiv.appendChild(bookIcon);
//     titleAuthorDiv.appendChild(bookTitle);

//     bookAuthor.textContent = book.author;
//     bookAuthor.classList.add("book-author");
//     titleAuthorDiv.appendChild(bookAuthor);

//     numberPages.textContent = book.numberOfPages + ' pages';
//     numberPages.classList.add("number-pages");
//     numberReadDiv.appendChild(numberPages);


    
//     if(book.read == true){
//         finishedReading.checked = true;
//     }
//     else{
//         finishedReading.checked = false;
//     }

//     finishedReading.classList.add("finished-reading");
//     numberReadDiv.appendChild(finishedReading);

    
//     const removeIcon = document.createElement("span");
//     removeIcon.classList.add("material-symbols-outlined");
//     removeIcon.textContent = "close";

//     removeBookButton.appendChild(removeIcon);
//     numberReadDiv.appendChild(removeBookButton);
//     removeBookButton.addEventListener("click", ()=> {
//         RemoveBookEntry(book.id);
//     });


//     mainContentPage.appendChild(cardDiv);
// }

// function ClearDisplay(){
//     mainContentPage.innerHTML = "";
// }


// function DisplayLibrary(library){

//     library.forEach((book) => CreateBookCard(book))
//     console.log(myLibrary);

// }


const myLibrary = new Library(); //create a library with a libraryArray inside. 
const myLibraryDisplay = new LibraryDisplay(myLibrary); //create a new libraryDisplay using myLibrary. 