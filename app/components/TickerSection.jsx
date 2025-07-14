import React from "react";

const TickerSection = () => {
  // You can customize these arrays for your content
  const topLine = [
    { text: "Proven Results Across 15+ Industries", bold: false },
    { text: "Transparent Communication & Reporting", bold: false },
    { text: "Global Delivery Model", bold: false },
    { text: "24/7 Support", bold: false },
  ];
  const bottomLine = [
    { text: "15+ Years Of Industry Experience", bold: true },
    { text: "98% Client Retention Rate", bold: true },
    { text: "Proven Results", bold: true },
    { text: "Global Delivery", bold: true },
  ];

  // Helper to render a line with dots
  const renderLine = (items, outline = false) => (
    <>
      {items.map((item, idx) => (
        <span
          key={idx}
          className={
            outline
              ? "outline-text text-4xl font-bold mx-2"
              : item.bold
              ? "font-bold text-gray-700"
              : "font-normal text-gray-500"
          }
        >
          {item.text}
          {idx !== items.length - 1 && <span className="mx-4">&bull;</span>}
        </span>
      ))}
    </>
  );

  return (
    <div className="bg-[#f3fbfe] py-10 overflow-hidden border-b border-gray-100">
      {/* Top ticker: right to left */}
      <div className="relative w-full h-20 flex items-center">
        <div className="whitespace-nowrap animate-ticker-left text-2xl font-sans flex items-center">
          {renderLine(topLine, true)}
          {/* Repeat for infinite effect */}
          <span className="mx-8" />
          {renderLine(topLine, true)}
        </div>
      </div>
      {/* Bottom ticker: left to right */}
      <div className="relative w-full h-20 flex items-center mt-2">
        <div className="whitespace-nowrap animate-ticker-right text-2xl font-sans flex items-center">
          {renderLine(bottomLine)}
          {/* Repeat for infinite effect */}
          <span className="mx-8" />
          {renderLine(bottomLine)}
        </div>
      </div>
    </div>
  );
};

export default TickerSection; 