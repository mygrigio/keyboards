import Vue from "vue";
import NumberKeyboard from './NumberKeyboard'

const Components = {
    'numberic-keyboard': NumberKeyboard,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
