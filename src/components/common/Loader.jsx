import PropTypes from "prop-types";
import { Suspense } from "react";
import Loading from ".//Loading";
Loader.propTypes = {
  children: PropTypes.any,
};

export default function Loader(props) {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
}
