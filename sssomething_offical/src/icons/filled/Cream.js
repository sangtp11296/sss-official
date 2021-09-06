import * as React from "react";

function SvgCream(props) {
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
        d="M15.341 4.764l4.895 4.895a1 1 0 01-.056 1.466l-1.037.889-6.157-6.157.889-1.037a1 1 0 011.466-.056zm-3.004 1.85l-.002.006 6.045 6.045.006-.002-6.77 5.802-5.081-5.082 5.802-6.769zm-6.38 7.607l4.822 4.821a4 4 0 01-1.836.447H7.4l-.442.589a1 1 0 01-1.507.107l-.636-.636a1 1 0 01.107-1.508l.59-.441v-1.543a4 4 0 01.446-1.836z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCream;
