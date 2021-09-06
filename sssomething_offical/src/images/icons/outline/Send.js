import * as React from "react";

function SvgSend(props) {
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
        d="M20 4l.46.197a.5.5 0 00-.657-.657L20 4zM4 10.857l-.197-.46a.5.5 0 00-.06.889L4 10.857zM13.143 20l-.429.257a.5.5 0 00.888-.06l-.46-.197zm6.66-16.46l-16 6.858.394.919 16-6.857-.394-.92zm-16.06 7.746l5.714 3.428.515-.857-5.715-3.429-.514.858zm5.543 3.257l3.428 5.714.858-.514-3.429-5.714-.857.514zm4.316 5.654l6.858-16-.92-.394-6.857 16 .92.394zm6.044-16.55L9.361 13.931l.707.707L20.354 4.354l-.708-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSend;
