declare module "*.module.css";
declare module "*.module.scss";

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}