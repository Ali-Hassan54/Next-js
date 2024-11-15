'use client';
const lecture=({params})=>{
    console.log(params)
    return(
        <>
        <h3>Lecture {params.lecture[0]}</h3>
        <h3>Lecture {params.lecture[1]}</h3>

        </>
    )
}
export default lecture;