"use client";

import { Button } from "@/components/ui/button";
import EmployeeTable from "@/components/employee/EmployeeTable";
import EmployeeForm from "@/components/employee/EmployeeForm";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "@/lib/store/employeeSlice";
import { Employee, EmployeeFormData } from "@/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Search } from "lucide-react";

export default function TableView() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employee.employees);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const filteredEmployees = employees.filter(
    (employee) =>
      (searchQuery === "" ||
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.address?.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedDepartment === "" || employee.department === selectedDepartment)
  );

  const handleAddEmployee = (employeeData: EmployeeFormData) => {
    dispatch(
      addEmployee({
        id: uuidv4(),
        ...employeeData,
      })
    );
    toast.success("Employee added successfully");
    setIsFormOpen(false);
  };

  const handleEditEmployee = (employeeData: EmployeeFormData) => {
    if (selectedEmployee) {
      dispatch(
        updateEmployee({
          id: selectedEmployee.id,
          ...employeeData,
        })
      );
      toast.success("Employee updated successfully");
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
      toast.success("Employee deleted successfully");
      setDeleteConfirmOpen(false);
      setEmployeeToDelete(null);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="bg-background border-b -mt-6 -mx-6 px-4 sm:px-6">
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Employee Dashboard</h1>
            <p className="text-sm text-gray-500">Manage your employees</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:w-64"
              />
            </div>
            <select
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border rounded px-3 py-2 w-full sm:w-auto"
            >
              <option value="">All Departments</option>
              {Array.from(new Set(employees.map((emp) => emp.department))).map(
                (dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                )
              )}
            </select>
            <Button
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto"
            >
              Add Employee
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto pt-10">
        {filteredEmployees.length > 0 ? (
          <div className="rounded-lg border bg-white">
            <EmployeeTable
              employees={filteredEmployees}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        ) : (
          <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed bg-white">
            <div className="text-center">
              <p className="text-lg font-medium">No employees found</p>
              <p className="text-sm text-gray-500">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "Add your first employee to get started"}
              </p>
            </div>
          </div>
        )}
      </div>

      <EmployeeForm
        open={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedEmployee(undefined);
        }}
        onSubmit={selectedEmployee ? handleEditEmployee : handleAddEmployee}
        employee={selectedEmployee}
      />
    </div>
  );
}
