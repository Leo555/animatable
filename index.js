function $(expr, con) {
    return (con || document).querySelector(expr);
}

function $$(expr, con) {
    return [].slice.call((con || document).querySelectorAll(expr))
}

$$('div[data-property]').forEach(function (el, i) {
    let property = el.getAttribute('data-property')
    el.addEventListener('mouseenter', function () {
        if (!el.className.includes('animated')) {
            el.className += " animated infinite"
        }
    })
    el.addEventListener('mouseleave', function () {
        if (el.className.includes('animated')) {
            el.className = el.className.replace(" animated infinite", "")
        }
    })
    el.addEventListener('click', function () {
        let CSSStyleDeclaration = getComputedStyle(el)
        let animation = CSSStyleDeclaration.animation,
            animationName = CSSStyleDeclaration.animationName,
            animationDelay = CSSStyleDeclaration.animationDelay,
            animationDirection = CSSStyleDeclaration.animationDirection,
            animationDuration = CSSStyleDeclaration.animationDuration,
            animationFillMode = CSSStyleDeclaration.animationFillMode,
            animationIterationCount = CSSStyleDeclaration.animationIterationCount,
            animationTimingFunction = CSSStyleDeclaration.animationTimingFunction

        if (!animation) {
            animation = [animationName, animationDuration, animationTimingFunction, animationDelay, animationFillMode, animationIterationCount, animationDirection].join(' ')
        }
        let info = $('#info'),
            author = el.getAttribute('data-author') || 'leaverou'

        $('h1', info).innerHTML = el.getAttribute('data-property')
        $('dd:first-of-type', info).innerHTML = animation
        if (author === 'Animate.css') {
            $('dd:nth-of-type(2)', info).innerHTML = '<a href="https://daneden.github.io/animate.css/" target="_blank">@' + author + '</a>'
        } else {
            $('dd:nth-of-type(2)', info).innerHTML = '<a href="http://twitter.com/' + author + '" target="_blank">@' + author + '</a>'
        }
    })
});

function findKeyframesRule(rule) {
    let ss = document.styleSheets;
    for (let i = 0; i < ss.length; ++i) {
        for (let j = 0; j < ss[i].cssRules.length; ++j) {
            if (ss[i].cssRules[j].name == rule) {
                return ss[i].cssRules[j].cssText
            }
        }
    }
    return ''
}