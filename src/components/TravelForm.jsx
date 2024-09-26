import { useState } from 'react';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    source: '', 
    destination: '', 
    date: '', 
    persons: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book Your Trip</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Source</label>
        <input 
          type="text" 
          className="w-full border p-2 rounded" 
          value={formData.source} 
          onChange={(e) => setFormData({ ...formData, source: e.target.value })} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Destination</label>
        <input 
          type="text" 
          className="w-full border p-2 rounded" 
          value={formData.destination} 
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input 
          type="date" 
          className="w-full border p-2 rounded" 
          value={formData.date} 
          onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Number of Persons</label>
        <input 
          type="number" 
          className="w-full border p-2 rounded" 
          value={formData.persons} 
          onChange={(e) => setFormData({ ...formData, persons: e.target.value })} 
        />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default TravelForm;
