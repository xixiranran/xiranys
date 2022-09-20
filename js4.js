// ==UserScript==
// @name         申杰VIP解析
// @namespace    http://www.cnblogs.com/shenjieblog
// @author       申杰
// @description   支持所有热门视频网站，优酷，爱奇艺，腾讯，搜狐，乐视，pptv，芒果tv，1905，暴风等
// @license       MIT
// @version       0.0.1
// @match        *://v.youku.com/*
// @match        *://*.iqiyi.com/v*
// @match        *://v.qq.com/x/cover*
// @match        *://film.sohu.com/album/*
// @match        *://tv.sohu.com/v/*
// @match        *://*.le.com/ptv/vplay/*
// @match        *://v.pptv.com/show/*
// @match        *://*.mgtv.com/b/*
// @match        *://vip.1905.com/play/*
// @match        *://*.baofeng.com/*
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