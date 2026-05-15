import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BLOG_POSTS = [
  {
    title: "What To Do When a Pipe Bursts in Your Bondi Apartment",
    description: "A burst pipe can cause serious damage in minutes. Here's exactly what to do — step by step — before it gets worse.",
    slug: "burst-pipe-bondi-apartment",
    image: "/images/burst-pipe-blog.png",
    category: "Emergency Tips",
    date: "May 14, 2026"
  },
  {
    title: "How Much Does an Emergency Plumber Cost in Bondi?",
    description: "Honest pricing breakdown covering call-out fees, common jobs and what affects the final bill in Sydney's Eastern Suburbs.",
    slug: "emergency-plumber-cost-bondi",
    image: "/images/plumbing-cost-blog.png",
    category: "Pricing & Advice",
    date: "May 14, 2026"
  },
  {
    title: "The Most Common Plumbing Emergencies in Bondi Beach Homes",
    description: "From burst pipes in older terraces to blocked drains in beachside apartments — here are the most common issues we see.",
    slug: "common-plumbing-emergencies-bondi-beach",
    image: "/images/common-emergencies-blog.png",
    category: "Emergency Tips",
    date: "May 15, 2026"
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Plumbing Blog | Emergency Tips & Advice | Bondi Emergency Plumbing"
        description="Expert plumbing advice, emergency tips, and pricing guides for Bondi and Eastern Suburbs residents. Learn how to handle burst pipes, blocked drains and more."
      />

      <div className="bg-gray-50 min-h-screen">
        {/* Blog Header */}
        <div className="bg-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Bondi Plumbing Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              Expert advice, emergency checklists, and local insights for Bondi Beach and the Eastern Suburbs.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-3">
                    {post.date}
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-4 leading-tight group-hover:text-black transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {post.description}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-navy font-bold hover:gap-2 transition-all"
                  >
                    READ ARTICLE <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="bg-white border-t border-gray-200 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Emergency Help?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Our team is available 24/7 for all plumbing emergencies across Bondi.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:0483964440" 
                className="bg-navy text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-black transition-all shadow-lg"
              >
                Call 0483 964 440
              </a>
              <Link 
                to="/#contact" 
                className="bg-gray-100 text-navy px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
