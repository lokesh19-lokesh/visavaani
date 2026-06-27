import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../services/supabase';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (!error && data) {
        setBlogPosts(data);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title="Immigration Blog"
        description="Insights, stories, and expert advice on global mobility and immigration."
        url="/blog"
      />
      <div className="bg-primary pt-20 pb-20 text-white text-center px-4">
         <h1 className="text-4xl md:text-5xl font-extrabold mb-6">VisaVaani Blog</h1>
         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
           Insights, stories, and expert advice on global mobility and immigration.
         </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading articles...</div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No articles found. Check back later!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <User className="w-4 h-4 mr-1" /> <span className="mr-3">{post.author}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <Clock className="w-4 h-4 mr-1" /> <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {!loading && blogPosts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
