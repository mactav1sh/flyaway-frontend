import { createContext, ReactNode } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';

interface IProps {
  children: ReactNode;
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
}
interface IContext {
  user: IUser | null;
  loading: boolean;
  error: string;
  signIn: (email: string, password: string) => Promise<void | IUser>;
  signOut: () => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => Promise<void | IUser>;
}

// CREATING CONTEXT
export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IProps) => {
  const value = useProvideAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
