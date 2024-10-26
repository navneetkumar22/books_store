import React from 'react';
import '../style/Book.css';
import bookIcon from '../assets/book.png';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../api/books';
import { toast } from 'react-toastify';

const Book = (book) => {
    const { _id, title, author, genre, publication_year } = book.book;

    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const isTrue = window.confirm('Do you want to delete this book');
        console.log(isTrue);

        if (isTrue) {
            await deleteBook(id);
            toast.success('Book deleted successfully')

            setTimeout(() => {
                window.location.reload(false)
            }, 1000)

        }
    }

    return (
        <div className='book-card'>
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
                <button className="edit-button" onClick={() => navigate(`/editbook/${_id}`)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    )
}

export default Book;