"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Palette, Smartphone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl px-6 md:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo space - replace with your actual logo */}
            <div className="w-32 h-8 rounded flex items-center justify-center">
              {/* Replace with your logo png */}
              <Image src="/Logo.png" alt="Logo" width={78} height={16} className="object-contain" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#home" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <a href="/resume.pdf" download>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 md:py-32">
        <div className="container max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit border-pink-200 text-pink-600 bg-pink-50">
                  UI/UX Designer
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Hi, {"I'm"}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                    {" "}
                    Ana Paula Nóbrega
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  {"I'm"} passionate about creating intuitive interfaces and memorable digital experiences for web and
                  mobile applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#projects">
                  <Button
                    size="lg"
                    className="w-fit bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" size="lg" className="w-fit">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/anapaulaonc" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/ana-paula-n%C3%B3brega/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:anapaulaoncosta@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-500/20 via-rose-400/20 to-purple-500/20 p-8">
                <Image
                  src="/anapaula.jpeg"
                  alt="Ana Paula Oliveira da Nóbrega Costa"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-muted/50">
        <div className="container max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">About Me</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">Bringing ideas to digital life</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                I enjoy working on digital design projects and have experience creating interfaces that focus on user
                experience. My approach combines user research, design thinking, and current UI/UX trends to deliver
                solutions that make a difference.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {"I'm"} always eager to learn new techniques and collaborate with teams to create meaningful digital
                experiences. Whether {"it's"} a mobile app, web interface, or brand identity, I love the process of
                turning concepts into reality.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Users className="h-5 w-5 text-pink-500" />
                  <span className="font-semibold text-2xl">5+</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Smartphone className="h-5 w-5 text-pink-500" />
                  <span className="font-semibold text-2xl">6+</span>
                </div>
                <p className="text-sm text-muted-foreground">Apps Designed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Palette className="h-5 w-5 text-pink-500" />
                  <span className="font-semibold text-2xl">2+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-pink-500" />
                  <span className="font-semibold text-2xl">5+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="outline">My Projects</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">Featured Work</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">A selection of my design projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow">
                  <div className="relative aspect-square">
                    <Image
                      src="/image5.jpeg"
                      alt="Financial System Project"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Financial System</h3>
                  <p className="text-sm text-muted-foreground">
                    Financial system UI design for a banking app with a focus on user experience
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow">
                  <div className="relative aspect-square">
                    <Image
                      src="/image4.jpeg"
                      alt="Tasks Organizer Project"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Tasks Organizer</h3>
                  <p className="text-sm text-muted-foreground">
                    Task management app design with a focus on productivity and user engagement
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow">
                  <div className="relative aspect-square">
                    <Image
                      src="/image2.jpeg"
                      alt="Gym App Project"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Gym App</h3>
                  <p className="text-sm text-muted-foreground">Gym AI app design with modern interface</p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow">
                  <div className="relative aspect-square">
                    <Image
                      src="/image3.jpeg"
                      alt="Forms App Project"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Forms App</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating and managing forms with a user-friendly minimalist interface
                  </p>
                </div>
              </div>

              {/* Project 5 */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow">
                  <div className="relative aspect-square">
                    <Image
                      src="/image1.jpeg"
                      alt="University Schedule App Project"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">University Schedule App</h3>
                  <p className="text-sm text-muted-foreground">
                    App design for managing university schedules, classes, and assignments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/50">
        <div className="container max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <Badge variant="outline">Contact</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">{"Let's"} work together</h2>
              <p className="text-muted-foreground">
                {"I'm"} always open to new projects and opportunities. Get in touch to discuss how we can bring your
                ideas to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-500" />
                <span>anapaulaoncosta@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-500" />
                <span>Brasilia, Brazil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Ana Paula Oliveira da Nóbrega Costa</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 All rights reserved.</p>
            <div className="text-sm text-muted-foreground">UI/UX Designer</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
