import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h2>{ title }</h2>
    <h3>{ author }</h3>
    <button type="button">Remove</button>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
