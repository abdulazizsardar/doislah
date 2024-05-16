import router from "./router";

const switcher = (url, pageTL, pageSl) => {
  window.history.pushState(null, null, url); // change the url
  router(pageTL, pageSl);
};
export default switcher;
