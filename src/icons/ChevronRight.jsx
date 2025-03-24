function ChevronRight({ size = 24, fill = "none" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 4l3 8l-3 8" />
    </svg>
  );
}

export default ChevronRight;
