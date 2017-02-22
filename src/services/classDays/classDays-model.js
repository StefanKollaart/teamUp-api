'use strict';

// classDays-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pairSchema = new Schema({
    students: [ Schema.Types.ObjectId ],
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now },
});

const classDaysSchema = new Schema({
  pairs: [pairSchema],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const classDaysModel = mongoose.model('classDays', classDaysSchema);

module.exports = classDaysModel;
