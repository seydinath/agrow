import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "@/components/icons"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-card via-muted/30 to-card border-t border-border">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
              <Logo asLink={false} size={56} className="rounded-md shadow-sm" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ensemble pour une agriculture durable et une écologie prospère au Sénégal.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-xl glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1 shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Nos Services</h3>
            <ul className="space-y-3">
              {["Formation Agricole", "Conseil Écologique", "Accompagnement", "Ressources"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                </div>
                <span className="pt-2">Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                </div>
                <span>+221 XX XXX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                </div>
                <a
                  href="mailto:agrowoman@agrowomanecology.com"
                  className="hover:text-primary transition-colors duration-300"
                  aria-label="Envoyer un email à la direction"
                >
                  agrowoman@agrowomanecology.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">AgroWomanEcology</span>. Tous
            droits réservés.
          </p>
        </div>
      </div>
      {/* Decorative images hidden to avoid layout spacing issues; re-enable if needed */}
      <div className="hidden absolute bottom-0 left-0 opacity-5 pointer-events-none">
        <img src="/plant-leaves-decoration.jpg" alt="" className="w-40 h-40" />
      </div>
      <div className="hidden absolute top-0 right-0 opacity-5 pointer-events-none">
        <img src="/agriculture-plant-decoration.jpg" alt="" className="w-40 h-40" />
      </div>
    </footer>
  )
}
