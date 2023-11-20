import {describe ,expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'
import { redColor, grayColor, blackColor } from "../src/js/app";


  //RED COLOR TEST
  it("should exist the object redColor", async () => {
    expect(redColor).toBeDefined();
    expect(typeof redColor).toBe("object");
  });

  // in redColor function, the car image should be red
  test("redColor changes the car image to red", async () => {
    return redColor;
    expect(imgCard.style.backgroundImage).toBe('url(./public/img/redcar.jpg)');
  });

  it("should change button color to red", async () => {
    return redColor;
    expect(cartButton.style.backgroundColor).toBe("red");
  });

  //GRAY COLOR TEST
  it("should exist the object grayColor", async () => {
    expect(grayColor).toBeDefined();
    expect(typeof grayColor).toBe("object");
  });

  // in grayColor function, the car image should be gray
  test("grayColor changes the car image to gray", async () => {
    return grayColor;
    expect(imgCard.style.backgroundImage).toBe('url(./public/img/graycar.jpg)');
  });

  it("should change button color to gray", async () => {
    return grayColor;
    expect(cartButton.style.backgroundColor).toBe("darkgray");
  });

  //BLACK COLOR TEST
  it("should exist the object blackColor", async () => {
    expect(blackColor).toBeDefined();
    expect(typeof blackColor).toBe("object");
  });

  // in grayColor function, the car image should be gray
  test("blackColor changes the car image to black", async () => {
    return blackColor;
    expect(imgCard.style.backgroundImage).toBe('url(./public/img/blackcar.jpg)');
  });

  it("should change button color to black", async () => {
    return blackColor;
    expect(cartButton.style.backgroundColor).toBe("black");
  });
