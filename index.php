<?php
/*
Title: RubberDuckie Assesment
Author: Ian Franco Noziglia
Description: FE Development assesment for RubberDuckie Junior Web Developer role application
*/

// Definition of absolute URL path variables 
require_once "parameters.php";

// website HEAD and BODY HEADER opening template
require_once $layout_url."header.php";

// TOP CONTACT BAR, including a "get in touch" button
require_once $views_url."get_in_touch_bar.php";

// website TOP-BAR including: logo and main navigation bar. 
require_once $layout_url."main_top_bar.php";

// HERO BANNER including website title, introduction, call-to-action button + image slider
require_once $views_url."hero.php";

// FOOTER including navigation menu with icons
require_once $layout_url."footer.php";

?>
<script>
    $(function(){
        hero_slider = new slider("hero_slider");
        hero_slider.setControls();
        //set a timer interval to play the slides automatically
        var timer = setInterval(hero_slider.slideRight.bind(hero_slider), 10000);
    });
</script>