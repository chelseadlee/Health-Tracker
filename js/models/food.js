var app = app || {};

// Item Model (food item)
// ----------------------



app.Item = Backbone.Model.extend({
    defaults: {
        name: '',
        added: false
    }
});