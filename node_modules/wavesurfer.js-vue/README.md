## Installation

```bash
npm i wavesurfer.js-vue wavesurfer.js
```

## Module

As a global vue-cli plugin

```javascript
import Vue from "vue";
import WaveSurferVue from "wavesurfer.js-vue";

Vue.use(WaveSurferVue);
```

As a nuxt global plugin

```javascript
// plugins/wavesurfer.js-vue.js
import Vue from "vue";
import WaveSurferVue from "wavesurfer.js-vue";

Vue.use(WaveSurferVue);
```

```javascript
// nuxt.config.js
export default {
  plugins: ["~/plugins/wavesurfer.js-vue"],
};
```

As a component plugin

```javascript
import WaveSurferVue from "wavesurfer.js-vue";
export default {
  components: {
    WaveSurferVue,
  },
};
```

## Usage

```vue
<template>
  <wavesurfer :src="file" :options="options"></wavesurfer>
</template>
<script>
export default {
  data() {
    return {
      options: {},
      file: "http://example.com/file.mp3",
    };
  },
};
</script>
```

## Options

See the list of options in the [official documentation](https://wavesurfer-js.org/docs/options.html)

## Using Plugins

An example implementing the [Cursor](https://wavesurfer-js.org/plugins/cursor.html) plugin

```vue
<script>
import Cursor from "wavesurfer.js/dist/plugin/wavesurfer.cursor";
export default {
  data() {
    return {
      options: {
        plugins: [Cursor.create()],
      },
    };
  },
};
</script>
```

## Capturing Events

1. Create a wavesurfer.js-vue element and adding a ref to it
2. Create a computed property returning the elemenents waveSurfer object
3. Access waveSurfer events and methods in the mounted() function

This is a client-only module so be sure to wrap it in a client-only tag if using nuxt

```vue
<wavesurfer.js-vue src="url.mp3" ref="surf"></wavesurfer.js-vue>
<script
export default {
  mounted() {
    this.player.on('ready', () => {
      console.log('ready')
    })
  },
  computed: {
    player() {
      return this.$refs.surf.waveSurfer
    }
  }
}
</script>
```

## Credits

Based on @hunter-isaiah96 package (<https://github.com/hunter-isaiah96/vue-wave-sufver>)
