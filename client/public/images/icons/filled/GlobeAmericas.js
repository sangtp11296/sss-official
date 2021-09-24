import * as React from "react";

function SvgGlobeAmericas(props) {
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
        d="M12 4a8 8 0 100 16 8 8 0 000-16zm-6.723 6.298a6.936 6.936 0 005.123 8.45v-.66L9.333 17.02v-1.6l-1.066-1.067v-1.287c0-.295.238-.534.533-.534h4.267a1.6 1.6 0 011.6 1.6v.546c.545.078.976.51 1.054 1.054h2.122a6.935 6.935 0 00-3.177-10.135v1.069a1.6 1.6 0 01-1.6 1.6H12a.533.533 0 00-.533.533 1.6 1.6 0 01-1.6 1.6h-.534v.754l-.468.469a1.6 1.6 0 01-2.263 0l-1.325-1.325z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGlobeAmericas;
