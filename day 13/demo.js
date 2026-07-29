

//update("condition" ,"updateCommand" , "options")
//1-change field value
db.instructors.updateOne({firstName:"noha"}, {$set:{lastName:"Ali"}})

//2-add field
db.instructors.updateOne({firstName:"Ahmed"} ,{$set:{age:40}})

//3-remove field
db.instructors.updateOne({firstName:"Ahmed"} ,{$unset:{age:""}} )

//4-rename
db.instructors.updateMany({} ,{$set:{Gender:"male"}})
db.instructors.updateMany({} ,{$rename:{Gender:"gender"}})

db.instructors.updateMany({firstName:"Mira"} ,{$set:{lastName:"Ali"}} ,{upsert:true})


//upnormal field
//address==>object
//1-change field value
db.instructors.updateMany({_id:6} ,{$set:{"address.street":30}})
//2-add field
db.instructors.updateMany({_id:6} ,{$set:{"address.floor":5}})
//3-remove
db.instructors.updateMany({_id:6} ,{$unset:{"address.buildingNum" :"hjgjhgbhj"}})
//4-rename
db.instructors.updateMany({} ,{$rename:{"address.building":"address.buildingNum"}})

//Array
//1-changeValue
db.instructors.updateOne({_id:6} ,{$set:{courses:"es6"}})

//change value for specified element by index
db.instructors.updateOne({_id:7} ,{$set:{"courses.0":"js"}} )
//db.instructors.updateOne({_id:7} ,{$set:{"courses[1]":"js"}} ) //xxxxx

//change value for specified element anonymouse
db.instructors.updateOne({_id:7 ,courses:"mvc"} ,{$set:{"courses.$":"html"}})

//push new elem
db.instructors.updateOne({_id:7},{$push:{courses:"nodeJs"}})



//remove
db.instructors.updateOne({_id:7},{$pop:{courses:-1}})
db.instructors.updateOne({_id:7},{$pull:{courses:"nodeJs"}})
db.instructors.find()




//createCollection with schema
db.createCollection("students",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            properties:{
                firstName:{bsonType:"string"},
                lastName:{bsonType:"string"},
                age:{bsonType:"number" ,maximum:15}
            }
        } //jsonSchema
    } //validator
})
db.getCollectionInfos({name:"students"})
//modify collection
db.students.runCommand("collMod" ,{
    validator:{
                "$jsonSchema" : {
                    "bsonType" : "object",
                    required:["firstName","lastName"],
                    additionalProperties:false,
                    "properties" : {
                        _id:{},
                        "firstName" : {
                            "bsonType" : "string"
                        },
                        "lastName" : {
                            "bsonType" : "string"
                        },
                        "age" : {
                            "bsonType" : "number",
                            "maximum" : 15.0
                        }
                    }
                }
            }
            ,validationAction:"error" ,
            validationLevel:"moderate"
})
db.students.insert({firstName:5454  })
db.students.insert({firstName:"Hamed" , lastName:"Ali" ,age:10 ,salary:1000})
db.students.updateOne({_id:5},{$set:{age:100}})
db.students.updateOne({_id:ObjectId("699d74a52502540352072f8a")},{$set:{age:100}})

