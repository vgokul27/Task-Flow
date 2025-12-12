import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, RefreshCw } from "lucide-react";
import Layout from "../components/layout/Layout";
import TaskStats from "../components/dashboard/TaskStats";
import SearchFilter from "../components/dashboard/SearchFilter";
import TaskList from "../components/dashboard/TaskList";
import Modal from "../components/common/Modal";
import TaskForm from "../components/dashboard/TaskForm";
import Button from "../components/common/Button";
import NeonText from "../components/common/NeonText";
import { taskAPI } from "../utils/api";
import { ANIMATION_VARIANTS } from "../utils/constants";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    priority: "",
  });

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, [filters]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const params = {};
      if (filters.search) params.search = filters.search;
      if (filters.status) params.status = filters.status;
      if (filters.priority) params.priority = filters.priority;

      const response = await taskAPI.getTasks(params);
      setTasks(response.data.data.tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await taskAPI.getStats();
      setStats(response.data.data.stats);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  const handleCreateTask = async (data) => {
    try {
      setFormLoading(true);
      await taskAPI.createTask(data);
      setModalOpen(false);
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error("Failed to create task:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpdateTask = async (data) => {
    try {
      setFormLoading(true);
      await taskAPI.updateTask(editingTask._id, data);
      setModalOpen(false);
      setEditingTask(null);
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error("Failed to update task:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await taskAPI.deleteTask(id);
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingTask(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      status: "",
      priority: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-8"
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <div>
            <NeonText
              as="h1"
              className="text-4xl font-bold mb-2"
              color="gradient"
            >
              Dashboard
            </NeonText>
            <p className="text-gray-400">Manage your tasks efficiently</p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" onClick={fetchTasks} className="gap-2">
              <RefreshCw size={18} />
              Refresh
            </Button>
            <Button onClick={() => setModalOpen(true)} className="gap-2">
              <Plus size={18} />
              New Task
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <TaskStats stats={stats} />

        {/* Filters */}
        <SearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={handleClearFilters}
        />

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDeleteTask}
          loading={loading}
        />

        {/* Create/Edit Modal */}
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={editingTask ? "Edit Task" : "Create New Task"}
        >
          <TaskForm
            task={editingTask}
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            onCancel={handleCloseModal}
            loading={formLoading}
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default Dashboard;
