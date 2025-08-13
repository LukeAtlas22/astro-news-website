import { getList } from "./getters";
import { Element } from "../../../utilities/elements/elements";
import { toPixels } from "../../../utilities/computed-styles/convert-to-pixel";

export function getGap(){
  return toPixels(Element(getList()).getStyle().gap)
}