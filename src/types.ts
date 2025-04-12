import type { YooptaContentValue } from "@yoopta/editor";
import type { JSX } from "react";

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  undo?: boolean;
  redo?: boolean;
  text?: string;
  markdown?: boolean;
  html?: boolean;
}

export type State = {
  notion: boolean;
};

export interface Document {
  id: string;
  titulo: string;
  contenido: YooptaContentValue;
}

export interface DocumentOptions {
  name: string;
  Icon: ({ size, fill }: { size?: number; fill?: string }) => JSX.Element;
  action: (
    id: string
  ) =>
    | { success: boolean; error?: undefined }
    | { success: boolean; error: any };
}
