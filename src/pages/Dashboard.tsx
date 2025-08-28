import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  TrendingUp, 
  Leaf, 
  Calendar, 
  Package, 
  Award, 
  BarChart3,
  Recycle,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Bell,
  Settings,
  Plus,
  Eye,
  Users,
  Truck
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Waste Collected",
      value: "2,847 kg",
      change: "+12%",
      changeType: "positive",
      icon: Recycle,
      color: "primary"
    },
    {
      title: "CO₂ Saved",
      value: "1,420 kg",
      change: "+8%",
      changeType: "positive",
      icon: Leaf,
      color: "secondary"
    },
    {
      title: "Pickups Completed",
      value: "156",
      change: "+15%",
      changeType: "positive",
      icon: Truck,
      color: "accent"
    },
    {
      title: "EcoPoints Earned",
      value: "8,947",
      change: "+23%",
      changeType: "positive",
      icon: Award,
      color: "trust"
    }
  ];

  const recentPickups = [
    {
      id: "PU-001",
      date: "2024-01-15",
      time: "09:30 AM",
      weight: "12.5 kg",
      status: "completed",
      location: "Main Kitchen",
      points: 125
    },
    {
      id: "PU-002",
      date: "2024-01-14",
      time: "02:15 PM",
      weight: "8.3 kg",
      status: "completed",
      location: "Prep Area",
      points: 83
    },
    {
      id: "PU-003",
      date: "2024-01-13",
      time: "11:45 AM",
      weight: "15.2 kg",
      status: "completed",
      location: "Main Kitchen",
      points: 152
    },
    {
      id: "PU-004",
      date: "2024-01-16",
      time: "10:00 AM",
      weight: "0 kg",
      status: "scheduled",
      location: "Main Kitchen",
      points: 0
    }
  ];

  const compostProduced = [
    {
      batch: "CP-2024-001",
      date: "2024-01-10",
      weight: "45.2 kg",
      quality: "Premium",
      status: "Ready",
      yourContribution: "12.5 kg"
    },
    {
      batch: "CP-2024-002",
      date: "2024-01-08",
      weight: "38.7 kg",
      quality: "Premium",
      status: "Sold",
      yourContribution: "10.2 kg"
    },
    {
      batch: "CP-2024-003",
      date: "2024-01-12",
      weight: "52.1 kg",
      quality: "Premium",
      status: "Processing",
      yourContribution: "15.8 kg"
    }
  ];

  const upcomingPickups = [
    {
      date: "Today",
      time: "2:00 PM",
      location: "Main Kitchen",
      type: "Regular Pickup"
    },
    {
      date: "Tomorrow",
      time: "10:00 AM",
      location: "Prep Area",
      type: "Regular Pickup"
    },
    {
      date: "Friday",
      time: "9:30 AM",
      location: "Main Kitchen",
      type: "Regular Pickup"
    }
  ];

  const achievements = [
    {
      title: "Eco Warrior",
      description: "Diverted 1000kg+ from landfills",
      earned: true,
      date: "Jan 2024"
    },
    {
      title: "Consistency Champion",
      description: "30 consecutive pickups",
      earned: true,
      date: "Dec 2023"
    },
    {
      title: "Carbon Hero",
      description: "Saved 500kg+ CO₂",
      earned: true,
      date: "Nov 2023"
    },
    {
      title: "Sustainability Leader",
      description: "Reach 2000kg waste diverted",
      earned: false,
      progress: 85
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Green Bistro!</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Avatar>
                <AvatarImage src="/api/placeholder/40/40" />
                <AvatarFallback className="bg-primary/10 text-primary">GB</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center group-hover:bg-${stat.color}/20 transition-colors`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${stat.changeType === 'positive' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}
                  >
                    {stat.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pickups">Pickups</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Upcoming Pickups */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Upcoming Pickups
                  </CardTitle>
                  <CardDescription>Your scheduled waste collection times</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingPickups.map((pickup, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{pickup.date} at {pickup.time}</p>
                            <p className="text-sm text-muted-foreground">{pickup.location} • {pickup.type}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule New Pickup
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule Pickup
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link to="/marketplace">
                      <Package className="w-4 h-4 mr-2" />
                      Buy Compost
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Award className="w-4 h-4 mr-2" />
                    Redeem Points
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recent Pickups
                </CardTitle>
                <CardDescription>Your latest waste collection history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPickups.map((pickup) => (
                    <div key={pickup.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          pickup.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {pickup.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-medium">{pickup.id} • {pickup.weight}</p>
                          <p className="text-sm text-muted-foreground">
                            {pickup.date} at {pickup.time} • {pickup.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={pickup.status === 'completed' ? 'default' : 'secondary'}>
                          {pickup.status === 'completed' ? 'Completed' : 'Scheduled'}
                        </Badge>
                        {pickup.points > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">+{pickup.points} points</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pickups" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Pickups</CardTitle>
                <CardDescription>Complete history of your waste collections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPickups.map((pickup) => (
                    <div key={pickup.id} className="grid grid-cols-5 gap-4 p-4 bg-muted/50 rounded-lg items-center">
                      <div>
                        <p className="font-medium">{pickup.id}</p>
                        <p className="text-sm text-muted-foreground">{pickup.date}</p>
                      </div>
                      <div>
                        <p className="text-sm">{pickup.time}</p>
                        <p className="text-sm text-muted-foreground">{pickup.location}</p>
                      </div>
                      <div>
                        <p className="font-medium">{pickup.weight}</p>
                      </div>
                      <div>
                        <Badge variant={pickup.status === 'completed' ? 'default' : 'secondary'}>
                          {pickup.status === 'completed' ? 'Completed' : 'Scheduled'}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">+{pickup.points} pts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    Environmental Impact
                  </CardTitle>
                  <CardDescription>Your contribution to sustainability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Waste Diverted</span>
                      <span className="text-sm text-muted-foreground">2,847 kg / 3,000 kg</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">CO₂ Saved</span>
                      <span className="text-sm text-muted-foreground">1,420 kg / 1,500 kg</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Monthly Goal</span>
                      <span className="text-sm text-muted-foreground">156 / 200 pickups</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-secondary" />
                    Compost Production
                  </CardTitle>
                  <CardDescription>Track how your waste becomes compost</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {compostProduced.map((batch, index) => (
                      <div key={batch.batch} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{batch.batch}</p>
                          <p className="text-xs text-muted-foreground">
                            Your contribution: {batch.yourContribution}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={batch.status === 'Ready' ? 'default' : batch.status === 'Sold' ? 'secondary' : 'outline'}
                          >
                            {batch.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{batch.weight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-foreground" />
                    EcoPoints Balance
                  </CardTitle>
                  <CardDescription>Your available rewards balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">8,947</div>
                    <p className="text-muted-foreground">EcoPoints Available</p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <Button className="w-full" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Redeem Now
                      </Button>
                      <Button className="w-full" variant="outline" asChild>
                        <Link to="/marketplace">
                          <Package className="w-4 h-4 mr-2" />
                          Shop
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your sustainability milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                        }`}>
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          {!achievement.earned && achievement.progress && (
                            <Progress value={achievement.progress} className="h-1 mt-2" />
                          )}
                        </div>
                        <div className="text-right">
                          {achievement.earned ? (
                            <Badge variant="default">Earned</Badge>
                          ) : (
                            <Badge variant="outline">{achievement.progress}%</Badge>
                          )}
                          {achievement.date && (
                            <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;