import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, BarChart3, ShoppingCart, Leaf, Clock, Shield, Users, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Smart Waste Collection",
      description: "Efficient, eco-friendly pickup services with real-time tracking",
      features: [
        "On-demand pickup scheduling",
        "Subscription-based regular collection",
        "Optimized eco-friendly routes",
        "Real-time tracking & notifications",
        "Flexible scheduling options"
      ],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into your environmental impact",
      features: [
        "Waste diversion tracking",
        "CO₂ savings calculations",
        "Compost production reports",
        "Sustainability certificates",
        "Custom business reports"
      ],
      color: "secondary"
    },
    {
      icon: ShoppingCart,
      title: "Eco Marketplace",
      description: "Premium compost and eco-products at your fingertips",
      features: [
        "Premium organic compost",
        "Bulk ordering discounts",
        "Eco-certified products",
        "Farmer-direct sourcing",
        "Secure payment processing"
      ],
      color: "accent"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automated scheduling and pickup notifications"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "99.8% on-time pickup rate with backup systems"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated customer success team available 24/7"
    },
    {
      icon: Zap,
      title: "Instant Impact",
      description: "See your environmental impact from day one"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Comprehensive Eco Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              Complete <span className="text-primary">Circular Economy</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              From waste collection to premium compost sales, we provide end-to-end services 
              that transform your organic waste into valuable resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" asChild className="hover-scale">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three integrated services that create a complete circular economy ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`group hover:shadow-xl transition-all duration-500 overflow-hidden border-border/50 hover:border-${service.color}/20 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className={`bg-gradient-to-br from-${service.color}/5 to-${service.color}/10 group-hover:from-${service.color}/10 group-hover:to-${service.color}/20 transition-all pb-8`}>
                  <div className={`w-16 h-16 bg-${service.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-float`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <CheckCircle className={`w-5 h-5 text-${service.color} mr-3 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-8 hover-scale" 
                    variant="outline"
                    asChild
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose EcoHassel?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the benefits of working with the circular economy leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              How Our Services Work Together
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-primary/20" />
              <div className="hidden md:block absolute top-16 left-2/3 right-0 h-0.5 bg-primary/20 transform translate-x-8" />

              <div className="text-center group animate-fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform relative z-10">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Collection</h3>
                <p className="text-muted-foreground">
                  We collect your organic waste using our smart logistics network
                </p>
              </div>

              <div className="text-center group animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-foreground font-bold text-xl group-hover:scale-110 transition-transform relative z-10">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Transform</h3>
                <p className="text-muted-foreground">
                  Organic waste is processed into premium, nutrient-rich compost
                </p>
              </div>

              <div className="text-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-accent-foreground font-bold text-xl group-hover:scale-110 transition-transform relative z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Distribute</h3>
                <p className="text-muted-foreground">
                  Premium compost reaches farmers and gardeners through our marketplace
                </p>
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
              Ready to Start Your Eco Journey?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of businesses and households already making a positive impact 
              with our comprehensive eco services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg hover-scale"
                asChild
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale"
                asChild
              >
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;