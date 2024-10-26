import React, { useState } from 'react';
import '../style/Form.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        publication_year: ''
    })

    const navigate = useNavigate()

    // const [error, setError] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        console.log(formData);

    }

    const handleSubmit = async () => {
        try {
            toast.success('Book added successfully') 
            navigate('/')
            await axios.post(`${BASE_URL}/books`, formData)
            // console.log(response);

        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    return (
        <div className='book-form'>
            <h2>Add a Book</h2>
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

export default AddBook;