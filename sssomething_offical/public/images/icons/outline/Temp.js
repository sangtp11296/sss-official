import * as React from "react";

function SvgTemp(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="temp_svg__a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.636 4a2.182 2.182 0 00-2.181 2.182v7.272a3.636 3.636 0 104.364 0V6.182A2.182 2.182 0 0010.635 4z"
        />
      </mask>
      <path
        d="M8.455 13.454l.6.8.4-.3v-.5h-1zm4.363 0h-1v.5l.4.3.6-.8zM9.455 6.182c0-.653.529-1.182 1.181-1.182V3a3.182 3.182 0 00-3.181 3.182h2zm0 7.272V6.182h-2v7.272h2zM8 16.364c0-.862.413-1.628 1.055-2.11l-1.201-1.6A4.63 4.63 0 006 16.365h2zM10.636 19A2.636 2.636 0 018 16.364H6A4.636 4.636 0 0010.636 21v-2zm2.637-2.636A2.636 2.636 0 0110.636 19v2a4.636 4.636 0 004.637-4.636h-2zm-1.055-2.11a2.63 2.63 0 011.055 2.11h2c0-1.518-.73-2.865-1.854-3.71l-1.201 1.6zm-.4-8.072v7.272h2V6.182h-2zM10.636 5c.653 0 1.182.53 1.182 1.182h2A3.182 3.182 0 0010.636 3v2z"
        fill="currentColor"
        mask="url(#temp_svg__a)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M15.982 6.594h-1.529M15.982 9.122h-1.529M15.982 11.651h-1.529"
      />
    </svg>
  );
}

export default SvgTemp;
