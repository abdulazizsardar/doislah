import { root } from "..";
import SinglePost from "../Components/Single Post/singlePost";

const router = (page, arg) => {
  switch (page) {
    case "home":
      piston(
        <>
          <center>I am Home</center>
        </>
      );
      break;
    case "sp":
      piston(
        <>
          <SinglePost/>
        </>
      );
      break;
    case "ibadat":
      piston(
        <>
          <center> I am ibadat </center>
        </>
      );
      break;
    case "others":
      piston(
        <>
          <center>I am others</center>
        </>
      );
      break;
    case "islam":
      piston(
        <>
          <center>I am islam</center>
        </>
      );
      break;
    case "attoshuddhi":
      piston(
        <>
          <center>I am attoshuddhi</center>
        </>
      );
      break;

    default:
      piston(
        <>
          <center>Not found</center>
        </>
      );

      break;
  }
};

const piston = (dom) => {
  root.render(dom);
};

export default router;
