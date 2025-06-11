let myLibrary = [];
const mainContentPage = document.querySelector(".main-content");

const addBookModal = document.querySelector("dialog");
const showAddBookModal = document.querySelector(".add-book");
showAddBookModal.addEventListener("click", () => {addBookModal.showModal();});


const newBookTitle = document.querySelector("#input-title");
const newBookAuthor = document.querySelector("#input-author");
const newBookPages = document.querySelector("#input-numOfPages");
const newBookRead = document.querySelector("#input-finished-reading");

const formCancel = document.querySelector("#input-cancel");
const formSubmit = document.querySelector("#input-submit");


const submitFunction = function(event)
{
    ClearDisplay();
    
    let title = newBookTitle.value;
    let author = newBookAuthor.value;
    let pages = newBookPages.value;
    let read = newBookRead.checked;

 

 CreateBookEntry(title, author, pages, read);
 event.preventDefault();
 addBookModal.close();
 DisplayLibrary(myLibrary);
}

formCancel.addEventListener("click", ()=> {addBookModal.close();});
formSubmit.addEventListener("click", submitFunction);


const bookObject = {
    title: "",
    author: "",
    numberOfPages: "",
    read: false,
    id: "",
    toggleRead: function(){}
}


function Book(title, author, numberOfPages, read){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.toggleRead = function(){
        console.log("toggle read");
        this.read = !this.read;
  };

  this.id = self.crypto.randomUUID();


};

function CreateBookEntry(title, author, numberOfPages, read)
{
    let newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
    
}

function RemoveBookEntry(id)
{
    let removeIndex;
    
   myLibrary.forEach(book => {
       
        if(book.id == id){
                
            removeIndex = myLibrary.indexOf(book);
            console.log(removeIndex);
        } 
    })

    console.log(myLibrary[removeIndex]);
    let newLibrary = myLibrary.splice(removeIndex, 1);
    //console.log(newLibrary);
   
    ClearDisplay();
    DisplayLibrary(myLibrary);

}


function CreateBookCard(book)
{
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
        RemoveBookEntry(book.id);
    });


    mainContentPage.appendChild(cardDiv);
}

function ClearDisplay(){
    mainContentPage.innerHTML = "";
}

function DisplayLibrary(library){

    library.forEach((book) => CreateBookCard(book))
    console.log(myLibrary);

}


