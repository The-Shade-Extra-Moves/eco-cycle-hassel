import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Truck, 
  Recycle, 
  Package, 
  BarChart3, 
  Award,
  Calendar,
  MapPin,
  Clock,
  Leaf,
  Users,
  Factory,
  ShoppingCart,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Schedule Pickup",
      description: "Use our app or website to schedule waste collection",
      details: [
        "Choose one-time or recurring pickups",
        "Select convenient time slots",
        "Get instant confirmation",
        "Track your pickup in real-time"
      ]
    },
    {
      icon: Truck,
      title: "Smart Collection",
      description: "Our eco-friendly fleet collects your organic waste",
      details: [
        "GPS-optimized routes reduce emissions",
        "Professional, trained collection teams",
        "Contactless pickup options available",
        "Real-time tracking and notifications"
      ]
    },
    {
      icon: Recycle,
      title: "Transform Waste",
      description: "Advanced composting facilities process your waste",
      details: [
        "Scientific composting methods",
        "Temperature and moisture monitoring",
        "Quality testing throughout process",
        "Pathogen elimination guaranteed"
      ]
    },
    {
      icon: Package,
      title: "Premium Compost",
      description: "High-quality compost ready for distribution",
      details: [
        "Nutrient-rich organic matter",
        "Eco-certified quality standards",
        "Custom blends for different crops",
        "Sustainable packaging materials"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Distribution",
      description: "Compost reaches farmers through our platform",
      details: [
        "Direct farmer connections",
        "Competitive pricing",
        "Bulk order discounts",
        "Delivery coordination"
      ]
    },
    {
      icon: BarChart3,
      title: "Track Impact",
      description: "Monitor your environmental contribution",
      details: [
        "Real-time impact dashboard",
        "CO₂ savings calculations",
        "Waste diversion metrics",
        "Sustainability certificates"
      ]
    }
  ];

  const userJourneys = [
    {
      id: "restaurant",
      title: "Restaurant Owner",
      icon: Users,
      journey: [
        { step: "Sign Up", description: "Create business account with waste volume estimates" },
        { step: "Schedule", description: "Set up regular pickup schedule (daily/weekly)" },
        { step: "Collection", description: "Staff prepares organic waste for pickup" },
        { step: "Reports", description: "Receive monthly sustainability reports" },
        { step: "Marketing", description: "Use eco-certificates for brand marketing" }
      ]
    },
    {
      id: "household",
      title: "Household",
      icon: Leaf,
      journey: [
        { step: "Download App", description: "Install EcoHassel mobile app" },
        { step: "Quick Setup", description: "Enter address and pickup preferences" },
        { step: "Separate Waste", description: "Use provided bins for organic waste" },
        { step: "Earn Points", description: "Collect EcoPoints for each pickup" },
        { step: "Redeem Rewards", description: "Use points for discounts and eco-products" }
      ]
    },
    {
      id: "farmer",
      title: "Farmer",
      icon: Factory,
      journey: [
        { step: "Browse Marketplace", description: "Explore available compost types" },
        { step: "Place Order", description: "Select quantity and delivery options" },
        { step: "Quality Check", description: "Receive certified compost analysis" },
        { step: "Apply Compost", description: "Use premium compost on crops" },
        { step: "Track Results", description: "Monitor soil health improvements" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Simple Process
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              How <span className="text-primary">EcoHassel</span> Works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Discover our simple, efficient process that transforms organic waste into valuable compost 
              while creating a sustainable circular economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" asChild className="hover-scale">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              6-Step Circular Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From waste collection to impact tracking, every step is designed for maximum efficiency and sustainability
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={step.title} 
                className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-8">
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Journeys */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              User Journeys
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Tailored for Your Needs
            </h2>
            <p className="text-xl text-muted-foreground">
              See how different users benefit from our platform
            </p>
          </div>

          <Tabs defaultValue="restaurant" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {userJourneys.map((journey) => (
                <TabsTrigger 
                  key={journey.id} 
                  value={journey.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <journey.icon className="w-4 h-4" />
                  {journey.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {userJourneys.map((journey) => (
              <TabsContent key={journey.id} value={journey.id} className="animate-fade-in">
                <div className="grid md:grid-cols-5 gap-6">
                  {journey.journey.map((step, index) => (
                    <div key={step.step} className="text-center group">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                          <span className="text-xl font-bold text-primary">{index + 1}</span>
                        </div>
                        {index < journey.journey.length - 1 && (
                          <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-y-0.5" />
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {step.step}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-trust/10 text-trust border-trust/20">
                  Innovation
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                  Powered by Smart Technology
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our platform leverages cutting-edge technology to optimize every aspect of the circular economy process.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Smart Route Optimization</h3>
                    <p className="text-muted-foreground">AI-powered routing reduces emissions by up to 40% while improving efficiency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Real-Time Monitoring</h3>
                    <p className="text-muted-foreground">Track every step of the process from pickup to compost creation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Predictive Analytics</h3>
                    <p className="text-muted-foreground">Machine learning predicts optimal pickup times and compost demand.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-float">
                    <Recycle className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">99.8%</div>
                    <div className="text-muted-foreground">Process Efficiency</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-background border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-background border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Join the Process?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Start your circular economy journey today. It's simple, efficient, and makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg hover-scale"
                asChild
              >
                <Link to="/services">Choose Your Service</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;