function BookShow({book, ondDelete}) {

    const handleClick = () => {
        ondDelete(book.id);
    };

    return (
        <div className="book-show">
            {book.title}
            <div className="actions">
                <button className="delete" onClick={handleClick}>Delete</button>
            </div>
        
        </div>
    );
}

export default BookShow;

