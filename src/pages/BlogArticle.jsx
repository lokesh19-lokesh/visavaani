import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User, Share2 } from 'lucide-react';
import PlaceholderPage from './PlaceholderPage';
import SEO from '../components/SEO';
import { supabase } from '../services/supabase';

const BlogArticle = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();
        
      if (!error && data) {
        setPost(data);
      }
      setLoading(false);
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="min-h-[50vh] flex items-center justify-center">Loading article...</div>;
  }

  if (!post) {
    return <PlaceholderPage title="Article Not Found" />;
  }

  const renderContent = () => {
    if (post.content) {
      return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
    }
    return (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg">
        Content for this article is currently being updated. Please check back soon.
      </p>
    );
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      `https://visavaani.com${post.image}`
    ],
    "datePublished": post.date,
    "author": [{
        "@type": "Person",
        "name": post.author
    }],
    "publisher": {
      "@type": "Organization",
      "name": "VisaVaani",
      "logo": {
        "@type": "ImageObject",
        "url": "https://visavaani.com/logo.png"
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.id}`}
        schema={articleSchema}
      />
      {/* Hero Section */}
      <div className="bg-primary pt-24 pb-32 text-white relative px-4">
        <div className="max-w-[800px] mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          <div className="flex items-center space-x-2 mb-6">
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          
          {/* Cover Image */}
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Body */}
          <article className="prose prose-lg max-w-none text-gray-700">
            {renderContent()}
          </article>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-bold text-gray-900">Share this article:</span>
              <button 
                onClick={async () => {
                  const shareData = {
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  };
                  if (navigator.share) {
                    try {
                      await navigator.share(shareData);
                    } catch (err) {
                      console.error('Error sharing:', err);
                    }
                  } else {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    } catch (err) {
                      console.error('Failed to copy!', err);
                    }
                  }
                }}
                className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
