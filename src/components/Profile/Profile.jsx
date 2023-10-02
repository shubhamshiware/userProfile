/* eslint-disable react-refresh/only-export-components */
import { useContext } from 'react';
import { backgroundColorHoC } from '../../hoc/backgroundColorHoC';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = ({ fname, email = 'NA', avatar, deleteHandler, userIndex }) => {
  const { isDark } = useContext(ThemeContext);
  const { isUserLogin } = useContext(AuthContext);

  return (
    <div className={isDark ? styles.darkTheme : ''}>
      <h5>{fname}</h5>
      <p>{email}</p>
      <img src={avatar} alt="user-image" width="200" height="200" />
      {isUserLogin && (
        <div>
          <Button
            variant="secondary"
            className={styles.delBtn}
            onClick={() => {
              deleteHandler(userIndex);
            }}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default backgroundColorHoC(Profile, 'antiquewhite');

Profile.propTypes = {
  fname: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,
  deleteHandler: PropTypes.func.isRequired,
  userIndex: PropTypes.number.isRequired,
};
