/**
 * 表单字段
 */
export interface FormField {
  type?: FieldType;
  required?: boolean;
  rules?: Rule[];
  size?: number;
  caption?: string;
  name?: string;
  placeholder?: string;
}

export type FieldType = 'text' | 'select' | 'checkbox' | 'redio' | 'textarea';

export type Rule = <T>(value: T) => true | string;
