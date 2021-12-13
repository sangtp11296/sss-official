import * as React from 'react';

function SvgCalendar1(props) {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.4 6.13333H16.8V4H15.7333V6.13333H8.26667V4H7.2V6.13333H5.6C4.71634 6.13333 4 6.84968 4 7.73333V18.4C4 19.2837 4.71634 20 5.6 20H18.4C19.2837 20 20 19.2837 20 18.4V7.73333C20 6.84968 19.2837 6.13333 18.4 6.13333ZM12.7236 9.5C12.7236 9.32671 12.6339 9.16578 12.4865 9.07468C12.3391 8.98357 12.155 8.97529 12 9.05279L10 10.0528L10.4472 10.9472L11.7236 10.309V16H10.2236V17H14.2236V16H12.7236V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendar1;
