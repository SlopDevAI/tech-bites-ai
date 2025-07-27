import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import new realistic images
import restaurantExterior from "@/assets/restaurant-exterior.jpg";
import diningInterior from "@/assets/dining-interior.jpg";
import eventsSpace from "@/assets/events-space.jpg";
import cocktailBar from "@/assets/cocktail-bar.jpg";
import nightclubSuite from "@/assets/nightclub-suite.jpg";
import seasideView from "@/assets/seaside-view.jpg";
import signatureFish from "@/assets/signature-fish.jpg";
import wagyuSteak from "@/assets/wagyu-steak.jpg";
import dessertSelection from "@/assets/dessert-selection.jpg";
import tokyoDish from "@/assets/tokyo-dish.jpg";
import digitalMenu from "@/assets/digital-menu.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import cleanKitchen from "@/assets/clean-kitchen.jpg";

interface GalleryImage {
  src: string;
  caption: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: restaurantExterior,
    caption: "Our stunning Mediterranean restaurant exterior in beautiful Ghadira, Malta - where technology meets seaside dining.",
    alt: "TechBites exterior"
  },
  {
    src: eventsSpace,
    caption: "Our exquisite Events & Party area, where pre-booked guests can host all forms of events with cutting-edge technology!",
    alt: "Events and party area"
  },
  {
    src: diningInterior,
    caption: "Experience the perfect blend of elegance and technology in our main dining area with interactive tables and ambient lighting.",
    alt: "Restaurant dining area"
  },
  {
    src: cocktailBar,
    caption: "Our sophisticated cocktail bar area where the finest drinks on the island are crafted with precision technology.",
    alt: "Cocktail bar area"
  },
  {
    src: nightclubSuite,
    caption: "Our exclusive nightclub lounge - where unforgettable evenings come to life with immersive audiovisual experiences.",
    alt: "Nightclub suite"
  },
  {
    src: seasideView,
    caption: "Step outside to our terrace and enjoy the breathtaking Mediterranean views overlooking Malta's pristine coastline.",
    alt: "Seaside view"
  },
  {
    src: signatureFish,
    caption: "Our signature fish dish - expertly prepared using precision cooking techniques to preserve freshness and enhance natural flavors.",
    alt: "Signature fish dish"
  },
  {
    src: wagyuSteak,
    caption: "Premium Wagyu A5 steak, shipped directly from Japan and prepared with our cutting-edge cooking technology.",
    alt: "Wagyu A5 steak"
  },
  {
    src: dessertSelection,
    caption: "Our artisanal dessert selection - the perfect finale to your tech-enhanced dining experience.",
    alt: "Dessert selection"
  },
  {
    src: tokyoDish,
    caption: "Authentic Japanese cuisine meets modern technology - experience flavors straight from Tokyo's finest establishments.",
    alt: "Tokyo-style dish"
  },
  {
    src: digitalMenu,
    caption: "Our interactive digital menu system - browse, customize, and order with just a touch.",
    alt: "Interactive menu display"
  },
  {
    src: chefCooking,
    caption: "Our expert chefs combining traditional culinary mastery with cutting-edge cooking technology.",
    alt: "Expert chef at work"
  },
  {
    src: cleanKitchen,
    caption: "Our immaculate kitchen facilities - where precision, cleanliness, and technology create culinary excellence.",
    alt: "Clean kitchen environment"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our tech-enhanced dining experience and stunning facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 smooth-transition card-shadow"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-center text-lg font-medium">
                      {image.caption}
                    </p>
                  </div>
                  
                  {/* Navigation buttons */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Image counter */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            {galleryImages.length} images showcasing our unique tech-dining experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;