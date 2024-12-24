import { Card } from "@/components/ui/card";

interface BusinessCardProps {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  tagline: string;
  linkedin: string;
  twitter: string;
}

export default function BusinessCard({
  name = "Your Name",
  title = "Your Title",
  company = "Company Name",
  email = "email@example.com",
  phone = "+1 (555) 000-0000",
  website = "website.com",
  address = "",
  tagline = "",
  linkedin = "",
  twitter = ""
}: BusinessCardProps) {
  return (
    <Card className="glass-card w-full aspect-video p-8 flex flex-col justify-between transform transition-all hover:scale-105">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {name}
        </h2>
        <p className="text-gray-600 font-medium">{title}</p>
        <p className="text-indigo-600 font-semibold">{company}</p>
        {tagline && <p className="text-sm text-gray-500 italic">{tagline}</p>}
      </div>
      
      <div className="space-y-1 text-sm">
        {email && <p className="text-gray-600">{email}</p>}
        {phone && <p className="text-gray-600">{phone}</p>}
        {website && <p className="text-gray-600">{website}</p>}
        {address && <p className="text-gray-600">{address}</p>}
        <div className="flex gap-2 text-gray-500">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">LinkedIn</a>}
          {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">Twitter</a>}
        </div>
      </div>
    </Card>
  );
}