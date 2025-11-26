import { Award, Users, Target } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "50+" },
];

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience and expertise.",
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description: "We're committed to completing projects within agreed timelines.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Prime Crest Construction
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Based in Mbeya, Tanzania, Prime Crest Construction Limited is a leading building 
              and civil engineering contractor dedicated to delivering innovative, sustainable 
              infrastructure solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We specialize in the construction, renovation, and maintenance of residential, 
              commercial, industrial, and institutional buildings, as well as comprehensive 
              infrastructure development projects.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to safety, quality, sustainability, and innovation drives us to 
              exceed expectations on every project, building lasting relationships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-primary text-white p-8 rounded-lg text-center hover:bg-primary/90 transition-colors"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
