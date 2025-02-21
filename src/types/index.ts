export interface Employee {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  profilePicture?: string;
  department: string;
}

export interface EmployeeFormData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  profilePicture?: string;
  department: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  department?: string;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

export interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
