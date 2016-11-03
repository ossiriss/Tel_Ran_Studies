/**
 * Created by Freeman on 20.10.2016.
 */
Owner();
function Owner(name,city) {
    Owner.N_NAMES = 10;
    Owner.N_CITIES = 5;

    Owner.random = function() {
        var name = "name #"+ RandomUtil.nextInt(Owner.N_NAMES);
        var city = "city #"+ RandomUtil.nextInt(Owner.N_CITIES);

        return new  Owner(name, city);
    };

    this.name = name;
    this.city = city;
    this.toString = function () {return "Go to hell!!"}
}
