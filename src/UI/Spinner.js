import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const Spinner = () => {
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <div>
      <ClipLoader css={override} sizeUnit={"px"} size={150} color={"#123abc"} />
    </div>
  );
};

export default Spinner;
