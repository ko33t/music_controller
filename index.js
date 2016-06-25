/// <reference path="typings/globals/github-electron/index.d.ts" />
/// <reference path="/usr/local/lib/node_modules/typings/globals/node/index.d.ts" />
/// <reference path="/usr/local/lib/node_modules/typings/globals/require/index.d.ts" />
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var MyApplication = (function () {
    function MyApplication(app) {
        this.app = app;
        this.mainWindow = null;
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }
    MyApplication.prototype.onWindowAllClosed = function () {
        if (process.platform != 'darwin') {
            this.app.quit();
        }
    };
    MyApplication.prototype.onReady = function () {
        var _this = this;
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden'
        });
        this.mainWindow.loadURL('file://' + __dirname + '/index.html');
        this.mainWindow.on('closed', function () {
            _this.mainWindow = null;
        });
    };
    return MyApplication;
}());
var myapp = new MyApplication(app);
//# sourceMappingURL=index.js.map