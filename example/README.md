# jQuery Workshop #1

## Instructions
* Every exercise should be done in a separate branch. :warning: **Always go back to master before creating a new branch.** :warning:
* Start with the basic skeleton provided to you, which consists of an `index.html` file and a `javascript` directory with `app.js`, as well as a `css` directory with `app.css`.
* Add any new HTML to `index.html`, any new styles to `app.css` and any JavaScript/jQuery code to `app.js`.

## Resources
* [jQuery API documentation](http://api.jquery.com/)
* [Intro to jQuery from Udacity](https://www.udacity.com/course/intro-to-jquery--ud245)
* [AJAX with jQuery from Udacity](https://www.udacity.com/course/intro-to-ajax--ud110)

At some point during your studies you should watch the two video series from Udacity. Start with the intro course and move on to the AJAX course.

## Exercise 1: hiding/showing announcements
* Add the following code to your HTML file:
```html
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quibusdam, itaque, et magni expedita saepe ut nemo labore cum debitis iste ipsa neque eaque doloremque aliquid asperiores animi reiciendis nobis!</p>
    <p>Magnam, temporibus, cum, odio quo odit quod ex enim ipsum omnis voluptatibus harum similique consequatur commodi inventore dicta earum laboriosam autem voluptates animi itaque quasi exercitationem facilis repellendus unde quia.</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum nobis nemo voluptatibus itaque rem distinctio est. Voluptatum, tempore, fugit possimus ex repudiandae aliquam inventore quam voluptas tenetur quia dignissimos.</p>
    <p>Suscipit, optio, autem, eum, voluptatum nesciunt veritatis ad deleniti soluta consequuntur cumque culpa voluptates nam itaque magnam voluptate? Architecto, rerum tenetur magni dolore laborum adipisci nisi facere magnam voluptatum voluptas?</p>
</div>
<div class="announcement">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, atque, veniam corporis aut accusamus placeat voluptate modi sit nemo possimus voluptatibus repellat fuga quisquam vel soluta! Sed, ea debitis iure.</p>
    <p>Doloribus sunt corrupti excepturi expedita provident vero unde itaque ipsa sapiente qui. Ipsum, facere, iure, molestiae, voluptatibus aliquam assumenda magnam suscipit aperiam dolor porro iste deleniti. Eum, porro animi assumenda.</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, soluta, nesciunt laudantium quisquam itaque ea aliquid maxime provident alias aperiam saepe in voluptatem harum excepturi possimus fugit dolore nulla animi.</p>
    <p>Suscipit, ex, ratione odio expedita eveniet ducimus quia ab rem dignissimos dolorum omnis voluptas rerum aliquid sint repellendus non iure qui repudiandae tenetur hic porro deleniti ullam nulla atque ea?</p>
</div>
<div class="announcement">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus modi eius laudantium aut eum? Aliquid, quam, delectus, harum, incidunt eius ratione nobis minus nulla tempore libero consectetur ea qui consequatur?</p>
    <p>Nesciunt ratione aut unde iusto explicabo soluta hic laboriosam asperiores dicta! Animi distinctio aperiam exercitationem ad id dicta rem earum asperiores! Quia, quod nostrum in velit aspernatur nisi atque blanditiis.</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, animi, placeat vero voluptate hic obcaecati libero possimus corporis. Exercitationem, aliquam, illum sint eos deserunt unde iure rem ut necessitatibus asperiores.</p>
    <p>Alias, fuga nesciunt libero suscipit quisquam excepturi pariatur necessitatibus sed nulla sint possimus ut voluptates optio ex quam adipisci consequatur nemo vel inventore sit cupiditate quis perferendis facere atque rem?</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maxime, ipsam adipisci voluptas debitis quisquam ad laboriosam sequi reprehenderit animi id officiis facilis maiores natus illum excepturi minima iusto qui.</p>
    <p>Consequuntur, enim, harum quasi incidunt maiores fugit asperiores eos iste eligendi molestias excepturi minus nemo eveniet itaque quibusdam voluptate ea quaerat cumque laudantium odit? Sit, sequi quia eveniet reiciendis vero.</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, harum, dignissimos, earum dicta officia sit reprehenderit quam similique fuga numquam alias esse minus aliquid repellendus dolor magnam quidem optio distinctio?</p>
    <p>Quia, quam, sapiente, voluptas, accusamus ipsa illo cupiditate ab necessitatibus velit voluptatibus provident unde explicabo fugit ipsum saepe expedita sit voluptatem dolor amet ex mollitia odio perspiciatis numquam quos itaque.</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, exercitationem, dolorem, quae, quaerat consectetur numquam hic incidunt sapiente nesciunt explicabo beatae voluptatem aperiam sequi debitis perferendis nemo praesentium ea mollitia.</p>
    <p>Quidem, illo maxime deleniti porro. Eveniet, illum, cum, magni, facilis dolor culpa nostrum libero suscipit omnis possimus consequuntur natus sed labore sapiente temporibus distinctio fugit consectetur veritatis corporis commodi dolorem.</p>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, recusandae, quia maiores illo velit molestiae obcaecati cupiditate? Culpa, aliquam, veritatis, inventore, ipsum cupiditate eaque vero explicabo eveniet eius exercitationem necessitatibus!</p>
    <p>Eius, assumenda, culpa commodi deserunt sequi mollitia illo praesentium cumque? Ratione, dolorum molestias officia voluptate aperiam explicabo totam. Rem, assumenda, nulla at quos odit temporibus reiciendis sapiente alias maxime fuga.</p>
</div>
```
* Using CSS, style the `announcement` divs to give them a border, background color and padding of your choice
* Using jQuery's `append` method, add an "X" button to every element that has the class `announcement`
* Use CSS to style this button (hint: change the `border` property so the button looks flat), as well as make it appear 
to the top right of the `div`, using [`position: absolute`](http://learnlayout.com/position.html)
* Using jQuery, make it so that if the button is clicked, the content of the announcement is hidden, and the text of the button changes from "X" to "show announcement". Hint: you can do this with two buttons. Hint #2: remember what was said in class about using classes versus trying to change CSS properties with jQuery directly.
* If the button "show announcement" is clicked, the announcement content should re-appear and the behaviour can be repeated as many times as needed.

## Exercise 2: image gallery
* Add the following code to your HTML page:
```html
<ul>
    <li><img src="http://placekitten.com/g/421/421" alt="Kitty #1"></li>
    <li><img src="http://placekitten.com/g/422/422" alt="Second Kitty"></li>
    <li><img src="http://placekitten.com/g/423/423" alt="The Quick Cat"></li>
    <li><img src="http://placekitten.com/g/424/424" alt="Meow meow meow"></li>
    <li><img src="http://placekitten.com/g/425/425" alt="Hello Kitty World"></li>
    <li><img src="http://placekitten.com/g/426/426" alt="Kitty Number 6"></li>
    <li><img src="http://placekitten.com/g/427/427" alt="Well-meaning cat"></li>
    <li><img src="http://placekitten.com/g/428/428" alt="Destructo-cat"></li>
    <li><img src="http://placekitten.com/g/429/429" alt="Smiley Cat"></li>
    <li><img src="http://placekitten.com/g/430/430" alt="Hisss Hissssss"></li>
    <li><img src="http://placekitten.com/g/431/431" alt="Oh look a ball of wool"></li>
    <li><img src="http://placekitten.com/g/432/432" alt="What can I destroy today?"></li>
    <li><img src="http://placekitten.com/g/433/433" alt="Kitty ALL THE THINGS!"></li>
</ul>
```
* Use your block grid from the responsive css workshop to make this image gallery responsive, with 4 images per row on desktop, 3 on tablet and 2 on mobile. If you did not complete the responsive block grid from the responsive CSS workshop, then go back and complete it now before continuing this exercise.
* **NOTE**: The images each have a different size, on purpose. *Make sure you fix this with CSS* by making all the images have a consistent width! Hint: you can do this by making the images be the full width of their parent, or using your `responsive-img` class from the responsive css workshop.
* Since you are going to make your images clickable, it would be nice to let the user know that they are clickable. Normally when an element is clickable, the cursor changes to a pointer. However because images are not normally clickable, the pointer will stay the default arrow. Using the CSS [`cursor`](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) property, make the images appear clickable by choosing the appropriate cursor type.
* Using jQuery, make it so that when the user clicks on an image, an overlay will appear on the page, and a copy of the clicked image will appear at the center of the overlay. Note that this is a custom overlay, not an `alert` or anything built-in.
* In addition to the image, there should be a paragraph below the image that contains the text in the `alt` attribute of the image
* The end result should look something like this:

![gallery](https://i.imgur.com/7JWpU7M.png)

![overlay](https://i.imgur.com/8TDZ8HD.png)

* **Hint**: in addition to all jQuery functions you have learned so far, you will need to use
[`jQuery.fn.attr`](http://api.jquery.com/attr/) to grab the `src` and `alt` properties of the image that was clicked.

* **Hint #2**: here is some code for your overlay:

```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(0, 0, 0, 0.75);
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
```
And the HTML for it should look like this:

```html
<div class="overlay">
  <img src=""><!-- the src of this image will be filled in by jQuery when an image is clicked -->
  <p class="image-caption"><!-- the text of this P will be filled in by jQuery when an image is clicked --></p>
</div>
```

## Exercise 3: integrating a plugin
* Add the following code to your HTML page:
```html
<div>
  <aside>
    <form action="/email-signup" method="POST">
      <h2>Mailing List</h2>
      <div><input type="text" placeholder="Your Email"></div>
      <div><button>Join mailing list</button></div>
    </form>
  </aside>
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, atque, veniam corporis aut accusamus placeat voluptate modi sit nemo possimus voluptatibus repellat fuga quisquam vel soluta! Sed, ea debitis iure.
    </p>
    <p>
      Doloribus sunt corrupti excepturi expedita provident vero unde itaque ipsa sapiente qui. Ipsum, facere, iure, molestiae, voluptatibus aliquam assumenda magnam suscipit aperiam dolor porro iste deleniti. Eum, porro animi assumenda.
    </p>
    <!-- ADD ENOUGH PARAGRAPHS SO THAT THE PAGE SCROLLS -->
  </div>
</div>
```
* Make sure to add enough paragraphs so that the page can scroll
* Using CSS, display the form on the left of the text. Give the form 30% width and the text the rest.
* Using CSS, style the form so that it has a nice border, nice padding. Also style the elements inside the form. [This MDN article on form styling](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Styling_HTML_forms) could help you to do that.
* Look at the page for [jQuery sticky plugin](http://stickyjs.com/)
* Integrate jQuery sticky on your page so that as the user scrolls, the form stays at the top.
* As jQuery sticky does its job, notice that your form might look distorted. You can fix this by adding a wrapper around the form.

## Exercise 3B: Making it responsive
On mobile devices, displaying the form next to the text is ridiculously unfriendly. We want to do this only if the screen size is medium or more, using our 641px+ media query from the CSS responsive workshop. The difference here is that we not only need to check for the screen size in our CSS, but also in our JS code. If the form and the text are stacked as they should be on mobile devices, then there's no need to make the form sticky.

1. Make sure that the form and the text are stacked on mobile devices by using a media query
2. Read this tutorial on [using media queries in JavaScript](https://www.sitepoint.com/javascript-media-queries/)
3. Implement a solution so that the form will be sticky only on the right screen size, using the `mq.matches` method with an `if/else`
4. Test your solution by refreshing your page at different screen sizes.
5. Once your solution works, take it to the next level by implementing the `mq.addEventListener` callback. Sometimes a person will change the size of their browser while being on your site, and you want to react accordingly. If the screen size becomes too small, you want to undo the jQuery stickiness. Look at the [stickyjs documentation on GitHub](https://github.com/garand/sticky) to figure out how to "un-sticky" an object.

## Exercise 4: playing with forms
* Add the following code to your HTML page:
```html
<form id="signup-form">
    <div><input type="text" name="user" placeholder="Username"></div>
    <div><input type="password" name="password" placeholder="Password"></div>
    <div><input type="password" name="password2" placeholder="Confirm Password"></div>
    <div><button type="submit">Signup!</button></div>
</form>
```
* Click the Signup button and notice that the browser tries to submit the form by reloading the page
* For this exercise, we want to do some basic checking before submitting the form
* Add an onSubmit event handler to the form using the following code:
```javascript
$('#signup-form').on('submit', function(event) {
	// write your code here
});
```
* Inside the event handler, you get passed the actual event object as a parameter, that we decided to call `event`
* Call `event.preventDefault()` inside your handler, reload your page, and check that clicking Signup will not submit the form
* Using [`jQuery.fn.val`](http://api.jquery.com/val/), find out the values of the password and confirm password fields of the form
* Make the following validation on the fields:
  1. The password should be at least 10 characters
  2. The password and confirm password should be the same
* If the validation passes, then let the form submit normally by NOT calling `preventDefault`.
* If the validation fails, prevent the form from submitting and display an `alert` to the user telling them what went wrong

## Exercise 5: discovering AJAX
* Add the following code to your HTML page:
```html
<h1>Welcome to my blog!</h1><article>
<article>
	<h2>This is an article about the International Space Station!</h2>
    <p>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, consequuntur, veniam sed magnam aperiam iure voluptates corporis quam culpa expedita perspiciatis sequi obcaecati saepe tenetur nesciunt illum laboriosam ad cumque.</span>
        <span>Dolorem, unde minus accusamus quos recusandae consequuntur numquam soluta vitae cum animi laboriosam deleniti alias explicabo molestias facere quis harum atque enim ducimus reprehenderit quaerat aliquid earum nulla odit culpa!</span><span>Quo, nam, at, nesciunt sit inventore ad nisi eum eveniet consequatur dolore eligendi magni eaque corrupti. Soluta, officiis, earum numquam repellat vel unde repudiandae aspernatur minus ex omnis molestiae expedita.</span>
	    <span>Asperiores explicabo perspiciatis et repudiandae dolorem modi magni fugiat accusantium sint. Eum, quos autem quibusdam animi molestias dolor dolores maxime distinctio consectetur eius inventore ratione officiis dicta! Tempora, minima, esse.</span>
	    <span>Voluptates, quas, magni iure in illo eos iste placeat ad molestiae enim minus amet magnam itaque dolorem ullam facilis rem quod expedita quibusdam ratione quisquam porro tenetur nulla! Minus, reprehenderit.</span>
	</p>
	<p>
	    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ipsum sunt sapiente nihil consectetur natus laborum consequuntur aliquid nisi doloremque cupiditate veniam possimus? Iusto, ex suscipit unde quo aliquam nulla!</span>
	    <span>Nemo, blanditiis perspiciatis autem dolorem laborum quae sequi illo id. Ab, dolorem, consequuntur, cupiditate, eligendi quam nulla doloremque voluptatem cumque iusto at repellendus eum inventore quo obcaecati esse id odio?</span>
	    <span>Aliquid, voluptate similique fugiat cum officiis pariatur laudantium repellat error ullam sequi vel commodi provident autem inventore praesentium odio maxime beatae amet odit sunt nam consectetur tempore dolorem consequuntur delectus.</span>
	    <span>Ea, facilis itaque repellat incidunt dolorum quas iure eius nemo obcaecati quidem amet laudantium similique perferendis odit alias repudiandae error laborum tempora doloribus aliquid. Dicta, cum omnis ratione sit amet.</span>
	    <span>Nihil, ullam, quod doloremque aperiam natus dolor iure deleniti laboriosam saepe sed id reiciendis tempore pariatur. Sequi, commodi, quaerat, cupiditate, praesentium ipsam voluptate consectetur ex fugiat asperiores distinctio iste aliquid.</span>
	</p>
	<p>
	    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, velit ipsum ut. Tempore, harum, deserunt, animi voluptate fugit facere culpa architecto exercitationem ducimus delectus impedit repellat assumenda recusandae veritatis beatae!</span>
	    <span>A, perspiciatis alias laboriosam nisi odio provident odit earum excepturi voluptas ratione laborum vitae harum quas incidunt saepe ipsa in dolore molestias ullam architecto iure repudiandae molestiae placeat! Doloremque, enim.</span>
	    <span>Beatae, consequatur, nemo, accusamus doloribus autem facere quasi commodi iure iusto fuga ipsa illo earum repellendus. Vero, impedit, nam, aut, eius voluptatem voluptate quos nisi tenetur maiores ab distinctio quasi.</span>
	    <span>Maiores, dolores, voluptatum illo earum est similique maxime assumenda voluptates. Alias, aspernatur voluptatibus quod repudiandae voluptatem voluptates voluptate cumque laborum maxime at odit ipsam omnis tempora modi in corporis expedita.</span>
	    <span>Voluptatibus, corporis, eaque aperiam accusantium laboriosam facilis quis sed voluptatum vel quaerat nisi architecto soluta earum quidem sunt at saepe est libero. Placeat, labore vitae ex dignissimos ipsum molestiae ut.</span>
	</p>
	<p>
	    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quibusdam, hic libero nostrum odit sit id ratione dolore at provident atque voluptatibus quod. Assumenda, tenetur fugit non obcaecati id cupiditate?</span>
	    <span>Enim nobis impedit accusantium harum nulla ut porro laborum blanditiis commodi repudiandae. Quis, fugit, excepturi, quidem, eius sit consequuntur explicabo earum assumenda odit eaque adipisci alias dolores dolorum nisi a.</span>
	    <span>Aut, quaerat, harum, consequatur dignissimos sequi nisi vel soluta corporis impedit distinctio fuga vitae praesentium molestias aliquid corrupti eveniet quasi cum in porro natus odit omnis aspernatur veniam adipisci assumenda.</span>
	    <span>Nobis, iste, quidem impedit neque inventore dolorem ipsum suscipit cum deleniti nesciunt modi illum recusandae minima dicta vitae beatae atque molestias porro. Omnis rerum veritatis ipsum quaerat odio nisi ratione.</span>
	    <span>Eum, accusamus, eligendi ratione earum accusantium officiis laboriosam rem et quasi dolores quia iste impedit excepturi dolorum consequuntur. Eius, numquam repudiandae ducimus animi aspernatur ab similique nobis provident illum vel.</span>
	</p>
</article>
```
* Look at this example of using [`jQuery.getJSON`](http://api.jquery.com/jquery.getjson/) to retrieve some JSON from the internet:
```javascript
jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
	function(res) {
		console.log(res.results[0].geometry.location);
	}
)
```
* Using the `getJSON` function of jQuery, retrieve the position of the ISS, and add it to the page **below the title of the article**.
* Use some CSS to style the added content, by giving it a border, padding and anything else you deem valuable.
* **Hint**: You will need to use [`jQuery.fn.after`](https://api.jquery.com/after/) to add a new element after the title of the page

## Exercise 6: Real-time ISS!
* Add the following HTML to your page:
```html
<h1>Look at the ISS live!</h1>
<img id="iss-position">
```
* Read about [Google Static Maps API](https://developers.google.com/maps/documentation/static-maps/intro)
* Using jQuery and AJAX, find out the position of the ISS, and change the `src` of the image to be a google maps static image
* The image should be centered where the ISS is, and there should be a marker. Bonus points if you can put a custom marker -- read that documentation!!
* Using the [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) function, call your
code repeatedly to get a new ISS position, then update the `src` of the image based on that.
* **NOTE**: Make sure you get an API key, because you'll be calling the Google Maps API quite often!
* **NOTE**: To limit the calls you make to the Google Maps API, don't use setInterval from the start. First make sure that your code is working well by calling your function only once. When you feel that your code is working, activate the `setInterval` and set it to a low value to admire your hard work :)
