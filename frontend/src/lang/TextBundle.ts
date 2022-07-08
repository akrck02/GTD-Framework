import { HomeBundleEn } from "./english/HomeBundleEn.js";
import { Languages } from "./Languages.js";
import { HomeBundleEs } from "./spanish/HomeBundleEs.js";

export class TextBundle {

    public static get (lang : Languages) {
      switch (lang) {
        case Languages.ENGLISH:
            return this.getBundleEn();
        case Languages.SPANISH:
            return this.getBundleEs();
        default:
            return this.getBundleEn();
      }
    }

    public static getBundleEn() {
        return {
            home : HomeBundleEn
        };
    }

    public static getBundleEs() {
        return {
           home : HomeBundleEs
        };
    }

}