module.exports = {
   /*
    *
    */
    login:function(req,res){

        if (req.body.username === 'demo' && req.body.password === 'demo') {
            req.session.authUser = { username: 'demo' }
            return res.json({ username: 'demo' })
          }
          res.status(401).json({ error: 'Bad credentials' })
    },
    logout:function(req,res){
        delete req.session.authUser
        res.json({ ok: true });
    }

}