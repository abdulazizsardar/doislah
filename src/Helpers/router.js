import { root } from "..";
import HomeBanner from "../Components/Home Banner/homeBanner";
import SinglePost from "../Components/Single Post/singlePost";
import { getPost } from "./request";

const router = (page, arg) => {
  switch (page) {
    case "home":
      piston(
        <HomeBanner />
      );
      break;
    case "posts":
      getPost(arg[0]).then((e)=>{
        piston(
          <>
           {SinglePost(e)}
          </>
        );
      }).catch((e)=>{
        piston(
          <>
          <center> Not found</center>
          </>
        );
      })
      
      break;
    case "ibadat":
      piston(
        <>
          <center>
            Ibadat
          </center>
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
