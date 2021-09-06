import * as React from "react";

function SvgBodyache(props) {
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
        d="M10.034 6.546c.086.944-.414 2.927-3.104 3.305m1.293.236c-.948-.315-2.143-.472-3.591 1.416-.776 1.417-.26 2.597-.518 4.25-.207 1.322-.086 2.439 0 2.832m3.078-2.597c.173.63.414 2.078 0 2.833M13.926 6.546c-.068.944.327 2.927 2.45 3.305m-.817.236c.75-.315 2.533-.472 3.676 1.416.613 1.417.204 2.597.409 4.25.163 1.321.068 2.439 0 2.832m-3.267-2.597c-.136.63-.327 2.078 0 2.833M16.77 7.876l.646-1.938.95 1.254L19.03 4 20 5.938M11.449 14.641v3.877"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgBodyache;
