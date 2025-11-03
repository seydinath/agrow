"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sprout, Users, TrendingUp, Leaf, Droplets, Sun } from "@/components/icons"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-element")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/african-woman-farmer-in-senegal-green-fields-agric.jpg"
            alt="Agriculture au Sénégal"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/75" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 animate-float opacity-30">
            <Sprout className="h-24 w-24 text-primary" />
          </div>
          <div className="absolute top-40 right-20 animate-float-slow opacity-25" style={{ animationDelay: "1s" }}>
            <Leaf className="h-32 w-32 text-secondary" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-float opacity-20" style={{ animationDelay: "2s" }}>
            <Droplets className="h-20 w-20 text-accent" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float-slow opacity-25" style={{ animationDelay: "3s" }}>
            <Sun className="h-28 w-28 text-primary" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect text-primary text-sm font-medium animate-scale-in shadow-lg">
              <Leaf className="h-4 w-4" />
              <span>Agriculture Durable au Sénégal</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight animate-fade-in-up text-balance drop-shadow-lg">
              Cultivons l'avenir de <span className="text-primary animate-pulse-glow">l'agriculture</span> ensemble
            </h1>

            <p className="text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-pretty drop-shadow-md">
              AgroWomanEcology accompagne les femmes et les communautés du Sénégal vers une agriculture écologique et
              prospère.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110 animate-pulse-glow"
              >
                <Link href="/services">
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    Découvrir nos services
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 animate-shimmer" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-500 hover:scale-110 glass-effect shadow-xl font-semibold bg-transparent"
              >
                <Link href="/about">
                  <span className="flex items-center gap-2 text-foreground">En savoir plus</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <img src="/tropical-plant-leaves-green.jpg" alt="" className="w-64 h-64 animate-float" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none">
          <img src="/agriculture-seedling-growing.jpg" alt="" className="w-64 h-64 animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour une agriculture durable et rentable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sprout,
                title: "Agriculture Biologique",
                description: "Techniques modernes pour une production saine et respectueuse de l'environnement",
                color: "text-primary",
              },
              {
                icon: Users,
                title: "Formation & Accompagnement",
                description: "Programmes adaptés pour développer vos compétences agricoles",
                color: "text-secondary",
              },
              {
                icon: Droplets,
                title: "Gestion de l'Eau",
                description: "Solutions d'irrigation efficaces et durables pour vos cultures",
                color: "text-accent",
              },
              {
                icon: TrendingUp,
                title: "Développement Économique",
                description: "Stratégies pour améliorer la rentabilité de votre exploitation",
                color: "text-primary",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group fade-in-element border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 glass-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <Leaf className="h-32 w-32" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float-slow">
            <Sprout className="h-40 w-40" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "500+", label: "Femmes Formées" },
              { value: "50+", label: "Projets Réalisés" },
              { value: "15+", label: "Années d'Expérience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="fade-in-element glass-effect p-8 rounded-2xl hover:scale-110 transition-transform duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl md:text-7xl font-bold mb-2 animate-pulse-glow">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-2xl">
            <CardContent className="p-12 text-center space-y-6 relative z-10">
              <Sun className="h-20 w-20 text-primary mx-auto animate-float drop-shadow-lg" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Prête à transformer votre agriculture ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Rejoignez notre communauté et bénéficiez de notre expertise pour développer une agriculture durable et
                rentable.
              </p>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:via-secondary hover:to-primary text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110 animate-pulse-glow"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2 font-semibold text-lg">
                    Commencer maintenant
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 animate-shimmer" />
                </Link>
              </Button>
            </CardContent>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <img src="/lush-green-plants-agriculture.jpg" alt="" className="w-80 h-80" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
