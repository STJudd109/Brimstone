import { Mongo } from 'meteor/mongo';

export const Characters = new Mongo.Collection('characters');
export const inventorydb = new Mongo.Collection('inventory');
export const slotsdb = new Mongo.Collection('slots');
export const sidebagdb = new Mongo.Collection('sidebag');
export const abilitiesdb = new Mongo.Collection('abilities');
export const extrasdb = new Mongo.Collection('extras');
export const lvldb = new Mongo.Collection('lvl');