import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Truck, Shield, RotateCcw, Heart } from "lucide-react";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Elegant Evening Dress",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    category: "Dresses",
    colors: ["#8B0000", "#000000", "#4A4A4A"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    isNew: true,
    isOnSale: true,
  },
  {
    id: "2",
    name: "Luxury Silk Blouse",
    price: 899,
    image: "https://images.unsplash.com/photo-1564257577322-d84f6ed7c62a?w=600&h=800&fit=crop",
    category: "Tops",
    colors: ["#FFFFFF", "#F5F5DC", "#FFB6C1"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    isNew: true,
  },
  {
    id: "3",
    name: "Designer Handbag",
    price: 2199,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
    category: "Accessories",
    colors: ["#8B4513", "#000000", "#B8860B"],
    rating: 4.7,
  },
  {
    id: "4",
    name: "Premium Heels",
    price: 1599,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
    category: "Shoes",
    colors: ["#000000", "#8B0000", "#B8860B"],
    sizes: ["36", "37", "38", "39", "40"],
    rating: 4.6,
    isOnSale: true,
  },
];

const categories = [
  {
    title: "Dresses",
    description: "Elegant dresses for every occasion",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop",
    href: "/categories/dresses",
    productCount: 120,
  },
  {
    title: "Accessories",
    description: "Complete your look with style",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop",
    href: "/categories/accessories",
    productCount: 200,
  },
  {
    title: "Shoes",
    description: "Step out in confidence",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=600&fit=crop",
    href: "/categories/shoes",
    productCount: 95,
  },
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over 500 EGP",
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "100% secure payment processing",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "4.9/5 stars from 50K+ customers",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury/10 text-luxury rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <Badge className="bg-luxury/10 text-luxury border-luxury mb-4">New Collection</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our hand-picked selection of premium fashion pieces that define elegance and style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-luxury hover:text-luxury-foreground">
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections designed to match your unique style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div key={category.title} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-luxury hover:bg-luxury/90 text-luxury-foreground">
              View All Categories
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Limited Time Offer</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              Spring Collection Sale
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Up to 50% off on selected items. Refresh your wardrobe with our latest spring pieces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-luxury hover:bg-white/90">
                Shop Sale
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Lookbook
              </Button>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-lg font-bold">15</div>
                <div className="text-white/70">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-lg font-bold">08</div>
                <div className="text-white/70">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-lg font-bold">42</div>
                <div className="text-white/70">Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers who trust Style Collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-rose-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Absolutely love the quality and style of their pieces. The customer service is exceptional, 
                    and delivery is always on time. My go-to store for elegant fashion!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-muted rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-foreground">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl font-serif font-bold mb-4">Stay in Style</h2>
            <p className="text-lg text-white/80 mb-8">
              Be the first to know about new collections, exclusive offers, and style tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-rose-gold"
              />
              <Button className="bg-luxury hover:bg-luxury/90 text-luxury-foreground px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-white/60 mt-4">
              Join 10,000+ subscribers • No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
