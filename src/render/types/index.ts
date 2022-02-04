export interface renderType {
  component: string;
  className: string;
  style: React.CSSProperties;
  id?: string | number;
  children?: renderType[] | string | string[];
}
