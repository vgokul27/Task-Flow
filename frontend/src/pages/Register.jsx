import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import Layout from "../components/layout/Layout";
import RegisterForm from "../components/auth/RegisterForm";
import NeonText from "../components/common/NeonText";
import { ANIMATION_VARIANTS } from "../utils/constants";

const Register = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 lg:py-1">
        <div className="max-w-md mx-auto">
          <motion.div
            className="glass rounded-2xl p-8 lg:p-2 neon-border-purple"
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex p-4 bg-purple-500/10 rounded-xl mb-4 neon-glow-purple"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <UserPlus className="text-purple-400" size={32} />
              </motion.div>
              <NeonText
                as="h1"
                className="text-3xl font-bold mb-2"
                color="gradient"
              >
                Create Account
              </NeonText>
              <p className="text-gray-400">
                Join us and start managing your tasks
              </p>
            </div>

            {/* Form */}
            <RegisterForm onSuccess={handleSuccess} />

            {/* Footer */}
            <motion.div
              className="mt-6 text-center"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
