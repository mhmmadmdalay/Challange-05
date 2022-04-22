const { request } = require('express');
const {cars}= require('../models');
module.exports=class{
    static getCars(req,res){
        cars.findAll().then((result) => {
            // res.status(200).json({
            //     status: 200,
            //     message: "Success New Get",
            //     data: result
            // })
            res.render("index",{data:result})
        })
        
        .catch((err) => {
            console.log(err);
        });
    }
    static createCars(req,res){
        cars.create({
            nama: req.body.nama,
            tipe: req.body.tipe,
            harga: req.body.harga,
            ukuran: req.body.ukuran,
            foto: req.body.foto
        }).then((result) => {
            res.status(201).json({
                status: 201,
                message: "Success New Create",
                data: result
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    static updateCars(req,res){
        cars.update(req.body,{
            where:{
                id:req.params.id
            }
        }).then((result) => {
            res.status(201).json({
                status: 201,
                message: "Success New Update",
                data: req.body
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    static deleteCars(req,res){
        cars.destroy({
            where:{
                id:req.params.id
            }
        }).then((result) => {
            res.status(200).json({
                status: 200,
                message: "Success Delete Data",
            })
        }).catch((err) => {
            console.log(err);
        });
    }

}