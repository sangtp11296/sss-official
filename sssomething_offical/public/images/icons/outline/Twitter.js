import * as React from "react";

function SvgTwitter(props) {
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
        d="M19.975 5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.64 3.382a.5.5 0 10-1 0h1zm-7.347.094h-.5.5zm0 1.095h.5-.5zm-7.988 8v-.5a.5.5 0 00-.278.916L4 17.571zM5.141 5l.468-.175a.5.5 0 00-.915-.048L5.14 5zm4.564 10.286l.354.353a.5.5 0 00-.195-.828l-.159.475zm8.256-9.174l-.37.336.18.199.265-.04-.075-.495zm1.515-1.079c.06.893.006 1.444-.143 1.864-.145.409-.398.743-.845 1.17l.692.723c.497-.476.875-.939 1.095-1.56.216-.609.262-1.32.2-2.263l-.999.066zm-.142 4.181v-.832h-1v.832h1zm-7.846-.738V9.57h1V8.476h-1zm0 1.095v.572h1V9.57h-1zm3.97-5.071a3.973 3.973 0 00-3.97 3.976h1a2.973 2.973 0 012.97-2.976v-1zm2.876 4.714c0 4.972-4.023 9-8.985 9v1c5.515 0 9.985-4.478 9.985-10h-1zM4.673 5.175c.615 1.642 2.926 4.896 7.315 4.896v-1c-3.828 0-5.852-2.84-6.379-4.246l-.936.35zm.02-.398c-1.189 2.382-1.368 4.684-.509 6.638.857 1.951 2.704 3.457 5.363 4.345l.317-.949c-2.476-.826-4.052-2.177-4.764-3.798-.71-1.616-.604-3.6.488-5.79l-.894-.446zm4.659 10.155c-.698.699-2.784 2.14-5.352 2.14v1c2.909 0 5.235-1.607 6.06-2.433l-.708-.707zm8.98-9.155A3.866 3.866 0 0015.458 4.5v1c.845 0 1.605.365 2.132.948l.742-.67zm-.296.83c.852-.13 1.685-.577 2.311-1.273l-.743-.668c-.477.53-1.103.859-1.718.952l.15.989zM3.722 17.987c1.855 1.239 3.8 1.227 5.627 1.227v-1c-1.86 0-3.503-.011-5.071-1.058l-.556.831z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitter;