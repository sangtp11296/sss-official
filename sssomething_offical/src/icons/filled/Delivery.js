import * as React from "react";

function SvgDelivery(props) {
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
        d="M5.123 9.89H2.667M5.123 11.83H3.158M5.123 13.77H3.649"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.175 7.467H7.596a1 1 0 00-1 1v6.97a1 1 0 001 1h.494a1.469 1.469 0 011.454-1.213c.73 0 1.336.524 1.453 1.212h4.178a1 1 0 001-1v-6.97a1 1 0 00-1-1z"
        fill="currentColor"
      />
      <ellipse cx={9.566} cy={16.75} rx={1.266} ry={1.25} fill="currentColor" />
      <ellipse
        cx={18.916}
        cy={16.75}
        rx={1.266}
        ry={1.25}
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.33 16.436h1.003v-2.114a5.158 5.158 0 00-5.158-5.158v7.272h1.249a1.469 1.469 0 011.453-1.212c.73 0 1.336.524 1.453 1.212z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDelivery;
