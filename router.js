Router.map(function() {
    this.route('home',{path: '/'});
    this.route(
        'report', {
            path: '/report/:_year/:_month',
            data: function (){
                templateData = {
                    _year: this.params._year,
                    _month: this.params._month
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