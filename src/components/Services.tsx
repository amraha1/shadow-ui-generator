import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Square } from "lucide-react";

const services = [
  {
    title: "Web & App Development",
    description: "We develop digital assets, such as website, microsite and mobile apps, for your business",
  },
  {
    title: "Social Media Marketing",
    description: "We help you to promote your brand on Facebook, Twitter, Instagram with best social strategies",
  },
  {
    title: "Email Marketing",
    description: "we help you to build your lists and send them newsletter regularly or simply an email blast",
  },
  {
    title: "Search Engine Marketing",
    description: "We are officially partnering with Google to help your website appears on top within minutes",
  },
  {
    title: "Creative & Content",
    description: "We think out of the box to create contents that matter to your audience & business growth",
  },
  {
    title: "Digital Advertising & PPC",
    description: "We make your digital media buying and PPC easier by partnering with a lot of major publishers",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-primary rounded-3xl max-w-7xl mx-auto my-16">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-normal text-white mb-4">Our Service</h2>
          <p className="text-gray-300">
            Our digital marketing service boosts your online presence with SEO, social media, and targeted ads.
          </p>
        </div>
        <Button variant="outline" className="text-white border-white hover:bg-white/10">
          Schedule Discussion
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="bg-primary/50 border-none p-6 space-y-4">
            <Square className="text-wookies-cream h-8 w-8" />
            <h3 className="text-xl font-medium text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
            <p className="text-wookies-cream cursor-pointer hover:underline">
              Whats is included in service?
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule Discussion
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;