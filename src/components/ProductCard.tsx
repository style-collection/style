import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors?: string[];
  sizes?: string[];
  rating?: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group product-card bg-card border border-border rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-luxury text-luxury-foreground">New</Badge>
          )}
          {product.isOnSale && discountPercentage > 0 && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart 
              className={`h-4 w-4 ${isWishlisted ? 'fill-luxury text-luxury' : 'text-charcoal'}`} 
            />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <Eye className="h-4 w-4 text-charcoal" />
          </Button>
        </div>

        {/* Add to Cart - Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full bg-luxury hover:bg-luxury/90 text-luxury-foreground">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-medium text-card-foreground mb-2 line-clamp-2 group-hover:text-luxury transition-colors">
          {product.name}
        </h3>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1 mb-3">
            {product.colors.slice(0, 4).map((color) => (
              <button
                key={color}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  selectedColor === color ? 'border-luxury scale-110' : 'border-border'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-luxury">
              {product.price} EGP
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice} EGP
              </span>
            )}
          </div>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center text-xs text-muted-foreground">
              <span className="text-rose-gold mr-1">★</span>
              {product.rating}
            </div>
          )}
        </div>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-1">Available Sizes:</p>
            <div className="flex flex-wrap gap-1">
              {product.sizes.slice(0, 5).map((size) => (
                <span
                  key={size}
                  className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="text-xs text-muted-foreground">
                  +{product.sizes.length - 5} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};