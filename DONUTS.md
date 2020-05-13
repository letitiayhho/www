## instructions for adding a new donut review

 - make sure you have the most recent version

    ```bash
    $ cd ~/src/murp.us
    $ git pull keggsmurph21
    $ npm install -D
    ```

 - edit `./src/views/donuts.ejs`

    ```bash
    $ vi ./src/views/donuts.ejs
    ```

 - set the syntax to be `html`

    ```vim
    :set syntax=html
    ```

 - go to the review template (`<cr>` means hit the <kdb>Enter</kdb> key ("cr" stands for "[carriage return](https://en.wikipedia.org/wiki/Carriage_return)"))

    ```vim
    /REVIEW TEMPLATE<cr>
    ```

 - move down two lines (`2j`), start a visual block selection (`V`) at the `<div class="donut-review">`, move cursor to the corresponding `</div>` (can do this with `3}k`, which goes to the end of the "paragraph" three times, then up once), then copy ("yank") the selection (`y`)

    ```vim
    2jV3}ky
    ```
 - go to the end of the comment (block delimited by `<!--` and `-->`) and paste (`p`)

    ```vim
    3}jp
    ```

 - change all the `CHANGE_ME` things in the pasted text (note that you can use `n` to go to the next match and `N` to go to the previous one)

    ```vim
    /CHANGE ME<cr>
    ```

   - also, the second `CHANGE ME` should be equal to "#" + whatever you change the first one to be ... for example:

     ```html
     <div class="donut-review" id="changed-thing-1">
         <div class="review-title">
             <a href="#changed-thing-1" class="donut-shop">
                ...
     ```

 - for every actual item you want to add to the review, you'll need to copy-paste the `<div class="donut">`

 - save and quit!

    ```vim
    :wq
    ```

 - add the changes, commit them, and push!

    ```bash
    $ git add ./src/views/donuts.ejs
    $ git commit
    $ git push
    ```

 - open a pull request on github in your browser (can use [this link](https://github.com/letitiayhho/www/pull/new/master) if you don't already have one open)
