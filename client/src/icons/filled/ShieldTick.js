import * as React from "react";

function SvgShieldTick(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.735 4.07a.533.533 0 01.53 0l7.466 4.267A.533.533 0 0120 8.8v.768c0 4.835-3.205 9.083-7.854 10.412a.534.534 0 01-.293 0A10.828 10.828 0 014 9.568V8.8c0-.191.103-.368.269-.463l7.466-4.267zm-.192 11.355l4.607-5.759L15.317 9 11.39 13.91 8.608 11.59l-.683.82 3.618 3.015z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShieldTick;
