import * as React from "react";

function SvgTelegram(props) {
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
        d="M19.993 5.621a.533.533 0 00-.706-.59L4.354 10.364a.533.533 0 00-.06.98l4.267 2.133a.533.533 0 00.535-.033l3.542-2.361-2.121 2.65a.533.533 0 00.12.777l6.4 4.267a.533.533 0 00.822-.356l2.134-12.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTelegram;
