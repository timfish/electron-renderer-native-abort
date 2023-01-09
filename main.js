const { join } = require("path");
const { app, BrowserWindow, crashReporter } = require("electron");

crashReporter.start({ submitURL: "https://your-domain.com/url-to-submit" });

app.on("render-process-gone", (_, __, details) => {
  console.log("Render process gone:", details);
});

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(join(__dirname, "index.html"));
});
