import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Card({
  children,
  className = '',
  onClick,
  isActive = false
}: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      onClick={onClick}
      className={`
        bg-white p-8 rounded-xl transition-all duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${isActive 
          ? 'shadow-lg scale-105 border-2 border-indigo-500' 
          : 'shadow-sm hover:shadow-md border-2 border-transparent'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}