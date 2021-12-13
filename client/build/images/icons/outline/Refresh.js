import * as React from "react";

function SvgRefresh(props) {
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
        d="M16.267 18.867h-.5a.5.5 0 00.5.5v-.5zm-8.534-12.8h.5a.5.5 0 00-.5-.5v.5zM12 19.433a6.967 6.967 0 01-6.967-6.966h-1c0 4.4 3.567 7.966 7.967 7.966v-1zM12 5.5a6.967 6.967 0 016.967 6.967h1C19.967 8.067 16.4 4.5 12 4.5v1zm-4.929.707a7.953 7.953 0 00-3.038 6.26h1A6.953 6.953 0 017.69 6.993l-.619-.786zm11.896 6.26a6.953 6.953 0 01-2.657 5.474l.619.785a7.954 7.954 0 003.038-6.26h-1zm-3.2 2.666v3.734h1v-3.734h-1zm.5 4.234H20v-1h-3.733v1zM4 6.567h3.733v-1H4v1zm3.233-.5V9.8h1V6.067h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRefresh;
