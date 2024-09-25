import { Form, Select } from 'antd';
import useLanguage from 'src/language/useLanguage';

interface Props {
  required?: boolean;
  className?: string;
  onChange?: (val: string) => void;
}

export default function LotLocalTypeFormItem({
  required = true,
  className,
  onChange,
}: Props) {
  const { lotLocalTypeOptions } = useLanguage();
  return (
    <Form.Item
      name="payment_type"
      label="To'lov turi"
      rules={
        required ? [{ required: true, message: 'To`lov turini tanlang!' }] : []
      }
      className={className || 'half'}
    >
      <Select
        allowClear
        options={lotLocalTypeOptions}
        onChange={onChange}
        variant="filled"
      />
    </Form.Item>
  );
}
