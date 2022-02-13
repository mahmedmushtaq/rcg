interface listType {
  value: string;
  text: string;
}

interface commonType {
  id: string;
  list?: listType[];
  value?: string;
  heading?: string;
  onChange?: (id: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeValue?: (val: string) => void;
}

export interface SelectorPropsType extends commonType {
  smallHeading?: boolean;
  noAccordion?: boolean;
}

export interface GenericSelectorPropsType extends commonType {
  listHeading?: string;
  lists?: { id: string; list: listType[]; heading?: string }[];
}
