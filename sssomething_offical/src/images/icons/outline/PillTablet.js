import * as React from "react";

function SvgPillTablet(props) {
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
        d="M7.338 14.653a.5.5 0 10.574.82l-.574-.82zm9.324-5.306a.5.5 0 10-.574-.82l.574.82zM12 18.5A6.5 6.5 0 015.5 12h-1a7.5 7.5 0 007.5 7.5v-1zm6.5-6.5a6.5 6.5 0 01-6.5 6.5v1a7.5 7.5 0 007.5-7.5h-1zM12 5.5a6.5 6.5 0 016.5 6.5h1A7.5 7.5 0 0012 4.5v1zm0-1A7.5 7.5 0 004.5 12h1A6.5 6.5 0 0112 5.5v-1zM7.912 15.472l8.75-6.125-.574-.82-8.75 6.126.574.82z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPillTablet;
