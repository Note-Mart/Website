"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 主視覺區域 */}
      <section className="container flex flex-col items-center justify-center space-y-4 py-32 md:py-36 lg:py-40 relative">
        <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:text-7xl text-primary">
          {t("hero_title")}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center mt-4">
          {t("hero_description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button size="lg" className="primary-button">
            {t("get_started")}
          </Button>
          <Button size="lg" variant="outline" className="glass-card border-0">
            {t("learn_more")}
          </Button>
        </div>
      </section>

      {/* 新筆記上架 */}
      <section className="container py-24">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-primary mb-12">
          {t("latest_notes")}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-card rounded-2xl transform hover:scale-105 transition-transform"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">筆記標題 {i}</h3>
                <p className="text-muted-foreground mb-4">
                  這是一個簡短的筆記描述，介紹筆記的主要內容和特色。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">NT$ 299</span>
                  <Button variant="outline" className="glass-card border-0">
                    {t("view_note")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 筆記分類 */}
      <section className="container py-24">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-primary mb-12">
          {t("explore_categories")}
        </h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            "design",
            "programming",
            "marketing",
            "business",
            "science",
            "art",
          ].map((category) => (
            <div
              key={category}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <h3 className="font-semibold text-primary">{t(category)}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 精選內容區 */}
      <section className="container py-24">
        <div className="grid gap-4 md:grid-cols-3 lg:gap-8">
          {/* 熱門筆記 */}
          <div className="glass-card rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-primary mb-4">{t("popular_notes")}</h3>
            <p className="text-muted-foreground">
              探索本月最受歡迎的優質筆記內容
            </p>
          </div>
          {/* 頂尖貢獻者 */}
          <div className="glass-card rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-primary mb-4">{t("top_contributors")}</h3>
            <p className="text-muted-foreground">
              認識平台上最活躍的筆記分享者
            </p>
          </div>
          {/* 用戶評價 */}
          <div className="glass-card rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-primary mb-4">{t("user_reviews")}</h3>
            <p className="text-muted-foreground">
              查看其他用戶對平台的真實評價
            </p>
          </div>
        </div>
      </section>

      {/* 關於我們 */}
      <section className="container py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            {t("about_platform")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground mt-4">
            我們致力於打造一個優質的筆記交易平台，讓知識的傳遞更加便利與有價值。
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-8 mt-8 w-full">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary">{t("founders")}</h3>
              <p className="text-muted-foreground">NoteMart 團隊</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary">{t("total_notes")}</h3>
              <p className="text-muted-foreground">10,000+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
