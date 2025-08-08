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
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/mindswap.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Full Stack Chat and Video calling application</h3>
          <p>
Full-stack real-time communication platform connecting users with opposing philosophical perspectives to foster intellectual discourse through chat and video calling. • Real-time messaging with typing indicators, reactions, and persistent chat history • HD video calling with screen sharing, call recording, and one-click invites via WebRTC • JWT-based authentication with secure cookie management and session persistence • User matching based on contrasting philosophical beliefs • Interactive onboarding with profile customization and random avatar generation • Responsive design with 32 dynamic themes and dark/light mode support • Social features including friend requests, notifications, and recommendation engine. RESTful API with protected routes, MongoDB schemas, React hooks, TanStack Query for server state, custom middleware for authentication, and Stream Chat/Video SDK integration for real-time features.  Full CI/CD pipeline with environment configuration for development/production environments.

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
• Developed a comprehensive rental property management platform featuring dual-interface architecture for property managers and tenants, enabling streamlined property listings, application processing, and lease management with real-time search and interactive mapping functionality • Implemented AWS Cognito–based authentication with role-based access control, supporting distinct manager and tenant workflows with protected routes and personalized dashboards • Built advanced property search using Mapbox integration, offering debounced, real-time filtering by price, bedrooms, bathrooms, amenities, and geographic coordinates • Designed an end-to-end application management workflow allowing tenants to submit applications and managers to review, approve, and track status with automated notifications • Created responsive, interactive dashboards for property management, application tracking, lease overview, and billing history with real-time data synchronization • Architected a PostgreSQL schema via Prisma ORM and exposed RESTful APIs with robust authentication middleware and data validation• Frontend built in Next.js 14 (App Router) with TypeScript, Tailwind CSS, Redux Toolkit/RTK Query, Framer Motion, and React Hook Form + Zod validation • Backend built in Node.js/Express.js with TypeScript, Prisma ORM, JWT authentication, role-based authorization middleware, and clean RESTful endpoint design• Leveraged PostgreSQL for a comprehensive relational model (Users, Properties, Applications, Leases, Payments) with optimized queries and relationships • Utilized AWS Cognito for auth, Mapbox for geocoding/mapping, and environment-specific configurations

          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>AWS</span>
            <span>PostgreSQL</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
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
• Engineered responsive, mobile-first UI with CSS3 flexbox/grid and semantic HTML • Utilized ES6+ patterns (async/await, destructuring, modules) for maintainable client logic • Integrated CoinGecko REST API for live pricing, market caps, and 24h changes (100+ coins) with retry/loading states • Google Charts line charts for 10-day historical trends and key dashboard metrics • Managed global state via React Context and custom hooks for currency conversion, theming, and caching • Optimized performance through lazy loading, code-splitting, memoization, and minimal re-renders • Implemented multi-currency conversion (USD, EUR, GBP, JPY) with locale-aware formatting • Configured React Router for seamless navigation between dashboard, coin detail, and analytics views • Built a reusable component library (Navbar, Footer, LineChart, SearchBar) with prop-driven theming • Automated CI/CD on GitHub Pages using Vite scripts for zero-downtime deployments • Followed Git/GitHub best practices (feature branches, PRs, code reviews) within an Agile workflow • Added toast notifications and inline form validation for instant UX feedback

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