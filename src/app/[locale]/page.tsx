import React from 'react';

export default function Home() {
  return (
    <>
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Kate VR</h1>
        <p className="text-gray-600 text-center mb-4">
          Immerse yourself in the world of virtual reality.
        </p>
        <div className="flex justify-center">
          <a href="#about" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
            Learn More
          </a>
        </div>
      </section>
    </>
  );
}
