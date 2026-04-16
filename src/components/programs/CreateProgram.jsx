import React, { useState } from "react";
import { ProgramAPI } from "../../api/api";

const CreateProgram = () => {
  const [form, setForm] = useState({
    age: "",
    gender: "man",
    progam_goal: "lossfat",
    durations: "2 Month",
    training: "3 day",
    height: "",
    weight: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await ProgramAPI.generate_ai_program(form);
      console.log("Program created");
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#111] p-8 rounded-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Create Program
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg"
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>

          <select
            name="progam_goal"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg"
          >
            <option value="lossfat">Loss Fat</option>
            <option value="bulk">Bulk</option>
            <option value="cut">Cut</option>
          </select>

          <select
            name="durations"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg"
          >
            <option>1 Month</option>
            <option>2 Month</option>
            <option>3 Month</option>
            <option>4 Month</option>
            <option>5 Month</option>
          </select>

          <select
            name="training"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg"
          >
            <option>1 day</option>
            <option>2 day</option>
            <option>3 day</option>
            <option>4 day</option>
            <option>5 day</option>
          </select>

          <input
            type="text"
            name="height"
            placeholder="Height (cm)"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none"
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none"
          />

          <button
            disabled={loading}
            className="bg-lime-400 text-black py-3 rounded-full font-semibold mt-2"
          >
            {loading ? "Creating..." : "Create Program"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProgram;