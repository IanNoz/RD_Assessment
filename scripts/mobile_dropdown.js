$(function(){
    $("#mobile_dropdown_menu").click( () => {
        console.log("here");
        if(!$("#main_menu > ul").hasClass("visible")){
            $("#main_menu >ul").addClass("visible");
        }
        else if($("#main_menu > ul").hasClass("visible")){
            $("#main_menu > ul").removeClass("visible");
        }
    });

    $("#main_menu > ul li.dropdown").click( () => {
        console.log("here");
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else if($(this).hasClass("active")){
            $(this).removeClass("visible");
        }
    });
});
