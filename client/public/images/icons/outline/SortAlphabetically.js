import * as React from "react";

function SvgSortAlphabetically(props) {
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
        d="M8.31 20l-.353.354a.5.5 0 00.707 0L8.31 20zm6.621-6.62v-.5h-.5v.5h.5zm0 6.62h-.5v.5h.5V20zm-6.267.354l3.31-3.31-.707-.708-3.31 3.31.707.708zm0-.708l-3.31-3.31-.708.707 3.31 3.31.708-.707zM7.81 4v16h1V4h-1zm7.121 9.88h2.759v-1H14.93v1zm2.759 2.31H14.93v1h2.759v-1zm-2.259.5v-3.31h-1v3.31h1zm3.414-1.656c0 .638-.517 1.156-1.155 1.156v1c1.19 0 2.155-.965 2.155-2.156h-1zM17.69 13.88c.638 0 1.155.518 1.155 1.155h1c0-1.19-.965-2.155-2.155-2.155v1zm0 5.621H14.93v1h2.759v-1zm-2.259.5v-3.31h-1V20h1zm3.414-1.655c0 .638-.517 1.155-1.155 1.155v1c1.19 0 2.155-.965 2.155-2.155h-1zM17.69 17.19c.638 0 1.155.517 1.155 1.155h1c0-1.19-.965-2.155-2.155-2.155v1zm-2.259-5.466V6.76h-1v4.965h1zm3.414-4.965v4.965h1V6.76h-1zm-1.707-1.707c.943 0 1.707.764 1.707 1.707h1a2.707 2.707 0 00-2.707-2.707v1zM15.43 6.759c0-.943.764-1.707 1.707-1.707v-1a2.707 2.707 0 00-2.707 2.707h1zm-.5 2.707h4.414v-1H14.93v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortAlphabetically;
