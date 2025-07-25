import React from "react";
import { testimonial } from "../data"; // Pastikan path-nya sesuai

const TestimonialPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Apa Kata Mereka tentang MyRepublic?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonial.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 text-sm mb-4">"{item.desc}"</p>
              <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
