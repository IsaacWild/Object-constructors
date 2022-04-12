// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

const playerThree = new Player("Isaac", "L");

function Book(title, author, pages, readbook) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readbook = readbook
  this.info = function(){
    return title + " by " + author+ " ," + pages + " pages, " + readbook
    console.log(theHobbit.info());
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295','not  yet read');
