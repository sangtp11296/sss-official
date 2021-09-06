import * as React from "react";

function SvgBasketPlus(props) {
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
        d="M8.752 9.158l2.76-4.6-.93-.558-3.094 5.158H4.762A.762.762 0 004 9.92v.476c0 3.191.743 6.34 2.17 9.194.126.251.383.41.664.41H17.43a.742.742 0 00.664-.41 20.559 20.559 0 002.17-9.194V9.92a.762.762 0 00-.762-.762h-2.726L13.681 4l-.93.558 2.76 4.6H8.752zm2.837 7.59v-2.17H9.421v-1.083h2.168v-2.169h1.085v2.169h2.168v1.084h-2.168v2.168h-1.085z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBasketPlus;
