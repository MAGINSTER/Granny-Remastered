(function(topic, b) {
    var getter = _0x4d71;
    var out = topic();
    for (;!![];) {
      try {
        var a = -parseInt(getter(520)) / 1 * (-parseInt(getter(541)) / 2) + parseInt(getter(526)) / 3 * (parseInt(getter(501)) / 4) + parseInt(getter(528)) / 5 * (-parseInt(getter(498)) / 6) + parseInt(getter(507)) / 7 + parseInt(getter(548)) / 8 * (parseInt(getter(497)) / 9) + -parseInt(getter(549)) / 10 * (-parseInt(getter(533)) / 11) + -parseInt(getter(508)) / 12;
        if (a === b) {
          break;
        } else {
          out["push"](out["shift"]());
        }
      } catch (_0xe2262d) {
        out["push"](out["shift"]());
      }
    }
   })(_0x187e, 472238);
   function _0x187e() {
    var allowedMethods = ["16stDJYI", "/playsound mp.sounds:granny.gameplay.click1 master @a ~ ~ ~ 0.2 1", "{Lighting:0b,Texture:\"b.a:texturesGranny/state3.png\",Shaded:0b,Name:\"blockbuster.image\"}", "rxy", "close", "getNumber", "5122663fRvrSK", "23080704ldsJzV", "{Lighting:0b,Texture:\"b.a:texturesGranny/state2.png\",Shaded:0b,Name:\"blockbuster.image\"}", "Поверните рычаг",
    "Выйти", "Electro", "floor", "/playsound mp.sounds:granny.gameplay.click2 master @s ~ ~ ~ 0.2 1", "getUIContext", "getLast", "sendActionBar", "createMorph", "setBlock", "6xQpqvi", "name", "exit", "setupHUD", "swingArm", "anchor", "115269RxILKF", mappet.style("red") + "Электрощит уже чинят...",
    "1496585UJaKAn", "granny:shitokon", "closeHUD", "closable", "player", "5291tMZLJp", "button", "enabled", "/voicemute unmute ", "openUI", "closeUI", "black_reverb", "subject", "294344HlnGXc", "executeCommand", "label", "getServer", "menuhandler", "changeHUDMorph", "setNumber", "122224pEOWNI", "520MyXQdC", "scheduleScript", "createBlockState", "elec", "getStates", "531DDWjOt", "6qXSBSu", "createUI", "getSubject"];
    _0x187e = function() {
      return allowedMethods;
    };
    return _0x187e();
   }
   var press = 0;
   var stt = 1;
   function main(deepDataAndEvents) {
    var round = _0x4d71;
    var vals = deepDataAndEvents["getSubject"]();
    if (deepDataAndEvents[round(544)]()["getStates"]()[round(506)](round(552)) === 0) {
      vals[round(530)](round(539));
      vals[round(523)](round(539));
      vals[round(530)](round(512));
      vals[round(523)]("Electro");
      deepDataAndEvents["getServer"]()[round(496)]()[round(547)](round(552), 1);
      press == 0;
      stt == 1;
      menu(deepDataAndEvents);
    } else {
      vals[round(517)](round(527));
    }
   }
   function menu(deepDataAndEvents) {
    var randInt = _0x4d71;
    var r20 = mappet[randInt(499)](deepDataAndEvents, randInt(545))[randInt(531)](![]);
    var target = r20[randInt(534)](randInt(511))["id"](randInt(522));
    var fwTypes = r20[randInt(534)]("")["id"]("press");
    target[randInt(504)](0.5, 0.7)["wh"](160, 20)["anchor"](0.5);
    fwTypes[randInt(504)](0.47, 0.41)["wh"](100, 100)[randInt(525)](0.5)["noBackground"]();
    r20[randInt(543)](randInt(510))["id"](randInt(543))[randInt(504)](0.43, 0.53);
    deepDataAndEvents[randInt(500)]()[randInt(537)](r20);
    deepDataAndEvents[randInt(542)]("/voicemute mute " + deepDataAndEvents[randInt(532)][randInt(521)] + "");
    deepDataAndEvents[randInt(544)]()[randInt(496)]()[randInt(547)](randInt(552), 1);
   }
   function menuhandler(data) {
    var camelCase = _0x4d71;
    var props = data["getSubject"]();
    if (props[camelCase(515)]()[camelCase(516)]() === camelCase(522)) {
      props[camelCase(538)]();
      props["closeHUD"](camelCase(539));
      props[camelCase(523)]("black_reverb");
      props["closeHUD"](camelCase(512));
      data["getServer"]()[camelCase(496)]()["setNumber"](camelCase(552), 0);
      data[camelCase(542)](camelCase(536) + data["player"]["name"] + "");
      props[camelCase(524)]();
    } else {
      if (props["getUIContext"]()["getLast"]() === "press") {
        if (press == -100) {
          press += 100;
        }
        press += 5;
        props["swingArm"]();
        props[camelCase(515)]()["get"]("label")[camelCase(543)]("" + press + "%");
      }
    }
    props[camelCase(515)]()["get"](camelCase(522))[camelCase(535)](![]);
    var _0x31ffca = Math[camelCase(513)](mappet["random"](1, 3));
    if (_0x31ffca === 2) {
      data["executeCommand"](camelCase(502));
    } else {
      data[camelCase(542)](camelCase(514));
    }
    if (press > 49 && press < 51 || press > 99 && press <= 101) {
      stt += 1;
      if (stt === 2) {
        props[camelCase(546)](camelCase(512), 1, mappet[camelCase(518)](camelCase(509)));
      }
      if (stt > 2) {
        props[camelCase(546)]("Electro", 1, mappet[camelCase(518)](camelCase(503)));
        data[camelCase(550)](camelCase(505), 3);
      }
    }
   }
   function _0x4d71(opt_attributes, deepDataAndEvents) {
    var args = _0x187e();
    return _0x4d71 = function(opt_attributes, deepDataAndEvents) {
      opt_attributes = opt_attributes - 496;
      var pageY = args[opt_attributes];
      return pageY;
    }, _0x4d71(opt_attributes, deepDataAndEvents);
   }
   function close(answers) {
    var computePropValue = _0x4d71;
    answers[computePropValue(540)]["closeHUD"](computePropValue(512));
    answers[computePropValue(540)][computePropValue(524)]();
    answers["subject"][computePropValue(538)]();
    answers[computePropValue(540)][computePropValue(530)](computePropValue(539));
    answers[computePropValue(540)][computePropValue(523)](computePropValue(539));
    answers["getWorld"]()[computePropValue(519)](mappet[computePropValue(551)](computePropValue(529), 5), -6, 38, 11);
    answers[computePropValue(542)](computePropValue(536) + answers[computePropValue(532)][computePropValue(521)] + "");
    press = 0;
    stt = 1;
    answers[computePropValue(544)]()[computePropValue(496)]()[computePropValue(547)](computePropValue(552), 0);
    answers["executeCommand"]("/execute @a ~ ~ ~ /playsound mp.sounds:granny.gameplay.electro_off master @s 0 100000 0 10000 1 1");
   }
   ;