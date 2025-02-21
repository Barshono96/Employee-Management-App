"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Employee, EmployeeFormData, FormErrors } from "@/types";
import { useState, useEffect } from "react";
import { uploadToCloudinary } from "@/lib/utils/cloudinary";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface EmployeeFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (employee: EmployeeFormData) => void;
  employee?: Employee;
}

const departmentOptions = [
  "Software Developers",
  "Quality Assurance Engineers",
  "Project Managers",
  "Business Analysts",
  "Software Architects",
  "UI/UX Designers",
  "Project Manager",
];

const EmployeeForm = ({
  open,
  onClose,
  onSubmit,
  employee,
}: EmployeeFormProps) => {
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    profilePicture: "",
    department: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    address: "",
    department: "",
  });

  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [uploadError, setUploadError] = useState<string>("");

  useEffect(() => {
    if (employee) {
      const { id, ...employeeData } = employee;
      setFormData(employeeData);
      setPreviewImage(employeeData.profilePicture || "");
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        profilePicture: "",
        department: "",
      });
      setPreviewImage("");
    }
  }, [employee]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (
      formData.phone &&
      !/^\+?[\d\s-]{10,}$/.test(formData.phone) &&
      !/^01\d{10}$/.test(formData.phone)
    ) {
      newErrors.phone =
        "Phone number must start with '01' and be 11 digits long";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
  
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        profilePicture: "",
        department: "",
      });
      setPreviewImage("");
      setErrors({});
    }
  };
  

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setUploadError("");
      const imageUrl = await uploadToCloudinary(file);
      setFormData((prev) => ({ ...prev, profilePicture: imageUrl }));
      setPreviewImage(imageUrl);
    } catch (error) {
      setUploadError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] p-4">
        <DialogHeader>
          <DialogTitle className="text-lg">
            {employee ? "Edit Employee" : "Add Employee"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          {" "}
          <div className="space-y-2">
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={previewImage || "/placeholder-avatar.png"}
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <Input
                id="profilePicture"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-[200px] text-xs"
                disabled={uploading}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full h-8 text-sm"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full h-8 text-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full h-8 text-sm"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full h-8 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="department">Department *</Label>
            <select
              id="department"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="w-full h-8 border rounded-md text-sm px-2"
            >
              <option value="">Select Department</option>
              <option value="Software Developers">Software Developers</option>
              <option value="Quality Assurance Engineers">
                Quality Assurance Engineers
              </option>
              <option value="Project Managers">Project Managers</option>
              <option value="Business Analysts">Business Analysts</option>
              <option value="Software Architects">Software Architects</option>
              <option value="UI/UX Designers">UI/UX Designers</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-8 px-3 text-sm"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={uploading}
              className="h-8 px-3 text-sm"
            >
              {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {employee ? "Update" : "Add"} Employee
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeForm;
