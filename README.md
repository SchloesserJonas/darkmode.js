# darkmode.js
A lightweight js library to change between light and darkmode using js/html/css 

### Tested with vue and scss
**For Vue users only ->**
<br>
**Vue2 + Vue3: Import theme.js with a script tag in your App.vue**
```js
//other stuff
<script>
  import theme from 'https://raw.githubusercontent.com/SchloesserJonas/darkmode.js/main/theme.js'
  
  export default {
    created() {
      theme.get()
    }
  }
</script>
//other stuff
```
You do not need to import it again anywhere since it is imported globally
<br>
<br>
#### CSS/SCSS: Create a main.css/ main.scss file in the src directory
```css
html[theme="dark"] {
  /*Your CSS HERE*/
  /*EXAMPLE:*/
  .box {
    background: black;
  }  
}

html[theme="light"] {
  /*Your CSS HERE*/
  /*EXAMPLE:*/
  .box {
    background: white;
  }  
}
```
import the file in your style tag in your views/ components to automatically apply the defined styles.
<br>
### ⚠️ Uses LocalStorage
**You might have to mention it in your Cookie Banner**
