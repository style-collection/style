import { Users, Award, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            About Style Collection
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Celebrating women's elegance through premium fashion and timeless style since 2020.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Style Collection was born from a passion for empowering women through fashion. 
                Founded in Cairo, Egypt, we began with a simple mission: to make premium, 
                elegant fashion accessible to every woman who values quality and style.
              </p>
              <p>
                Our journey started when our founder, inspired by the rich fashion heritage 
                of Egypt and the Mediterranean, decided to create a brand that celebrates 
                both timeless elegance and contemporary trends.
              </p>
              <p>
                Today, we're proud to serve thousands of customers across Egypt, offering 
                carefully curated collections that reflect our commitment to quality, 
                style, and exceptional service.
              </p>
            </div>
          </div>
          
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
              alt="Our boutique"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from product curation to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury/10 text-luxury rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We source only the finest materials and work with skilled artisans to ensure 
                every piece meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury/10 text-luxury rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Fashion is our passion, and we pour our hearts into every collection, 
                every design, and every customer interaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury/10 text-luxury rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                We believe in building lasting relationships with our customers and 
                supporting the communities we serve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury/10 text-luxury rounded-full mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to responsible fashion practices and supporting 
                sustainable production methods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Style Collection, dedicated to bringing you the best in fashion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-48">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
                alt="Sarah Ahmed - Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Sarah Ahmed</h3>
            <p className="text-luxury font-medium mb-2">Founder & CEO</p>
            <p className="text-muted-foreground text-sm">
              With over 15 years in fashion, Sarah brings her vision of accessible luxury to every collection.
            </p>
          </div>
          
          <div className="text-center">
            <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-48">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Mina Hassan - Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Mina Hassan</h3>
            <p className="text-luxury font-medium mb-2">Creative Director</p>
            <p className="text-muted-foreground text-sm">
              A fashion school graduate with an eye for emerging trends and timeless elegance.
            </p>
          </div>
          
          <div className="text-center">
            <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-48">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                alt="Layla Mostafa - Head of Customer Experience"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Layla Mostafa</h3>
            <p className="text-luxury font-medium mb-2">Head of Customer Experience</p>
            <p className="text-muted-foreground text-sm">
              Ensuring every customer feels valued and receives exceptional service at every touchpoint.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-luxury text-luxury-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Style Journey</h2>
          <p className="text-lg mb-8 text-luxury-foreground/90">
            Follow us for the latest collections, style tips, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-luxury hover:bg-white/90 px-8 py-3 rounded-md font-semibold transition-colors">
              Subscribe to Newsletter
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors">
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;