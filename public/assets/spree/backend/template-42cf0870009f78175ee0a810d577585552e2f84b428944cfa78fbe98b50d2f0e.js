function Template(){this.init=function(){this.initializeTemplateTreeStructure(),this.bindEvents()},this.bindEvents=function(){this.highlightFileName()},this.initializeTemplateTreeStructure=function(){$("#tree-menu-sidebar ul:first").addClass("tree"),$(".tree").treemenu({delay:500})},this.highlightFileName=function(){$(".file-link").on("click",function(){$(".file-link").removeClass("highlight-file-link"),$(this).addClass("highlight-file-link")})}}$(document).ready(function(){(new Template).init()});