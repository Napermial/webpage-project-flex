
const myCanvas = document.querySelector('.treeHolder');
let context = myCanvas.getContext();

const magnificationFactor = 600;
let panX = 0;
let panY = 0;
for(let x=0; x < myCanvas.width; x++) {
    for(let y=0; y < myCanvas.height; y++) {
        let belongsToSet =
            checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX,
                y / magnificationFactor - panY);
        if(belongsToSet) {
            context.fillRect(x,y, 1,1); // Draw a black pixel
        }
    }
}

function checkIfBelongsToMandelbrotSet(x, y) {
    let realComponentOfResult = x;
    let imaginaryComponentOfResult = y;

    for(let i = 0; i < 10; i++) {
        // Calculate the real and imaginary components of the result
        // separately
        const tempRealComponent = realComponentOfResult * realComponentOfResult
            - imaginaryComponentOfResult * imaginaryComponentOfResult
            + x;

        let tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
            + y;

        realComponentOfResult = tempRealComponent;
        imaginaryComponentOfResult = tempImaginaryComponent;
    }

    if (realComponentOfResult * imaginaryComponentOfResult < 5)
        return true;

    return false;
}
