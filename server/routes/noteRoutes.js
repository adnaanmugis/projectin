const router = require("express").Router();

const upload = require("../config/multer");

const Note = require("../models/Note");

router.post("/upload",

upload.single("pdf"),

async(req,res)=>{

const note = await Note.create({

title:req.body.title,

subject:req.body.subject,

description:req.body.description,

uploadedBy:req.body.uploadedBy,

file:req.file.filename

});

res.json(note);

});

router.get("/",async(req,res)=>{

const notes=await Note.find();

res.json(notes);

});

router.put("/:id",async(req,res)=>{

const note=await Note.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(note);

});

router.delete("/:id",async(req,res)=>{

await Note.findByIdAndDelete(req.params.id);

res.json({

message:"Deleted"

});

});

module.exports=router;