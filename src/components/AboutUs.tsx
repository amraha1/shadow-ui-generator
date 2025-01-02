import { Card } from "@/components/ui/card";
import { BarChart } from "lucide-react";

const stats = [
  { label: "Client Retention", value: 90 },
  { label: "Budget Growth", value: 56 },
  { label: "ROI", value: 82 },
  { label: "Service Demand", value: 79 },
  { label: "Agency Growth", value: 65 },
];

const AboutUs = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-5xl font-normal text-wookies-text mb-8">About us</h2>
          <div className="grid grid-cols-5 gap-4 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="h-40 bg-wookies-cream relative w-full">
                  <div
                    className="absolute bottom-0 w-full bg-wookies-beige transition-all duration-1000"
                    style={{ height: `${stat.value}%` }}
                  />
                </div>
                <p className="text-sm mt-2 text-center text-wookies-text">{stat.label}</p>
                <p className="text-sm font-medium text-wookies-text">
                  {stat.value}% <span className="text-gray-400">/ 100%</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-wookies-text">
            At WOOKIES, we specialize in innovative digital marketing strategies that drive results. Our team is dedicated to helping businesses grow and succeed online.
          </p>
          <p className="text-lg text-wookies-text">
            With tailored solutions and a focus on measurable outcomes, we empower brands to connect with their audience and achieve their goals in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;