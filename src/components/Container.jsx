import React from "react";

const Container = ({ children }) => {
  return (
    <section className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {children}
    </section>
  );
};

export default Container;
