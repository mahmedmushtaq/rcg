interface listType {
  value: string;
  text: string;
}

interface commonType {
  id: string;
  list?: listType[];
  heading?: string;
  onChange?: (id: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeValue?: (val: string) => void;
}

export interface SelectorPropsType extends commonType {
  smallHeading?: boolean;
  noAccordion?: boolean;
  value?: string;
}

export interface GenericSelectorPropsType extends commonType {
  listHeading?: string;
  value?: { [key: string]: string };
  lists?: { id: string; list: listType[]; heading?: string }[];
}
