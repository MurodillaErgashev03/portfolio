import { Form, Select } from 'antd';

interface Props {
  required?: boolean;
  className?: string;
  onChange?: (val: string) => void;
}

export const shippingOptions = [
  { label: 'temir yo`l', value: 'railway' },
  { label: 'havo yo`llari', value: 'air' },
  { label: 'to`g`ridan to`g`ri', value: 'direct' },
];

export default function ShippingFormItem({
  required = false,
  className,
  onChange,
}: Props) {
  return (
    <Form.Item
      name="shipping"
      label="Yetkazib berish usuli"
      rules={
        required
          ? [{ required: true, message: 'Yetkazib berish usulini tanlang' }]
          : []
      }
      className={className || 'half'}
    >
      <Select
        allowClear
        options={shippingOptions}
        onChange={onChange}
        variant="filled"
      />
    </Form.Item>
  );
}
