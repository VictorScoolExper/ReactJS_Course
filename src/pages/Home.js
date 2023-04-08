import {Link, useNavigate} from 'react-router-dom';

function HomePage() {
  // useNavigate is useful when submitting forms or when timers expire
  // the example if using it in a button is incorrectly applied but useful in functions
  // useNavigate technical term is called "Programtically imparative"
  const navigte = useNavigate();

  function navigateHandler(){
    navigte('products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">The list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
