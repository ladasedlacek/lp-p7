// desktop layout swticher
$("#layout_switch button").on("click", function () {
    $("#testLayout").removeClass("layout-0").removeClass("layout-1"), 
    $("body").addClass("mobile");
}),
$("#layout_switch button:nth-child(2)").on("click", function () {
    $("#testLayout").addClass("layout-0").css({'width':'1035px', 'margin':'0 auto'}), 
    $("body.mobile").removeClass("mobile");
}),
$("#layout_switch button:nth-child(3)").on("click", function () {
    $("#testLayout").addClass("layout-1").css({'width':'1310px', 'margin':'0 auto'}), 
    $("body.mobile").removeClass("mobile");
})