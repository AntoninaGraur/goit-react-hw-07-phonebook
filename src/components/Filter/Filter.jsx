import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../store/selectors';
import { setFilter } from '../store/ContactListSlice';
import { FilterInput } from './Filter.styled';
// import { FilterInput } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeInput = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        value={filter}
        onChange={onChangeInput}
        placeholder="Search contacts"
      />
    </div>
  );
};
  




