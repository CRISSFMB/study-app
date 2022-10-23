import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversidades } from "../../Firebase/firebase-utils";
import { getUniversity } from "../../store/slices/university";

const ViewUniversidad = () => {
  
  // const dispatch = useDispatch();
  getUniversidades().then((data) => {
     console.log(data)
  });
  
  // console.log(univ);
  return <div>ViewUniversidad</div>;
};

export default ViewUniversidad;
