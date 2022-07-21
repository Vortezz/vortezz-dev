import React from "react";

export default function TextInput({name, label, type, placeholder, icon}: Props) {
  return (
    <div>
      <label className={"text-xl text-vortezz-white"} htmlFor={name}>{label}</label>
      <div className="flex mb-4 h-15 bg-vortezz-white rounded-lg pr-2 text-vortezz-gray2">
        <div className="flex -mr-px justify-center w-15 px-4 py-2">
          <span className="flex bg-white text-2xl text-vortezz-gray4">
            <i className={icon}/>
          </span>
        </div>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full flex-1 h-10 pr-2 relative text-xl outline-none border-none ring-none"
          required
        />
      </div>
    </div>
  );
}

interface Props {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: string;
}
