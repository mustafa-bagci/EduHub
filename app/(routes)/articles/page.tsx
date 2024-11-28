import Link from 'next/link';

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

const ArticlesPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-6 text-center">
        Latest Articles
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              <Link href={`/articles/${article.id}`} className="text-teal-600 hover:text-teal-400">
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{article.summary}</p>
            <p className="text-gray-500 text-xs sm:text-sm">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;