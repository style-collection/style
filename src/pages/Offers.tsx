import { Clock, Tag, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";

const featuredOffers = [
  {
    id: 1,
    title: "Spring Collection Sale",
    description: "Up to 50% off on selected spring items",
    discount: "50%",
    endDate: "March 31, 2024",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=500&fit=crop",
    cta: "Shop Spring Sale",
  },
  {
    id: 2,
    title: "New Customer Special",
    description: "20% off your first order + free shipping",
    discount: "20%",
    code: "WELCOME20",
    endDate: "Limited Time",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
    cta: "Claim Offer",
  },
];

const saleProducts = [
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
    isOnSale: true,
  },
  {
    id: "2",
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
  {
    id: "3",
    name: "Designer Blazer",
    price: 1899,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&h=800&fit=crop",
    category: "Outerwear",
    colors: ["#000000", "#8B4513", "#4A4A4A"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    isOnSale: true,
  },
  {
    id: "4",
    name: "Silk Scarf Collection",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
    category: "Accessories",
    colors: ["#FFB6C1", "#8B0000", "#B8860B"],
    rating: 4.9,
    isOnSale: true,
  },
];

const promoOffers = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: "🚚",
    code: "FREESHIP500",
  },
  {
    title: "Student Discount",
    description: "15% off with valid student ID",
    icon: "🎓",
    code: "STUDENT15",
  },
  {
    title: "Loyalty Rewards",
    description: "Earn points with every purchase",
    icon: "⭐",
    code: "JOIN NOW",
  },
  {
    title: "Bulk Orders",
    description: "Special pricing for orders 3+ items",
    icon: "📦",
    code: "BULK3",
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-luxury text-luxury-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Exclusive Offers & Deals
          </h1>
          <p className="text-xl mb-8 text-luxury-foreground/90">
            Discover amazing savings on premium fashion pieces. Limited time offers you don't want to miss!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Offers updated daily • New deals every week</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Offers */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Featured Offers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover-lift">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-destructive text-destructive-foreground text-lg px-3 py-1">
                      {offer.discount} OFF
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  
                  {offer.code && (
                    <div className="bg-muted p-3 rounded-md mb-4">
                      <p className="text-sm font-medium">Use code:</p>
                      <p className="text-lg font-bold text-luxury">{offer.code}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Valid until {offer.endDate}</span>
                    </div>
                    
                    <Button className="bg-luxury hover:bg-luxury/90 text-luxury-foreground">
                      {offer.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sale Products */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Items on Sale
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium fashion pieces at unbeatable prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Sale Items
            </Button>
          </div>
        </div>

        {/* Promotional Offers */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Ongoing Promotions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoOffers.map((promo, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="text-4xl mb-2">{promo.icon}</div>
                  <CardTitle className="text-lg">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <Badge variant="outline" className="text-luxury border-luxury">
                    {promo.code}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Never Miss a Deal
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and be the first to know about exclusive offers, 
              flash sales, and new collection launches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-luxury"
              />
              <Button className="bg-luxury hover:bg-luxury/90 text-luxury-foreground px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              Join 10,000+ subscribers • Unsubscribe anytime
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Offers cannot be combined with other promotions. Terms and conditions apply. 
            Sale prices valid while supplies last.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;