import { CategoryCard } from "@/components/CategoryCard";

const categories = [
  {
    title: "Dresses",
    description: "Elegant dresses for every occasion, from casual day wear to sophisticated evening gowns.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop",
    href: "/categories/dresses",
    productCount: 120,
  },
  {
    title: "Tops & Blouses",
    description: "Stylish tops and blouses in premium fabrics, perfect for work or weekend wear.",
    image: "https://images.unsplash.com/photo-1564257577322-d84f6ed7c62a?w=800&h=600&fit=crop",
    href: "/categories/tops",
    productCount: 85,
  },
  {
    title: "Accessories",
    description: "Complete your look with our curated selection of bags, jewelry and accessories.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop",
    href: "/categories/accessories",
    productCount: 200,
  },
  {
    title: "Shoes",
    description: "Step out in style with our collection of heels, flats, boots and sneakers.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=600&fit=crop",
    href: "/categories/shoes",
    productCount: 95,
  },
  {
    title: "Outerwear",
    description: "Stay warm and stylish with our selection of coats, jackets and blazers.",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&h=600&fit=crop",
    href: "/categories/outerwear",
    productCount: 60,
  },
  {
    title: "Activewear",
    description: "Premium activewear that takes you from gym to street in comfort and style.",
    image: "https://images.unsplash.com/photo-1506629905102-80f79a2e5bb4?w=800&h=600&fit=crop",
    href: "/categories/activewear",
    productCount: 45,
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Shop by Category
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed to match your unique style and lifestyle.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              href={category.href}
              productCount={category.productCount}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-luxury text-luxury-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-8 text-luxury-foreground/90">
            Our personal styling service can help you discover pieces that perfectly match your style and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-luxury hover:bg-white/90 px-8 py-3 rounded-md font-semibold transition-colors">
              Book Styling Session
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;