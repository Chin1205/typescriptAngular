export const testFunction = () => {
    console.log("Hello to Typescript")
}

var parent:any;
parent = "myString";
parent = 500;

var nameArray:string[] = [];
var otherArray = new Array(10);

nameArray.push("myName");
otherArray.push("newName");

export enum Days { 
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

interface Plane {
    name:string
    model:string
    fly: (destination:string) => string
}

export const addPlane = (data:Plane) => {

}

function addPlane2(data:Plane) {

}

var planeList:Plane[] = [];

export const loopPlane = () => {
    planeList.forEach((item) => {
        console.log(item)
    })

}



testFunction();

