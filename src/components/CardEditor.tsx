import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BusinessCard from "./BusinessCard";

export default function CardEditor() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Edit Your Card</h2>
          <div className="space-y-4">
            {Object.keys(formData).map((field) => (
              <div key={field}>
                <Label htmlFor={field} className="capitalize">
                  {field}
                </Label>
                <Input
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full"
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BusinessCard {...formData} />
        </div>
      </div>
    </div>
  );
}