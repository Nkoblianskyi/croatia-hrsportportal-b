"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card sticky top-0 left-0 right-0 z-50 border-b-2 border-primary/20 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center group">
            <div className="text-xl md:text-3xl font-display font-bold text-foreground tracking-tight">
              HR<span className="text-primary">Sport</span>
              <span className="text-accent">Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Početna
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              O Nama
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Kolačići
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Privatnost
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Početna
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                O Nama
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kolačići
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privatnost
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
