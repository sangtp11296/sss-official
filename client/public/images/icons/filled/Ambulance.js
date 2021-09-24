import * as React from "react";

function SvgAmbulance(props) {
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
        d="M20 10.348v7.575h-2.577c0-.928-.718-1.73-1.662-1.73-.945 0-1.663.801-1.663 1.73H9.286c0-.928-.717-1.73-1.662-1.73s-1.662.801-1.662 1.73H4V5h9.88l1.344 2.97h2.388A2.382 2.382 0 0120 10.349zM8.286 17.922H6.962c0-.43.323-.73.662-.73.34 0 .662.3.662.73zm8.137 0h-1.325c0-.43.323-.73.663-.73.339 0 .662.3.662.73zM8.731 9.731V7.46h1v2.27H12v1H9.73V13h-1v-2.27H6.463v-1H8.73z"
        fill="currentColor"
      />
      <path
        d="M14.598 17.93c0 .68.52 1.232 1.163 1.232.642 0 1.162-.552 1.162-1.231 0-.68-.52-1.231-1.162-1.231-.642 0-1.163.551-1.163 1.23zM7.624 16.7c-.642 0-1.162.551-1.162 1.23 0 .68.52 1.232 1.162 1.232.642 0 1.162-.552 1.162-1.231 0-.68-.52-1.231-1.162-1.231z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAmbulance;
