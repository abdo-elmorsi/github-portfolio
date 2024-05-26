"use client"
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import SectionTitle from "../helper/section-title";

function Contributions() {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Activity Graph" />

      <div className="w-full flex justify-end py-4">
        <select
          value={year}
          onChange={handleYearChange}
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-md transition-all duration-300 hover:from-pink-500 hover:to-violet-600 px-4 py-2 w-[150px] text-center">

          {Array.from({ length: 4 }, (_, i) => {
            const y = new Date().getFullYear() - i;
            return <option key={y} value={y} className="bg-gray-200 text-gray-700">{y}</option>;
          })}
        </select>
      </div>

      <div className="w-full flex justify-center py-12">
        <GitHubCalendar
          username="abdo-elmorsi"
          blockSize={14}
          year={year}
        />
      </div>
    </div>
  );
}

export default Contributions;
