import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
   return (
     <FilterLabel> Find contacts by name
       <FilterInput
         type="text"
         name="filter"
         onChange={onChange}
         value={value}
       />
     </FilterLabel>
   );
}

export default Filter;