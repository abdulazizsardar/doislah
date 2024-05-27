import switcher from "./Helpers/switcher";

const App = () => {
  const path = window.location.pathname.split("/");
  let page = path[1];
  switcher(page, path[2], path[3]);
};


export default App;
