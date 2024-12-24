import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
        Create Your Digital Business Card
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
        Design and share your professional identity with our modern business card generator. Stand out from the crowd with customizable templates.
      </p>
      <Button
        onClick={() => navigate("/editor")}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-6 rounded-lg text-lg hover:opacity-90 transition-all"
      >
        Create Business Card
      </Button>
    </div>
  );
}