'use strict';

module.exports = function (aDate) {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    return aDate.getTime() - today.getTime() >= 0;
}

