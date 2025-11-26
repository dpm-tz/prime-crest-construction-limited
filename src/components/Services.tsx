import { Building2, HardHat, Leaf, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import residentialImage from "@/assets/residential-construction.jpg";
import infrastructureImage from "@/assets/infrastructure-construction.jpg";
import commercialImage from "@/assets/commercial-construction.jpg";

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    description: "Construction, renovation, and maintenance of residential, commercial, industrial, and institutional buildings.",
    image: residentialImage,
  },
  {
    icon: HardHat,
    title: "Infrastructure Development",
    description: "Roads, bridges, water supply systems, drainage, dams, and other civil engineering projects.",
    image: infrastructureImage,
  },
  {
    icon: Hammer,
    title: "Commercial Projects",
    description: "Design, planning, and execution of large-scale commercial and industrial developments.",
    image: commercialImage,
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Eco-friendly building practices incorporating renewable energy and climate resilience.",
    image: residentialImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction and engineering solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-none"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
