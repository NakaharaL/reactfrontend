// components/MyComponent.jsx
import PropTypes from "prop-types";
import "./MyComponent.css"

const MyComponent = (props) => {
  const { title = "Default Title", description = "Default Description" } = props;

  return (
    <div className="my-component-container">
      <h1 className="my-component-title">{title}</h1>
      <p className="my-component-description">{description}</p>
    </div>
  );
};

MyComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MyComponent;