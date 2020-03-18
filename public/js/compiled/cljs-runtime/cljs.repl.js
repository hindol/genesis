goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37428){
var map__37429 = p__37428;
var map__37429__$1 = (((((!((map__37429 == null))))?(((((map__37429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37429):map__37429);
var m = map__37429__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37434_37683 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37435_37684 = null;
var count__37436_37685 = (0);
var i__37437_37686 = (0);
while(true){
if((i__37437_37686 < count__37436_37685)){
var f_37687 = chunk__37435_37684.cljs$core$IIndexed$_nth$arity$2(null,i__37437_37686);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37687], 0));


var G__37688 = seq__37434_37683;
var G__37689 = chunk__37435_37684;
var G__37690 = count__37436_37685;
var G__37691 = (i__37437_37686 + (1));
seq__37434_37683 = G__37688;
chunk__37435_37684 = G__37689;
count__37436_37685 = G__37690;
i__37437_37686 = G__37691;
continue;
} else {
var temp__5735__auto___37692 = cljs.core.seq(seq__37434_37683);
if(temp__5735__auto___37692){
var seq__37434_37693__$1 = temp__5735__auto___37692;
if(cljs.core.chunked_seq_QMARK_(seq__37434_37693__$1)){
var c__4609__auto___37694 = cljs.core.chunk_first(seq__37434_37693__$1);
var G__37695 = cljs.core.chunk_rest(seq__37434_37693__$1);
var G__37696 = c__4609__auto___37694;
var G__37697 = cljs.core.count(c__4609__auto___37694);
var G__37698 = (0);
seq__37434_37683 = G__37695;
chunk__37435_37684 = G__37696;
count__37436_37685 = G__37697;
i__37437_37686 = G__37698;
continue;
} else {
var f_37699 = cljs.core.first(seq__37434_37693__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37699], 0));


var G__37700 = cljs.core.next(seq__37434_37693__$1);
var G__37701 = null;
var G__37702 = (0);
var G__37703 = (0);
seq__37434_37683 = G__37700;
chunk__37435_37684 = G__37701;
count__37436_37685 = G__37702;
i__37437_37686 = G__37703;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37704 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37704], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37704)))?cljs.core.second(arglists_37704):arglists_37704)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37441_37708 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37442_37709 = null;
var count__37443_37710 = (0);
var i__37444_37711 = (0);
while(true){
if((i__37444_37711 < count__37443_37710)){
var vec__37455_37712 = chunk__37442_37709.cljs$core$IIndexed$_nth$arity$2(null,i__37444_37711);
var name_37713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37455_37712,(0),null);
var map__37458_37714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37455_37712,(1),null);
var map__37458_37715__$1 = (((((!((map__37458_37714 == null))))?(((((map__37458_37714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37458_37714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37458_37714):map__37458_37714);
var doc_37716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458_37715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458_37715__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37713], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37717], 0));

if(cljs.core.truth_(doc_37716)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37716], 0));
} else {
}


var G__37721 = seq__37441_37708;
var G__37722 = chunk__37442_37709;
var G__37723 = count__37443_37710;
var G__37724 = (i__37444_37711 + (1));
seq__37441_37708 = G__37721;
chunk__37442_37709 = G__37722;
count__37443_37710 = G__37723;
i__37444_37711 = G__37724;
continue;
} else {
var temp__5735__auto___37725 = cljs.core.seq(seq__37441_37708);
if(temp__5735__auto___37725){
var seq__37441_37726__$1 = temp__5735__auto___37725;
if(cljs.core.chunked_seq_QMARK_(seq__37441_37726__$1)){
var c__4609__auto___37727 = cljs.core.chunk_first(seq__37441_37726__$1);
var G__37728 = cljs.core.chunk_rest(seq__37441_37726__$1);
var G__37729 = c__4609__auto___37727;
var G__37730 = cljs.core.count(c__4609__auto___37727);
var G__37731 = (0);
seq__37441_37708 = G__37728;
chunk__37442_37709 = G__37729;
count__37443_37710 = G__37730;
i__37444_37711 = G__37731;
continue;
} else {
var vec__37466_37732 = cljs.core.first(seq__37441_37726__$1);
var name_37733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37466_37732,(0),null);
var map__37469_37734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37466_37732,(1),null);
var map__37469_37735__$1 = (((((!((map__37469_37734 == null))))?(((((map__37469_37734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37469_37734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37469_37734):map__37469_37734);
var doc_37736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469_37735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469_37735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37733], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37737], 0));

if(cljs.core.truth_(doc_37736)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37736], 0));
} else {
}


var G__37738 = cljs.core.next(seq__37441_37726__$1);
var G__37739 = null;
var G__37740 = (0);
var G__37741 = (0);
seq__37441_37708 = G__37738;
chunk__37442_37709 = G__37739;
count__37443_37710 = G__37740;
i__37444_37711 = G__37741;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37476 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37477 = null;
var count__37478 = (0);
var i__37479 = (0);
while(true){
if((i__37479 < count__37478)){
var role = chunk__37477.cljs$core$IIndexed$_nth$arity$2(null,i__37479);
var temp__5735__auto___37743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37743__$1)){
var spec_37744 = temp__5735__auto___37743__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37744)], 0));
} else {
}


var G__37745 = seq__37476;
var G__37746 = chunk__37477;
var G__37747 = count__37478;
var G__37748 = (i__37479 + (1));
seq__37476 = G__37745;
chunk__37477 = G__37746;
count__37478 = G__37747;
i__37479 = G__37748;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37476);
if(temp__5735__auto____$1){
var seq__37476__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37476__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37476__$1);
var G__37749 = cljs.core.chunk_rest(seq__37476__$1);
var G__37750 = c__4609__auto__;
var G__37751 = cljs.core.count(c__4609__auto__);
var G__37752 = (0);
seq__37476 = G__37749;
chunk__37477 = G__37750;
count__37478 = G__37751;
i__37479 = G__37752;
continue;
} else {
var role = cljs.core.first(seq__37476__$1);
var temp__5735__auto___37753__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37753__$2)){
var spec_37754 = temp__5735__auto___37753__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37754)], 0));
} else {
}


var G__37755 = cljs.core.next(seq__37476__$1);
var G__37756 = null;
var G__37757 = (0);
var G__37758 = (0);
seq__37476 = G__37755;
chunk__37477 = G__37756;
count__37478 = G__37757;
i__37479 = G__37758;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37760 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37761 = cljs.core.ex_cause(t);
via = G__37760;
t = G__37761;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37499 = datafied_throwable;
var map__37499__$1 = (((((!((map__37499 == null))))?(((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37499):map__37499);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37499__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37500 = cljs.core.last(via);
var map__37500__$1 = (((((!((map__37500 == null))))?(((((map__37500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37500):map__37500);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37501 = data;
var map__37501__$1 = (((((!((map__37501 == null))))?(((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37501):map__37501);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37501__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37501__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37501__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37502 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37502__$1 = (((((!((map__37502 == null))))?(((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37502):map__37502);
var top_data = map__37502__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37539 = phase;
var G__37539__$1 = (((G__37539 instanceof cljs.core.Keyword))?G__37539.fqn:null);
switch (G__37539__$1) {
case "read-source":
var map__37540 = data;
var map__37540__$1 = (((((!((map__37540 == null))))?(((((map__37540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37540):map__37540);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37540__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37540__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37542 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37542__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37542,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37542);
var G__37542__$2 = (cljs.core.truth_((function (){var fexpr__37543 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37543.cljs$core$IFn$_invoke$arity$1 ? fexpr__37543.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37543.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37542__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37542__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37542__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37544 = top_data;
var G__37544__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37544,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37544);
var G__37544__$2 = (cljs.core.truth_((function (){var fexpr__37545 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37545.cljs$core$IFn$_invoke$arity$1 ? fexpr__37545.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37545.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37544__$1);
var G__37544__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37544__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37544__$2);
var G__37544__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37544__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37544__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37544__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37544__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37546 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(3),null);
var G__37549 = top_data;
var G__37549__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37549,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37549);
var G__37549__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37549__$1);
var G__37549__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37549__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37549__$2);
var G__37549__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37549__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37549__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37549__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37549__$4;
}

break;
case "execution":
var vec__37564 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37564,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37564,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37564,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37564,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37498_SHARP_){
var or__4185__auto__ = (p1__37498_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__37568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37568.cljs$core$IFn$_invoke$arity$1 ? fexpr__37568.cljs$core$IFn$_invoke$arity$1(p1__37498_SHARP_) : fexpr__37568.call(null,p1__37498_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__37569 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37569__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37569,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37569);
var G__37569__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37569__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37569__$1);
var G__37569__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37569__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37569__$2);
var G__37569__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37569__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37569__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37569__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37569__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37539__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37610){
var map__37611 = p__37610;
var map__37611__$1 = (((((!((map__37611 == null))))?(((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37611):map__37611);
var triage_data = map__37611__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37613 = phase;
var G__37613__$1 = (((G__37613 instanceof cljs.core.Keyword))?G__37613.fqn:null);
switch (G__37613__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37614 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37616 = loc;
var G__37617 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37622_37804 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37623_37805 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37624_37806 = true;
var _STAR_print_fn_STAR__temp_val__37625_37807 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37624_37806);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37625_37807);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37608_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37608_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37623_37805);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37622_37804);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37614,G__37615,G__37616,G__37617) : format.call(null,G__37614,G__37615,G__37616,G__37617));

break;
case "macroexpansion":
var G__37640 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37641 = cause_type;
var G__37642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37643 = loc;
var G__37644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37640,G__37641,G__37642,G__37643,G__37644) : format.call(null,G__37640,G__37641,G__37642,G__37643,G__37644));

break;
case "compile-syntax-check":
var G__37645 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37646 = cause_type;
var G__37647 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37648 = loc;
var G__37649 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37645,G__37646,G__37647,G__37648,G__37649) : format.call(null,G__37645,G__37646,G__37647,G__37648,G__37649));

break;
case "compilation":
var G__37650 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37651 = cause_type;
var G__37652 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37653 = loc;
var G__37654 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37650,G__37651,G__37652,G__37653,G__37654) : format.call(null,G__37650,G__37651,G__37652,G__37653,G__37654));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37659 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37660 = symbol;
var G__37661 = loc;
var G__37662 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37667_37815 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37668_37816 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37669_37817 = true;
var _STAR_print_fn_STAR__temp_val__37670_37818 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37669_37817);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37670_37818);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37609_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37609_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37668_37816);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37667_37815);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37659,G__37660,G__37661,G__37662) : format.call(null,G__37659,G__37660,G__37661,G__37662));
} else {
var G__37678 = "Execution error%s at %s(%s).\n%s\n";
var G__37679 = cause_type;
var G__37680 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37681 = loc;
var G__37682 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37678,G__37679,G__37680,G__37681,G__37682) : format.call(null,G__37678,G__37679,G__37680,G__37681,G__37682));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37613__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
