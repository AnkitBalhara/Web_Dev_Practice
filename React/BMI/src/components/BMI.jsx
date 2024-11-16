import React, { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const BMI = () => {
  const [weight, setWeight] = useState(5);
  const [height, setHeight] = useState(4);
  const [heightInMeters, setHeightInMeters] = useState(0);


  const navigate = useNavigate();

  const { name, setName, setAge, setBmi } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foot = (Number(height.split(".")[0]) / 3.281).toFixed(3);
    const inches = (Number(height.split(".")[1]) / 39.37).toFixed(3);
    const totalHeight = Number(foot) + Number(inches);
    const heightInMeters = totalHeight * totalHeight;
    setHeightInMeters(heightInMeters);
    setBmi(weight / heightInMeters);
    setHeight(0);
    setWeight(0);
    navigate("/report")
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border-2 border-white rounded-md shadow-2xl text-slate-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Fitness Level</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="w-full p-2 border rounded text-black"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block font-semibold mb-1">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded  text-black"
            placeholder="Enter your age"
            min="1"
            required
          />
        </div>

        <div>
          <label htmlFor="height" className="block font-semibold mb-1">
            Height (feet):
          </label>
          <input
            type="number"
            id="height"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            name="height"
            className="w-full p-2 border rounded  text-black"
            placeholder="Enter your height"
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="weight" className="block font-semibold mb-1">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            onChange={(e) => setWeight(Number(e.target.value))}
            name="weight"
            className="w-full p-2 border rounded  text-black"
            placeholder="Enter your weight"
            min="1"
            required
          />
        </div>
        <button
          //   type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {/* <h2>{bmi && "BMI is : " + bmi.toFixed(2)}</h2> */}
    </div>
  );
};

export default BMI;
