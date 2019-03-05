describe('cipher', () => {

    it('debería ser un objeto', () => {
      assert.equal(typeof cipher, 'object');
    });
  
    describe('cipher.encode', () => {
  
      it('debería ser una función', () => {
        assert.equal(typeof cipher.encode, 'function');
      });
  
      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
        assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
      });
      
      it('debería retornar "fghij" para "abcde" con offset 5',()=>{
        assert.equal(cipher.encode(5,"abcde"),"fghij");
      });
      it('debería retornar "67890" para "12345" con offset 15',()=>{
        assert.equal(cipher.encode(15,"12345"),"67890");
      });
      it('debería retornar "$ipmb" para "#hola" con offset 1',()=>{
        assert.equal(cipher.encode(1,"#hola"),"$ipmb");
      });
      it('debería retornar "KRO D" para "HOL A" con offset 3',()=>{
        assert.equal(cipher.encode(3,"HOL A"),"KRO D");
      });
      
    });
  
    describe('cipher.decode', () => {
  
      it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
      });
  
    
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
  
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

      
    it('debería retornar "abcde" para "fghij" con offset 5',()=>{
      assert.equal(cipher.decode(5,"fghij"),"abcde");
    });

    it('debería retornar "12345" para "67890" con offset 15',()=>{
      assert.equal(cipher.decode(15,"67890"),"12345");
    });
    it('debería retornar "#hola" para "$ipmb" con offset 1',()=>{
      assert.equal(cipher.decode(1,"$ipmb"),"#hola");
    });
    it('debería retornar "HOL A" para "KRO D" con offset 3',()=>{
      assert.equal(cipher.decode(3,"KRO D"),"HOL A");
    });
  });
  });