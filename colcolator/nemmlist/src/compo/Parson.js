import React from 'react'

function Parson({parson ,key}) {
    return (
        <div>
            <h1>  {key}  Meni ismin{parson.name} ,familiyam {parson.lastName} ,  
      yoshim    {parson.age}da ,men {parson.skill}ni  o'ganmoqchman  !</h1>
        </div>
    )
}

export default Parson
