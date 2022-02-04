import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
//@ts-ignore
import reactElementToJSXString from "react-element-to-jsx-string";
import { editorTemplate } from "../../template/EditorTemplate";
import React, { useEffect, useState } from "react";

interface PropsType {
  code: React.ReactElement;
}

const Editor = (props: PropsType) => {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    if (!props.code) return;

    setCode(reactElementToJSXString(props.code));
  }, [props.code]);

  function onChange(newValue: string) {
    console.log("change", newValue);
  }

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github"
        showGutter
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        value={editorTemplate(code)}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default Editor;
