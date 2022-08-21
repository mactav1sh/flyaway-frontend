import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, error } = useAuth();

  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }>({ username: '', email: '', password: '', passwordConfirm: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, passwordConfirm } = formData;

    const user = await register(username, email, password, passwordConfirm);
    if (user) navigate('/');
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-4 mb-10">Create an account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-10">
          {/* USERNAME */}
          <div className="flex flex-col space-y-1.5 mb-3">
            <label htmlFor="username" className="text-sm font-semibold">
              Username
            </label>
            <input
              minLength={3}
              maxLength={30}
              required
              value={formData.username.replace(' ', '')}
              onChange={handleChange}
              type="text"
              id="username"
              className="border h-9 px-2 py-1 min-w-[20rem] md:w-[360px] rounded-sm border-gray-400 focus:outline-brandBlueSec100"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col space-y-1.5 mb-3">
            <label htmlFor="email" className="text-sm font-semibold">
              Email address
            </label>
            <input
              required
              value={formData.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="border h-9 px-2 py-1 min-w-[20rem] md:w-[360px] rounded-sm border-gray-400 focus:outline-brandBlueSec100"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col space-y-1.5 mb-5">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              required
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              id="password"
              type="password"
              className="border h-9 px-2 py-1 min-w-[20rem] md:w-[360px] rounded-sm border-gray-400 focus:outline-brandBlueSec100"
            />
          </div>

          {/* PASSWORD CONFIRM */}
          <div className="flex flex-col space-y-1.5 mb-3">
            <label htmlFor="passwordConfirm" className="text-sm font-semibold">
              Confirm password
            </label>
            <input
              required
              minLength={8}
              value={formData.passwordConfirm}
              onChange={handleChange}
              type="password"
              id="passwordConfirm"
              className="border h-9 px-2 py-1 min-w-[20rem] md:w-[360px] rounded-sm border-gray-400 focus:outline-brandBlueSec100"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 text-lg font-semibold bg-brandBlueSec100 text-white hover:bg-brandBlueSec200"
          >
            Register
          </button>

          {/* ERROR */}
          {error && (
            <p className="text-center text-red-600 bg-red-50 mt-3 py-2 border border-red-600 font-semibold max-w-[320px] md:max-w-[360px] ">
              {error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
