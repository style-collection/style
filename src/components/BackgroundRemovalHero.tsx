import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import { removeBackground, loadImageFromSrc } from "@/utils/backgroundRemoval";

export const BackgroundRemovalHero = () => {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processHeroImage = async () => {
      setIsProcessing(true);
      try {
        const img = await loadImageFromSrc(heroImage);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImage(processedUrl);
      } catch (error) {
        console.error('Failed to process hero image:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    processHeroImage();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury via-luxury-variant to-rose-gold"></div>
      
      {/* Processed Image or Loading */}
      <div className="absolute inset-0 flex items-center justify-end pr-8">
        {isProcessing ? (
          <div className="flex items-center justify-center w-96 h-96 text-white">
            <Loader2 className="h-8 w-8 animate-spin mr-2" />
            <span>Processing image...</span>
          </div>
        ) : processedImage ? (
          <img
            src={processedImage}
            alt="Premium Women's Fashion Model"
            className="max-w-md max-h-full object-contain opacity-90"
          />
        ) : (
          <img
            src={heroImage}
            alt="Premium Women's Fashion Collection"
            className="max-w-md max-h-full object-contain opacity-50"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-rose-gold fill-current" />
            <span className="text-sm font-medium">Exclusive Collection</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Elegance
            <span className="block text-rose-gold">Redefined</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of premium women's fashion, 
            accessories, and shoes that celebrate your unique style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-luxury hover:bg-white/90 shadow-luxury group px-8 py-3 text-lg font-semibold"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg"
            >
              View Lookbook
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-gold">500+</div>
              <p className="text-sm text-white/80 mt-1">Premium Products</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-gold">50K+</div>
              <p className="text-sm text-white/80 mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-gold">4.9★</div>
              <p className="text-sm text-white/80 mt-1">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};