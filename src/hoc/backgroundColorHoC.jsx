import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const backgroundColorHoC = (Component, bgColor) => {
  const BackgroundHoc = (props) => {
    const { isDark } = useContext(ThemeContext);
    const conatinerStyle = {
      margin: '15px',
      padding: '15px',
      border: 'solid 2px #ddd',
      display: 'inline-block',
      backgroundColor: bgColor ? bgColor : isDark ? 'black' : '#f1f1f1',
    };
    return (
      <div style={conatinerStyle}>
        <Component {...props} />
      </div>
    );
  };

  return BackgroundHoc;
};
