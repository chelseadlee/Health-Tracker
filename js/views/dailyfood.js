var app = app || {};


// Daily Food Item View
// --------------

app.DailyFoodView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#daily-item-template').html()),

    events: {
        'click .remove': 'removefromdaily'
    },

    initialize: function(options) {
        if (options.model)
            this.model = options.model;
        // this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);

    },

    render: function() {
        this.$el.html( this.template( this.model.attributes.fields ) );
        return this;
    },

    removefromdaily: function() {
        this.model.destroy();
    }
});