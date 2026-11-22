# Publishing Rachel’s writing

The Writing tab lists published Markdown articles in `src/pages/writing/posts/`, newest first. Each file becomes an individual article page. No article text has been invented or republished without Rachel’s selection.

To publish, create a new branch and add a file such as `src/pages/writing/posts/my-article.md`:

```markdown
---
layout: ../../../layouts/ArticleLayout.astro
title: "Your article title"
description: "A short introduction for the article card and search previews."
date: "2026-11-22"
topic: "Weddings"
---

Your article text goes here.
```

Use a descriptive filename and a topic such as Weddings, DJing, Industry, or Thoughts. Format dates as YYYY-MM-DD and quote them. Add the text Rachel wants published, not a placeholder. Link and credit the original publication when sharing a previously published article, and only reproduce text Rachel has the right to republish.

Run `npm run build`, open a PR, and publish by commenting `makeitso`. Keep unready drafts outside `src/pages/` so they do not generate public article pages. Rachel can also supply the article text and ask Codex to prepare the file and PR.
