import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send,
  Building,
  Leaf,
  Users,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    userType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "hello@ecohassel.com",
      action: "mailto:hello@ecohassel.com",
      color: "secondary"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with support instantly",
      value: "Available 24/7",
      action: "#",
      color: "accent"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Green Valley Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@ecohassel.com",
      hours: "Mon-Fri: 8AM-6PM PST"
    },
    {
      city: "Seattle",
      address: "456 Sustainability Street, Seattle, WA 98101",
      phone: "+1 (555) 234-5678",
      email: "seattle@ecohassel.com",
      hours: "Mon-Fri: 8AM-6PM PST"
    },
    {
      city: "Austin",
      address: "789 Circular Economy Lane, Austin, TX 78701",
      phone: "+1 (555) 345-6789",
      email: "austin@ecohassel.com",
      hours: "Mon-Fri: 8AM-6PM CST"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start waste collection?",
      answer: "We can typically start collection within 24-48 hours of signup, depending on your location and service requirements."
    },
    {
      question: "What types of organic waste do you accept?",
      answer: "We accept all organic waste including food scraps, coffee grounds, fruit and vegetable peels, and yard waste. We don't accept meat, dairy, or oily foods."
    },
    {
      question: "How is pricing determined?",
      answer: "Pricing is based on pickup frequency, volume, and location. We offer transparent pricing with no hidden fees."
    },
    {
      question: "Do you provide containers?",
      answer: "Yes, we provide eco-friendly collection containers and bags as part of our service."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              Let's Start Your <span className="text-primary">Eco Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Ready to transform your waste into worth? Our team is here to help you get started 
              with the perfect sustainable solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className="group hover:shadow-xl transition-all duration-500 text-center border-border/50 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-${method.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${method.color}/20 transition-all duration-300 group-hover:scale-110`}>
                    <method.icon className={`w-8 h-8 text-${method.color}`} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {method.title}
                  </CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground mb-4">{method.value}</p>
                  <Button 
                    className="hover-scale" 
                    asChild
                  >
                    <a href={method.action}>Contact Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="group hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">I am a *</label>
                    <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant Owner</SelectItem>
                        <SelectItem value="household">Household</SelectItem>
                        <SelectItem value="farmer">Farmer/Gardener</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="municipality">Municipality</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      placeholder="Tell us more about your needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full hover-scale">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Our Locations
                </h2>
                <p className="text-muted-foreground">
                  Visit us at one of our offices or we can come to you
                </p>
              </div>

              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card 
                    key={office.city} 
                    className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                        {office.city}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Common Questions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to questions you might have about our services
            </p>
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

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <Button variant="outline" className="hover-scale">
              <Headphones className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Service Areas
            </h2>
            <p className="text-xl text-muted-foreground">
              Currently serving 25+ cities with expansion plans underway
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Urban Centers</CardTitle>
                <CardDescription>Major metropolitan areas with high-density service</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Suburban Communities</CardTitle>
                <CardDescription>Residential neighborhoods and community partnerships</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Leaf className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle>Rural Areas</CardTitle>
                <CardDescription>Agricultural regions and farming communities</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of businesses and households already making a positive impact. 
              Let's create a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg hover-scale"
                asChild
              >
                <Link to="/services">Explore Services</Link>
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

export default Contact;