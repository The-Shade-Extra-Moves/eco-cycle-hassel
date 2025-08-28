import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  X, 
  Zap, 
  Building, 
  Users, 
  Leaf, 
  Calendar,
  Truck,
  BarChart3,
  Award,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Household",
      description: "Perfect for families and small households",
      icon: Users,
      color: "primary",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: {
        included: [
          "Weekly pickup service",
          "Eco-friendly collection bins",
          "Basic impact tracking",
          "EcoPoints rewards program",
          "Mobile app access",
          "Email support"
        ],
        excluded: [
          "Custom pickup schedules",
          "Business reports",
          "Priority support",
          "API access"
        ]
      },
      limits: {
        pickups: "4 per month",
        volume: "Up to 50kg/month",
        support: "Email support"
      },
      popular: false
    },
    {
      name: "Business",
      description: "Ideal for restaurants and small businesses",
      icon: Building,
      color: "secondary",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      features: {
        included: [
          "Daily pickup service",
          "Large collection containers",
          "Advanced analytics dashboard",
          "Sustainability certificates",
          "Custom pickup schedules",
          "Business impact reports",
          "Phone & email support",
          "EcoPoints multiplier (2x)"
        ],
        excluded: [
          "API access",
          "Custom integrations",
          "Dedicated account manager"
        ]
      },
      limits: {
        pickups: "30 per month",
        volume: "Up to 500kg/month",
        support: "Phone & email"
      },
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations and municipalities",
      icon: Zap,
      color: "accent",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      features: {
        included: [
          "Unlimited pickup service",
          "Industrial-grade containers",
          "Real-time monitoring",
          "Custom reporting suite",
          "API access & integrations",
          "Dedicated account manager",
          "24/7 priority support",
          "Carbon credit certificates",
          "Custom pricing tiers",
          "EcoPoints multiplier (5x)"
        ],
        excluded: []
      },
      limits: {
        pickups: "Unlimited",
        volume: "Unlimited",
        support: "24/7 priority"
      },
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Extra Pickups",
      description: "Additional pickups beyond your plan limit",
      price: "$15 per pickup",
      icon: Truck
    },
    {
      name: "Premium Analytics",
      description: "Advanced reporting and insights",
      price: "$25/month",
      icon: BarChart3
    },
    {
      name: "Carbon Certificates",
      description: "Official carbon offset documentation",
      price: "$50/month",
      icon: Award
    },
    {
      name: "Priority Support",
      description: "24/7 phone and chat support",
      price: "$100/month",
      icon: Phone
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    },
    {
      question: "What happens if I exceed my volume limit?",
      answer: "We'll notify you when you approach your limit. You can either upgrade your plan or pay for extra pickups at $15 each."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Yes, we offer custom enterprise pricing for organizations with unique requirements. Contact our sales team for a quote."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! We provide all necessary containers and equipment as part of your subscription."
    },
    {
      question: "Can I pause my service temporarily?",
      answer: "Yes, you can pause your service for up to 3 months per year without penalty. Perfect for seasonal businesses."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Simple Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              Choose Your <span className="text-primary">Sustainable</span> Plan
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Transparent pricing with no hidden fees. Start your eco journey today 
              with a plan that fits your needs and grows with your impact.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 animate-fade-in">
              <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              <Badge className="bg-green-100 text-green-700 ml-2">Save 20%</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`group hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-border/50 hover:border-${plan.color}/20 animate-fade-in ${
                  plan.popular ? 'ring-2 ring-primary/20 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-8`}>
                  <div className={`w-16 h-16 bg-${plan.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${plan.color}/20 transition-all duration-300 group-hover:scale-110`}>
                    <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="pt-6">
                    <div className="text-4xl font-bold text-foreground">
                      ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-muted-foreground mt-2">
                        ${plan.yearlyPrice} billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Limits */}
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pickups:</span>
                      <span className="font-medium">{plan.limits.pickups}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Volume:</span>
                      <span className="font-medium">{plan.limits.volume}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Support:</span>
                      <span className="font-medium">{plan.limits.support}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.included.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 group/item">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.features.excluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 group/item opacity-50">
                        <X className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <span className="text-sm text-muted-foreground line-through">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full hover-scale ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-glow text-primary-foreground' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Add-Ons
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Enhance Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Optional add-ons to customize your experience and maximize your impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={addon.name} 
                className="group hover:shadow-lg transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <addon.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {addon.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {addon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-primary mb-4">
                    {addon.price}
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover-scale">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Compare All Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Detailed comparison of what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium">Feature</th>
                  <th className="text-center p-4 font-medium">Household</th>
                  <th className="text-center p-4 font-medium">Business</th>
                  <th className="text-center p-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Monthly Pickups</td>
                  <td className="text-center p-4">4</td>
                  <td className="text-center p-4">30</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Volume Limit</td>
                  <td className="text-center p-4">50kg</td>
                  <td className="text-center p-4">500kg</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Analytics Dashboard</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Custom Schedules</td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">API Access</td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Account Manager</td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-trust/10 text-trust border-trust/20">
              Common Questions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
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
              Join thousands of businesses and households making a positive impact. 
              Choose your plan and start transforming waste into worth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg hover-scale"
                asChild
              >
                <Link to="/contact">Start Free Trial</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;