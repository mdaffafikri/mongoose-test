const mongoose = require('mongoose')
const {
    Schema
} = mongoose

mongoose.connect("mongodb://localhost/tutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//check error
const db = mongoose.connection
db.on('error', () => {
    console.log('connection error');
})

//check success
db.once('open', () => {
    console.log('successfully connected');
})

const kelasSchema = new Schema({
    judul: String,
    deskripsi: String,
    tglPosting: {
        type: Date,
        default: Date.now,
    },
})

const Kelas = mongoose.model('Kelas', kelasSchema)

// const nodejs = new Kelas({
//     judul: 'nodejs',
//     deskripsi: 'Descriptionnn',
// })

// nodejs.save((error, data) => {
//     if(error) console.log(error);

//     console.log(data);
//     console.log("Class successfully created");
// })

//cara 2
// const express = new Kelas()
// express.judul = 'express'
// express.deskripsi = 'deksripsi'

// express.save((error, data) => {
//     if(error) console.log(error);

//     console.log(data);
//     console.log("Class successfully created");
// })

//cara 3
// Kelas.create({
//     judul: 'reactjs',
//     deskripsi: 'Deskripsi react'
// }, (err, data) => {
//     if (err) console.log(err);

//     console.log(data);
//     console.log("Class successfully created");
// })

//find all
// Kelas.find((error, data) => {
//     if(error) console.log(error);

//     console.log(data);
// })

// Kelas.findOne( {judul: /exp/}, (error, data) => {
//     if(error) console.log(error);

//     console.log(data);
// })

// Kelas.findById("5ff3ee59d46fd32670bb58f7", (error,data) => {
//     if(error) console.log(error);

//     console.log(data);
// })

//async
const qry = Kelas.find({judul: 'nodejs'})
qry.select('judul tglPosting')
qry.exec( (err, data) => {
    if(err) console.log(err);

    console.log(data);
})