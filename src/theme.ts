import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    smallMobile: true; // adds the `mobile` breakpoint
    averageMobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      smallMobile: 0,
      averageMobile: 575,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
