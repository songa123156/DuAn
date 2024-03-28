import React from "react";
import { RiFlag2Line } from "react-icons/ri";

interface MyComponentProps {
  countryCode: string;
}

function Flag({ countryCode }: MyComponentProps) {
  return (
    <div>
      {/* Render Vietnam flag if the country code is 'vn' */}
      {countryCode === "vn" && <RiFlag2Line />}

      {/* Render United States flag if the country code is 'us' */}
      {countryCode === "us" && <RiFlag2Line />}

      {/* Render France flag if the country code is 'fr' */}
      {countryCode === "fr" && <RiFlag2Line />}

      {/* Add more conditions for other country flag icons */}
    </div>
  );
}

export default Flag;
