import React, { useEffect, FC, useState } from 'react';
import { IBook } from './types';
import { Book, SearchBar, Header, Dropdown, Loader } from './components';
import styled from 'styled-components';

const App: FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const abortController = new AbortController();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(`https://reststop.randomhouse.com/resources/works/?search=${searchInput}`, {
            headers: new Headers({ Accept: 'application/json' }),
            signal: abortController.signal
          });
          const { work } = await response.json();
            work ? setBooks([...work]) : setBooks([]);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      }, Math.random() * 1000);
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [searchInput]);

  const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(!isVisible);
    setHasSearched(true);
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setBooks([]);
      setHasSearched(false);
    }
  }, []);

  const NoResults = () =>
    hasSearched && !books ? (
      <div>
        <Title>No results found</Title>
      </div>
    ) : (
      <div>
        <Title>Search for a book</Title>
      </div>
    );

  return (
    <div>
      <Header>
        <SearchBar onChange={handleSearch} value={searchInput} setIsVisible={setIsVisible} />
        <Dropdown isOpen={isVisible}>
          {loading ? (
            [...Array(5)]?.map((_, i) => <Loader key={i} />)
          ) : (
            <div>
              {books ? books.map((book: IBook) => <Book key={book.workid} book={book} />) : <NoResults />}
            </div>
          )}
        </Dropdown>
      </Header>
    </div>
  );
};

export default App;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: #333;
    text-transform: uppercase;
    margin-top: 1rem;
`

App.displayName = 'App';
