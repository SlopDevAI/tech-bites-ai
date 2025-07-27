import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Calendar, Home, Heart, Menu, Building } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Catering Service",
    description: "Like the look of our food? Order a Catering Service and get any amount of any food you want for any occasion!",
    image: "/src/assets/signature-fish.jpg",
    icon: ChefHat,
    features: ["Tech-enhanced cooking", "Any quantity", "Perfect for events", "Fresh ingredients"]
  },
  {
    id: 2,
    title: "Personal Chef Experience",
    description: "Don't like what food we offer? Have a recipe you want perfecting with a slice of tech? Hire our chefs and experience their expertise first-hand!",
    image: "/src/assets/chef-cooking.jpg",
    icon: ChefHat,
    features: ["Expert chefs", "Custom recipes", "Tech-enhanced cooking", "Personalized service"]
  },
  {
    id: 3,
    title: "Private Venue Rental",
    description: "Want a night you and your friends/coworkers/family will never forget? Book one of our lounges or even the entire restaurant and cross off an amazing experience from your bucket list.",
    image: "/src/assets/seaside-view.jpg",
    icon: Building,
    features: ["Entire restaurant", "Private lounges", "Immersive tech", "Unforgettable experience"]
  },
  {
    id: 4,
    title: "Wedding Packages",
    description: "Getting married? Let us know and we'll give you the happiest day of your life in the freshest, never seen before, style!",
    image: "/src/assets/events-space.jpg",
    icon: Heart,
    features: ["Wedding specialists", "Unique tech elements", "Custom packages", "Dream venue"]
  },
  {
    id: 5,
    title: "Interactive Menu Systems",
    description: "Like our menus? Have them for your own establishment! Commission a custom interactive menu today!",
    image: "/src/assets/digital-menu.jpg",
    icon: Menu,
    features: ["Custom interactive menus", "For your business", "Tech integration", "Modern design"]
  },
  {
    id: 6,
    title: "Holiday Home Experience",
    description: "Want the best of the best holiday home? Simply book your stay and live the best life with the best Malta has to offer!",
    image: "/src/assets/restaurant-exterior.jpg",
    icon: Home,
    features: ["Luxury accommodation", "Malta experience", "Tech amenities", "Prime location"]
  }
];

const Bookings = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const generateBookingCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    alert(`Thank you for expressing your interest in working with us! Please contact us using the Contact Form and provide us with this unique code:\n\n${result}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            What can we do for you?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of tech-enhanced services designed to create unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group hover:card-shadow smooth-transition overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary smooth-transition">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedService(service)}
                        >
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-primary">
                            {service.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-2">Features:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Button 
                            onClick={generateBookingCode} 
                            className="w-full tech-gradient text-white hover:opacity-90"
                          >
                            Book This Service
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      onClick={generateBookingCode}
                      size="sm"
                      className="flex-1 tech-gradient text-white hover:opacity-90"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Ready to Book?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Click any "Book Now" button to generate your unique booking code and start your tech-dining journey with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
