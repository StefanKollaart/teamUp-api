'use strict';

// pair-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function onlyDate() {
  var dateObject = new Date();
  var day = dateObject.getDate();
  var month = dateObject.getMonth() + 1;
  var year = dateObject.getFullYear();
  console.log(year + "-" + month + "-" + day);
  return year + "-" + month + "-" + day;
}

const pairSchema = new Schema({
  students: [ Schema.Types.ObjectId ],
  date: { type: String, 'default': onlyDate() },
});

const pairModel = mongoose.model('pair', pairSchema);

module.exports = pairModel;
