import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Zap, Share2, Clock, Download } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "100% Free",
      description: "Create and share your digital business card without any cost"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Quick Setup",
      description: "Set up your professional business card in minutes"
    },
    {
      icon: <Share2 className="w-8 h-8 text-indigo-500" />,
      title: "Easy to Share",
      description: "Share your card via QR code, social media, or download options"
    },
    {
      icon: <Download className="w-8 h-8 text-blue-600" />,
      title: "Multiple Formats",
      description: "Export as image, PDF, or vCard for maximum compatibility"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-up">
      <div className="flex items-center gap-4 mb-8">
        <img src="/lovable-uploads/f873f54b-825d-46a4-b37c-ea503e9047ef.png" alt="bizel.link" className="w-24 h-24" />
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          bizel.link
        </h1>
      </div>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-12">
        Create Your Professional Digital Business Card in Minutes
      </p>
      <Button
        onClick={() => navigate("/editor")}
        className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-8 py-6 rounded-lg text-lg hover:opacity-90 transition-all mb-16"
      >
        Create Business Card
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {features.map((feature, index) => (
          <Card key={index} className="glass-card p-6 text-center">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}