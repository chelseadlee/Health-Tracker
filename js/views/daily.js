var app = app || {};

// Daily Food Intake View
// ----------------------

// handle creation of new food items added to and rendering ...

app.DailyView = Backbone.View.extend({

    el: '#today',

    template: _.template( $('#daily-template').html() ),

    initialize: function() {
        this.$el.html(this.template({collection: this.collection}));

        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'destroy', this.calCount);
        return this;
    },

    render: function(items) {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    addOne: function( item ) {
        var dailyitem = new app.DailyFoodView({ model: item });
        $('#daily-foods').append( dailyitem.render().el );
        this.calCount();
    },

    calCount: function() {
        var calTotal = this.$el.find('#calTotal');
        calTotal.empty();
        calTotal.append(this.collection.getCalorieTotal());
    }
});


