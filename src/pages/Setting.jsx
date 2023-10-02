/* eslint-disable react-refresh/only-export-components */
import { privatePageHoc } from '../hoc/privatePageHoc';
import { backgroundColorHoC } from './../hoc/backgroundColorHoC';

const Setting = () => {
  return (
    <>
      <h2>User Setting Page</h2>
    </>
  );
};

// Example of hoc chaining
export default backgroundColorHoC(privatePageHoc(Setting));
