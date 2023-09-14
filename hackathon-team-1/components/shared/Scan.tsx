"use client"
import React, { useState } from "react";
import BarcodeScanner from "./BarcodeScanner";
import Result from "./Result";

const Scan = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults]: any[] = useState([]);

  const toggleScanning = () => {
    setScanning(!scanning);
  };

  const handleDetectedResult = (result:any) => {
    setResults([...results, result]);
  };

  return (
    <div className="flex flex-col items-center w-[100%]">
      <button onClick={toggleScanning}>{scanning ? "Stop" : "Start Scanning"}</button>
      <ul className="results self-center flex flex-col w-[300px] justify-center items-center">
        {results.map((result: any) => (
          <Result key={result.codeResult.code} result={result} />
        ))}
      </ul>
      {scanning ? <BarcodeScanner onDetected={handleDetectedResult} /> : null}
    </div>
  );
};

export default Scan;
