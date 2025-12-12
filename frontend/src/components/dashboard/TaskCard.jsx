import { motion } from "framer-motion";
import { Edit2, Trash2, Calendar, Tag } from "lucide-react";
import { STATUS_COLORS, PRIORITY_COLORS } from "../../utils/constants";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      className="glass card-hover border-2 border-indigo-500/30 rounded-xl p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      layout
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex-1">{task.title}</h3>
        <div className="flex gap-2">
          <motion.button
            onClick={() => onEdit(task)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-blue-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Edit2 size={18} />
          </motion.button>
          <motion.button
            onClick={() => onDelete(task._id)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-red-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Trash2 size={18} />
          </motion.button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-gray-400 mb-4 line-clamp-2">{task.description}</p>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`px-3 py-1 rounded-full border text-xs font-medium ${
            STATUS_COLORS[task.status]
          }`}
        >
          {task.status.replace("-", " ")}
        </span>
        <span
          className={`px-3 py-1 rounded-full border text-xs font-medium ${
            PRIORITY_COLORS[task.priority]
          }`}
        >
          {task.priority}
        </span>
        {task.dueDate && (
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300">
            <Calendar size={12} />
            {formatDate(task.dueDate)}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default TaskCard;
