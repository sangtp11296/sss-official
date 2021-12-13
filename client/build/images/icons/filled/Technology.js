import * as React from "react";

function SvgTechnology(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={4.5}
        y={4.5}
        width={15}
        height={9.667}
        rx={0.5}
        stroke="currentColor"
      />
      <path
        d="M5.62 18a1 1 0 01.777-.37h11.206a1 1 0 01.777.37l.3.37a1 1 0 01-.777 1.63H6.097a1 1 0 01-.777-1.63l.3-.37z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.64 12.296h14.72V14H14v.367c.063.083.1.187.1.3v.466l.58 1.074a.5.5 0 01-.44.738H9.76a.5.5 0 01-.44-.738l.58-1.074v-.466c0-.113.037-.217.1-.3V14H4.64v-1.704z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTechnology;
