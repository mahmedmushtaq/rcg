export interface renderType {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string | number;
  onClick?: () => void;
  children?: renderType[] | string | string[];
}
