## How to run this app

### Install requirements

First install Node.js and npm [here](https://nodejs.org/en/download/current/). We are using Node.js version 15.0.1.

Install git [here](https://git-scm.com/downloads).

Install a code editor such as [Visual Studio](https://visualstudio.microsoft.com/downloads/), [Sublime Text](https://www.sublimetext.com/3), [Atom](https://atom.io/), etc.

### Clone the repository

Open your Command Prompt/Terminal, navigate to the directory you want to clone the project in, execute `git clone https://github.com/Lukie176/hauscr-portal.git`

### Install the dependencies

Within your project directory, execute `npm install` in your console to install all needed dependencies for this project.

### Checkout your branch

You'll work independently in your own branch, which will be intermittently merged with the master branch. To work on your branch, execute `git checkout [firstname]`.

### Code out components

Individual pages are found in `\src\pages`, which will be built via components saved in `\src\components`. Your responsibilities are divided by pages and further by components within those pages. To format the overall page structure, the respective JavaScript file in `\src\pages` will be modified, but you will first want to code the individual components of your pages. Feel free to import your components to your pages and see how they look rendered in the development environment.

### Styling

This project possesses both a global styling sheet at `\src\static\styles.css`, as well as styling sheets at a per-component level within `\src\components\[ComponentName].module.css`. When styling a component, one should create this CSS file and populate it with the needed styling. One can import this component specific styling via `import styles from './[ComponentName].module.css'`. Class or IDs should be referenced within the component via `styles.[className]` or `styles.[ID]` respectively.

### See your changes

In the project directory, executing `npm run dev` runs the React app in a development environment.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see linting errors in the terminal and in your web browser.

### Git workflow

After coding out your components (or intermittently at significant milestones in the process), add your edited files to be staged for commit `git add [filename]`, commit these files to a saved state `git commit -m "[commitMsg]"`, and push this state to the remote repository `git push`.

### Resources

We want these components to be independent and reusable in a variety of context, so please also [read](https://reactjs.org/docs/components-and-props.html) up on how Components make use of props (or inputs).

We're using Next.js, an open-source React framework, for which the documentation is provided [here](https://nextjs.org/docs/getting-started).

### Support

If you run into any issues, or need help with anything at all, please just Slack me. I'm always here to help. :)
