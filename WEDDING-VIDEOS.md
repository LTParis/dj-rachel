# Wedding video testimonials

The “Real weddings. Real moments. Really good times.” panel sits below the “More than music” copy. It has six equal thumbnail slots, arranged in three columns on laptops and two columns on smaller screens. Unfilled slots say “Video coming soon”; they are not pretend play buttons.

Upload Rachel-approved testimonial clips and thumbnail posters to `public/` with unique filenames. MP4 encoded as H.264 with AAC audio works across common browsers. Add up to six entries to `src/data/weddingClips.ts`, in the order they should appear:

```ts
export const weddingClips: WeddingClip[] = [
  {
    src: "/wedding-testimonial-01.mp4",
    title: "Wedding testimonial 1",
    width: 1080,
    height: 1920,
    poster: "/wedding-testimonial-01.jpg",
    captions: "/wedding-testimonial-01.vtt",
  },
];
```

Use an accurate approved title and the video's actual dimensions. Both portrait and landscape videos fit the player without cropping. `poster` and `captions` are optional, but a poster gives each thumbnail a real preview. Add captions for spoken content when available.

Clicking a thumbnail opens that clip in a larger dialog with native playback controls. Playback starts only after the visitor clicks. Escape, Close, or clicking the backdrop closes the dialog and stops playback; focus returns to the thumbnail. Video files are not requested before a thumbnail is selected.

Keep upload and editing instructions in this repository. Run `npm run build`, check the clips on phone and laptop layouts, and use the normal pull request workflow to publish. Never use unrelated footage or make up testimonial names to fill an empty slot.

## Current approved clips

Rachel supplied these six files in chat. They fill slots 1–6 in this order; their public filenames are `wedding-testimonial-01.mp4` through `wedding-testimonial-06.mp4`, with matching JPEG thumbnail posters.

| Slot | Uploaded file |
| --- | --- |
| 1 | `Video_1_under_25MB.mp4` |
| 2 | `Video_2_under_25MB (1).mp4` |
| 3 | `video-output-4AB95C5E-1A59-45DD-B41B-B58EDA7FCDBF-1.mov` |
| 4 | `Video_4_under_25MB.mp4` |
| 5 | `Video_5_under_25MB.mp4` |
| 6 | `video-output-BDB1CFA4-7D5B-4449-B69A-5BF26BC50C2C-1.mov` |

The published copies use browser-compatible H.264 video and AAC audio with a fast-start MP4 container. HDR recordings are tone-mapped to standard BT.709 color. Full frames, duration, and original audio are preserved; thumbnail posters omit the recordings' black padding. Titles use neutral numbering because couple names were not supplied.
