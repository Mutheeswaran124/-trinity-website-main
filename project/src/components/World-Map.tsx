import React, { useRef, useState } from "react";

interface MapProps {
  points?: Array<{ lat: number; lng: number; isActive?: boolean; label?: string }>;
}

const MAP_WIDTH = 2000;
const MAP_HEIGHT = 1001;

// Enhanced projection function with better positioning for common world map projections
const projectPoint = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * MAP_WIDTH;
  const latRad = (lat * Math.PI) / 180;
  const mercatorY = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = MAP_HEIGHT / 2 - (mercatorY * MAP_HEIGHT) / (2 * Math.PI);
  return { x, y };
};

// Alternative simple projection (fallback)
const projectPointSimple = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * MAP_WIDTH;
  const y = ((90 - lat) / 180) * MAP_HEIGHT;
  return { x, y };
};

const WorldMap: React.FC<MapProps> = ({ points = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [debugMode, setDebugMode] = useState(false);
  const [projectionType, setProjectionType] = useState<'mercator' | 'simple'>('mercator');

  // Debug click handler to help with positioning
  const handleMapClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!debugMode || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * MAP_WIDTH;
    const y = ((event.clientY - rect.top) / rect.height) * MAP_HEIGHT;
    const lng = (x / MAP_WIDTH) * 360 - 180;
    const lat = 90 - (y / MAP_HEIGHT) * 180;
    console.log(`Clicked at: x=${x.toFixed(0)}, y=${y.toFixed(0)}`);
    console.log(`Approximate coordinates: lat=${lat.toFixed(4)}, lng=${lng.toFixed(4)}`);
  };

  return (
    <div className="w-full aspect-[2/1] bg-gray-50 rounded-lg relative font-sans overflow-hidden border border-gray-200">
      {/* Debug Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setDebugMode(!debugMode)}
          className={`px-3 py-1 text-xs rounded ${
            debugMode 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition-colors`}
        >
          {debugMode ? 'Debug ON' : 'Debug OFF'}
        </button>
        <button
          onClick={() => setProjectionType(projectionType === 'mercator' ? 'simple' : 'mercator')}
          className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          {projectionType === 'mercator' ? 'Mercator' : 'Simple'}
        </button>
      </div>

      {/* World Map Image */}
      <img
        src="/world-map.svg"
        alt="world map"
        className="h-full w-full absolute inset-0 pointer-events-none select-none"
        style={{ objectFit: "cover" }}
        draggable={false}
      />
      
      {/* SVG Overlay for Points */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="w-full h-full absolute inset-0 cursor-crosshair"
        style={{ pointerEvents: debugMode ? 'auto' : 'none' }}
        onClick={handleMapClick}
      >
        {/* Grid lines for debugging */}
        {debugMode && (
          <g opacity="0.3">
            {/* Vertical lines every 30 degrees */}
            {Array.from({ length: 13 }).map((_, i) => {
              const lng = -180 + (i * 30);
              const x = ((lng + 180) / 360) * MAP_WIDTH;
              return (
                <line
                  key={`v-${i}`}
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={MAP_HEIGHT}
                  stroke="#ff0000"
                  strokeWidth="1"
                />
              );
            })}
            {/* Horizontal lines every 30 degrees */}
            {Array.from({ length: 7 }).map((_, i) => {
              const lat = 90 - (i * 30);
              const y = ((90 - lat) / 180) * MAP_HEIGHT;
              return (
                <line
                  key={`h-${i}`}
                  x1={0}
                  y1={y}
                  x2={MAP_WIDTH}
                  y2={y}
                  stroke="#ff0000"
                  strokeWidth="1"
                />
              );
            })}
          </g>
        )}

        {/* Office Location Points */}
        {points.map((point, i) => {
          const { x, y } = projectionType === 'mercator' 
            ? projectPoint(point.lat, point.lng)
            : projectPointSimple(point.lat, point.lng);
          
          return (
            <g key={`office-point-${i}`}>
              {/* Point Shadow */}
              <circle
                cx={x + 2}
                cy={y + 2}
                r={point.isActive ? 14 : 9}
                fill="rgba(0,0,0,0.2)"
              />
              
              {/* Main Point */}
              <circle
                cx={x}
                cy={y}
                r={point.isActive ? 14 : 9}
                fill={point.isActive ? "#0ea5e9" : "#3b82f6"}
                stroke="#ffffff"
                strokeWidth={point.isActive ? 4 : 3}
                className="drop-shadow-lg"
              />
              
              {/* Pulse Animation for Active Point */}
              {point.isActive && (
                <circle
                  cx={x}
                  cy={y}
                  r={14}
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="14;24;14"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              
              {/* Label */}
              {point.label && (
                <g>
                  {/* Label Background */}
                  <rect
                    x={x - 40}
                    y={y - 35}
                    width="80"
                    height="16"
                    rx="8"
                    fill="rgba(255,255,255,0.95)"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  {/* Label Text */}
                  <text
                    x={x}
                    y={y - 25}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="600"
                    fill="#1f2937"
                    style={{ pointerEvents: "none" }}
                  >
                    {point.label}
                  </text>
                </g>
              )}
              
              {/* Debug Info */}
              {debugMode && (
                <text
                  x={x}
                  y={y + 35}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#ef4444"
                  fontWeight="bold"
                >
                  {`${point.lat.toFixed(1)}, ${point.lng.toFixed(1)}`}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WorldMap;