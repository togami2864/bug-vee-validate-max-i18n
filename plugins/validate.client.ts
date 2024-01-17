import { defineRule, configure } from "vee-validate";
import { max } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

export default defineNuxtPlugin(() => {
  defineRule("max", max);
});

configure({
  validateOnInput: true,
  generateMessage: localize("en", {
    messages: {
      max: "Please enter up to {length} characters",
    },
  }),
});
