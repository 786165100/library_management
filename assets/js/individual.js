var $pullDown=$(".pull-down");
var $menu=$(".menu");
var $contactUs=$("#contactUs");
var $menuList=$(".menu-list").children();
$pullDown.click(function () {
    $menu.slideToggle(500);
});

window.onresize=function () {
    if(window.innerWidth>800){
        $menu.show();
    }
};
$menuList.click(function () {
    $menuList.each(function (index) {
        $(this).removeClass("on-active");
    });
    $(this).addClass("on-active");
})