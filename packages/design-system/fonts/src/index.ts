import { geist } from "./google/geist";
import { commitMonoVazen } from "./local/commitmono-vazen";

const fonts = [geist, commitMonoVazen];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { commitMonoVazen, fontsVariable, geist };
