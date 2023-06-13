import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../store/ContactListSlice';
import { FilterInput } from './Filter.styled';

export function Filter() {
  const filter = useSelector(state => state.contacts.filter);
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
}


