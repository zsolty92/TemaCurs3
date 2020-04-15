const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.getElementById('canvasId').append(canvas);
const context = canvas.getContext('2d');

// console.log("***Exercitiul 1: Desenati o forma geometrica, folosind canvas. Umpleti forma geometrica cu o culoare la alegere.***");

// context.beginPath();
// context.fillStyle = "blue";
// context.fillRect(50, 50, 150, 50);
// context.stroke();
// context.closePath();

// console.log("***Exercitiul 2: Create o metoda draw, care sa deseneze una din formele create la tema din saptamana precedenta (EX 5).");
// function draw(){
//     if (canvas.getContext) {
//         context.beginPath(); 
//         context.fillStyle = "#F9A520";
//         context.moveTo(100, 100); 
//         context.lineTo(100, 300);
//         context.lineTo(300, 300); 
//         context.fill();
//         context.closePath();
//     }
//     }
//     draw();

    // console.log("***Exercitiul 3 ");
    // Desenati un cerc. Animati cercul dupa urmatoarele reguli:
    // incepeti deplasarea cercul de la stanga la dreapta, schimbati pozitia acestuia la fiecare 0.5 secunde.
    // la deplaserea spre dreapta setati o culoare, iar la fiecare pas mariti diametrul.
    // cand cercul loveste marginea din dreapta a canvas-ului, schimbati directia de deplasare spre stanga.
    // la deplaserea spre stanga setati o alta culoare culoare, iar la fiecare pas micsorati diametrul.
    // cand cercul loveste marginea din stanga a canvas-ului, schimbati directia de deplasare spre dreapta.
    
    // class Circle {
    //     constructor(x, y, radius, color) {
    //         this.x = x;
    //         this.y = y;
    //         this.radius = radius;
    //         this.color = color;
    //         this.dx = 1;
    //         this.dy = 1;
    //     }
    
    //     draw() {
    //         context.beginPath();
    //         context.arc(
    //             this.x,
    //             this.y,
    //             this.radius,
    //             0,
    //             2 * Math.PI
    //         );
    //         context.stroke();
    //         context.fillStyle = this.color;
    //         context.fill();
    //         context.closePath();
    //     }
    
    //     move(stepX, stepY) {
    //         this.changeDirectionIfExceededBounds();
    //         this.x += stepX * this.dx; // this.x = this.x + stepX;
    //         this.y += stepY * this.dy;
    //         this.draw();

    //         if(this.dx ==-1){
    //             this.radius--;
                
    //         } else if(this.dx == 1){
    //             this.radius++;
    //         }
    //     }
    //     changeDirectionIfExceededBounds() {
    //         if (this.x >= canvas.width - this.radius) {
    //             this.dx = -1;
    //             this.color="red";
    //             this.radius++;
    //         }
    //         if (this.y >= canvas.height - this.radius) {
    //             this.dy = -1;
    //         }
    //         if (this.x <= this.radius) {
    //             this.dx = 1;
    //             this.color="blue"
    //             this.radius--;
    //         }
    //         if (this.y <= this.radius) {
    //             this.dy = 1;
    //         }
    //     }
    // }
    
    // function animateCircle() {
    //     console.log('se apeleaza');
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     cerculet.move(10, 0);
    // }
    
    // var cerculet= new Circle(50, 200, 10, 'blue');
    // setInterval(animateCircle, 500);


// console.log("***Exercitiul 4 ");

// const rows = 20;
// const columns = 10;
// const width = 30;
// const height = 30;

// let grid = [];

// class Cell {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//     }

//     draw() {
//         context.beginPath();
//         context.fillStyle = this.color;
//         context.rect(this.y * 30, this.x * 30, 30, 30);
//         context.fill();
//         context.stroke();
//         context.closePath();
//     }
// }

// const createGrid = () => {
//     for (let row = 0; row < rows; row++) {
//         grid[row] = [];
//         for (let column = 0; column < columns; column++) {
//            if(row % 2 == 0) {
//                 if (column % 2 == 0) {
//                     grid[row][column] = new Cell(row, column, "black");}
//                 else {
//                     grid[row][column] = new Cell(row, column, "white");
//                 }
//             }else if(row % 2 != 0) {
//                 if (column % 2 == 0) {
//                     grid[row][column] = new Cell(row, column, "white");}
//                 else {
//                     grid[row][column] = new Cell(row, column, "black");
//                 }
//             }
//         }
//     }
// }
    

// const drawGrid = () => {
//     for (let row = 0; row < rows; row++) {
//         for (let column = 0; column < columns; column++) {
//             grid[row][column].draw();
//         }
//     }
// }

// createGrid();
// drawGrid();


// console.log("***Exercitiul 5 ");

// class Square {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
        
//     }
//     draw() {
//         context.beginPath();
//             for (let i = this.x ; i < (this.x + 3); i++) {
                
//                 for (let j = this.y ; j < (this.y + 3); j++){
//                     context.rect(i * 30, j * 30, 30, 30);
//                     context.stroke();
//                 }
//             }

//         context.closePath();
//     }
// }
// const square = new Square(2,3);
// const square2 = new Square(5,7);
// square.draw();
// square2.draw();