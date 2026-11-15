# Rachel's website: how updates work

This is your website's first draft. You don't need to know how to code. You ask for changes in your own words, see a preview, and approve what goes live.

## The three places to know

| What | Where | What it's for |
| --- | --- | --- |
| The website's files | [github.com/LTParis/dj-rachel](https://github.com/LTParis/dj-rachel) (public: anyone can read it, only you and Lou can change it) | Where your site lives. ChatGPT makes its edits here. |
| The temporary website | [dj-rachel.vercel.app](https://dj-rachel.vercel.app) | What the draft looks like right now. Share it only with people you trust. |
| ChatGPT (Codex) | [chatgpt.com/codex](https://chatgpt.com/codex) | Where you ask for changes. |

## Step 1: accept your GitHub invitation (one time)

1. Sign in to GitHub as **Lynch022**.
2. Open [github.com/LTParis/dj-rachel/invitations](https://github.com/LTParis/dj-rachel/invitations) and click **Accept invitation**.
3. You should now be able to open [github.com/LTParis/dj-rachel](https://github.com/LTParis/dj-rachel). If you see "404", you're signed into a different GitHub account.

Never send anyone your password, sign-in code, recovery code, or a token. Your account is your access.

## Step 2: connect ChatGPT to your website (one time, about 5 minutes)

You need a paid ChatGPT plan, since Codex is the part of ChatGPT that edits websites. The GitHub app isn't needed: your phone's browser is enough.

1. On your phone, open your browser (Safari or Chrome) and go to [chatgpt.com/codex](https://chatgpt.com/codex). Sign in to ChatGPT if asked.
2. Tap **Connect to GitHub** (it may say **Get started** or **Connect GitHub**).
3. A GitHub page opens. Sign in as **Lynch022** if it asks.
4. GitHub asks you to **Authorize ChatGPT Codex Connector**. Tap **Authorize**. If it asks where to install it instead, tap **Cancel** and go back: Lou has already done that part.
5. Back in Codex, open the repository picker and choose **LTParis/dj-rachel**.
6. If it asks you to create an environment, pick **LTParis/dj-rachel**, keep every default setting, and tap **Create**.

Doesn't see **LTParis/dj-rachel**? Go to ChatGPT **Settings**, then **Connectors** (or **Apps**), then **GitHub**. Disconnect it, connect it again, and check the list. Still missing? Text Lou a screenshot.

After this first setup, you can ask for changes from the ChatGPT app or the browser. Codex reads the website's rules file (AGENTS.md) on its own, so you never have to explain the rules.

## Step 3: ask for a change

In Codex, with **LTParis/dj-rachel** selected, paste this and fill in the brackets:

> Please update the draft DJ Rachel website. Read AGENTS.md first and follow it.
> I want to: [what you want changed].
> Keep: [anything you like as it is].
> Don't make up facts, reviews, prices, contact details, or links. If you need a detail, ask me.
> When you're done, run the build, open a pull request, and tell me in plain language what changed.

Good examples:
- "Change the About page story to this text: …"
- "On the Weddings page, make the heading say 'your day, your soundtrack'."
- "Swap the sizzle reel placeholder for this video" (attach or link the file).

When Codex finishes, tap **Create PR** (pull request), then tap the link Codex shows to open it on GitHub. Nothing goes on the website until the pull request is merged.

## Step 4: preview and publish

You can publish your own changes. Lou can also review them if you'd like a second look.

1. On the pull request page, wait a minute for the **Vercel** check. Tap its **Preview** link (or **Details**) to see your change before it goes live.
2. Not quite right? Go back to the same Codex task and ask for changes; the pull request updates on its own.
3. Happy with it? Scroll to the comment box at the bottom of the pull request, type **makeitlive**, and tap **Comment**.
4. A rocket appears on your comment while it checks the site. About a minute later, a reply says **Published**, and two minutes after that the change is on [dj-rachel.vercel.app](https://dj-rachel.vercel.app).

If the reply says it wasn't published, nothing on the website changed. Tell Lou.

If something goes wrong after a merge, tell Lou: every earlier version is saved and can be put back.

## Good to know

- The temporary website and the website's files are both public. Don't put private client info, passwords, or anything you wouldn't want shared on the site.
- Search engines are blocked while the site is a draft. The planned address is `djrachellynch.com`, and it will only be connected after you approve the finished site.
- The "Working preview" banner at the top stays until you approve the final words and photos.
- The Reviews page uses the Google and Facebook reviews you shared, each labeled with its source and rating. A review posted on both platforms is shown once with both sources listed.

## Before the real website goes live

You and Lou will confirm the final wording, photos and video, your booking email or inquiry link, social links, and any stats or business facts (for example review counts, YouTube numbers, or brands you've played for).
