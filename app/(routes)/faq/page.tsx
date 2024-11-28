"use client";

const FAQ = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600 mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-600">How can I contribute to local wildlife conservation?</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">You can participate in volunteer programs, support conservation organizations, and adopt eco-friendly practices.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-600">What actions can I take to reduce my ecological footprint?</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">Reduce, reuse, and recycle, choose sustainable products, cut down on meat consumption, and opt for eco-friendly transportation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-600">How can I help protect marine habitats?</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">Avoid products containing microplastics, support local beach clean-up initiatives, and choose sustainable seafood products.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-600">What is the best way to support reforestation efforts?</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">Support organizations specializing in reforestation, plant trees locally, and reduce consumption of unsustainable wood products.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-600">How can I reduce my impact on natural ecosystems?</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">Practice sustainable tourism, reduce waste, and be mindful of the environmental impact of your daily choices.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-600">Are there educational programs on nature that I can join?</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">Yes, many environmental organizations, natural history museums, and conservation centers offer educational programs.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;