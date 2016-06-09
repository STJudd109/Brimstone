import { Template } from 'meteor/templating';
import { Characters } from '../api/brimChar.js';
import { inventorydb } from '../api/brimChar.js';
import { sidebagdb } from '../api/brimChar.js';
import { extrasdb } from '../api/brimChar.js';
 
import './char-list.html';


  

    // # Destroy old editable if it exists

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                inventory Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.main.helpers({ //try clist
  Characters() {
    return Characters.find({}, { sort: { createdAt: +1 } });
  },
});

Template.main.events({

  'click .clear' (){

  },

  'click .save'(event) {
    //prevent defaulting submit
    event.preventDefault();

    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    //const type = target.type.value;
    var tempCharacter = new person(name,type);
  
    //Insert new char data to collection characters (in brimChar.js)
    Characters.insert(tempCharacter,{ 
     
    });

    alert("Your Character: " + name + " has been saved!");
    document.getElementById('name').value = "";


  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charlist Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

Template.charlist.helpers({
	// tempchar() {
 //  	return Characters.findOne({name});
 //  },
});

Template.charlist.events({
  // 'click .toggle-checked'() {
  //   // Set the checked property to the opposite of its current value
  //   Tasks.update(this._id, {
  //     $set: { checked: ! this.checked },
  //   });
  // },
  'click .delete'() {

    Characters.remove(this._id);
  },

  'click .edit'() {

    Characters.update(this._id, {
      $set: {activeChar: true},
    });

  	FlowRouter.go('/Details');
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charinfo Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

Template.charinfo.onCreated(function() {
  var self = this;
  self.autorun(function () {
    self.subscribe('Characters');
  });
});

Template.charinfo.helpers({

 activeCharacter(){
  var output;
  var cursor = Characters.find();
  cursor.forEach(function(doc){
    if (doc.activeChar == true) {
      output = doc;
    }
  });
  return output;
   },

   // inventory() {
   //  var char = activeCharacter();
   //  var inv = inventorydb.find({owner: this._id});
   //  return inv;
   // },

// returns all keys and props of object
   stat() {
    var atts = [];
    var char = activeCharacter2();
    for (var key in char) {
      var obj = char[key];
      for (var prop in obj) {
        atts.push({key : prop, prop: obj[prop]});
      };
    };
    return atts;
   },


});

Template.charinfo.events({

  'click .back'(){
  Characters.update(this._id, {
        $set: {activeChar: false},
      });
  FlowRouter.go('home');
  },
  

  // 'click td'(event) {
  //   var target = event.target;
  //   var self = target.innerHTML.value;
  //   var res = prompt("old val: "+ self+ ", what is the new val?",self);
  //   alert(this._id + " " + )

  //    // Characters.update(this._id,{

  //    // });
  // },
  
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Equipment Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

Template.Equipment.helpers({
  inventory() {
    
    var char = activeCharacter();
    var inv = inventorydb.find({owner: this._id});
    return inv;

   },
   itemWeight() {

    var char = activeCharacter();
    var count = 0;
    var max = Number(char.maxWeight);
    var inv = inventorydb.find({owner: this._id});
    var obj = inv.fetch();
    var curr;

    for (var items in obj) {
      curr = Number(obj[items].weight);
       count += curr
    }
    if (count >= max) {
     return count + " / " + char.maxWeight + " Your Character is overweight !!!";
    } else {
      return count + " / " + char.maxWeight;
    }
   },

});

Template.Equipment.events({
  'click .newitem'(){

    var itemName = prompt("item name?");
    var slots = prompt("how many upgrade slots?");
    const weight = prompt("weight of " + itemName + "?");
    var val = prompt("worth of " + itemName + "?");
    var desc = prompt("Describe " + itemName + ":");
    var itemres = basicInv(this._id,itemName,slots,weight,val,desc);
    inventorydb.insert(itemres,{

    });
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                inventory Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.inventoryitem.helpers({

});

Template.inventoryitem.events({

  'click .delete'(){
    inventorydb.remove(this._id);
    },

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebag Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.sidebag.helpers({
  inventory() {
    
    var char = activeCharacter();
    var inv = sidebagdb.find({owner: this._id});
    return inv;

   },

});

Template.sidebag.events({
  'click .newitem'(){

      var itemName = prompt("item name?");
      var count = prompt("How many of " + itemName + " are there ?");
      var desc = prompt("Describe " + itemName + ":");
      var itemres = basicSideBag(this._id,itemName,"sidebag",count,desc);
      sidebagdb.insert(itemres,{

      });
    },

  'click .delete'(){
    sidebagdb.remove(this._id);
    },

    'click .row'(){

    sidebagdb.update(this._id,{
      $set: {activeSideBag: true},
    });
    
    FlowRouter.go('/SidebagItem');

    },

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebagdesc Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.sidebagdesc.helpers({

   sideItem() {
    
  var char = activeCharacter();
    var bag = sidebagdb.find({activeSideBag: true}).count();
    alert(bag);
    return bag;

   },

});

Template.sidebagdesc.events({
  // 'click .newitem'(){

  //     var itemName = prompt("item name?");
  //     var count = prompt("How many of " + itemName + " are there ?");
  //     var desc = prompt("Describe " + itemName + ":");
  //     var itemres = basicSideBag(this._id,itemName,"sidebag",count,desc);
  //     sidebagdb.insert(itemres,{
  //     });
  //   },

  'click .done'(){
    FlowRouter.go('/Sidebag');
    },

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Classes and Functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function person(name, type) {
  // var invBuild = invBuild();
  var doc = {
    name: name,
    class: type,
    lvl: 1,
    inventory: name,
    agility: 1,
    strength: 1,
    health: 10,
    defense: 5,
    armor: 0,
    cunning: 0,
    lore: 0,
    sanity: 0,
    willpower: 0,
    Sarmor: 0,
    spirit: 0,
    luck: 0,
    melee: 0,
    combat: 0,
    range: 0,
    maxGrit: 0,
    initiative: 0,
    corruption: 1,
    darkStone: 0,
    maxWeight: 10,
    gold: 100,
    exp: 1000,
    move: 1,
  }
  return doc;
}

function basicInv(owner,name,slots,weight,val,desc)  {
   var item = {
    "owner": owner,
    "name": name,
    "type": "equipment",
    "keys": "item",
    "upgradeSlots":  slots,
    "weight": weight,
    "value": val,
    "desc": desc,
  }
  return item;
};

function basicSideBag(owner,name,type,count,desc)  {

   var item = {
    "owner": owner,
    "name": name,
    "type": type,
    "count": count,
    "desc": desc,
    "activeSideBag": false,
  }
  return item;
};

// function invBuild() {
//   var item1 = new basicInv(this._id,"Mr. Sword");
//   var item2 = new basicInv(this._id,"Shield");
//   var item3 = new basicInv(this._id,"Dagger");
//   var arr = [item1,item2,item3];
//   return arr;
// };

function activeCharacter(){
  var output;
  var cursor = Characters.find();
  cursor.forEach(function(doc){
    if (doc.activeChar == true) {
      output = doc;
    }
  });
  return output;
   };

function activeCharacter2(){
  var output;
  var cursor = Characters.find({activeChar: true});
  output = cursor.fetch();
  return output;
   };

function activeSideBag(){
  var output;
  var cursor = sidebagdb.find({activeSideBag: true});
  output = cursor.fetch();
  return output;
   };
