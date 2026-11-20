// Contrato común: lo único que toda figura cumple
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// Ya no hereda de Rectangle: tiene un solo lado
class Square implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

// Solo usa area(), que toda figura cumple sin sorpresas
function resizeRectangle(shape: Shape, expectedArea: number): void {
  console.log(`Area esperada: ${expectedArea}. Area obtenida: ${shape.area()}`);
}

resizeRectangle(new Rectangle(5, 10), 50);
resizeRectangle(new Square(10), 100);
