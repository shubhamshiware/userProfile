/* eslint-disable react-refresh/only-export-components */
import { Button, Col, Row } from 'react-bootstrap';
import { backgroundColorHoC } from '../../hoc/backgroundColorHoC';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import routes from './../../routes/routes.json';
import { UserContext } from '../../contexts/UserContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { loginHandler: ContextLoginHandler } = useContext(AuthContext);
  const { setUserDataHandler } = useContext(UserContext);
  const navigate = useNavigate();

  const resetForm = () => {
    setUsername('');
    setPwd('');
    setErrorMsg('');
  };

  const loginHandler = () => {
    setErrorMsg('');
    // genric validation
    if (!(username && pwd && username.length > 3 && pwd.length > 3)) {
      setErrorMsg('Enter valid username & password');
      return;
    }
    setIsLoading(true);
    // API call but fake login logic
    if (username === pwd) {
      // Login success
      setTimeout(() => {
        setIsLoading(false);
        ContextLoginHandler();
        setUserDataHandler({ username });
        navigate(`/${routes.PROFILES}`);
      }, 3000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setErrorMsg('Incorrect username or password !!!');
      }, 3000);
    }
  };

  return (
    <div className="m-3">
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!isLoading && (
        <>
          <Row className="mt-3 md-3">
            <Col>
              <label htmlFor="login">Username</label>
            </Col>
            <Col>
              <input
                type="text"
                id="login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-3 md-3">
            <Col>
              <label htmlFor="pwd">Password</label>
            </Col>
            <Col>
              <input
                type="password"
                id="pwd"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-3 md-3">
            <Col>
              <Button variant="primary" onClick={loginHandler}>
                Login
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={resetForm}>
                Reset
              </Button>
            </Col>
          </Row>
          {errorMsg && (
            <Row className="mt-3 md-3">
              <p className="fw-bold text-danger">{errorMsg}</p>
            </Row>
          )}
        </>
      )}
    </div>
  );
};

export default backgroundColorHoC(LoginForm);
