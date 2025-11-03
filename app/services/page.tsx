"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Sprout, TrendingUp, Droplets, Sun, Leaf, ArrowRight } from "@/components/icons"
import { useEffect } from "react"

import { PageContainer } from "@/components/ui/page-container"

export default function ServicesPage() {
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

  const services = [
    {
      icon: BookOpen,
      title: "Formation Agricole",
      description: "Programmes de formation complets sur les techniques agricoles modernes et durables",
      features: [
        "Techniques de culture biologique",
        "Gestion des sols et compostage",
        "Protection naturelle des cultures",
        "Certification et normes qualité",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Suivi individuel et collectif pour garantir le succès de vos projets agricoles",
      features: [
        "Coaching individuel",
        "Visites sur le terrain",
        "Résolution de problèmes",
        "Mentorat par des expertes",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Sprout,
      title: "Agroécologie",
      description: "Transition vers des pratiques agricoles respectueuses de l'environnement",
      features: [
        "Permaculture et biodiversité",
        "Agriculture régénérative",
        "Semences locales",
        "Écosystèmes agricoles",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Droplets,
      title: "Gestion de l'Eau",
      description: "Solutions d'irrigation efficaces et économiques pour optimiser vos ressources",
      features: [
        "Systèmes d'irrigation goutte-à-goutte",
        "Récupération d'eau de pluie",
        "Gestion des ressources hydriques",
        "Technologies d'économie d'eau",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: TrendingUp,
      title: "Développement Économique",
      description: "Stratégies pour améliorer la rentabilité et la commercialisation de vos produits",
      features: [
        "Étude de marché",
        "Stratégies de commercialisation",
        "Accès au financement",
        "Gestion d'entreprise agricole",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Sun,
      title: "Énergies Renouvelables",
      description: "Intégration de solutions énergétiques durables dans vos exploitations",
      features: ["Panneaux solaires agricoles", "Pompage solaire", "Séchage solaire", "Autonomie énergétique"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ]

  return (
    <PageContainer>
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 fade-in-element">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            <span>Nos Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Des Solutions <span className="text-primary">Complètes</span> pour Votre Réussite
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Découvrez notre gamme de services conçus pour accompagner votre transition vers une agriculture durable et
            rentable au Sénégal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="fade-in-element group border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full group/btn hover:bg-primary/10 transition-all duration-300"
                >
                  <Link href="/contact">
                    <span className="flex items-center justify-center gap-2">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="fade-in-element border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-12 text-center space-y-6">
            <Leaf className="h-16 w-16 text-primary mx-auto animate-float" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <span className="flex items-center gap-2">
                  Nous contacter
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </PageContainer>
  )
}
