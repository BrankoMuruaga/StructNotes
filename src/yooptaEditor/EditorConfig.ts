import { DEFAULT_TITLE } from "@src/constants";
import Accordion from "@yoopta/accordion";
import ActionMenuList, {
  DefaultActionMenuRender,
} from "@yoopta/action-menu-list";
import Blockquote from "@yoopta/blockquote";
import Callout from "@yoopta/callout";
import Code from "@yoopta/code";
import Divider from "@yoopta/divider";
import {
  createYooptaEditor,
  YooptaPlugin,
  type SlateElement,
} from "@yoopta/editor";
import Embed from "@yoopta/embed";
import File from "@yoopta/file";
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings";
import Image from "@yoopta/image";
import Link from "@yoopta/link";
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import { BulletedList, NumberedList, TodoList } from "@yoopta/lists";
import {
  Bold,
  CodeMark,
  Highlight,
  Italic,
  Strike,
  Underline,
} from "@yoopta/marks";
import Paragraph from "@yoopta/paragraph";
import Table from "@yoopta/table";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";
import Video from "@yoopta/video";

export const PLUGINS = [
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Paragraph,
  Table,
  Divider,
  Code,
  TodoList,
  Accordion,
  NumberedList,
  BulletedList,
  Blockquote,
  Callout,
  Link,
  Embed,
  Video,
  Image,
  File,
] as readonly YooptaPlugin<
  Record<string, SlateElement>,
  Record<string, unknown>
>[];

export const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

export const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool,
  },
};

const editor = createYooptaEditor();
(editor as any).title = DEFAULT_TITLE;
export default editor;
