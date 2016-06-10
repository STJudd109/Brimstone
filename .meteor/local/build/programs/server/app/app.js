var require = meteorInstall({"lib":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// lib/routes.js                                                                             //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
FlowRouter.route('/', {                                                                      // 1
	name: 'home',                                                                               // 2
	action: function () {                                                                       // 3
		function action() {                                                                        //
			BlazeLayout.render('main');                                                               // 4
		}                                                                                          //
                                                                                             //
		return action;                                                                             //
	}()                                                                                         //
});                                                                                          //
                                                                                             //
FlowRouter.route('/Details', {                                                               // 9
	name: 'Details',                                                                            // 10
	action: function () {                                                                       // 11
		function action() {                                                                        //
			BlazeLayout.render('charinfo');                                                           // 12
		}                                                                                          //
                                                                                             //
		return action;                                                                             //
	}()                                                                                         //
});                                                                                          //
                                                                                             //
FlowRouter.route('/Equipment', {                                                             // 17
	name: 'Equipment',                                                                          // 18
	action: function () {                                                                       // 19
		function action() {                                                                        //
			BlazeLayout.render('Equipment');                                                          // 20
		}                                                                                          //
                                                                                             //
		return action;                                                                             //
	}()                                                                                         //
});                                                                                          //
                                                                                             //
FlowRouter.route('/Sidebag', {                                                               // 25
	name: 'Sidebag',                                                                            // 26
	action: function () {                                                                       // 27
		function action() {                                                                        //
			BlazeLayout.render('sidebag');                                                            // 28
		}                                                                                          //
                                                                                             //
		return action;                                                                             //
	}()                                                                                         //
});                                                                                          //
                                                                                             //
FlowRouter.route('/SidebagItem', {                                                           // 33
	name: 'SidebagItem',                                                                        // 34
	action: function () {                                                                       // 35
		function action() {                                                                        //
			BlazeLayout.render('sidebagdesc');                                                        // 36
		}                                                                                          //
                                                                                             //
		return action;                                                                             //
	}()                                                                                         //
});                                                                                          //
                                                                                             //
FlowRouter.route('/EquipmentItem', {                                                         // 41
	name: 'EquipmentItem',                                                                      // 42
	action: function () {                                                                       // 43
		function action() {                                                                        //
			BlazeLayout.render('equipmentdesc');                                                      // 44
		}                                                                                          //
                                                                                             //
		return action;                                                                             //
	}()                                                                                         //
});                                                                                          //
///////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"brimChar.js":["meteor/mongo",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/brimChar.js                                                                   //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
exports.__esModule = true;                                                                   //
exports.extrasdb = exports.sidebagdb = exports.inventorydb = exports.Characters = undefined;
                                                                                             //
var _mongo = require('meteor/mongo');                                                        // 1
                                                                                             //
var Characters = exports.Characters = new _mongo.Mongo.Collection('characters');             // 3
var inventorydb = exports.inventorydb = new _mongo.Mongo.Collection('inventory');            // 4
var sidebagdb = exports.sidebagdb = new _mongo.Mongo.Collection('sidebag');                  // 5
var extrasdb = exports.extrasdb = new _mongo.Mongo.Collection('extras');                     // 6
///////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/brimChar.js",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// server/main.js                                                                            //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _meteor = require('meteor/meteor');                                                      // 1
                                                                                             //
require('../imports/api/brimChar.js');                                                       // 2
                                                                                             //
_meteor.Meteor.startup(function () {                                                         // 4
  // code to run on server at startup                                                        //
});                                                                                          //
                                                                                             //
// Meteor.publish('Characters', function (){                                                 //
// 	return Characters.find({});                                                              //
// });                                                                                       //
                                                                                             //
// // server                                                                                 //
// Meteor.publish('posts-recent', function publishFunction() {                               //
//   return BlogPosts.find({}, {sort: {date: -1}, limit: 10});                               //
// }                                                                                         //
                                                                                             //
// // client                                                                                 //
// Meteor.subscribe('posts-recent');                                                         //
///////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/routes.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
