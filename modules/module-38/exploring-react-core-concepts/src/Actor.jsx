import './actor.css'
import Todo from './todo'
export default function Actor({ name }) {
    return (
        <> <li className="actor">Name: {name}</li>
            <Todo serial={1} task={'React Documentation'} isDone={true}></Todo>
        </>
    )
}