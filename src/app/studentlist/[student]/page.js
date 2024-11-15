'use client';
const student=({params})=>{
    console.log(params);
    return(
        <>
        <h1>Name is: {params.student}</h1>
        </>
    )
}
export default student;