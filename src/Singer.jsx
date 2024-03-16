export default
function Singer({Singer}){
    console.log(Singer);
    return(
        <dev>
            <h3>singer: {Singer.name}</h3>
            <p>age: {Singer.age}</p>
        </dev>
    )
}