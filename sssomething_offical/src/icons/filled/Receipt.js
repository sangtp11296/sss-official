import * as React from "react";

function SvgReceipt(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4.533C5 4.24 5.239 4 5.533 4h12.8c.295 0 .534.239.534.533v14.934a.533.533 0 01-.772.477l-1.895-.948-1.895.948a.533.533 0 01-.477 0l-1.895-.948-1.894.948a.533.533 0 01-.478 0l-1.894-.948-1.895.948A.533.533 0 015 19.467V4.533zm3.2 4.8h2.133V8.267H8.2v1.066zm4.267 0h3.2V8.267h-3.2v1.066zm-2.134 3.2H8.2v-1.066h2.133v1.066zm2.134 0h3.2v-1.066h-3.2v1.066zm3.2 3.2h-3.2v-1.066h3.2v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgReceipt;
