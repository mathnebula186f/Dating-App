import React, { useState } from "react";
import axios from "axios";

const Profile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    about: "",
    age: "",
    imageUrl: "",
    // Add more fields as needed.
  });

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/${userId}", userProfile);
      if (response.data.success) {
        console.log("Profile updated successfully!");
      } else {
        console.error("Profile update failed");
      }
    } catch (error) {
      console.error(
        "Request error: The Profile Has not been submitted to Index.js properly",
        error
      );
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={userProfile.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            About:
          </label>
          <textarea
            name="about"
            value={userProfile.about}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            type="number"
            name="age"
            value={userProfile.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            name="imageUrl"
            value={userProfile.imageUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
