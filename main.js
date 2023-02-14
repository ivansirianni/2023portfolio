document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var options = new Object();
    options.html = "<div style='background: red;'>jdskljdklsjdkl</div>";
    var instances = M.Tooltip.init(elems, options);
});