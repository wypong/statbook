# Hosting This PreTeXt Book on GitHub Pages

This project already has a PreTeXt `web` target in `project.ptx`, and the HTML theme in `publication/publication.ptx` is already set to `denver`. The main thing left is to put the project in a GitHub repository and point the book's HTML base URL at the GitHub Pages site.

## 1. Create a GitHub repository

Create a new repository on GitHub, for example `statbook`.

If you want the site to live at

- `https://YOUR_USERNAME.github.io/statbook/`

then this should be a normal repository named `statbook`.

If you want the site to live at

- `https://YOUR_USERNAME.github.io/`

then the repository should be named

- `YOUR_USERNAME.github.io`

## 2. Initialize Git locally

From the project directory, run:

```bash
cd /home/pong/courses/statbook
git init -b main
git add .
git commit -m "Initial PreTeXt book"
git remote add origin git@github.com:YOUR_USERNAME/statbook.git
git push -u origin main
```

This directory is currently not a Git repository, so this step has to happen before GitHub Pages hosting.

## 3. Update the PreTeXt base URL

Right now `publication/publication.ptx` has

```xml
<baseurl href="https://math.csudh.edu/~pong/"/>
```

For a project site, change it to

```xml
<baseurl href="https://YOUR_USERNAME.github.io/statbook/"/>
```

For a user site, change it to

```xml
<baseurl href="https://YOUR_USERNAME.github.io/"/>
```

This matters because PreTeXt uses the base URL when generating links for the hosted HTML version.

## 4. Build the book

Run:

```bash
pretext build web
```

That creates the HTML output for the `web` target.

## 5. Deploy with PreTeXt

Run:

```bash
pretext deploy
```

This is the standard PreTeXt workflow for publishing to GitHub Pages.

## 6. Check GitHub Pages settings

On GitHub, open the repository and go to:

- `Settings > Pages`

If GitHub asks you to choose a publishing source, use the branch created for deployment, typically `gh-pages`.

After deployment, the site should appear at one of these URLs:

- `https://YOUR_USERNAME.github.io/statbook/`
- `https://YOUR_USERNAME.github.io/`

depending on whether this is a project site or a user site.

## Notes

- Do not publish the raw PreTeXt XML files directly. Publish the generated HTML output.
- If you later want automatic rebuilding on each push, add a GitHub Actions workflow.
- The project README also notes that `pretext deploy` is the intended deployment command.

## References

- GitHub Pages docs: <https://docs.github.com/en/pages>
- PreTeXt documentation: <https://pretextbook.org/documentation.html>
