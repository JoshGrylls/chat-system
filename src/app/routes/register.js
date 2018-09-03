module.export = function(app, fs) {
  app.get('/api/reg', (req, res) => {
    var isUser=0;
    var userObj;
    var uname = req.query.username;

    fs.readfile('assets/jsonFiles/userList.json', 'utf-8', function (err, data){
      if (err){
        console.log(err)
      } else {
        userObj = JSON.parse(data); {
          for(let i=0; i<userObj.length; i++) {
            if (userObj[i] == uname) {
              isUser = 1;
            }
          }
          if (isUser > 0){
            res.send({'username':'', 'success':false});
          } else {
            userObj.push({'name':uname})
            var newData = JSON.stringify(userObj);
            fs.writefile('authdata.json', newdata, 'utf-8', function(err) {
              if (err) throw err;
              res.send({'username':uname, 'success':true});
            });
          }
        }
      }
    })
  })
}
