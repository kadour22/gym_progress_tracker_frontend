import React, { useState } from "react";
import { ProgramAPI } from "../../api/api";

const CreateProgram = () => {


  const [age, setAge] = useState("");
  const [gender, setGender] = useState("man");
  const [progam_goal, setProgam_goal] = useState("lossfat");
  const [durations, setDurations] = useState("2 Month");
  const [training, setTraining] = useState("3 day");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [loading, setLoading] = useState(false);
  console.log(age)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await ProgramAPI.generate_ai_program(
        {
          age,
          gender,
          progam_goal,
          durations,
          training,
          height,
          weight
        }
      );
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
            onChange={(e) => setAge(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none"
          />

          <select
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg"
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>

          <select
            name="progam_goal"
            onChange={(e) => setProgam_goal(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg"
          >
            <option value="lossfat">Loss Fat</option>
            <option value="bulk">Bulk</option>
            <option value="cut">Cut</option>
          </select>

          <select
            name="durations"
            onChange={(e) => setDurations(e.target.value)}
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
            onChange={(e) => setTraining(e.target.value)}
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
            onChange={(e) => setHeight(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none"
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            onChange={(e) => setWeight(e.target.value)}
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