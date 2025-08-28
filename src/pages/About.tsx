import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Target, 
  Eye, 
  Heart, 
  Leaf, 
  Users, 
  Award, 
  Globe, 
  Zap,
  Building,
  TrendingUp,
  Shield,
  Recycle
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Building, value: "500+", label: "Partner Businesses" },
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Recycle, value: "10K+", label: "Tons Processed" },
    { icon: Globe, value: "25+", label: "Cities Served" }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Every decision we make prioritizes environmental impact and long-term sustainability."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We believe in building strong communities through collaborative environmental action."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Open about our processes, impact, and continuous improvement efforts."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving our technology to create more efficient and effective solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Environmental engineer with 15 years in sustainable technology",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Tech innovator focused on circular economy solutions",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Operations",
      bio: "Logistics expert optimizing waste collection networks",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Park",
      role: "Head of Sustainability",
      bio: "Environmental scientist measuring and improving our impact",
      image: "/api/placeholder/150/150"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to transform waste management"
    },
    {
      year: "2021",
      title: "First 1000 Tons",
      description: "Processed our first 1000 tons of organic waste"
    },
    {
      year: "2022",
      title: "Tech Platform Launch",
      description: "Launched our comprehensive digital ecosystem"
    },
    {
      year: "2023",
      title: "Major Expansion",
      description: "Expanded to 25 cities across the region"
    },
    {
      year: "2024",
      title: "Carbon Neutral",
      description: "Achieved carbon neutrality across all operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              Building a <span className="text-primary">Sustainable Future</span> Together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              We're on a mission to create a world where no organic waste is wasted, transforming 
              the way communities, businesses, and farmers think about the circular economy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  To empower communities, businesses, and farmers by transforming organic waste into life. 
                  We make eco-living accessible, rewarding, and beautifully simple while creating a 
                  sustainable circular economy that benefits everyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-secondary/20">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  To build a world where no organic waste is wasted—every leftover, every peel, 
                  every plate contributes to a fertile, green, and sustainable future. We envision 
                  thriving communities connected through environmental stewardship.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision and shape our approach to building a sustainable future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group hover:shadow-xl transition-all duration-500 text-center border-border/50 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent-foreground border-accent/20">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Milestones & Growth
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-primary/20" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`relative flex items-center mb-12 animate-fade-in ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-trust/10 text-trust border-trust/20">
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Meet the Changemakers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together environmental science, technology, 
              and business innovation to drive sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="group hover:shadow-xl transition-all duration-500 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg bg-primary/10 text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 mr-3" />
              <h2 className="text-3xl lg:text-5xl font-bold">
                Join Our Mission
              </h2>
            </div>
            <p className="text-xl opacity-90 leading-relaxed">
              Be part of the circular economy revolution. Together, we can create a sustainable 
              future where waste becomes worth and communities thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg hover-scale"
                asChild
              >
                <Link to="/services">Start Your Journey</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;