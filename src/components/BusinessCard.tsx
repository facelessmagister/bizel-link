import { Card } from "@/components/ui/card";
import { Twitter, Linkedin, MessageCircle, Send, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BusinessCardProps {
  profilePic: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  twitter?: string;
  linkedin?: string;
  telegram?: string;
  whatsapp?: string;
  tiktok?: string;
}

export default function BusinessCard({
  profilePic,
  name,
  title,
  company,
  email,
  phone,
  twitter,
  linkedin,
  telegram,
  whatsapp,
  tiktok,
}: BusinessCardProps) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    title,
    company,
    email,
    phone,
    twitter,
    linkedin,
    telegram,
    whatsapp,
    tiktok,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="absolute top-4 right-4"
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Card className="w-full max-w-md mx-auto p-6">
        <div className="flex items-center">
          <img src={profilePic} alt={name} className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{formData.name}</h2>
            <p className="text-sm text-gray-600">{formData.title}</p>
            <p className="text-sm text-gray-600">{formData.company}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">Email: {formData.email}</p>
          <p className="text-sm">Phone: {formData.phone}</p>
          {formData.twitter && <p className="text-sm">Twitter: {formData.twitter}</p>}
          {formData.linkedin && <p className="text-sm">LinkedIn: {formData.linkedin}</p>}
          {formData.telegram && <p className="text-sm">Telegram: {formData.telegram}</p>}
          {formData.whatsapp && <p className="text-sm">WhatsApp: {formData.whatsapp}</p>}
          {formData.tiktok && <p className="text-sm">TikTok: {formData.tiktok}</p>}
        </div>
        <div className="mt-4">
          <Button onClick={handleEdit}>Edit</Button>
          {isEditing && <Button onClick={handleSave}>Save</Button>}
        </div>
      </Card>
    </div>
  );
}
