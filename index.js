function $(expr, con) {
    return (con || document).querySelector(expr);
}

function $$(expr, con) {
    return [].slice.call((con || document).querySelectorAll(expr));
}


$$('div[data-property]').forEach(function(el, i) {
    var property = el.getAttribute('data-property')
    el.addEventListener('click', function() {
        let animation = getComputedStyle(el).animation,
            info = $('#info'),
            author = el.getAttribute('data-author') || 'leaverou'

        $('h1', info).innerHTML = el.getAttribute('data-property')
        $('dd:first-of-type', info).innerHTML = animation

        $('dd:nth-of-type(3)', info).innerHTML = '<a href="http://twitter.com/' + author + '" target="_blank"><img src="http://twitter.com//api/users/profile_image?screen_name=' + author + '&size=mini"/>@' + author + '</a>';
    })
});