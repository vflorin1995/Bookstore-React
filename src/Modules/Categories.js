import { useDispatch } from 'react-redux';
import { checkstatus } from '../redux/Categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  function check() {
    dispatch(checkstatus());
  }
  return (
    <>
      <h1>Categories</h1>
      <button onClick={() => check()} type="button">Check status</button>
    </>
  );
};

export default Categories;
