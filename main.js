const electron = require('electron') // Electron tanımladım
const path = require('path') // path tanımladım
const { ipcMain  } = require('electron') 
var dialog = electron.dialog;
var fs = require('fs');
const S3 = require('aws-sdk/clients/s3')



//Node Api alma
const root = fs.readdirSync('/')

const { app, BrowserWindow  } = require('electron') // Electron pencere Browser Window(Tarayıcı Penceresi) tanımladım



function yeniPencere () {  // Tarayıcı da pencere oluşturur
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
}
    })
     
    // Tarayıcı da index.html açar
win.loadFile("index.html")
    win.webContents.openDevTools()

}

app.addRecentDocument('Users\User\OneDrive\Masaüstü\electron application')
app.clearRecentDocuments()

app.whenReady().then(() => {
    yeniPencere()


// Darwin ile electron tarayıcısını kapatma
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0 ) yeniPencere()
  })
})
