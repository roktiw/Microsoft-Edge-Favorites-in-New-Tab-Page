# Always Open Favorites in New Tab for Microsoft Edge

🚀 **Microsoft Edge Favorites in New Tab Page** is a lightweight Microsoft Edge extension that sets the new tab page (`edge://newtab`) to automatically open `edge://favorites/`. This allows instant access to your bookmarks without additional clicks.

---
## 🎯Open favorite in new tab for Microsoft Edge - version 1.1
Edge Favorites New Tab helps you stay focused and productive by turning your new tab into a launchpad with your favorite sites.
	•	⭐ Quick access – Open your Favorites every time you open a new tab
	•	🎯 Focus – Helps you concentrate and avoid context switching
	•	🧘 Distraction-free workflow – Your Favorites help you focus on the right things
	•	🚀 Blazingly fast – Uses the native edge://favorites view for instant loading
	•	📁 Clean & structured – Seeing your Favorites daily encourages you to sort, improve, and keep them organized
	
![Favorites in New Tab for Microsoft Edge](https://github.com/user-attachments/assets/e30f8094-3028-4771-ba9b-110dbaa59a6c)

**Full Changelog**: https://github.com/roktiw/Microsoft-Edge-Favorites-in-New-Tab-Page/commits/open-favorites-in-new-tab-for-edge-v1-1

---

## 📦 Installation
1. [ Download .zip](https://github.com/roktiw/Microsoft-Edge-Favorites-in-New-Tab-Page/releases/download/open-favorites-in-new-tab-for-edge-v1-1/Open.Favorites.in.New.Tab.for.Microsoft.Edge.zip)
2. Extract .zip
3. Open Microsoft Edge and in address bar type ```edge://extensions/```
4. Enable **Developer Mode** on the left
5. Click **Load Unpacked** in and select the folder with the unpacketd .zip with extension

🎯 Done! Now Ctrl + T or clicinkg New Tab wit mouse will always open Favorites in New Tab!
![image](https://github.com/user-attachments/assets/94ff793a-0cc5-4d61-b68d-c07b0e68c040)

---

## 🛠 Documentation
- **`manifest.json`** → Defines the extension
- **`redirect.js`** → Redirects new tabs to `edge://favorites/`
- **`newtab.html`** → Loads `redirect.js` to handle redirection

### 🎯 How It Works
1. **Overrides the new tab (`chrome_url_overrides`)**
2. **Loads `redirect.js`, which redirects users to `edge://favorites/`**
3. **Works instantly without any extra permissions**

---

## 🏆 Future Improvements (Ideas)
- **Publishing in the Edge Add-ons Store**

---
© [Wiktor Świątkowski](https://github.com/roktiw) 2025
