'use strict'
let fs = require('fs')


fs.readFile(`././animate.css`, 'UTF-8', (err, data) => {
    let datas = data.split('\n')
    datas.forEach(css => {
        if (css.startsWith('@')) {
            let animateName = css.split(' ')[1]
            console.log(`<div class="${animateName}" data-property="${animateName}" data-author="Animate.css"></div>`)
        }
    })
})

