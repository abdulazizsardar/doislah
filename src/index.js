import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

export const header = ReactDOM.createRoot(document.getElementById("header"));
export const root = ReactDOM.createRoot(document.getElementById("root"));
export const footer = ReactDOM.createRoot(document.getElementById("footer"));

header.render(<Header />);

footer.render(<Footer />);
