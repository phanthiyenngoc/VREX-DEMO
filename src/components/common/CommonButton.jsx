import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const CommonButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

CommonButton.propTypes = {
  children: PropTypes.any,
  startIcon: PropTypes.node,
  onClick: PropTypes.func,
  css: PropTypes.any,
  variant: PropTypes.string, // contained , text , outlined
};
CommonButton.defaultProps = {
  variant: "contained",
};

export default CommonButton;
