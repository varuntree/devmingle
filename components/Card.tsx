// components/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-gradient-to-br from-white/10 to-white/5
      backdrop-blur-lg
      border border-white/20
      rounded-xl
      shadow-lg shadow-black/40
      p-6
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;