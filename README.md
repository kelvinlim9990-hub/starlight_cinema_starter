# Starlight Cinema (React)

A tiny React app for the Sigmaschool Debug Lab: **Console.log and Vercel logging**.
The app looks fine at first glance, but things are wrong. You find out why by reading the logs.

```
starlight_cinema_starter/
├── index.html
├── package.json
└── src/
    ├── main.jsx          starts the app
    ├── App.jsx           the nav bar and the 3 pages
    ├── pages/            Home, Booking, About
    ├── components/       the pieces of a page (Header, Greeting, BookingSummary)
    ├── data/             the member and the booking list
    └── content/          the About text
```

The app has **3 pages**: Home, Booking and About. Click the nav bar to move between them.
Each page has its own problem, so check all three.
You will mostly work inside `src/pages/` and `src/components/`.

## Setup

1. Fork the repo, copy your fork's link, and clone it in the VS Code terminal:
   ```bash
   git clone https://github.com/<your-username>/starlight_cinema_starter.git
   cd starlight_cinema_starter
   code .
   ```
2. In the new VS Code window, open the terminal and install the packages:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
4. Open the address it prints (`http://localhost:5173`) in your browser.
5. Press **F12** and click the **Console** tab. Keep it open while you work.

## Read the red error first

When the page goes **blank**, open the **Console** (F12). A red message tells you what broke.
Read it in three parts:

1. **The message**, the first line. Example: `Cannot read properties of undefined (reading 'age')`.
   It means: the thing before `.age` is `undefined`.
2. **Where it happened**, the lines starting with `at`. Example: `at Profile (Profile.jsx)`.
   The first one is the function or component that crashed. Click the file name to jump there.
3. **The question it leaves you with.** Why is that value `undefined`? A `console.log` answers that.

The same error also shows in the VS Code terminal, with a few lines of your code. Your own `console.log` lines do **not**: they only show in the browser Console.

## Where do my logs show up?

In the **browser Console** (F12). Never in the VS Code terminal.
While you are developing, each `console.log` shows up **twice**. That is normal.
React runs your component twice in development to catch mistakes.

## How to console.log in a JSX file

You can put a log in three places.

**1. Before the `return`**: a normal line of JavaScript.
```jsx
function Greeting({ name }) {
  console.log('name:', name)
  return <p>Hello, {name}</p>
}
```

**2. Inside the JSX**: wrap it in **one** pair of curly braces.
```jsx
return (
  <div>
    {console.log('name:', name)}
    <h1>{name}</h1>
  </div>
)
```
A log prints nothing on the page, so it is safe here.
Put it **above** the line that crashes. A line that has already crashed cannot print anything after it.
Two pairs of braces, `{{ ... }}`, is a mistake. It makes an object, not a log.

**3. Inside a function**: put the log on a line **before** the `return`.
A line after `return` never runs, so a log there prints nothing.
```jsx
function addTax(price) {
  console.log('price in:', price)
  const result = price * 1.06
  console.log('result:', result)
  return result
}
```
In a `.map()`, an arrow function with `( )` returns the JSX straight away, so there is nowhere to put a log.
Change `( )` to `{ }` and add a `return`:
```jsx
{items.map(item => {
  console.log('item:', item)
  return <li key={item.id}>{item.name}</li>
})}
```

Always add a label first (`'item:'`). It lets you tell one log line from another.

## What is wrong?

| Page | What to do |
|---|---|
| Home | Open it. If it goes blank, open the Console (F12) and read the red error. |
| Booking | Click **Booking** in the nav bar, or open `localhost:5173/#/booking`. Read any red error. |
| About | It looks fine on your computer. Push it to GitHub. If Vercel fails, open the **Build Logs**. |

Each page crashes on its own. A blank page does not stop you from opening the other pages.

## How to debug

1. **Reproduce it.** Make it happen every time.
2. **Ask a question.** Is this value what I think it is? Did this line run?
3. **Test it with a console.log.** Put it where the answer is.
4. **Read the answer.** Does it match what you expected? If not, ask the next question.
5. **Fix it, then check.** When it works, delete your logs.

## Deploy to Vercel

1. Push your code to your fork:
   ```bash
   git add .
   git commit -m "My changes"
   git push
   ```
2. In Vercel, click **Add New**, then **Project**, and import your fork.
3. Click **Deploy**.
4. If it fails, click the failed deployment and open **Build Logs**. The red lines tell you what stopped it.
5. Fix it, push again, and Vercel deploys again.

Your logs from the app still live in the browser Console, on your Vercel link too.
Vercel's logs only show what happened while it was building your project.
