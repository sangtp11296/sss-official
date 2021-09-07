import * as React from "react";

function SvgBasket(props) {
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
        d="M6.227 19.883l.448-.223-.448.223zm11.546 0l.447.224-.447-.224zm-13.54-9.669h15.535v-1H4.232v1zM19.5 9.947v.501h1v-.501h-1zM17.584 19.5H6.416v1h11.168v-1zM4.5 10.448v-.501h-1v.501h1zm2.175 9.212A20.598 20.598 0 014.5 10.448h-1c0 3.353.78 6.66 2.28 9.659l.895-.447zm-.259-.16c.11 0 .21.062.259.16l-.895.447a.71.71 0 00.636.393v-1zm10.91.16a.289.289 0 01.258-.16v1a.71.71 0 00.636-.393l-.895-.447zm2.174-9.212c0 3.198-.744 6.352-2.175 9.212l.895.447c1.5-3 2.28-6.306 2.28-9.659h-1zm.268-.234a.268.268 0 01-.268-.267h1a.732.732 0 00-.732-.733v1zm-15.536-1a.732.732 0 00-.732.733h1c0 .147-.12.267-.268.267v-1zm3.625.758l3.429-5.715-.858-.514L7 9.457l.857.515zm4.857-5.715l3.429 5.715.857-.515-3.428-5.714-.858.514z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBasket;