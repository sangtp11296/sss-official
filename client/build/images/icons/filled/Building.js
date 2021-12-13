import * as React from "react";

function SvgBuilding(props) {
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
        d="M11.981 4.055a.517.517 0 00-.462 0l-6.2 3.1.462.924 5.969-2.985 5.969 2.985.462-.924-6.2-3.1zM18.467 10.2H19.5V9.167H4V10.2h1.033v8.267H4V19.5h4.133v-7.233H13.3V19.5h6.2v-1.033h-1.033V10.2z"
        fill="currentColor"
      />
      <path d="M12.267 19.5v-6.2h-3.1v6.2h3.1z" fill="currentColor" />
    </svg>
  );
}

export default SvgBuilding;
