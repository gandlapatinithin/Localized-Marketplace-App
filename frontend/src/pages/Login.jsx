import { useState } from 'react';

import { useOutletContext } from 'react-router-dom';

export default function Login() {
  const { handleLogin } = useOutletContext();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof handleLogin === 'function') handleLogin(form);
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}