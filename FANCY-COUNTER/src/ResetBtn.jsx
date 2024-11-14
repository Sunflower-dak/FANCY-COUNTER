export default function ResetBtn({ setNumber }) {
  const resetHandler = (event) => {
    setNumber(0);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={resetHandler}>
      <Link></Link>
    </button>
  );
}

/* <button className="reset-btn" onClick={resetHandler}>
      <ResetIcon className="reset-btn-icon" />
    </button>*/

function Link() {
  return (
    <svg
      className="reset-btn-icon"
      width="120px"
      height="120px"
      viewBox="-2.1 -2.1 25.20 25.20"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#1d2507"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="matrix(0 1 1 0 2.5 2.5)"
        >
          {" "}
          <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>{" "}
          <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
