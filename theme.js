(() => {

  const savedTheme =
    localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  const initialTheme =
    savedTheme ||
    (prefersDark ? "dark" : "light");


  document.documentElement.dataset.theme =
    initialTheme;


  function updateButton() {

    const button =
      document.querySelector(".theme-toggle");

    if (!button) {
      return;
    }


    const isDark =
      document.documentElement.dataset.theme === "dark";


    const icon =
      button.querySelector(".theme-icon");

    const label =
      button.querySelector(".theme-label");


    icon.textContent =
      isDark ? "☀" : "☾";


    label.textContent =
      isDark ? "Light" : "Dark";


    button.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
    );

  }


  document.addEventListener(
    "DOMContentLoaded",
    () => {

      updateButton();


      const button =
        document.querySelector(".theme-toggle");


      if (!button) {
        return;
      }


      button.addEventListener(
        "click",
        () => {

          const current =
            document.documentElement.dataset.theme;


          const next =
            current === "dark"
              ? "light"
              : "dark";


          document.documentElement.dataset.theme =
            next;


          localStorage.setItem(
            "theme",
            next
          );


          updateButton();

        }
      );

    }
  );

})();
