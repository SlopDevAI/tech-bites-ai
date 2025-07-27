import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Appetizers
  {
    name: "Truffle Parmesan Fries",
    description: "Crispy fries tossed in truffle oil and parmesan cheese served with garlic aioli, and prepared using state-of-the-art air-fryer technology.",
    price: "€7",
    category: "Appetizers"
  },
  {
    name: "Shrimp Ceviche",
    description: "Fresh shrimp marinated in lime juice, red onion, cilantro, and jalapeño, served with tortilla chips and prepared using molecular gastronomy techniques.",
    price: "€11",
    category: "Appetizers"
  },
  {
    name: "Crispy Pork Belly Bites",
    description: "Slow-cooked pork belly bites with a crispy exterior, served with a sweet and spicy glaze and cooked to perfection using sous vide technology.",
    price: "€9",
    category: "Appetizers"
  },
  // Salads
  {
    name: "Caesar Salad",
    description: "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan cheese, and served with a side of focaccia bread baked using a high-tech bread oven.",
    price: "€7",
    category: "Salads"
  },
  {
    name: "Beet and Goat Cheese Salad",
    description: "Mixed greens, roasted beets, candied pecans, and goat cheese, dressed with a balsamic vinaigrette and prepared using hydroponics farming techniques.",
    price: "€11",
    category: "Salads"
  },
  {
    name: "Asian Ginger Salad",
    description: "Mixed greens, carrots, red pepper, and cucumbers, topped with crispy wontons and a ginger soy dressing, and prepared using vertical farming technology.",
    price: "€9",
    category: "Salads"
  },
  // Entrees
  {
    name: "Pan-Seared Salmon",
    description: "Fresh salmon fillet served with a lemon butter sauce, roasted vegetables, and garlic mashed potatoes, and cooked to perfection using precision cooking technology.",
    price: "€20",
    category: "Entrees"
  },
  {
    name: "Grilled Wagyu Steak",
    description: "12 oz Wagyu A5 steak grilled and basted to perfection, served with sautéed mushrooms and onions, garlic mashed potatoes, and a red wine reduction, and cooked using high-tech laser grills.",
    price: "€115 or €25 for Ribeye Instead",
    category: "Entrees"
  },
  {
    name: "Vegetable Pad Thai",
    description: "Rice noodles stir-fried with mixed vegetables, eggs, and a sweet and sour tamarind sauce, topped with peanuts and cilantro, and prepared using robotic cooking technology.",
    price: "€15",
    category: "Entrees"
  },
  // Desserts
  {
    name: "Crème Brûlée",
    description: "Classic French dessert with a caramelized sugar top and a creamy vanilla custard base, and prepared using modern molecular gastronomy techniques.",
    price: "€7",
    category: "Desserts"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream and prepared using cutting-edge 3D food printing technology.",
    price: "€9",
    category: "Desserts"
  },
  {
    name: "Assorted Cheesecake",
    description: "A variety of cheesecake flavors, served with whipped cream and fresh berries, and prepared using advanced pastry-making techniques.",
    price: "€11",
    category: "Desserts"
  },
  // Drinks
  {
    name: "Soda",
    description: "Coke, Diet Coke, Sprite, Ginger Ale.",
    price: "€3",
    category: "Drinks"
  },
  {
    name: "Lemonade",
    description: "Fresh squeezed lemonade with a hint of mint, and served in a high-tech self-chilling glass.",
    price: "€4",
    category: "Drinks"
  },
  {
    name: "Iced Tea",
    description: "Choice of sweetened or unsweetened, and served using robotic beverage dispensing technology.",
    price: "€3",
    category: "Drinks"
  },
  {
    name: "Beer",
    description: "Assorted local and imported beers, served at the perfect temperature using a high-tech beer dispensing system.",
    price: "Prices vary",
    category: "Drinks"
  },
  {
    name: "Wine",
    description: "Assorted red, white, and sparkling wines, served at the perfect temperature using an advanced wine preservation system.",
    price: "Prices vary",
    category: "Drinks"
  }
];

const categories = ["Appetizers", "Salads", "Entrees", "Desserts", "Drinks"];

const Menu = () => {
  const getItemsByCategory = (category: string) => {
    return menuItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our tech-enhanced culinary creations, where traditional flavors meet modern innovation
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category} className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  {category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto"></div>
              </div>
              
              <div className={`grid gap-6 ${category === 'Drinks' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {getItemsByCategory(category).map((item, index) => (
                  <Card key={index} className="group hover:card-shadow smooth-transition hover:scale-105">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-semibold group-hover:text-primary smooth-transition">
                          {item.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">
                          {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            We look forward to your custom!
          </h3>
          <Button asChild size="lg" className="tech-gradient text-white font-semibold hover:opacity-90">
            <Link to="/bookings">
              Check out our services!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;