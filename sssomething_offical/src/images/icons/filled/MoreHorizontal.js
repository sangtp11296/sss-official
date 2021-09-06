import * as React from "react";

function SvgMoreHorizontal(props) {
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
        d="M4.727 11.5a.227.227 0 100 .455.227.227 0 000-.455zm-1.227.227a1.227 1.227 0 112.455 0 1.227 1.227 0 01-2.455 0zM12 11.5a.227.227 0 100 .455.227.227 0 000-.455zm-1.227.227a1.227 1.227 0 112.454 0 1.227 1.227 0 01-2.454 0zm8.5-.227a.227.227 0 100 .455.227.227 0 000-.455zm-1.227.227a1.227 1.227 0 112.454 0 1.227 1.227 0 01-2.454 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreHorizontal;
