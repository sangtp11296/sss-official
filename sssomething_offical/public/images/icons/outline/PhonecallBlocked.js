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
        d="M18.857 5.143l-4.571 4.571M6.286 4h2.536c.524 0 .982.357 1.109.866l.67 2.679c.144.58-.181 1.172-.748 1.361l-1.267.422a1.382 1.382 0 00-.918 1.583 6.91 6.91 0 005.421 5.421 1.382 1.382 0 001.583-.918l.34-1.021c.22-.66.973-.972 1.595-.66l2.761 1.38c.387.193.632.589.632 1.022v1.58A2.286 2.286 0 0117.714 20H15.43C9.117 20 4 14.883 4 8.571V6.286A2.286 2.286 0 016.286 4zm10.285 6.857a3.429 3.429 0 110-6.857 3.429 3.429 0 010 6.857z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPhonecallBlocked;
