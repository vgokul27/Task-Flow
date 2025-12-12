import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, MessageSquare, Image } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";

const EditProfile = ({ user, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    avatar: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        bio: user.bio || "",
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        icon={User}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
          <MessageSquare size={16} />
          Bio
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
          rows={4}
          maxLength={500}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a24] border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
        />
        <p className="text-gray-500 text-sm mt-1">
          {formData.bio.length}/500 characters
        </p>
      </div>

      <Input
        label="Avatar URL"
        type="url"
        name="avatar"
        value={formData.avatar}
        onChange={handleChange}
        placeholder="https://example.com/avatar.jpg"
        icon={Image}
      />

      {formData.avatar && (
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500/30">
            <img
              src={formData.avatar}
              alt="Avatar preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-4">
        <Button type="submit" fullWidth loading={loading}>
          Save Changes
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} fullWidth>
          Cancel
        </Button>
      </div>
    </motion.form>
  );
};

export default EditProfile;
