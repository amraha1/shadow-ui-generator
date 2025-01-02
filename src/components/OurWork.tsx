import { Button } from "./ui/button";
import { Card } from "./ui/card";

const OurWork = () => {
  const caseStudies = [
    {
      tag: "SEO Optimization",
      title: "TechCorp's Traffic Soars With SEO Optimization",
      description:
        "Boosted organic traffic by 50% for TechCorp through carefully targeted keyword strategies and comprehensive on-page optimization, driving significant growth in search engine visibility.",
      stat: "+50%",
      statLabel: "Organic traffic",
      image: "/img1.jpg",
      imagePosition: "right",
    },
    {
      tag: "Social Media Management",
      title: "FashionWave's Engagement Soars With Creative Campaigns",
      description:
        "Increased follower engagement for FashionWave by 75% through the implementation of creative content strategies and interactive social media campaigns, significantly enhancing brand interaction and customer connection across all platforms.",
      stat: "+75%",
      statLabel: "Follower engagement",
      image: "/img2.jpg",
      imagePosition: "left",
    },
    {
      tag: "Brand Strategy",
      title: "UrbanNest's Brand Revamp Boosts Recognition",
      description:
        "Revamped UrbanNest's brand identity, leading to a 60% increase in customer recognition and loyalty. The refreshed image strengthened market presence and deepened connections with the target audience.",
      stat: "+50%",
      statLabel: "Growth in customer",
      image: "/img3.jpg",
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-5xl font-normal mb-4 text-wookies-text">Our Work</h2>
            <p className="text-gray-600 max-w-xl">
              Our work combines creativity and data-driven strategies to deliver
              impactful digital marketing campaigns that drive growth.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            Show More
            <span className="text-xl">→</span>
          </Button>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-8 md:p-12 border-none shadow-none bg-transparent"
            >
              <div
                className={`flex flex-col ${
                  study.imagePosition === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-white text-sm text-wookies-text border border-gray-200">
                    {study.tag}
                  </span>
                  <h3 className="text-3xl font-normal text-wookies-text">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg z-10">
                    <div className="font-medium text-2xl text-wookies-text">
                      {study.stat}
                    </div>
                    <div className="text-sm text-gray-500">{study.statLabel}</div>
                  </div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          className="md:hidden w-full mt-12 flex items-center justify-center gap-2"
        >
          Show More
          <span className="text-xl">→</span>
        </Button>
      </div>
    </section>
  );
};

export default OurWork;