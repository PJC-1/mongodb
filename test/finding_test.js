const assert = require('assert');
const MarioChar = require('../models/mariochar');
// 2 params: string description and function
describe('Finding records',function(){

    beforeEach(function(done){
      var char = new MarioChar({
          name: 'Mario'
      });

      char.save().then(function(){
          assert(char.isNew === false);
          done();
      });
    });

    it('Finds one record from the database', function(done){

        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });

    });

});
