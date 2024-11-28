import React from "react";
import "./Loader.scss";
import { PropagateLoader } from "react-spinners";

function Loader(props: any) {
  return (
    <>
      {props?.isLoading && (
        <div className="loader">
          <PropagateLoader loading={props?.isLoading} color="#a7f1e6" />
        </div>
      )}
    </>
  );
}

export default Loader;
