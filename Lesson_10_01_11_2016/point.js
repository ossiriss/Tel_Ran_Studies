/**
 * Created by Boris on 01-Nov-16.
 */
function point(x,y,z){
    var xx = x;
    var yy = y;
    var zz = z;

    return{
        getX: function () {
            return xx;
        },
        getY: function () {
            return yy;
        },
        getZ: function () {
            return zz;
        }
    }
}