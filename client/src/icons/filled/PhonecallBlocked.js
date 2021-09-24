import * as React from "react";

function SvgPhonecallBlocked(props) {
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
        d="M8.822 4H6.286A2.286 2.286 0 004 6.286V8.57C4 14.883 9.117 20 15.429 20h2.285A2.286 2.286 0 0020 17.714v-1.58c0-.432-.245-.828-.632-1.021l-2.76-1.38a1.143 1.143 0 00-1.596.66l-.34 1.02a1.382 1.382 0 01-1.583.92 6.91 6.91 0 01-5.421-5.422 1.382 1.382 0 01.918-1.583l1.267-.422c.567-.189.892-.782.748-1.361l-.67-2.68A1.143 1.143 0 008.822 4z"
        fill="currentColor"
      />
      <path
        d="M18.857 5.143l-4.571 4.571m2.285 1.143a3.429 3.429 0 110-6.857 3.429 3.429 0 010 6.857z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPhonecallBlocked;
