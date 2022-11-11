import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addABook } from '../redux/Books/allbooks';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [optionss, setOptionss] = useState('');

  const opti = ['action', 'crime', 'fantasy', 'anime', 'horror'];

  function ana(e) {
    e.preventDefault();
    dispatch(addABook(uuidv4(), title, author, optionss));
    e.target.reset();
  }

  return (
    <div className="add-book-form">
      <h2 className="form-heading">ADD NEW BOOK</h2>
      <form onSubmit={(e) => { ana(e); }}>
        <input className="titleInput" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input className="authorInput" placeholder="Book author" onChange={(e) => setAuthor(e.target.value)} required />
        <select id="categories" onChange={(e) => setOptionss(e.target.value)}>
          {opti.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <button className="primary-btn" type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
