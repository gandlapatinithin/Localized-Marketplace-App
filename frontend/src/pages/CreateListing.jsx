import { useState } from 'react';

export default function CreateListing({ onCreate }) {
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    image: '',
    description: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" rows="4" />
      <button type="submit">Create</button>
    </form>
  );
}
