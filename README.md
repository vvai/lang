# lang

## Deploying a subfolder to GitHub Pages

1. Make sure git knows about your subtree (the subfolder with your site).
  > git add build && git commit -m "Initial dist subtree commit"

2. Use subtree push to send it to the `gh-pages` branch on GitHub
  > git subtree push --prefix build origin gh-pages
