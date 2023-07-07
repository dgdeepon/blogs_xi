const mongoose=require('mongoose');

const blogSchema=mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    userId:{type:String,require:true},
    no:{type:Number,require:true}
},{
    versionKey:false
});

const blogModel=mongoose.model('blogData',blogSchema);

module.exports=blogModel;