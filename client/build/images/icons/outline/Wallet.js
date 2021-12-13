import * as React from "react";

function SvgWallet(props) {
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
        d="M18.857 10.143v-4c0-.631-.511-1.143-1.143-1.143H5.143C4.512 5 4 5.512 4 6.143V17.57c0 .632.512 1.143 1.143 1.143h12.571c.632 0 1.143-.511 1.143-1.143v-4m1.064-4h-5.635a2.286 2.286 0 100 4.572h5.635a.08.08 0 00.079-.08V9.652a.08.08 0 00-.08-.08z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgWallet;
