"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Leaf } from "@/components/icons"
import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import { useToast } from "@/hooks/use-toast"
import { PageContainer } from "@/components/ui/page-container"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const { toast } = useToast()
  const displayEmail = process.env.NEXT_PUBLIC_CONTACT_TO || "agrowomanecology@gmail.com"

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

  const missingVars = () => {
    const vars: { key: string; value?: string }[] = [
      { key: 'NEXT_PUBLIC_EMAILJS_SERVICE_ID', value: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID },
      { key: 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', value: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID },
      { key: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', value: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
    ]
    return vars.filter(v => !v.value).map(v => v.key)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Champs requis manquants", description: "Veuillez remplir les champs obligatoires.", variant: "destructive" })
      return
    }
    setIsSending(true)
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO
      const missing = missingVars()
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          `EmailJS configuration manquante (${missing.join(', ') || 'inconnue'}). Vérifiez votre .env.local et Vercel env.`,
        )
      }

      const params: Record<string, any> = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone || "N/A",
        message: formData.message,
        to_name: "Equipe AgroWomanEcology",
        site_origin: typeof window !== "undefined" ? window.location.origin : "",
      }
      if (toEmail) params.to_email = toEmail

      await emailjs.send(serviceId, templateId, params, { publicKey })

      toast({
        title: "Message envoyé",
        description: "Votre message a été transmis. Nous vous répondrons rapidement.",
      })
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (err: any) {
      console.error(err)
      toast({
        title: "Échec de l'envoi",
        description: err?.message || "Une erreur est survenue.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageContainer>
        {/* Banner config manquante */}
        {missingVars().length > 0 && (
          <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            EmailJS non configuré : {missingVars().join(', ')} manquant(s). Ajoutez-les dans votre fichier <code>.env.local</code> ou variables Vercel.
          </div>
        )}
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 fade-in-element">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            <span>Contactez-nous</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
            Parlons de Votre <span className="text-primary">Projet</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-prose mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre démarche
            vers une agriculture durable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: "Dakar, Sénégal",
                color: "text-primary",
              },
              {
                icon: Phone,
                title: "Téléphone",
                content: "+221 XX XXX XX XX",
                color: "text-secondary",
              },
              {
                icon: Mail,
                title: "Email",
                content: displayEmail,
                color: "text-primary",
              },
              {
                icon: Clock,
                title: "Horaires",
                content: "Lun - Ven: 8h - 17h",
                color: "text-secondary",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="fade-in-element group border-2 hover:border-primary transition-all duration-500 hover:shadow-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.title === "Email" ? (
                        <a
                          href={`mailto:${displayEmail}`}
                          className="text-primary underline-offset-4 hover:underline"
                        >
                          {item.content}
                        </a>
                      ) : (
                        item.content
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              className="fade-in-element border-2 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+221 XX XXX XX XX"
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de votre projet..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className="w-full group bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:pointer-events-none text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSending ? "Envoi en cours..." : "Envoyer le message"}
                      <Mail className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-12 fade-in-element border-2 overflow-hidden" style={{ animationDelay: "300ms" }}>
          <div className="h-96 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-16 w-16 text-primary mx-auto animate-float" />
              <p className="text-lg sm:text-xl font-semibold text-foreground">Carte de localisation</p>
              <p className="text-muted-foreground">Dakar, Sénégal</p>
            </div>
          </div>
        </Card>
    </PageContainer>
  )
}
