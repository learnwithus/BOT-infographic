<?php
/* ---
This is the WordPress template file used to display the infographic on BOT.
After updating this file, commit it to the repo for SCM purposes. To use it in
WordPress, copy this file to the /wp-content/themes/vch/ directory.
--- */

/* The below line defines the name of the template in WordPress */
/* Template Name: Infographic */

?>

<?php
  get_header();
?>

<iframe id="iframe" src="http://vchdesign.ca/BOT-infographic"></iframe>

<script type="text/javascript">
  function resizeIframe() {
    var headerHeight = document.getElementById('main-header').clientHeight;
    var htmlMargin = window.getComputedStyle(document.documentElement).marginTop.replace('px', '');
  	var totalHeight = +headerHeight + +htmlMargin;
  	var heightString = "height: calc(100vh - " + totalHeight + "px)";
    console.log(headerHeight + " " + htmlMargin +" "+ totalHeight)
    document.getElementById('iframe').setAttribute("style", heightString);
  }
  window.onresize = function(event) {
    resizeIframe();
  };
  window.onload = function(event) {
    resizeIframe();
  }
</script>
