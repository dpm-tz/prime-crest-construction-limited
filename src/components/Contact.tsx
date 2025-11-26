import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "Mbeya, Tanzania",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+255 XXX XXX XXX",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@primecrest.co.tz",
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-none">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-4">
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                <p className="text-muted-foreground">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto border-none shadow-lg">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input placeholder="Your name" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" className="h-12" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone
                </label>
                <Input type="tel" placeholder="+255 XXX XXX XXX" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
