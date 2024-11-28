"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';

const articles = [
  {
    id: '1',
    title: 'Conservation of Endangered Species',
    content: 'This article discusses the global efforts to protect endangered species and highlights local initiatives aimed at preserving wildlife. Learn about various conservation strategies and how you can contribute.',
    date: 'August 10, 2024',
  },
  {
    id: '2',
    title: 'The Importance of Marine Ecosystems',
    content: 'Marine ecosystems play a critical role in maintaining planetary health. This article explores the impact of these ecosystems on our environment and the actions needed to preserve them.',
    date: 'August 5, 2024',
  },
  {
    id: '3',
    title: 'The Role of Forests in Combating Climate Change',
    content: 'Forests are vital in regulating our climate. This guide explains how forests help mitigate climate change and provides tips on how you can support reforestation efforts.',
    date: 'July 30, 2024',
  },
];

const ArticlePage = () => {
  const { id } = useParams(); 

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 mb-4">
          {article.title}
        </h1>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">{article.date}</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-base sm:text-lg">{article.content}</p>
        </div>
        <div className="mt-8">
          <Link href="/articles" className="text-teal-600 hover:text-teal-400 text-sm sm:text-base">
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;