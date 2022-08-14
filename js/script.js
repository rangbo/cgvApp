
;(function($){
    $(function(){

    $('.gnb li').on('click',function(){
        $('.gnb li').removeClass('on');
        $(this).addClass('on')
    });

    $('.tab__menu--btn').on('click',function(){
        $('.tab__menu--btn').removeClass('on');
        $(this).addClass('on')
    });

    $('.chart-top__tab').on('click',function(){
        $('.chart-top__tab').removeClass('on');
        $(this).addClass('on')
    });

    $('.chart-list li').on('click',function(){
        $('.chart-list li').removeClass('on');
        $(this).addClass('on')
    });

    $(document).ready(function(){
        $(".info--accordian").click(function() {
            $(this).nextAll(".content:first").slideToggle("fast");
            $(this).find(".accordian-arrow").toggleClass("less");
        });
    });
});

})(jQuery);


function selectAll(selectAll)  {
    const checkboxes 
    = document.getElementsByName('check');
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}   
