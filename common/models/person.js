module.exports = function(Person) {
  Person.test = function(cb) {
    Person.find({
      name: "Jake"
    }).then(function(p) {
      console.log(p);
      cb(null, p);
    }).catch(function(err) {
      console.log(err);
      cb(err);
    });
  };

  Person.remoteMethod(
    'test',
    {
      isStatic: true,
      http: {path: '/test', verb: 'get'},
      returns: {type: 'object', root: true}
    }
  );
};
