"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Award, Users, Leaf } from "@/components/icons"
import { useEffect } from "react"

export default function AboutPage() {
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
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 fade-in-element">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            <span>Notre Histoire</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            À Propos de <span className="text-primary">AgroWomanEcology</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Nous sommes une organisation dédiée à l'autonomisation des femmes dans le secteur agricole sénégalais, en
            promouvant des pratiques écologiques et durables pour un avenir meilleur.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="fade-in-element border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Accompagner les femmes agricultrices du Sénégal dans leur transition vers des pratiques agricoles
                durables et rentables, tout en préservant l'environnement pour les générations futures.
              </p>
            </CardContent>
          </Card>

          <Card
            className="fade-in-element border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group"
            style={{ animationDelay: "100ms" }}
          >
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground">Notre Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Créer un écosystème agricole sénégalais où les femmes sont des actrices clés du développement durable,
                avec accès aux ressources, formations et technologies nécessaires à leur réussite.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Engagement",
                description: "Nous nous engageons pleinement auprès des communautés que nous servons",
              },
              {
                icon: Users,
                title: "Solidarité",
                description: "Nous croyons en la force du collectif et de l'entraide",
              },
              {
                icon: Leaf,
                title: "Durabilité",
                description: "Nous plaçons l'environnement au cœur de toutes nos actions",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Nous visons l'excellence dans tous nos programmes et formations",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Nous adoptons les meilleures pratiques et technologies",
              },
              {
                icon: Heart,
                title: "Respect",
                description: "Nous respectons les savoirs traditionnels et les cultures locales",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="fade-in-element group border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <Card className="fade-in-element border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
              Notre Histoire
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Fondée en 2010, AgroWomanEcology est née de la conviction que les femmes sont des actrices essentielles
                du développement agricole au Sénégal. Notre organisation a débuté avec un petit groupe de femmes
                agricultrices déterminées à transformer leurs pratiques agricoles.
              </p>
              <p className="leading-relaxed">
                Au fil des années, nous avons développé des programmes de formation innovants, établi des partenariats
                stratégiques et accompagné des centaines de femmes dans leur transition vers une agriculture durable.
                Aujourd'hui, nous sommes fières d'être reconnues comme une référence dans le domaine de l'agroécologie
                au Sénégal.
              </p>
              <p className="leading-relaxed">
                Notre approche holistique combine formation technique, accompagnement personnalisé, accès aux ressources
                et création de réseaux de solidarité. Nous continuons d'innover et d'adapter nos programmes pour
                répondre aux défis contemporains de l'agriculture sénégalaise.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
