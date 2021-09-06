import * as React from "react";

function SvgBasket(props) {
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
        d="M11.512 4.558l-2.76 4.6h6.759l-2.76-4.6.93-.558 3.094 5.158h2.726c.42 0 .762.341.762.762v.476c0 3.191-.743 6.34-2.17 9.194a.742.742 0 01-.664.41H6.834a.742.742 0 01-.664-.41A20.558 20.558 0 014 10.396V9.92c0-.42.341-.762.762-.762h2.726L10.583 4l.93.558z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBasket;
