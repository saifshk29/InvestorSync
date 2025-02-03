import { motion } from "framer-motion";

const Card = ({ image, title, description, className, animate }) => {
  return (
    <motion.div
      className={`w-[325px] h-[295px] bg-[#1E1E1E] rounded-[40px] flex flex-col items-center gap-2.5 shadow-lg ${className}`}
      whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0px 15px 30px rgba(255,255,255,0.2)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      animate={animate}
    >
      <img src={image} alt={title} width={"290px"} height={"173px"} className="mt-[24px] rounded-[24px]" />
      <p className="font-[600] text-[20px] leading-[32px]">{title}</p>
      <p className="font-[400] text-[15px] leading-[32px]">{description}</p>
    </motion.div>
  );
};

const CardGrid = () => {
  const cards = [
    { image: "public/images/AI.png", title: "Artificial Intelligence", description: "Shaping the Future" },
    { image: "public/images/HealthandFitness.png", title: "Health & Fitness", description: "Pitches to improve health and fitness" },
    { image: "public/images/ARVR.png", title: "AR/VR", description: "Dive into a world where augmented and virtual reality redefine the way you explore, connect, and create." },
    { image: "public/images/Art.png", title: "Art", description: "Empowering Creativity" },
    { image: "public/images/Product.png", title: "Product", description: "Redefining the boundaries of reality" }
  ];

  return (
    <div className="h-[630px] text-white grid grid-cols-[325px_477px_325px] gap-7">
      <div className="flex flex-col gap-7">
        <Card {...cards[0]} />
        <Card {...cards[1]} />
      </div>
      
      <motion.div
        className="flex justify-center items-center"
        initial={{ height: "622px" }}
        animate={{ height: "295px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card {...cards[2]} className="h-[622px]" />
      </motion.div>
      
      <div className="flex flex-col gap-7"
        onMouseEnter={() => {
          document.getElementById("grid5").style.transform = "translateX(-100px)";
          document.getElementById("grid3").style.height = "295px";
        }}
        onMouseLeave={() => {
          document.getElementById("grid5").style.transform = "translateX(0)";
          document.getElementById("grid3").style.height = "622px";
        }}
      >
        <Card {...cards[3]} id="grid4" />
        <motion.div id="grid5" className="transition-transform duration-500">
          <Card {...cards[4]} />
        </motion.div>
      </div>
    </div>
  );
};

export default CardGrid;