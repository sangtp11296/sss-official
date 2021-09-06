import * as React from "react";

function SvgCertificate(props) {
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
        d="M4 5.6A1.6 1.6 0 015.6 4h12.8A1.6 1.6 0 0120 5.6v4.268l-.853-.642a4.8 4.8 0 00-6.72 6.72l.106.143V20H5.6A1.6 1.6 0 014 18.4V5.6zm8.533 3.733H7.2V8.267h5.333v1.066zm-5.333 3.2h3.2v-1.066H7.2v1.066z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.267 9.333A3.733 3.733 0 0013.6 15.68v3.787a.533.533 0 00.853.426l1.814-1.36 1.813 1.36a.533.533 0 00.853-.426V15.68a3.733 3.733 0 00-2.667-6.346zm-1.6 9.067v-1.96c.485.231 1.027.36 1.6.36.572 0 1.115-.129 1.6-.36v1.96l-1.28-.96a.533.533 0 00-.64 0l-1.28.96z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCertificate;
