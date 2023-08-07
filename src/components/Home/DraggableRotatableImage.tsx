import React, { useRef, useState, useEffect } from "react";

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

const DraggableCanvas: React.FC = () => {
  const containerHeight = 599;
  const [containerPadding, setContainerPadding] = useState(28); // Default padding value

  useEffect(() => {
    const handleResize = () => {
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
    };

    // Call the handleResize function when the window is resized
    window.addEventListener("resize", handleResize);
    // Call the handleResize function initially to set the padding based on the initial screen size
    handleResize();

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [balls, setBalls] = useState<
    {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      rotation: number; // New property to store the rotation of the ball
    }[]
  >([
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

  return (
    <div className="h-[599px] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-50 rounded-[28px] p-4 relative">
      <div className="w-full h-full flex flex-wrap">
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
  const radius = 80;
  const gravity = 0.2;
  const rotationSpeed = 0.1;

  const ballRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleDragStart = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    setIsDragging(true);
    const offsetX =
      event.clientX - ballRef.current!.getBoundingClientRect().left;
    const offsetY =
      event.clientY - ballRef.current!.getBoundingClientRect().top;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

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

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
    } else {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

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

    return () => clearInterval(intervalId);
  }, [containerHeight, containerPadding, index, radius, gravity, setBalls]);

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

export default DraggableCanvas;
