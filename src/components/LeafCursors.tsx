import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { useState, useEffect } from "react";

export const LeafCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden lg:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 1.2 : 1,
        rotate: isPointer ? 10 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
    >
      <Leaf size={24} className="text-green-600 fill-green-500" />
    </motion.div>
  );
};
