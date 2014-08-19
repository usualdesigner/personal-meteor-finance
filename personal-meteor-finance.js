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

    Template.report.events({

        'submit form': function(e) {

            e.preventDefault();

            var incoming = {
                d: parseInt($(e.target).find('[name=d]').val()),
                m: parseInt($(e.target).find('[name=m]').val()),
                y: parseInt($(e.target).find('[name=y]').val()),
                value: parseInt($(e.target).find('[name=value]').val()),
                description: $(e.target).find('[name=description]').val()
            }

            incoming._id = Incoming.insert(incoming);

        },

        'click .incoming-remove': function(e) {

            e.preventDefault();

            Incoming.remove(this._id);

        }

    });

}

if (Meteor.isServer) {

    //

}