# Wedding video clips

The video area sits beside the “More than music” copy on laptops and below it on smaller screens. Until approved clips are added, it shows a styled “Wedding videos coming soon” placeholder.

Upload Rachel-approved clips to `public/` using unique filenames, such as `wedding-dance-floor-01.mp4`. MP4 files encoded as H.264 with AAC audio work across common browsers. Then add an entry for each clip in `src/data/weddingClips.ts`:

```ts
export const weddingClips: WeddingClip[] = [
  {
    src: "/wedding-dance-floor-01.mp4",
    title: "Wedding dance floor",
    width: 1080,
    height: 1920,
    poster: "/wedding-dance-floor-01.jpg",
    captions: "/wedding-dance-floor-01.vtt",
  },
];
```

Use the video's actual width and height; both portrait and landscape clips fit without cropping. `poster` and `captions` are optional. Add captions for spoken content when available. Entries appear in their listed order with native playback controls, inline playback on phones, and no autoplay or initial video download. The placeholder disappears automatically once a clip is configured.

Keep upload and editing instructions in this repository; site visitors only see the wedding media. Run `npm run build` and use the normal pull request workflow to publish.
