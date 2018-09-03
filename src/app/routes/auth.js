module.exports = function(app, fs){

  //manage user logins
  app.get('/api/auth', (req, res) => {
    var uname = req.query.username;
    var userObj;

    fs.readfile('assets/jsonFiles/userList.json', 'utf8', function(err, data) {
      if(err) {
        console.log(err);
        res.send({'username': '', 'success': false});
      } else {
        userObj = JSON.parse(data);
        for (let i=0; i<userObj.length; i++){
          if(userIbj[i].name == uname) {
            res.send({'username': uname, 'success': true});
            return;
          }
        }
        res.send({'username': uname, 'success': false});
      }
    })

  })
}
