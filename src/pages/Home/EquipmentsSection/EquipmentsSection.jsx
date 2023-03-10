import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import LoadingSpinner from "../../../components/LoadingSpinner";

const EquipmentsSection = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  // ComponentDidMount lifecycle method
  useEffect(() => {
    const fetchEquipments = async () => {
      const response = await fetch(
        "https://simmi-server.vercel.app/api/equipments"
      );
      const data = await response.json();
      setEquipments(data);
      setLoading(false);
    };
    fetchEquipments();
  }, []);

  // limitDescription
  const limitDescription = (desc) => desc.slice(0, 100) + " ...";

  // Show loading while fetching data
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {/* Render all equipments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {equipments.map((equip) => (
          // Each Card
          <div
            key={equip._id}
            className="hover:drop-shadow-md transition-all duration-300 border  rounded-xl p-5 relative overflow-hidden pb-14"
          >
            <img
              src={equip.image}
              alt={equip.title}
              className="mb-5 rounded-md"
            />
            <h2 className="text-2xl font-medium mb-2">{equip.title}</h2>
            <p className="md:text-md">{limitDescription(equip.description)}</p>
            <Link className="" to={`/equipments/${equip._id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-400 transition-all text-white font-bold uppercase px-4 py-3  absolute bottom-0 left-0 w-full">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EquipmentsSection;
