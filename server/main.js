import { Meteor } from 'meteor/meteor';
import '../imports/api/brimChar.js';

Meteor.startup(() => {
  // code to run on server at startup
});

// Meteor.publish('Characters', function (){
// 	return Characters.find({});
// });



 // // server
 // Meteor.publish('posts-recent', function publishFunction() {
 //   return BlogPosts.find({}, {sort: {date: -1}, limit: 10});
 // }



 // // client
 // Meteor.subscribe('posts-recent');