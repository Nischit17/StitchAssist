"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  // GSAP animation for footer
  useEffect(() => {
    try {
      const footerElements = document.querySelectorAll(".footer-animate");

      footerElements.forEach((element, index) => {
        gsap.from(element, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.1 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        });
      });
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
  }, []);

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="footer-animate">
            <h3 className="text-lg font-bold mb-4">StitchAssist</h3>
            <p className="text-gray-600 mb-4">
              Your ultimate tailoring companion. We provide high-quality
              tailoring supplies, tools, and resources to help you create
              beautiful garments.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-animate">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-animate">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary mt-0.5" />
                <span className="text-gray-600">
                  123 Stitch Street, Tailorville, TS 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-600">info@stitchassist.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-animate">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates, tips, and
              special offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="footer-animate mb-4 md:mb-0">
            © {new Date().getFullYear()} StitchAssist. All rights reserved.
          </div>
          <div className="footer-animate flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/shipping-policy"
              className="hover:text-primary transition-colors"
            >
              Shipping Policy
            </Link>
            <Link
              href="/return-policy"
              className="hover:text-primary transition-colors"
            >
              Return Policy
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
