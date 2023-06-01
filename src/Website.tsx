/* eslint-disable @typescript-eslint/no-non-null-assertion */
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import SimpleImage from "@maitrakhatri/editorjs-simple-image";
import Marker from "@editorjs/marker";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
// import Attaches from "@editorjs/attaches";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
import TextVariantTune from "@editorjs/text-variant-tune";
import Paragraph from "editorjs-paragraph-with-alignment";
import { initialData as staticInitialData } from "./inititalData";
import { useNavigate } from "react-router-dom";

function Website() {
  const initialData =
    JSON.parse(localStorage.getItem("editorJS")!) || staticInitialData;

  const editor = new EditorJS({
    data: initialData,
    readOnly: true,
    holder: "editorjs",
    placeholder: "Press TAB for menu...",
    onChange() {
      editor
        .save()
        .then((outputData) => {
          localStorage.setItem("editorJS", JSON.stringify(outputData));
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
    tools: {
      header: Header,
      underline: Underline,
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      image: {
        class: SimpleImage,
        inlineToolbar: true,
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      quote: Quote,
      warning: Warning,
      marker: Marker,
      delimiter: Delimiter,
      linkTool: LinkTool,
      embed: Embed,
      table: {
        class: Table,
        inlineToolbar: true,
      },
      code: Code,
      //   attaches: Attaches,
      inlineCode: InlineCode,
      textVariant: TextVariantTune,
    },
  });
  const navigate = useNavigate();

  return (
    <div className="Website">
      <h1>
        Fileverse dDocs Website{" "}
        <button onClick={() => navigate("/")}>Switch to Editor</button>
      </h1>
      <div id="editorjs"></div>
    </div>
  );
}

export default Website;
