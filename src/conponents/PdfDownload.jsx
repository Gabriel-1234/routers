import React from 'react';
import generatePDF, { Margin, Resolution } from 'react-to-pdf';

const PdfDownload = () => {

  const options = {
    // default is `save`
    method: 'save',
    resolution: Resolution.HIGH,
    page: {
       margin: Margin.SMALL,
       // default is 'A4'
       format: 'A4',
       orientation: 'default',
    },
    canvas: {
       mimeType: 'image/png',
       qualityRatio: 1
    },
    overrides: {
       pdf: {
          compress: true
       },
       canvas: {
          useCORS: true
       }
    },
 };

 const getTargetElement = () => document.getElementById('pdf-content');

  return (
    <div>
      <div id='pdf-content' style={{padding: '20px', border: '1px solid black', width: '100%'}}>
        <h2 style={{color: "#000"}}>Downloadable content</h2>
        <p  style={{color: "#000"}}>This content will be downloaded as an image</p>

        <p style={{color: "#000"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      </div>

      <button onClick={() => generatePDF(getTargetElement, options)}>Download Div as image</button>
    </div>
  )
}

export default PdfDownload
