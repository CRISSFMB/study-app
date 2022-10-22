import { useField } from "formik";
import { Check } from "./Check";
import { DivErrors, DivInputs, H2, InputForm } from "./MyList.styled";

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("meta",meta);
  // console.log("field",field);
  return (
    <>
      <H2>{label}</H2>
      <DivInputs>
        <InputForm {...props} {...field} />
        <Check name={field.name} values={meta.value} />
      </DivInputs>
      {meta.touched && meta.error && <DivErrors>{meta.error}</DivErrors>}
    </>
  );
};
