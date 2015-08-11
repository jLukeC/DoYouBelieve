Template.statementsList.helpers({
    statements: function() {
        return Statements.find();
    }
});
// TODO - should this just be in statement_item?
Template.statementsList.events({
    'click .true': function(event) {
        event.preventDefault();
        // 'this' is the statement object
        // TODO - remove insecure
        Responses.insert({
            sid: this._id,
            uid: Meteor.userId(),
            res: true
        });
    }
});
