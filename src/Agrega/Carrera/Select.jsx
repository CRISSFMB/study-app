import React, { useEffect, useState } from "react";
import { useField } from "formik";

import { getUniversidades } from "../../Firebase/firebase-utils";
import { DivSelec, H2, Label } from "../MyList.styled";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);  
  const [universidades, setUniversidades] = useState([]);
  useEffect(() => {
    getUniversidades().then((res) => {
      setUniversidades(res);
      // console.log(res);
    });
  }, []);
  return (
    <>
      <H2>{label}</H2>
      <DivSelec>
        {universidades.map((universidad) => (
          <Label>
            <input
              type="checkbox"
              value={universidad.id}
              name={field.name}
              checked={field.value.includes(universidad.id)}
              onChange={() => {
                if (field.value.includes(universidad.id)) {
                  const nextValue = field.value.filter(
                    (value) => value !== universidad.id
                  );
                  field.onChange({
                    target: {
                      name: field.name,
                      value: nextValue,
                    },
                  });
                } else {
                  const nextValue = field.value.concat(universidad.id);
                  field.onChange({
                    target: {
                      name: field.name,
                      value: nextValue,
                    },
                  });
                }
              }}
            />
            {universidad.title}
          </Label>
        ))}
      </DivSelec>
    </>
  );
};

export default Select;
