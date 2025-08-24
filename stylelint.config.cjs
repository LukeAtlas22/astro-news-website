module.exports = {
  overrides: [
  {
    files: ["**/*.scss"],
    customSyntax: "postcss-scss"
  }
  ],
  rules: {
    "property-disallowed-list": [
      ["white-space"],   
      { "severity": "error",
        "message": ` ⚠⚠⚠ \n Evita di usare 'white-space'. Usa 'white-space-collapse' per gestione spazi bianchi o 'text-wrap-mode' per il wrap del testo. \n`
       } 
    ]
  }
};
