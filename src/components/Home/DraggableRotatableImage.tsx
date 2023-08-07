// Import React and other required modules
import React, { useRef, useState, useEffect } from "react";

// Import image assets
import {
  first,
  second,
  third,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
} from "../../assets/stickynotes";

// An array containing the imported image assets
const imagesArray = [
  first,
  second,
  third,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
];

// DraggableCanvas component - the main component that holds the draggable balls
const DraggableCanvas: React.FC = () => {
  // Define the height of the container and the initial container padding
  const containerHeight = 599;
  const [containerPadding, setContainerPadding] = useState(28); // Default padding value

  // useEffect hook to handle resizing of the window and set container padding accordingly
  useEffect(() => {
    // Define breakpoints for different screen sizes
    const mobileBreakpoint = 640;
    const desktopBreakpoint = 1024;
    const largeScreenBreakpoint = 1280;

    // Get the current window width
    const screenWidth = window.innerWidth;

    // Set the padding based on the screen size
    if (screenWidth < mobileBreakpoint) {
      setContainerPadding(28); // Set padding for mobile screens
    } else if (
      screenWidth >= mobileBreakpoint &&
      screenWidth < desktopBreakpoint
    ) {
      setContainerPadding(64); // Set padding for desktop screens
    } else if (
      screenWidth >= desktopBreakpoint &&
      screenWidth < largeScreenBreakpoint
    ) {
      setContainerPadding(65); // Set padding for large screens
    } else {
      setContainerPadding(102); // Set padding for larger screens
    }
  }, []);

  // State to hold the balls and their positions, velocity, and rotation
  const [balls, setBalls] = useState<
    {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      rotation: number; // New property to store the rotation of the ball
    }[]
  >([
    // Initial ball positions and velocities
    { position: { x: 50, y: 50 }, velocity: { x: 1, y: 1 }, rotation: 0 },
    { position: { x: 150, y: 100 }, velocity: { x: -2, y: -1 }, rotation: 0 },
    { position: { x: 200, y: 200 }, velocity: { x: 0.5, y: -1 }, rotation: 0 },
    { position: { x: 300, y: 300 }, velocity: { x: -1, y: 2 }, rotation: 0 },
    { position: { x: 400, y: 400 }, velocity: { x: 2, y: -1 }, rotation: 0 },
    { position: { x: 500, y: 100 }, velocity: { x: -1, y: 1 }, rotation: 0 },
    { position: { x: 600, y: 200 }, velocity: { x: 1, y: -2 }, rotation: 0 },
    { position: { x: 700, y: 300 }, velocity: { x: -2, y: 1 }, rotation: 0 },
    { position: { x: 800, y: 400 }, velocity: { x: 1, y: -1 }, rotation: 0 },
    { position: { x: 900, y: 100 }, velocity: { x: -1, y: 2 }, rotation: 0 },
    { position: { x: 1000, y: 200 }, velocity: { x: 1, y: -2 }, rotation: 0 },
    { position: { x: 1100, y: 300 }, velocity: { x: -2, y: 1 }, rotation: 0 },
  ]);

  // Return the JSX for the DraggableCanvas component
  return (
    <div className="h-[599px] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-50 rounded-[28px] p-4 relative">
      <div className="w-full h-full flex flex-wrap">
        {/* Map through the balls array and render the Ball component for each ball */}
        {balls.map((ball, index) => (
          <Ball
            key={index}
            containerHeight={containerHeight}
            containerPadding={containerPadding}
            ball={ball}
            index={index}
            balls={balls}
            setBalls={setBalls}
          />
        ))}
      </div>
    </div>
  );
};

// Ball component - represents a draggable ball
interface BallProps {
  containerHeight: number;
  containerPadding: number;
  ball: {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    rotation: number;
  };
  index: number;
  balls: {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    rotation: number;
  }[];
  setBalls: React.Dispatch<
    React.SetStateAction<
      {
        position: { x: number; y: number };
        velocity: { x: number; y: number };
        rotation: number;
      }[]
    >
  >;
}

const Ball: React.FC<BallProps> = ({
  containerHeight,
  containerPadding,
  ball,
  index,
  setBalls,
}) => {
  // Constants for the ball properties
  const radius = 80;
  const gravity = 0.2;
  const rotationSpeed = 0.1;

  // Ref to hold the DOM element of the ball
  const ballRef = useRef<HTMLImageElement>(null);

  // State to track if the ball is being dragged
  const [isDragging, setIsDragging] = useState(false);

  // State to hold the drag offset from the initial click position
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Event handler for when the user starts dragging the ball
  const handleDragStart = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    setIsDragging(true);
    const offsetX =
      event.clientX - ballRef.current!.getBoundingClientRect().left;
    const offsetY =
      event.clientY - ballRef.current!.getBoundingClientRect().top;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  // Event handler for when the user stops dragging the ball
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Event handler for when the user moves the mouse while dragging the ball
  const handleDragMove = (event: MouseEvent) => {
    if (isDragging) {
      const newMouseX = event.clientX;
      const newMouseY = event.clientY;

      setBalls((prevBalls) => {
        const updatedBalls = [...prevBalls];
        const ball = updatedBalls[index];

        // Calculate the distance moved by the mouse since the drag started
        const distanceX = newMouseX - (ball.position.x + dragOffset.x);
        const distanceY = newMouseY - (ball.position.y + dragOffset.y);

        // Update the ball position based on the mouse movement
        ball.position.x += distanceX;
        ball.position.y += distanceY;

        // Update the rotation based on the mouse movement
        const newRotation = Math.atan2(distanceY, distanceX) * (180 / Math.PI);
        const rotationDiff = newRotation - ball.rotation;

        // Smooth the rotation update
        ball.rotation += rotationDiff * rotationSpeed;

        // Update the drag offset to the current mouse position
        setDragOffset({
          x: newMouseX - ball.position.x,
          y: newMouseY - ball.position.y,
        });

        return updatedBalls;
      });
    }
  };

  // useEffect hook to add and remove mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("touchmove", handleDragMove as any);
      document.addEventListener("touchend", handleDragEnd);
    } else {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("touchend", handleDragEnd);
    }
    return () => {
      document.removeEventListener("touchmove", handleDragMove as any);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // useEffect hook to handle ball movement and collision
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBalls((prevBalls) => {
        const updatedBalls = [...prevBalls];
        const ball = updatedBalls[index];

        if (!isDragging && ball.velocity.x === 0 && ball.velocity.y === 0) {
          const desiredX = containerPadding + (index % 4) * (radius * 4);
          const desiredY =
            containerHeight - radius - Math.floor(index / 4) * (radius * 4);

          ball.position.x += (desiredX - ball.position.x) * 0.2;
          ball.position.y += (desiredY - ball.position.y) * 0.2;
        } else {
          ball.velocity.y += gravity;
          ball.position.x += ball.velocity.x;
          ball.position.y += ball.velocity.y;

          const containerBottom = containerHeight - radius;
          const containerWidth = window.innerWidth - containerPadding * 2;
          const containerLeft = radius;
          const containerRight = containerWidth + radius;
          const bounceFactor = 0.9;

          // Check for collisions with container boundaries (top, bottom, left, right)
          if (ball.position.y >= containerBottom) {
            ball.position.y = containerBottom;
            ball.velocity.y = -ball.velocity.y * bounceFactor;
          } else if (ball.position.y <= radius) {
            ball.position.y = radius;
            ball.velocity.y = -ball.velocity.y * bounceFactor;
          }

          if (ball.position.x >= containerRight) {
            ball.position.x = containerRight;
            ball.velocity.x = -Math.abs(ball.velocity.x) * bounceFactor;
          } else if (ball.position.x <= containerLeft) {
            ball.position.x = containerLeft;
            ball.velocity.x = Math.abs(ball.velocity.x) * bounceFactor;
          }

          // Check for collisions with other balls
          for (let i = 0; i < updatedBalls.length; i++) {
            if (i !== index) {
              const otherBall = updatedBalls[i];
              const dx = ball.position.x - otherBall.position.x;
              const dy = ball.position.y - otherBall.position.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < radius * 2) {
                const normalX = dx / distance;
                const normalY = dy / distance;
                const dotProduct =
                  ball.velocity.x * normalX + ball.velocity.y * normalY;

                ball.velocity.x -= 2 * dotProduct * normalX * bounceFactor;
                ball.velocity.y -= 2 * dotProduct * normalY * bounceFactor;
              }
            }
          }
        }
        return updatedBalls;
      });
    }, 1000 / 60);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [containerHeight, containerPadding, index, radius, gravity, setBalls]);

  // JSX for rendering the ball image
  return (
    <img
      ref={ballRef}
      src={imagesArray[index % imagesArray.length]}
      alt={`Ball ${index + 1}`}
      className="w-[270px] h-auto rounded-full absolute cursor-grab"
      onMouseDown={handleDragStart}
      style={{
        left: ball.position.x - radius,
        top: ball.position.y - radius,
        transform: `rotate(${ball.rotation}deg)`,
      }}
    />
  );
};

// Export the DraggableCanvas component as the default export
export default DraggableCanvas;
