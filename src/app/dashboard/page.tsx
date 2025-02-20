// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import EmployeeCard from '@/components/employee/EmployeeCard';
// import EmployeeForm from '@/components/employee/EmployeeForm';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import {
//   addEmployee,
//   deleteEmployee,
//   updateEmployee,
// } from '@/lib/store/employeeSlice';
// import { Employee, EmployeeFormData } from '@/types';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from '@/components/ui/alert-dialog';
// import { toast } from 'sonner';
// import { Search } from 'lucide-react';

// export default function Dashboard() {
//   const dispatch = useAppDispatch();
//   const employees = useAppSelector((state) => state.employee.employees);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
//   const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>();
//   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
//   const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);

//   const filteredEmployees = employees.filter(
//     (employee) =>
//       employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       employee.address?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAddEmployee = (employeeData: EmployeeFormData) => {
//     dispatch(
//       addEmployee({
//         id: uuidv4(),
//         ...employeeData,
//       })
//     );
//     toast.success('Employee added successfully');
//     setIsFormOpen(false);
//   };

//   const handleEditEmployee = (employeeData: EmployeeFormData) => {
//     if (selectedEmployee) {
//       dispatch(
//         updateEmployee({
//           id: selectedEmployee.id,
//           ...employeeData,
//         })
//       );
//       toast.success('Employee updated successfully');
//       setIsFormOpen(false);
//       setSelectedEmployee(undefined);
//     }
//   };

//   const handleEdit = (employee: Employee) => {
//     setSelectedEmployee(employee);
//     setIsFormOpen(true);
//   };

//   const handleDelete = (id: string) => {
//     setEmployeeToDelete(id);
//     setDeleteConfirmOpen(true);
//   };

//   const confirmDelete = () => {
//     if (employeeToDelete) {
//       dispatch(deleteEmployee(employeeToDelete));
//       toast.success('Employee deleted successfully');
//       setDeleteConfirmOpen(false);
//       setEmployeeToDelete(null);
//     }
//   };

//   return (
//     <div className="container mx-auto space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Employee Dashboard</h1>
//           <p className="text-sm text-gray-500">Manage your employees</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//             <Input
//               placeholder="Search employees..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-64 pl-9"
//             />
//           </div>
//           <Button onClick={() => setIsFormOpen(true)}>Add Employee</Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredEmployees.map((employee) => (
//           <EmployeeCard
//             key={employee.id}
//             employee={employee}
//             onEdit={() => handleEdit(employee)}
//             onDelete={() => handleDelete(employee.id)}
//           />
//         ))}
//       </div>

//       {filteredEmployees.length === 0 && (
//         <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed">
//           <div className="text-center">
//             <p className="text-lg font-medium">No employees found</p>
//             <p className="text-sm text-gray-500">
//               {searchQuery
//                 ? 'Try adjusting your search query'
//                 : 'Add your first employee to get started'}
//             </p>
//           </div>
//         </div>
//       )}

//       <EmployeeForm
//         open={isFormOpen}
//         onClose={() => {
//           setIsFormOpen(false);
//           setSelectedEmployee(undefined);
//         }}
//         onSubmit={selectedEmployee ? handleEditEmployee : handleAddEmployee}
//         employee={selectedEmployee}
//       />

//       <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               This action cannot be undone. This will permanently delete the
//               employee from the system.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import EmployeeCard from '@/components/employee/EmployeeCard';
// import EmployeeForm from '@/components/employee/EmployeeForm';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import {
//   addEmployee,
//   deleteEmployee,
//   updateEmployee,
// } from '@/lib/store/employeeSlice';
// import { Employee, EmployeeFormData } from '@/types';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from '@/components/ui/alert-dialog';
// import { toast } from 'sonner';
// import { Search } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// export default function Dashboard() {
//   const dispatch = useAppDispatch();
//   const employees = useAppSelector((state) => state.employee.employees);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
//   const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>();
//   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
//   const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);
//   const [sortOption, setSortOption] = useState<string>('name-asc');

//   const filteredEmployees = employees
//     .filter(
//       (employee) =>
//         employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         employee.address?.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
//       if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
//       if (sortOption === 'id-asc') return a.id.localeCompare(b.id);
//       if (sortOption === 'id-desc') return b.id.localeCompare(a.id);
//       return 0;
//     });

//   const handleAddEmployee = (employeeData: EmployeeFormData) => {
//     dispatch(
//       addEmployee({
//         id: uuidv4(),
//         ...employeeData,
//       })
//     );
//     toast.success('Employee added successfully');
//     setIsFormOpen(false);
//   };

//   const handleEditEmployee = (employeeData: EmployeeFormData) => {
//     if (selectedEmployee) {
//       dispatch(
//         updateEmployee({
//           id: selectedEmployee.id,
//           ...employeeData,
//         })
//       );
//       toast.success('Employee updated successfully');
//       setIsFormOpen(false);
//       setSelectedEmployee(undefined);
//     }
//   };

//   const handleEdit = (employee: Employee) => {
//     setSelectedEmployee(employee);
//     setIsFormOpen(true);
//   };

//   const handleDelete = (id: string) => {
//     setEmployeeToDelete(id);
//     setDeleteConfirmOpen(true);
//   };

//   const confirmDelete = () => {
//     if (employeeToDelete) {
//       dispatch(deleteEmployee(employeeToDelete));
//       toast.success('Employee deleted successfully');
//       setDeleteConfirmOpen(false);
//       setEmployeeToDelete(null);
//     }
//   };

//   return (
//     <div className="container mx-auto space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Employee Dashboard</h1>
//           <p className="text-sm text-gray-500">Manage your employees</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//             <Input
//               placeholder="Search employees..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-64 pl-9"
//             />
//           </div>
//           <Select value={sortOption} onValueChange={setSortOption}>
//             <SelectTrigger className="w-40">
//               <SelectValue placeholder="Sort by" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="name-asc">Name (A-Z)</SelectItem>
//               <SelectItem value="name-desc">Name (Z-A)</SelectItem>
//               <SelectItem value="id-asc">ID (Ascending)</SelectItem>
//               <SelectItem value="id-desc">ID (Descending)</SelectItem>
//             </SelectContent>
//           </Select>
//           <Button onClick={() => setIsFormOpen(true)}>Add Employee</Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredEmployees.map((employee) => (
//           <EmployeeCard
//             key={employee.id}
//             employee={employee}
//             onEdit={() => handleEdit(employee)}
//             onDelete={() => handleDelete(employee.id)}
//           />
//         ))}
//       </div>

//       {filteredEmployees.length === 0 && (
//         <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed">
//           <div className="text-center">
//             <p className="text-lg font-medium">No employees found</p>
//             <p className="text-sm text-gray-500">
//               {searchQuery
//                 ? 'Try adjusting your search query'
//                 : 'Add your first employee to get started'}
//             </p>
//           </div>
//         </div>
//       )}

//       <EmployeeForm
//         open={isFormOpen}
//         onClose={() => {
//           setIsFormOpen(false);
//           setSelectedEmployee(undefined);
//         }}
//         onSubmit={selectedEmployee ? handleEditEmployee : handleAddEmployee}
//         employee={selectedEmployee}
//       />

//       <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               This action cannot be undone. This will permanently delete the
//               employee from the system.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import EmployeeCard from '@/components/employee/EmployeeCard';
import EmployeeForm from '@/components/employee/EmployeeForm';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from '@/lib/store/employeeSlice';
import { Employee, EmployeeFormData } from '@/types';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Search } from 'lucide-react';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employee.employees);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('');

  const filteredEmployees = employees
    .filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.address?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
      if (sortOption === 'phone-asc') return a.phone.localeCompare(b.phone);
      if (sortOption === 'phone-desc') return b.phone.localeCompare(a.phone);
      return 0;
    });

  const handleAddEmployee = (employeeData: EmployeeFormData) => {
    dispatch(
      addEmployee({
        ...employeeData,
      })
    );
    toast.success('Employee added successfully');
    setIsFormOpen(false);
  };

  const handleEditEmployee = (employeeData: EmployeeFormData) => {
    if (selectedEmployee) {
      dispatch(
        updateEmployee({
          ...employeeData,
        })
      );
      toast.success('Employee updated successfully');
      setIsFormOpen(false);
      setSelectedEmployee(undefined);
    }
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    setEmployeeToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      dispatch(deleteEmployee(employeeToDelete));
      toast.success('Employee deleted successfully');
      setDeleteConfirmOpen(false);
      setEmployeeToDelete(null);
    }
  };

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Employee Dashboard</h1>
          <p className="text-sm text-gray-500">Manage your employees</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-9"
            />
          </div>
          <select
            className="border p-2 rounded-md"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="phone-asc">Phone (Ascending)</option>
            <option value="phone-desc">Phone (Descending)</option>
          </select>
          <Button onClick={() => setIsFormOpen(true)}>Add Employee</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.phone}
            employee={employee}
            onEdit={() => handleEdit(employee)}
            onDelete={() => handleDelete(employee.phone)}
          />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed">
          <div className="text-center">
            <p className="text-lg font-medium">No employees found</p>
            <p className="text-sm text-gray-500">
              {searchQuery
                ? 'Try adjusting your search query'
                : 'Add your first employee to get started'}
            </p>
          </div>
        </div>
      )}

      <EmployeeForm
        open={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedEmployee(undefined);
        }}
        onSubmit={selectedEmployee ? handleEditEmployee : handleAddEmployee}
        employee={selectedEmployee}
      />

      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              employee from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
