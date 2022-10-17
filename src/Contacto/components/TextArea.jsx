import { useState } from "react";
import "./textArea.css";
const TextArea = ({ errorInputs, dataInputs, value }) => {
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    dataInputs(e);
  };

  const handleFocus = () => {
    setError(null);
    errorInputs(false);
  };
  const handleBlur = (e) => {
    const message = e.currentTarget.value;
    if (message.length === 0) {
      return setError("* Campo Requerido"), errorInputs(true);
    }
  };
  return (
    <div className="contenedor_comment">
      <label className="form_contacto_label">Mensaje</label>
      <div className="contacto_textArea">
        <div className="contactoTextArea">
          <textarea
            rows="10"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            name="comments"
            value={value}
            required
          ></textarea>
        </div>
      </div>

      <p className="error_message_text-area">{error}</p>
    </div>
  );
};

export default TextArea;
