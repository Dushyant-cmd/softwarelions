const express = require('express');
const routers = require('express').Router();
const bodyparser = require('body-parser');
const product = require('../models/product');
const fs = require('fs')

//body-parser
routers.use(express.urlencoded({extended: false}))

// routers.get('/Should_you_upgrade_to_windows_11_just_yet', (req, res) => {
//     res.status(200).render('Should_you_upgrade_to_windows_11_just_yet');
// })

// router.get('/copper%wire', (req, res, done) => {
//     product.findOne({title: "copper wire"}).then(data =>{        
//         res.render('order-process-details',{
//             name: req.user !== undefined ? req.user.full_name : "",
//             heading: data.heading,
//             img_src: data.img_src,
//             price: data.price,
//             currency: data.currency
//         })
//         let currentpd = JSON.stringify(data);
//         fs.writeFileSync("current_product.json", (currentpd));
//     })
// })

module.exports = routers;