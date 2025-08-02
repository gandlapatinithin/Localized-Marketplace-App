import { useState } from 'react';

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister(form);
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}