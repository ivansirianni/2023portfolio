document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var options = new Object();
    options.html = "<div style='background: red;'>jdskljdklsjdkl</div>";
    var instances = M.Tooltip.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = new Object();
    options.html = "<div style='background:yellow;'></div>";
    var instances = M.Sidenav.init(elems, options);
  });