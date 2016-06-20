// import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

// export const Characters = new Mongo.Collection('characters');
// export const inventorydb = new Mongo.Collection('inventory');
// export const slotsdb = new Mongo.Collection('slots');
// export const sidebagdb = new Mongo.Collection('sidebag');
// export const abilitiesdb = new Mongo.Collection('abilities');
// export const effectsdb = new Mongo.Collection('effects');
// export const ammodb = new Mongo.Collection('ammo');
// export const lvldb = new Mongo.Collection('lvl');
// export const extradb = new Mongo.Collection('extra');

var list = new Ground.Collection(null);

export var Characters = new Ground.Collection('characters', { connection: null });
export var inventorydb = new Ground.Collection('inventory', { connection: null });
export var slotsdb = new Ground.Collection('slots', { connection: null });
export var sidebagdb = new Ground.Collection('sidebag', { connection: null });
export var abilitiesdb = new Ground.Collection('abilities', { connection: null });
export var effectsdb = new Ground.Collection('effects', { connection: null });
export var ammodb = new Ground.Collection('ammo', { connection: null });
export var lvldb = new Ground.Collection('lvl', { connection: null });
export var extradb = new Ground.Collection('extra', { connection: null });