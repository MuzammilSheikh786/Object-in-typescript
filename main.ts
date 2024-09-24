

type data = {
    my_Name:string,
    My_Age:number,
    My_Roll_No:number,
    Friend_Data:{
        Friend_Name:string,
        Age:number,
        Rollno: number,
    }
}


let My_data:data = {
     my_Name:"Sufiyan", My_Age:25,My_Roll_No:321,
Friend_Data:{
    Friend_Name:"Aqib",
    Age:20,
    Rollno: 123

}
      
}
console.log(My_data.Friend_Data.Friend_Name);


type T_type ={
    name:string
    Exp:number,
};
type S_type={
    name:string,
    Roll_No:number,
}

// 1st Method

let Teacher:T_type={
    name:"Zain",
    Exp:5,

}
let Student:S_type={
    name:"Sohail",
    Roll_No:567,
}

// 2nd Method
let both: T_type & S_type = {
    name:"Amir",
    Exp:5,
    Roll_No:567
}
console.log(both);




