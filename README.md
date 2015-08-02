# Build-up Website Starter (buildup-ws-starter)
_A website starter kit built from the ground up with tags and branches detailing added complexity along the way._

#### Setting up a new project
First, clone this repo to a location on your computer. Change the folder name to the name of your project.
> `git clone git@github.com:bbodine1/buildup-ws-starter.git folderName`

Now cd into that folder and change the [git remote](https://github.com) from the build-up starter to your new project
> `git remote add origin your@reponame.git` - example reponame `git@github.com:bbodine1/test.git`

Lastly, push your new project to your new repo
> `git push -u origin master`

## Once the new project is setup

#### How to Create
Update the readme to use your own project readme. This will rename the bu-starter readme.md to setup.md and create a generic readme.md Run `npm run create`.

#### How to build
To build this project run `npm install` then `npm start`. The page will launch in your browser at `localhost:3000`

#### How to Clean
To reset the project back to the last git commit, run `npm run clean`. You will need to re install all npm modules to start up again.

#### Configurations
To configure the build process, edit the `config.js` located in the `gulp` folder.

#### What this readme is for
This readme will timeline all the changes made and callout tags and branches, describing what each tag or branch is and how it changes the starter.

- TAG 0.5 - Base html5 starter with a css stylesheed and a simple javascript file. w/
[Gulp](http://bit.ly/1gmLpeH),
[SASS](http://bit.ly/1NQO6Qw),
Watch and
[BrowserSync](http://bit.ly/1eEkTvZ).
This Tag has a `src` > `build` structure. Introducing [Gulp Del](http://bit.ly/1JP19n3) for cleaning the build folder and [Run-Sequence](http://bit.ly/1S8JCFy) to prevent race conditions while building.

- TAG 0.4 - Base html5 starter with a css stylesheed and a simple javascript file. w/
[Gulp](http://bit.ly/1gmLpeH),
[SASS](http://bit.ly/1NQO6Qw),
Watch and
[BrowserSync](http://bit.ly/1eEkTvZ).

- TAG 0.3 - Base html5 starter with a css stylesheed and a simple javascript file. w/
[Gulp](http://bit.ly/1gmLpeH),
[SASS](http://bit.ly/1NQO6Qw) and Watch.

- TAG 0.2 - Base html5 starter with a css stylesheed and a simple javascript file. w/
[Gulp](http://bit.ly/1gmLpeH).

- TAG 0.1 - Base html5 starter with a css stylesheed and a simple javascript file.