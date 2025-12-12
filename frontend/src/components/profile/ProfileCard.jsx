import { motion } from "framer-motion";
import { Mail, Calendar, Shield, Edit } from "lucide-react";
import Button from "../common/Button";

const ProfileCard = ({ user, onEdit }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      className="glass card-hover rounded-2xl p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Avatar & Name */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring" }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30">
            <img
              src={user.avatar || "https://via.placeholder.com/150"}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-[#13131a]" />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold gradient-text mb-2">{user.name}</h2>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-4">
            <Mail size={16} />
            <span>{user.email}</span>
          </div>
          {user.bio && <p className="text-gray-300 mb-4">{user.bio}</p>}
          <Button onClick={onEdit} variant="outline" className="gap-2">
            <Edit size={18} />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-800">
        <div className="flex items-center gap-3 p-4 bg-[#1a1a24]/50 rounded-lg">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Shield className="text-purple-400" size={20} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Role</p>
            <p className="text-white font-semibold capitalize">{user.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-[#1a1a24]/50 rounded-lg">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Calendar className="text-blue-400" size={20} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Member Since</p>
            <p className="text-white font-semibold">
              {formatDate(user.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
