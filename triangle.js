function triangle(a, b, c) {
    if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number") {
        return "Error: A dimension is not a number";
    } else if (a <= 0 || b <= 0 || c <= 0) {
        return "Error: A dimension is less than or equal to zero";
    } else if (a + b < c || a + c < b || b + c < a) {
        return "Not a triangle";
    } else {
        if (a === b) {
            if (b === c) {
                return "Equilateral";
            } else { 
                return "Isosceles";
            }
        } else if (a === c || b === c) {
            return "Isosceles"
        } else {
            return "Scalene";
        } 
    }
}

module.exports = triangle;