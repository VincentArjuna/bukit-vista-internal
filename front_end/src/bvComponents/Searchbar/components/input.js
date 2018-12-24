import { Input } from 'antd';
import {InputSearchWrapper,InputGroupWrapper} from './searchbar.style';

const { Search,Group} = Input;
const InputSearch = InputSearchWrapper(Search);
const InputGroup = InputGroupWrapper(Group);

export {InputSearch,InputGroup}