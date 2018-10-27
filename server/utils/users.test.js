const expect = require('expect');


const {Users} = require('./users');

describe('Users', () => {
  var users;


  beforeEach(() =>{
   users = new Users();
   users.users = [{
     id: '1',
     name: 'Mike',
     room: 'Node Course'
   },{
     id: '2',
     name: 'Robert',
     room: 'Node Course'
   },{
     id:'3',
     name: 'Mona',
     room: 'React Course'
   }]
  });
    it('should add new user', () => {
      var users = new Users();
      var user = {
        id: '123',
        name: 'Andrew',
        room: 'The Room'
      };
      var resUser =  users.addUser(user.id, user.name, user.room);
      expect(users.users).toEqual([user]);
    });


    it('should remove a user', () => {
      var userId ='2';
      var user = users.removeUser(userId);
      //console.log('user',user);
      expect(user.id).toBe(userId);
    });

    it('should not remove a user', () => {

    });

    it('should find user', () =>{
        var userId ='2';
        var user = users.getUser(userId);
        //console.log('user',user);
        expect(user.id).toBe(userId);
    });

    it('should nor find user', () =>{
      var userId =33;
      var user = users.getUser(userId);
      //console.log('user',user);
      expect(user).toBeFalsy();
    });

    it('should return names for node course', ()=>{
      var userList =users.getUserList('Node Course');

      expect(userList).toEqual(['Mike','Robert']);
    });

    it('should return names for react course', ()=>{
      var userList =users.getUserList('React Course');

      expect(userList).toEqual(['Mona']);
    });


});
