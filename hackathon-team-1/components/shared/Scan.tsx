import React, { useState } from "react";
import BarcodeScanner from "./BarcodeScanner";
import Result from "./Result";
import { useResults } from "@/context/ResultContext";

const Scan = ({barcodeInputRef}: any) => {
  const { result, addResult, clearResult } = useResults();
  const [scanning, setScanning] = useState(false);

  const toggleScanning = () => {
    setScanning(!scanning);
  };

  const handleDetectedResult = (newResult: any) => {
    addResult(newResult);
    if (barcodeInputRef && barcodeInputRef.current) {
      barcodeInputRef.current.value = newResult.codeResult.code;
    }
  };

  const handleClearResult = () => {
    clearResult();
  };

  return (
    <div className="flex flex-col items-center w-[100%]">
      {scanning && <p className="text-center">Please place product barcode in frame and hold still</p>}
      <button onClick={toggleScanning} className=" text-[18px] font-bold mt-4 hover:text-slate-600 transition-colors ease-linear delay-150">
        {scanning
          ? "Click to stop scanning  ║▌║█║▌│║▌║▌█"
          : "Click to start scanning 🔎  ║▌║█║▌│║▌║▌█"}
      </button>

      <ul className="results self-center flex flex-col w-[300px] justify-center items-center">
        {result && <Result key={result.codeResult.code} result={result} />}
      </ul>
      {result && <button onClick={handleClearResult}>Clear Result</button>}
      {scanning ? <BarcodeScanner onDetected={handleDetectedResult} /> : null}
    </div>
  );
};

export default Scan;
