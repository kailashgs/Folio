// Global JSX type definitions until dependencies are installed

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element extends React.ReactElement {}
  }
}

export {};

