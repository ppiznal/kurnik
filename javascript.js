/* create an svg drawing */
var draw = SVG().addTo('#drawing');

// To jest komentarz
console.log("Przemek");
console.log(draw);

/* draw rectangle */
var rect = draw.rect(150,50).move(250,100).fill('#f09')
/* make rectangle jump and change color on mouse over */
rect.mouseover(function() {
    var angle = -45 + 90 * Math.random();

    this.animate(1000, SVG.easing.elastic)
        .move(400 * Math.random(), 400 * Math.random())
        .rotate(angle)
        .fill({
            r: ~~(Math.random() * 255)
          , g: ~~(Math.random() * 255)
          , b: ~~(Math.random() * 255)
        })
})

/* write text at the back */
// \n - znak nowej linii
draw.text('svg.js playground\ntry to grab the rectangle!')
    .back()
    .fill('#000')
    .move('50%', '40%')
    .font({
        family: 'Source Sans Pro'
      , size: 18
      , anchor: 'middle'
    })