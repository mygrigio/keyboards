# grigio-keyboards

![Project Image](https://repository-images.githubusercontent.com/196234447/bcb3fe00-a3ed-11e9-8f8f-095a6495d43b)

## Project setup
```
npm install --save @mygrigio/keyboards
```

### Import to your main js file
```
import '@mygrigio/keyboards'
import '@mygrigio/keyboards/dist/grigio.css'
```

### Usage example
```
<template>
    <input name="username" type="number" v-model="str"/>
    <numberic-keyboard :show="showKeyboard" @Input="getValue"/>
</template>
<script>
export default{
    data(){
        return {
            input: [],
            showKeyboard: true
        }
    },
    computed: {
        str() {
            return this.input.join("");
        }
    },
    methods: {
        getValue(value) {
            switch (value) {
                case "DEL":
                    this.input.pop();
                    break;
                case "OK":
                    this.showKeyboard = false;
                    break;
                default:
                    this.input.push(value);
                break;
            }
        },
    }
}
<script>
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
