import * as React from "react";

function SvgQuestionSmall(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 14.4V12h.8a2.4 2.4 0 002.4-2.4v-.16a2.24 2.24 0 00-2.24-2.24H12a2.4 2.4 0 00-2.4 2.4m1.6 7.2h1.6"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgQuestionSmall;
