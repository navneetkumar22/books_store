import React, { useEffect, useState } from 'react';
import Book from './Book';
import '../style/BookList.css';
import { getAllBooks } from '../api/books';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [sortOrder, setSortOrder] = useState('asc');

    const fetchBooks = async () => {
        try {
            const data = await getAllBooks()
            console.log(data);
            setBooks(data.books)

        } catch (error) {
            console.log('Error fetching books ', error);
        }
    }

    const handleSearch = e => {
        const query = e.target.value.toLowerCase();
        setSearchInput(query)

        const searchedBooks = books.filter(
            book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
        )

        setBooks(searchedBooks)
    }

    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);

        const sortedBooks = [...books].sort((a, b) =>
            order === 'asc'
                ? a.publication_year - b.publication_year
                : b.publication_year - a.publication_year
        );
        setBooks(sortedBooks);
    };

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
            <h1>Book list</h1>
            <div className='search'>
                <input type='text' value={searchInput} onChange={handleSearch} placeholder='Search by title or author' />
                <div>
                    <label>Sort by Publication Year:</label>
                    <select value={sortOrder} onChange={handleSort}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className='list'>
                {books && books.map((book) => (
                    <Book book={book} key={book._id} />
                ))}
            </div>
        </>
    )
}

export default BookList;