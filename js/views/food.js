var app = app || {};


// Food Item View
// --------------

app.FoodView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#item-template').html()),

    events: {
        'click .add': 'addToDaily'
    },

    initialize: function(options) {
        if (options.model)
            this.model = options.model;

        // this.listenTo(this.model, 'change', this.render);
    },

    render: function() {

        this.$el.html(this.template( this.model.attributes.fields ));
        return this;
    },

    addToDaily: function() {

        var todayFood = this.model.toJSON();
        app.Today.create(todayFood);
    }
});