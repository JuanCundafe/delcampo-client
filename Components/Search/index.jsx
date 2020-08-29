import { Input } from 'antd';
import Categories from '../Categories';
import CustomButton from '../CustomButton';
import { MenuOutlined } from '@ant-design/icons';
import Categories2 from './Categories2';

function Search () {
  return (
    <div>
      <Input.Search
        prefix={<Categories2 className='btn-search-categories' />}
        className='buscador'
        placeholder='Buscar'
      />
    </div>
  )
}

export default Search
