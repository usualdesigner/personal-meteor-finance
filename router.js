Router.map(function () {
    this.route('home', {path: '/'});
    this.route(
        'report', {
            path: '/report/:_year/:_month',
            data: function () {

                var nextMonth,
                    nextYear,
                    prevMonth,
                    prevYear,
                    currentMonth = this.params._month,
                    currentYear = this.params._year;

                if ((parseInt(currentMonth) - 1) == 0) {
                    prevMonth = 12;
                    prevYear = parseInt(currentYear) - 1;
                } else {
                    prevMonth = parseInt(currentMonth) - 1;
                    prevYear = currentYear;
                }

                if ((parseInt(currentMonth) + 1) == 13) {
                    nextMonth = 1;
                    nextYear = parseInt(currentYear) + 1;
                } else {
                    nextMonth = parseInt(currentMonth) + 1;
                    nextYear = currentYear;
                }

                templateData = {
                    nextMonth: nextMonth,
                    nextYear: nextYear,
                    prevMonth: prevMonth,
                    prevYear: prevYear,
                    currentMonth: currentMonth,
                    currentYear: currentYear
                };
                return templateData;

            }
        }
    );
    this.route('notFound', {
        path: '*'
    });

});

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});