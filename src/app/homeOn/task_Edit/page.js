"use client"

import React, { useState } from "react";
import Edit1 from "./edit1";
import Edit2 from "./edit2.js";
import Edit3 from "./edit3";

import "@/app/homeOn/task_Edit/edit.css"

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Editar Tarefa", "Equipe responsável", "Data de vencimento"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Edit1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Edit2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Edit3 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">          
          <h1 className="font-bold text-3xl ">{FormTitles[page]}</h1>
        </div>
        <div className="body bg-[url('/postit2.png')] bg-center bg-cover">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;