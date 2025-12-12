import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import ProfileCard from "../components/profile/ProfileCard";
import Modal from "../components/common/Modal";
import EditProfile from "../components/profile/EditProfile";
import NeonText from "../components/common/NeonText";
import { useAuth } from "../hooks/useAuth";
import { profileAPI } from "../utils/api";
import { ANIMATION_VARIANTS } from "../utils/constants";

const Profile = () => {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (data) => {
    try {
      setLoading(true);
      await profileAPI.updateProfile(data);
      setModalOpen(false);
      window.location.reload(); // Reload to fetch updated user data
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          {/* Header */}
          <div className="mb-8">
            <NeonText
              as="h1"
              className="text-4xl font-bold mb-2"
              color="gradient"
            >
              Profile
            </NeonText>
            <p className="text-gray-400">Manage your account settings</p>
          </div>

          {/* Profile Card */}
          <ProfileCard user={user} onEdit={() => setModalOpen(true)} />

          {/* Edit Modal */}
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Edit Profile"
          >
            <EditProfile
              user={user}
              onSubmit={handleUpdateProfile}
              onCancel={() => setModalOpen(false)}
              loading={loading}
            />
          </Modal>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Profile;
