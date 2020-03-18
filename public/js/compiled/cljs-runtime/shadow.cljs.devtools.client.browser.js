goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36323 = arguments.length;
var i__4790__auto___36324 = (0);
while(true){
if((i__4790__auto___36324 < len__4789__auto___36323)){
args__4795__auto__.push((arguments[i__4790__auto___36324]));

var G__36325 = (i__4790__auto___36324 + (1));
i__4790__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36135){
var G__36136 = cljs.core.first(seq36135);
var seq36135__$1 = cljs.core.next(seq36135);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36136,seq36135__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36147 = cljs.core.seq(sources);
var chunk__36148 = null;
var count__36149 = (0);
var i__36150 = (0);
while(true){
if((i__36150 < count__36149)){
var map__36168 = chunk__36148.cljs$core$IIndexed$_nth$arity$2(null,i__36150);
var map__36168__$1 = (((((!((map__36168 == null))))?(((((map__36168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36168):map__36168);
var src = map__36168__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36170){var e_36327 = e36170;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36327);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36327.message)].join('')));
}

var G__36328 = seq__36147;
var G__36329 = chunk__36148;
var G__36330 = count__36149;
var G__36331 = (i__36150 + (1));
seq__36147 = G__36328;
chunk__36148 = G__36329;
count__36149 = G__36330;
i__36150 = G__36331;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36147);
if(temp__5735__auto__){
var seq__36147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36147__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36147__$1);
var G__36332 = cljs.core.chunk_rest(seq__36147__$1);
var G__36333 = c__4609__auto__;
var G__36334 = cljs.core.count(c__4609__auto__);
var G__36335 = (0);
seq__36147 = G__36332;
chunk__36148 = G__36333;
count__36149 = G__36334;
i__36150 = G__36335;
continue;
} else {
var map__36176 = cljs.core.first(seq__36147__$1);
var map__36176__$1 = (((((!((map__36176 == null))))?(((((map__36176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36176):map__36176);
var src = map__36176__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36178){var e_36336 = e36178;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36336);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36336.message)].join('')));
}

var G__36337 = cljs.core.next(seq__36147__$1);
var G__36338 = null;
var G__36339 = (0);
var G__36340 = (0);
seq__36147 = G__36337;
chunk__36148 = G__36338;
count__36149 = G__36339;
i__36150 = G__36340;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36182 = cljs.core.seq(js_requires);
var chunk__36183 = null;
var count__36184 = (0);
var i__36185 = (0);
while(true){
if((i__36185 < count__36184)){
var js_ns = chunk__36183.cljs$core$IIndexed$_nth$arity$2(null,i__36185);
var require_str_36342 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36342);


var G__36343 = seq__36182;
var G__36344 = chunk__36183;
var G__36345 = count__36184;
var G__36346 = (i__36185 + (1));
seq__36182 = G__36343;
chunk__36183 = G__36344;
count__36184 = G__36345;
i__36185 = G__36346;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36182);
if(temp__5735__auto__){
var seq__36182__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36182__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36182__$1);
var G__36347 = cljs.core.chunk_rest(seq__36182__$1);
var G__36348 = c__4609__auto__;
var G__36349 = cljs.core.count(c__4609__auto__);
var G__36350 = (0);
seq__36182 = G__36347;
chunk__36183 = G__36348;
count__36184 = G__36349;
i__36185 = G__36350;
continue;
} else {
var js_ns = cljs.core.first(seq__36182__$1);
var require_str_36351 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36351);


var G__36352 = cljs.core.next(seq__36182__$1);
var G__36353 = null;
var G__36354 = (0);
var G__36355 = (0);
seq__36182 = G__36352;
chunk__36183 = G__36353;
count__36184 = G__36354;
i__36185 = G__36355;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36194 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36194) : callback.call(null,G__36194));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36196){
var map__36197 = p__36196;
var map__36197__$1 = (((((!((map__36197 == null))))?(((((map__36197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36197):map__36197);
var msg = map__36197__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36197__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36197__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36200(s__36201){
return (new cljs.core.LazySeq(null,(function (){
var s__36201__$1 = s__36201;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36201__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36206 = cljs.core.first(xs__6292__auto__);
var map__36206__$1 = (((((!((map__36206 == null))))?(((((map__36206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36206):map__36206);
var src = map__36206__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__36201__$1,map__36206,map__36206__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36197,map__36197__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36200_$_iter__36202(s__36203){
return (new cljs.core.LazySeq(null,((function (s__36201__$1,map__36206,map__36206__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36197,map__36197__$1,msg,info,reload_info){
return (function (){
var s__36203__$1 = s__36203;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36203__$1);
if(temp__5735__auto____$1){
var s__36203__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36203__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36203__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36205 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36204 = (0);
while(true){
if((i__36204 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__36204);
cljs.core.chunk_append(b__36205,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36360 = (i__36204 + (1));
i__36204 = G__36360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36205),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36200_$_iter__36202(cljs.core.chunk_rest(s__36203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36205),null);
}
} else {
var warning = cljs.core.first(s__36203__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36200_$_iter__36202(cljs.core.rest(s__36203__$2)));
}
} else {
return null;
}
break;
}
});})(s__36201__$1,map__36206,map__36206__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36197,map__36197__$1,msg,info,reload_info))
,null,null));
});})(s__36201__$1,map__36206,map__36206__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36197,map__36197__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36200(cljs.core.rest(s__36201__$1)));
} else {
var G__36361 = cljs.core.rest(s__36201__$1);
s__36201__$1 = G__36361;
continue;
}
} else {
var G__36362 = cljs.core.rest(s__36201__$1);
s__36201__$1 = G__36362;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36209_36363 = cljs.core.seq(warnings);
var chunk__36210_36364 = null;
var count__36211_36365 = (0);
var i__36212_36366 = (0);
while(true){
if((i__36212_36366 < count__36211_36365)){
var map__36220_36367 = chunk__36210_36364.cljs$core$IIndexed$_nth$arity$2(null,i__36212_36366);
var map__36220_36368__$1 = (((((!((map__36220_36367 == null))))?(((((map__36220_36367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36220_36367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36220_36367):map__36220_36367);
var w_36369 = map__36220_36368__$1;
var msg_36370__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220_36368__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220_36368__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220_36368__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220_36368__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36373)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36371),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36372),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36370__$1)].join(''));


var G__36374 = seq__36209_36363;
var G__36375 = chunk__36210_36364;
var G__36376 = count__36211_36365;
var G__36377 = (i__36212_36366 + (1));
seq__36209_36363 = G__36374;
chunk__36210_36364 = G__36375;
count__36211_36365 = G__36376;
i__36212_36366 = G__36377;
continue;
} else {
var temp__5735__auto___36378 = cljs.core.seq(seq__36209_36363);
if(temp__5735__auto___36378){
var seq__36209_36379__$1 = temp__5735__auto___36378;
if(cljs.core.chunked_seq_QMARK_(seq__36209_36379__$1)){
var c__4609__auto___36380 = cljs.core.chunk_first(seq__36209_36379__$1);
var G__36381 = cljs.core.chunk_rest(seq__36209_36379__$1);
var G__36382 = c__4609__auto___36380;
var G__36383 = cljs.core.count(c__4609__auto___36380);
var G__36384 = (0);
seq__36209_36363 = G__36381;
chunk__36210_36364 = G__36382;
count__36211_36365 = G__36383;
i__36212_36366 = G__36384;
continue;
} else {
var map__36223_36385 = cljs.core.first(seq__36209_36379__$1);
var map__36223_36386__$1 = (((((!((map__36223_36385 == null))))?(((((map__36223_36385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36223_36385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36223_36385):map__36223_36385);
var w_36387 = map__36223_36386__$1;
var msg_36388__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36386__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36386__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36386__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36386__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36391)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36389),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36390),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36388__$1)].join(''));


var G__36392 = cljs.core.next(seq__36209_36379__$1);
var G__36393 = null;
var G__36394 = (0);
var G__36395 = (0);
seq__36209_36363 = G__36392;
chunk__36210_36364 = G__36393;
count__36211_36365 = G__36394;
i__36212_36366 = G__36395;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36195_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36195_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36226){
var map__36227 = p__36226;
var map__36227__$1 = (((((!((map__36227 == null))))?(((((map__36227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36227):map__36227);
var msg = map__36227__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36227__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36229 = cljs.core.seq(updates);
var chunk__36231 = null;
var count__36232 = (0);
var i__36233 = (0);
while(true){
if((i__36233 < count__36232)){
var path = chunk__36231.cljs$core$IIndexed$_nth$arity$2(null,i__36233);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36263_36396 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36266_36397 = null;
var count__36267_36398 = (0);
var i__36268_36399 = (0);
while(true){
if((i__36268_36399 < count__36267_36398)){
var node_36400 = chunk__36266_36397.cljs$core$IIndexed$_nth$arity$2(null,i__36268_36399);
var path_match_36401 = shadow.cljs.devtools.client.browser.match_paths(node_36400.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36401)){
var new_link_36403 = (function (){var G__36274 = node_36400.cloneNode(true);
G__36274.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36401),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36274;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36401], 0));

goog.dom.insertSiblingAfter(new_link_36403,node_36400);

goog.dom.removeNode(node_36400);


var G__36405 = seq__36263_36396;
var G__36406 = chunk__36266_36397;
var G__36407 = count__36267_36398;
var G__36408 = (i__36268_36399 + (1));
seq__36263_36396 = G__36405;
chunk__36266_36397 = G__36406;
count__36267_36398 = G__36407;
i__36268_36399 = G__36408;
continue;
} else {
var G__36409 = seq__36263_36396;
var G__36410 = chunk__36266_36397;
var G__36411 = count__36267_36398;
var G__36412 = (i__36268_36399 + (1));
seq__36263_36396 = G__36409;
chunk__36266_36397 = G__36410;
count__36267_36398 = G__36411;
i__36268_36399 = G__36412;
continue;
}
} else {
var temp__5735__auto___36413 = cljs.core.seq(seq__36263_36396);
if(temp__5735__auto___36413){
var seq__36263_36414__$1 = temp__5735__auto___36413;
if(cljs.core.chunked_seq_QMARK_(seq__36263_36414__$1)){
var c__4609__auto___36415 = cljs.core.chunk_first(seq__36263_36414__$1);
var G__36416 = cljs.core.chunk_rest(seq__36263_36414__$1);
var G__36417 = c__4609__auto___36415;
var G__36418 = cljs.core.count(c__4609__auto___36415);
var G__36419 = (0);
seq__36263_36396 = G__36416;
chunk__36266_36397 = G__36417;
count__36267_36398 = G__36418;
i__36268_36399 = G__36419;
continue;
} else {
var node_36420 = cljs.core.first(seq__36263_36414__$1);
var path_match_36421 = shadow.cljs.devtools.client.browser.match_paths(node_36420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36421)){
var new_link_36422 = (function (){var G__36276 = node_36420.cloneNode(true);
G__36276.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36276;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36421], 0));

goog.dom.insertSiblingAfter(new_link_36422,node_36420);

goog.dom.removeNode(node_36420);


var G__36423 = cljs.core.next(seq__36263_36414__$1);
var G__36424 = null;
var G__36425 = (0);
var G__36426 = (0);
seq__36263_36396 = G__36423;
chunk__36266_36397 = G__36424;
count__36267_36398 = G__36425;
i__36268_36399 = G__36426;
continue;
} else {
var G__36427 = cljs.core.next(seq__36263_36414__$1);
var G__36428 = null;
var G__36429 = (0);
var G__36430 = (0);
seq__36263_36396 = G__36427;
chunk__36266_36397 = G__36428;
count__36267_36398 = G__36429;
i__36268_36399 = G__36430;
continue;
}
}
} else {
}
}
break;
}


var G__36431 = seq__36229;
var G__36432 = chunk__36231;
var G__36433 = count__36232;
var G__36434 = (i__36233 + (1));
seq__36229 = G__36431;
chunk__36231 = G__36432;
count__36232 = G__36433;
i__36233 = G__36434;
continue;
} else {
var G__36435 = seq__36229;
var G__36436 = chunk__36231;
var G__36437 = count__36232;
var G__36438 = (i__36233 + (1));
seq__36229 = G__36435;
chunk__36231 = G__36436;
count__36232 = G__36437;
i__36233 = G__36438;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36229);
if(temp__5735__auto__){
var seq__36229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36229__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36229__$1);
var G__36439 = cljs.core.chunk_rest(seq__36229__$1);
var G__36440 = c__4609__auto__;
var G__36441 = cljs.core.count(c__4609__auto__);
var G__36442 = (0);
seq__36229 = G__36439;
chunk__36231 = G__36440;
count__36232 = G__36441;
i__36233 = G__36442;
continue;
} else {
var path = cljs.core.first(seq__36229__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36277_36443 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36280_36444 = null;
var count__36281_36445 = (0);
var i__36282_36446 = (0);
while(true){
if((i__36282_36446 < count__36281_36445)){
var node_36447 = chunk__36280_36444.cljs$core$IIndexed$_nth$arity$2(null,i__36282_36446);
var path_match_36448 = shadow.cljs.devtools.client.browser.match_paths(node_36447.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36448)){
var new_link_36449 = (function (){var G__36289 = node_36447.cloneNode(true);
G__36289.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36448),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36289;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36448], 0));

goog.dom.insertSiblingAfter(new_link_36449,node_36447);

goog.dom.removeNode(node_36447);


var G__36450 = seq__36277_36443;
var G__36451 = chunk__36280_36444;
var G__36452 = count__36281_36445;
var G__36453 = (i__36282_36446 + (1));
seq__36277_36443 = G__36450;
chunk__36280_36444 = G__36451;
count__36281_36445 = G__36452;
i__36282_36446 = G__36453;
continue;
} else {
var G__36454 = seq__36277_36443;
var G__36455 = chunk__36280_36444;
var G__36456 = count__36281_36445;
var G__36457 = (i__36282_36446 + (1));
seq__36277_36443 = G__36454;
chunk__36280_36444 = G__36455;
count__36281_36445 = G__36456;
i__36282_36446 = G__36457;
continue;
}
} else {
var temp__5735__auto___36458__$1 = cljs.core.seq(seq__36277_36443);
if(temp__5735__auto___36458__$1){
var seq__36277_36459__$1 = temp__5735__auto___36458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36277_36459__$1)){
var c__4609__auto___36460 = cljs.core.chunk_first(seq__36277_36459__$1);
var G__36461 = cljs.core.chunk_rest(seq__36277_36459__$1);
var G__36462 = c__4609__auto___36460;
var G__36463 = cljs.core.count(c__4609__auto___36460);
var G__36464 = (0);
seq__36277_36443 = G__36461;
chunk__36280_36444 = G__36462;
count__36281_36445 = G__36463;
i__36282_36446 = G__36464;
continue;
} else {
var node_36465 = cljs.core.first(seq__36277_36459__$1);
var path_match_36466 = shadow.cljs.devtools.client.browser.match_paths(node_36465.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36466)){
var new_link_36467 = (function (){var G__36290 = node_36465.cloneNode(true);
G__36290.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36466),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36290;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36466], 0));

goog.dom.insertSiblingAfter(new_link_36467,node_36465);

goog.dom.removeNode(node_36465);


var G__36468 = cljs.core.next(seq__36277_36459__$1);
var G__36469 = null;
var G__36470 = (0);
var G__36471 = (0);
seq__36277_36443 = G__36468;
chunk__36280_36444 = G__36469;
count__36281_36445 = G__36470;
i__36282_36446 = G__36471;
continue;
} else {
var G__36472 = cljs.core.next(seq__36277_36459__$1);
var G__36473 = null;
var G__36474 = (0);
var G__36475 = (0);
seq__36277_36443 = G__36472;
chunk__36280_36444 = G__36473;
count__36281_36445 = G__36474;
i__36282_36446 = G__36475;
continue;
}
}
} else {
}
}
break;
}


var G__36476 = cljs.core.next(seq__36229__$1);
var G__36477 = null;
var G__36478 = (0);
var G__36479 = (0);
seq__36229 = G__36476;
chunk__36231 = G__36477;
count__36232 = G__36478;
i__36233 = G__36479;
continue;
} else {
var G__36480 = cljs.core.next(seq__36229__$1);
var G__36481 = null;
var G__36482 = (0);
var G__36483 = (0);
seq__36229 = G__36480;
chunk__36231 = G__36481;
count__36232 = G__36482;
i__36233 = G__36483;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36293){
var map__36294 = p__36293;
var map__36294__$1 = (((((!((map__36294 == null))))?(((((map__36294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36294):map__36294);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36294__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36294__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36296,done){
var map__36297 = p__36296;
var map__36297__$1 = (((((!((map__36297 == null))))?(((((map__36297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36297):map__36297);
var msg = map__36297__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36300){
var map__36301 = p__36300;
var map__36301__$1 = (((((!((map__36301 == null))))?(((((map__36301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36301):map__36301);
var src = map__36301__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36304){var e = e36304;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36305,done){
var map__36306 = p__36305;
var map__36306__$1 = (((((!((map__36306 == null))))?(((((map__36306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36306):map__36306);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36308){
var map__36310 = p__36308;
var map__36310__$1 = (((((!((map__36310 == null))))?(((((map__36310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36310):map__36310);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36312,done){
var map__36313 = p__36312;
var map__36313__$1 = (((((!((map__36313 == null))))?(((((map__36313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36313):map__36313);
var msg = map__36313__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36316_36493 = type;
var G__36316_36494__$1 = (((G__36316_36493 instanceof cljs.core.Keyword))?G__36316_36493.fqn:null);
switch (G__36316_36494__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36318 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36318.cljs$core$IFn$_invoke$arity$1 ? fexpr__36318.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36318.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36320){var e = e36320;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36496 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36496)){
var s_36497 = temp__5735__auto___36496;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36497.onclose = (function (e){
return null;
}));

s_36497.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
