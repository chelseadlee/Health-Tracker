var app = app || {};

// The Application
// ---------------


app.AppView = Backbone.View.extend({
    el: '#healthtracker',

    initialize: function() {
        // TODO load preexisting info from firebase
        this.render();
    },

    render: function() {
        console.log('eek');
        this.searchview = new app.SearchView();
        this.dailyview = new app.DailyView({collection: app.Today});

        this.$('#main')
            .append(this.searchview)
            .append(this.dailyview);
    }
});
