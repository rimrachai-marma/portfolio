import React from "react";

export function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M8 2.667c-1.473 0-2.667 1.194-2.667 2.667v0 21.333c0 1.473 1.194 2.667 2.667 2.667v0h16c1.473 0 2.667-1.194 2.667-2.667v0-16l-8-8zM8 5.333h9.333v6.667h6.667v14.667h-16zM10.667 16v2.667h10.667v-2.667zM10.667 21.333v2.667h6.667v-2.667z"></path>
    </svg>
  );
}
