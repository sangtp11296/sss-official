import * as React from "react";

function SvgBank(props) {
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
        d="M11.981 4.055a.517.517 0 00-.462 0l-6.2 3.1.462.924 5.969-2.985 5.969 2.985.462-.924-6.2-3.1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.467 10.2H19.5V9.167H4V10.2h1.033v8.267H4V19.5h15.5v-1.033h-1.033V10.2zm-9.3 6.2v-4.133H10.2V16.4H9.167zm4.133 0v-4.133h1.033V16.4H13.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBank;
