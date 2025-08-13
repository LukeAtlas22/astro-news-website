import { getList } from "./getters";
import { Element } from "../../../utilities/elements/elements";
import { toPixels } from "../../../utilities/computed-styles/convert-to-pixel";

export function getInlinePadding(){
  return toPixels(Element(getList()).getStyle().paddingInlineStart);
}