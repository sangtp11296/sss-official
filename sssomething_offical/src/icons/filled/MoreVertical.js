import * as React from "react";

function SvgMoreVertical(props) {
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
        d="M11.727 4.5a.227.227 0 100 .455.227.227 0 000-.455zm-1.227.227a1.227 1.227 0 112.455 0 1.227 1.227 0 01-2.455 0zm1.227 7.046a.227.227 0 100 .454.227.227 0 000-.454zM10.5 12a1.227 1.227 0 112.455 0 1.227 1.227 0 01-2.455 0zm1.227 7.046a.227.227 0 100 .454.227.227 0 000-.454zm-1.227.227a1.227 1.227 0 112.454 0 1.227 1.227 0 01-2.454 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreVertical;
