import { Template } from 'meteor/templating';
import { Characters } from '../api/brimChar.js';
import { inventorydb } from '../api/brimChar.js';
import { sidebagdb } from '../api/brimChar.js';
import { extrasdb } from '../api/brimChar.js';
import { slotsdb } from '../api/brimChar.js';
import { lvldb } from '../api/brimChar.js';
 
import './char-list.html';


  

    // # Destroy old editable if it exists

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Main Helpers and Events
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

    const name = prompt("name");
    const type = prompt("class");
    //const type = target.type.value;
    var tempCharacter = new person(name,type);
  
    //Insert new char data to collection characters (in brimChar.js)
    Characters.insert(tempCharacter,{ 
     
    });

    var char = activeCharacter();

    levelupDefault(char._id);
    extraSetup(char._id);


    Characters.update(char._id, {
      $set: {activeChar: false},
    });




    // alert("Your Character: " + name + " has been saved!");


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

    // lvldb.remove({owner: this.id});
    // inventorydb.remove({owner: this.id});
    // sidebagdb.remove({owner: this.id});
    Characters.remove(this._id);
  },

  'click .char'() {
    Characters.update(this._id, {
      $set: {activeChar: true},
    });

  	FlowRouter.go('/Details');
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charinfo Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Template.charinfo.onCreated(function() {
//   var self = this;
//   self.autorun(function () {
//     self.subscribe('Characters');
//   });
// });

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

  'click .valgoldplus'(){
    var val = prompt("Increment by:","0");
      countAdjust("+", val, "gold");
  },

    'click .valgoldmin'(){
    var val = prompt("Increment by:","0");
      countAdjust("-", val, "gold");
  },

   'click .valexpplus'(){
    var val = prompt("Increment by:","0");
      countAdjust("+", val, "exp");
  },

    'click .valexpmin'(){
    var val = prompt("Increment by:","0");
      countAdjust("-", val, "exp");
  },


  
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Equipment Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

Template.Equipment.helpers({

 inventory() {
  // alert(this._id);
    var char = activeCharacter();
    var inv = inventorydb.find({owner: char._id});
    return inv;
   },

   itemWeight() {
    var char = activeCharacter();
    var count = 0;
    var max = Number(char.maxWeight);
    var inv = inventorydb.find({owner: char._id});
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
    var char = activeCharacter();
    var itemName = prompt("item name?");
    var slots = prompt("how many upgrade slots?");
    const weight = prompt("weight of " + itemName + "?");
    var val = prompt("worth of " + itemName + "?");
    var desc = prompt("Describe " + itemName + ":");
    var itemres = basicInv(char._id,itemName,slots,weight,val,desc);
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

    'click .sideitem'(){

    inventorydb.update(this._id,{
      $set: {activeequip: true},
    });
    
    FlowRouter.go('/EquipmentItem');

    },

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebag Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.sidebag.helpers({
  inventory() {
    
    var char = activeCharacter();
    // alert(char._id);
    var inv = sidebagdb.find({owner: char._id});
    return inv;

   },

});

Template.sidebag.events({
  'click .newitem'(){
      var char = activeCharacter();
      var itemName = prompt("item name?");
      var count = prompt("How many of " + itemName + " are there ?");
      var desc = prompt("Describe " + itemName + ":");
      if (count=="") { count = 0};
      if (itemName=="") { itemName = "invalid item"};
        if (desc=="") { desc = "No Description given"};
        // alert(this._id);
      var itemres = basicSideBag(char._id,itemName,"sidebag",count,desc);
      sidebagdb.insert(itemres,{

      });
    },

  'click .delete'(){
    sidebagdb.remove(this._id);
    },

    'click .sideitem'(){

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

   inventory2() {
    var char = activeCharacter();
    var inv = sidebagdb.find({
    $and: [
        { owner: char._id },
        { activeSideBag: true }
    ]
}).fetch();
    return inv[0];

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

    sidebagdb.update(this._id,{
      $set: {activeSideBag: false},
    });

    FlowRouter.go('/Sidebag');
    },

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebagdesc Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.equipmentdesc.helpers({

   inventory2() {
    var char = activeCharacter();
    var inv = inventorydb.find({
    $and: [
        { owner: char._id },
        { activeequip: true }
    ]
}).fetch();
    return inv[0];

   },

   slotItem() {
var item = slotsdb.find({owner: this._id});
    return item;

   },

});

Template.equipmentdesc.events({
  'click .newitem'(){
      var itemName = prompt("Name?");
      var slots = prompt("How many slots does " + itemName + " cost?");
      var itemres = slotMake(this._id,itemName,slots);
      slotsdb.insert(itemres,{
      });
    },

  'click .done'(){

    inventorydb.update(this._id,{
      $set: {activeequip: false},
    });

    FlowRouter.go('/Equipment');
    },

     'click .sideitem'(){

    slotsdb.update(this._id,{
      $set: {activeSlot: true},
    });
    FlowRouter.go('/EquipmentSlot');
  },

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                slotdesc Helpers and Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Template.slotdesc.helpers({

   active() {
    var output;
  var cursor = slotsdb.find({activeSlot: true});
  output = cursor.fetch();
  //alert(output[0].name);
  return output[0];

   },

});

Template.slotdesc.events({

  'click .done'(){

    slotsdb.update(this._id,{
      $set: {activeSlot: false},
    });

    FlowRouter.go('/EquipmentItem');
    },

    'click .delete'(){
    slotsdb.remove(this._id);
    FlowRouter.go('/EquipmentItem');
    },

});

Template.lvlup.helpers({

levels() {
  var output;
  var char = activeCharacter();
  var cursor = lvldb.find({owner: char._id},{ sort: { lvl: +1 } });
  // output = cursor.fetch();
  //alert(output[0].name);
  return cursor;

   },



});

Template.lvlup.events({


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
    keys: "key/key/key",
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
    gold: 0,
    exp: 0,
    move: 1,
    activeChar: true,
  }
  return doc;
};

function basicInv(owner,name,slots,weight,val,desc)  {

   var item = {
    "owner": owner,
    "name": name,
    "type": "equipment",
    "keys": "item/item",
    "upgradeSlots":  slots,
    "weight": weight,
    "value": val,
    "desc": desc,
    "activeequip": false,
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

function activeItem(){
  var output;
  var cursor = slotsdb.find({activeSlot: true});
  output = cursor.fetch();
  return output[0];
   };

function activeSideBag(){
  var output;
  var cursor = sidebagdb.find({activeSideBag: true});
  output = cursor.fetch();
  return output;
   };

   function slotMake(owner,name,slots) {

    var item = {
    "owner": owner,
    "name": name,
    "slots": slots,
    "desc": "Default Description",
    "activeSlot": false,
  }
  return item;

   };

function countAdjust(sign, val, type) {

  var char = activeCharacter();
  var num = val;

  if (sign == "+") {
    if (type == "exp") {
      num = char.exp - (-val);
      Characters.update(char._id, {
        $set: {
          exp: num
        },
      });
    } else {
      num = char.gold - (-val);
      Characters.update(char._id, {
        $set: {
          gold: num
        },
      });
    }

  } else {
    if (type == "exp") {
      num = char.exp - val;
      Characters.update(char._id, {
        $set: {
          exp: num
        },
      });
    } else {
      num = char.gold - val;
      Characters.update(char._id, {
        $set: {
          gold: num
        },
      });
    }

  }

};

   function levelupDefault(owner) {
      var srtNum = 1;
      var endCount = 7;
      var abs = [];

      for (var i = endCount; i > 0; i--) {
        srtNum++;
        var ab = {
          "owner": owner,
          "desc" : "Level desc goes here",
          "lvl" : srtNum,
        }

        abs.push(ab);
      };

      for (var i = abs.length - 1; i >= 0; i--) {
        lvldb.insert(abs[i],{});
      }

   };

   function extraSetup(owner) {
    var extra = {
      owner: owner,
      injections: "none",
      Vquest: "none",
      Sbounty: "none",
      Obounty: "none",
      aura: "none",
      transport: "none",
      horsseShoes: "none",
      specimenJar: false,
      spiritGuide: false,
      mutantProf: false,
    };

    extrasdb.insert(extra,{});

   };
