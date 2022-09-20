// ==UserScript==
// @name         申杰VIP解析
// @namespace    http://www.cnblogs.com/shenjieblog
// @author       申杰
// @description   支持所有热门视频网站，优酷，爱奇艺，腾讯，搜狐，乐视，pptv，芒果tv，1905，暴风等
// @license       MIT
// @version       0.0.1
// @match               *://vip.1905.com/*
// @match               *://*.acfun.cn/*
// @match               *://*.iqiyi.com/*
// @match               *://*.bilibili.com/*
// @match               *://fun.tv/*
// @match               *://*.fun.tv/*
// @match               *://*.wasu.cn/*lay/*
// @match               *://*.wasu.cn/wap/*lay/*
// @match               *://*.le.com/*
// @match               *://*.mgtv.com/*
// @match               *://*.miguvideo.com/*
// @match               *://*.pptv.com/*
// @match               *://*.tv.sohu.com/v*
// @match               *://film.sohu.com/album/*
// @match               *://v.qq.com/x/*
// @match               *://v.qq.com/*/p/topic/*/*.html
// @match               *://m.v.qq.com/*
// @match               *://3g.v.qq.com/*
// @match               *://*.tudou.com/*
// @match               *://*.ixigua.com/*
// @match               *://*.youku.com/*
// @grant none
// ==/UserScript==

(function(){
    'use strict';
    function addDiv(){
        var div = document.createElement("div");
        div.innerHTML = "看VIP";
        div.title="点我可以看VIP收费视频\n有问题QQ联系我：970852638\n                           申杰制作";
        var css = "position:fixed;top:160px;left:3px;z-index:999999999;width:60px;height:30px;line-height:30px;text-align:center;font-size:18px;font-family:Verdana, Arial, '宋体';font-weight:700;color:#f00;user-select:none;padding:0px;white-space:nowrap;border:3px solid #f00;cursor:pointer;";
        div.style.cssText = css;
        if(window.self === window.top){ document.body.appendChild(div);}
        div.addEventListener("click",function(){
            var S="https://jx.bozrc.com:4433/player/?url=";
            var J=S+window.location.href;
            window.open(J, "_blank");});
   }
   addDiv();
})();