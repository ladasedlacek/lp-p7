// accordion
$("#accordion > .lpFAQs__wrapper > .lpFAQs__paragraph").hide(),
$("#accordion > .lpFAQs__wrapper").click(function (e) {
    if (!$(e.target).closest(".faqsHeadline").length) return;
    return (
        $(this).hasClass("active")
            ? $(this).removeClass("active").find(".lpFAQs__paragraph").slideUp()
            : ($("#accordion > .lpFAQs__wrapper > .lpFAQs__paragraph").slideUp(), $("#accordion > .lpFAQs__wrapper.active").removeClass("active"), $(this).addClass("active").find(".lpFAQs__paragraph").slideDown()),
        !1
    );
})