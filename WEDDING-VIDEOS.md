# Wedding video testimonials

The “Real weddings. Real moments.” panel sits below the “More than music” copy. It has six equal thumbnail slots, arranged in three columns on laptops and two columns on smaller screens. Unfilled slots say “Video coming soon”; they are not pretend play buttons.

Put Rachel-approved testimonial clips in `incoming/` and process each with `npm run media:add -- incoming/<file> wedding-testimonial-07` (see "Photos and video" in `AGENTS.md`). It creates a compressed H.264/AAC MP4 and a poster in `public/` and prints the dimensions to use. Add up to six entries to `src/data/weddingClips.ts`, in the order they should appear:

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

Use an accurate approved couple name or title and the video's actual dimensions. Both portrait and landscape videos fit the player without cropping. `poster` and `captions` are optional, but a poster gives each thumbnail a real preview. Add captions for spoken content when available.

Clicking a thumbnail opens that clip in a larger dialog with native playback controls. Playback starts only after the visitor clicks. Escape, Close, or clicking the backdrop closes the dialog and stops playback; focus returns to the thumbnail. Video files are not requested before a thumbnail is selected.

Keep upload and editing instructions in this repository. Run `npm run build`, check the clips on phone and laptop layouts, and use the normal pull request workflow to publish. Never use unrelated footage or make up testimonial names to fill an empty slot.

## Current approved clips

Rachel supplied these six files in chat. The table shows their current display order. Public filenames stay with the original clips when their positions change; each has a matching JPEG thumbnail poster.

| Slot | Couple | Public video | Uploaded file |
| --- | --- | --- | --- |
| 1 | Allie & Scott | `wedding-testimonial-03.mp4` | `video-output-4AB95C5E-1A59-45DD-B41B-B58EDA7FCDBF-1.mov` |
| 2 | Jill & Jason | `wedding-testimonial-02.mp4` | `Video_2_under_25MB (1).mp4` |
| 3 | Krista & Harold | `wedding-testimonial-01.mp4` | `Video_1_under_25MB.mp4` |
| 4 | Taylor & Dom | `wedding-testimonial-04.mp4` | `Video_4_under_25MB.mp4` |
| 5 | Becky & Zack | `wedding-testimonial-05.mp4` | `Video_5_under_25MB.mp4` |
| 6 | Laura & Charlie | `wedding-testimonial-06.mp4` | `video-output-BDB1CFA4-7D5B-4449-B69A-5BF26BC50C2C-1.mov` |

The published copies use browser-compatible H.264 video and AAC audio with a fast-start MP4 container. HDR recordings are tone-mapped to standard BT.709 color. Full frames, duration, and original audio are preserved; thumbnail posters omit the recordings' black padding. Couple names were supplied by Rachel and are used consistently on thumbnails, accessible labels, and player titles. In November 2026 the published copies were re-encoded at 720×900 (from 1080×1350) to cut their size by about 70%; the full-quality versions remain in git history.
