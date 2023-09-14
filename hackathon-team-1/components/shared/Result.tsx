import React from "react";

interface ResultProps {
  result: {
    codeResult: {
      code: string;
      format: string;
    };
  } | null;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <li>
      {result.codeResult.code} [{result.codeResult.format}]
    </li>
  );
};

export default Result;
