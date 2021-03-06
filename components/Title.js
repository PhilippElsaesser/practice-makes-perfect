/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";


const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const headlineStyles = css`
  margin-top: 0;
  margin-block-end: 0;
`;

const sublineStyles = css`
  margin: 0;
`;

const hrStyles = css`
  width: 100%;
`

export const Title = () => (
  <div css={containerStyles}>
    <h1 css={headlineStyles}>Practice <span className="primary">makes</span> Perfect</h1>
    <hr css={hrStyles}/>
    <h2 css={sublineStyles}>when it comes to <span className="primary">RxJS</span></h2>
  </div>
);