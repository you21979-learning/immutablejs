var BinaryArray = require('binaryarray');
var I = require('immutable');

var JOB = I.Map({
    NONE : 0,
    FIGHTER : 1,
    MAGE : 2,
    PRIEST : 3,
    MONK : 4,
    KNIGHT : 5,
    SUMMONER : 6,
});

var j = JOB.toJS()
var s = JOB.toSeq()
var o = JOB.toObject()
var JOB_MAX = JOB.max() + 1;

console.log(j);

