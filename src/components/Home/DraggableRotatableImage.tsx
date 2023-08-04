import React, { useRef } from "react";
import { useSpring, animated, to } from "react-spring";
import { useGesture } from "react-use-gesture";

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

const DraggableImages: React.FC = () => {
  return (
    <div className="h-[599px] bg-gradient-to-b from-slate-50 to-slate-50 rounded-[28px] p-4 relative">
      <div className="grid grid-cols-3 gap-4">
        {imagesArray.map((imgSrc, index) => (
          <DraggableImage key={index} src={imgSrc} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

interface DraggableImageProps {
  src: string;
  alt: string;
}

const DraggableImage: React.FC<DraggableImageProps> = ({ src, alt }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ xy }, set] = useSpring<{ xy: number[] }>(() => ({ xy: [0, 0] }));

  useGesture(
    {
      onDrag: ({ down, movement }) => {
        if (down) {
          set({ xy: movement });
        }
      },
    },
    { domTarget: ref }
  );

  return (
    <animated.div
      ref={ref}
      style={{
        transform: to(xy, (x, y) => `translate3d(${x}px, ${y}px, 0)`),
        position: "relative",
        cursor: "grab",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="cursor-pointer w-[270px] h-auto"
        draggable="false"
      />
    </animated.div>
  );
};

export default DraggableImages;
