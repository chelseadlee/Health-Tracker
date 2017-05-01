var app = app || {};

// Search View
// ---------------

app.SearchView = Backbone.View.extend({
    el: '#search',

    template: _.template( $('#search-template').html() ),

    initialize: function() {
        this.$el.html(this.template);
        return this;
    },

    events: {
        'click .searchbutton' : 'getFoods',
    },

    getFoods: function() {
        var name = this.$el.find('input').val();
        var items = new app.ItemList({name: name});

        items.fetch({
            success: this.renderitems.bind(this)
        });
    },

    renderitems: function(items) {
        var foodview;

        this.$el.find('#search-results').html('');

        for (var n in items.models) {
            foodview = new app.FoodView({model: items.models[n]});

            this.$el.find('#search-results').append(foodview.render().el);
        }
    }

});