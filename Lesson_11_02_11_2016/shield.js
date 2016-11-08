/**
 * Created by Boris on 07-Nov-16.
 */
function Shield() {
    var shield;

    var set = function setShield() {
        shield = document.createElement("div");
        shield.className = "shield";
        document.body.appendChild(shield);
        return shield;
    };

    var rem = function () {
        shield.remove();
    };

    return{
        setShield: set,
        removeShield: rem
    }
}