var app = app || {};

// Daily Items Collection
// ----------------------

var DailyList = Backbone.Collection.extend({

    model: app.Item,
    localStorage: new Backbone.LocalStorage('daily-intake'),

    initialize: function(options) {
        console.log("init dailylist collection - " + app.Item);
    },

    getCalorieTotal: function() {

        var allModels = app.Today.toJSON();
        var calories = _.chain(allModels)
        .map(function(obj){ return obj.fields.nf_calories; })
        .reduce(function(counts, calorie) {
            return counts + calorie;
        }, 0);
        console.log(calories);
        return calories._wrapped;
    }

});

app.Today = new DailyList();