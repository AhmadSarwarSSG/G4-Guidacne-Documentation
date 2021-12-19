jQuery("#simulation")
  .on("click", ".s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_7",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "angle": {
                      "type": "rotateby",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "angle": {
                      "type": "rotateby",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_9",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "angle": {
                      "type": "rotateby",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_10",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "angle": {
                      "type": "rotateby",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 400,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "angle": {
                      "type": "rotateby",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 400,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "angle": {
                      "type": "rotateby",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_1 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_1 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_2 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_3 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_4 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_5 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_1 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#777777"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#5E5E5E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d71b4e81-1ffa-41ed-9310-7bb99eea42d0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    }
  });