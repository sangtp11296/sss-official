import * as React from "react";

function SvgContact(props) {
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
        d="M6.259 17.793v.5h1v-.5h-1zm5.517 0v.5h1v-.5h-1zm-4.517 0v-.552h-1v.552h1zm4.517-.552v.552h1v-.552h-1zm-2.259-2.258a2.258 2.258 0 012.259 2.258h1c0-1.8-1.46-3.258-3.259-3.258v1zM7.26 17.24a2.258 2.258 0 012.258-2.258v-1A3.258 3.258 0 006.26 17.24h1zm2.258-8.775c-1.19 0-2.155.964-2.155 2.155h1c0-.638.517-1.155 1.155-1.155v-1zm2.155 2.155c0-1.19-.965-2.155-2.155-2.155v1c.638 0 1.155.517 1.155 1.155h1zm-2.155 2.155c1.19 0 2.155-.965 2.155-2.155h-1c0 .638-.517 1.155-1.155 1.155v1zm0-1a1.155 1.155 0 01-1.155-1.155h-1c0 1.19.965 2.155 2.155 2.155v-1zM5.655 7.259h13.242v-1H5.655v1zm13.845.603v8.828h1V7.862h-1zm-.603 9.431H5.655v1h13.242v-1zM5.052 16.69V7.862h-1v8.828h1zm.603.603a.603.603 0 01-.603-.603h-1c0 .885.718 1.603 1.603 1.603v-1zM19.5 16.69c0 .333-.27.603-.603.603v1c.885 0 1.603-.718 1.603-1.603h-1zm-.603-9.431c.333 0 .603.27.603.603h1c0-.885-.718-1.603-1.603-1.603v1zm-13.242-1c-.885 0-1.603.718-1.603 1.603h1c0-.333.27-.603.603-.603v-1zm8.276 4.31h3.31v-1h-3.31v1zm0 3.31h3.31v-1h-3.31v1zM4 20.5h16.552v-1H4v1zM7.362 4v2.759h1V4h-1zm8.828 0v2.759h1V4h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgContact;
