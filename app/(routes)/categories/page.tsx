import Link from 'next/link';
import Image from 'next/image';

const Categories = () => {
  const categories = [
    { name: "Mammals", image: "/mammals.png" },
    { name: "Birds", image: "/birds.png" },
    { name: "Reptiles", image: "/reptiles.png" },
    { name: "Amphibians", image: "/amphibians.png" },
    { name: "Insects", image: "/insects.png" },
    { name: "Herbivores", image: "/herbivores.png" },
    { name: "Omnivores", image: "/omnivores.png" },
    { name: "Carnivores", image: "/carnivores.png" },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-600 mb-8">
          Categories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={`/species?category=${encodeURIComponent(category.name)}`}>
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <div className="relative w-full h-36 mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;