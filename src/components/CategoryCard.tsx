import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  productCount?: number;
}

export const CategoryCard = ({ title, description, image, href, productCount }: CategoryCardProps) => {
  return (
    <Link to={href} className="group block">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] hover-lift">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="transform transition-transform duration-300 group-hover:translate-y-(-2px)">
            <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
            <p className="text-sm text-white/90 mb-3 line-clamp-2">{description}</p>
            
            <div className="flex items-center justify-between">
              {productCount && (
                <span className="text-xs text-white/70">
                  {productCount} products
                </span>
              )}
              
              <div className="flex items-center text-sm font-medium text-rose-gold group-hover:text-white transition-colors">
                Shop Now
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};