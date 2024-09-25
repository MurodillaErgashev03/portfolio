import { DatePicker } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';
import { dateFormat, monthFormat, yearFormat } from 'src/constants/form';
import './filter.scss';

const { RangePicker } = DatePicker;

interface Props {
  format?: 'date' | 'month' | 'year';
  size?: SizeType;
}

function FilterDateRange({ format = 'date', size = 'large' }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (_, dateString: string[]) => {
    handleMakeParams('from_date', dateString[0]);
    handleMakeParams('to_date', dateString[1]);
  };

  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const fromDate = searchParams.get('from_date');
  const toDate = searchParams.get('to_date');
  const defFormat =
    format === 'date'
      ? dateFormat
      : format === 'month'
      ? monthFormat
      : yearFormat;

  return (
    <div className="filter-date">
      <RangePicker
        format={defFormat}
        picker={
          format === 'date' ? 'date' : format === 'month' ? 'month' : 'year'
        }
        onChange={onChange}
        size={size}
        // bordered={false}
        value={
          fromDate && toDate
            ? [dayjs(fromDate, defFormat), dayjs(toDate, defFormat)]
            : undefined
        }
      />
    </div>
  );
}

export default FilterDateRange;
