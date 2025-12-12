import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { TASK_STATUS, TASK_PRIORITY } from "../../utils/constants";

const SearchFilter = ({ filters, onFilterChange, onClear }) => {
  const handleChange = (e) => {
    onFilterChange({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const hasActiveFilters = filters.search || filters.status || filters.priority;

  return (
    <motion.div
      className="glass rounded-xl p-6 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Filter className="text-indigo-400" size={20} />
        <h3 className="text-lg font-semibold gradient-text">Search & Filter</h3>
        {hasActiveFilters && (
          <motion.button
            onClick={onClear}
            className="ml-auto flex items-center gap-1 px-3 py-1 text-sm bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={14} />
            Clear
          </motion.button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search tasks..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1a1a24] border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
          />
        </div>

        {/* Status Filter */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-[#1a1a24] border border-gray-700 text-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
        >
          <option value="">All Status</option>
          <option value={TASK_STATUS.PENDING}>Pending</option>
          <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
          <option value={TASK_STATUS.COMPLETED}>Completed</option>
        </select>

        {/* Priority Filter */}
        <select
          name="priority"
          value={filters.priority}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-[#1a1a24] border border-gray-700 text-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
        >
          <option value="">All Priority</option>
          <option value={TASK_PRIORITY.LOW}>Low</option>
          <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
          <option value={TASK_PRIORITY.HIGH}>High</option>
        </select>
      </div>
    </motion.div>
  );
};

export default SearchFilter;
