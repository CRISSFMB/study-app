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
  // console.log(universidades);
  return (
    <>
      <H2>{label}</H2>
      <DivSelec>
        {universidades.map((universidad) => (
          <Label key={universidad.id}>
            <input
              type="checkbox"
              value={universidad.title}
              name={field.name}
              checked={field.value.includes(universidad.title)}
              onChange={() => {
                if (field.value.includes(universidad.title)) {
                  const nextValue = field.value.filter(
                    (value) => value !== universidad.title
                  );
                  field.onChange({
                    target: {
                      name: field.name,
                      value: nextValue,
                    },
                  });
                } else {
                  const nextValue = field.value.concat(universidad.title);
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
