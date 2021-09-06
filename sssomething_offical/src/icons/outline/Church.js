import * as React from "react";

function SvgChurch(props) {
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
        d="M7.259 13.38a.5.5 0 00-1 0h1zm11.034 0a.5.5 0 00-1 0h1zm-8.224 2.206v-.5h-.5v.5h.5zm4.414 0h.5v-.5h-.5v.5zM4 20.5h16.552v-1H4v1zm8.028-10.865l-7.724 4.414.496.868 7.724-4.414-.496-.868zm8.22 4.414l-7.724-4.414-.496.868 7.724 4.414.496-.868zM11.776 4v2.759h1V4h-1zm0 2.759v3.31h1v-3.31h-1zm-2.259.5h2.759v-1H9.517v1zm2.759 0h2.758v-1h-2.758v1zm-6.017 6.12V20h1v-6.62h-1zm11.034 0V20h1v-6.62h-1zM10.57 20v-4.414h-1V20h1zm-.5-3.914h4.414v-1h-4.414v1zm3.914-.5V20h1v-4.414h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChurch;
