import { useState } from 'react';
import { IUser } from '../contexts/AuthContext';

const useProvideAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

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
    }
  }

  return { user, loading, error, signIn };
};

export default useProvideAuth;
