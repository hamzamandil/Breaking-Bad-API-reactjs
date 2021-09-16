import React, {useState} from 'react';

const Search = ({searchHandler}) => {

    const [text, setText] = useState("");
    console.log(text)

    const onChange = (q) => {
        setText(q);
        searchHandler(text);
    }

    return (
        <section className="search">
            <form>
                <input 
                type="text" 
                autoFocus 
                className="form-control" 
                value={text} 
                placeholder="search for characters"
                onChange={(e) => onChange(e.target.value)}
                ></input>
            </form>
        </section>
    )
}

export default Search
