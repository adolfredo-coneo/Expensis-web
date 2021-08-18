export type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'none';

export type ProgressVariant =
  | 'determinate'
  | 'indeterminate'
  | 'buffer'
  | 'query';

export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface Page {
  title: string;
  route: string;
}
