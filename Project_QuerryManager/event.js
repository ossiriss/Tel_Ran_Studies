/**
 * Created by Boris on 07-Nov-16.
 */
function Event(eventJSON) {
    var incomingEvent = JSON.parse(eventJSON);

    var id = incomingEvent.id;
    var name = incomingEvent.name;
    var date = incomingEvent.date;
    var price = incomingEvent.price;
    var deadline = incomingEvent.deadline;
    var admin = incomingEvent.admin;
    var capacity = incomingEvent.capacity;

    var gId = function () {
        return id;
    };
    var gName = function () {
        return name;
    };
    var gDate = function () {
        return date;
    };
    var gDeadline = function () {
        return deadline;
    };
    var gPrice = function () {
        return price;
    };
    var gAdmin = function () {
        return admin;
    };
    var gCapacity = function () {
        return capacity;
    };

    var sName = function (nameVal) {
        name = nameVal;
    };
    var sDate = function (dateVal) {
        date = dateVal;
    };
    var sDeadline = function (deadlineVal) {
        date = deadlineVal;
    };
    var sPrice = function (priceVal) {
        price = priceVal;
    };
    var sAdmin = function (adminVal) {
        admin = adminVal;
    };
    var sCapacity = function (capacityVal) {
        capacity = capacityVal;
    };

    return{
        getId : gId,
        getName : gName,
        getDate: gDate,
        getDeadline : gDeadline,
        getPrice : gPrice,
        getAdmin : gAdmin,
        getCapacity : gCapacity,

        setName : sName,
        setDate : sDate,
        setDeadline : sDeadline,
        setPrice : sPrice,
        setAdmin : sAdmin,
        setCapacity : sCapacity
    }
}