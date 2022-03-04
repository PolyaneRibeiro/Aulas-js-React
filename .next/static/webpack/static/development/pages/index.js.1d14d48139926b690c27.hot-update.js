webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Aulas-js-React\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import moment from "moment-timezone";

 // import { console } from "window-or-global";

function Page() {
  //RENDIRAZAÇÃO CONDICIONAL OU CONDIÇÃO TERNARIA
  function initialGA() {
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize("UA-170909874-1");
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].pageview(urlLocal);
  }

  var urlLocal;

  if (true) {
    var _window$location;

    urlLocal = (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.href;
  }

  initialGA();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nome = _useState3[0],
      setNome = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      rede = _useState4[0],
      setRede = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      sobrenome = _useState5[0],
      setSobrenome = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      culto = _useState6[0],
      setCulto = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      criancas = _useState7[0],
      setCriancas = _useState7[1];

  var url = "https://aguaviva-rp.firebaseio.com/teste.json";
  var date = new Date();
  var dia_sem = date.getDay(); // var dateMoment = moment(`${date}`);
  // dateMoment.tz("America/Sao_Paulo").format("ha z");
  // moment.locale("pt-BR");
  // const novaData = new Date(dateMoment);
  // var dia_sem = moment(novaData).format("dddd");

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdSabado = _useState8[0],
      setQtdSabado = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdDomingoManha = _useState9[0],
      setQtdDomingoManha = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdDomingoNoite = _useState10[0],
      setQtdDomingoNoite = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      nomeLimpar = _useState11[0],
      setNomeLimpar = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      sobrenomeLimpar = _useState12[0],
      setSobrenomeLimpar = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      redeLimpar = _useState13[0],
      setRedeLimpar = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      criancasLimpar = _useState14[0],
      setCriancasLimpar = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      listagem = _useState15[0],
      setListagem = _useState15[1];

  var qtdMAxima = 75;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      var cultoSabado = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "sabado";
      });
      setQtdSabado(cultoSabado.length);
      var cultoDomingoManha = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "manha";
      });
      setQtdDomingoManha(cultoDomingoManha.length);
      var cultoDomingoNoite = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "noite";
      });
      setQtdDomingoNoite(cultoDomingoNoite.length);
      setListagem(data); // ATENÇÃO USE ESSE CÓDIGO COM CAUTELA, REMOVE TUDO //
      // if (dia_sem >= 1 && dia_sem <= 5) {
      //   Object.entries(data).map((individuo) => {
      //     if (individuo[0] != "base") {
      //       doRemove(individuo[0]);
      //     }
      //   });
      // }
    }
  }, [data]);

  var doRemove = function doRemove(id) {
    remove("https://aguaviva-rp.firebaseio.com/teste/".concat(id, ".json"));
  };

  var remove = function remove(url) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](url).then(function () {
      console.log("voc\xEA deletou ".concat(url));
    });
  };

  var redirect;

  if (true) {
    redirect = window.location.href;
  }

  var post = function post(data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, data).then(function (res) {
      setNomeLimpar(!nomeLimpar);
      setSobrenomeLimpar(!sobrenomeLimpar);
      setRedeLimpar(!redeLimpar);
      setCriancasLimpar(!criancasLimpar);
      alert("você confirmou sua presença no culto");
      window.location = "/listagem.html";
    });
  };

  var salve = function salve() {
    if (nome && sobrenome && rede && culto) {
      var existeCriancas = criancas ? criancas : "0";
      post({
        nome: nome.toLowerCase(),
        sobrenome: sobrenome,
        rede: rede,
        culto: culto,
        criancas: existeCriancas,
        chegada: false
      });
    } else {
      alert("Um ou mais campos estão em branco");
    }
  }; // null | "" | undefined | false


  var existe = true; // 1 se eu colocar minha variavel com um valor que existe meu select vai exibir os cultos de sabados
  //quando nao atender ela vai exibir cultos de terça feira
  // 2 criar uma segunda variavel que se for igual a "Ativo" exiba o botao inscrever

  var sabado = false;
  var inscrever = 'Ativo';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Igreja Batista \xC1gua Viva - Ribeir\xE3o Pires")), existe && __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Formul\xE1rio para culto dos jovens (24/04)")), (qtdDomingoManha < qtdMAxima || qtdDomingoNoite < qtdMAxima) && // <>
  //   {(dia_sem == 0 || dia_sem == 5 || dia_sem == 6) && (
  __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, listagem ? __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, "Nome"), nomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setNome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }), !nomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setNome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, "Sobrenome"), sobrenomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setSobrenome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Sobrenome",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }), !sobrenomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setSobrenome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Sobrenome",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, "Discipulado"), redeLimpar && __jsx("select", {
    onChange: function onChange(e) {
      setRede(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "Selecione seu discipulado"), __jsx("option", {
    value: "isabela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 23
    }
  }, "Isabela Amaro"), __jsx("option", {
    value: "matheus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 23
    }
  }, "Matheus Amaro"), __jsx("option", {
    value: "felipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }, "Felipe Ramos"), __jsx("option", {
    value: "silas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 23
    }
  }, "Silas Souza"), __jsx("option", {
    value: "elaine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 23
    }
  }, "Elaine Jeremias ")), !redeLimpar && __jsx("select", {
    onChange: function onChange(e) {
      setRede(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 23
    }
  }, "Selecione seu discipulado"), __jsx("option", {
    value: "isabela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, "Isabela Amaro"), __jsx("option", {
    value: "matheus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 23
    }
  }, "Matheus Amaro"), __jsx("option", {
    value: "felipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 23
    }
  }, "Felipe Ramos"), __jsx("option", {
    value: "silas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, "Silas Souza"), __jsx("option", {
    value: "elaine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, "Elaine Jeremias ")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  }, "Qual culto deseja ir?"), __jsx("select", {
    onChange: function onChange(e) {
      setCulto(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, "Selecione o culto"), sabado ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 27
    }
  }, "S\xE1bado - 15hs"), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 27
    }
  }, "S\xE1bado - 17:30hs ")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 27
    }
  }, "Ter\xE7a-feira - 18hs"), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 27
    }
  }, "Ter\xE7a-feira - 14:30hs "))), __jsx("div", {
    className: "vagas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "S\xE1bado 15:00hs -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoManha < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoManha >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoManha), qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s")))), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }
  }, "S\xE1bado 17:30hs -", qtdDomingoNoite >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoNoite < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoNoite >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoNoite), qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s"))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }), inscrever === 'Ativo' && __jsx("button", {
    onClick: salve,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 21
    }
  }, "Inscrever"), __jsx("a", {
    href: "/listagem.html",
    className: "listagem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 19
    }
  }, "Verifique a listagem")) : __jsx("p", {
    className: "carregando",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/loading.gif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 19
    }
  }, "Carregando..."))) //   )}
  // </>
  , qtdDomingoManha >= qtdMAxima && qtdDomingoNoite >= qtdMAxima && dia_sem != 1 && dia_sem != 2 && dia_sem != 3 && dia_sem != 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "paragrafo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 17
    }
  }, "Infelizmente todos os cultos presenciais ja esgotaram sua capacidade exigida por lei, mas acompanhe online pelas nossas redes sociais", __jsx("div", {
    className: "redes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/youtube.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/IbavRibeiraoPires/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/ibavrp/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/instagram.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 23
    }
  }))), __jsx("a", {
    href: "/listagem.html",
    className: "listagem_encerrada",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, "Verifique a listagem dos cultos presenciais")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.1d14d48139926b690c27.hot-update.js.map