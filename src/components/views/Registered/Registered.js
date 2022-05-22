import React from "react";
import { useParams } from "react-router-dom";

const Registered = () => {
  const { teamID } = useParams();
  return <div className="container">Team ID del equipo es: {teamID}</div>;
};

export default Registered;
