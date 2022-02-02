import { NativePropsType } from "./propsType";

const H1 = ({ className, children, style }: NativePropsType) => {
  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
};

export default H1;
