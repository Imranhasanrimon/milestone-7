
export default function Todo({ serial, task, isDone }) {
    // if (isDone) {
    //     return (
    //         <li>task {serial}: {task} (finished)</li>
    //     )
    // } else {
    //     return <li>task {serial}: {task} (Not finished)</li>
    // }


    return (
        <li className="student">task {serial}: {task} ({isDone ? 'finished' : 'Not Finished'})</li>
    )

}