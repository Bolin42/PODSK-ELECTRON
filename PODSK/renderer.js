const information = document.getElementById('info')
//information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
}
  
func()

const {Notification} = require('electron')

const NOTIFICATION_TITLE = 'THIS IS A TEST'
const NOTIFICATION_BODY = 'THIS IS A TEST NPTIFICATION. DO NOT ANSWER'
function handle(){
    new Notification({
        title: NOTIFICATION_TITLE,
        body: NOTIFICATION_BODY
    }).show()
}
  