import * as React from "react";

function SvgRefreshAlt(props) {
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
        d="M6.067 16.267v-.5a.5.5 0 00-.5.5h.5zm12.8-8.534v.5a.5.5 0 00.5-.5h-.5zM5.5 12a6.967 6.967 0 016.967-6.967v-1A7.967 7.967 0 004.5 12h1zm13.933 0a6.967 6.967 0 01-6.966 6.967v1c4.4 0 7.966-3.567 7.966-7.967h-1zm-.707-4.929a7.954 7.954 0 00-6.26-3.038v1a6.953 6.953 0 015.475 2.657l.785-.619zm-6.26 11.896a6.953 6.953 0 01-5.473-2.657l-.786.619a7.953 7.953 0 006.26 3.038v-1zm-2.666-3.2H6.067v1H9.8v-1zm-4.233.5V20h1v-3.733h-1zM18.367 4v3.733h1V4h-1zm.5 3.233h-3.734v1h3.734v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRefreshAlt;
