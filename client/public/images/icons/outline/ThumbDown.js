import * as React from "react";

function SvgThumbDown(props) {
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
        d="M7.322 14.52h-.5v.145l.078.123.422-.269zm2.987 4.693l.422-.268-.422.268zm2.953-1.672l-.447.224.447-.224zm-1.511-3.022v-.5a.5.5 0 00-.447.724l.447-.224zm7.75-5.536h.5v-.167l-.1-.133-.4.3zm-2.657-3.544l.4-.3-.4.3zm-4.228 14.319l.258.428-.258-.428zM4.5 15.073V4h-1v11.073h1zm2.4-.286l2.987 4.694.844-.537-2.987-4.693-.844.537zm6.809 2.53l-1.51-3.021-.895.447 1.51 3.022.895-.448zm-1.958-2.298h5.536v-1h-5.536v1zM20 12.305V8.983h-1v3.322h1zm-.1-3.622l-2.657-3.544-.8.6 2.658 3.544.8-.6zm-4.828-4.63H9.536v1h5.537v-1zM6.822 6.769v7.751h1V6.77h-1zm10.465 8.251c1.5 0 2.715-1.215 2.715-2.714h-1c0 .947-.768 1.714-1.715 1.714v1zM9.537 4.054a2.715 2.715 0 00-2.715 2.714h1c0-.947.767-1.714 1.714-1.714v-1zm3.336 16.132a2.199 2.199 0 00.836-2.869l-.894.448c.28.56.081 1.242-.456 1.564l.514.857zM17.245 5.14a2.714 2.714 0 00-2.171-1.085v1c.54 0 1.047.254 1.371.685l.8-.6zM9.887 19.481a2.199 2.199 0 002.986.705l-.514-.857a1.199 1.199 0 01-1.628-.384l-.844.536z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbDown;