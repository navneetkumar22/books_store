import React from 'react';
import '../style/Book.css';
import bookIcon from '../assets/book.png';
import shareIcon from '../assets/whatsapp.png';

const pdfLink = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const Book = (book) => {
    const { id, title, author, genre, publication_year } = book.book;

    const handleShare = (bookTitle, bookAuthor) => {
        const message = `Check out this book: ${bookTitle} - ${bookAuthor} - ${pdfLink}`;
        const sharePdf = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(sharePdf, '_blank')
    }

    return (
        <div className='book-card' key={id}>
            <img src={bookIcon} alt="Book Cover" className="book-image" />
            <div className="book-details">
                <h3 className="title">{title}</h3>
                <p className="author">{author}</p>
                <div className='genre-year'>
                    <p className="genre">Genre: <span>{genre}</span></p>
                    <p className="year">Year: <span>{publication_year}</span></p>
                </div>
            </div>
            <div className="actions">
                <button className="share" onClick={() => handleShare(title, author)}><span><img src={shareIcon} alt='share' /></span>Share</button>
            </div>
        </div>
    )
}

export default Book;