Boolean(1);
//result: true
Boolean("a");
//result: true
Boolean([]);
//result: true
Boolean({});
//result: true
Boolean(function(){});
//result: true
Boolean(true);
//result: true


Boolean();
//result: false

Boolean(0);
//result: false


Boolean(null);
//result: false

Boolean(NaN);
//result: false

Boolean(undefined);
//result: false

Boolean(false);
//result: false
Boolean("");
//result: false



