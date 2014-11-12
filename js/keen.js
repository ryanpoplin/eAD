// Keen Client Init...

var client = new Keen({
    projectId: "5461ced93831445dbeea28d0",       // String (required)
    writeKey: "76ebbda1640637a38f73ffa4e441fa335c4db5d256afaab9e2a5fb28cf9b6cfad6d3424fa4261b43d719173fde21ecbecedd39347aaa36897d9275104e142d7f7983c971093eb4025e918d39446b5ee30f8ed3f7d552f133df894b15566b231531d316ed15c86758923305d333300caa", // String (required for sending data)
    readKey: "3ffdc4fd64a96f6919f4316d22b88bf0852bfac1de46067c595ff06d10ecb4d32b89bd0f7c5a2ef29fc79d6a8221a99cfe75176acb21439e11889195e31e4495520ae120fe2b2a980c3cebda822045ac28b28e8c4486cdbbd01eb7ddaf63df41ca608a6601f1c6117493ef6f0e614365",   // String (required for querying data)
    protocol: "https",                  // String (optional: https | http | auto)
    host: "api.keen.io/3.0",            // String (optional)
    requestType: "jsonp"                // String (optional: jsonp, xhr, beacon)
});