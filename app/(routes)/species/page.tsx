"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';

  const products = [
    { src: "/lion.png", title: "Lion", description: "King of the jungle", category: "Mammals" },
    { src: "/elephant.png", title: "Elephant", description: "Largest land animal", category: "Mammals" },
    { src: "/tiger.png", title: "Tiger", description: "Powerful big cat", category: "Mammals" },
    { src: "/giraffe.png", title: "Giraffe", description: "Tallest animal", category: "Mammals" },
    { src: "/zebra.png", title: "Zebra", description: "Striped horse-like animal", category: "Mammals" },
    { src: "/eagle.png", title: "Eagle", description: "Majestic bird of prey", category: "Birds" },
    { src: "/parrot.png", title: "Parrot", description: "Colorful talking bird", category: "Birds" },
    { src: "/sparrow.png", title: "Sparrow", description: "Small, agile bird", category: "Birds" },
    { src: "/owl.png", title: "Owl", description: "Nocturnal bird of prey", category: "Birds" },
    { src: "/penguin.png", title: "Penguin", description: "Flightless bird from the south", category: "Birds" },
    { src: "/crocodile.png", title: "Crocodile", description: "Large predatory reptile", category: "Reptiles" },
    { src: "/snake.png", title: "Snake", description: "Legless reptile", category: "Reptiles" },
    { src: "/lizard.png", title: "Lizard", description: "Small, scaly reptile", category: "Reptiles" },
    { src: "/turtle.png", title: "Turtle", description: "Reptile with a hard shell", category: "Reptiles" },
    { src: "/chameleon.png", title: "Chameleon", description: "Reptile known for color change", category: "Reptiles" },
    { src: "/frog.png", title: "Frog", description: "Common amphibian", category: "Amphibians" },
    { src: "/salamander.png", title: "Salamander", description: "Lizard-like amphibian", category: "Amphibians" },
    { src: "/newt.png", title: "Newt", description: "Aquatic amphibian", category: "Amphibians" },
    { src: "/toad.png", title: "Toad", description: "Warty amphibian", category: "Amphibians" },
    { src: "/axolotl.png", title: "Axolotl", description: "Mexican salamander", category: "Amphibians" },
    { src: "/butterfly.png", title: "Butterfly", description: "Colorful flying insect", category: "Insects" },
    { src: "/beetle.png", title: "Beetle", description: "Hard-shelled insect", category: "Insects" },
    { src: "/dragonfly.png", title: "Dragonfly", description: "Insect with large wings", category: "Insects" },
    { src: "/ant.png", title: "Ant", description: "Social insect", category: "Insects" },
    { src: "/bee.png", title: "Bee", description: "Pollinating insect", category: "Insects" },
    { src: "/cow.png", title: "Cow", description: "Domesticated farm animal", category: "Herbivores" },
    { src: "/horse.png", title: "Horse", description: "Large domesticated animal", category: "Herbivores" },
    { src: "/deer.png", title: "Deer", description: "Forest-dwelling herbivore", category: "Herbivores" },
    { src: "/koala.png", title: "Koala", description: "A cute koala resting on a tree.", category: "Herbivores" },
    { src: "/rabbit.png", title: "Rabbit", description: "Small herbivore", category: "Herbivores" },
    { src: "/bear.png", title: "Bear", description: "Large omnivorous mammal", category: "Omnivores" },
    { src: "/pig.png", title: "Pig", description: "Domesticated omnivore", category: "Omnivores" },
    { src: "/human.png", title: "Human", description: "Omnivorous species", category: "Omnivores" },
    { src: "/raccoon.png", title: "Raccoon", description: "Masked omnivore", category: "Omnivores" },
    { src: "/chicken.png", title: "Chicken", description: "Omnivorous bird", category: "Omnivores" },
    { src: "/lion.png", title: "Lion", description: "Top predator", category: "Carnivores" },
    { src: "/tiger.png", title: "Tiger", description: "Powerful big cat", category: "Carnivores" },
    { src: "/wolf.png", title: "Wolf", description: "Pack hunter", category: "Carnivores" },
    { src: "/shark.png", title: "Shark", description: "Predatory fish", category: "Carnivores" },
    { src: "/eagle.png", title: "Eagle", description: "Bird of prey", category: "Carnivores" },
  ];

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-600 mb-8 text-center">
          {category ? `${category} Species` : 'Species'}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
              >
                <div className="relative w-full h-40 sm:h-48 lg:h-56 mb-4">
                  <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">There are no products in this category.</p>
          )}
        </div>
        <div className="mt-8">
          <Link href="/categories" className="text-teal-600 hover:text-teal-400 text-sm sm:text-base">
            Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Products />
  </Suspense>
);

export default Page;
