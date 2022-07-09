import React, { FC } from 'react';
import { IBook } from '../../types';
import styled from 'styled-components';

export interface IBookProps {
  book: IBook;
}

export const Book: FC<IBookProps> = ({ book }) => {
  return (
    <BookCard data-testid="book-card">
      <div>
        <h4>
          Author:
          <span>{book.authorweb}</span>
        </h4>
      </div>
      <div>
        <h4>
          Title:
          <span>{book.titleweb}</span>
        </h4>
      </div>
    </BookCard>
  );
};

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;

  h4 {
    margin: 0;
    padding: 0.5em;
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }

  span {
    margin: 0;
    padding: 0.5em;
    font-size: 1rem;
    color: black;
  }
`;

Book.displayName = 'Book';
