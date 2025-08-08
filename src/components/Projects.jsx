import React from 'react'
import { motion } from 'framer-motion'
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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open('https://mind-swap.onrender.com/login', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/mindswap.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Full Stack Chat and Video calling application</h3>
          <p>
Developed a real-time communication platform featuring messaging with typing indicators, HD WebRTC video calls, JWT authentication, and profile-based user matching. Integrated Stream Chat/Video SDKs, responsive themed UI, and a RESTful API with secure middleware.

          </p>
          <div className="project-tech">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>React</span>
            <span>TanStack Query</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open('https://main.d2c0sqt60d3ygh.amplifyapp.com/', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/rental-app.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Full-Stack Role-Based Rental Management System</h3>
          <p>
Built a dual-interface platform for property managers and tenants with AWS Cognito authentication, role-based dashboards, and Mapbox-powered real-time property search. Delivered end-to-end application workflows, interactive management dashboards, and optimized PostgreSQL schema via Prisma ORM with secure RESTful APIs.

          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>AWS Cognito</span>
            <span>PostgreSQL</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>RDS</span>
            <span>S3</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open('https://nanakwameamponsah.github.io/crypto-price-tracker/', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/cryptopalace.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Real-time Cryptocurrency Dashboard</h3>
          <p>
Created a responsive, mobile-first dashboard integrating CoinGecko API for live market data and Google Charts for historical trends. Implemented multi-currency conversion, React Context state management .

          </p>
          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>HTML</span>

          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Projects