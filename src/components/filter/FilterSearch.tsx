import { Input } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useTypedSelector } from 'src/app/store';
import './filter.scss';

interface Props {
  size?: 'large' | 'middle' | 'small';
  width?: number;
  name?: string;
  tableFilter?: boolean;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  allowClear?: boolean;
  icon?: boolean;
}

function FilterSearch({
  size = 'middle',
  width,
  name = 'name',
  tableFilter,
  placeholder,
  type,
  allowClear = true,
  icon = true,
}: Props) {
  const { colors } = useTypedSelector((state) => state.layout);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const [value, setValue] = useState(searchParams.get(name) || '');
  const [render, setRender] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value;
    setValue(val);
    if (!val) handleClear();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // if (pathname !== '/search') navigate('/search?search=value');
    // else handleMakeParams('search', value);
    handleMakeParams(name, value);
  };

  const handleClear = () => {
    handleMakeParams(name, '');
  };

  const defaultClear = () => {
    if (render !== 1) {
      setValue('');
    }
    setRender(render + 1);
  };

  useEffect(() => defaultClear(), [searchParams.get('status')]);

  return (
    <div className={`${tableFilter ? 'filter-tableFilter' : ''}`}>
      <Input
        prefix={
          icon && (
            <SearchNormal1
              size="20"
              color={colors[value ? 'white' : 'silver']}
              variant="Outline"
              style={{ marginRight: 4 }}
              onClick={handleSearch}
            />
          )
        }
        min={type === 'number' ? 0 : undefined}
        placeholder={placeholder || 'Qidirish...'}
        className={`filter-search2 ${tableFilter ? 'filter-tableFilter' : ''}`}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        defaultValue={searchParams.get(name)}
        size={size}
        style={{ width }}
        type={type}
        allowClear={allowClear}
      />
    </div>
  );
}

export default FilterSearch;
