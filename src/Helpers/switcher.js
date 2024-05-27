import { root } from "..";
import Loader from "../Components/Loader/loader";
import router from "./router";

const switcher = (url, pageTL, pageSl, event) => {
  if (event) {
    event.preventDefault();
  }
  root.render(<Loader />);
  console.log(`${url}/${pageTL}`)
  window.history.pushState(null, null, `../${url}/${pageTL}`);
  router(url, [pageTL, pageSl]);
};
export default switcher;
