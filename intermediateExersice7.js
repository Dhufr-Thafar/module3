const books = [
        {       
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                year: 1925,
        },
        {         
                id: 2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960
        },
        { 
                id: 3,
                title: "1984",
                author: "George Orwell",
                year: 1949
        },
        {
                id: 4,
                title: "Brave New World",
                author: "Aldous Huxley",
                year: 1932
        },
        {
                id: 5,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                year: 1951,
        },
        ];

function getBookTitle(bookId) {                  // Use Find function
  const book = books.find((b) => b.id === bookId);
  return book ? book.title : "Book not found";
}

console.log(getBookTitle(1));
console.log(getBookTitle(2));
console.log(getBookTitle(3));
console.log(getBookTitle(4));
console.log(getBookTitle(5));
console.log(getBookTitle(10));

const getOldBooks = () => books.filter((old) => old.year < 1950);         // Use Filter function
console.log(getOldBooks());

function addGenre(books) {              // Map function to Gener classic
        return books.map(book => {
        return {...book,genre: 'classic'};
        });
    }
console.log(addGenre(books));