import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import BrandSlider from '../components/BrandSlider';
import CategoryBrand from '../components/CategoryBrand';
import CategorySlider from '../components/CategorySlider';
import HomeBannerSlider from '../components/HomeBannerSlider';
import OfferSlider from '../components/OfferSlider';
import ProductCard from '../components/ProductCard';
import VideoCard from '../components/VideoCard';
import { DataService } from '../data/data';

export default function HomePage() {
  const offers = DataService.getOffers();
  const newArrivals = DataService.getNewArrivals();
  const articles = DataService.articles.slice(0, 4);
  const videos = DataService.videos.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      <HomeBannerSlider banners={DataService.banners} />
      <CategorySlider categories={DataService.categories} />
      <OfferSlider products={offers} />

      <section data-animate>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold section-title">New Arrivals</h2>
            <p className="text-gray-500 mt-2">The latest additions to our collection</p>
          </div>
          <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <BrandSlider brands={DataService.brands} />
      <CategoryBrand categories={DataService.categories} brands={DataService.brands} />

      <section data-animate>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold section-title">Latest Articles</h2>
            <p className="text-gray-500 mt-2">Tips, guides, and inspiration</p>
          </div>
          <Link to="/articles" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      </section>

      <section data-animate>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold section-title">Video Content</h2>
            <p className="text-gray-500 mt-2">Watch and learn from our experts</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      </section>

      <section data-animate className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay in the Loop</h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto">Get the latest updates on new products, exclusive offers, and insider tips.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/60 outline-none focus:bg-white/30 transition" />
          <button type="button" className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
