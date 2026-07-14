/**
 * Fixed vertical "SCROLL" indicator on the right edge of the viewport
 * with an animated draining line beneath it.
 */
export default function ScrollSideIndicator() {
  return (
    <div className="scroll-side">
      <div className="scroll-line" />
      <div className="scroll-side-label">SCROLL</div>
    </div>
  );
}
