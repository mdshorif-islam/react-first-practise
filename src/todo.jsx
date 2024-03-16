export default
function Todo({task, isDone}){
    return (
        <li> {isDone ? 'finished': 'work on'}:
        {task}</li>
    )
}