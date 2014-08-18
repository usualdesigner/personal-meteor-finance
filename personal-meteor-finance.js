if (Meteor.isClient) {

    Template.report.monthName = function (m) {

        var monthNames = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];

        return monthNames[--m];
    };

//    Template.report.nextLink = function (m, y) {
//
//        var month,
//            year;
//
//        if ((++m) == 13) {
//            month = 1;
//            year = --y;
//        }
//        else {
//            month = m;
//            year = y;
//        }
//
//        return '/report/' + year + '/' + month;
//    };
//
//    Template.report.prevLink = function (m, y) {
//
//        var month,
//            year;
//
//        if ((--m) == 0) {
//            month = 12;
//            year = ++y;
//        }
//        else {
//            month = m;
//            year = y;
//        }
//
//        return '/report/' + year + '/' + month;
//    };

}

if (Meteor.isServer) {

    //

}