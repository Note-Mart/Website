"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ShoppingCart, Sun, Moon, Globe } from "lucide-react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const languages = [
        { code: "zh-TW", name: "繁體中文" },
        { code: "en", name: "English" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full">
            <nav className="nav-header">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center">
                            <span className="text-xl font-bold text-primary">
                                NoteMart
                            </span>
                        </Link>

                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary">
                                            {t("home")}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary">
                                            {t("about")}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/market" legacyBehavior passHref>
                                        <NavigationMenuLink className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary">
                                            {t("market")}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/contact" legacyBehavior passHref>
                                        <NavigationMenuLink className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary">
                                            {t("contact")}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="rounded-full"
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Globe className="h-5 w-5" />
                                    <span className="sr-only">Change language</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {languages.map((lang) => (
                                    <DropdownMenuItem
                                        key={lang.code}
                                        onClick={() => i18n.changeLanguage(lang.code)}
                                    >
                                        {lang.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Shopping cart</span>
                        </Button>
                        <Button variant="ghost" className="font-medium">
                            {t("login")}
                        </Button>
                        <Button className="primary-button font-medium">
                            {t("register")}
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
} 