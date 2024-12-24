import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-up">
      <div className="flex items-center gap-4 mb-8">
        <img src="/lovable-uploads/f873f54b-825d-46a4-b37c-ea503e9047ef.png" alt="bizel.link" className="w-24 h-24" />
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          bizel.link
        </h1>
      </div>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
        Create Your Digital Business Card
      </p>
      <Button
        onClick={() => navigate("/editor")}
        className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-8 py-6 rounded-lg text-lg hover:opacity-90 transition-all"
      >
        Create Business Card
      </Button>
    </div>
  );
}