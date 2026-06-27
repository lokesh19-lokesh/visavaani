import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User, Share2 } from 'lucide-react';
import { blogPosts } from './Blog';
import PlaceholderPage from './PlaceholderPage';
import SEO from '../components/SEO';

const BlogArticle = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <PlaceholderPage title="Article Not Found" />;
  }

  const renderContent = () => {
    switch (id) {
      case 'top-5-tech-hubs':
        return (
          <>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Europe is increasingly becoming the destination of choice for tech professionals. With excellent work-life balance, strong worker protections, and growing tech ecosystems, it's no wonder many expats are looking across the pond. Here are the top 5 cities to consider in 2026.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Berlin, Germany</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Berlin remains the startup capital of Europe. With the new skilled worker visa regulations making it easier than ever to relocate, the city offers a vibrant international community, relatively affordable cost of living, and English-friendly work environments.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Amsterdam, Netherlands</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Famous for its 30% ruling (a tax exemption for expats), Amsterdam boasts a high concentration of fintech and sustainable tech companies. Almost everyone speaks English, making integration seamless.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Stockholm, Sweden</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Sweden is home to unicorns like Spotify and Klarna. If you value a flat hierarchy, exceptional work-life balance, and don't mind the cold winters, Stockholm is an incredible hub for innovation.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. London, UK</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Despite Brexit, London's tech scene is unmatched in Europe for sheer size and capital. The Global Talent Visa and Skilled Worker Visa are the main routes for tech professionals looking to tap into this massive market.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Lisbon, Portugal</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lisbon has exploded in popularity thanks to its Digital Nomad Visa, incredible weather, and lower cost of living. It's becoming the European hub for Web3 and remote-first companies.
            </p>
          </>
        );
      case 'strong-sop':
        return (
          <>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              A Statement of Purpose (SOP) is arguably the most critical component of your student visa and university application. It's your one chance to speak directly to the admissions and visa officers. Here is how you can make yours stand out.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Be Specific About Your Goals</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Avoid vague statements like "I want to change the world." Instead, outline exactly what industry problem you want to solve and how this specific degree from this specific university will equip you to do so.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Show, Don't Just Tell</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Instead of saying "I am a good leader," describe a specific project where you led a team through a difficult challenge. Anecdotes make your SOP memorable and authentic.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Address The "Why Here?" Question</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Visa officers want to know why you chose their country over your home country or others. Mention specific professors, research facilities, or unique curriculum structures that influenced your decision.
            </p>
          </>
        );
      case 'digital-nomad-visas':
        return (
          <>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              The remote work revolution has prompted over 50 countries to launch specialized Digital Nomad Visas (DNVs). These visas allow you to live in a foreign country legally while working for an employer or clients located elsewhere.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Top Digital Nomad Visas in 2026</h3>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li><strong>Spain:</strong> Requires an income of around €2,500/month. Offers a path to permanent residency and potentially a very favorable tax regime (Beckham Law).</li>
              <li><strong>Portugal:</strong> Requires earning 4x the Portuguese minimum wage (approx €3,280/month). Valid for one year and renewable.</li>
              <li><strong>Estonia:</strong> The pioneer of the DNV. Requires an income of €3,504/month. Great for those who want to experience Northern Europe.</li>
              <li><strong>Dubai (UAE):</strong> Zero income tax. Requires a minimum income of $5,000/month. Offers access to a luxury lifestyle and global networking.</li>
            </ul>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-bold text-blue-900 mb-2">Important Note on Taxes</h4>
              <p className="text-blue-800 text-sm">
                A Digital Nomad Visa gives you the right to reside, but it does NOT automatically exempt you from local taxes. If you stay in most countries for more than 183 days, you will likely become a tax resident. Always consult with a cross-border tax advisor.
              </p>
            </div>
          </>
        );
      case 'uk-points-system':
        return (
          <>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              The UK's post-Brexit immigration system is entirely points-based. To qualify for a Skilled Worker Visa, you must score 70 points. But how are these points calculated?
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mandatory Points (50 Points)</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              You MUST meet these three criteria to even be considered. There is no flexibility here.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Offer from an approved sponsor (20 points)</li>
              <li>Job at an appropriate skill level (20 points)</li>
              <li>English language skills at level B1 (10 points)</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tradeable Points (20 Points Needed)</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              You must obtain the remaining 20 points from the following mix-and-match options:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Salary meets the minimum threshold of £38,700 (20 points)</li>
              <li>Job is on the Immigration Salary List (20 points)</li>
              <li>Relevant PhD (10 points)</li>
              <li>Relevant STEM PhD (20 points)</li>
            </ul>
          </>
        );
      case 'pet-relocation':
        return (
          <>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Moving abroad is stressful, but adding a pet to the mix takes logistics to a whole new level. International pet relocation requires months of planning, strict adherence to vaccination schedules, and navigating complex airline policies.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The 4-Step Preparation Process</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-700">
              <li><strong>Microchipping:</strong> Your pet must be microchipped with an ISO-compliant 15-digit chip BEFORE receiving their rabies vaccination.</li>
              <li><strong>Rabies Vaccination & Titre Test:</strong> Most rabies-free countries (like Australia, NZ, UK) require a Rabies Titre Test (RNATT) to prove the vaccine worked. This often requires a 3 to 6-month waiting period before travel.</li>
              <li><strong>Import Permits:</strong> Apply for the destination country's import permit well in advance.</li>
              <li><strong>Health Certificate:</strong> Within 10 days of travel, an official government vet must issue an international health certificate.</li>
            </ol>
          </>
        );
      case 'visa-rejections':
        return (
          <>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Receiving a visa rejection can be devastating, especially after investing significant time and money. Understanding why visas get rejected is the first step to ensuring your application is successful.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Insufficient Proof of Funds</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              This is the #1 reason for student and tourist visa rejections. You must prove you have enough liquid money to support yourself without illegally working. Large, unexplained deposits right before applying are a massive red flag.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Lack of Home Country Ties</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For temporary visas (like the US F1 or B1/B2), you must convince the officer you will return home. Lack of property, family, or a concrete job offer in your home country can lead to rejection under section 214(b).
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Document Discrepancies</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If your resume says you worked at Company X until 2023, but your reference letter is dated 2022, the officer may suspect fraud. Consistency across all documents is vital.
            </p>
          </>
        );
      default:
        return (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            Content for this article is currently being updated. Please check back soon.
          </p>
        );
    }
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
