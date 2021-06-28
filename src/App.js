import { useState } from "react";
import "./App.css";
// import { VscCircleFilled } from "react-icons/vsc";
// import { VscCircleOutline } from "react-icons/vsc";
// import { IoChevronBack } from "react-icons/io5";
// import { IoChevronForward } from "react-icons/io5";
import PreviewModal from "./PreviewModal/PreviewModal";

export default function App() {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  return (
    <div>
      <h1>Image Carousel</h1>
      <h2>Click on the button to open the Preview Modal</h2>
      <button
        style={{ textAlign: "center" }}
        onClick={() => setPreviewModalOpen(true)}
      >
        Preview
      </button>
      {previewModalOpen && (
        <PreviewModal setPreviewModalOpen={setPreviewModalOpen} />
      )}
    </div>
  );
}
