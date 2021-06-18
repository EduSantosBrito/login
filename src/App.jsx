import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

const App = ({ name }) => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
