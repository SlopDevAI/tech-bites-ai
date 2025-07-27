import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChefHat, Utensils, Smartphone } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Logo Image */}
            <div className="mb-8">
              <img 
                src="/original/img/LandingPageLogo.png" 
                alt="TechBites Landing Logo"
                className="max-w-full h-auto mx-auto max-h-96 glow-effect"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              Welcome to TechBites!
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Welcome to TechBites, the restaurant that brings together the best of technology and fine dining. 
                Located in the beautiful Ghadira area of Malta, TechBites is the perfect destination for those 
                seeking a unique and unforgettable dining experience.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Our restaurant boasts an array of high-powered technology, from interactive menus to immersive 
                audiovisual displays, all designed to enhance your dining experience. Our aim is to provide a 
                one-of-a-kind experience that combines cutting-edge technology with exceptional cuisine.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                At TechBites, we believe that technology can enhance every aspect of the dining experience, 
                from the way you order your food to the way it is presented to you. Come and join us at TechBites, 
                where technology meets gastronomy, and let us take you on a journey of culinary discovery like no other.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button asChild size="lg" className="bg-white text-primary-dark hover:bg-white/90 font-semibold px-8 py-3">
                <Link to="/menu">
                  View Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark font-semibold px-8 py-3">
                <Link to="/bookings">
                  Book Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Technology Meets Gastronomy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of dining with our cutting-edge technology and exceptional cuisine
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:card-shadow smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Interactive Menus</h3>
                <p className="text-muted-foreground">
                  Browse our offerings and customize your dining experience with our state-of-the-art interactive menu system.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:card-shadow smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <ChefHat className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Expert Chefs</h3>
                <p className="text-muted-foreground">
                  Our experienced chefs use only the freshest and highest quality ingredients, enhanced by precision cooking technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:card-shadow smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Immersive Experience</h3>
                <p className="text-muted-foreground">
                  Immersive audiovisual displays transport you to a whole new world of sensory delight during your meal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;