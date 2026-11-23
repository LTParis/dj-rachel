# Wedding video testimonials

The “Real weddings. Real moments. Really good times.” panel sits beside the “More than music” copy on laptops and below it on smaller screens. It has five thumbnail slots: a featured first video and four smaller thumbnails. Unfilled slots say “Video coming soon”; they are not pretend play buttons.

Upload Rachel-approved testimonial clips and thumbnail posters to `public/` with unique filenames. MP4 encoded as H.264 with AAC audio works across common browsers. Add up to five entries to `src/data/weddingClips.ts`, in the order they should appear:

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
