const phone = document.getElementById("phone");

phone.addEventListener("keydown", (event) => {
  if (event.key === "Alt" || event.key === "Tab") {
    return;
  }

  const value = event.target.value
    .replace(/^\(?(\d{2})\)?/, "($1)")
    .replace(/^\(?(\d{2})\)?\s?(\d{1})/, "($1) $2")
    .replace(/^\(?(\d{2})\)?\s?(\d{1})\s?(\d{4})/, "($1) $2 $3")
    .replace(/^\(?(\d{2})\)?\s?(\d{1})\s?(\d{4})-?(\d{4})$/, "($1) $2 $3-$4");

  phone.setAttribute("value", value);
  phone.value = value.slice(0, 15);
});

phone.addEventListener("keyup", (event) => {
  if (event.key === "Alt" || event.key === "Tab") {
    return;
  }

  const { value } = event.target;
  const last =
    phone.getAttribute("value").length > 15
      ? phone
          .getAttribute("value")
          .slice(phone.getAttribute("value").length - 1)
      : "";
  phone.setAttribute("value", value.replace(/(?:[A-z|!-'|*-,|.-/|@]+)/, last));
  phone.value = phone.getAttribute("value");
});
