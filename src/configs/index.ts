import configsDev from "./configs.dev";
import configsProd from "./configs.prod";

const isDev = process.env.NODE_ENV === "development";

export default isDev ? configsDev : configsProd;
