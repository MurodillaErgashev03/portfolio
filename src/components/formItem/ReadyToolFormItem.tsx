import { Form, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useGetBasicToolMutation } from 'src/app/services/commerce';
import { IOption } from 'src/constants/type';

interface Props {
  required?: boolean;
  className?: string;
  onChange?: (val: string) => void;
}

export default function ReadyToolFormItem({
  required = false,
  className,
  onChange,
}: Props) {
  const [get] = useGetBasicToolMutation();
  const [options, setOptions] = useState<IOption[]>([]);

  const getFunc = () => {
    get()
      .unwrap()
      .then((res) => {
        let arr: IOption[] = [];
        res.results.forEach((item) => {
          arr.push({ label: item.name, value: item.id });
        });
        setOptions(arr.reverse());
      });
  };

  useEffect(() => {
    getFunc();
  }, []);

  return (
    <Form.Item
      name="amortization"
      label={`Tayyor mahsulot`}
      rules={[{ required, message: 'Tayyor mahsulotni tanlang!' }]}
      className={className || 'full'}
    >
      <Select
        allowClear
        options={options}
        onChange={onChange}
        variant="filled"
      />
    </Form.Item>
  );
}
