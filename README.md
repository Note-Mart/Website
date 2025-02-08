# NoteMart - 優質筆記交易平台

NoteMart 是一個現代化的筆記交易平台，致力於促進知識共享和優質內容的流通。平台採用了最新的網頁技術，提供流暢的用戶體驗和美觀的介面設計。

## 技術棧

### 前端框架與函式庫
- **Next.js 15.1.6** - React 框架，提供 SSR、檔案路由等功能
- **React 19.0.0** - 使用者介面開發函式庫
- **TypeScript** - 提供型別安全和更好的開發體驗

### UI 元件與樣式
- **Tailwind CSS 3.4.1** - 實用優先的 CSS 框架
- **shadcn/ui** - 美觀且可客製化的 UI 元件庫
- **Radix UI** - 無障礙性和可組合的元件基礎
- **Lucide React** - 現代化的圖標庫

### 國際化
- **i18next** - 強大的國際化解決方案
- **react-i18next** - React 的 i18next 整合
- **i18next-browser-languagedetector** - 瀏覽器語言自動檢測

### 主題系統
- **next-themes** - Next.js 的深色模式支援

## 開始使用

### 系統需求
- Node.js 18.0 或更高版本
- npm 或 yarn 套件管理器

### 安裝步驟

1. 克隆專案
```bash
git clone https://github.com/your-username/note-mart.git
cd note-mart
```

2. 安裝依賴
```bash
npm install
# 或
yarn install
```

3. 啟動開發伺服器
```bash
npm run dev
# 或
yarn dev
```

4. 開啟瀏覽器訪問 http://localhost:3000

### 建置與部署

1. 建置生產版本
```bash
npm run build
# 或
yarn build
```

2. 啟動生產伺服器
```bash
npm run start
# 或
yarn start
```

## 專案結構

```
note-mart/
├── src/
│   ├── app/          # 頁面和路由
│   ├── components/   # React 元件
│   ├── lib/         # 工具函數和配置
│   └── styles/      # 全域樣式
├── public/          # 靜態資源
└── ...
```

## 主要功能

- 🌙 深色模式支援
- 🌐 多語言支援（繁體中文、英文）
- 🎨 現代化 UI 設計
- 📱 響應式布局
- 🚀 優化的效能
- ♿ 無障礙設計

## 開發團隊

- **Claude 3.5 Sonnet** - 主要開發者
  - 負責前端架構設計
  - UI/UX 實作
  - 功能開發與最佳化

## 授權

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案  
