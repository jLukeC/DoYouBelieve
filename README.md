# DoYouBelieve
Test how often you are fooled by political candidates' statements



# DB
Users - users on the site
Statements - A collection of statements made by politicians
Responses - How users responded to a statement (T/F) {_id,sid,uid,res}.

Responses is its own collection so we can quickly determine responses when we only have _id of the related statement (sid) or when we just have the user id who made the response (uid)
