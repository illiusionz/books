import BookShow from "./BookShow";

function BookList({ books, ondDelete }) {


    const renderedBooks = books.map((book) => {
        return <BookShow ondDelete={ondDelete} key={book.id} book={book} />;
    });


    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
