import * as React from "react";

function SvgSpotify(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 11-16 0zm8.24-2.35c-1.729-.141-3.489.07-4.932.58l-.355-1.005c1.6-.566 3.512-.79 5.375-.638 1.86.153 3.71.685 5.166 1.673l-.6.883c-1.263-.859-2.922-1.35-4.653-1.493zm-4.692 2.875c3.676-.65 6.238-.317 8.361 1.207l.622-.867c-2.451-1.76-5.35-2.066-9.169-1.39l.186 1.05zm.358 2.266a11.144 11.144 0 013.618-.244c1.276.125 2.49.485 3.416 1.136l.613-.873c-1.123-.79-2.534-1.188-3.924-1.325a12.21 12.21 0 00-3.976.27l.253 1.036z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSpotify;
