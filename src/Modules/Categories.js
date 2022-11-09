import { useDispatch, useSelector } from 'react-redux';
import { checkstatus } from '../redux/Categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const statusMsg = useSelector((state) => state.categoriesReducer);

  function check() {
    dispatch(checkstatus());
  }
  return (
    <>
      <h1>Categories</h1>
      <button onClick={() => check()} type="button">Check status</button>
      <p>{statusMsg}</p>
    </>
  );
};

export default Categories;
