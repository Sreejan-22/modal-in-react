import "./PreviewModal.css";
import CrossIcon from "./CrossIcon";

const PreviewModal = ({ setPreviewModalOpen }) => {
  return (
    <div className="preview-modal">
      <div className="carousel-container-wrapper">
        <div className="carousel-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            className="bi bi-chevron-left left-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="carousel-img"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            className="bi bi-chevron-right right-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className="carousel-navigators">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="white"
            className="bi bi-circle-fill filled-circle"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="white"
            className="bi bi-circle outline-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="white"
            className="bi bi-circle outline-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="white"
            className="bi bi-circle outline-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        </div>
      </div>
      <CrossIcon setPreviewModalOpen={setPreviewModalOpen} />
    </div>
  );
};

export default PreviewModal;
