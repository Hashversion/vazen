import { modeOklch, useMode } from "culori/fn";

const oklch = useMode(modeOklch);

export function toOklch(token) {
  try {
    if (token.$type === "color") {
      const original = token.$value;
      let inputColor;

      if (typeof original === "string") {
        inputColor = original;
      } else if (token.$value && typeof token.$value === "object" && token.$value.hex) {
        inputColor = token.$value.hex;
      } else if (token.$value && token.$value.colorSpace && Array.isArray(token.$value.components)) {
        const { colorSpace, components, alpha = 1 } = token.$value;

        switch (colorSpace) {
          case "hsl": {
            const [h, s, l] = components;
            inputColor = `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
            break;
          }
          case "srgb": {
            const [r, g, b] = components.map((v) => Math.round(v * 255));
            inputColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            break;
          }
        }
      }

      if (inputColor) {
        const oklchColor = oklch(inputColor);

        if (oklchColor) {
          const { l, c, h, alpha = 1 } = oklchColor;
          return `oklch(${(l * 100).toFixed(3)}% ${c.toFixed(6)} ${h?.toFixed(3) ?? 0} / ${alpha})`;
        }
      }
    }
  } catch (err) {
    console.warn(`transform() error on token ${token.id}:`, err);
  }
}
