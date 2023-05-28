import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";
ContainerContent.propTypes = {
  children: PropTypes.element,
};

function ContainerContent(props) {
  const { children } = props;
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
        @media (max-width: ${theme.breakpoints.values.lg - 1}px) {
          padding: 0 20px;
        }
      `}
    >
      {children}
    </div>
  );
}

export default ContainerContent;
