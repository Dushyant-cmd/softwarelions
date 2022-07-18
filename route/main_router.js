const express = require('express')
const routers = express.Router();
const path = require('path');
const bodyparser = require('body-parser')
const fs = require('fs');
const blog = require('../models/blog');
const askme = require('../models/Askme');
const newsletter = require('../models/newsletter');
const nodemailer = require('nodemailer');

//body-parser
routers.use(express.urlencoded({extended: false}));

routers.get('/', (req, res) =>{
    res.status(200).render('home');

    // const userpass = req.user.password;

    // loginuser.findOne({ pass: userpass })
    // .then(user => {
    //     res.status(200).render('home', {
    //         name: user !== undefined ? user.username : ""
    //     });
    // }).catch(console.error("error"))
});


routers.get('/About', (req, res) =>{
    res.status(200).render('about');
});

routers.get('/Blog', (req, res) =>{
    res.status(200).render('blog');
});

routers.get('/Services', (req, res) =>{
    res.status(200).render('services');
});

routers.get('/Contact-Us', (req, res) =>{
    res.status(200).render('contact');
});

routers.get('/Should_you_upgrade_to_windows_11_just_yet', (req, res) => {
    res.status(200).render('Should_you_upgrade_to_windows_11_just_yet');
})

routers.get('/search_results', (req, res, next) =>{
    const user_title = req.query.title;
    blog.find({ title: {$regex: user_title,$options:"$i"}}).then(data => {
        let filterusersstring = JSON.stringify(data);
        fs.writeFileSync('filterdata.json', filterusersstring) 
        res.status(200).render('search-results');
    });
});

routers.get('/search_res', (req, res, next) =>{
    const user_title = req.query.title;
    blog.find({ title: {$regex: user_title,$options:"$i"}}).then(data => {
        let filterusersstring = JSON.stringify(data);
        fs.writeFileSync('filterdata.json', filterusersstring) 
        res.status(200).render('search-results');
    });

});

//Save form data in atlas for queries
routers.post('/Askme', (req, res) =>{    
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    let full_date = date + "/" +  month + "/" + year;
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    let full_time = hours + ":" + minutes;
    let final_date_with_time = full_date + "(" + full_time + ")"
    const askme_details = new askme({
            full_name: req.body.full_name,
            e_mail: req.body.e_mail,
            message: req.body.msg_contact,
            date_time: final_date_with_time
     })
    askme_details.save();
    res.status(200).render('contact');
})

//Save form data in atlas for queries
routers.post('/', (req, res) =>{    
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    let full_date = date + "/" +  month + "/" + year;
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    let full_time = hours + ":" + minutes;
    let final_date_with_time = full_date + "(" + full_time + ")"
    const newsletter_details = new newsletter({
            email: req.body.email,
            date_time: final_date_with_time
     })
     newsletter_details.save();
    res.status(200).render('home');
})

module.exports = routers;