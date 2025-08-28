import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  Leaf, 
  Package, 
  Truck, 
  Award,
  MapPin,
  Clock,
  Users,
  Sprout,
  Zap,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Package },
    { id: "compost", name: "Premium Compost", icon: Leaf },
    { id: "seeds", name: "Organic Seeds", icon: Sprout },
    { id: "tools", name: "Eco Tools", icon: Award },
    { id: "kits", name: "Growing Kits", icon: Package }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Organic Compost",
      category: "compost",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.9,
      reviews: 234,
      image: "/api/placeholder/300/200",
      badge: "Best Seller",
      description: "Nutrient-rich compost made from restaurant organic waste",
      features: ["100% Organic", "pH Balanced", "Pathogen Free", "Rich in Nutrients"],
      supplier: "EcoHassel Farms",
      location: "Local Farm, 15km away",
      inStock: true
    },
    {
      id: 2,
      name: "Urban Garden Starter Kit",
      category: "kits",
      price: "$49.99",
      rating: 4.8,
      reviews: 156,
      image: "/api/placeholder/300/200",
      badge: "Popular",
      description: "Complete kit for starting your urban garden",
      features: ["5kg Premium Compost", "Organic Seeds Pack", "Eco-Friendly Pots", "Growing Guide"],
      supplier: "GreenSpace Solutions",
      location: "Urban Center, 8km away",
      inStock: true
    },
    {
      id: 3,
      name: "Heirloom Vegetable Seeds",
      category: "seeds",
      price: "$19.99",
      rating: 4.7,
      reviews: 89,
      image: "/api/placeholder/300/200",
      badge: "Eco-Certified",
      description: "Carefully selected heirloom varieties",
      features: ["Non-GMO", "Heirloom Varieties", "High Germination", "Organic Certified"],
      supplier: "Heritage Seeds Co.",
      location: "Regional Farm, 45km away",
      inStock: true
    },
    {
      id: 4,
      name: "Bamboo Garden Tool Set",
      category: "tools",
      price: "$34.99",
      rating: 4.6,
      reviews: 67,
      image: "/api/placeholder/300/200",
      badge: "Sustainable",
      description: "Eco-friendly bamboo gardening tools",
      features: ["Bamboo Handle", "Stainless Steel", "Ergonomic Design", "Durable"],
      supplier: "EcoTools Ltd.",
      location: "Manufacturing Hub, 23km away",
      inStock: false
    }
  ];

  const suppliers = [
    {
      name: "EcoHassel Farms",
      rating: 4.9,
      products: 28,
      location: "Local Region",
      speciality: "Premium Compost",
      verified: true
    },
    {
      name: "GreenSpace Solutions",
      rating: 4.8,
      products: 15,
      location: "Urban Center",
      speciality: "Urban Gardening",
      verified: true
    },
    {
      name: "Heritage Seeds Co.",
      rating: 4.7,
      products: 45,
      location: "Regional Farm",
      speciality: "Heirloom Seeds",
      verified: true
    }
  ];

  const filteredProducts = featuredProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Eco Marketplace
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              Shop <span className="text-primary">Sustainable</span> Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Discover premium compost, organic seeds, and eco-friendly gardening supplies. 
              Connect directly with local suppliers and farmers in our sustainable marketplace.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex gap-4 animate-fade-in">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center">
                        <category.icon className="w-4 h-4 mr-2" />
                        {category.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap hover-scale animate-fade-in ${
                  selectedCategory === category.id ? "bg-primary text-primary-foreground" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="products" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {filteredProducts.length} Products Found
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedCategory === "all" ? "All categories" : categories.find(c => c.id === selectedCategory)?.name}
                  </p>
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-border/50 hover:border-primary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Package className="w-16 h-16 text-primary/40" />
                      </div>
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                          <Badge variant="secondary">Out of Stock</Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{product.price}</div>
                          {product.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="ml-1 font-medium">{product.rating}</span>
                        </div>
                        <span className="text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {product.location}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {product.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 hover-scale" 
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="icon" className="hover-scale">
                          <Star className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suppliers" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Trusted Suppliers</h2>
                <p className="text-muted-foreground">Connect with verified local suppliers and farmers</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {suppliers.map((supplier, index) => (
                  <Card 
                    key={supplier.name} 
                    className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <CardTitle className="flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                        {supplier.name}
                        {supplier.verified && (
                          <Shield className="w-4 h-4 text-primary" />
                        )}
                      </CardTitle>
                      <CardDescription>{supplier.speciality}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-medium">{supplier.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{supplier.products} products</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {supplier.location}
                      </div>

                      <Button className="w-full hover-scale" asChild>
                        <Link to={`/supplier/${supplier.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Products
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Shop With Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>Same-day delivery for local products</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Quality Guaranteed</CardTitle>
                <CardDescription>100% satisfaction guarantee on all products</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Leaf className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle>Eco-Friendly</CardTitle>
                <CardDescription>Supporting sustainable farming practices</CardDescription>
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
              Start Your Sustainable Garden Today
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of gardeners who are growing sustainably with our premium 
              eco-friendly products and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg hover-scale"
                asChild
              >
                <Link to="/contact">Get Growing Tips</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale"
                asChild
              >
                <Link to="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;