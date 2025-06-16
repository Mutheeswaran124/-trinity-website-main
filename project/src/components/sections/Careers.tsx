import React, { useState, useRef } from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { Briefcase, X } from "lucide-react";

const Careers = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFile(event.target.files[0]);
      setIsModalOpen(false);

      const formData = new FormData();
      formData.append("resume", event.target.files[0]);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setUploadStatus("Resume uploaded successfully ✅");
        } else {
          setUploadStatus("Upload failed ❌");
        }
      } catch (error) {
        console.error("Error uploading resume:", error);
        setUploadStatus("Upload error ❌");
      }
    }
  };

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Section
      id="careers"
      title="Join Our Team"
      subtitle="Build your career at the forefront of data innovation"
      className="relative bg-cover bg-center text-white text-center"
    >
      {/* ✅ Fixed Box with Background Image */}
      <div
        className="relative py-16 px-6 rounded-lg shadow-lg max-w-3xl mx-auto text-white"
        style={{
          background: "url('https://png.pngtree.com/background/20210711/original/pngtree-business-office-colorful-banner-background-picture-image_1117432.jpg') no-repeat center center / cover", // ✅ Fully applied background image
          borderRadius: "12px",
        }}
      >
        {/* ✅ Reduced Blur Effect for Better Readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-lg"></div>

        {/* ✅ Content Inside Box */}
        <div className="relative z-10">
          <p className="text-lg mb-6">
            Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
          </p>

          {/* ✅ Upload Resume Button */}
          <Button
            variant="primary"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg"
            onClick={handleUploadClick}
          >
            <Briefcase size={16} className="mr-2" />
            Upload Resume
          </Button>
        </div>

        {/* ✅ Custom Pop-up UI */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
            <div className="relative max-w-lg mx-auto p-8 bg-white rounded-md shadow-lg text-center">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setIsModalOpen(false)}
                title="Close Upload Window"
                aria-label="Close Upload Window"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-4">Upload Your Resume</h2>
              <p className="text-gray-600 mb-4">Select a file from your computer</p>

              {/* ✅ Choose File Button */}
              <Button
                variant="secondary"
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
                onClick={() => fileInputRef.current?.click()}
              >
                Choose File
              </Button>

              {/* ✅ Hidden File Input */}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                aria-label="Upload your resume file"
                title="Select your resume file"
                placeholder="Choose file"
              />
            </div>
          </div>
        )}

        {/* ✅ Upload Status Feedback */}
        {uploadStatus && <p className="mt-4 text-lg font-semibold text-blue-300">{uploadStatus}</p>}
      </div>
    </Section>
  );
};

export default Careers;
