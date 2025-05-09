"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useEffect, useRef } from "react";

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}

const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#5046e6",
  duration,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  );
};

export function Summary() {
  return (
    <div className="h-full items-center justify-center overflow-hidden pt-10 pl-24">
      <img
        src="/avatar.jpg"
        alt="avatar"
        className="flex bottom-8 right-8 w-1/5"
      />
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Hi, I&apos;m <span className="text-[#5046e6]">Ian</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          <span className="text-[#5046e6]">
            Software engineer also a boxer,{" "}
          </span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; I&apos;ve spent 8 years building reliable backend systems for
            products at scale.
            <br />
            -&gt; I
            <span className="font-semibold text-[#5046e6]"> write code</span>,
            <span className="font-semibold text-[#5046e6]">
              {" "}
              design architectures
            </span>
            ,
            <span className="font-semibold text-[#5046e6]">
              {" "}
              explore things
            </span>
            I don&apos;t know (yet). <br />
            -&gt; Also know
            <span className="font-semibold text-[#5046e6]"> Dapp develop </span>
            and
            <span className="font-semibold text-[#5046e6]"> frontend </span>
            stuff <br />
            -&gt; And yes, I write
            <span className="font-semibold text-[#5046e6]">
              {" "}
              tests and docs
            </span>
            <br />
            -&gt; Also a fan of gardening, traveling, German philosophy, and
            psychoanalysis enthusiast
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}
