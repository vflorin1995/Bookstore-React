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
    <>
      <form onSubmit={(e) => { ana(e); }}>
        <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input onChange={(e) => setAuthor(e.target.value)} className="author" placeholder="Author" required />
        <select onChange={(e) => setOptionss(e.target.value)}>
          {opti.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default AddBook;
