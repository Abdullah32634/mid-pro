var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');
var md5 = require('md5');

router.get('*', function(req, res, next){
	if(req.cookies['token'] == 'member'){
		next();
	}else{
		res.redirect('/login');
		
	}
});

router.get('/', function(req, res){
	
	if(req.cookies['token'] == 'member'){
		console.log(req.cookies['token']);
		userModel.getByUname(req.cookies['uname'], function(result){
			res.render('memberHome/index', {user: result});
		});

	}else{
		res.redirect('/logout');
	}
});

router.get('/allPackage',function(req,res){
	userModel.getAllPackage(null,function(result){
		res.render('memberHome/allPackage.ejs',{details:result});
	});
	
});

router.get('/profileUpdate', function(req, res){
	
	if(req.cookies['token'] == 'member'){
		console.log(req.cookies['token']);
		userModel.getByUname(req.cookies['uname'], function(result){
			res.render('memberHome/profileUpdate', {details: result});
		});

	}else{
		res.redirect('/logout');
	}
});

router.get('/payment', function(req, res){
	
	if(req.cookies['token'] == 'member'){
		console.log(req.cookies['token']);
		{
			res.render('memberHome/pay');
		};

	}else{
		res.redirect('/logout');
	}
});






router.post('/profileUpdate', function(req, res){
	
	if(req.cookies['token'] == 'member'){

		var info = {
		uid :req.body.uid,
		name : req.body.name,
		username : req.body.username,
		password : req.body.password,
		contact : req.body.contact,
		type : req.body.type
		};

		userModel.update(info, function(result){
			res.redirect('/memberHome');
		});

	}else{
		res.redirect('/logout');
	}
});


router.get('/allpackage', function(req, res){
	
	if(req.cookies['token'] == 'member'){
		console.log(req.cookies['token']);
		{
			res.render('memberHome/allpackage');
		};

	}else{
		res.redirect('/logout');
	}
});


router.get('/search', function(req, res){
	
	if(req.cookies['token'] == 'member'){
		console.log(req.cookies['token']);
		{
			res.render('memberHome/search');
		};

	}else{
		res.redirect('/logout');
	}
});

router.get('/allPackage',function(req,res){
	userModel.getAllPackage(null,function(result){
		res.render('memberHome/allPackage',{details:result});
	});
	
});
router.get('/bookpackage', function(req, res){
	
	if(req.cookies['token'] == 'member'){
		console.log(req.cookies['token']);
		{
			res.render('memberHome/bookpackage');
		};

	}else{
		res.redirect('/logout');
	}
});



module.exports = router;