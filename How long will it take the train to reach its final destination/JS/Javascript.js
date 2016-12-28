function reachDestination(distance, speed) {
    var div = Math.floor(distance / speed);
    var time = distance / speed;
    var rem = time - div;
    if (rem >= 0.75) {
        rem = 1
    }
    else if (rem > 0.5 && rem < 0.75) {
        rem = 0.5
    }
    else if (rem >= 0.25 && rem < 0.5) {
        rem = 0.5
    }
    else if (rem >= 0 && rem < 0.25) {
        rem = 0
    }
    var res = div + rem;
    if (res == 1) {
        ans = "The train will be there in 1 hour."
    }
    else {
        ans = "The train will be there in " + res + " hours."
    }
    return ans;
}
reachDestination(10, 3)
    //'The train will be there in 0.5 hours.'