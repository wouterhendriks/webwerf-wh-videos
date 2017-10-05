import * as dompack from 'dompack';
import mediabox from 'mediabox';

export function setupWebwerfVideos(options) {
  if (!dompack.qS('.webwerf-wh-videos'))
    return;

  mediabox('.mediabox');
}
