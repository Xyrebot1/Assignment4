import './Post.css';

export const Post = ({id, topic, data}) =>{
    return (
        <div className='container'>
            <p>{id}</p>
            <p>Topic: {topic}</p>
            <p>Data: {data}</p>
        </div>
    )
}