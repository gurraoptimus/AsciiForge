const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const image1 = new Image();
image1.src = 'bellebunbunny.jpg'; // Replace this with URL or your image path

class AsciiEffect {
    #imageCellArray = [];
    #symbols = [];
    #pixels = [];
    #ctx;
    #width;
    #height;
    constructor( ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image1, 0, 0, this.#width, this.#height);
        this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height).data;
        console.log(this.#pixels);
    }
    #scanImage(cellSize) {
        this.#imageCellArray = [];
        for (let y = 0; y < this.#pixels.height; y += cellSize) {
            for (let x = 0; x < this.#pixels.width; x += cellSize) {
                const posX = x * 4;
                const posY = y * 4;
                const pos = (posY )
            }
        }
    }
}
// with the path to your image file
let effect;
image1.onload = function initalize(){
    canvas.width = image1.width;
    canvas.height = image1.height;
    //ctx.drawImage(image1, 0, 0);
    effect = new AsciiEffect(ctx, image1.width, image1.height);
    //console.log(effect);
}