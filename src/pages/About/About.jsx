import React from "react";
import Container from "../../components/Container";
import ScrollToTop from "../../components/ScrollToTop";

const About = () => {
  return (
    <Container>
      <ScrollToTop />
      <h1 className="text-2xl font-bold text-slate-800 mt-10 ">
        About SIMMI AGRO
      </h1>

      <p className="my-5 font-medium bg-slate-100 border rounded-xl p-5">
        SIMMI ARGo is nothing but a demo site to perform Reactjs test. It has
        static routes ( about, profile ) and dynamic routes ( when clicked on
        details button ). The datas are fetched from MongoDB Database hosted on
        mongodb atlas. This site is implemented with ComponentDidMount and
        ComponentWillUpdate lifecycle methods to fetch and update state to
        re-render the UI.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-slate-100 border rounded-xl p-5">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Technologies
          </h2>
          <ol style={{ listStyleType: "diamond" }} className="ml-5">
            <li>Vite/React.js</li>
            <li>React Router Dom V6</li>
            <li>Tailwindcss</li>
            <li>Backend: Express,MongoDB, Node</li>
          </ol>
        </div>
        <div className="bg-slate-100 border rounded-xl p-5">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Installations
          </h2>
          <ol style={{ listStyleType: "diamond" }} className="ml-5 ">
            <li>
              Clone the Repo https://github.com/rubel-sh/simmi using "git clone
              [url]"
            </li>
            <li>open terminal in simmi </li>
            <li>yarn / npm install</li>
            <li>yarn dev / npm run dev to start the server</li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default About;
