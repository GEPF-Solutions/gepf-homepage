// "Opens elsewhere" arrow. An SVG instead of the ↗ character, because iOS
// renders that character as a colored emoji.
export default function ExternalArrow() {
  return (
    <svg
      className="external-arrow"
      width="0.7em"
      height="0.7em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}
