!function(t){t.fn.treemenu=function(s){if(s=s||{},s.delay=s.delay||0,s.openActive=s.openActive||!1,s.closeOther=s.closeOther||!1,s.activeSelector=s.activeSelector||"active",this.addClass("treemenu"),s.nonroot||this.addClass("treemenu-root"),s.nonroot=!0,this.find("> li").each(function(){e=t(this);var a=e.find("> ul"),l=e.find(".toggler").eq(0);if(0==l.length){var l=t("<span>");l.addClass("toggler"),e.prepend(l)}a.length>0?(a.hide(),e.addClass("tree-closed"),e.find(l).click(function(){var e=t(this).parent("li");if(s.closeOther&&e.hasClass("tree-closed")){var a=e.parent("ul").find("li:not(.tree-empty)");a.removeClass("tree-opened"),a.addClass("tree-closed"),a.removeClass(s.activeSelector),a.find("> ul").slideUp(s.delay)}e.find("> ul").slideToggle(s.delay),e.toggleClass("tree-opened"),e.toggleClass("tree-closed"),e.toggleClass(s.activeSelector)}),t(this).find("> ul").treemenu(s)):t(this).addClass("tree-empty")}),s.openActive){var a=this.attr("class");this.find(s.activeSelector).each(function(){for(var e=t(this).parent();e.attr("class")!==a;)e.find("> ul").show(),"UL"===e.prop("tagName")?e.show():"LI"===e.prop("tagName")&&(e.removeClass("tree-closed"),e.addClass("tree-opened"),e.show()),e=e.parent()})}return this}}(jQuery);