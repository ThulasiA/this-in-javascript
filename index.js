const toggleContent = () => {
  let getContent = document.getElementById("content");
  console.log(getContent);
  getContent.style.display === "none"
    ? (getContent.style.display = "block")
    : (getContent.style.display = "none");
};

const toggleGlobalContent = () => {
  let getGlobalContent = document.getElementById("globalContent");
  getGlobalContent.style.display === "none"
    ? (getGlobalContent.style.display = "block")
    : (getGlobalContent.style.display = "none");
};

const toggleFuncContent = () => {
  let getFuncContent = document.getElementById("funcContent");
  getFuncContent.style.display === "none"
    ? (getFuncContent.style.display = "block")
    : (getFuncContent.style.display = "none");
};
