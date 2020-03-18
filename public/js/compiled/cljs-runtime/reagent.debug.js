goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__32058__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32059__i = 0, G__32059__a = new Array(arguments.length -  0);
while (G__32059__i < G__32059__a.length) {G__32059__a[G__32059__i] = arguments[G__32059__i + 0]; ++G__32059__i;}
  args = new cljs.core.IndexedSeq(G__32059__a,0,null);
} 
return G__32058__delegate.call(this,args);};
G__32058.cljs$lang$maxFixedArity = 0;
G__32058.cljs$lang$applyTo = (function (arglist__32060){
var args = cljs.core.seq(arglist__32060);
return G__32058__delegate(args);
});
G__32058.cljs$core$IFn$_invoke$arity$variadic = G__32058__delegate;
return G__32058;
})()
);

(o.error = (function() { 
var G__32061__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32062__i = 0, G__32062__a = new Array(arguments.length -  0);
while (G__32062__i < G__32062__a.length) {G__32062__a[G__32062__i] = arguments[G__32062__i + 0]; ++G__32062__i;}
  args = new cljs.core.IndexedSeq(G__32062__a,0,null);
} 
return G__32061__delegate.call(this,args);};
G__32061.cljs$lang$maxFixedArity = 0;
G__32061.cljs$lang$applyTo = (function (arglist__32063){
var args = cljs.core.seq(arglist__32063);
return G__32061__delegate(args);
});
G__32061.cljs$core$IFn$_invoke$arity$variadic = G__32061__delegate;
return G__32061;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
