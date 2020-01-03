# BroadLume Website

## Set Up Your Dev Environment

### Install Homebrew for Node.js

- To install Gatsby and Node.js, it is recommended to use Homebrew. A little set-up in the beginning can save you from some headaches later on!

How to install or verify Homebrew on your computer:

- Check to see if Homebrew is installed by running `brew -v`. You should see “Homebrew” and a version number.

- If not, download and install [Homebrew with the instructions](https://docs.brew.sh/Installation) for your operating system (Mac, Linux or Windows).

- Once you’ve installed Homebrew, repeat step 2 to verify.

### Mac Users: install Xcode Command Line Tools

- Open your Terminal.

- On a Mac, install Xcode Command Line Tools by running `xcode-select --install`.

  - If that fails, download it directly from the Apple site, after signing-in with Apple developer account
    After being prompted to start the installation, you’ll be prompted again to accept a software license for the tools to download.

- After being prompted to start the installation, you’ll be prompted again to accept a software license for the tools to download.

### ⌚ Install Node.js and npm

Node.js is an environment that can run JavaScript code outside of a web browser. Gatsby is built with Node.js. To get up and running with Gatsby, you’ll need to have a recent version installed on your computer.

Note: Gatsby’s minimum supported Node.js version is Node 8, but feel free to use a more recent version.

- Open your Terminal.

- Run `brew update` to make sure you have the latest version of Homebrew.

- Run this command to install Node and npm in one go: `brew install node`

Once you have followed the installation steps, make sure everything was installed properly:

### Check your Node.js installation

- Run `node --version`. (If you’re new to the command line, “run `command`” means “type `node --version` in the command prompt, and hit the Enter key”. From here on, this is what we mean by “run `command`”).

- Run `npm --version`.

The output of each of those commands should be a version number. If entering those commands doesn’t show you a version number, go back and make sure you have installed Node.js.

###Install Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. When you install a Gatsby “starter” site, Gatsby uses Git behind the scenes to download and install the required files for your starter. You will need to have Git installed to set up your first Gatsby site.

The steps to download and install Git depend on your operating system. Follow the guide for your system:

[Install Git on macOS](https://www.atlassian.com/git/tutorials/install-git#mac-os-x)

[Install Git on Windows](https://www.atlassian.com/git/tutorials/install-git#windows)

[Install Git on Linux](https://www.atlassian.com/git/tutorials/install-git#linux)

### Using the Gatsby CLI

The Gatsby CLI tool lets you quickly create new Gatsby-powered sites and run commands for developing Gatsby sites. It is a published npm package.

The Gatsby CLI is available via npm and should be installed globally by running `npm install -g gatsby-cli`.

Note: when you install Gatsby and run it for the first time, you’ll see a short message notifying you about anonymous usage data that is being collected for Gatsby commands, you can read more about how that data is pulled out and used in the telemetry doc.

To see the commands available, run `gatsby --help`.

💡 If you are unable to successfully run the Gatsby CLI due to a permissions issue, you may want to check out the [npm docs on fixing permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions), or this [guide](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md).

## Run site locally

- Run `gatsby develop`

## Build site for deployment

- Run `gatsby build`

This site is forked from the
[gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)
and modified to use WordPress instead of netlify-cms, using the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin as the data connector.

Demo: https://gatsby-starter-wordpress.netlify.com/

## Use It Now

    gatsby new NAME https://github.com/GatsbyCentral/gatsby-starter-wordpress

- Edit `gatsby-config.js`, change `baseUrl`
  - Make sure you have at least 1 post and 1 page on your WordPress site
  - Make sure at least 1 post has at least 1 tag
- Ensure the permalink structure in your WordPress installation is set to `Post Name` instead of the deafult `Plain`, or else the `gatsby-source-wordpress` plugin won't be able to communicate with WordPress
- Rejoice
  - For more information on the source plugin, check out the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) repository page
  - File any [issues here](https://github.com/GatsbyCentral/gatsby-starter-wordpress/issues)

### Known Limitations

- This site is based on the [netlify starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) which uses [bulma](https://bulma.io). This adds 150KB to every built page.

- Your WordPress site must have at least 1 post with 1 tag, or the starter will crash
- Nested pages / categories will not render with nested pages

  - A WordPress page like `/about/team/` will render on Gatsby as `/team/`
  - Likewise for categories
  - Discussion here https://github.com/GatsbyCentral/gatsby-starter-wordpress/issues/24

## CSS Processing

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma build would otherwise be ~170K which adds 170K to each of your built HTML pages. However, with purgecss this is reduced 90%.

## WordPress Setup

Check the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin for more information. If you want to copy the demo content, you can grab the [WordPress XML export here](https://wpdemo.gatsbycentral.com/gatsbystarterwordpress.WordPress.2019-09-12.xml) and import it into your WordPress site as a starting point.
