const electron = require('electron') // Electron I have defined
const path = require('path') // Path I have defined
const { ipcMain  } = require('electron') 
var dialog = electron.dialog;
var fs = require('fs');
const S3 = require('aws-sdk/clients/s3')



//NodeJS Getting Api
const root = fs.readdirSync('/')

const { app, BrowserWindow  } = require('electron') // I have defined the Electron window Browser Window



function newWindow () {  // Creates a window in the browser
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
}
    })
     
    // Browser opens index.html
win.loadFile("index.html")
    win.webContents.openDevTools()

}

app.addRecentDocument('') //File path
app.clearRecentDocuments()

app.whenReady().then(() => {
    yeniPencere()


// Turn off electron browser with Darwin
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0 ) newWindow()
  })
})
