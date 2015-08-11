
Template.statementItem.helpers({
    // If user has responded to the question
    userResponse: function() {
        return  Responses.findOne({
            sid: this._id,
            uid: Meteor.userId()
        });
    }
});
/*
Template.statementItem.onCreated(function() {
    // check if user has responded already
    Responses.find({
        sid: this._id,
        uid: Meteor.userId()
    }, function(res) {
        console.log(res);
    })
    this.$('.statement-content').addClass('answered');
});
*/
Template.statementItem.events({
    'click .true': function(event) {
        event.preventDefault();
        // 'this' is the statement object
        // TODO - remove insecure
        Responses.insert({
            sid: this._id,
            uid: Meteor.userId(),
            res: true
        });
    },
    'click .false': function(event) {
        event.preventDefault();
        Responses.insert({
            sid: this._id,
            uid: Meteor.userId(),
            res: false
        });
    }
});
