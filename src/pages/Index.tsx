import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, Recycle, ShoppingCart, BarChart3, Users, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-circular-economy.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">EcoHassel</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Turning Waste into Worth
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Smart <span className="text-primary">Eco-Friendly</span> Platform for a Circular Future
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform organic waste from restaurants and households into premium compost. 
                  Connect cities, businesses, and farms in a seamless circular economy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Eco Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Circular economy illustration showing waste transformation to compost"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Complete Eco Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From waste collection to premium compost sales, we handle the entire circular economy process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Collection</CardTitle>
                <CardDescription>
                  On-demand or subscription pickups with optimized eco-friendly routes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Client Dashboard</CardTitle>
                <CardDescription>
                  Track your eco-impact, manage subscriptions, and download sustainability reports
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <ShoppingCart className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Eco Marketplace</CardTitle>
                <CardDescription>
                  Buy premium compost and eco-products through our integrated e-commerce platform
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Simple. Smart. Sustainable.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule Pickup</h3>
              <p className="text-muted-foreground">Book waste collection through our platform</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <Recycle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transform Waste</h3>
              <p className="text-muted-foreground">We convert organic waste into premium compost</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <ShoppingCart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sell & Distribute</h3>
              <p className="text-muted-foreground">Compost reaches farmers through our marketplace</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-trust/20 transition-colors">
                <Award className="w-8 h-8 text-trust" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Rewards</h3>
              <p className="text-muted-foreground">Get EcoPoints and sustainability credits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a restaurant, household, or farmer - we've got you covered
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Restaurants & Hotels</CardTitle>
                <CardDescription className="text-lg">
                  Hassle-free waste pickup with sustainability reports
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Scheduled waste collection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Monthly impact reports
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Brand sustainability boost
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-secondary/5 to-secondary/10 group-hover:from-secondary/10 group-hover:to-secondary/20 transition-all">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Households</CardTitle>
                <CardDescription className="text-lg">
                  Easy home pickup with reward system
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Convenient pickup scheduling
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    EcoPoints rewards program
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Family eco-impact tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-accent/5 to-accent/10 group-hover:from-accent/10 group-hover:to-accent/20 transition-all">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Recycle className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Farmers & Gardens</CardTitle>
                <CardDescription className="text-lg">
                  Premium organic compost at affordable prices
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Chemical-free compost
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Bulk order discounts
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Crop improvement analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-trust/10 text-trust border-trust/20">
              Our Impact
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Making a Real Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Tons of Waste Diverted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Business Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">8K+</div>
              <p className="text-muted-foreground">Tons of Compost Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-trust mb-2">15K+</div>
              <p className="text-muted-foreground">CO₂ Tons Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Join the Circular Economy Revolution
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Transform your waste into worth. Connect with our eco-friendly platform and be part of 
              building a sustainable future for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-primary">EcoHassel</span>
              </div>
              <p className="text-background/70">
                Transforming waste into worth through smart, sustainable solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/70">
                <li>Waste Collection</li>
                <li>Compost Production</li>
                <li>Eco Marketplace</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li>About Us</li>
                <li>Our Impact</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li>Help Center</li>
                <li>Contact</li>
                <li>Community</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 EcoHassel. All rights reserved. Building a sustainable future together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;