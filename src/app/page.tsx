"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import globeImage from "@/images/globe.svg";
import nextImage from "@/images/next.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
    },
  }),
};

export default function Home() {
  const features = [
    "Next.js 15 with App Router",
    "TypeScript & Tailwind CSS",
    "shadcn/ui components",
    "ESLint & Prettier",
    "Import sorting",
    "pnpm package manager",
    "framer motion for animations",
    "next-themes for dark mode",
    "lucide-react for icons",
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-8">
        <motion.main
          className="w-full max-w-2xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="mb-6 flex items-center justify-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={nextImage}
                  alt="Next.js"
                  width={120}
                  height={24}
                  className="dark:invert"
                />
              </motion.div>
              <div className="text-muted-foreground text-2xl">×</div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <Image
                  src={globeImage}
                  alt="Global"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </motion.div>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Next.js 15 Template
            </motion.h1>
            <motion.p
              className="text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              A modern template with TypeScript, Tailwind CSS, shadcn/ui, and
              essential dev tools
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Components</CardTitle>
                  <CardDescription>
                    Pre-configured shadcn/ui components with slate theme
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full">Primary Button</Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" className="w-full">
                      Secondary Button
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="w-full">
                      Outline Button
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                  <CardDescription>
                    Everything you need to start your next project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2"
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg">Get Started</Button>
            </motion.div>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}
