import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUniversidad } from "../../Firebase/firebase-utils";
// import { getUniversidad } from "../../Firebase/firebase-utils";
// import { getUniversity } from "../../store/slices/university";

export const Carrera = ({ carrera }) => {
  const {university} = carrera
  const [universidad, setUniversidad] = useState([]);
  const uniEntri = Object.values(carrera.university).map((value) => value);
 console.log(uniEntri);
 useEffect(() => {
    getUniversidad(uniEntri).then((res) => {
      setUniversidad([...universidad, res]);
      // console.log(res);
    });
 }, []);
  return (
    <div>
      <div>
        {university.map((uni) => (
          <div>
            <h3>{uni}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
