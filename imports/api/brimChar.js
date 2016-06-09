import { Mongo } from 'meteor/mongo';

export const Characters = new Mongo.Collection('characters');
export const inventorydb = new Mongo.Collection('inventory');
export const sidebagdb = new Mongo.Collection('sidebag');
export const extrasdb = new Mongo.Collection('extras');