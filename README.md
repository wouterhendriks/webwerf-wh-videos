# WebHare videos folder

## Install

Install with NPM:

```
npm install git://github.com/wouterhendriks/webwerf-wh-videos.git
```

Load the package in your site profile:

```
<loadpackage module="webwerf-wh-videos" scopenamespace="http://www.mydomain.com/webwerf-wh-videos/" />
```

Replace `www.mydomain.com` with your site's primary namespace.

Import in JavaScript (.es file):

```
import * as dompack from 'dompack';
import { setupWebwerfVideos } from 'webwerf-wh-videos';

dompack.onDomReady(() => {
  setupWebwerfVideos();
});
```

Optionally add default CSS (.scss file):

```
@import '~webwerf-wh-videos/src/videos';

@at-root {
  @include webwerf-wh-videos(200px, 15px, 3); // min-width, gutter, max-cols
}
```

You can overwrite the CSS to set your own styling.

After reloading site profiles you can add a folder of type `http://www.mydomain.com/webwerf-wh-videos/`. This folder automatically creates an index file (you should protect it) and lets you add videos to it by creating new files in the folder.
