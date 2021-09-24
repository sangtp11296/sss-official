import * as React from "react";

function SvgContract(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.183 16.693h.003-.003z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm6.4 2.667H8.2v1.066h3.2V8.267zm4.267 3.2H8.2v1.066h7.467v-1.066zm-5.009 4.168c-.43.116-.767.445-.885.8l-1.012-.337c.237-.711.86-1.289 1.62-1.493.755-.203 1.615-.033 2.36.652.223-.066.445-.103.664-.115.574-.03 1.09.115 1.533.299.326.135.64.307.906.45.085.047.164.09.237.128.345.181.535.248.652.248v1.066c-.416 0-.826-.2-1.148-.37-.099-.051-.195-.104-.29-.155a8.188 8.188 0 00-.767-.382c-.357-.15-.707-.238-1.066-.218a1.771 1.771 0 00-.16.015l.001.015c.029.346-.114.63-.298.835-.34.378-.894.576-1.31.652a2.09 2.09 0 01-.655.026.96.96 0 01-.351-.119.664.664 0 01-.323-.461.723.723 0 01.118-.513c.075-.115.175-.214.279-.3.202-.167.496-.348.89-.547l.028-.021a1.312 1.312 0 00-1.023-.155z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgContract;