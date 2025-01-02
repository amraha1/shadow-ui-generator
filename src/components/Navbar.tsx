import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="font-bold text-xl text-wookies-text">WOOKIES</div>
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-wookies-text hover:opacity-70">Home</a>
          <a href="#" className="text-wookies-text hover:opacity-70">Our Work</a>
          <a href="#" className="text-wookies-text hover:opacity-70">Project</a>
          <a href="#" className="text-wookies-text hover:opacity-70">Service</a>
          <a href="#" className="text-wookies-text hover:opacity-70">About Us</a>
        </div>
      </div>
      <Button variant="outline" className="flex items-center gap-2">
        <span>Let's Talk</span>
        <Mail className="h-4 w-4" />
      </Button>
    </nav>
  );
};

export default Navbar;