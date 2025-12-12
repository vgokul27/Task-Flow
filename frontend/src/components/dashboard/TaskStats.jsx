import { motion } from "framer-motion";
import { CheckCircle, Clock, AlertCircle, ListTodo } from "lucide-react";
import { ANIMATION_VARIANTS } from "../../utils/constants";

const TaskStats = ({ stats }) => {
  const statCards = [
    {
      title: "Total Tasks",
      value: stats?.total || 0,
      icon: ListTodo,
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Pending",
      value: stats?.pending || 0,
      icon: Clock,
      color: "from-yellow-500 to-orange-500",
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
    },
    {
      title: "In Progress",
      value: stats?.["in-progress"] || 0,
      icon: AlertCircle,
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Completed",
      value: stats?.completed || 0,
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      variants={ANIMATION_VARIANTS.stagger}
      initial="hidden"
      animate="visible"
    >
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.title}
          className="glass card-hover rounded-xl p-6 relative overflow-hidden border border-indigo-500/30"
          variants={ANIMATION_VARIANTS.fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          {/* Background Gradient */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl`}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 ${stat.iconBg} rounded-lg`}>
                <stat.icon className={stat.iconColor} size={24} />
              </div>
              <motion.span
                className={`text-3xl font-bold gradient-text`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {stat.value}
              </motion.span>
            </div>
            <h3 className="text-gray-400 font-medium">{stat.title}</h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TaskStats;
