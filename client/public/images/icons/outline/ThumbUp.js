import * as React from "react";

function SvgThumbUp(props) {
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
        d="M7.322 9.48L6.9 9.213l-.078.123v.146h.5zm2.987-4.693l.422.269-.422-.269zm2.953 1.672l-.447-.224.447.224zM11.75 9.481l-.447-.224a.5.5 0 00.447.724v-.5zm7.75 5.536l.4.3.1-.133v-.167h-.5zm-2.657 3.544l.4.3-.4-.3zM12.616 4.242l.258-.428-.258.428zM3.5 8.927V20h1V8.927h-1zm4.244.822l2.987-4.693-.844-.537L6.9 9.212l.844.537zm5.07-3.514l-1.51 3.022.894.448 1.511-3.022-.894-.448zm-1.063 3.746h5.536v-1h-5.536v1zM19 11.695v3.322h1v-3.322h-1zm.1 3.022l-2.657 3.543.8.6 2.658-3.543-.8-.6zm-4.028 4.23H9.536v1h5.537v-1zm-7.251-1.715V9.48h-1v7.75h1zm9.465-7.251c.947 0 1.715.768 1.715 1.714h1c0-1.499-1.215-2.714-2.715-2.714v1zm-7.75 8.965a1.715 1.715 0 01-1.715-1.714h-1c0 1.499 1.215 2.714 2.714 2.714v-1zm2.822-14.275c.537.322.736 1.004.456 1.564l.894.448a2.2 2.2 0 00-.835-2.87l-.515.858zm4.085 13.59a1.715 1.715 0 01-1.371.685v1c.854 0 1.659-.402 2.171-1.086l-.8-.6zM10.731 5.056a1.2 1.2 0 011.628-.385l.515-.857a2.199 2.199 0 00-2.987.705l.844.537z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbUp;
