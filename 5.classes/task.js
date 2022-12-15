class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
    }

    fix() {
      this.state *= 1.5;
    } 
  
    set state(number) {
      if (number < 0) {
        this._state = 0;      
      } else if (number > 100) {
          this._state = 100;
      } else {
          this._state = number;
      }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
  constructor() {
    super();
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(author);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author) {
    super();
    this.author = author;
    this.type = 'novel'
  }
}

class FantasticBook extends Book {
  constructor(author) {
    super();
    this.author = author;
    this.type = 'fantastic'
  }
}

class DetectiveBook extends Book {
  constructor(author) {
    super();
    this.author = author;
    this.type = 'detective'
  }
}

class Library {
  constructor (name) {
    this.name =  name;
    this.books = []; 
  }    

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);    
    }
  }
  
  findBookBy(type, value) {
    for (let i = 1; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      } else {
          return null;
        }
    }
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let bookFinded = this.books[i];
        this.books.splice(bookFinded);
        return bookFinded;
      } else {
          return null;
        }
    }
  }
}
