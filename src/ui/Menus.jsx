import PropTypes from "prop-types";

function Menus({ children }) {
  return <div>{children}</div>;
}

Menus.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Menus;
