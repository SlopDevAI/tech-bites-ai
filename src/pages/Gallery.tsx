import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  caption: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/original/img/outside.jpg",
    caption: "The outside of our ultra-clean, fancy, futuristic establishment.",
    alt: "TechBites exterior"
  },
  {
    src: "/original/img/inside1.jpg",
    caption: "Our exquisite Events & Party area, where pre-booked guests can host all forms of events!",
    alt: "Events and party area"
  },
  {
    src: "/original/img/inside2.jpg",
    caption: "We specialise in only the best experience here at TechBites, just look at the lovely ambience of this area!",
    alt: "Restaurant ambience"
  },
  {
    src: "/original/img/inside3.jpg",
    caption: "The inside, adult area where the best cocktails on the island can be ordered.",
    alt: "Adult cocktail area"
  },
  {
    src: "/original/img/inside4.jpg",
    caption: "Our nightclub suite, where your dreams will come true.",
    alt: "Nightclub suite"
  },
  {
    src: "/original/img/seasideview.jpg",
    caption: "The claustrophobic inside too much for you? Come outside to experience the lovely fresh air and breathtaking view.",
    alt: "Seaside view"
  },
  {
    src: "/original/img/food1.png",
    caption: "Our best fish dish, cooked perfectly to preserve the blueness of the skin while still being safe to eat.",
    alt: "Signature fish dish"
  },
  {
    src: "/original/img/food2.png",
    caption: "Our exquisitely made Wagyu A5 steak, shipped straight from japan.",
    alt: "Wagyu A5 steak"
  },
  {
    src: "/original/img/food3.png",
    caption: "Our drool-inducing desserts, the most amazing end to a great meal.",
    alt: "Dessert selection"
  },
  {
    src: "/original/img/food4.jpg",
    caption: "Western dishes not your style? How about something straight out of Tokyo?",
    alt: "Tokyo-style dish"
  },
  {
    src: "/original/img/menu.jpg",
    caption: "Our Interactive Menus are sure to catch your eye and show you something you'd love to eat.",
    alt: "Interactive menu display"
  },
  {
    src: "/original/img/chef1.jpg",
    caption: "Our expert chefs, ready to cook you the best meals!",
    alt: "Expert chef at work"
  },
  {
    src: "/original/img/chef2.jpg",
    caption: "Just look how clean they keep their environment-",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
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