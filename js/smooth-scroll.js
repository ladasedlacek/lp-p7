// smooth scroller
$('#landingpage a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function (a) {
    let o;
    location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") ||
        location.hostname != this.hostname ||
        ((o = (o = $(this.hash)).length ? o : $("[name=" + this.hash.slice(1) + "]")).length && (a.preventDefault(), $("html, body").animate({ scrollTop: o.offset().top - 75 }, 800)));
});