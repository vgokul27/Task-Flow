import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import Layout from "../components/layout/Layout";
import NeonText from "../components/common/NeonText";
import Button from "../components/common/Button";
import { ANIMATION_VARIANTS } from "../utils/constants";

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Task Management",
      description:
        "Create, update, and organize your tasks efficiently with our intuitive interface.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Get instant updates on your tasks and collaborate seamlessly with your team.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your data is encrypted and secure with industry-standard security practices.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description:
        "Track your progress with detailed statistics and performance insights.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          className="min-h-[80vh] flex flex-col items-center justify-center text-center py-10 md:py-20 relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.stagger}
        >
          <motion.div className="mb-8" variants={ANIMATION_VARIANTS.fadeIn}>
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm text-indigo-400 font-semibold">
              ✨ Welcome to the Future of Task Management
            </span>
          </motion.div>

          <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
            <NeonText
              as="h1"
              className="text-3xl md:text-7xl font-bold mb-6"
              color="gradient"
            >
              Manage Your Tasks
            </NeonText>
            <NeonText
              as="h2"
              className="text-2xl md:text-6xl font-bold mb-6"
              color="blue"
            >
              Like Never Before
            </NeonText>
          </motion.div>

          <motion.p
            className="text-md lg:text-xl text-gray-400 mb-8 max-w-2xl relative z-10"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            A modern, scalable task management platform with authentication,
            real-time updates, and beautiful UI powered by React & Framer
            Motion.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 relative z-10"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <Link to="/register">
              <Button className="flex items-center gap-2 group">
                Get Started Free
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </motion.div>

          {/* Floating Icons - Hidden on mobile, visible on large screens */}
          <motion.div
            className="hidden lg:block absolute top-32 left-[10%] text-indigo-400/20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <CheckCircle size={48} />
          </motion.div>

          <motion.div
            className="hidden lg:block absolute top-20 right-[15%] text-purple-400/20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute bottom-32 left-[8%] text-indigo-400/20"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute bottom-40 right-[12%] text-purple-400/20"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 12, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute top-[45%] left-[5%] text-indigo-400/20"
            animate={{
              y: [0, 18, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute top-[40%] right-[6%] text-purple-400/20"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute top-[25%] left-[18%] text-indigo-400/20"
            animate={{
              y: [0, 22, 0],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute top-[30%] right-[20%] text-purple-400/20"
            animate={{
              y: [0, -16, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </motion.div>

          {/* Floating gradient blobs */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl -z-10"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl -z-10"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="lg:py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.stagger}
        >
          <motion.div
            className="text-center mb-16"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <NeonText as="h2" className="text-4xl font-bold mb-4">
              Powerful Features
            </NeonText>
            <p className="text-gray-400 text-lg">
              Everything you need to stay productive and organized
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass card-hover rounded-xl p-6 text-center border-2 border-indigo-500/30 bg-gradient-to-b from-indigo-500/5 to-transparent"
                variants={ANIMATION_VARIANTS.scaleIn}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex p-4 bg-indigo-500/20 border border-indigo-500/30 rounded-xl mb-4">
                  <feature.icon className="text-indigo-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <div className="glass rounded-2xl p-10 text-center border-2 border-indigo-500/30">
            <NeonText
              as="h2"
              className="text-4xl font-bold mb-4"
              color="gradient"
            >
              Ready to Get Started?
            </NeonText>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already managing their tasks
              efficiently with TaskFlow.
            </p>
            <div className="flex justify-center">
              <Link to="/register">
                <Button className="flex items-center gap-2 group">
                  Create Your Account
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Home;
