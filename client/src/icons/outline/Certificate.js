import * as React from "react";

function SvgCertificate(props) {
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
        d="M14.286 20h-.5a.5.5 0 00.8.4l-.3-.4zm2.285-1.714l.3-.4a.5.5 0 00-.6 0l.3.4zM18.857 20l-.3.4a.5.5 0 00.8-.4h-.5zm-2.286-3.929a2.929 2.929 0 01-2.928-2.928h-1a3.929 3.929 0 003.928 3.928v-1zm2.929-2.928a2.929 2.929 0 01-2.929 2.928v1a3.929 3.929 0 003.929-3.928h-1zm-2.929-2.929a2.929 2.929 0 012.929 2.929h1a3.929 3.929 0 00-3.929-3.929v1zm0-1a3.929 3.929 0 00-3.928 3.929h1a2.929 2.929 0 012.928-2.929v-1zm-2.785 6.214V20h1v-4.572h-1zm.8 4.972l2.285-1.714-.6-.8-2.285 1.714.6.8zm1.685-1.714l2.286 1.714.6-.8-2.286-1.714-.6.8zM19.357 20v-4.572h-1V20h1zM20.5 9.143v-4h-1v4h1zM18.857 3.5H5.143v1h13.714v-1zM3.5 5.143v13.714h1V5.143h-1zM5.143 20.5h7.428v-1H5.143v1zM3.5 18.857c0 .907.736 1.643 1.643 1.643v-1a.643.643 0 01-.643-.643h-1zM5.143 3.5c-.907 0-1.643.735-1.643 1.643h1c0-.355.288-.643.643-.643v-1zM20.5 5.143c0-.908-.735-1.643-1.643-1.643v1c.355 0 .643.288.643.643h1zM6.857 9.07h5.714v-1H6.857v1zm0 3.429h3.429v-1H6.857v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCertificate;