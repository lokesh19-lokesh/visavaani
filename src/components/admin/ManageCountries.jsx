import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { Plus, Edit2, Trash2, Save, X, RefreshCw } from 'lucide-react';
import { countriesData } from '../../data/countriesData'; // For migration only

const ManageCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);

  // Form State
  const [formData, setFormData] = useState(getEmptyForm());

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('countries').select('*').order('name');
    if (data) setCountries(data);
    if (error) console.error('Error fetching countries:', error);
    setLoading(false);
  };

  function getEmptyForm() {
    return {
      id: '', name: '', region: '', image: '', tags: '[]', description: '',
      quick_facts: '{}', key_visas: '[]', benefits: '[]'
    };
  }

  const handleMigrate = async () => {
    if (!window.confirm("Are you sure you want to run the migration? This will insert all hardcoded countries into the database.")) return;
    setIsMigrating(true);
    
    try {
      for (const c of countriesData) {
        const payload = {
          id: c.id,
          name: c.name,
          region: c.region,
          image: c.image,
          tags: c.tags, // Supabase handles JSON arrays
          description: c.description,
          quick_facts: c.quickFacts,
          key_visas: c.keyVisas,
          benefits: c.benefits
        };
        const { error } = await supabase.from('countries').upsert(payload);
        if (error) console.error("Error migrating:", c.name, error);
      }
      alert('Migration Complete!');
      fetchCountries();
    } catch (err) {
      console.error(err);
      alert('Migration failed. Check console.');
    }
    setIsMigrating(false);
  };

  const handleEdit = (country) => {
    setFormData({
      id: country.id,
      name: country.name,
      region: country.region,
      image: country.image,
      tags: JSON.stringify(country.tags || [], null, 2),
      description: country.description || '',
      quick_facts: JSON.stringify(country.quick_facts || {}, null, 2),
      key_visas: JSON.stringify(country.key_visas || [], null, 2),
      benefits: JSON.stringify(country.benefits || [], null, 2)
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this country?')) {
      const { error } = await supabase.from('countries').delete().eq('id', id);
      if (!error) fetchCountries();
      else alert('Failed to delete.');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: formData.id,
        name: formData.name,
        region: formData.region,
        image: formData.image,
        description: formData.description,
        tags: JSON.parse(formData.tags),
        quick_facts: JSON.parse(formData.quick_facts),
        key_visas: JSON.parse(formData.key_visas),
        benefits: JSON.parse(formData.benefits)
      };

      const { error } = await supabase.from('countries').upsert(payload);
      if (error) {
        alert('Error saving: ' + error.message);
      } else {
        setIsEditing(false);
        setFormData(getEmptyForm());
        fetchCountries();
      }
    } catch (err) {
      alert('Invalid JSON in one of the fields! Please check your brackets.');
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Edit Country: {formData.name || 'New'}</h2>
          <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ID (lowercase code, e.g. 'us')</label>
              <input required value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <input value={formData.region} onChange={e => setFormData({...formData, region: e.target.value})} className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL/Path</label>
              <input value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full p-2 border rounded-lg" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2 border rounded-lg" rows={3}></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags (JSON Array)</label>
              <textarea value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} className="w-full p-2 border rounded-lg font-mono text-xs" rows={4}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Benefits (JSON Array)</label>
              <textarea value={formData.benefits} onChange={e => setFormData({...formData, benefits: e.target.value})} className="w-full p-2 border rounded-lg font-mono text-xs" rows={4}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quick Facts (JSON Object)</label>
              <textarea value={formData.quick_facts} onChange={e => setFormData({...formData, quick_facts: e.target.value})} className="w-full p-2 border rounded-lg font-mono text-xs" rows={6}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Visas (JSON Array of Objects)</label>
              <textarea value={formData.key_visas} onChange={e => setFormData({...formData, key_visas: e.target.value})} className="w-full p-2 border rounded-lg font-mono text-xs" rows={6}></textarea>
            </div>
          </div>

          <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-medium flex justify-center items-center gap-2">
            <Save size={18} /> Save Country
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Manage Countries</h2>
        <div className="flex gap-3">
          {countries.length === 0 && (
             <button onClick={handleMigrate} disabled={isMigrating} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
               <RefreshCw size={18} className={isMigrating ? "animate-spin" : ""} /> 
               {isMigrating ? 'Migrating...' : 'Migrate Data'}
             </button>
          )}
          <button 
            onClick={() => { setFormData(getEmptyForm()); setIsEditing(true); }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus size={18} /> Add Country
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading countries...</div>
        ) : countries.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No countries found in database. Click "Migrate Data" to pull them from code.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Code</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Country Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Region</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {countries.map(c => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">{c.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{c.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{c.region}</td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button onClick={() => handleEdit(c)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete(c.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageCountries;
