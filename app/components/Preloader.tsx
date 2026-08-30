/**
 * A curtain-split intro. Pure CSS by design: no state, no effect, no client
 * boundary — so there is nothing to hydrate, no flash, and it still resolves
 * correctly with JavaScript disabled (the panels animate away regardless).
 *
 * pointer-events are off throughout, so it never intercepts a click even
 * mid-animation, and it is aria-hidden so it is skipped by screen readers.
 */
const Preloader = () => (
  <div className="preloader" aria-hidden="true">
    <span className="preloader__panel preloader__panel--top" />
    <span className="preloader__panel preloader__panel--bottom" />
    <div className="preloader__content">
      <span className="preloader__mark">
        SOUNAK<span className="preloader__dot">.</span>
      </span>
      <span className="preloader__bar" />
    </div>
  </div>
);

export default Preloader;
