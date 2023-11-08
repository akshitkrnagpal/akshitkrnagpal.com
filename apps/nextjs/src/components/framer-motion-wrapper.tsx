"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const MotionSection = (props: HTMLMotionProps<"section">) => (
  <motion.section {...props} />
);

export const MotionDiv = (props: HTMLMotionProps<"div">) => (
  <motion.div {...props} />
);

export const MotionFigure = (props: HTMLMotionProps<"figure">) => (
  <motion.figure {...props} />
);
