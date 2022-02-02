import { Div, P, H1, NativePropsType } from "../../components/Native";

const keyToComponentMap: {
  [key: string]: (props: NativePropsType) => JSX.Element;
} = {
  div: Div,
  p: P,
  h1: H1,
};

export default keyToComponentMap;
