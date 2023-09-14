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
    <div>
      <button onClick={toggleScanning}>{scanning ? "Stop" : "Start Scanning"}</button>
      <ul className="results">
        {results.map((result: any) => (
          <Result key={result.codeResult.code} result={result} />
        ))}
      </ul>
      {scanning ? <BarcodeScanner onDetected={handleDetectedResult} /> : null}
    </div>
  );
};

export default Scan;
