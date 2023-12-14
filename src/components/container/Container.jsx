import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
    </>
  );
};

export default Container;
