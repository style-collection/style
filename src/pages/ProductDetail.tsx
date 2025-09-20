import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Share2, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

// Mock product data
const mockProduct = {
  id: "1",
  name: "Elegant Evening Dress",
  price: 1299,
  originalPrice: 1599,
  images: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1566479179817-c9dac85f0e60?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop",
  ],
  category: "Dresses",
  colors: [
    { name: "Burgundy", value: "#8B0000" },
    { name: "Black", value: "#000000" },
    { name: "Navy", value: "#4A4A4A" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  rating: 4.8,
  reviewCount: 124,
  description: "This stunning evening dress combines elegance with modern sophistication. Crafted from premium silk blend fabric, it features a flattering silhouette that enhances your natural curves. Perfect for special occasions, formal events, or romantic dinners.",
  features: [
    "Premium silk blend fabric",
    "Tailored fit for flattering silhouette",
    "Hidden back zipper",
    "Fully lined interior",
    "Dry clean only",
  ],
  isNew: true,
  isOnSale: true,
  inStock: true,
};

const relatedProducts = [
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

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = mockProduct.originalPrice 
    ? Math.round(((mockProduct.originalPrice - mockProduct.price) / mockProduct.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <span>Home</span> / <span>Products</span> / <span>{mockProduct.category}</span> / 
          <span className="text-foreground"> {mockProduct.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? 'border-luxury' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${mockProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {mockProduct.isNew && (
                <Badge className="bg-luxury text-luxury-foreground">New</Badge>
              )}
              {mockProduct.isOnSale && discountPercentage > 0 && (
                <Badge className="bg-destructive text-destructive-foreground">
                  -{discountPercentage}% OFF
                </Badge>
              )}
            </div>

            {/* Title & Category */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {mockProduct.category}
              </p>
              <h1 className="text-3xl font-serif font-bold text-foreground">
                {mockProduct.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(mockProduct.rating)
                        ? 'text-rose-gold fill-current'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {mockProduct.rating} ({mockProduct.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-luxury">
                {mockProduct.price} EGP
              </span>
              {mockProduct.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {mockProduct.originalPrice} EGP
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {mockProduct.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color: {selectedColor.name}</h3>
              <div className="flex gap-2">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name 
                        ? 'border-luxury scale-110' 
                        : 'border-border'
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {mockProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-luxury text-luxury bg-luxury/5'
                        : 'border-border text-muted-foreground hover:border-luxury/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:border-luxury transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:border-luxury transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-luxury hover:bg-luxury/90 text-luxury-foreground"
                disabled={!selectedSize}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart - {mockProduct.price * quantity} EGP
              </Button>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart 
                    className={`h-5 w-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} 
                  />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>
                
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-4">Product Features</h3>
              <ul className="space-y-2">
                {mockProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-luxury rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-luxury" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders over 500 EGP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-luxury" />
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-luxury" />
                <div>
                  <p className="text-sm font-medium">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;