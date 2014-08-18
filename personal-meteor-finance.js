if (Meteor.isClient) {

    Template.report.monthName = function (_month) {

        var monthNames = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];

        return monthNames[--_month];
    };

    Template.report.month = function () {
        return this.params._month;
    };

}

if (Meteor.isServer) {

    //

}