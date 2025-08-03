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
    <div className="my-4">
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Upload Image
      </button>
    </div>
  );
};

export default UploadToClubProfile;
