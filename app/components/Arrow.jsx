import React from 'react';

const Arrow = ({ 
  hexagonNumber, 
  text, 
  description, 
  position = "right", 
  showLine = true, 
  lineDirection = "horizontal",
  lineLength = 200,
  customHexagonClass = "",
  customTextClass = ""
}) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Left side layout (text-circle-line-hexagon) */}
      {position === "left" && (
        <>
          {/* Text Content */}
          <div className={`text-content mr-8 ${customTextClass}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{text}</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">{description}</p>
          </div>
          
          {/* Blue Circle */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10"></div>
            
            {/* Connecting Line */}
            {showLine && (
              <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-0">
                {lineDirection === "horizontal" ? (
                  <div 
                    className="h-1 bg-gradient-to-r from-[#3fd7f1] to-[#1b80d5]"
                    style={{ width: `${lineLength}px` }}
                  ></div>
                ) : (
                  <div 
                    className="w-1 bg-gradient-to-b from-[#3fd7f1] to-[#1b80d5]"
                    style={{ height: `${lineLength}px` }}
                  ></div>
                )}
              </div>
            )}
          </div>
          
          {/* Hexagon */}
          <div className={`ml-8 ${customHexagonClass}`}>
            <div 
              className="w-20 h-20 bg-gray-100 flex items-center justify-center shadow-lg relative"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
              }}
            >
              <span className="text-3xl font-bold text-[#25c3e5] z-10">{hexagonNumber}</span>
            </div>
          </div>
        </>
      )}
      
      {/* Right side layout (hexagon-line-circle-text) */}
      {position === "right" && (
        <>
          {/* Hexagon */}
          <div className={`mr-8 ${customHexagonClass}`}>
            <div 
              className="w-20 h-20 bg-gray-100 flex items-center justify-center shadow-lg relative"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
              }}
            >
              <span className="text-3xl font-bold text-[#25c3e5] z-10">{hexagonNumber}</span>
            </div>
          </div>
          
          {/* Blue Circle with Line */}
          <div className="relative">
            {/* Connecting Line */}
            {showLine && (
              <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-0">
                {lineDirection === "horizontal" ? (
                  <div 
                    className="h-1 bg-gradient-to-r from-[#1b80d5] to-[#3fd7f1]"
                    style={{ width: `${lineLength}px` }}
                  ></div>
                ) : (
                  <div 
                    className="w-1 bg-gradient-to-b from-[#1b80d5] to-[#3fd7f1]"
                    style={{ height: `${lineLength}px` }}
                  ></div>
                )}
              </div>
            )}
            
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10"></div>
          </div>
          
          {/* Text Content */}
          <div className={`text-content ml-8 ${customTextClass}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{text}</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Arrow; 