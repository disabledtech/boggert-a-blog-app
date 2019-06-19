import React, { useState } from 'react';
import moment from "moment";
import { SingleDatePicker} from 'react-dates';

const PostForm = (props) => {

    const [title, setTitle] = useState(props.post ? props.post.title : '');
    const [content, setContent] = useState(props.post ? props.post.content : '');
    const [createdAt, setCreatedAt] = useState(props.post ? moment(props.post.createdAt) : moment())
    const [error, setError] = useState('');
    const [focused, setFocused] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        // Ensure content and title are set.
        if (!title || !content) {
            setError('Please set the title and description.');
        } else {
            setError(''); // Clear error
            const post = {
                title,
                content,
                createdAt: createdAt.valueOf()
            };
            props.onSubmit(post);
        }
    }

    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                {error && <p className="form__error">{error}</p>} 
                <input 
                    type="text" 
                    value={title}
                    placeholder="Title" 
                    onChange={ (e) => setTitle(e.target.value) }
                    className="text-input"
                />
                <textarea 
                    value={content} 
                    placeholder="Description"
                    onChange={ (e) => setContent(e.target.value) } 
                    className="textarea"
                    rows="10"
                />
                <SingleDatePicker 
                        date={createdAt}
                        onDateChange={date => setCreatedAt(date)}
                        focused={focused}
                        onFocusChange={({ focused }) => setFocused(focused)}
                        id="singleDateId"
                        numberOfMonths={1}
                        isOutsideRange={() => false} 
                />
                <div>
                    <button className="button">Post</button>
                </div>     
            </form>
        </>
    )
}

export { PostForm as default };