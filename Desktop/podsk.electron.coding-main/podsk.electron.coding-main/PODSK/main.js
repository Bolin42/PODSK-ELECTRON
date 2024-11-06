const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const { BrowserWindow } = require('electron')
const win = new BrowserWindow({frame: false})
const win = new BrowserWindow({titleBarStyle: 'hidden'})

const SendMessage = require('./connection/websocket.js')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}
app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()
    SendMessage()         
})

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    mainWindow.loadURL('http://localhost:'+document.getElementById('socket_listen_port').value);
    wss.server.listen(document.getElementById('socket_listen_port').value);
});