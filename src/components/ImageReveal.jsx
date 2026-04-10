
import { useEffect, useRef } from "react";
import gsap from "gsap";
import aryan from "../assets/aryan.jpg";
import layer_aryan from "../assets/layer_aryan.png";
import "./ImageReveal.css";

const ImageReveal = () => {
  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);
  const bottomImgRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cursor = cursorRef.current;
    const bottomImg = bottomImgRef.current;

    let xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Move cursor correctly
      xTo(x);
      yTo(y);

      // Reveal effect
      gsap.to(bottomImg, {
        clipPath: `circle(120px at ${x}px ${y}px)`,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleEnter = () => {
      gsap.to(cursor, {
        scale: 4,
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0,
        duration: 0.3,
      });

      gsap.to(bottomImg, {
        clipPath: "circle(0px at 50% 50%)",
        duration: 0.3,
      });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseenter", handleEnter);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseenter", handleEnter);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="container">
      <div ref={wrapperRef} className="wrapper">
        <img src={layer_aryan} alt="top" className="img top" />

        <img
          ref={bottomImgRef}
          src={aryan}
          alt="bottom"
          className="img bottom"
        />

        <div ref={cursorRef} className="cursor"></div>
      </div>
    </div>
  );
};

export default ImageReveal;