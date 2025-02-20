export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  profilePicture?: string;
  position?: string;
  department?: string;
  phone?: string;
  location?: string;
  bio?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name: string;
}
