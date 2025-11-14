// Temporary type definitions until dependencies are installed
// These will be replaced by actual @types/next once npm install is run

declare module 'next' {
  export type Metadata = {
    title?: string;
    description?: string;
    [key: string]: any;
  };
  
  export * from 'next/types';
}

