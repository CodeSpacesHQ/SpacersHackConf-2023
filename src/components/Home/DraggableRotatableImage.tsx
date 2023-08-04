// import React, { useRef, useState } from "react";
// import { motion, useAnimation, useMotionValue } from "framer-motion";

// import {
//   first,
//   second,
//   third,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine,
//   ten,
//   eleven,
//   twelve,
// } from "../../assets/stickynotes";

// const imagesArray = [
//   first,
//   second,
//   third,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine,
//   ten,
//   eleven,
//   twelve,
// ];

// interface DraggableImage {
//   src: string;
//   alt: string;
//   targetX: number;
//   targetY: number;
// }

// const DraggableImages: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const containerHeight = 600;
//   const imageWidth = 270;
//   const imageHeight = 200;

//   const [images, setImages] = useState<DraggableImage[]>(() =>
//     imagesArray.map((src, i) => ({
//       src,
//       alt: `Image ${i + 1}`,
//       targetX: (i % 3) * (imageWidth + 20),
//       targetY: i < 3 ? 0 : containerHeight - imageHeight,
//     }))
//   );

//   const handleDragEnd = (index: number) => {
//     const newRow = Math.floor(index / 3) - 1;
//     const newRowY = containerHeight - (newRow + 1) * (imageHeight + 20);
//     const newCol = index % 3 === 0 ? 1 : 0;
//     const newColX = 1 * (imageWidth + 20);

//     let targetX = images[index].targetX;
//     let targetY = images[index].targetY;

//     // Check for collisions with other images
//     let collided = false;

//     images.forEach((image, i) => {
//       if (i !== index) {
//         const rect = containerRef.current
//           ?.querySelector(`#image-${i}`)
//           ?.getBoundingClientRect();

//         if (rect) {
//           if (
//             targetX + imageWidth + 20 > rect.left &&
//             targetX < rect.right &&
//             targetY + imageHeight + 20 > rect.top &&
//             targetY < rect.bottom
//           ) {
//             collided = true;
//             targetX = targetX + newColX;
//             targetY = targetY;
//           }
//         }
//       }
//     });

//     if (!collided) {
//       if (targetX + newColX < window.innerWidth - imageWidth) {
//         targetX = targetX + newColX;
//       } else {
//         targetX = 0;
//         targetY = newRowY;
//       }
//     }

//     setImages((prevImages) =>
//       prevImages.map((image, i) =>
//         i === index ? { ...image, targetX, targetY } : image
//       )
//     );
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="h-[599px] bg-gradient-to-b from-slate-50 to-slate-50 rounded-[28px] p-4 relative overflow-hidden"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 270px)",
//         gap: "20px",
//       }}
//     >
//       {images.map(({ src, alt, targetX, targetY }, index) => (
//         <DraggableImage
//           key={index}
//           src={src}
//           alt={alt}
//           targetX={targetX}
//           targetY={targetY}
//           onDragEnd={() => handleDragEnd(index)}
//         />
//       ))}
//     </div>
//   );
// };

// interface DraggableImageProps extends DraggableImage {
//   onDragEnd: () => void;
// }

// const DraggableImage: React.FC<DraggableImageProps> = ({
//   src,
//   alt,
//   targetX,
//   targetY,
//   onDragEnd,
// }) => {
//   const controls = useAnimation();
//   const imageRef = useRef<HTMLImageElement>(null);

//   const handleDrag = (event: MouseEvent | TouchEvent, info: any) => {
//     event.preventDefault();

//     // Calculate new position based on the initial target position and the drag distance
//     const newX = targetX + info.offset.x;
//     const newY = targetY + info.offset.y;

//     // Update the image position using framer-motion
//     controls.start({ x: newX, y: newY });
//   };

//   return (
//     <motion.div
//       style={{ x: targetX, y: targetY, position: "relative", cursor: "grab" }}
//       drag
//       dragConstraints={{
//         left: 0,
//         top: 0,
//         right: window.innerWidth - imageRef.current!.width,
//         bottom: window.innerHeight - imageRef.current!.height,
//       }}
//       dragElastic={0.2}
//       onDrag={handleDrag}
//       onDragEnd={onDragEnd}
//       id={`image-${targetX}-${targetY}`}
//     >
//       <img
//         ref={imageRef}
//         src={src}
//         alt={alt}
//         className="cursor-pointer w-[270px] h-auto"
//         draggable="false"
//       />
//     </motion.div>
//   );
// };

// export default DraggableImages;
