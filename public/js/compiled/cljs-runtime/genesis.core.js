goog.provide('genesis.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
var module$node_modules$rlp$dist$index=shadow.js.require("module$node_modules$rlp$dist$index", {});
genesis.core.pp_str = (function genesis$core$pp_str(x){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40149_40178 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40150_40179 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40151_40180 = true;
var _STAR_print_fn_STAR__temp_val__40152_40181 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40151_40180);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40152_40181);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40150_40179);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40149_40178);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
});
genesis.core.clj__GT_json = (function genesis$core$clj__GT_json(x){
return JSON.stringify(cljs.core.clj__GT_js(x),null,(2));
});
genesis.core.buffer__GT_hex_str = (function genesis$core$buffer__GT_hex_str(x){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.toString("hex"))].join('');
});
genesis.core.hex_str__GT_bytes = (function genesis$core$hex_str__GT_bytes(s){
return (new Uint8Array(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__40153){
var vec__40154 = p__40153;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40154,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40154,(1),null);
return parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),s))));
});
if((typeof genesis !== 'undefined') && (typeof genesis.core !== 'undefined') && (typeof genesis.core.app_state !== 'undefined')){
} else {
genesis.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ledger-type","ledger-type",-419709090),new cljs.core.Keyword(null,"besu","besu",-1632625742),new cljs.core.Keyword(null,"validators","validators",-1973346672),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genesis","genesis",-185439623),null], null)], null));
}
genesis.core.ledger_input = (function genesis$core$ledger_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.radio","label.radio",1705843347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"ledger-type",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ledger-type","ledger-type",-419709090).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(genesis.core.app_state))),new cljs.core.Keyword(null,"besu","besu",-1632625742))], null)], null),"Besu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.radio","label.radio",1705843347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"ledger-type",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ledger-type","ledger-type",-419709090).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(genesis.core.app_state))),new cljs.core.Keyword(null,"quorum","quorum",-1933541141))], null)], null),"Quorum"], null)], null);
});
genesis.core.validators_input = (function genesis$core$validators_input(){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"validators","validators",-1973346672)], null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Validators"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0x01, 0x02, 0x03, ...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40157_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genesis.core.app_state,cljs.core.assoc_in,path,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__40157_SHARP_.target.value,/, ?/));
})], null)], null)], null)], null);
});
});
genesis.core.extra_data = (function genesis$core$extra_data(validators){
var data = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Uint8Array((32))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(genesis.core.hex_str__GT_bytes,validators),(new Uint8Array((0))),(new Uint8Array((4))),cljs.core.PersistentVector.EMPTY], null);
var encoded = module$node_modules$rlp$dist$index.encode(cljs.core.clj__GT_js(data));
return genesis.core.buffer__GT_hex_str(encoded);
});
genesis.core.update_genesis = (function genesis$core$update_genesis(m,validators){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"extraData","extraData",190371487),genesis.core.extra_data(validators));
});
genesis.core.fetch_genesis_template = (function genesis$core$fetch_genesis_template(){
var c__30867__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30868__auto__ = (function (){var switch__30844__auto__ = (function (state_40171){
var state_val_40172 = (state_40171[(1)]);
if((state_val_40172 === (1))){
var inst_40158 = cljs.core.deref(genesis.core.app_state);
var inst_40159 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(inst_40158);
var inst_40160 = new cljs.core.Keyword(null,"validators","validators",-1973346672).cljs$core$IFn$_invoke$arity$1(inst_40159);
var inst_40161 = cljs_http.client.get("/json/genesis.json");
var state_40171__$1 = (function (){var statearr_40173 = state_40171;
(statearr_40173[(7)] = inst_40160);

return statearr_40173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40171__$1,(2),inst_40161);
} else {
if((state_val_40172 === (2))){
var inst_40160 = (state_40171[(7)]);
var inst_40163 = (state_40171[(2)]);
var inst_40164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40165 = [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"genesis","genesis",-185439623)];
var inst_40166 = (new cljs.core.PersistentVector(null,2,(5),inst_40164,inst_40165,null));
var inst_40167 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_40163);
var inst_40168 = genesis.core.update_genesis(inst_40167,inst_40160);
var inst_40169 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genesis.core.app_state,cljs.core.assoc_in,inst_40166,inst_40168);
var state_40171__$1 = state_40171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40171__$1,inst_40169);
} else {
return null;
}
}
});
return (function() {
var genesis$core$fetch_genesis_template_$_state_machine__30845__auto__ = null;
var genesis$core$fetch_genesis_template_$_state_machine__30845__auto____0 = (function (){
var statearr_40174 = [null,null,null,null,null,null,null,null];
(statearr_40174[(0)] = genesis$core$fetch_genesis_template_$_state_machine__30845__auto__);

(statearr_40174[(1)] = (1));

return statearr_40174;
});
var genesis$core$fetch_genesis_template_$_state_machine__30845__auto____1 = (function (state_40171){
while(true){
var ret_value__30846__auto__ = (function (){try{while(true){
var result__30847__auto__ = switch__30844__auto__(state_40171);
if(cljs.core.keyword_identical_QMARK_(result__30847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30847__auto__;
}
break;
}
}catch (e40175){if((e40175 instanceof Object)){
var ex__30848__auto__ = e40175;
var statearr_40176_40182 = state_40171;
(statearr_40176_40182[(5)] = ex__30848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40183 = state_40171;
state_40171 = G__40183;
continue;
} else {
return ret_value__30846__auto__;
}
break;
}
});
genesis$core$fetch_genesis_template_$_state_machine__30845__auto__ = function(state_40171){
switch(arguments.length){
case 0:
return genesis$core$fetch_genesis_template_$_state_machine__30845__auto____0.call(this);
case 1:
return genesis$core$fetch_genesis_template_$_state_machine__30845__auto____1.call(this,state_40171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
genesis$core$fetch_genesis_template_$_state_machine__30845__auto__.cljs$core$IFn$_invoke$arity$0 = genesis$core$fetch_genesis_template_$_state_machine__30845__auto____0;
genesis$core$fetch_genesis_template_$_state_machine__30845__auto__.cljs$core$IFn$_invoke$arity$1 = genesis$core$fetch_genesis_template_$_state_machine__30845__auto____1;
return genesis$core$fetch_genesis_template_$_state_machine__30845__auto__;
})()
})();
var state__30869__auto__ = (function (){var statearr_40177 = f__30868__auto__();
(statearr_40177[(6)] = c__30867__auto__);

return statearr_40177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30869__auto__);
}));

return c__30867__auto__;
});
genesis.core.show_genesis = (function genesis$core$show_genesis(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"genesis","genesis",-185439623).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(genesis.core.app_state)));
if(cljs.core.truth_(temp__5733__auto__)){
var genesis__$1 = temp__5733__auto__;
var validators = new cljs.core.Keyword(null,"validators","validators",-1973346672).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(genesis.core.app_state)));
return genesis.core.clj__GT_json(genesis.core.update_genesis(genesis__$1,validators));
} else {
return "Loading...";
}
})()], null)], null);
});
genesis.core.show_app_state = (function genesis$core$show_app_state(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),genesis.core.pp_str(cljs.core.deref(genesis.core.app_state))], null)], null);
});
genesis.core.start = (function genesis$core$start(){
genesis.core.fetch_genesis_template();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genesis.core.ledger_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genesis.core.validators_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genesis.core.show_genesis], null)], null),document.getElementById("app"));
});
genesis.core.init = (function genesis$core$init(){
return genesis.core.start();
});
goog.exportSymbol('genesis.core.init', genesis.core.init);
genesis.core.stop = (function genesis$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=genesis.core.js.map
