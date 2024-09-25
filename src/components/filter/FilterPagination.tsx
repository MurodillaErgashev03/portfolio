import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './filter.scss';

export default function FilterPagination({ total }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<undefined | number>(undefined);
  const [size, setSize] = useState<undefined | number>(10);
  const onChange: PaginationProps['onChange'] = (pageNumber, pageSize) => {
    handleMakeParams('page', String(pageNumber));
    handleMakeParams('size', String(pageSize));
  };
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const setDefaults = () => {
    const dPage = searchParams.get('page');
    const dSize = searchParams.get('size');
    setPage(dPage ? +dPage : 1);
    setSize(dSize ? +dSize : 50);
  };

  useEffect(() => {
    setDefaults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const disabled = total !== undefined && total <= 10;

  return disabled ? (
    <></>
  ) : (
    <Pagination
      current={page}
      pageSize={size}
      total={total}
      showQuickJumper
      showSizeChanger
      pageSizeOptions={['10', '20', '50', '100', '200', '400']}
      onChange={onChange}
      disabled={disabled}
      style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}
      className="filter-pagination"
    />
  );
}
