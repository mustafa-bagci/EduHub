import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="relative mb-8">
          <Image
            src="/about.png"
            alt="About Us"
            layout="responsive"
            width={1200}
            height={800}
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-600 mb-6 text-center">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque sint sapiente, accusantium sunt dolorem magni dolorum nobis magnam et repudiandae culpa necessitatibus odio ad in labore veritatis repellat maxime deleniti maiores omnis beatae. Illum atque suscipit nostrum nemo sapiente facere aspernatur, consectetur repellat recusandae ratione corporis quidem, iure quas ad esse exercitationem. Quisquam dicta, excepturi, molestias provident expedita corporis, animi eos quis vero ut reiciendis ad. Harum asperiores repudiandae cumque nobis quisquam odio, ex nihil nisi assumenda maxime! Voluptate delectus quibusdam, consequuntur perferendis modi magni tempora consequatur accusamus atque voluptatum recusandae omnis laboriosam quisquam error voluptatem laudantium porro doloribus.
        </p>
      </div>
    </div>
  );
};

export default About;