import * as React from "react";

function SvgBulbOn(props) {
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
        d="M9.862 21.5h3.931v-1h-3.93v1zM11.328 2v2.62h1V2h-1zM2 12.328h2.62v-1H2v1zm17.035 0h2.62v-1h-2.62v1zm-12.75-5.44L4.319 4.922l-.707.707 1.965 1.966.708-.707zm11.793.707l1.965-1.966-.707-.707-1.965 1.966.707.707zM7.327 10.57l.014-.092a4.533 4.533 0 018.973 0l.014.092a4.522 4.522 0 01-.904 3.423c-.52.673-.976 1.44-.976 2.291v2.095H9.207v-2.095c0-.85-.455-1.618-.976-2.29a4.522 4.522 0 01-.904-3.424z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBulbOn;
