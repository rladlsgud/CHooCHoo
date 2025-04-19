import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 max-w-sm"
      />

      {image && (
        <motion.div
          className="relative w-[300px] md:w-[400px] lg:w-[500px] bg-white shadow-xl rounded-2xl p-4"
          initial={{ y: 0, rotateX: 0 }}
          animate={hovered ? { y: -10, rotateX: 10 } : { y: 0, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={image}
            alt="Uploaded Poster"
            className="w-full h-auto rounded-xl object-contain mb-4"
          />

          {hovered && (
            <div className="absolute inset-x-0 bottom-0 bg-white p-3 rounded-b-2xl shadow-inner">
              <input
                placeholder="제목을 입력하세요"
                className="mb-2 w-full border p-1 rounded"
              />
              <textarea
                placeholder="포스터에 대한 설명을 작성해보세요"
                className="w-full border p-1 rounded"
              />
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default App;
