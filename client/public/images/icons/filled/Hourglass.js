import * as React from "react";

function SvgHourglass(props) {
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
        d="M15.733 4.067h2.134V3H4v1.067h2.133v3.916c0 .707.281 1.386.781 1.886l.755.754a.533.533 0 010 .754l-1.067 1.067a1.6 1.6 0 00-.469 1.131v4.358H4V19h13.867v-1.067h-2.134v-4.358a1.6 1.6 0 00-.468-1.131l-1.067-1.067a.533.533 0 010-.754l1.067-1.067c.3-.3.468-.707.468-1.131V4.067zm-8.267 4.8h6.98l.065-.065c.1-.1.156-.236.156-.377V4.067H7.2v3.916c0 .317.094.624.266.884z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHourglass;
