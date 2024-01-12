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