import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      text: "Investing through this platform has transformed my approach to entrepreneurship. I found unique ideas that resonate with my passion, and the returns have been rewarding beyond expectations.",
      author: "Emily Johnson",
      role: "Startup Enthusiast & Investor",
      img: "/images/Article_Publisher.png"
    },
    {
      text: "Pitching my startup here was an incredible experience! I connected with investors who truly believed in my vision, leading to a successful funding round that exceeded all goals.",
      author: "Michael Chen",
      role: "Tech Entrepreneur",
      img: "/images/Article_Publisher.png"
    },
    {
      text: "The platform's innovative approach to connecting startups with investors has revolutionized how we think about early-stage investments.",
      author: "Sarah Williams",
      role: "Angel Investor",
      img: "/images/Article_Publisher.png"
    },
    {
      text: "As a first-time founder, the guidance and support I received through this platform was invaluable. It helped turn my idea into a funded reality.",
      author: "David Martinez",
      role: "Startup Founder",
      img: "/images/Article_Publisher.png"
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 1500); 
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === testimonials.length + 1 ? 0 : prev-1));
      setTimeout(() => setIsTransitioning(false), 1500); 
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 50000);
    return () => clearInterval(timer);
  }, []);

  const getSlideIndex = (offset) => {
    const length = testimonials.length;
    return (currentSlide + offset + length) % length;
  };

  return (
    <div className="relative w-full max-w-[90vw] mx-auto min-h-[400px] z-0  ">
      <div className="absolut  w-full h-full flex items-center justify-center">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = getSlideIndex(offset);
          const isCenter = offset === 0;
          
          return (
            <div
              key={index}
              className={`absolute transition-all duration-1500 ease-in-out ${
                isCenter 
                  ? 'z-20 scale-100 opacity-100' 
                  : Math.abs(offset) === 1 
                    ? 'z-10 scale-90 opacity-50'
                    : 'z-0 scale-80 opacity-0'
              }`}
              style={{
                transform: `translateX(${offset * 110}%) scale(${isCenter ? 1 : Math.abs(offset) === 1 ? 0.9 : 0.6})`,
                transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="w-[586px]">
                <div className={`h-[326px] rounded-[40px] ${isCenter ? 'bg-[#010D50]' : 'bg-[#010D50]/50'} flex flex-col justify-center px-12 text-white transition-colors duration-1500`}>
                  <p className="text-lg leading-7">
                    "{testimonials[index].text}"
                  </p>

                  <div className="flex flex-row items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonials[index].img}
                        alt={testimonials[index].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold uppercase">{testimonials[index].author}</p>
                      <p className="text-xs uppercase tracking-wide">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow navigation */}
      <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 flex justify-center gap-8 z-50">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="p-2 rounded-full z-50 bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;