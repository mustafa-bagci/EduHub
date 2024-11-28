"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const images = [
    "gg1.png",
    "gg2.png",
    "gg3.png",
    "gg4.png",
    "gg5.png",
    "gg6.png",
    "gg7.png",
    "gg8.png",
    "gg9.png",
    "gg10.png",
    "gg1.png",
    "gg2.png",
    "gg3.png",
    "gg4.png",
    "gg5.png",
    "gg6.png",
    "gg7.png",
    "gg8.png",
    "gg9.png",
    "gg10.png",
  ];

  const articles = [
    {
      id: '1',
      title: 'Conservation of Endangered Species',
      summary: 'Discover global efforts to protect endangered species and local initiatives to help preserve wildlife.',
      date: 'August 10, 2024',
    },
    {
      id: '2',
      title: 'The Importance of Marine Ecosystems',
      summary: 'Explore how marine ecosystems impact our planet and the actions needed for their preservation.',
      date: 'August 5, 2024',
    },
    {
      id: '3',
      title: 'The Role of Forests in Combating Climate Change',
      summary: 'Learn how forests help regulate our climate and the steps we can take to support their health.',
      date: 'July 30, 2024',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(256);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const updateDimensions = () => {
    if (scrollContainerRef.current && imageRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const imgWidth = imageRef.current?.clientWidth || 256;
      setImageWidth(imgWidth);
      setVisibleCount(Math.floor(containerWidth / imgWidth));
    }
  };

  const handleDashClick = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollToPosition = index * visibleCount * imageWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/hero.png)' }}>
        <div className="container mx-auto flex flex-wrap justify-between items-center pb-64 pt-8">
          <div className="text-black font-bold text-xl">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={200} height={50} className="object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:space-x-6 text-teal-600 text-xl font-semibold">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link href="/articles" className="hover:text-teal-400 transition-colors">Articles</Link>
            <Link href="/categories" className="hover:text-teal-400 transition-colors">Categories</Link>
            <Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link>
            <Link href="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-teal-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`bg-gray-100 lg:hidden fixed inset-0 z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-teal-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 py-8">
            <Link href="/" className="text-teal-600 hover:text-teal-400 text-lg font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/articles" className="text-teal-600 hover:text-teal-400 text-lg font-semibold" onClick={() => setIsOpen(false)}>Articles</Link>
            <Link href="/categories" className="text-teal-600 hover:text-teal-400 text-lg font-semibold" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link href="/about" className="text-teal-600 hover:text-teal-400 text-lg font-semibold" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/contact" className="text-teal-600 hover:text-teal-400 text-lg font-semibold" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link href="/faq" className="text-teal-600 hover:text-teal-400 text-lg font-semibold" onClick={() => setIsOpen(false)}>FAQ</Link>
          </div>
      </div>


        <div className="relative flex flex-col items-center justify-center text-center text-white bg-gradient-to-t from-gray via-transparent to-black py-16 px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-cyan-100">
            Discover the Beauty of Nature
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore our commitment to preserving natural habitats and promoting sustainable living. Join us in making a difference for the environment!
          </p>
          <a
            href="/species"
            className="bg-cyan-100 hover:bg-cyan-200 text-black py-4 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
          >
            Explore Species
          </a>
      </div>

      </div>
      <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mb-6 text-center">
          Visual Gallery
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto whitespace-nowrap scrollbar-hidden"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                ref={index === 0 ? imageRef : null}
                src={src}
                alt={`Slide ${index + 1}`}
                className="inline-block w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-md mx-2"
                style={{ scrollSnapAlign: 'center' }}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-1">
            {Array.from({ length: Math.ceil(images.length / visibleCount) }).map((_, index) => (
              <span
                key={index}
                onClick={() => handleDashClick(index)}
                className={`block w-4 h-1 cursor-pointer ${index === activeIndex ? 'bg-green-500' : 'bg-gray-300'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>


      <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mb-6 text-center">
        What Our Community Says
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 px-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="mt-2 text-gray-600">"Exploring nature with your tours was a life-changing experience. The wildlife encounters were unforgettable!"</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Jane Smith</p>
            <p className="mt-2 text-gray-600">"The way you preserve natural habitats is truly inspiring. I’ve learned so much about wildlife conservation."</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Alex Johnson</p>
            <p className="mt-2 text-gray-600">"The guided nature walks were amazing. Seeing the animals in their natural environment was a highlight of my trip."</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Emily Davis</p>
            <p className="mt-2 text-gray-600">"I’m amazed by the dedication to protecting endangered species. Your work is vital for the planet’s future."</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Michael Brown</p>
            <p className="mt-2 text-gray-600">"Witnessing the beauty of the natural world through your eyes has been an eye-opener. Thank you for the incredible experiences."</p>
          </div>
        </div>
      </div>
    </div>


    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mb-6 text-center">
        Latest Articles
      </h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-teal-600">{article.title}</h3>
            <p className="text-gray-700 mt-2">{article.summary}</p>
            <p className="text-gray-500 text-sm mt-4">{article.date}</p>
          </div>
        ))}
      </div>
    </div>


      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teal-600">How can I contribute to local wildlife conservation?</h3>
            <p className="text-gray-700 mt-2">You can participate in volunteer programs, support conservation organizations, and adopt eco-friendly practices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teal-600">What actions can I take to reduce my ecological footprint?</h3>
            <p className="text-gray-700 mt-2">Reduce, reuse, and recycle, choose sustainable products, cut down on meat consumption, and opt for eco-friendly transportation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teal-600">How can I help protect marine habitats?</h3>
            <p className="text-gray-700 mt-2">Avoid products containing microplastics, support local beach clean-up initiatives, and choose sustainable seafood products.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teal-600">What is the best way to support reforestation efforts?</h3>
            <p className="text-gray-700 mt-2">Support organizations specializing in reforestation, plant trees locally, and reduce consumption of unsustainable wood products.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teal-600">How can I reduce my impact on natural ecosystems?</h3>
            <p className="text-gray-700 mt-2">Practice sustainable tourism, reduce waste, and be mindful of the environmental impact of your daily choices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teal-600">Are there educational programs on nature that I can join?</h3>
            <p className="text-gray-700 mt-2">Yes, many environmental organizations, natural history museums, and conservation centers offer educational programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;