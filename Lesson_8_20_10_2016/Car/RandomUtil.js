/**
 * Created by Freeman on 20.10.2016.
 */
RandomUtil();
function RandomUtil() {
    RandomUtil.nextInt = function (n) {
        return Math.floor(Math.random()*n)
    };
    RandomUtil.nextDouble = function (min,max) {
        return (min+Math.random()*(max-min));
    }
}
