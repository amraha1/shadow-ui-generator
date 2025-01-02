import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4 text-wookies-text">
          What Client Says
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our clients' feedback speaks volumes. Discover their stories of success, collaboration,
          and the impactful results we've delivered together.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/lovable-uploads/dca70a88-a3c7-49b2-ba42-f866da737d43.png" />
                <AvatarFallback>RF</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-wookies-text">Robert Fox</h4>
                <p className="text-gray-600 text-sm">Ceo Of UrbanNest's</p>
              </div>
            </div>
            <p className="text-gray-600">
              The digital marketing team transformed our online presence,
              delivering exceptional results with their SEO and targeted ads.
              Highly recommend their professional approach
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/lovable-uploads/dca70a88-a3c7-49b2-ba42-f866da737d43.png" />
                <AvatarFallback>LA</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-wookies-text">Leslie Alexander</h4>
                <p className="text-gray-600 text-sm">Manager FashionWave's</p>
              </div>
            </div>
            <p className="text-gray-600">
              We've seen incredible growth thanks to their tailored digital
              marketing strategies. The team's expertise in SEO and social media
              has been invaluable.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-600">04/20</span>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;