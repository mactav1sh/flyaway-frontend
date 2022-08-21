import { useState } from 'react';
import { IUser } from '../contexts/AuthContext';

const useProvideAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // SIGN IN
  async function signIn(
    email: string,
    password: string
  ): Promise<void | IUser> {
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/v1/users/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (response.ok) {
      setUser(json.data.user);
      setLoading(false);
      return json.data.user;
    } else {
      setError(json.message);
      setLoading(false);
    }
  }

  // REGISTER
  async function register(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ): Promise<void | IUser> {
    const body = {
      name,
      email,
      password,
      passwordConfirm,
    };
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/v1/users/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();

    if (response.ok) {
      setUser(json.data.user);
      setLoading(false);
      return json.data.user;
    } else {
      setError(json.message);
      setLoading(false);
    }
  }

  // SIGN OUT

  async function signOut(): Promise<void> {
    const response = await fetch('http://localhost:5000/api/v1/users/sign-out');

    const json = await response.json();

    if (response.ok) {
      setUser(null);
      setLoading(false);
    } else {
      setError(json.message);
      setLoading(false);
    }
  }

  return { user, loading, error, signIn, register, signOut };
};

export default useProvideAuth;
