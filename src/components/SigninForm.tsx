import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SigninForm = () => {
  const navigate = useNavigate();
  const { signIn, error } = useAuth();

  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await signIn(formData.email, formData.password);
    if (user) navigate('/');
  };
  return (
    <div className="flex-1 flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-4 mb-10">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-10">
          {/* EMAIL */}
          <div className="flex flex-col space-y-1.5 mb-3">
            <label htmlFor="email" className="text-sm font-semibold">
              Email address
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="border h-9 px-2 py-1 w-[360px] rounded-sm border-gray-400 focus:outline-brandBlueSec100"
            />
          </div>
          {/* PASSWORD */}
          <div className="flex flex-col space-y-1.5 mb-5">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              id="password"
              type="password"
              className="border h-9 px-2 py-1 w-[360px] rounded-sm border-gray-400 focus:outline-brandBlueSec100"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 text-lg font-semibold bg-brandBlueSec100 text-white hover:bg-brandBlueSec200"
          >
            Sign in
          </button>
          {/* ERROR */}
          {error && (
            <p className="text-center text-red-600 bg-red-50 mt-3 py-2 border border-red-600 font-semibold">
              {error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
