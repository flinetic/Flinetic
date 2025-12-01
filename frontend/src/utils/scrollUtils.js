/**
 * Smooth scroll to an element by ID
 * @param {string} elementId - The ID of the element to scroll to (without #)
 * @param {number} offset - Offset from the top (default: 80px for navigation)
 * @param {number} duration - Animation duration in seconds (default: 1.2s)
 */
export const scrollToElement = (elementId, offset = 80, duration = 0.5) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  const elementTop = element.offsetTop - offset;

  // Use Lenis if available, otherwise fallback to native scroll
  if (window.lenis) {
    window.lenis.scrollTo(elementTop, { duration });
  } else {
    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });
  }
};

/**
 * Smooth scroll to a specific position
 * @param {number} position - The Y position to scroll to
 * @param {number} duration - Animation duration in seconds (default: 1.2s)
 */
export const scrollToPosition = (position, duration = 0.5) => {
  if (window.lenis) {
    window.lenis.scrollTo(position, { duration });
  } else {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
};

/**
 * Scroll to top of the page
 * @param {number} duration - Animation duration in seconds (default: 1.2s)
 */
export const scrollToTop = (duration = 0.5) => {
  scrollToPosition(0, duration);
};
