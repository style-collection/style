import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, X } from "lucide-react";

// Mock data for products
const mockProducts = [
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

const Products = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filters, setFilters] = useState<string[]>([]);

  const pageTitle = category 
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`
    : "All Products";

  const filteredProducts = mockProducts.filter(product => {
    if (category && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const removeFilter = (filter: string) => {
    setFilters(filters.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium fashion pieces designed to elevate your style.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>
              
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">Category</label>
                <div className="space-y-2">
                  {["Dresses", "Tops", "Accessories", "Shoes"].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {filters.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {filters.map((filter) => (
                    <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                      {filter}
                      <button onClick={() => removeFilter(filter)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" onClick={() => setFilters([])}>
                    Clear all
                  </Button>
                </div>
              </div>
            )}

            {/* Products Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;