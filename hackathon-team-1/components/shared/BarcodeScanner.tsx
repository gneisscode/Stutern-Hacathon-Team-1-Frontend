"use client"
import React, { useEffect } from 'react'
import Quagga from "quagga";

interface QuaggaJSScannerProps {
  onDetected: (result: any) => void;
}


const BarcodeScanner: React.FC<QuaggaJSScannerProps> = ({onDetected}) => {
      const _onDetected = (result: any) => {
        onDetected(result);
      };

 useEffect(() => {
   Quagga.init(
     {
       inputStream: {
         name: "Live",
         type: "LiveStream",
        //  target: document.querySelector("#your-video-element"), // Replace with your video element
         constraints: {
           width: 640,
           height: 480,
           facingMode: "environment", // or user
         },
       },
       locator: {
         patchSize: "medium",
         halfSample: true,
       },
       numOfWorkers: 2,
       decoder: {
         readers: ["code_128_reader", "ean_reader", "upc_reader"], // Add barcode formats you want to scan
       },
       locate: true,
     },
     function (err: any) {
       if (err) {
         console.error(err);
         return;
       }
       console.log("Initialization finished. Ready to start");
       Quagga.start();
     }
   );

 Quagga.onDetected(_onDetected);

 return () => {
   Quagga.offDetected(_onDetected);
 };
 }, [onDetected]);

 // JSX for your component
 return (
   <div>
      <div id="interactive" className="viewport" />
    <div>Barcode scanner</div>
   </div>
 );
}



export default BarcodeScanner