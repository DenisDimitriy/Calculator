function copyDeep(donor) {
    var recipient
    var typeString = {}.toString.call(donor);
    switch (typeString) {
        case "[object Object]":
            recipient = {};
            for (var key in donor) {
                recipient[key] = copyDeep(donor[key]);
            }
            break;

        case "[object Array]":
            recipient = []
            for (var i = 0; i < donor.length; i++) {
                recipient[i] = copyDeep(donor[i]);
            }
            break;

        default:
            recipient = donor
            break;
    }
    return recipient
}