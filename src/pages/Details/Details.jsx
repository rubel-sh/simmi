import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";
import ScrollToTop from "../../components/ScrollToTop";

const Details = () => {
  const data = useLoaderData();

  return (
    <Container>
      <ScrollToTop />
      <img src={data.image} alt={data.title} className="max-w-full mb-5" />
      <h2 className="text-3xl text-slate-800 font-medium my-4">{data.title}</h2>
      <p className="text-slate-800">{data.description}</p>
    </Container>
  );
};

export default Details;
