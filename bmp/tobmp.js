const fs = require('fs')
const Jimp = require('jimp');

let res

Jimp.read("test.png", (err, image) => {
    res = `${image.bitmap.width} ${image.bitmap.height}`
    for (let i = 0; i < image.bitmap.width; ++i) {
        for (let j = 0; j < image.bitmap.height; ++j) {
            const hex = image.getPixelColor(i, j)
            const pixel = Jimp.intToRGBA(hex)
            res = `${res}\n${pixel.r} ${pixel.g} ${pixel.b}`
        }
    }

    fs.writeFile('in.bmp', res, (err, data) => {
        if (err) {
          return console.log(err)
        }
        console.log(data)
    })    
})