import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const Card = ({ id, title, description, isExpanded }) => (
    <motion.div 
      className="bg-gray-900 rounded-3xl flex flex-col items-center gap-3 p-3"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
      animate={{ 
        height: isExpanded ? '622px' : '295px',
        width: isExpanded ? '477px' : '325px'
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src="/api/placeholder/290/173"
        alt={title}
        className="rounded-2xl"
        animate={{
          width: isExpanded ? '417px' : '290px',
          height: isExpanded ? '358px' : '173px'
        }}
      />
      <p className="font-semibold text-xl leading-8">{title}</p>
      <p className="font-normal text-sm leading-8 text-center max-w-[253px]">
        {description}
      </p>
    </motion.div>
  );

  return (
    <div className="h-[630px] text-white flex flex-row gap-7">
      {/* Left column */}
      <div className="flex flex-col items-center justify-center gap-7">
        <Card 
          id="ai"
          title="Artificial Intelligence"
          description="Shaping the Future"
          isExpanded={hoveredCard === 'ai'}
        />
        <Card 
          id="health"
          title="Health & Fitness"
          description="Pitches to improve health and fitness"
          isExpanded={hoveredCard === 'health'}
        />
      </div>

      {/* Center column */}
      <Card 
        id="arvr"
        title="AR/VR"
        description="Dive into a world where augmented and virtual reality redefine the way you explore, connect, and create."
        isExpanded={hoveredCard === 'arvr'}
      />

      {/* Right column */}
      <div className="flex flex-col items-center justify-center gap-7">
        <Card 
          id="art"
          title="Art"
          description="Empowering Creativity"
          isExpanded={hoveredCard === 'art'}
        />
        <motion.div
          className="h-[295px] w-[325px] bg-gray-900 rounded-3xl flex flex-col items-center gap-3 p-3"
          animate={{ 
            x: hoveredCard === 'art' ? '-132%' : '0%'
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/api/placeholder/290/173"
            alt="Product"
            className="rounded-2xl"
          />
          <p className="font-semibold text-xl leading-8">Product</p>
          <p className="font-normal text-sm leading-8">
            Redefining the boundaries of reality
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CardGrid;