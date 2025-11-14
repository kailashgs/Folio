// Temporary type definitions until dependencies are installed
// These will be replaced by actual @types/react once npm install is run

declare module 'react' {
  namespace React {
    type ReactNode = string | number | boolean | null | undefined | JSX.Element | ReactNode[];
    
    interface ReactElement<P = any, T = any> {
      type: T;
      props: P;
      key: string | number | null;
    }
  }
  
  export type ReactNode = React.ReactNode;
  export default any;
}

