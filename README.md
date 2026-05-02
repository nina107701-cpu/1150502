# 小喵子月蝕占卜室

這是一個**純靜態**、可直接部署到 GitHub Pages 的手機優先占卜網站。

## 專案結構

- `index.html`：網站首頁（入口檔）。
- `styles.css`：整體視覺樣式（深紫 / 黑 / 金色神秘風）。
- `script.js`：所有互動邏輯（畫面切換、長按儀式、抽結果、許願彈窗）。
- `assets/`：全部本地 SVG 圖像資產。

## 圖片資產位置

- `assets/ChatGPT lmage-01.png`
- `assets/magic-circle.svg`
- `assets/crystal.svg`
- `assets/moon-stars.svg`
- `assets/favicon.svg`

## 本機開啟

直接用瀏覽器打開 `index.html` 即可運作（不需要 npm / build / dist）。

## GitHub Pages 部署方式

1. 到 GitHub Repo 的 **Settings**。
2. 打開 **Pages**。
3. Source 選 **Deploy from a branch**。
4. Branch 選 **main**，資料夾選 **/(root)**。
5. 儲存後等待部署完成即可。

> 本專案不依賴外部 API、外部資料庫，也不需要任何框架或建置工具。


## 常見 404 排查（GitHub Pages）

如果你部署後看到 404，請依序確認：

1. **Pages 發佈分支是否為 `main` + `/(root)`**。
2. 等待 1～5 分鐘讓 GitHub Pages 完成發佈。
3. 進入網址時，專案站通常是：
   - `https://<你的帳號>.github.io/<repo-name>/`
   （不是一定在網域根目錄）
4. 若先前開過自訂網域，先暫時移除後再測試。
5. 本專案已提供 `404.html` 自動導回 `index.html`，可避免子路徑 404。
