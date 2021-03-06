import * as React from "react";

function SvgChat(props) {
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
        d="M16.571 18.857l.157-.475-.218-.072-.197.119.258.428zm2.286-2.286l-.421-.269-.129.201.076.227.474-.159zM20 19.99l-.157.475a.5.5 0 00.631-.633L20 19.99zm-3.686-1.56c-1.107.666-2.869 1.06-4.314 1.06v1c1.574 0 3.527-.42 4.83-1.204l-.516-.856zM12 19.489a7.497 7.497 0 01-7.5-7.494h-1c0 4.692 3.806 8.495 8.5 8.495v-1zm-7.5-7.494A7.497 7.497 0 0112 4.5v-1c-4.694 0-8.5 3.803-8.5 8.495h1zM12 4.5c4.142 0 7.5 3.356 7.5 7.495h1C20.5 7.303 16.694 3.5 12 3.5v1zm7.5 7.495c0 1.529-.34 3.174-1.064 4.307l.842.539c.864-1.35 1.222-3.207 1.222-4.846h-1zm-3.085 7.337l3.428 1.132.314-.95-3.429-1.132-.313.95zm4.06.499l-1.144-3.418-.948.317 1.143 3.418.948-.317z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChat;
