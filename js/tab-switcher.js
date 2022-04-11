// tabs switcher
$("#landingpage .lpMainNav__tab").on("click", function() {
    let saveTarget = $(this).attr('data-tab')
    $("#landingpage .lpMainNav__tab.tabActive").toggleClass('tabActive')
    $(this).addClass('tabActive')
    $("#landingpage .lpInstalation__contentBox.contentOpened").toggleClass('contentOpened contentClosed')
    $("#landingpage #" + saveTarget).toggleClass('contentOpened contentClosed')
})