import { useState } from "react";

const inputEmail = ({ placeholder, dataInputs, errorInputs, value }) => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleChange = (e) => {
    dataInputs(e);
  };

  const handleFocus = (e) => {
    setError("");
    setShow(false);
    setError(false);
    errorInputs(false);
  };

  const handleBlur = (e) => {
    const email = e.currentTarget.value;
    if (email.length === 0) {
      return setError("* campo requerido"), errorInputs(true);
    }

    if (!regexEmail.test(email)) {
      return setError("* Tiene que ser un email valido"), errorInputs(true);
    }

    if (email.length > 0 && regexEmail.test(email)) {
      return setShow(true), setError(false);
    }
  };

  return (
    <>
      <div className="contenedorInput">
        <input
          className="auth__input-style"
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(e);
          }}
          onBlur={(e) => handleBlur(e)}
          onFocus={(e) => handleFocus(e)}
          name="email"
          type="email"
          value={value}
          required
        />

        {show && value !== "" && (
          <svg
            className="contacto__logo__check"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1203 8.10675L11.3337 16.8934L6.54699 12.1201L4.66699 14.0001L11.3337 20.6667L22.0003 10.0001L20.1203 8.10675ZM14.0003 0.666748C6.64033 0.666748 0.666992 6.64008 0.666992 14.0001C0.666992 21.3601 6.64033 27.3334 14.0003 27.3334C21.3603 27.3334 27.3337 21.3601 27.3337 14.0001C27.3337 6.64008 21.3603 0.666748 14.0003 0.666748ZM14.0003 24.6667C8.10699 24.6667 3.33366 19.8934 3.33366 14.0001C3.33366 8.10675 8.10699 3.33341 14.0003 3.33341C19.8937 3.33341 24.667 8.10675 24.667 14.0001C24.667 19.8934 19.8937 24.6667 14.0003 24.6667Z"
              fill="#A8BBBF"
            />
          </svg>
        )}
      </div>
      <div>
        <p className="form_error">{error}</p>
      </div>
    </>
  );
};

export default inputEmail;
