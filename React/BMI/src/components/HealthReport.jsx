import React, { useContext } from "react";
import Context from "../context/Context";

const HealthReport = () => {
  const { name, age, bmi } = useContext(Context);

  // Determine BMI category
  const getBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue >= 18.5 && bmiValue <= 24.9) return "Normal Weight";
    if (bmiValue >= 25 && bmiValue <= 29.9) return "Overweight";
    if (bmiValue >= 30 && bmiValue <= 24.9) return "Obesity";
    return "Extreme Obese";
  };

  return (
    <div className="text-gray-800 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col items-center py-10">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Health Report
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{name || "Not Provided"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Age:</span>
            <span>{age || "Not Provided"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">BMI:</span>
            <span>{bmi ? bmi.toFixed(2) : "Not Calculated"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Health Status:</span>
            <span>
              {bmi ? getBmiCategory(bmi) : "BMI not calculated yet"}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
          BMI Chart
        </h2>
        <img
          className="h-96 rounded-lg shadow-lg"
          src="https://nutriactiva.com/cdn/shop/articles/body-mass-index-bmi-chart.jpg?v=1719432991&width=1500"
          alt="BMI Chart"
        />
      </div>
    </div>
  );
};

export default HealthReport;
