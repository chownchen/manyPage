//引入css
require("../css/global.scss");
require("../css/index.scss");
let appBase = require("../static/lib/app");
import { base } from "../static/lib/common"

console.log($('#bb'))

//
$('#bb').html(template('template', {name: 'zdchen', from: '模版引擎渲染出来'}));

$('body').append(`这是js动态生成的内容：这是index页面！<br>`)
$('body').append(`从配置文件来的值：${appBase.data.system}<br>`)
$('body').append(`从配置文件来的值：${appBase.config.interface}<br>`)

// 按需加载引用方法，不需要一次性加载所有函数，减少包大小

$('body').append(`从公共方法来的值：${base()}<br>`)



