// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');
// 2 params: string description and function
describe('Saving records',function(){

    // Create tests
    // it() describe a single test
    it('Saves a record to the database', function(done){

        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });

    });

    //next text

});
