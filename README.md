# nextjsPortfolio

## Creation of my new portfolio website with Next.js and Material UI

After my internship at [Sport Data Intelligence](https://sport-data-intelligence.com) where I made their new website using Next.js, React and Material-UI I decided to update my portfolio website, previously made with WordPress, using these same technologies.

For this project I wanted to focus on a few key points:

### Styling

I wanted to get some more practice with the implementation of custom stylings with Material-UI. For this project I chose to centralize almost all style elements in a custom theme, only sporadically using inline styling (generally for margins) in places where they would never change.

### Using Context

Until now I've only been using Context in some small exercises. It seemed like a good occasion to try and implement it in a 'real world' application (even if it's only a static website), especially given the previous goal of wanting to play around with the styling a bit more. Therefore I made both a dark and a light theme, which were then inserted with a (very basic) implementation of the useContext hook.

### Using npm packages

Another thing I haven't done much before is using third party npm packages. For this project I used a few:

- [react-scroll](https://www.npmjs.com/package/react-scroll) takes care of the transitions between the different sections of the page
- [react-player](https://www.npmjs.com/package/react-player) was used as I needed to insert a demonstration video for one of the projects for school
- [react-image-gallery](https://www.npmjs.com/package/react-image-gallery) provides the image galleries within the 'more info' dialog boxes for some of the projects

### Testing

Finally I wanted to try and implement some unit testing using React-Testing-Library and Jest. Obviously the tests are quite basic (since it's a static website), but you have to start somewhere!
