import * as React from "react";

function SvgCovid(props) {
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
        d="M12 5.103V4M11.172 4h1.656M12 18.897V20M12.828 20h-1.655M18.897 12H20M20 11.172v1.656M5.103 12H4M4 12.828v-1.655M8.552 6.027L8 5.072M7.283 5.486l1.434-.828M15.448 17.973l.552.955M16.716 18.515l-1.433.827M17.973 8.552L18.927 8M18.514 7.283l.828 1.434M6.028 15.448L5.072 16M5.486 16.717l-.828-1.434M6.028 8.552L5.072 8M4.658 8.717l.828-1.434M17.973 15.448l.955.552M19.342 15.283l-.828 1.434M15.448 6.028L16 5.072M15.283 4.658l1.434.828M8.552 17.973L8 18.927M8.717 19.342l-1.434-.828"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.396 12a6.397 6.397 0 11-12.793 0 6.397 6.397 0 0112.793 0z"
        stroke="currentColor"
      />
      <path
        d="M12.578 11.724a.853.853 0 11-1.707 0 .853.853 0 011.707 0zM12.578 7.862a.853.853 0 11-1.707 0 .853.853 0 011.707 0zM13.681 15.586a1.405 1.405 0 11-2.81 0 1.405 1.405 0 012.81 0zM8.985 9.498a.659.659 0 11-.659 1.141.659.659 0 01.659-1.14z"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <circle
        cx={15.761}
        cy={13.523}
        transform="rotate(-60 15.76 13.523)"
        stroke="currentColor"
        strokeWidth={0.5}
        r={0.993}
      />
      <mask id="covid_svg__a" fill="#fff">
        <circle
          cx={8.655}
          cy={13.931}
          transform="rotate(-120 8.655 13.93)"
          r={0.746}
        />
      </mask>
      <path
        d="M8.782 14.15a.254.254 0 01-.346-.092l1.732-1a1.746 1.746 0 00-2.386-.64l1 1.733zm-.346-.092a.254.254 0 01.093-.347l1 1.732a1.746 1.746 0 00.639-2.385l-1.732 1zm.093-.347a.254.254 0 01.346.093l-1.732 1a1.746 1.746 0 002.386.64l-1-1.733zm.346.093a.254.254 0 01-.093.347l-1-1.732a1.746 1.746 0 00-.639 2.385l1.732-1z"
        fill="currentColor"
        mask="url(#covid_svg__a)"
      />
      <path
        d="M14.78 9.09a1.13 1.13 0 111.13 1.957 1.13 1.13 0 01-1.13-1.956z"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgCovid;
