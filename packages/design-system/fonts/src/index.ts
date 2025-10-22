import { geist } from "./google/geist";
import { commitlintMonoVazen } from "./local/commitlint-mono-vazen";

const fonts = [geist, commitlintMonoVazen];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { geist, commitlintMonoVazen, fontsVariable };
