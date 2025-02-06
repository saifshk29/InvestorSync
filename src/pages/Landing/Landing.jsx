import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import Carousel from "../../components/Carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCarousel from "../../components/Carousel";
import { hover, motion } from "framer-motion";
import CardGrid from "../../components/CardGrid";
import FadeIn from "../../Effects/FadeIn";
<Environment files="/hdri/studio.hdr" background={false} />;

const DollarSign = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const mouseX = state.mouse.x;
      const mouseY = state.mouse.y;

      meshRef.current.rotation.x +=
        (mouseY * 0.02 - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y +=
        (mouseX * 0.02 - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={2.5}
        height={0.4}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.02}
        bevelSegments={5}
        position={[-0.8, -1, 0]}
      >
        $
        <meshPhysicalMaterial
          color="#354ce8"
          metalness={0.7}
          roughness={0.02}
          clearcoat={1}
          clearcoatRoughness={0.01}
          sheen={1}
          sheenRoughness={0.05}
          sheenColor={new THREE.Color("#78DCF7")}
          specularIntensity={10000}
          specularColor={new THREE.Color("#78dcf7")}
          envMapIntensity={100} // Strong reflections
        />
      </Text3D>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      style={{
        height: "800px",
        width: "800px",
        background: "transparent",
        position: "absolute",
        top: -200,
        left: -200,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: true,
      }}
    >
      <pointLight position={[10, 10, 10]} intensity={3} color="#354ce8" />
      <pointLight position={[10, 10, 10]} intensity={2.5} color="#C33290" />
      <ambientLight intensity={2} />
      <directionalLight
        position={[15, 15, 15]}
        intensity={10}
        color="#FFFFFF"
      />

      <Suspense fallback={null}>
        <DollarSign />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
    </Canvas>
  );
};

export default function LandingPage() {
  const [isHovered, setisHovered] = useState(false);
  const [hoveredId, sethoveredId] = useState(null);
  return (
    <div className="w-full bg-black  flex flex-col overflow-x-hidden ">
      {/*NAVBAR AND HERO SECTION*/}
      <div className="w-full h-screen items-center justify-center">
        {/* Navbar */}
        <div className="w-full text-white p-[24px] font-medium flex flex-row  top-0 left-0 bg-black z-100 h-[132px]">
          <div className="w-full flex flex-row gap-7 items-center">
            <img
              src="images\Logo.png"
              alt=""
              className="h-[67px] w-72px]  rounded-full"
            />
            <p>INVESTOR SYNC</p>
            <div className="w-[1px] h-[66px] bg-[#A1C0FF]"></div>
            <ul className="flex flex-row gap-7  z-100">
              <li className="hover:scale-125 transition-transform duration-300">
                PITCHES
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                LEARNING
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                ARTICLES
              </li>
            </ul>
          </div>
          {/* CTA Buttons on the Navbar */}
          <div className="flex flex-row gap-7 z-100">
            <button className="h-[56px] w-[121px] py-[32px] px-[27px] bg-[#1D33D0] hover:bg-[#5E6DDB] translation-transform duration-400 rounded-[80px] flex items-center justify-center">
              LOGIN
            </button>
            <button className="h-[56px] w-[121px] py-[32px] px-[27px] bg-[#1E1E1E] hover:bg-[#2D2D2D] rounded-[80px] flex items-center justify-center translation-transform duration-400">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Main Content */}
        <FadeIn>
          <div className="flex-1 flex flex-col justify-center items-center text-white  relative mt-[80px] z-10">
            <div className="flex flex-row items-center justify-center">
              {/* Left Side */}
              <div className="text-white flex flex-col gap-7 z-10">
                <p className="w-[738px] text-white text-[66px] font-[700] leading-[70px]">
                  Turn ideas into reality Pitch or invest!
                </p>
                <p className="w-[568px] font-[400] text-[16px]">
                  Take the first step toward creating lasting impact—pitch your
                  idea or fund a venture today!
                </p>
                <button className="h-[56px] w-[226px] py-[32px] px-[27px] bg-[#1D33D0] rounded-[80px] flex items-center justify-center mt-3  hover:bg-[#5E6DDB] translation-transform duration-400">
                  <p className="font-[700] text-[16px]">EXPLORE PROJECTS</p>
                </button>
              </div>
              <img
                src="images\Gradient_left_top_heading_hero_section.png"
                alt=""
                width={"680.82px"}
                height={"680.82px"}
                className="absolute  left-0 z-0"
              />
              <img
                src="images\Gradient2.png"
                alt=""
                width={"680.33px"}
                height={"629.34px"}
                className="absolute top-32 -right-64 z-0 opacity-75 -rotate-20"
              />
              {/* Right Side */}
              <div className="">
                {/* <img
              height="396px"
              width="404px"
              src="public/images/landing page 3D model cube-helix 1.png"
              alt=""
            /> */}
                <div className="h-[396px] w-[404px] relative">
                  <ThreeScene />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      {/*DISCOVER CREATIVE IDEAS*/}

      <div className="flex flex-col z-10 w-full justify-center items-center gap-18">
        {/*Heading and sub-heading*/}
        <FadeIn>
          <div className="text-white w-full flex flex-col justify-center items-center gap-5">
            <p className="text-[50px] font-[700]">Discover Creative Ideas</p>
            <p className="text-[18px] opacity-[90%]">
              Explore innovatice domains shaping the future
            </p>
          </div>
        </FadeIn>

        {/*The grid*/}
        <FadeIn>
          <div className="h-[650px] w-[1200px] text-white flex flex-row justify-center items-center relative py-5 ">
            {/*1*/}
            <motion.div className="h-[295px] w-[325px] bg-[#1E1E1E] rounded-[40px] flex flex-col items-center  py-3 px-3 absolute left-0 top-0 mt-5 ml-5 group"
            id="AI"
            onMouseEnter={()=>sethoveredId("AI")}
            onMouseLeave={()=>sethoveredId(null)}
            animate={{
              height:hoveredId==="AI"?622:295,
              width:hoveredId==="AI"?477:325,
              x:hoveredId==="Health"?"153.4%":"0%"
            }}>
              <img src="images\AI.png" alt="" width="290" height="173" className="rounded-[24px] w-[290px] h-[173px] group-hover:h-[358px] group-hover:w-[417px]"/>
              <p className="font-[600] text-[20px] leading-[32px] mt-5">
                Artificial Intelligence
              </p>
              <p className="font-[400] text-[15px] leading-[32px] group-hover:hidden">
                Shaping the Future
              </p>
              <p className="font-[400] text-white invisible text-[15px] leading-[32px] group-hover:visible text-center mt-5">
              Innovating with intelligent solutions that learn, adapt, and evolve. Explore AI-driven breakthroughs shaping tomorrow.
              </p>
            </motion.div>
            {/*2*/}
            <motion.div className="h-[295px] w-[325px] bg-[#1E1E1E] rounded-[40px] flex flex-col items-center  py-3 px-3 absolute bottom-0 left-0 mb-5 ml-5 group"
             id="Health"
             onMouseEnter={()=>sethoveredId("Health")}
             onMouseLeave={()=>sethoveredId(null)}
            animate={{
              height:hoveredId==="Health"?622:295,
              width:hoveredId==="Health"?477:325,
              x:hoveredId==="AI"?"153.4%":"0%"
            }}>
              <img
                src="images\HealthandFitness.png"
                alt=""
                width="290"
                height="173"
                className="rounded-[24px] w-[290px] h-[173px] group-hover:h-[358px] group-hover:w-[417px]"
              />
              <p className="font-[600] text-[20px] leading-[32px] mt-5">
                Health & Fitness
              </p>
              <p className="font-[400] text-[15px] leading-[32px] group-hover:hidden">
                Pitches to improve health and fitness
              </p>
              <p className="font-[400] w-[267px] text-white invisible text-[15px] leading-[32px] group-hover:visible text-center mt-5">
              Prioritize wellness with smarter choices. Explore innovations that fuel a healthier, stronger you.
              </p>
            </motion.div>
            {/*3*/}
            <motion.div className="h-[622px] w-[477px] bg-[#1E1E1E] rounded-[40px] flex items-center flex-col  py-5 absolute self-center place-self-center top-0 mt-5 duration-100"
              animate={{
                        height: hoveredId === "Art" || hoveredId === "Product" || hoveredId === "AI" || hoveredId === "Health" ? 295 : 622,
                        width: hoveredId === "Art" || hoveredId === "Product" || hoveredId === "AI" || hoveredId === "Health"? 325 : 477,
                        x: hoveredId === "Art" || hoveredId === "Product" ? "-22%" : hoveredId === "AI" || hoveredId === "Health"? "25%" : "0%",
                        y: hoveredId === "Product" ? "110%" : hoveredId === "Health"?"105%":"0%"
                      }}

            
            >
              <motion.img
                src="images\ARVR.png"
                alt=""
                className="h-[358px] w-[417px]" 
                animate={{
                  height:hoveredId==="Art" ||  hoveredId === "Product" || hoveredId === "AI"|| hoveredId === "Health"?173:358,
                  width:hoveredId==="Art"||hoveredId === "Product"|| hoveredId === "AI"|| hoveredId === "Health"?290:417,
                  
                  
                }}/>
              <motion.p
                className="font-[600] text-[20px] leading-[32px] mt-5"
                >
                AR/VR
              </motion.p>
              <motion.p
                className="font-[400] text-[15px] leading-[32px] w-[253px] text-center "
                animate={{
                  visibility:hoveredId==="Art"||hoveredId === "Product"|| hoveredId === "AI"|| hoveredId === "Health"?"visible":"hidden"
                }}
                >
                Augmented Reality
              </motion.p>
              <motion.p
                className="font-[400] text-[15px] leading-[32px] w-[253px] text-center transfrom-all "
                animate={{
                  visibility:hoveredId==="Art"||hoveredId === "Product"|| hoveredId === "AI"|| hoveredId === "Health"?"hidden":"visible"
                }}
                >
                Dive into a world where augmented and virtual reality redefine
                the way you explore, connect, and create.
              </motion.p>
            </motion.div>
            {/*4*/}
            <motion.div className="w-[325px] min-h-[295px] bg-[#1E1E1E] rounded-[40px] flex flex-col items-center py-3 px-3 z-50 absolute right-0 top-0 mt-5 mr-5 group"
            id="Art"
            onMouseEnter={()=>sethoveredId("Art")}
            onMouseLeave={()=>sethoveredId(null)}
            animate={{
              height:hoveredId==="Art"?622:295,
              width:hoveredId==="Art"?477:325,
              x:hoveredId==="Product"?"-150%":"0%"
            }}
            >
              <motion.img
                src="images\Art.png"
                alt=""
                width="290"
                height="173"
                className="rounded-[24px] w-[290px] h-[173px] group-hover:h-[358px] group-hover:w-[417px]"
              />
              <p className="font-[600] text-[20px] leading-[32px] mt-5">Art</p>
              <p className="font-[400] text-[15px] leading-[32px] group-hover:hidden">
                Empowering Creativity
              </p>
              <p className="font-[400] text-white invisible text-[15px] leading-[32px] group-hover:visible text-center mt-5">
                  A limitless canvas for expression,storytelling and innovation, evolving through tradition and technology
              </p>
            </motion.div>
            {/*5*/}
            <motion.div className="w-[325px] bg-[#1E1E1E] rounded-[40px] flex flex-col items-center  py-3 px-3 absolute right-0 bottom-0 mb-5 mr-5 group"
            onMouseEnter={()=>sethoveredId("Product")}
            onMouseLeave={()=>sethoveredId(null)}
            animate={{
              height:hoveredId === "Product"?622:295,
              width:hoveredId === "Product"?477:325,
              x:hoveredId==="Art"?"-150%":"0%"
            }}
            >
              <img src="images\Product.png" alt="" width="290" height="173" className="rounded-[24px] w-[290px] h-[173px] group-hover:h-[358px] group-hover:w-[417px]" />
              <p className="font-[600] text-[20px] leading-[32px] mt-5">Product</p>
              <p className="font-[400] text-[15px] leading-[32px] group-hover:hidden">
                Redefining the boundaries of reality
              </p>
              <p className="font-[400] text-white invisible text-[15px] leading-[32px] group-hover:visible text-center mt-5">
              Showcasing innovative solutions, prototypes, and game-changing products. Explore, collaborate, and turn bold ideas into reality
              </p>
            </motion.div>

          </div>
        </FadeIn>

        {/*CTA button*/}
        <FadeIn>
          <button className="w-[168px] text-white h-[70px] rounded-[80px] py-[27px] px-[32px] bg-[#1D33D0] flex items-center justify-center  hover:bg-[#5E6DDB] translation-transform duration-400">
            <p className=" font-[700] leading-[16px] text-[16px] tracking-[1hpx]">
              VIEW MORE
            </p>
          </button>
        </FadeIn>
      </div>

      {/*Learn and Grow Section*/}

      <div className="flex flex-col min-h-screen z-10 w-full justify-center items-center gap-10 mt-18  realtive">
        <img
          src="images\Gradient_left_top_heading_hero_section.png"
          alt=""
          width={"680.82px"}
          height={"680.82px"}
          className="absolute  left-0 -z-10"
        />
        {/*Heading and sub-heading*/}
        <FadeIn>
          <div className="text-white w-full flex flex-col justify-center items-center gap-5">
            <p className="text-[50px] font-[700]">Learn & Grow</p>
            <p className="text-[18px opacity-[90%]">
              Learn from successful creators, investors, and industry experts
            </p>
          </div>
        </FadeIn>

        {/*Articles Section*/}
        <FadeIn>
          <div className="flex flex-row justify-center gap-7 z-10">
            {/*FIRST ARTICLE*/}
            <div className="h-[590px] w-[382px] bg-[#010D50] rounded-[40px] flex flex-col ">
              <img
                src="images\Article1_Landing_Page.png"
                alt=""
                className="rounded-t-[40px]"
                width={"382px"}
                height={"295px"}
              />
              <div className="flex flex-col gap-5 mt-15 text-white px-[18px]">
                <p className="font-[400] text-[22px] leading-[31px]">
                  Always deliver more
                  <br></br>
                  than expected.
                </p>
                <button className="w-[126px] h-[36px] bg-[#A1C0FF] rounded-[1000px] flex items-center justify-center  hover:bg-[#C6D8FE] translation-transform duration-400">
                  <p className="font-[700] text-black text-[11px] leading-[18px]">
                    VIEW ARTICLE
                  </p>
                </button>
                <div className="w-[336px] h-[1px] bg-white opacity-[10%]"></div>
                {/*Publisher Details*/}
                <div className="flex flex-row items-center gap-5">
                  <img
                    src="images\Article_Publisher.png"
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-[400] leading-[18px] text-white ">
                      SUYASH SHARMA
                    </p>
                    <p className="text-[16px] font-[400] leading-[18px] text-white ">
                      AUGUST 2,2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*SECOND ARTICLE*/}
            <div className="h-[590px] w-[382px] bg-[#010D50] rounded-[40px] flex flex-col ">
              <img
                src="images\Article2_Landing_Page.png"
                alt=""
                className="rounded-t-[40px]"
                width={"382px"}
                height={"295px"}
              />
              <div className="flex flex-col gap-5 mt-15 text-white px-[18px]">
                <p className="font-[400] text-[22px] leading-[31px]">
                  Is your brand not making
                  <br></br>
                  the imapct you desire?
                </p>
                <button className="w-[126px] h-[36px] bg-[#A1C0FF] rounded-[1000px] flex items-center justify-center hover:bg-[#C6D8FE] translation-transform duration-400">
                  <p className="font-[700] text-black text-[11px] leading-[18px]">
                    VIEW ARTICLE
                  </p>
                </button>
                <div className="w-[336px] h-[1px] bg-white opacity-[10%]"></div>
                {/*Publisher Details*/}
                <div className="flex flex-row items-center gap-5">
                  <img
                    src="images\Article_Publisher.png"
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-[400] leading-[18px] text-white ">
                      SUYASH SHARMA
                    </p>
                    <p className="text-[16px] font-[400] leading-[18px] text-white ">
                      AUGUST 2,2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*THIRD ARTICLE*/}
            <div className="h-[590px] w-[382px] bg-[#010D50] rounded-[40px] flex flex-col ">
              <img
                src="images\Article3_Landing_Page.png"
                alt=""
                className="rounded-t-[40px] h-[295px]"
                width={"382px"}
                height={"295px"}
              />
              <div className="flex flex-col gap-5 mt-15 text-white px-[18px]">
                <p className="font-[400] text-[22px] leading-[31px]">
                  Change the plan
                  <br></br>
                  Never goal.
                </p>
                <button className="w-[126px] h-[36px] bg-[#A1C0FF] rounded-[1000px] flex items-center justify-center hover:bg-[#C6D8FE] translation-transform duration-400">
                  <p className="font-[700] text-black text-[11px] leading-[18px]">
                    VIEW ARTICLE
                  </p>
                </button>
                <div className="w-[336px] h-[1px] bg-white opacity-[10%]"></div>
                {/*Publisher Details*/}
                <div className="flex flex-row items-center gap-5">
                  <img
                    src="images\Article_Publisher.png"
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-[400] leading-[18px] text-white ">
                      SUYASH SHARMA
                    </p>
                    <p className="text-[16px] font-[400] leading-[18px] text-white ">
                      AUGUST 2,2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <button className="w-[243px] h-[70px] rounded-[80px] py-[27px] px-[32px] bg-[#1D33D0] flex items-center justify-center hover:bg-[#5E6DDB] translation-transform duration-400">
            <p className="text-white font-[700] leading-[16px] text-[16px] tracking-[1px] ">
              VIEW ALL ARTICLES
            </p>
          </button>
        </FadeIn>
      </div>

      {/*WHAT WE ARE ALL ABOUT SECTION*/}

      <div className="flex flex-col z-10 w-full h-screen mt-18 justify-evenly relative">
        {/*Heading and sub-heading*/}
        <img
          src="images\Gradient4.png"
          alt=""
          className="absolute h-[955px] w-[688px] -right-52 bottom-42"
        />
        <img
          src="images\Gradient5.png"
          alt=""
          className="absolute h-[955px] w-[688px] -left-56 top-52"
        />
        <FadeIn>
          <div className="text-white w-full flex flex-col justify-center items-center gap-5">
            <p className="text-[50px] font-[700]">What We’re All About</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-white w-full flex flex-col justify-center items-center gap-5">
            <p className="text-[50px] leading-[56px] font-[600] w">
              For Creators
            </p>
            <p className="text-[26px] opacity-[90%] w-[644px] text-center">
              Pitch your idea, set your budget, and connect with investors who
              can help bring your vision to life.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="text-white w-full flex flex-col justify-center items-center gap-5">
            <p className="text-[50px] leading-[56px] font-[600] w">
              For Investors
            </p>
            <p className="text-[26px] opacity-[90%] w-[644px] text-center">
              Discover innovative ideas, review detailed pitches, and connect
              with creators to make a meaningful impact.
            </p>
          </div>
        </FadeIn>

        <img
          src="images/cube-helix 2.png"
          alt=""
          className="absolute right-0 top-0 w-[150px] h-[250px]"
        />
        <img
          src="images\pyramid 1.png"
          alt=""
          className="absolute left-0 bottom-0 w-[90px] h-[180px]"
        />
      </div>

      {/*Invest in tomorrows innovations*/}

      <div className="flex flex-col z-10 w-full h-screen  justify-center items-center gap-8">
        {/*Heading and sub-heading*/}
        <FadeIn>
          <div className="text-white w-full  flex flex-col justify-start items-center gap-5">
            <p className="text-[50px] font-[700]">
              Invest in Tomorrow’s Innovations!
            </p>
            <p className="text-[18px opacity-[90%]">
              Join a community where ideas meet funding
            </p>
          </div>
        </FadeIn>

        {/*Carousel*/}

        <TestimonialCarousel />
      </div>

      {/*Footer*/}
      <div className="w-full min-h-[75vh] bg-[#010D50]">
        {/*UPPER PART*/}
        <div className=" w-full flex flex-row justify-evenly py-12 ">
          <ul className="text-white flex flex-col gap-3">
            <li className="font-600 text-[16px] leading-[24px]">
              Key Features
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Discover groundbreaking ideas
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Connect with Investors
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Post and solve real-world challenges
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Join exclusive webinars & events
            </li>
          </ul>
          <ul className="text-white flex flex-col gap-3">
            <li className="font-600 text-[16px] leading-[24px]">
              Our Services
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Pitch your startup
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Gain visibility
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Find investment opportunities
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Participate in industry challenges
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Host & attend expert-led webinars
            </li>
          </ul>
          <ul className="text-white flex flex-col gap-3">
            <li className="font-600 text-[16px] leading-[24px]">About Us</li>
            <li className="font-600 text-[16px] leading-[24px]">
              Innovative Platform
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Empowering Creatives
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Building Futures
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Seamless Collaboration
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Growth-Oriented
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Community-Driven
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Trust & Transparency
            </li>
            <li className="font-600 text-[16px] leading-[24px]">
              Tech-Forward Approach
            </li>
          </ul>
          <ul className="text-white flex flex-col gap-3">
            <li className="font-600 text-[16px] leading-[24px]">Follow Us</li>
            <li className="font-600 text-[16px] leading-[24px]">Facebook</li>
            <li className="font-600 text-[16px] leading-[24px]">Twitter</li>
            <li className="font-600 text-[16px] leading-[24px]">LinkedIn</li>
            <li className="font-600 text-[16px] leading-[24px]">Instagram</li>
            <li className="font-600 text-[16px] leading-[24px]">YouTube</li>
          </ul>
        </div>
        {/*LOWER PART*/}
        <div className="flex flex-col gap-2 ml-36">
          <div className="flex flex-row w-full items-center gap-2">
            <img
              src="images\Logo.png"
              alt=""
              height={"32px"}
              width={"32px"}
            />
            <p className="font-500 text-[14px] text-white">INVESTOR SYNC</p>
          </div>
          <div className="flex flex-row w-full items-center gap-2 text-white opacity-[36%]">
            <p>© 2023 Investor Sync. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
