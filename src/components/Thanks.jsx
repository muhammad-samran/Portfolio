import React from "react";
import { useEffect } from "react";

const Thanks = ({ form, setForm, setThanks }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setThanks(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center text-center h-[50vh]">
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {`Thank you ${form.name}. I will get back to you as soon as possible.`}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold  tracking-[1px]"
        style={{ margin: 0 }}
      >
        {`M. Samran`}
      </p>
    </div>
  );
};

export default Thanks;
