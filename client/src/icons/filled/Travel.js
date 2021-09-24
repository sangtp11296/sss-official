import * as React from "react";

function SvgTravel(props) {
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
        d="M10.22 21c.309 0 .591-.17.763-.438l4.019-6.72h4.713c.71 0 1.285-.6 1.285-1.342 0-.743-.574-1.342-1.285-1.342h-4.713l-4.02-6.72A.902.902 0 0010.22 4c-.6 0-1.037.608-.857 1.217l1.783 5.94H6.433l-1.157-1.61a.405.405 0 00-.343-.179h-.505c-.283 0-.489.287-.412.573L4.72 12.5l-.703 2.559c-.077.286.129.573.412.573h.505a.405.405 0 00.343-.18l1.157-1.61h4.713l-1.783 5.941c-.18.609.257 1.217.857 1.217z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTravel;
