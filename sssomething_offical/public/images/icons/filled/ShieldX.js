import * as React from "react";

function SvgShieldX(props) {
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
        d="M11.735 4.07a.533.533 0 01.53 0l7.466 4.267A.533.533 0 0120 8.8v.768c0 4.835-3.205 9.083-7.854 10.412a.534.534 0 01-.293 0A10.828 10.828 0 014 9.568V8.8c0-.191.103-.368.269-.463l7.466-4.267zm3.088 11.507L12 12.754l-2.823 2.823-.754-.754L11.246 12 8.423 9.177l.754-.754L12 11.246l2.823-2.823.754.754L12.754 12l2.823 2.823-.754.754z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShieldX;
