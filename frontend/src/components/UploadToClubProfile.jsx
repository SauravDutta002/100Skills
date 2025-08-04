// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadToClubProfile = () => {
//   const [image, setImage] = useState(null);

//   const handleUpload = async () => {
//     if (!image) return alert("Please select an image.");

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "Events_images");

//     try {
//       const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/dkhgb2u6f/image/upload",
//         formData
//       );
//       console.log("Upload success:", res.data);
//       alert("Image uploaded successfully!");
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert("Upload failed. Check console for details.");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={e => setImage(e.target.files[0])} />
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default UploadToClubProfile;


import React, { useState } from 'react';
import axios from 'axios';
import api from "../api/axios"
import { FaCloudUploadAlt } from 'react-icons/fa';


const UploadToClubProfile = ({ onUploadComplete }) => {
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Events_images");

    try {
      // Step 1: Upload to Cloudinary
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dkhgb2u6f/image/upload",
        formData
      );

      const imageUrl = res.data.secure_url;
      console.log("✅ Cloudinary upload success:", imageUrl);

      // Step 2: Send URL to backend to update club profile
      await api.put(
        "/updateClubProfileImage",
        { clubProfileImg: imageUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Club profile image updated successfully!");
      setImage(null);
      onUploadComplete(); // refresh profile in parent
    } catch (err) {
      console.error("❌ Upload failed:", err);
      alert("Upload failed.");
    }
  };

  return (
    // <div className="my-4">
    //   <input type="file" onChange={e => setImage(e.target.files[0])} />
    //   <button
    //     onClick={handleUpload}
    //     className="ml-2 bg-green-500 text-white px-3 py-1 rounded"
    //   >
    //     Upload Image
    //   </button>
    // </div>

    <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 border border-gray-200">
  <div className="flex items-center gap-3 mb-4">
    <FaCloudUploadAlt className="text-2xl text-green-500" />
    <h2 className="text-xl font-semibold text-gray-700">Update Profile Image</h2>
  </div>

  <label className="w-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer border border-dashed border-gray-400 rounded-md p-4 text-center">
    <span className="text-gray-600">Click to select an image</span>
    <input
      type="file"
      onChange={e => setImage(e.target.files[0])}
      className="hidden"
    />
  </label>

  <button
    onClick={handleUpload}
    disabled={!image}
    className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium shadow transition ${
      image ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'
    }`}
  >
    Upload Image
  </button>
  </div>
  );
};

export default UploadToClubProfile;
