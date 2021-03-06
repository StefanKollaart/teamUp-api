'use strict';

// classDay-model.js - A mongoose model
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

const classDaySchema = new Schema({
  date: { type: String, 'default': onlyDate() },
  allStudents: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  pickableStudents: [{ type: Schema.Types.ObjectId, ref: 'user'}],
  pairs: [ {type: Schema.Types.ObjectId, ref: 'pair'} ]
});

const classDayModel = mongoose.model('classDay', classDaySchema);

module.exports = classDayModel;
