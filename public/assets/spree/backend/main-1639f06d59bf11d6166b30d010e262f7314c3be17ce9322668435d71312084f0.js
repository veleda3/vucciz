function Main(){this.init=function(){this.initializeEditor()},this.initializeEditor=function(){var i=CodeMirror.fromTextArea($("#themes_template_body")[0],{lineNumbers:!0,extraKeys:{"Ctrl-Space":"autocomplete"},mode:{name:"javascript",globalVars:!0}});i.setSize($(".admin-editor-section").width(),800),i.setSize($(".admin-editor-section").height(),600)}}$(document).ready(function(){(new Main).init()});