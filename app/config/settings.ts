import { Currency } from "@/app/types/global";

interface Configs {
  currency: Currency;
  colors: any;
}

const configs: Configs = {
  currency: "USD",
  colors: {
    purpleMain: "#5542F6",
    purple1: "#E666E5",
    purple2: "#C8C2FC",
    blueMain: "#0049C6",
    blue1: "#3E8CFF",
    redMain: "#EE4540",
    red1: "#FA699D",
    red3: "#FC9FC0",
    red4: "#FFBEBE",
    greenMain: " #20C9AC",
    green1: " #14B13B",
    green2: " #5ED8C3",
    green3: " #94E5D8",
    yellowMain: " #FFA15F",
    yellow1: " #FFDFC0",
    darkMain: "#2E2C34",
    dark1: "#504F54",
    dark2: "#84818A",
    dark3: "#B6B4BA",
    dark4: "#E3E1E5",
    dark5: "#EBEAED",
    dark6: "#FBFAFC",
    purpleLightMain:
      "var(--light-fill-purple-main-purple, rgba(85, 66, 246, 0.10))",
  },
};

export default configs;
