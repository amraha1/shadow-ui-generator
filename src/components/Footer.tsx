import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#004225] text-white">
      {/* CTA Section */}
      <div className="bg-white rounded-lg mx-4 md:mx-8 -mt-20 mb-20 p-8 md:p-12 relative z-10 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-wookies-text">
            Ready To Launch Your Digital Marketing Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to launch your digital marketing project? Let us craft strategies
            that drive results and growth.
          </p>
          <Button className="bg-[#004225] hover:bg-[#003820] text-white gap-2">
            <Mail className="h-4 w-4" /> Let's Talk
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/fc8f3d7b-cdbb-4395-8cba-1f01f0e59ebd.png" alt="Wookies Logo" className="h-8" />
              <span className="text-xl font-semibold">WOOKIES</span>
            </div>
            <p className="text-sm text-gray-300">
              Specializes in innovative digital marketing strategies, blending
              creativity and data-driven insights to elevate your brand's online
              presence and drive measurable growth.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-medium mb-4">MENU</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>Service</li>
              <li>Our Work</li>
              <li>Project</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web & App Development</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing</li>
              <li>SEO</li>
              <li>Creative & Content</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-medium mb-4">SOCIAL MEDIA</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© 2024WOOKIES. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;