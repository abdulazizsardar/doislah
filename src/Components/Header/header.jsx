import { useState } from "react";
import switcher from "../../Helpers/switcher";
import Logo from "../../logo.svg";

const Header = () => {

  const [active, setActive] = useState("home")

const menuData = [
  { name: "হোম", slug:"home"},
  { name: "ইসলাম", slug:"islam"},
  { name: "ইবাদত", slug:"ibadat"},
  { name: "আত্মশুদ্ধি", slug:"attoshuddhi"},
  { name: "অন্যান্য", slug:"others"},
]

  return (
    <>
      <div
        className="w-full md:w-2/3 p-7 justify-between flex mx-auto text-w
      hite md:text-large bg-dark"
      >
        <div className="Logo">
          <a
            onClick={(e) => {
              switcher("home", "", "", e);
            }}
          >
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="menu-section">
          <ul className="flex items-center gap-5">
          {
            menuData.map((e, k)=>{
              return(
                <li key={k} className={`text-large font-semibold ${active === e.slug ? "active" : ""}`}>
                <a
                  onClick={(k) => {
                    switcher(e.slug, "", "", k);
                    setActive(e.slug)
                  }}
                >
                  {e.name}
                </a>
              </li>
              )
            })
          }
          </ul>
        </div>
        <div className="flex gap-2">
          <a href="">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8089 11.6851C14.72 11.5068 14.5446 11.3877 14.3461 11.3708C11.9548 11.1785 9.83787 9.75049 8.76407 7.60523C7.69027 5.45996 7.81574 2.9095 9.09493 0.879992C9.20421 0.711083 9.2166 0.497155 9.12757 0.316754C9.03855 0.136353 8.86121 0.0160605 8.66067 4.31188e-05C8.44926 4.31188e-05 8.24356 4.31188e-05 8.02642 4.31188e-05C4.17709 -0.0125125 0.86464 2.71825 0.14273 6.4993C-0.57918 10.2804 1.49418 14.0394 5.07737 15.4459C8.66055 16.8525 12.7374 15.5076 14.7803 12.2451C14.8871 12.0762 14.8979 11.8639 14.8089 11.6851Z"
                fill="#B50069"
              ></path>
            </svg>
          </a>
          <a href="">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8089 11.6851C14.72 11.5068 14.5446 11.3877 14.3461 11.3708C11.9548 11.1785 9.83787 9.75049 8.76407 7.60523C7.69027 5.45996 7.81574 2.9095 9.09493 0.879992C9.20421 0.711083 9.2166 0.497155 9.12757 0.316754C9.03855 0.136353 8.86121 0.0160605 8.66067 4.31188e-05C8.44926 4.31188e-05 8.24356 4.31188e-05 8.02642 4.31188e-05C4.17709 -0.0125125 0.86464 2.71825 0.14273 6.4993C-0.57918 10.2804 1.49418 14.0394 5.07737 15.4459C8.66055 16.8525 12.7374 15.5076 14.7803 12.2451C14.8871 12.0762 14.8979 11.8639 14.8089 11.6851Z"
                fill="#B50069"
              ></path>
            </svg>
          </a>
          <a href="">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8089 11.6851C14.72 11.5068 14.5446 11.3877 14.3461 11.3708C11.9548 11.1785 9.83787 9.75049 8.76407 7.60523C7.69027 5.45996 7.81574 2.9095 9.09493 0.879992C9.20421 0.711083 9.2166 0.497155 9.12757 0.316754C9.03855 0.136353 8.86121 0.0160605 8.66067 4.31188e-05C8.44926 4.31188e-05 8.24356 4.31188e-05 8.02642 4.31188e-05C4.17709 -0.0125125 0.86464 2.71825 0.14273 6.4993C-0.57918 10.2804 1.49418 14.0394 5.07737 15.4459C8.66055 16.8525 12.7374 15.5076 14.7803 12.2451C14.8871 12.0762 14.8979 11.8639 14.8089 11.6851Z"
                fill="#B50069"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
