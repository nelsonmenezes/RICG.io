/*! Project Name - v - 2014-11-05
* Copyright (c) 2014 Mat Marquis - mat@matmarquis.com */!function(){var a=document.querySelectorAll(".head"),b=function(){var a=this.parentNode,b=(a.querySelector(".body"),a.className.indexOf("open")>-1);a.setAttribute("class",b?a.className.replace("open",""):a.className+" open")};for(i=0,l=a.length;l>i;i++){var c=a[i];c.addEventListener("click",b),c.parentNode.setAttribute("class",c.parentNode.className+" heading"+i)}}();