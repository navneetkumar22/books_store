import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/Form.css';
import { updateBook } from '../api/books'

const EditBook = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        publication_year: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        console.log(formData);

    }

    const handleSubmit = async () => {
        try {
            navigate('/')
            await updateBook(id, formData)
            // console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='book-form'>
            <h2>Edit Book</h2>
            <form>
                <div>
                    <input type="text" name="title" value={formData.title} placeholder='Title' onChange={handleChange} />
                    <input type="text" name="author" value={formData.author} placeholder='Author' onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="genre" value={formData.genre} placeholder='Genre' onChange={handleChange} />
                    <input type="number" name="publication_year" value={formData.publication_year} placeholder='Publication Year' onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default EditBook;