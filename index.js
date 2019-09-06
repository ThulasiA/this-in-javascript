const toggleContent = () => {
  console.log("clicked");
  let getContent = document.getElementById("content");
  getContent.style.display === "none"
    ? (getContent.style.display = "block")
    : (getContent.style.display = "none");
};
