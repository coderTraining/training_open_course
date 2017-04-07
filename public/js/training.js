$(document).ready(function() {
    var pages = [
        '/',
        '/2016/0.html',
        '/2016/1.html',
        '/2016/2.html',
        '/internet/0.html',
        '/internet/1.html',
        '/internet/2.html',
        '/internet/3.html',
        '/internet/4.html',
        '/base/0.html',
        '/base/1.html',
        '/base/2.html',
        '/base/3.html',
        '/base/4.html',
        '/base/5.html',
        '/php/0.html',
        '/php/1.html',
        '/php/11.html',
        '/php/2.html',
        '/php/3.html',
        '/php/4.html',
        '/php/5.html',
        '/php/6.html',
        '/php/7.html',
        '/php/8.html',
    ];
    
    var currentPage = location.pathname;
    var pageIndex = pages.indexOf(currentPage);
    if (pageIndex != -1) {
        if (pageIndex > 0) {
            addSide('left', pages[pageIndex-1]);
        }
        if (pageIndex < pages.length-1) {
            addSide('right', pages[pageIndex+1]);
        }
    }
    function addSide(type, url) {
        $html = "<div class='side side-" + type + "'>" +
            "<a href='" + url + "'><i class='fa fa-lg fa-chevron-" + type + "'></i></a>" +
            "</div>";
        $('body').append($html);
    }
});
