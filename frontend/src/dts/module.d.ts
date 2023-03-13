declare module '*.sass' {
  const css: { [key: string]: string };
  export = css;
}

declare module '*.module.css';
declare module '*.jpg';
declare module '@utils/utility';
declare module '@components/Lakes/Lakes';
declare module '@components/Titles/Titles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
