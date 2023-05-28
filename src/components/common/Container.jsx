import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";

const Container = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        max-width: calc(100% - 48px);
        margin: 0 auto;
        @media (max-width: ${theme.breakpoints.values.lg - 1}px) {
          padding: 0 20px;
        }
      `}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
