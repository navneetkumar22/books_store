import React from 'react';
import '../style/Book.css';
import bookIcon from '../assets/book.png';
import shareIcon from '../assets/whatsapp.png';

const pdfLink = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const Book = (book) => {
    const { id, title, author} = book.book;

    const handleShare = (bookTitle, bookAuthor) => {
        const message = `Check out this book: ${bookTitle} - ${bookAuthor} - ${pdfLink}`;
        const sharePdf = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(sharePdf, '_blank')
    }

    return (
        <div className='demo' key={id}>
            <div className='book-card'>
                <p>{author}</p>
                <img src={bookIcon} alt="Book Cover" />
                <h3>{title}</h3>
            </div>
            <div className='details'>
                <h5>{title}</h5>
                <h6>{author}</h6>
            </div>
            <div className="actions">
                <img src={shareIcon} alt='whatsapp' onClick={() => handleShare(title, author)} />
            </div>
        </div>
    )
}

export default Book;