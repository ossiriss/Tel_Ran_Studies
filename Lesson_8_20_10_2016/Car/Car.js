/**
 * Created by Freeman on 20.10.2016.
 */
Car();
function Car(model,color,engine,owner) {
    Car.N_MODEL = 5;
    Car.MAX_ENG = 1.8;
    Car.MIN_ENG = 0.7;

    Car.random = function() {
        var model = "model #"+ RandomUtil.nextInt(Car.N_MODEL);
        var color = "#"+("000000" + RandomUtil.nextInt(0xffffff).toString(16)).substr(-6);
        var engine = RandomUtil.nextDouble(Car.MIN_ENG,Car.MAX_ENG).toFixed(2);

        return new Car(model, color, engine, Owner.random());
    };
    //TODO

    Car.comaparator = function(propertyName){
        return function (car1, car2) {
            return car1[propertyName].localeCompare(car2[propertyName]);
        }
    };

    Car.engineComparator = function (car1, car2) {
        return car1.engine-car2.engine;
    };
    Car.modelComparator = function (car1, car2) {
        return car1.model.localeCompare(car2.model);
    };
    Car.colorComparator = function (car1, car2) {
        return car1.color.localeCompare(car2.color);
    };
    Car.ownerNameComparator = function (car1, car2) {
        return car1.owner.name.localeCompare(car2.owner.name);
    };
    Car.ownerCityComparator = function (car1, car2) {
        return car1.owner.city.localeCompare(car2.owner.city);
    };


    this.model = model;
    this.color = color;
    this.engine = engine;
    this.owner = owner;
}
