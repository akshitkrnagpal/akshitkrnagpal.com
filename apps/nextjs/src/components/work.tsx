"use client";

export const Work = () => {
  return (
    <a
      href="https://www.whoppah.com/"
      target="_blank"
      download
      onClick={(e) => {
        e.preventDefault;
        window.open("https://www.whoppah.com/", "_blank");
      }}
    >
      Work
    </a>
  );
};
