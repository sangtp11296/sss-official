import * as React from 'react';

function SvgCalendar2(props) {
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
        d="M18.4 6.13333H16.8V4H15.7333V6.13333H8.26667V4H7.2V6.13333H5.6C4.71634 6.13333 4 6.84968 4 7.73333V18.4C4 19.2837 4.71634 20 5.6 20H18.4C19.2837 20 20 19.2837 20 18.4V7.73333C20 6.84968 19.2837 6.13333 18.4 6.13333ZM11.4142 9C11.0164 9 10.6349 9.15804 10.3536 9.43934L9.64645 10.1464L10.3536 10.8536L11.0607 10.1464C11.1544 10.0527 11.2816 10 11.4142 10H12.0194C12.561 10 13 10.439 13 10.9806C13 11.2033 12.9242 11.4193 12.7851 11.5932L9.10957 16.1877C8.9895 16.3377 8.96609 16.5434 9.04935 16.7166C9.13261 16.8898 9.3078 17 9.5 17H14V16H10.5403L13.566 12.2179C13.8469 11.8667 14 11.4304 14 10.9806C14 9.88676 13.1132 9 12.0194 9H11.4142Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendar2;
