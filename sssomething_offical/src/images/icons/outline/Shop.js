import * as React from "react";

function SvgShop(props) {
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
        d="M4.714 6.286v-.5a.5.5 0 00-.49.402l.49.098zm13.715 0l.49-.098a.5.5 0 00-.49-.402v.5zM19.57 12v.5a.5.5 0 00.49-.598l-.49.098zm-16 0l-.49-.098a.5.5 0 00.49.598V12zM7 15.429h-.5v.5H7v-.5zm9.143 0v.5h.5v-.5h-.5zM3 20.5h17.143v-1H3v1zM4.214 12v8h1v-8h-1zm13.715 0v8h1v-8h-1zM4.714 6.786H18.43v-1H4.714v1zm13.224-.402l1.143 5.714.98-.196-1.142-5.714-.98.196zm1.633 5.116h-16v1h16v-1zm-15.51.598l1.144-5.714-.981-.196-1.143 5.714.98.196zM4.144 4.5H19v-1H4.143v1zM6.5 12v3.429h1V12h-1zm.5 3.929h9.143v-1H7v1zm9.643-.5V12h-1v3.429h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShop;
