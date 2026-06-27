import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../services/supabase';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
const initialBlogPosts = [
  {
    id: 'top-5-tech-hubs',
    title: 'Top 5 Tech Hubs in Europe for Expats in 2026',
    excerpt: 'Looking to relocate? We analyze the best cities in Europe based on tech salaries, visa ease, and quality of life.',
    author: 'Sarah Jenkins',
    date: 'June 10, 2026',
    category: 'Relocation',
    image: '/blog/tech_hubs.png'
  },
  {
    id: 'strong-sop',
    title: 'How to Build a Strong Statement of Purpose',
    excerpt: 'Your SOP can make or break your student visa application. Here are 7 expert tips to make yours stand out.',
    author: 'David Chen',
    date: 'June 5, 2026',
    category: 'Study Abroad',
    image: '/blog/sop.png'
  },
  {
    id: 'digital-nomad-visas',
    title: 'The Rise of Digital Nomad Visas: A Complete List',
    excerpt: 'Over 50 countries now offer visas specifically for remote workers. Find out which ones offer the best tax benefits.',
    author: 'Elena Rodriguez',
    date: 'May 28, 2026',
    category: 'Digital Nomad',
    image: '/blog/digital_nomad.png'
  },
  {
    id: 'uk-points-system',
    title: 'Understanding the UK Points-Based Immigration System',
    excerpt: 'A deep dive into how points are calculated for the Skilled Worker visa and how you can boost your score.',
    author: 'James Wilson',
    date: 'May 15, 2026',
    category: 'Guides',
    image: '/blog/uk.png'
  },
  {
    id: 'pet-relocation',
    title: 'Moving with Pets: International Pet Relocation Guide',
    excerpt: 'Relocating with your furry friends requires intense preparation. Learn about quarantine rules, microchips, and travel crates.',
    author: 'Sarah Jenkins',
    date: 'May 2, 2026',
    category: 'Relocation',
    image: '/blog/pets.png'
  },
  {
    id: 'visa-rejections',
    title: 'Common Reasons for Visa Rejections (And How to Avoid Them)',
    excerpt: 'Don\'t let a simple mistake ruin your immigration dreams. We break down the most frequent reasons for visa denials.',
    author: 'David Chen',
    date: 'April 20, 2026',
    category: 'Tips & Tricks',
    image: '/blog/rejection.png'
  }
];

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBlogs(data);
    } else {
      console.error('Error fetching blogs:', error);
    }
    setLoading(false);
  };

  const seedBlogs = async () => {
    if (!window.confirm('This will seed the initial default blogs into the database. Proceed?')) return;
    
    setLoading(true);
    for (const blog of initialBlogPosts) {
      // Need to add HTML content since initialBlogPosts only has excerpt
      // We will just use the excerpt as content for the seed if content is missing, 
      // but ideally we'd want the real HTML. For simplicity, we just insert what we have
      // or we can use a hardcoded HTML map.
      const contentMap = {
        'top-5-tech-hubs': '<p class="mb-6 text-gray-700 leading-relaxed text-lg">Europe is increasingly becoming the destination of choice for tech professionals.</p>',
        'strong-sop': '<p class="mb-6 text-gray-700 leading-relaxed text-lg">A Statement of Purpose (SOP) is arguably the most critical component.</p>',
        'digital-nomad-visas': '<p class="mb-6 text-gray-700 leading-relaxed text-lg">The remote work revolution has prompted over 50 countries to launch specialized Digital Nomad Visas (DNVs).</p>',
        'uk-points-system': '<p class="mb-6 text-gray-700 leading-relaxed text-lg">The UK\'s post-Brexit immigration system is entirely points-based.</p>',
        'pet-relocation': '<p class="mb-6 text-gray-700 leading-relaxed text-lg">Moving abroad is stressful, but adding a pet to the mix takes logistics to a whole new level.</p>',
        'visa-rejections': '<p class="mb-6 text-gray-700 leading-relaxed text-lg">Receiving a visa rejection can be devastating, especially after investing significant time and money.</p>'
      };

      const seedData = {
        ...blog,
        content: contentMap[blog.id] || `<p>${blog.excerpt}</p>`
      };

      await supabase.from('blogs').upsert(seedData);
    }
    await fetchBlogs();
    alert('Blogs seeded successfully!');
  };

  const handleAddNew = () => {
    const newBlog = {
      id: `new-blog-${Date.now()}`,
      title: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      category: 'General',
      image: ''
    };
    setFormData(newBlog);
    setEditingId(newBlog.id);
  };

  const handleEdit = (blog) => {
    setFormData({ ...blog });
    setEditingId(blog.id);
  };

  const handleCancel = () => {
    setFormData(null);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image: publicUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Make sure the bucket exists and policies allow it.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSave = async () => {
    if (!formData.title || !formData.id) {
      alert('Title is required');
      return;
    }

    try {
      // Create a slug for new blogs if the ID still starts with new-blog
      let finalData = { ...formData };
      if (finalData.id.startsWith('new-blog-')) {
        finalData.id = finalData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      }

      const { error } = await supabase
        .from('blogs')
        .upsert(finalData);

      if (error) throw error;
      
      setEditingId(null);
      setFormData(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Error saving blog: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog.');
    } else {
      fetchBlogs();
    }
  };

  if (loading && blogs.length === 0) {
    return <div className="p-8 text-center text-gray-500">Loading blogs...</div>;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900">Manage Blogs</h2>
        <div className="flex gap-3">
          {blogs.length === 0 && (
            <button 
              onClick={seedBlogs}
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Seed Default Blogs
            </button>
          )}
          <button 
            onClick={handleAddNew}
            disabled={editingId !== null}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50"
          >
            <Plus className="w-4 h-4" /> Add New Blog
          </button>
        </div>
      </div>

      <div className="p-6">
        {editingId ? (
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold mb-4">{formData.id.startsWith('new-blog-') ? 'Create New Blog' : 'Edit Blog'}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Short Summary)</label>
              <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows="2" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">HTML Content</label>
              <textarea name="content" value={formData.content} onChange={handleChange} rows="10" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-mono text-sm"></textarea>
              <p className="text-xs text-gray-500 mt-1">You can write raw HTML or standard text here.</p>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
              
              <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-100 transition-colors cursor-pointer relative"
              >
                {uploading && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-xl z-10">
                    <span className="text-primary font-bold">Uploading...</span>
                  </div>
                )}
                
                {formData.image ? (
                  <div className="flex flex-col items-center">
                    <img src={formData.image} alt="Cover Preview" className="h-32 object-contain mb-4 rounded" />
                    <span className="text-sm text-gray-500 flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Image uploaded. Click or drag to replace.</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <ImageIcon className="w-10 h-10 mb-2 text-gray-400" />
                    <p className="font-medium text-gray-700">Drag & drop an image here</p>
                    <p className="text-sm mt-1">or click to browse</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={(e) => e.target.files?.length > 0 && handleImageUpload(e.target.files[0])} 
                  className="hidden" 
                  accept="image/*"
                />
              </div>
              <div className="mt-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Or paste image URL:</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="https://..." />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button onClick={handleCancel} className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg font-medium transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-blue-700 rounded-lg font-medium transition-colors">
                <Save className="w-4 h-4" /> Save Post
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length === 0 ? (
              <div className="col-span-full py-12 text-center text-gray-500">
                No blog posts found. Click "Add New Blog" to create one.
              </div>
            ) : (
              blogs.map(blog => (
                <div key={blog.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-40 bg-gray-100 overflow-hidden">
                    {blog.image ? (
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-primary uppercase bg-blue-50 px-2 py-1 rounded">{blog.category}</span>
                      <span className="text-xs text-gray-500">{blog.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 leading-tight mb-2 flex-grow">{blog.title}</h3>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                      <button onClick={() => handleEdit(blog)} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium">
                        <Edit2 className="w-4 h-4" /> Edit
                      </button>
                      <button onClick={() => handleDelete(blog.id)} className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 font-medium">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBlogs;
