import * as React from "react";

function SvgMessagePlus(props) {
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
        d="M9.718 16.571l.416-.277a.5.5 0 00-.416-.223v.5zM12.005 20l-.416.277a.5.5 0 00.832 0L12.005 20zm2.287-3.429v-.5a.5.5 0 00-.415.223l.415.277zm-4.99.278l2.287 3.428.832-.555-2.287-3.428-.832.555zm3.12 3.428l2.286-3.428-.832-.555-2.287 3.428.832.555zm1.87-3.206h4.575v-1h-4.575v1zm4.575 0c.908 0 1.643-.734 1.643-1.642h-1a.642.642 0 01-.643.642v1zm1.643-1.642V5.143h-1v10.286h1zm0-10.286c0-.909-.735-1.643-1.643-1.643v1c.356 0 .643.287.643.643h1zM18.867 3.5H5.144v1h13.723v-1zm-13.723 0c-.909 0-1.644.734-1.644 1.643h1c0-.356.287-.643.644-.643v-1zM3.5 5.143v10.286h1V5.143h-1zm0 10.286c0 .908.735 1.642 1.644 1.642v-1a.642.642 0 01-.644-.642h-1zm1.644 1.642h4.574v-1H5.144v1zm6.361-9.068v5.718h1V8.003h-1zm-2.359 3.359h5.718v-1H9.146v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessagePlus;
