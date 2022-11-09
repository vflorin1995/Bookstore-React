import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/Books/allbooks';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  function remove() {
    dispatch(removebook(id));
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
