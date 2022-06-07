function kilometerToMeter(kilometers) {
    if (typeof kilometers == "number") {
        return kilometers * 1000;
    }
    else {
        return "Invalid input";
    }
}
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    watchPrice = 50;
    phonePrice = 100;
    laptopPrice = 500;
    if (typeof numberOfWatch == "number" && typeof numberOfPhone == "number" && typeof numberOfLaptop == "number" && 0 <= numberOfWatch && 0 <= numberOfPhone && 0 <= numberOfLaptop) {
        return numberOfWatch * watchPrice + numberOfPhone * phonePrice + numberOfLaptop * laptopPrice;
    }
    else {
        return " Invalid input";
    }
}
function hotelCost(days) {
    if (typeof days == "number" && 0 < days) {
        if (days <= 10) {
            return days * 100;
        }
        if (days <= 20 && 10 < days) {
            return 1000 + (days - 10) * 80;
        }
        else {
            return 1800 + (days - 20) * 50;;
        }
    }
    else {
        return "Invalid input";
    }
}
function megaFriend(array) {
    if (typeof array == "object") {
        var flag = true;
        for (i = 0; i < array.length; i++) {
            if (typeof array[i] != "string") {
                flag = false;
            }
        }
        if (flag) {
            biggestName = array[0];
            for (i = 1; i < array.length; i++) {
                if (biggestName.length < array[i].length) {
                    biggestName = array[i];
                }
            }
            return biggestName;
        }
    }
    return "Invalid input";
}






