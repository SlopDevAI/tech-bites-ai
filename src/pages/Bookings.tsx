import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Calendar, Home, Heart, Menu, Building, ChevronLeft, ChevronRight } from "lucide-react";

// Import food images for catering carousel
import signatureFish from "@/assets/signature-fish.jpg";
import wagyuSteak from "@/assets/wagyu-steak.jpg";
import dessertSelection from "@/assets/dessert-selection.jpg";
import tokyoDish from "@/assets/tokyo-dish.jpg";

// Import holiday home images for carousel
import restaurantExterior from "@/assets/restaurant-exterior.jpg";
import seasideView from "@/assets/seaside-view.jpg";
import diningInterior from "@/assets/dining-interior.jpg";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  carouselImages?: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Catering Service",
    description: "Like the look of our food? Order a Catering Service and get any amount of any food you want for any occasion!",
    image: "/src/assets/catering-service.jpg",
    icon: ChefHat,
    features: ["Tech-enhanced cooking", "Any quantity", "Perfect for events", "Fresh ingredients"],
    carouselImages: [signatureFish, wagyuSteak, dessertSelection, tokyoDish]
  },
  {
    id: 2,
    title: "Personal Chef Experience",
    description: "Don't like what food we offer? Have a recipe you want perfecting with a slice of tech? Hire our chefs and experience their expertise first-hand!",
    image: "/src/assets/personal-chef.jpg",
    icon: ChefHat,
    features: ["Expert chefs", "Custom recipes", "Tech-enhanced cooking", "Personalized service"]
  },
  {
    id: 3,
    title: "Private Venue Rental",
    description: "Want a night you and your friends/coworkers/family will never forget? Book one of our lounges or even the entire restaurant and cross off an amazing experience from your bucket list.",
    image: "/src/assets/private-venue.jpg",
    icon: Building,
    features: ["Entire restaurant", "Private lounges", "Immersive tech", "Unforgettable experience"]
  },
  {
    id: 4,
    title: "Wedding Packages",
    description: "Getting married? Let us know and we'll give you the happiest day of your life in the freshest, never seen before, style!",
    image: "/src/assets/wedding-setup.jpg",
    icon: Heart,
    features: ["Wedding specialists", "Unique tech elements", "Custom packages", "Dream venue"]
  },
  {
    id: 5,
    title: "Interactive Menu Systems",
    description: "Like our menus? Have them for your own establishment! Commission a custom interactive menu today!",
    image: "/src/assets/menu-system.jpg",
    icon: Menu,
    features: ["Custom interactive menus", "For your business", "Tech integration", "Modern design"]
  },
  {
    id: 6,
    title: "Holiday Home Experience",
    description: "Want the best of the best holiday home? Simply book your stay and live the best life with the best Malta has to offer!",
    image: "/src/assets/holiday-home.jpg",
    icon: Home,
    features: ["Luxury accommodation", "Malta experience", "Tech amenities", "Prime location"],
    carouselImages: [restaurantExterior, seasideView, diningInterior]
  }
];

const Bookings = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const generateBookingCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    alert(`Thank you for expressing your interest in working with us! Please contact us using the Contact Form and provide us with this unique code:\n\n${result}`);
  };

  const nextImage = () => {
    if (selectedService?.carouselImages) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.carouselImages!.length);
    }
  };

  const prevImage = () => {
    if (selectedService?.carouselImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedService.carouselImages!.length - 1 : prev - 1
      );
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
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
                           onClick={() => handleServiceSelect(service)}
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
                          {selectedService?.carouselImages ? (
                            <div className="relative">
                              <div className="overflow-hidden rounded-lg">
                                <img
                                  src={selectedService.carouselImages[currentImageIndex]}
                                  alt={`${selectedService.title} ${currentImageIndex + 1}`}
                                  className="w-full h-64 object-cover transition-all duration-500 ease-in-out transform"
                                  style={{ 
                                    transform: `translateX(0%)`,
                                  }}
                                />
                              </div>
                              
                              {selectedService.carouselImages.length > 1 && (
                                <>
                                  <Button
                                    variant="secondary"
                                    size="icon"
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                                    onClick={prevImage}
                                  >
                                    <ChevronLeft className="h-4 w-4" />
                                  </Button>
                                  
                                  <Button
                                    variant="secondary"
                                    size="icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                                    onClick={nextImage}
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                  
                                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {selectedService.carouselImages.map((_, index) => (
                                      <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                          index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                                        }`}
                                        onClick={() => setCurrentImageIndex(index)}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          ) : (
                            <img
                              src={selectedService?.image}
                              alt={selectedService?.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          )}
                          <p className="text-muted-foreground leading-relaxed">
                            {selectedService?.description}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-2">Features:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {selectedService?.features.map((feature, index) => (
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
