import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { DataService } from '../data/data';

export default function ArticlesPage() {
  const articles = DataService.articles;
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary-500 transition">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-800 font-medium">Articles</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Articles & Guides</h1>

      <div className="mb-8" data-animate>
        <ArticleCard article={featured} size="featured" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((a) => (
          <div key={a.id} data-animate><ArticleCard article={a} /></div>
        ))}
      </div>
    </div>
  );
}
