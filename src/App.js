import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const searchHandler = (query) => {
    setQuery(query);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`);
      console.log(res.data);
      setItems(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search searchHandler={searchHandler}/>
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
