import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import vCard from "vcf";
import { QRCodeSVG } from "qrcode.react";
import BusinessCard from "./BusinessCard";
import { toast } from "sonner";
import { Download, Share2 } from "lucide-react";

export default function CardEditor() {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const exportAsImage = async () => {
    try {
      const cardElement = document.getElementById("business-card");
      if (!cardElement) return;
      const imageData = await toPng(cardElement);
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "business-card.png";
      link.click();
      toast.success("Business card exported as image!");
    } catch (error) {
      toast.error("Failed to export image");
    }
  };

  const exportAsVCard = () => {
    try {
      const card = new vCard();
      card.add("fn", formData.name);
      card.add("title", formData.title);
      card.add("email", formData.email);
      card.add("tel", formData.phone);
      card.add("url", formData.website);
      card.add("org", formData.company);
      card.add("adr", formData.address);
      
      const vcfData = card.toString();
      const blob = new Blob([vcfData], { type: "text/vcard" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "business-card.vcf";
      link.click();
      toast.success("Contact card exported!");
    } catch (error) {
      toast.error("Failed to export contact card");
    }
  };

  const exportAsPDF = async () => {
    try {
      const cardElement = document.getElementById("business-card");
      if (!cardElement) return;
      const imageData = await toPng(cardElement);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [500, 300],
      });
      pdf.addImage(imageData, "PNG", 0, 0, 500, 300);
      pdf.save("business-card.pdf");
      toast.success("Business card exported as PDF!");
    } catch (error) {
      toast.error("Failed to export PDF");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Your Card</h2>
            <div className="grid gap-4">
              {Object.keys(formData).map((field) => (
                <div key={field}>
                  <Label htmlFor={field} className="capitalize text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </Label>
                  <Input
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full mt-1"
                    placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").trim().toLowerCase()}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Export Options</h3>
            <div className="flex flex-wrap gap-3">
              <Button onClick={exportAsImage} className="flex items-center gap-2">
                <Download size={16} /> Export as Image
              </Button>
              <Button onClick={exportAsPDF} variant="secondary" className="flex items-center gap-2">
                <Download size={16} /> Export as PDF
              </Button>
              <Button onClick={exportAsVCard} variant="outline" className="flex items-center gap-2">
                <Share2 size={16} /> Export Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 space-y-6">
          <div id="business-card" className="w-full">
            <BusinessCard {...formData} />
          </div>
          
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
        </div>
      </div>
    </div>
  );
}