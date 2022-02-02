export interface renderType {
  component: string;
  className: string;
  style: React.CSSProperties;
  id?: string;
  children: renderType[] | string;
}
