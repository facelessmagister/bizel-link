import { Card } from "@/components/ui/card";

interface BusinessCardProps {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
}

export default function BusinessCard({
  name = "Your Name",
  title = "Your Title",
  company = "Company Name",
  email = "email@example.com",
  phone = "+1 (555) 000-0000",
  website = "website.com"
}: BusinessCardProps) {
  return (
    <Card className="glass-card w-96 h-56 p-6 flex flex-col justify-between transform transition-all hover:scale-105">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="text-indigo-600 font-medium">{company}</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-sm text-gray-600">{phone}</p>
        <p className="text-sm text-gray-600">{website}</p>
      </div>
    </Card>
  );
}