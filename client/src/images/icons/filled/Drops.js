import * as React from "react";

function SvgDrops(props) {
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
        d="M12.182 4c2.06 1.697 6.182 6.036 6.182 9.818 0 4.728-4 6.182-6.182 6.182C10 20 6 18.546 6 13.818 6 10.036 10.121 5.697 12.182 4zm-3.145 9.908a.5.5 0 10-.984-.18c-.137.757-.08 1.899.568 2.868.67 1.001 1.904 1.722 3.924 1.722a.5.5 0 100-1c-1.761 0-2.648-.612-3.093-1.278-.467-.697-.52-1.556-.415-2.132z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDrops;
