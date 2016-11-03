/**
 * Created by Boris on 02-Nov-16.
 */
function point(lat, long) {
    var latitude = lat;
    var longitude = long;

    return{
        getLatitude : function () {
            return latitude;
        },
        getLongitude : function () {
            return longitude;
        }
    }
}