import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const Map = () => {
  return (
    <Document file="./map.pdf">
      <Page pageNumber={1} />
    </Document>
  );
};

export default Map;
