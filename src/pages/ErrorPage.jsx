import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routes from './../routes/routes.json';

const ErrorPage = () => {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((preState) => preState - 1);
      }, 1000);
    }
    if (timer === 0) {
      navigate(routes.HOME);
    }
  }, [timer, navigate]);

  return (
    <>
      <h1>Error: 404 page not found!!!</h1>
      <h4>
        Please click the link <Link to={routes.HOME}>Home</Link> to redirect the
        home page.
      </h4>
      <p>You will redirect to Home page in {timer} second.</p>
    </>
  );
};

export default ErrorPage;
