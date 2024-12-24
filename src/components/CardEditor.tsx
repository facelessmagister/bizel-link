import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import BusinessCard from "./BusinessCard";
import { Download, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { exportAsImage, exportAsVCard, exportAsPDF } from "./ExportUtils";

export default function CardEditor() {
  const [currentSide, setCurrentSide] = useState(0);
  const [formData, setFormData] = useState({
    profilePic: "",
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    tagline: "",
    linkedin: "",
    twitter: "",
    whatsapp: "",
    telegram: "",
    tiktok: "",
    specialties: "",
    services: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePic: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const formFields = {
    side1: ["profilePic", "name", "title", "tagline", "company", "email", "phone"],
    side2: ["website", "address", "linkedin", "twitter", "whatsapp", "telegram", "tiktok"],
    side3: ["specialties", "services"]
  };

  const currentFields = [formFields.side1, formFields.side2, formFields.side3][currentSide];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <a href="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/f873f54b-825d-46a4-b37c-ea503e9047ef.png" alt="bizel.link" className="w-12 h-12" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            bizel.link
          </span>
        </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Side {currentSide + 1}</h2>
              <div className="flex gap-2">
                <Button
                  onClick={() => setCurrentSide(prev => Math.max(0, prev - 1))}
                  disabled={currentSide === 0}
                  variant="outline"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setCurrentSide(prev => Math.min(2, prev + 1))}
                  disabled={currentSide === 2}
                  variant="outline"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {currentFields.map((field) => (
                <div key={field}>
                  <Label htmlFor={field} className="capitalize text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </Label>
                  {field === "profilePic" ? (
                    <Input
                      id={field}
                      name={field}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full mt-1"
                    />
                  ) : field === "specialties" || field === "services" ? (
                    <Textarea
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full mt-1"
                      placeholder={`Enter your ${field.toLowerCase()}`}
                      rows={4}
                    />
                  ) : (
                    <Input
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full mt-1"
                      placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").trim().toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Export Options</h3>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => exportAsImage({ formData, setCurrentSide })} 
                className="flex items-center gap-2"
              >
                <Download size={16} /> Export as Image
              </Button>
              <Button 
                onClick={() => exportAsPDF({ formData, setCurrentSide })} 
                variant="secondary" 
                className="flex items-center gap-2"
              >
                <Download size={16} /> Export as PDF
              </Button>
              <Button 
                onClick={() => exportAsVCard(formData)} 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Share2 size={16} /> Export Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 space-y-6">
          <div id="business-card" className="w-full">
            <BusinessCard {...formData} currentSide={currentSide} />
          </div>
          
          {currentSide === 1 && (
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">QR Code</h3>
              <div className="flex justify-center bg-white p-4 rounded-lg">
                <QRCodeSVG
                  value={`BEGIN:VCARD\nVERSION:3.0\nFN:${formData.name}\nTITLE:${formData.title}\nORG:${formData.company}\nTEL:${formData.phone}\nEMAIL:${formData.email}\nURL:${formData.website}\nEND:VCARD`}
                  size={200}
                  level="H"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}