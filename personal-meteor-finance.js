if (Meteor.isClient) {

    Template.report.helpers({

        monthName: function (m) {

            var monthNames = [ "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December" ];

            return monthNames[--m];
        },

        incoming: function () {

            return Incoming.find({m: parseInt(this.currentMonth), y: parseInt(this.currentYear)});

        }

    });

}

if (Meteor.isServer) {

    //

}