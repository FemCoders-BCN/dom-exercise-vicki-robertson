import {describe ,expect, it, beforeAll} from 'vitest'
import {JSOM} from 'jsdom'
import from "./js/app.js";

describe('APP',()=>{
    let dom;
    beforeAll(async () => {
        dom = await JSDOM.fromFile("index.html", {
          resources: "usable",
          runScripts: "dangerously",
        });
      });
      it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        console.log(link.href);
        expect(link.href).toMatch(/\/src\/css\/style.css$/);
      });
})



// COPIED FROM CHANGE-COLOUR KATA

describe("Image Card", () => {
  let dom;
  
  let imgCard;

  let redColor;

  let grayColor;

  let blackColor;

  let button;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });

    imgCard = document.querySelector(".product-image");
    redColor = document.getElementById('redColor');
    grayColor = document.getElementById('grayColor');
    blackColor = document.getElementById('blackColor');
    cartButton = document.getElementById('button');
  });

  it("should render the script in html", () => {
    const document = dom.window.document;
    const script = document.querySelector("script");
    expect(script).not.toBeNull();
  });

  //RED COLOR TEST
  it("should exist the function redColor", async () => {
    expect(redColor).toBeDefined();
    expect(typeof redColor).toBe("function");
  });

  // in redColor function, the car image should be red
  test("redColor changes the car image to red", async () => {
    redColor();
    expect(imgCard.style.backgroundImage).toBe('url(./public/img/redcar.jpg)');
  });

  it("should change button color to red", async () => {
    redColor();
    expect(cartButton.style.backgroundColor).toBe("red");
  });

  //GRAY COLOR TEST
  it("should exist the function grayColor", async () => {
    expect(grayColor).toBeDefined();
    expect(typeof grayColor).toBe("function");
  });

  // in grayColor function, the car image should be gray
  test("grayColor changes the car image to gray", async () => {
    grayColor();
    expect(imgCard.style.backgroundImage).toBe('url(./public/img/graycar.jpg)');
  });

  it("should change button color to gray", async () => {
    grayColor();
    expect(cartButton.style.backgroundColor).toBe("darkgray");
  });

  //BLACK COLOR TEST
  it("should exist the function blackColor", async () => {
    expect(blackColor).toBeDefined();
    expect(typeof blackColor).toBe("function");
  });

  // in grayColor function, the car image should be gray
  test("blackColor changes the car image to black", async () => {
    blackColor();
    expect(imgCard.style.backgroundImage).toBe('url(./public/img/blackcar.jpg)');
  });

  it("should change button color to black", async () => {
    blackColor();
    expect(cartButton.style.backgroundColor).toBe("black");
  });
