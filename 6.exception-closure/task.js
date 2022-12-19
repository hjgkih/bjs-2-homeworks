function parseCount(value) {
  if (Number.isNaN(Number.parseFloat(value))) {
    const error = new Error('Невалидное значение'); 
    throw error; 
  } 
  return Number.parseFloat(value);  
}

function validateCount(value) {
  try {
    parseCount(value)
  } catch(error) {
    return error;
  }
  
  return parseCount(value);
}

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;

    if ((sideOne + sideTwo) < sideThree || (sideOne + sideThree) < sideTwo || (sideTwo + sideThree) < sideOne) {
      throw new Error('Треугольник с такими сторонами не существует'); 
    }
  }
    
    get perimeter() {
      return this.sideOne + this.sideTwo + this.sideThree;
    }

    get area() {
      let p = this.perimeter / 2;
      return Number(Math.sqrt(p *  (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree)).toFixed(3));    
    }
}


function getTriangle(sideOne, sideTwo, sideThree) {
  try { 
    return new Triangle(sideOne, sideTwo, sideThree)
  } catch (error) {
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      };
    }
}
 
  