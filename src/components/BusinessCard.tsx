import { Card } from "@/components/ui/card";

interface BusinessCardProps {
  profilePic: string;
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
  whatsapp: string;
  telegram: string;
  tiktok: string;
  specialties: string;
  services: string;
  currentSide: number;
}

export default function BusinessCard({
  profilePic = "",
  name = "Your Name",
  title = "Your Title",
  company = "Company Name",
  email = "email@example.com",
  phone = "+1 (555) 000-0000",
  website = "website.com",
  address = "",
  tagline = "",
  linkedin = "",
  twitter = "",
  whatsapp = "",
  telegram = "",
  tiktok = "",
  specialties = "",
  services = "",
  currentSide = 0
}: BusinessCardProps) {
  const renderSide1 = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {profilePic && (
          <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
        )}
        <div className="flex-1">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {name}
          </h2>
          <p className="text-gray-600 font-medium">{title}</p>
          <p className="text-indigo-600 font-semibold">{company}</p>
        </div>
      </div>
      {tagline && <p className="text-sm text-gray-500 italic">{tagline}</p>}
      <div className="space-y-1 text-sm">
        {email && <p className="text-gray-600">{email}</p>}
        {phone && <p className="text-gray-600">{phone}</p>}
      </div>
    </div>
  );

  const renderSide2 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {website && <p className="text-gray-600 text-sm">🌐 {website}</p>}
          {address && <p className="text-gray-600 text-sm">📍 {address}</p>}
          {linkedin && <p className="text-gray-600 text-sm">💼 {linkedin}</p>}
          {twitter && <p className="text-gray-600 text-sm">🐦 {twitter}</p>}
        </div>
        <div className="space-y-2">
          {whatsapp && <p className="text-gray-600 text-sm">📱 {whatsapp}</p>}
          {telegram && <p className="text-gray-600 text-sm">📬 {telegram}</p>}
          {tiktok && <p className="text-gray-600 text-sm">🎵 {tiktok}</p>}
        </div>
      </div>
    </div>
  );

  const renderSide3 = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-indigo-600 mb-2">Specialties & Interests</h3>
        <p className="text-gray-600 text-sm whitespace-pre-line">{specialties}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-600 mb-2">Products & Services</h3>
        <p className="text-gray-600 text-sm whitespace-pre-line">{services}</p>
      </div>
    </div>
  );

  const sides = [renderSide1, renderSide2, renderSide3];

  return (
    <Card className="glass-card w-full aspect-video p-8 flex flex-col justify-between transform transition-all hover:scale-105">
      {sides[currentSide]()}
    </Card>
  );
}