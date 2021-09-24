import * as React from "react";

function SvgContract(props) {
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
        d="M8.929 12h-.5v1h.5v-1zm6.857 1h.5v-1h-.5v1zM8.929 8.571h-.5v1h.5v-1zm2.285 1h.5v-1h-.5v1zM15.786 4.5l.353-.354L15.993 4h-.207v.5zm3.428 3.429h.5V7.72l-.146-.146-.354.354zM12.93 16.5l-.354.354.354-.354zm-.572.571l.224.448.04-.02.036-.028-.3-.4zM8.93 13h6.857v-1H8.929v1zm0-3.429h2.285v-1H8.93v1zM18.07 20H6.643v1H18.07v-1zM6 19.357V5.643H5v13.714h1zM6.643 5h9.143V4H6.643v1zm12.071 2.929v11.428h1V7.93h-1zm-3.282-3.075l3.429 3.428.707-.707-3.429-3.429-.707.708zM6.642 20A.643.643 0 016 19.357H5C5 20.265 5.736 21 6.643 21v-1zm11.43 1c.907 0 1.642-.735 1.642-1.643h-1a.643.643 0 01-.643.643v1zM6 5.643C6 5.288 6.288 5 6.643 5V4C5.736 4 5 4.736 5 5.643h1zM9.974 17.23c.135-.405.515-.774.999-.904.456-.123 1.036-.039 1.602.528l.707-.708c-.805-.805-1.749-1.006-2.569-.786-.792.213-1.441.815-1.687 1.553l.948.317zm2.601-.376c.04.039.07.074.095.106l.79-.613a2.164 2.164 0 00-.178-.2l-.707.707zm.095.106a.48.48 0 01.08.137.098.098 0 01.007.042c0 .006-.007.046-.084.116-.078.07-.198.143-.352.206a2.113 2.113 0 01-.467.128c-.157.024-.264.02-.31.01-.025-.005.003-.004.05.03.06.044.139.14.145.28.005.114-.043.176-.037.167a.582.582 0 01.096-.091c.136-.11.381-.265.783-.466l-.447-.895c-.43.215-.747.408-.964.583a1.499 1.499 0 00-.284.29.735.735 0 00-.146.457c.01.22.13.384.261.48a.87.87 0 00.349.146c.203.04.437.03.654-.002.427-.065.973-.248 1.342-.583.19-.174.367-.42.404-.74.039-.326-.078-.636-.29-.908l-.79.613zm-.013.511c.214-.16.416-.276.607-.359l-.397-.917a3.999 3.999 0 00-.81.476l.6.8zm.607-.359c.772-.334 1.459-.154 2.146.174.172.082.34.171.51.263.165.09.338.184.502.268.314.159.693.326 1.078.326v-1c-.125 0-.315-.061-.626-.219-.148-.075-.302-.16-.478-.255a11.982 11.982 0 00-.556-.286c-.79-.377-1.81-.692-2.973-.188l.397.917z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgContract;