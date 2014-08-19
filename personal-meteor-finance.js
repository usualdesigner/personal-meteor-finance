if (Meteor.isClient) {

    Template.report.helpers({

        monthName: function (m) {

            var monthNames = [ "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December" ];

            return monthNames[--m];
        },

        incoming: function () {

            return Incoming.find({m: parseInt(this.currentMonth), y: parseInt(this.currentYear)}, {sort: {d: 1, trend: 1}});

        },

        incoming_expense_sum: function () {

            collection = Incoming.find({m: parseInt(this.currentMonth), y: parseInt(this.currentYear), trend: 'expense'});

            sum = 0;

            collection.forEach(function(element, index, array){
                sum+= element.value;
            });

            return sum;

        },

        incoming_earning_sum: function () {

            collection = Incoming.find({m: parseInt(this.currentMonth), y: parseInt(this.currentYear), trend: 'earning'});

            sum = 0;

            collection.forEach(function(element, index, array){
                sum+= element.value;
            });

            return sum;

        }

    });

}

if (Meteor.isServer) {

    //

}