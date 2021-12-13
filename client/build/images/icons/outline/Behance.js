import * as React from "react";

function SvgBehance(props) {
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
        d="M20 14v.5h.5V14H20zM4 6v-.5h-.5V6H4zm0 11.429h-.5v.5H4v-.5zM12.643 14a3.929 3.929 0 003.928 3.929v-1A2.929 2.929 0 0113.643 14h-1zm3.928-3.929A3.929 3.929 0 0012.643 14h1a2.929 2.929 0 012.928-2.929v-1zM20.5 14a3.929 3.929 0 00-3.929-3.929v1A2.929 2.929 0 0119.5 14h1zm-1.554 1.715a2.924 2.924 0 01-2.375 1.214v1c1.311 0 2.472-.643 3.185-1.628l-.81-.586zM4 6.5h2.857v-1H4v1zm2.857 4.714H4v1h2.857v-1zm-2.357.5V6h-1v5.714h1zm4.714-2.857a2.357 2.357 0 01-2.357 2.357v1a3.357 3.357 0 003.357-3.357h-1zM6.857 6.5a2.357 2.357 0 012.357 2.357h1A3.357 3.357 0 006.857 5.5v1zM4 12.214h4v-1H4v1zm4 4.715H4v1h4v-1zm-3.5.5v-5.715h-1v5.715h1zm5.857-2.858A2.357 2.357 0 018 16.93v1a3.357 3.357 0 003.357-3.358h-1zM8 12.214a2.357 2.357 0 012.357 2.357h1A3.357 3.357 0 008 11.214v1zm5.143 2.286H20v-1h-6.857v1zm.571-6.857h5.715v-1h-5.715v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBehance;
