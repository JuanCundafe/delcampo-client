import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

import Category from "./Category";
import CustomButton from "../../Components/CustomButton";

export default function Categories() {
  const [menu, showMenu] = useState(false);
  const [size, getSize] = useState(0);

  const arrowLeft = "images/flecha-izquierda.png";
  const fruits = "images/frutas.png";
  const vegetables = "images/verduras.png";
  const pods = "images/vainas.png";
  const flowers = "images/flores.png";
  const roots = "images/raices.png";

  useEffect(() => {
    getSize(window.innerWidth);
  }, []);

  const show = (elem) => {
    elem.style.display = "block"; // Make it visible
    let height = elem.scrollHeight + 90 + "px"; // Get it's height
    elem.style.display = ""; //  Hide it again

    elem.classList.add("is-visible"); // Make the element visible
    elem.style.height = height; // Update the max-height

    window.setTimeout(function () {
      elem.style.height = height;
    }, 1100);
  };

  const hide = (elem) => {
    // Give the element a height to change from
    elem.style.height = elem.scrollHeight + "px";

    // Set the height back to 0
    window.setTimeout(function () {
      elem.style.height = "0";
    }, 1);

    window.setTimeout(function () {
      elem.classList.remove("is-visible");
    }, 350);
  };

  const showDesktop = (elem) => {
    let menu = document.querySelector(".categories-container");

    elem.style.display = "block"; // Make it visible
    let height = elem.scrollHeight + "px"; // Get it's height
    elem.style.display = ""; //  Hide it again
    elem.classList.add("is-visible"); // Make the element visible
    elem.style.height = height; // Update the max-height

    menu.classList.add("is-visible"); // Make the element visible

    window.setTimeout(function () {
      elem.style.height = height;
    }, 360);
  };

  const hideDesktop = (elem) => {
    let menu = document.querySelector(".categories-container");

    elem.classList.remove("is-visible");
    menu.classList.remove("is-visible");
  };

  const handleMenu = () => {
    const mobileContainer = document.querySelector(".categories-container");
    const desktopContainer = document.querySelector(".parent-container");

    if (size < 576) {
      !menu ? show(mobileContainer) : hide(mobileContainer);
    } else {
      !menu ? showDesktop(desktopContainer) : hideDesktop(desktopContainer);
    }

    showMenu(!menu);
  };

  return (
    <>
      <CustomButton
        icon={<MenuOutlined />}
        btnStyle="btn-orange"
        callback={handleMenu}
      >
        Categorías
      </CustomButton>

      <div className="parent-container">
        <div className="categories-container">
          <img src={arrowLeft} height="25" width="25" onClick={handleMenu} />

          <Category imgPath={fruits} redirect="/home" rowStyle="mw first">
            Frutas
          </Category>

          <Category imgPath={vegetables} redirect="/home" rowStyle="mw">
            Verduras
          </Category>

          <Category imgPath={pods} redirect="/home" rowStyle="mw">
            Vainas
          </Category>

          <Category imgPath={flowers} redirect="/home" rowStyle="mw">
            Flores
          </Category>

          <Category imgPath={roots} redirect="/home" rowStyle="mw last">
            Raíces
          </Category>
        </div>
      </div>
    </>
  );
}
