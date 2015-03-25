/**
 * Created by liujinkai on 15-3-20.
 * 请关注微信订阅号获取更多:web-bear
 */
Zepto(function($){
    var screenWid = $(window).width();
    var screenHeight = $(window).height();
    $("#main").css("height",screenHeight);
    $("#main").css("width",screenWid);
    var itemCount = $('.item').length;
    $('.item').on("swipeUp",function(event){
        var id = $(event.currentTarget).attr("id");
        var limit = "item_" + (itemCount - 1);
        if (limit == id) {
            $(".item").fadeIn(550);
        } else {
            $("#" + id).fadeOut(550);
        }
    })
});
