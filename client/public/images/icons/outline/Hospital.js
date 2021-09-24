import * as React from "react";

function SvgHospital(props) {
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
        d="M12 4l.224-.447a.5.5 0 00-.448 0L12 4zM5.6 7.2l-.224-.447-.276.138V7.2h.5zm12.8 0h.5v-.309l-.276-.138-.224.447zm-8.533 7.467v-.5h-.5v.5h.5zm4.266 0h.5v-.5h-.5v.5zM4 19.433h16v-1H4v1zm7.776-15.88l-6.4 3.2.448.894 6.4-3.2-.448-.894zm6.848 3.2l-6.4-3.2-.448.894 6.4 3.2.448-.894zM11.5 6.667v2.666h1V6.667h-1zm0 2.666V12h1V9.333h-1zm-2.167.5H12v-1H9.333v1zm2.667 0h2.667v-1H12v1zM5.1 7.2v11.733h1V7.2h-1zm12.8 0v11.733h1V7.2h-1zm-7.533 11.733v-4.266h-1v4.266h1zm-.5-3.766h4.266v-1H9.867v1zm3.766-.5v4.266h1v-4.266h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHospital;
