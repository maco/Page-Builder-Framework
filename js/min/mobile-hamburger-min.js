!function(r){function s(){var e=r(".wpbf-mobile-menu-toggle");e.hasClass("active")?(r(".wpbf-mobile-menu-container").removeClass("active").slideUp(),e.removeClass("active").removeClass("wpbff-times").addClass("wpbff-hamburger").attr("aria-expanded","false")):(r(".wpbf-mobile-menu-container").addClass("active").slideDown(),e.addClass("active").removeClass("wpbff-hamburger").addClass("wpbff-times").attr("aria-expanded","true"),r(window).trigger("resize"))}r(".wpbf-mobile-menu-toggle").click(function(){s()}),r(".wpbf-mobile-menu a").click(function(){var e=r(this).attr("href"),a=r(this).parent().hasClass("menu-item-has-children");(e.match("^#")||e.match("^/#"))&&0==a&&s()});var e=r("body").attr("class").match(/wpbf-desktop-breakpoint-[\w-]*\b/);if(null!==e)var t=e.toString().match(/\d+/);else t="1024";r(window).resize(function(){var e,a=r(window).height(),s=r("body").innerWidth(),i=r(".wpbf-mobile-nav-wrapper").outerHeight();r(".wpbf-mobile-menu-container.active nav").css({"max-height":a-i}),t<s?((e=r(".wpbf-mobile-menu-toggle")).hasClass("active")&&(r(".wpbf-mobile-menu-container").removeClass("active").slideUp(),e.removeClass("active").removeClass("wpbff-times").addClass("wpbff-hamburger").attr("aria-expanded","false")),r(".wpbf-mobile-mega-menu").length&&r(".wpbf-mobile-mega-menu").removeClass("wpbf-mobile-mega-menu").addClass("wpbf-mega-menu")):r(".wpbf-mega-menu").length&&r(".wpbf-mega-menu").removeClass("wpbf-mega-menu").addClass("wpbf-mobile-mega-menu")}),r(".wpbf-mobile-menu-hamburger .wpbf-submenu-toggle").click(function(e){var a;e.preventDefault(),r(a=this).hasClass("active")?(r("i",a).removeClass("wpbff-arrow-up").addClass("wpbff-arrow-down"),r(a).removeClass("active").attr("aria-expanded","false").siblings(".sub-menu").slideUp()):(r("i",a).removeClass("wpbff-arrow-down").addClass("wpbff-arrow-up"),r(a).addClass("active").attr("aria-expanded","true").siblings(".sub-menu").slideDown())}),r(".wpbf-mobile-menu a").click(function(){var e,a=r(this).attr("href"),s=r(this).parent().hasClass("menu-item-has-children");(a.match("^#")||a.match("^/#"))&&1==s&&((e=r(this).siblings(".wpbf-submenu-toggle")).hasClass("active")?(r("i",e).removeClass("wpbff-arrow-up").addClass("wpbff-arrow-down"),e.removeClass("active").attr("aria-expanded","false").siblings(".sub-menu").slideUp()):(r("i",e).removeClass("wpbff-arrow-down").addClass("wpbff-arrow-up"),e.addClass("active").attr("aria-expanded","true").siblings(".sub-menu").slideDown()))})}(jQuery);