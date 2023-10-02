import { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import styles from './Profiles.module.css';
import { deleteUsers, getUsers } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import routes from './../../routes/routes.json';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Profiles = ({ page = '1' }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then(({ data }) => {
        setUsers(data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [page]);

  const deleteHandler = (userIndex) => {
    const { id: userId } = users[userIndex];
    deleteUsers(userId).then((isDeleted) => {
      if (isDeleted) {
        const usersData = [...users];
        usersData.splice(userIndex, 1);
        setUsers(usersData);
      }
    });
  };

  const profiles = users.map((user, index) => (
    <Profile
      key={index}
      fname={user.first_name}
      email={user.email}
      avatar={user.avatar}
      deleteHandler={deleteHandler}
      userIndex={index}
    />
  ));

  return (
    <>
      {isLoading && <div>Loader...</div>}

      {!isLoading && (
        <>
          <div>Page: {page}</div>

          {isError && (
            <p className={styles.errorMsg}>
              There is some error, please try later.
            </p>
          )}

          {!isError && <div className={styles.profiles}>{profiles}</div>}

          <div>
            <Button
              onClick={() => {
                const nextPage = page === '1' ? '2' : '1';
                const path = `/${routes.PROFILES}/${nextPage}`;
                navigate(path);
              }}
            >
              Show Page {page === '1' ? '2' : '1'}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;

Profiles.propTypes = {
  page: PropTypes.string,
};
