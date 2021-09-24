import * as React from "react";

function SvgEdit1(props) {
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
        d="M3.8 14.086l-.354-.354-.146.147v.207h.5zM14.086 3.8l.353-.354a.5.5 0 00-.707 0l.354.354zM19.8 9.514l.354.354a.5.5 0 000-.707l-.354.353zM9.514 19.8v.5h.207l.147-.146-.354-.354zm-5.714 0h-.5a.5.5 0 00.5.5v-.5zm.354-5.36L14.439 4.153l-.707-.708L3.446 13.732l.708.707zm9.578-10.286l5.714 5.714.707-.707-5.714-5.715-.707.708zm5.714 5.007L9.161 19.446l.707.707L20.154 9.869l-.708-.707zM9.514 19.3H3.8v1h5.714v-1zm-5.214.5v-5.714h-1V19.8h1zm6.004-12.218l5.714 5.714.707-.707-5.714-5.714-.707.707zM12.37 20.3h8v-1h-8v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEdit1;
