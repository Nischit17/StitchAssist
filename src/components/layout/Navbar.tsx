"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for navbar on mount
  useEffect(() => {
    try {
      gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
  }, []);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            StitchAssist
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      HOME
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      ABOUT
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>SHOP</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/products"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              All Products
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Browse our complete collection of tailoring
                              products
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          href="/products/category/fabrics"
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Fabrics
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Premium fabrics for all your tailoring needs
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/category/tools"
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Tools
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional tailoring tools and accessories
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/category/patterns"
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Patterns
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Sewing patterns for various garments
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      CONTACT
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  0
                </span>
              </div>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>StitchAssist</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-4">
                    <div className="space-y-3">
                      <Link
                        href="/"
                        className="block text-lg font-medium transition-colors hover:text-primary"
                      >
                        HOME
                      </Link>
                      <Link
                        href="/about"
                        className="block text-lg font-medium transition-colors hover:text-primary"
                      >
                        ABOUT
                      </Link>
                      <div className="relative">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="link"
                              className="text-lg font-medium p-0 h-auto text-left w-full justify-start"
                            >
                              SHOP
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" className="w-56">
                            <DropdownMenuItem asChild>
                              <Link href="/products" className="w-full">
                                All Products
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/products/category/fabrics"
                                className="w-full"
                              >
                                Fabrics
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/products/category/tools"
                                className="w-full"
                              >
                                Tools
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/products/category/patterns"
                                className="w-full"
                              >
                                Patterns
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Link
                        href="/contact"
                        className="block text-lg font-medium transition-colors hover:text-primary"
                      >
                        CONTACT
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
