import { root } from "..";
import Loader from "../Components/Loader/loader";
import router from "./router";

const switcher = (url, pageTl, pageSI, event) => {
  if (event) {
    event.preventDefault();
  }
  root.render(<Loader />);
  window.history.pushState(null, null, url);
  router(url, [pageTl, pageSI]);
};

export default switcher;
