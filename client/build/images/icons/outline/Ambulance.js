import * as React from "react";

function SvgAmbulance(props) {
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
        d="M16.923 17.923H20v-7.575a2.382 2.382 0 00-2.388-2.377h-2.388L13.88 5H4v12.923h2.478m2.445 0h5.538M9.23 7.462V13m-2.768-2.77H12"
        stroke="currentColor"
      />
      <path
        d="M14.598 17.923c0 .68.52 1.23 1.163 1.23.642 0 1.162-.55 1.162-1.23 0-.68-.52-1.23-1.162-1.23-.642 0-1.163.55-1.163 1.23zM7.624 16.692c-.642 0-1.162.551-1.162 1.231s.52 1.23 1.162 1.23c.642 0 1.162-.55 1.162-1.23 0-.68-.52-1.23-1.162-1.23z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAmbulance;
