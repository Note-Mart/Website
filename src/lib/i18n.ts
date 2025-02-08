"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    "zh-TW": {
        translation: {
            home: "首頁",
            about: "關於我們",
            market: "市場",
            contact: "聯絡我們",
            login: "登入",
            register: "註冊",
            // 首頁
            hero_title: "發現並交易優質筆記",
            hero_description: "連接買家和賣家，促進知識共享的最佳平台",
            get_started: "開始使用",
            learn_more: "了解更多",
            // 精選內容
            popular_notes: "熱門筆記",
            top_contributors: "頂尖貢獻者",
            user_reviews: "用戶評價",
            // 關於我們
            about_platform: "關於我們的平臺",
            founders: "創始人",
            total_notes: "總筆記數量",
            // 新筆記
            latest_notes: "最新上架",
            view_note: "查看筆記",
            // 評價
            platform_reviews: "用戶對我們平臺的評價",
            // 分類
            explore_categories: "按分類探索",
            design: "設計",
            programming: "程式開發",
            marketing: "行銷",
            business: "商業",
            science: "科學",
            art: "藝術",
        },
    },
    en: {
        translation: {
            home: "Home",
            about: "About",
            market: "Market",
            contact: "Contact",
            login: "Login",
            register: "Register",
            // Home
            hero_title: "Discover and Trade Quality Notes",
            hero_description: "The best platform connecting buyers and sellers to share knowledge",
            get_started: "Get Started",
            learn_more: "Learn More",
            // Featured Content
            popular_notes: "Popular Notes",
            top_contributors: "Top Contributors",
            user_reviews: "User Reviews",
            // About Us
            about_platform: "About Our Platform",
            founders: "Founders",
            total_notes: "Total Notes",
            // New Notes
            latest_notes: "Latest Notes",
            view_note: "View Note",
            // Reviews
            platform_reviews: "User Reviews of Our Platform",
            // Categories
            explore_categories: "Explore by Category",
            design: "Design",
            programming: "Programming",
            marketing: "Marketing",
            business: "Business",
            science: "Science",
            art: "Art",
        },
    },
};

// 只在客戶端初始化 i18next
if (typeof window !== "undefined") {
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            lng: "zh-TW",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false,
            },
            detection: {
                order: ["localStorage", "navigator"],
                caches: ["localStorage"],
            },
        });
}

export default i18n; 