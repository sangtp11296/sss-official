import * as React from "react";

function SvgWhatsapp(props) {
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
        d="M9.333 9.086a.533.533 0 01.812.362l.149.893a.533.533 0 01-.23.531l-.535.356a4.801 4.801 0 01-.196-1.361v-.781zM14.133 14.667c-.473 0-.93-.069-1.361-.196l.356-.535a.533.533 0 01.531-.23l.893.149c.378.063.566.49.362.812h-.78z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a8 8 0 113.47 6.595l-2.698 1.349a.533.533 0 01-.716-.716l1.35-2.698A7.965 7.965 0 014 12zm4.511-3.648l.22-.147a1.6 1.6 0 012.466 1.068l.149.892a1.6 1.6 0 01-.69 1.595l-.703.468c.43.759 1.06 1.39 1.82 1.819l.467-.702a1.6 1.6 0 011.595-.691l.892.149a1.6 1.6 0 011.068 2.465l-.147.221a.533.533 0 01-.448.244h-1.067a5.867 5.867 0 01-5.866-5.866V8.8c0-.188.097-.353.244-.448z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWhatsapp;
