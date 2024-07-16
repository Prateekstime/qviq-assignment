import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and signup logic
    onSignup();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mb-4 p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-green-500 text-white">Signup</button>
    </form>
  );
};

export default Signup;
