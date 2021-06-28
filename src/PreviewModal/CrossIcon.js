import React from "react";

const CrossIcon = ({ setPreviewModalOpen }) => {
  return (
    <React.Fragment>
      <svg
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        className="close-icon"
        onClick={() => setPreviewModalOpen(false)}
      >
        <path
          fill="white"
          stroke="white"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M5 5L19 19M19 5L5 19"
        />
      </svg>
    </React.Fragment>
  );
};

export default CrossIcon;
