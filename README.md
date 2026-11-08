# Lab Exercise 7 – React JS (labweek09)

**Course:** COMP3123 – Full Stack Development I, George Brown College
**Lab:** Lab Week 09 – React JS
**Student:** Mjd Arow
**Student ID:** 101513153

## How to run

```bash
npm install
npm start
```

Then open http://localhost:3000 in the browser.

## How state and props are used

- `App.js` stores the five pieces of information (title, subtitle, student ID, name, college) in **state** using the `useState` hook.
- `App` passes those values to the `StudentInfo` component as **props**.
- `src/components/StudentInfo.js` reads them from `props` and renders them as the `<h1>`–`<h5>` headings under the React logo.
