import React from 'react';
import Book from './Book';
import '../style/BookList.css';
import booksData from '../data/books'

const BookList = () => {

    return (
        <>
            <div className='list'>
                {booksData && booksData.map((book) => (
                    <Book book={book} key={book.id} />
                ))}
            </div>
        </>
    )
}

export default BookList;