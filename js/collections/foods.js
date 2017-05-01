var app = app || {};

// Items Collection
// --------------

app.ItemList = Backbone.Collection.extend({

    initialize: function(options) {
        if (options.name)
            this.name = options.name;
    },

    url: function() {
        return "https://api.nutritionix.com/v1_1/search/" + this.name +
        "?results=0%3A10&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_total_fat&appId=8c450c62&appKey=d7b0a4850e8d1be3bd64a5b3a337ebb4"
        console.log("did something");
    },

    parse: function(response) {
        return response.hits;
    }
});
