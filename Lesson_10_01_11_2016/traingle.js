/**
 * Created by Boris on 01-Nov-16.
 */
function triangle(p1, p2, p3) {
    function sq(x) {
        return x*x;
    }

    function dist(point1, point2) {
        return Math.sqrt(sq(point1.getX()-point2.getX()) +
            sq(point1.getY()-point2.getY()) +
            sq(point1.getZ()-point2.getZ()))
    }

    var a = dist(p1, p2);
    var b = dist(p2, p3);
    var c = dist(p3, p2);

    var p = (a+b+c)/2;

    return {
        area : function () {
            return Math.sqrt(p * (p-a) * (p-b) * (p-c));
        }
    }
}