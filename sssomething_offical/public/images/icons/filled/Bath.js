import * as React from "react";

function SvgBath(props) {
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
        d="M6.133 7.674A2.667 2.667 0 018.8 5.008h1.6v1.066h1.067V3.941H8.8a3.733 3.733 0 00-3.733 3.733v3.734H4v1.066h1.067v1.6c0 1.881 1.39 3.437 3.2 3.696v2.17h1.066v-2.132h5.334v2.133h1.066V17.77a3.734 3.734 0 003.2-3.696v-1.6H20v-1.066H6.133V7.674z"
        fill="currentColor"
      />
      <path d="M12.533 8.208h-3.2V7.14h3.2v1.067z" fill="currentColor" />
    </svg>
  );
}

export default SvgBath;
