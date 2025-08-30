import React from 'react'
import { motion } from 'framer-motion';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>  Hello, I'm  </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Nana Kwame Amponsah
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Computer Science Student at the University of Virginia
          </motion.h2>
        <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                {" "}
              Contact Me
            </motion.a>
            </motion.div>
        <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/NanaKwameAmponsah" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            {" "}
            <motion.a href="https://www.linkedin.com/in/nana-kwame-amponsah" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            </motion.div>
          </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <div className="code-display">
            <SyntaxHighlighter               
            language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }} 
              style={vscDarkPlus}>
              {`const aboutMe: DeveloperProfile = {
codename: "Nana Kwame Amponsah",
stack: {
    languages: ["JavaScript", "TypeScript", "SQL", "Python", "Java", "C++"],
    libraries/frameworks: ["React", "Next.js", "Spring Boot", "Spring AI", "TailwindCSS", "Redux Toolkit", "React Query (TanStack)", "Zustand", "Node.js/Express", "Flask", "Prisma"],
    Developer tools: ["Git", "GitHub & GitHub Actions (CI/CD)", "Docker", "PM2", "Gradle", "nodemon", "pytest", "Jest", "Vite", "Junit"],
    Databases & Cloud Services: ["MongoDB", "PostgreSQL", "AWS (S3, EC2, RDS, Cognito)"]
},
};`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something big!
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}
export default Hero