import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Spring 2024 Fashion Trends: What's Hot This Season",
    excerpt: "Discover the must-have fashion trends for Spring 2024, from bold colors to elegant silhouettes that will elevate your wardrobe.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=500&fit=crop",
    category: "Trends",
    author: "Sarah Ahmed",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Style Your Workwear for Maximum Impact",
    excerpt: "Professional styling tips that help you look confident and sophisticated in any work environment.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
    category: "Style Tips",
    author: "Mina Hassan",
    date: "March 12, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Accessorizing 101: The Art of Perfect Finishing Touches",
    excerpt: "Learn how to choose and style accessories that complement your outfits and express your personal style.",
    image: "https://images.unsplash.com/photo-1506629905102-80f79a2e5bb4?w=800&h=500&fit=crop",
    category: "Accessories",
    author: "Layla Mostafa",
    date: "March 8, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Sustainable Fashion: Building an Eco-Conscious Wardrobe",
    excerpt: "Explore sustainable fashion practices and how to make environmentally conscious choices without compromising on style.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop",
    category: "Sustainability",
    author: "Sarah Ahmed",
    date: "March 5, 2024",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Color Psychology in Fashion: What Your Wardrobe Says About You",
    excerpt: "Understand how different colors affect perception and mood, and learn to use color strategically in your wardrobe choices.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=500&fit=crop",
    category: "Psychology",
    author: "Mina Hassan",
    date: "March 1, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Investment Pieces: Building a Timeless Wardrobe",
    excerpt: "Discover which fashion pieces are worth the investment and how to build a wardrobe that stands the test of time.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=500&fit=crop",
    category: "Investment",
    author: "Layla Mostafa",
    date: "February 28, 2024",
    readTime: "9 min read",
  },
];

const categories = ["All", "Trends", "Style Tips", "Accessories", "Sustainability", "Psychology", "Investment"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Style Journal
          </h1>
          <p className="text-lg text-muted-foreground">
            Fashion insights, style tips, and inspiration to help you express your unique style with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-luxury hover:bg-luxury/90 text-luxury-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-luxury text-luxury-foreground">Featured</Badge>
                  <Badge variant="outline">{blogPosts[0].category}</Badge>
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 line-clamp-2">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <Button className="bg-luxury hover:bg-luxury/90 text-luxury-foreground self-start">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover-lift cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-serif font-semibold text-foreground line-clamp-2 hover:text-luxury transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-luxury text-luxury-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Stylish</h2>
          <p className="text-lg mb-8 text-luxury-foreground/90">
            Subscribe to our newsletter for the latest style tips, trend alerts, and exclusive fashion insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-luxury hover:bg-white/90 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;