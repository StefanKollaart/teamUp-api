'use strict';

// pair-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pairSchema = new Schema({
  students: [{ type: Schema.Types.ObjectId, ref: 'user' }],
});

const pairModel = mongoose.model('pair', pairSchema);

module.exports = pairModel;
