"use client"

import Link from "next/link"
import { Menu, Hexagon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import logo from "../../public/logo.png"
import Image from "next/image"
import { DropdownMenuAvatar } from "./DropdownMenuAvatar"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
];

export function Navbar({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 container items-center justify-between gap-4 px-4 md:px-6">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2" aria-label="Home">
                    <Image className="w-14 h-14" src={logo} alt="logo" />
                    <span className="text-lg font-semibold tracking-tight ">Prisma Press</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "rounded-md px-3 py-2 text-sm font-medium  ",
                                "transition-colors hover:bg-accent hover:text-accent-foreground",
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop actions */}
                {
                    user ? <DropdownMenuAvatar user={user} /> : <div className="hidden items-center gap-2 md:flex">
                        <Button variant="ghost" >
                            <Link href="/login">Sign in</Link>
                        </Button>

                        <Button >
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                }

                {/* Mobile actions */}
                <div className="flex items-center gap-1 md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger >
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2">
                                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Hexagon className="size-4" />
                                    </span>
                                    Prisma Press
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="mt-2 flex flex-col gap-1 px-2" aria-label="Mobile">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                                <Button variant="outline" >
                                    <Link href="/login" onClick={() => setOpen(false)}>
                                        Sign in
                                    </Link>
                                </Button>

                                <Button >
                                    <Link href="/register" onClick={() => setOpen(false)}>
                                        Get Started
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
