/**
 * Types mapping for SCSS modules files (Ex: classes.button)
 */

// 1 options
// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

// 2 option
declare module "*.module.css";
declare module "*.module.scss";
/////////////////////////////////////////////////////////////


// File types declaration
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"

// TODO: For React 18 React.VFC is deprecated. Add this:
// declare module '*.svg' {
//   const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;

//   export default svg;
// }
declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;

  export default SVG;
}
/////////////////////////////////////////////////////////////


// Global custom constants
declare const __IS_DEV__: boolean;
