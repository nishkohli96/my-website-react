import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => (
  <div className="content flex justify-center items-center">
    <CircularProgress color="success" size="5rem" />
  </div>
);

export default Loader;
