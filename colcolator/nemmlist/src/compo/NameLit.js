import React from 'react'
//import Parson from './Parson'
import './myStyle.css'
function NameLit(props) {

let className=props.orzu ?'orzu':''
const name=['Obid', 'Shxlo' ,'Laylo','Obid']



/*
const parsons=[{
    id:0,
    name:"Olima",
    lastName: "Olimova ",

    age:11,
    skill:"java",

},


{
id:1,
name:"Shaxnoza",
lastName:"Bobokhonova",
age:   32,
skill:"js",

},
{
id:2,
name:"Akbarali",
lastName:"olimov",
age: 6,
skill: "angliar"
}

]
*/

//const pasonList=parsons.map(parson=> <Parson key={parson.name}  parson={parson}   > </Parson>)

const nameList=name.map((name,index)=><h1 key={index  } className= {` ${ className }  font-xl` }> {index} {name}</h1>)

    return  <div> {nameList} </div>
    
}

export default NameLit
