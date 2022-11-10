import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeABook } from '../redux/Books/allbooks';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  function remove() {
    console.log(id);
    dispatch(removeABook(id));
  }

  return (
    <>
      <h2>{ title }</h2>
      <h3>{ author }</h3>
      <button onClick={() => { remove(); }} type="button">Remove</button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
