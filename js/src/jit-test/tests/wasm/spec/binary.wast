(module "\00asm\0d\00\00\00")
(module "\00asm" "\0d\00\00\00")
(module $M1 "\00asm\0d\00\00\00")
(module $M2 "\00asm" "\0d\00\00\00")

(assert_malformed (module "") "unexpected end")
(assert_malformed (module "\01") "unexpected end")
(assert_malformed (module "\00as") "unexpected end")
(assert_malformed (module "\01") "unexpected end")
(assert_malformed (module "asm\00") "magic header not detected")

(assert_malformed (module "\00asm") "unexpected end")
(assert_malformed (module "\00asm\0d") "unexpected end")
(assert_malformed (module "\00asm\0d\00\00") "unexpected end")
(assert_malformed (module "\00asm\0e\00\00\00") "unknown binary version")
