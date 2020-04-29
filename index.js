const {app, BrowserWindow}=require('electron');

let appWindow;

function windowUp(){
    appWindow=new BrowserWindow({
        
        width:1000,
        height:800,
        minWidth:800,
        minHeight:600,
        center:true,
        icon: 'icon.png'
    });

    //app cerrada:
    appWindow.on('closed',()=>{
        appWindow=null;
    });

    //cargan html:
    appWindow.loadFile('./index.html');

    //app lista,

    appWindow.once('ready-to-show',()=>{
        appWindow.show();
    })
}

app.on('ready',windowUp);