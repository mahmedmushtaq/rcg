import { NativePropsType } from "./propsType";

const Div = ({ className, children, style }: NativePropsType) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Div;
