(function(window, undefined) {
  var dictionary = {
    "d71b4e81-1ffa-41ed-9310-7bb99eea42d0": "Generalted List",
    "c201eb77-adb5-48aa-8e5f-18601eb657f0": "Blog",
    "e4c4f60b-4861-4bfe-80d6-59c9f9140851": "Home_SignUP",
    "2acfee4c-1e39-4b9f-aa12-7d1dc7a49d63": "Single_Post_Page",
    "db6d5458-836e-4c40-808c-0bf2b57fefcc": "Universities",
    "b49422bb-4342-4de1-b857-5b1e8015a7cc": "Playlist",
    "f374f1c4-8589-433f-813a-888950db4cdc": "Contact Us",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "1945cdde-7e26-40f1-89d8-fbc40634782c": "Purchase",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);