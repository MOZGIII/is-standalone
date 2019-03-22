const isStandalone = () =>
  navigator.standalone === true ||
  window.matchMedia("(display-mode: standalone)").matches;

export default isStandalone;
