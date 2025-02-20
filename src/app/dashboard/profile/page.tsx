"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateProfile } from "@/lib/store/authSlice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Mail,
  Building2,
  Phone,
  MapPin,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    phone: user?.phone || "",
    location: user?.location || "",
    department: user?.department || "",
    position: user?.position || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    toast.success("Profile updated successfully");

    // Clear the form fields after submission
    setFormData({
      phone: "",
      location: "",
      department: "",
      position: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            Profile Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and profile information
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Personal Information Card */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader className="bg-gray-50 dark:bg-gray-800">
              <CardTitle className="flex items-center gap-2 text-xl">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gray-900 text-xl text-white">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{user?.name || "User"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {user?.position || "Position not set"}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Email</Label>
                    <p className="text-sm text-muted-foreground">
                      {user?.email || "Email not set"}
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    Verified
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Phone</Label>
                    <p className="text-sm text-muted-foreground">
                      {user?.phone || "Not set"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Location</Label>
                    <p className="text-sm text-muted-foreground">
                      {user?.location || "Not set"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Department</Label>
                    <p className="text-sm text-muted-foreground">
                      {user?.department || "Not set"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Update Profile Card */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader className="bg-gray-50 dark:bg-gray-800">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Building2 className="h-5 w-5" />
                Update Profile
              </CardTitle>
              <CardDescription>
                Update your professional details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="position"
                    className="flex items-center gap-2 text-sm"
                  >
                    <Briefcase className="h-4 w-4" />
                    Position
                  </Label>
                  <Input
                    id="position"
                    placeholder="Enter your position"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    className="flex items-center gap-2 text-sm"
                  >
                    <MapPin className="h-4 w-4" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="department"
                    className="flex items-center gap-2 text-sm"
                  >
                    <Building2 className="h-4 w-4" />
                    Department
                  </Label>
                  <Input
                    id="department"
                    placeholder="Enter your department"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
