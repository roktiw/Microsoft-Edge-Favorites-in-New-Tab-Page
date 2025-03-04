# Microsoft Edge Favorites in New Tab Page

🚀 **Microsoft Edge Favorites in New Tab Page** is a lightweight Microsoft Edge extension that sets the new tab page (`edge://newtab`) to automatically open `edge://favorites/`. This allows instant access to your bookmarks without additional clicks.

## 📦 Installation
### 1️⃣ Download the code
```
git clone https://github.com/yourusername/Microsoft-Edge-Favorites-in-New-Tab-Page.git
```
### 2️⃣ Load as an unpacked extension in Edge:
1. Open **edge://extensions/**
2. Enable **Developer Mode**
3. Click **"Load unpacked"** and select the folder with the extension
4. Done! Now `Ctrl + T` will open `edge://favorites/` 🎯

## 🛠 Files
- **`manifest.json`** → Defines the extension
- **`redirect.js`** → Redirects new tabs to `edge://favorites/`
- **`newtab.html`** → Loads `redirect.js` to handle redirection

## 🎯 How It Works
1. **Overrides the new tab (`chrome_url_overrides`)**
2. **Loads `redirect.js`, which redirects users to `edge://favorites/`**
3. **Works instantly without any extra permissions**

---

## 📌 Features
✅ Instant access to your bookmarks  
✅ No unnecessary clicks  
✅ Lightweight (only a few KB)  

### 🏆 Future Improvements (Ideas)
- Option to **choose a different default page** (e.g., `edge://downloads/`)
- **Settings panel** to switch between opening in a **new or the current tab**
- **Publishing in the Edge Add-ons Store**  
