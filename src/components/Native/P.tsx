import { NativePropsType } from "./propsType";

const P = ({ className, children, style }: NativePropsType) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default P;
