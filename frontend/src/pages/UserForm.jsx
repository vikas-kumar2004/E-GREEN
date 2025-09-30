import React, { useState } from "react";
import { Globe, Map, MapPin, Hash, Send, Sun } from "lucide-react";

const countries = {
  India: {
    Maharashtra: ["Pune", "Mumbai"],
    Karnataka: ["Bangalore", "Mysore"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Houston", "Dallas"],
  },
};

// Mock backend calculation
function calculateSolarPanels(units) {
  // Example panel sizes and costs
  const panelOptions = [
    { size: 100, cost: 50 }, // 100W panel
    { size: 250, cost: 120 }, // 250W panel
    { size: 500, cost: 200 }, // 500W panel
  ];

  let results = [];
  let remaining = units;

  for (let panel of panelOptions.reverse()) {
    const count = Math.floor(remaining / panel.size);
    if (count > 0) {
      results.push({
        size: panel.size,
        count,
        totalCost: count * panel.cost,
      });
      remaining = remaining % panel.size;
    }
  }

  return results;
}

export default function SolarForm() {
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    district: "",
    number: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      setFormData({ country: value, state: "", district: "", number: "" });
    } else if (name === "state") {
      setFormData((prev) => ({ ...prev, state: value, district: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calc = calculateSolarPanels(Number(formData.number));
    setResult(calc);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-4"
      >
        {/* Country */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <Globe className="w-5 h-5 text-indigo-600" />
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Country</option>
            {Object.keys(countries).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <Map className="w-5 h-5 text-green-600" />
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            disabled={!formData.country}
          >
            <option value="">Select State</option>
            {formData.country &&
              Object.keys(countries[formData.country]).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <MapPin className="w-5 h-5 text-pink-600" />
            District
          </label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
            disabled={!formData.state}
          >
            <option value="">Select District</option>
            {formData.state &&
              countries[formData.country][formData.state].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>

        {/* Number Input */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <Hash className="w-5 h-5 text-yellow-600" />
            Required Power (Watt)
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter power requirement"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-xl shadow hover:bg-indigo-700 transition-all"
        >
          <Send className="w-5 h-5" />
          Calculate
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
            <Sun className="w-6 h-6 text-orange-500" />
            Solar Panel Estimate
          </h2>
          <ul className="space-y-2">
            {result.map((r, idx) => (
              <li
                key={idx}
                className="flex justify-between p-2 border rounded-lg bg-gray-50"
              >
                <span>
                  {r.count} × {r.size}W Panel
                </span>
                <span className="font-medium text-gray-700">
                  ${r.totalCost}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-bold text-indigo-700">
            Total Cost: ${result.reduce((sum, r) => sum + r.totalCost, 0)}
          </div>
        </div>
      )}
    </div>
  );
}
