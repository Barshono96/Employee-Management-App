"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Employee } from "@/types";
import Image from "next/image";
import { Mail, Phone, MapPin, Building } from "lucide-react";

interface EmployeeCardProps {
  employee: Employee;
  onEdit?: () => void;
  onDelete?: () => void;
}

const EmployeeCard = ({ employee}: EmployeeCardProps) => {


  return (
    <Card className="w-full max-w-xs overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="flex flex-col items-center text-center space-y-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={employee.profilePicture || "/placeholder-avatar.png"}
            alt={employee.name}
            fill
            className="object-cover"
            sizes="96px"
            priority={false}
          />
        </div>
        <CardTitle>{employee.name}</CardTitle>
      </CardHeader>
  
      <CardContent className="p-6 text-center">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center">
            <Mail className="mr-2 h-4 w-4" />
            {employee.email}
          </div>
          <div className="flex items-center justify-center">
            <Phone className="mr-2 h-4 w-4" />
            {employee.phone || "No phone"}
          </div>
          <div className="flex items-center justify-center">
            <Building className="mr-2 h-4 w-4" />
            {employee.department || "No address"}
          </div>
          <div className="flex items-center justify-center">
            <MapPin className="mr-2 h-4 w-4" />
            {employee.address || "No address"}
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
  
};

export default EmployeeCard;
