import { root } from "..";

const router = (page, arg) => {
  switch (page) {
    case "home":
      piston(<>I am Home</>);
      break;
    case "ibadat":
      piston(<>I am ibadat</>);
      break;
    case "others":
      piston(<>I am others</>);
      break;
    case "islam":
      piston(<>I am islam</>);
      break;
    case "attoshuddhi":
      piston(<>I am attoshuddhi</>);
      break;

    default:
      piston(<>Not found</>);

      break;
  }
};

const piston = (dom) => {
  root.render(dom);
};

export default router;
