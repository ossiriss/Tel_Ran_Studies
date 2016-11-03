/**
 * Created by Boris on 02-Nov-16.
 */
function globe(p1, p2) {
    var pp1 = p1;
    var pp2 = p2;

    function sq(x) {
        return x*x;
    }

    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    var dlon = deg2rad(p2.getLongitude() - p1.getLongitude());
    var dlat = deg2rad(p2.getLatitude() - p1.getLatitude());

    var a = sq(Math.sin(dlat/2)) +
            Math.cos(deg2rad(p1.getLatitude())) * Math.cos(deg2rad(p2.getLatitude())) *
            sq(Math.sin(dlon/2));
    var c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1-a) );
    var rkm = 20000/Math.PI; //earth radius

    return {
        distance : function () {
            return rkm * c;
        }
    }
}