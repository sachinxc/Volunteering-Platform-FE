import { globalCss } from "./@stitches.config";

const globalStyle = globalCss({
  "*": {
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    transition: "$coAndBg",
  },
  "::selection": {
    backgroundColor: "$onBg100",
  },
  body: {
    backgroundColor: "#01301e", //main theme color
    minHeight: "112vh",
  },
  "@import":
    "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  "#root": {
    minHeight: "100vh",
    width: "100%",
    flex_c: "",
    jc_ac: "",
    position: "relative",
  },
  "#wrapper": {
    width: "100%",
    flex_c: "",
    jfs_ac: "",
    height: "100vh",
    minHeight: "100vh",
  },
  a: {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit color from parent
    // Add additional styling as needed
  },
});

export default globalStyle;
