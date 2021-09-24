import * as React from "react";

function SvgMessageTextAlt(props) {
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
        d="M7.429 16.563h.5v-.5h-.5v.5zm0 3.427h-.5a.5.5 0 00.8.4l-.3-.4zM12 16.563v-.5h-.167l-.133.1.3.4zM8.571 8.068h-.5v1h.5v-1zm6.858 1h.5v-1h-.5v1zM8.57 11.495h-.5v1h.5v-1zm4.572 1h.5v-1h-.5v1zm-6.214 4.068v3.427h1v-3.427h-1zm.8 3.827l4.57-3.427-.599-.8L7.13 19.59l.6.8zM12 17.063h6.857v-1H12v1zm6.857 0c.908 0 1.643-.734 1.643-1.642h-1a.641.641 0 01-.643.642v1zm1.643-1.642V5.142h-1v10.28h1zm0-10.279c0-.908-.735-1.642-1.643-1.642v1c.356 0 .643.287.643.642h1zM18.857 3.5H5.143v1h13.714v-1zm-13.714 0c-.908 0-1.643.734-1.643 1.642h1c0-.355.287-.642.643-.642v-1zM3.5 5.142v10.28h1V5.141h-1zm0 10.28c0 .907.735 1.641 1.643 1.641v-1a.641.641 0 01-.643-.642h-1zm1.643 1.641h2.286v-1H5.143v1zM8.57 9.068h6.858v-1H8.57v1zm0 3.427h4.572v-1H8.57v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessageTextAlt;
