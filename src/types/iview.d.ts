import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
      $Modal: {
        info: (obj:object) => void
      };
  }
}