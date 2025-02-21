"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Employee } from "@/types";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
  sortField?: keyof Employee;
  sortDirection?: "asc" | "desc";
  onSort?: (field: keyof Employee) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onEdit,
  onDelete,
  sortField,
  sortDirection,
  onSort,
}) => {
  const SortableHeader = ({
    field,
    children,
  }: {
    field: keyof Employee;
    children: React.ReactNode;
  }) => (
    <TableHead
      className="group cursor-pointer hover:bg-gray-50 px-4 py-2"
      onClick={() => onSort?.(field)}
    >
      <div className="flex items-center">
        {children}
        <ArrowUpDown
          className={`ml-1 h-4 w-4 transition-all ${
            sortField === field
              ? "opacity-100 " + (sortDirection === "desc" ? "rotate-180" : "")
              : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </div>
    </TableHead>
  );

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="px-4 py-2">Profile</TableHead>
            <SortableHeader field="name">Name</SortableHeader>
            <SortableHeader field="email">Email</SortableHeader>
            <SortableHeader field="phone">Phone</SortableHeader>
            <SortableHeader field="address">Address</SortableHeader>
            <SortableHeader field="department">Department</SortableHeader>{" "}
            <TableHead className="text-center px-4 py-2">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id} className="hover:bg-gray-50">
              <TableCell className="px-4 py-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={employee.profilePicture || "/placeholder-avatar.png"}
                    alt={employee.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                    priority={false}
                  />
                </div>
              </TableCell>
              <TableCell className="px-4 py-2 font-medium">
                {employee.name}
              </TableCell>
              <TableCell className="px-4 py-2">{employee.email}</TableCell>
              <TableCell className="px-4 py-2">
                {employee.phone || "-"}
              </TableCell>
              <TableCell className="px-4 py-2">
                {employee.address || "-"}
              </TableCell>
              <TableCell className="px-4 py-2">
                {employee.department || "-"}
              </TableCell>{" "}
              <TableCell className="px-4 py-2 text-center">
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(employee)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(employee.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
