
const myCanvas = document.querySelector('.treeHolder');
let context = myCanvas.getContext("2d");

const magnificationFactor = 200;
let panX = 2;
let panY = 1.5;
for(let x=0; x < myCanvas.width; x++) {
    for(let y=0; y < myCanvas.height; y++) {
        let belongsToSet =
            checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX,
                y / magnificationFactor - panY);
        if(belongsToSet === 0) {
            context.fillStyle = '#000';
            context.fillRect(x,y, 1,1); // Draw a black pixel
        } else {
            context.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
            context.fillRect(x,y, 1,1); // Draw a colorful pixel
        }
    }
}

function checkIfBelongsToMandelbrotSet(x,y) {
    let realComponentOfResult = x;
    let imaginaryComponentOfResult = y;
    const maxIterations = 100;
    for(let i = 0; i < maxIterations; i++) {
        const tempRealComponent = realComponentOfResult * realComponentOfResult
            - imaginaryComponentOfResult * imaginaryComponentOfResult
            + x;
        const tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
            + y;
        realComponentOfResult = tempRealComponent;
        imaginaryComponentOfResult = tempImaginaryComponent;

        // Return a number as a percentage
        if(realComponentOfResult * imaginaryComponentOfResult > 5)
            return (i/maxIterations * 100);
    }
    return 0;   // Return zero if in set
}
