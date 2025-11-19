"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Award, Users, Leaf, Sprout, Droplets, TrendingUp } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from "react"

import { PageContainer } from "@/components/ui/page-container"

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
    <PageContainer>
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 fade-in-element">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            <span>Notre Histoire</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
            À Propos de <span className="text-primary">AgroWomanEcology</span>
          </h1>
          <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-prose mx-auto space-y-4">
            <p>
              AgroWomanEcology est une initiative engagée qui soutient les femmes du Sénégal et les acteurs agricoles
              dans la transition vers une agriculture moderne, écologique et économiquement viable.
            </p>
            <p>
              Nous aidons les communautés à adopter des pratiques durables, à améliorer leurs revenus et à protéger
              l’environnement pour les générations futures.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 mb-16 lg:mb-20">
          <Card className="fade-in-element border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">Notre Mission</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Accompagner les femmes agricultrices du Sénégal dans leur transition vers&nbsp;:
                </p>
                <ul className="list-disc pl-5 marker:text-primary text-left">
                  <li>une agriculture durable,</li>
                  <li>une gestion responsable des ressources (eau, sols, semences),</li>
                  <li>une meilleure productivité,</li>
                  <li>et une autonomie économique durable.</li>
                </ul>
                <p>
                  Nous créons les conditions pour que chaque femme puisse réussir son exploitation, augmenter ses
                  revenus et participer pleinement au développement agricole du pays.
                </p>
              </div>
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
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">Notre Vision</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Créer un écosystème agricole sénégalais où&nbsp;:</p>
                <ul className="list-disc pl-5 marker:text-secondary text-left">
                  <li>les femmes sont actrices-clés du changement,</li>
                  <li>les exploitations sont résilientes face aux défis climatiques,</li>
                  <li>les ressources naturelles sont protégées,</li>
                  <li>et où l'agriculture rime avec innovation, rentabilité et respect de la terre.</li>
                </ul>
                <p>
                  Nous rêvons d'un Sénégal où chaque femme qui cultive nourrit une nation plus forte.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-10 sm:mb-12 fade-in-element">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elles guident chacune de nos actions. Nous travaillons aux côtés des communautés rurales avec engagement et proximité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Engagement",
                description: "Nous nous engageons pleinement auprès des communautés que nous servons.",
              },
              {
                icon: Users,
                title: "Solidarité",
                description: "Nous croyons en la coopération, l'entraide et les réseaux de femmes.",
              },
              {
                icon: Leaf,
                title: "Durabilité",
                description: "L'environnement est au centre de toutes nos décisions et technologies.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Nous recherchons des solutions de haute qualité, adaptées au contexte local.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Nous introduisons des techniques agricoles modernes et efficaces, accessibles à toutes.",
              },
              {
                icon: Heart,
                title: "Respect",
                description: "Nous valorisons les savoirs traditionnels, les cultures locales et les réalités sociales.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="fade-in-element group border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-5 sm:p-6 space-y-3">
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

        {/* Notre Approche */}
        <section aria-labelledby="approche-title" className="mb-20 fade-in-element">
          <div className="text-center mb-10 sm:mb-12">
            <h2 id="approche-title" className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Notre Approche
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-prose mx-auto">
              Une méthode holistique, pratique et profondément humaine.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[ 
              { icon: Sprout, title: "Formation agricole", desc: "Transmettre des compétences modernes et adaptées aux réalités locales." },
              { icon: Users, title: "Appui terrain", desc: "Accompagnement de proximité et suivi des pratiques au quotidien." },
              { icon: Droplets, title: "Gestion de l’eau", desc: "Techniques d’irrigation efficaces et préservation de la ressource." },
              { icon: TrendingUp, title: "Économie durable", desc: "Appui à la rentabilité, aux marchés et aux coopérations." },
              { icon: Leaf, title: "Savoirs locaux", desc: "Valoriser les connaissances et cultures des communautés." },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="group border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/services">Découvrir nos programmes</a>
            </Button>
          </div>
        </section>

        {/* Pourquoi nous existons ? */}
        <section aria-labelledby="pourquoi-title" className="mb-20 fade-in-element">
          <div className="text-center mb-10 sm:mb-12">
            <h2 id="pourquoi-title" className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Pourquoi nous existons ?
            </h2>
          </div>
          <div className="max-w-prose mx-auto text-lg sm:text-xl text-muted-foreground space-y-4">
            <p>
              Parce que les femmes représentent la majorité des forces agricoles, mais manquent souvent&nbsp;:
            </p>
            <ul className="list-disc pl-5 marker:text-primary text-left">
              <li>de moyens,</li>
              <li>techniques de formation,</li>
              <li>d'accès à l'eau,</li>
              <li>et d'accompagnement pour améliorer leurs productions.</li>
            </ul>
            <p>
              Nous sommes là pour combler ce vide et devenir leurs alliés pour une agriculture plus productive,
              écologique et rentable.
            </p>
          </div>
        </section>

        {/* Story */}
        <Card className="fade-in-element border-2 bg-linear-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
          {/* Decorative background image with veil */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/agriculture-seedling-growing.jpg"
              alt="Illustration agroécologie"
              fill
              sizes="100vw"
              className="object-cover opacity-20"
              priority={false}
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <CardContent className="p-12 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
              Notre Histoire
            </h2>
            <div className="max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                AgroWomanEcology est née d'une conviction simple mais puissante : l'avenir de l'agriculture
                sénégalaise passe par les femmes.
              </p>
              <p className="leading-relaxed">
                Le projet a démarré modestement, avec l'ambition d'aider un groupe de femmes à améliorer leurs
                techniques agricoles, gérer l'eau durablement et sécuriser leurs récoltes.
              </p>
              <div className="space-y-3">
                <p>Au fil du temps, notre action s'est élargie :</p>
                <ul className="list-disc pl-5 marker:text-primary text-left">
                  <li>formations en agroécologie,</li>
                  <li>accompagnement de projets agricoles féminins,</li>
                  <li>mise en place de systèmes d'irrigation,</li>
                  <li>promotion des semences locales,</li>
                  <li>introduction de solutions solaires pour l'eau et l'énergie,</li>
                  <li>renforcement des compétences économiques et commerciales.</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                Aujourd'hui, AgroWomanEcology se positionne comme une référence dans l'accompagnement agricole féminin
                au Sénégal, avec des interventions variées allant de la production de papaye jusqu'à la gestion de l'eau
                et de l'irrigation.
              </p>
              <p className="leading-relaxed">Et ceci n'est qu'un début 🌍✨</p>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mt-12 fade-in-element border-2 bg-linear-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8 sm:p-10 text-center">
            <p className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-3">
              AgroWomanEcology porte une ambition&nbsp;:
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Donner aux femmes agricoles du Sénégal les outils, les connaissances et la confiance nécessaires pour
              transformer leurs exploitations et bâtir un avenir prospère pour leurs familles.
            </p>
          </CardContent>
        </Card>
    </PageContainer>
  )
}
