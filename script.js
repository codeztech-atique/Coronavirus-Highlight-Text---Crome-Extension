replaceText(document.body)

function replaceText(element) {
  var browerLocation = window.location.href;
  var patternGoogle = new RegExp('^(https:\/\/www.google.com)');
  console.log(browerLocation);
  var result = patternGoogle.test(browerLocation);
  if(!result) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement('span')
        newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbowcolor">$1</span>') //If you want to make it colorful
        // newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '') //If you want remove it completely
        // newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="blackout">$1</span>');
        element.replaceWith(newElement)
      }
    }
  } else {
    console.log("Its google.com");
  }
}