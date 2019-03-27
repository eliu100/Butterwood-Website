function validate() {
    var digits = $("#zip").val();
    if (!digits) {
        return true;
    }
    if (isNaN(digits) || digits.length !== 5) {
        alert("Zip code is not valid or not in a valid format.");
        return false;
    }
    return true;
}

function validate1() {
    var ph = $("#phone").val();
    var z = $("#zip").val();
    var d = new Date($("#pickup").val());
    if (isNaN(ph) || ph.length !== 10) {
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }
    if (isNaN(z) || z.length !== 5) {
        alert("Zip code is not valid or not in a valid format.");
        return false;
    }
    if (d <= new Date()) {
        alert("Pickup date must be after the current date.");
        return false;
    }
    return true;
}