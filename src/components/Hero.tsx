import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 pt-12 pb-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl text-wookies-text mb-4">WOOKIES</h2>
        <h1 className="text-5xl md:text-7xl font-normal text-wookies-text mb-6">
          DIGITAL MARKETING AGENCY
        </h1>
        <p className="text-wookies-text/80 max-w-3xl mx-auto mb-8">
          Digital agency crafting impactful, user-centric experiences with cutting-edge design and technology
          for maximum success. Innovative digital agency crafting impactful
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-primary text-white hover:bg-primary/90 px-6">
            Get In Touch
          </Button>
          <Button variant="outline" className="border-2">
            Learn More
          </Button>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="/office_meeting2.jpg"
          alt="Digital Marketing Team"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-8 left-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              W
            </div>
            <div>
              <div className="text-sm opacity-80">BOOST</div>
              <div className="font-medium">YOUR BRAND</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;