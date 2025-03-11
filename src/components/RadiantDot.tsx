
import React from 'react';

interface RadiantDotProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const RadiantDot: React.FC<RadiantDotProps> = ({ 
  size = 24, 
  className = "",
  strokeWidth = 8
}) => {
  // Calculate dimensions for the SVG
  const viewBoxSize = 24;
  const centerPoint = viewBoxSize / 2;
  
  // Arrow pointing top-right
  const arrowSize = viewBoxSize / 3;
  const arrowEndX = centerPoint + arrowSize * 0.7;
  const arrowEndY = centerPoint - arrowSize * 0.7;
  
  // Thicker arrow tail
  const tailLength = arrowSize * 1.5; // Made tail even longer
  const tailStartX = centerPoint - tailLength * 0.5;
  const tailStartY = centerPoint + tailLength * 0.5;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Arrow with thicker stroke */}
      <line 
        x1={tailStartX} 
        y1={tailStartY} 
        x2={arrowEndX} 
        y2={arrowEndY} 
        stroke="currentColor" 
        strokeWidth={strokeWidth + 2}
        strokeLinecap="round"
      />
      
      {/* Arrow head lines */}
      <line 
        x1={arrowEndX} 
        y1={arrowEndY} 
        x2={arrowEndX - arrowSize * 0.3} 
        y2={arrowEndY} 
        stroke="currentColor" 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line 
        x1={arrowEndX} 
        y1={arrowEndY} 
        x2={arrowEndX} 
        y2={arrowEndY + arrowSize * 0.3} 
        stroke="currentColor" 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RadiantDot;
