import * as React from "react";

function SvgFaceId(props) {
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
        d="M8 10.214h1.143v-1H8v1zm6.857 0H16v-1h-1.143v1zm.172 3.2c-1.515 2.02-4.543 2.02-6.058 0l-.8.6c1.915 2.553 5.743 2.553 7.658 0l-.8-.6zM4.5 9.143V6.286h-1v2.857h1zM6.286 4.5h2.857v-1H6.286v1zM4.5 6.286c0-.987.8-1.786 1.786-1.786v-1A2.786 2.786 0 003.5 6.286h1zm-1 8.571v2.857h1v-2.857h-1zM6.286 20.5h2.857v-1H6.286v1zM3.5 17.714A2.786 2.786 0 006.286 20.5v-1c-.987 0-1.786-.8-1.786-1.786h-1zM14.857 4.5h2.857v-1h-2.857v1zM19.5 6.286v2.857h1V6.286h-1zM17.714 4.5c.987 0 1.786.8 1.786 1.786h1A2.786 2.786 0 0017.714 3.5v1zm-2.857 16h2.857v-1h-2.857v1zm5.643-2.786v-2.857h-1v2.857h1zM17.714 20.5a2.786 2.786 0 002.786-2.786h-1c0 .987-.8 1.786-1.786 1.786v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFaceId;
