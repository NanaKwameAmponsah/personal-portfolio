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
Created a real-time communication platform matching users with opposing philosophical perspectives via chat and HD video calls. Implemented messaging features including typing indicators, reactions, persistent history, and friend requests with live notifications. Developed HD video calling with WebRTC for screen sharing, call recording, and one-click invites. Implemented friend request system with notification center, guided user onboarding process, and comprehensive profile customization.  Built JWT-based authentication with secure cookie handling, session persistence, and protected API routes. Designed onboarding flow with profile customization, random avatar generation, and dynamic theme switching (32 themes, dark/light mode). Managed server state via TanStack Query and integrated MongoDB schemas for persistent, scalable data storage. Configured CI/CD pipeline with environment-specific builds for development and production.
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
Developed a dual-interface rental property management platform for property managers and tenants, streamlining listings, applications, leases, and billing in real time. Implemented AWS Cognito authentication with role-based access control, securing manager/tenant workflows via protected routes and personalized dashboards. Built an advanced Mapbox-powered property search with debounced, real-time filtering by price, bedrooms, bathrooms, amenities, and geolocation coordinates. Architected PostgreSQL schema (Users, Properties, Applications, Leases) with Prisma ORM, optimized queries, and relational integrity. Designed an end-to-end application workflow enabling tenants to apply and managers to review/approve with automated status notifications. Integrated RESTful APIs with JWT authentication, role-based middleware, and data validation for secure and scalable backend operations. Enhanced user experience with responsive dashboards, animated UI, and real-time synchronization for property and application data.
          </p>
          <div className="project-tech">
            <span>Redux Toolkit</span>
            <span>Tailwind CSS</span>
            <span>Shadcn</span>
            <span>TypeScript</span>
            <span>Framer Motion</span>
            <span>React Hook Form</span>
            <span>Zod</span>
            <span>Next.js</span>
            <span>PostgreSQL</span>
            <span>AWS S3</span>
            <span>AWS RDS</span>
            <span>AWS Amplify</span>
            <span>AWS Cognito</span>
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
Built a responsive  cryptocurrency dashboard displaying live market data for 100+ coins via CoinGecko API. Developed currency conversion across USD, EUR, GBP, and JPY with locale-aware formatting. Integrated Google Charts for 10-day historical trends and visual analytics. Optimized performance through lazy loading, memoization, code-splitting, and minimal re-renders. Created reusable component library (Navbar, Footer, LineChart, SearchBar) for consistency and scalability. Configured React Router for multi-page navigation and Vite-based GitHub Pages deployment with zero downtime. 
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