goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34335 = coll;
var G__34336 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34335,G__34336) : shadow.dom.lazy_native_coll_seq.call(null,G__34335,G__34336));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34377 = arguments.length;
switch (G__34377) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34383 = arguments.length;
switch (G__34383) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34409 = arguments.length;
switch (G__34409) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34416 = arguments.length;
switch (G__34416) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34428 = arguments.length;
switch (G__34428) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34446 = arguments.length;
switch (G__34446) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34452){if((e34452 instanceof Object)){
var e = e34452;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34452;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34453 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34454 = null;
var count__34455 = (0);
var i__34456 = (0);
while(true){
if((i__34456 < count__34455)){
var el = chunk__34454.cljs$core$IIndexed$_nth$arity$2(null,i__34456);
var handler_34982__$1 = ((function (seq__34453,chunk__34454,count__34455,i__34456,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34453,chunk__34454,count__34455,i__34456,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34982__$1);


var G__34983 = seq__34453;
var G__34984 = chunk__34454;
var G__34985 = count__34455;
var G__34986 = (i__34456 + (1));
seq__34453 = G__34983;
chunk__34454 = G__34984;
count__34455 = G__34985;
i__34456 = G__34986;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34453);
if(temp__5735__auto__){
var seq__34453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34453__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34453__$1);
var G__34987 = cljs.core.chunk_rest(seq__34453__$1);
var G__34988 = c__4609__auto__;
var G__34989 = cljs.core.count(c__4609__auto__);
var G__34990 = (0);
seq__34453 = G__34987;
chunk__34454 = G__34988;
count__34455 = G__34989;
i__34456 = G__34990;
continue;
} else {
var el = cljs.core.first(seq__34453__$1);
var handler_34991__$1 = ((function (seq__34453,chunk__34454,count__34455,i__34456,el,seq__34453__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34453,chunk__34454,count__34455,i__34456,el,seq__34453__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34991__$1);


var G__34994 = cljs.core.next(seq__34453__$1);
var G__34995 = null;
var G__34996 = (0);
var G__34997 = (0);
seq__34453 = G__34994;
chunk__34454 = G__34995;
count__34455 = G__34996;
i__34456 = G__34997;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34461 = arguments.length;
switch (G__34461) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34470 = cljs.core.seq(events);
var chunk__34471 = null;
var count__34472 = (0);
var i__34473 = (0);
while(true){
if((i__34473 < count__34472)){
var vec__34483 = chunk__34471.cljs$core$IIndexed$_nth$arity$2(null,i__34473);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34999 = seq__34470;
var G__35000 = chunk__34471;
var G__35001 = count__34472;
var G__35002 = (i__34473 + (1));
seq__34470 = G__34999;
chunk__34471 = G__35000;
count__34472 = G__35001;
i__34473 = G__35002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34470);
if(temp__5735__auto__){
var seq__34470__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34470__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34470__$1);
var G__35003 = cljs.core.chunk_rest(seq__34470__$1);
var G__35004 = c__4609__auto__;
var G__35005 = cljs.core.count(c__4609__auto__);
var G__35006 = (0);
seq__34470 = G__35003;
chunk__34471 = G__35004;
count__34472 = G__35005;
i__34473 = G__35006;
continue;
} else {
var vec__34489 = cljs.core.first(seq__34470__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34489,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35007 = cljs.core.next(seq__34470__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34470 = G__35007;
chunk__34471 = G__35008;
count__34472 = G__35009;
i__34473 = G__35010;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34495 = cljs.core.seq(styles);
var chunk__34496 = null;
var count__34497 = (0);
var i__34498 = (0);
while(true){
if((i__34498 < count__34497)){
var vec__34518 = chunk__34496.cljs$core$IIndexed$_nth$arity$2(null,i__34498);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35011 = seq__34495;
var G__35012 = chunk__34496;
var G__35013 = count__34497;
var G__35014 = (i__34498 + (1));
seq__34495 = G__35011;
chunk__34496 = G__35012;
count__34497 = G__35013;
i__34498 = G__35014;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34495);
if(temp__5735__auto__){
var seq__34495__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34495__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34495__$1);
var G__35015 = cljs.core.chunk_rest(seq__34495__$1);
var G__35016 = c__4609__auto__;
var G__35017 = cljs.core.count(c__4609__auto__);
var G__35018 = (0);
seq__34495 = G__35015;
chunk__34496 = G__35016;
count__34497 = G__35017;
i__34498 = G__35018;
continue;
} else {
var vec__34523 = cljs.core.first(seq__34495__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35022 = cljs.core.next(seq__34495__$1);
var G__35023 = null;
var G__35024 = (0);
var G__35025 = (0);
seq__34495 = G__35022;
chunk__34496 = G__35023;
count__34497 = G__35024;
i__34498 = G__35025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34530_35027 = key;
var G__34530_35028__$1 = (((G__34530_35027 instanceof cljs.core.Keyword))?G__34530_35027.fqn:null);
switch (G__34530_35028__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35030 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_35030,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_35030,"aria-");
}
})())){
el.setAttribute(ks_35030,value);
} else {
(el[ks_35030] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34550){
var map__34551 = p__34550;
var map__34551__$1 = (((((!((map__34551 == null))))?(((((map__34551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34551):map__34551);
var props = map__34551__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34551__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34553 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34556 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34556,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34556;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34558 = arguments.length;
switch (G__34558) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34565){
var vec__34566 = p__34565;
var seq__34567 = cljs.core.seq(vec__34566);
var first__34568 = cljs.core.first(seq__34567);
var seq__34567__$1 = cljs.core.next(seq__34567);
var nn = first__34568;
var first__34568__$1 = cljs.core.first(seq__34567__$1);
var seq__34567__$2 = cljs.core.next(seq__34567__$1);
var np = first__34568__$1;
var nc = seq__34567__$2;
var node = vec__34566;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34569 = nn;
var G__34570 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34569,G__34570) : create_fn.call(null,G__34569,G__34570));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34571 = nn;
var G__34572 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34571,G__34572) : create_fn.call(null,G__34571,G__34572));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34573 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34573,(1),null);
var seq__34576_35035 = cljs.core.seq(node_children);
var chunk__34577_35036 = null;
var count__34578_35037 = (0);
var i__34579_35038 = (0);
while(true){
if((i__34579_35038 < count__34578_35037)){
var child_struct_35039 = chunk__34577_35036.cljs$core$IIndexed$_nth$arity$2(null,i__34579_35038);
var children_35040 = shadow.dom.dom_node(child_struct_35039);
if(cljs.core.seq_QMARK_(children_35040)){
var seq__34604_35041 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35040));
var chunk__34606_35042 = null;
var count__34607_35043 = (0);
var i__34608_35044 = (0);
while(true){
if((i__34608_35044 < count__34607_35043)){
var child_35045 = chunk__34606_35042.cljs$core$IIndexed$_nth$arity$2(null,i__34608_35044);
if(cljs.core.truth_(child_35045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35045);


var G__35046 = seq__34604_35041;
var G__35047 = chunk__34606_35042;
var G__35048 = count__34607_35043;
var G__35049 = (i__34608_35044 + (1));
seq__34604_35041 = G__35046;
chunk__34606_35042 = G__35047;
count__34607_35043 = G__35048;
i__34608_35044 = G__35049;
continue;
} else {
var G__35050 = seq__34604_35041;
var G__35051 = chunk__34606_35042;
var G__35052 = count__34607_35043;
var G__35053 = (i__34608_35044 + (1));
seq__34604_35041 = G__35050;
chunk__34606_35042 = G__35051;
count__34607_35043 = G__35052;
i__34608_35044 = G__35053;
continue;
}
} else {
var temp__5735__auto___35054 = cljs.core.seq(seq__34604_35041);
if(temp__5735__auto___35054){
var seq__34604_35055__$1 = temp__5735__auto___35054;
if(cljs.core.chunked_seq_QMARK_(seq__34604_35055__$1)){
var c__4609__auto___35056 = cljs.core.chunk_first(seq__34604_35055__$1);
var G__35057 = cljs.core.chunk_rest(seq__34604_35055__$1);
var G__35058 = c__4609__auto___35056;
var G__35059 = cljs.core.count(c__4609__auto___35056);
var G__35060 = (0);
seq__34604_35041 = G__35057;
chunk__34606_35042 = G__35058;
count__34607_35043 = G__35059;
i__34608_35044 = G__35060;
continue;
} else {
var child_35061 = cljs.core.first(seq__34604_35055__$1);
if(cljs.core.truth_(child_35061)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35061);


var G__35062 = cljs.core.next(seq__34604_35055__$1);
var G__35063 = null;
var G__35064 = (0);
var G__35065 = (0);
seq__34604_35041 = G__35062;
chunk__34606_35042 = G__35063;
count__34607_35043 = G__35064;
i__34608_35044 = G__35065;
continue;
} else {
var G__35067 = cljs.core.next(seq__34604_35055__$1);
var G__35068 = null;
var G__35069 = (0);
var G__35070 = (0);
seq__34604_35041 = G__35067;
chunk__34606_35042 = G__35068;
count__34607_35043 = G__35069;
i__34608_35044 = G__35070;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35040);
}


var G__35071 = seq__34576_35035;
var G__35072 = chunk__34577_35036;
var G__35073 = count__34578_35037;
var G__35074 = (i__34579_35038 + (1));
seq__34576_35035 = G__35071;
chunk__34577_35036 = G__35072;
count__34578_35037 = G__35073;
i__34579_35038 = G__35074;
continue;
} else {
var temp__5735__auto___35075 = cljs.core.seq(seq__34576_35035);
if(temp__5735__auto___35075){
var seq__34576_35076__$1 = temp__5735__auto___35075;
if(cljs.core.chunked_seq_QMARK_(seq__34576_35076__$1)){
var c__4609__auto___35077 = cljs.core.chunk_first(seq__34576_35076__$1);
var G__35078 = cljs.core.chunk_rest(seq__34576_35076__$1);
var G__35079 = c__4609__auto___35077;
var G__35080 = cljs.core.count(c__4609__auto___35077);
var G__35081 = (0);
seq__34576_35035 = G__35078;
chunk__34577_35036 = G__35079;
count__34578_35037 = G__35080;
i__34579_35038 = G__35081;
continue;
} else {
var child_struct_35082 = cljs.core.first(seq__34576_35076__$1);
var children_35083 = shadow.dom.dom_node(child_struct_35082);
if(cljs.core.seq_QMARK_(children_35083)){
var seq__34615_35084 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35083));
var chunk__34617_35085 = null;
var count__34618_35086 = (0);
var i__34619_35087 = (0);
while(true){
if((i__34619_35087 < count__34618_35086)){
var child_35088 = chunk__34617_35085.cljs$core$IIndexed$_nth$arity$2(null,i__34619_35087);
if(cljs.core.truth_(child_35088)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35088);


var G__35089 = seq__34615_35084;
var G__35090 = chunk__34617_35085;
var G__35091 = count__34618_35086;
var G__35092 = (i__34619_35087 + (1));
seq__34615_35084 = G__35089;
chunk__34617_35085 = G__35090;
count__34618_35086 = G__35091;
i__34619_35087 = G__35092;
continue;
} else {
var G__35093 = seq__34615_35084;
var G__35094 = chunk__34617_35085;
var G__35095 = count__34618_35086;
var G__35096 = (i__34619_35087 + (1));
seq__34615_35084 = G__35093;
chunk__34617_35085 = G__35094;
count__34618_35086 = G__35095;
i__34619_35087 = G__35096;
continue;
}
} else {
var temp__5735__auto___35097__$1 = cljs.core.seq(seq__34615_35084);
if(temp__5735__auto___35097__$1){
var seq__34615_35098__$1 = temp__5735__auto___35097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34615_35098__$1)){
var c__4609__auto___35099 = cljs.core.chunk_first(seq__34615_35098__$1);
var G__35100 = cljs.core.chunk_rest(seq__34615_35098__$1);
var G__35101 = c__4609__auto___35099;
var G__35102 = cljs.core.count(c__4609__auto___35099);
var G__35103 = (0);
seq__34615_35084 = G__35100;
chunk__34617_35085 = G__35101;
count__34618_35086 = G__35102;
i__34619_35087 = G__35103;
continue;
} else {
var child_35104 = cljs.core.first(seq__34615_35098__$1);
if(cljs.core.truth_(child_35104)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35104);


var G__35105 = cljs.core.next(seq__34615_35098__$1);
var G__35106 = null;
var G__35107 = (0);
var G__35108 = (0);
seq__34615_35084 = G__35105;
chunk__34617_35085 = G__35106;
count__34618_35086 = G__35107;
i__34619_35087 = G__35108;
continue;
} else {
var G__35109 = cljs.core.next(seq__34615_35098__$1);
var G__35110 = null;
var G__35111 = (0);
var G__35112 = (0);
seq__34615_35084 = G__35109;
chunk__34617_35085 = G__35110;
count__34618_35086 = G__35111;
i__34619_35087 = G__35112;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35083);
}


var G__35113 = cljs.core.next(seq__34576_35076__$1);
var G__35114 = null;
var G__35115 = (0);
var G__35116 = (0);
seq__34576_35035 = G__35113;
chunk__34577_35036 = G__35114;
count__34578_35037 = G__35115;
i__34579_35038 = G__35116;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34647 = cljs.core.seq(node);
var chunk__34648 = null;
var count__34649 = (0);
var i__34650 = (0);
while(true){
if((i__34650 < count__34649)){
var n = chunk__34648.cljs$core$IIndexed$_nth$arity$2(null,i__34650);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35117 = seq__34647;
var G__35118 = chunk__34648;
var G__35119 = count__34649;
var G__35120 = (i__34650 + (1));
seq__34647 = G__35117;
chunk__34648 = G__35118;
count__34649 = G__35119;
i__34650 = G__35120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34647);
if(temp__5735__auto__){
var seq__34647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34647__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34647__$1);
var G__35121 = cljs.core.chunk_rest(seq__34647__$1);
var G__35122 = c__4609__auto__;
var G__35123 = cljs.core.count(c__4609__auto__);
var G__35124 = (0);
seq__34647 = G__35121;
chunk__34648 = G__35122;
count__34649 = G__35123;
i__34650 = G__35124;
continue;
} else {
var n = cljs.core.first(seq__34647__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35125 = cljs.core.next(seq__34647__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__34647 = G__35125;
chunk__34648 = G__35126;
count__34649 = G__35127;
i__34650 = G__35128;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34657 = arguments.length;
switch (G__34657) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34661 = arguments.length;
switch (G__34661) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34665 = arguments.length;
switch (G__34665) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35138 = arguments.length;
var i__4790__auto___35139 = (0);
while(true){
if((i__4790__auto___35139 < len__4789__auto___35138)){
args__4795__auto__.push((arguments[i__4790__auto___35139]));

var G__35140 = (i__4790__auto___35139 + (1));
i__4790__auto___35139 = G__35140;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34683_35141 = cljs.core.seq(nodes);
var chunk__34684_35142 = null;
var count__34685_35143 = (0);
var i__34686_35144 = (0);
while(true){
if((i__34686_35144 < count__34685_35143)){
var node_35145 = chunk__34684_35142.cljs$core$IIndexed$_nth$arity$2(null,i__34686_35144);
fragment.appendChild(shadow.dom._to_dom(node_35145));


var G__35146 = seq__34683_35141;
var G__35147 = chunk__34684_35142;
var G__35148 = count__34685_35143;
var G__35149 = (i__34686_35144 + (1));
seq__34683_35141 = G__35146;
chunk__34684_35142 = G__35147;
count__34685_35143 = G__35148;
i__34686_35144 = G__35149;
continue;
} else {
var temp__5735__auto___35150 = cljs.core.seq(seq__34683_35141);
if(temp__5735__auto___35150){
var seq__34683_35151__$1 = temp__5735__auto___35150;
if(cljs.core.chunked_seq_QMARK_(seq__34683_35151__$1)){
var c__4609__auto___35152 = cljs.core.chunk_first(seq__34683_35151__$1);
var G__35153 = cljs.core.chunk_rest(seq__34683_35151__$1);
var G__35154 = c__4609__auto___35152;
var G__35155 = cljs.core.count(c__4609__auto___35152);
var G__35156 = (0);
seq__34683_35141 = G__35153;
chunk__34684_35142 = G__35154;
count__34685_35143 = G__35155;
i__34686_35144 = G__35156;
continue;
} else {
var node_35157 = cljs.core.first(seq__34683_35151__$1);
fragment.appendChild(shadow.dom._to_dom(node_35157));


var G__35158 = cljs.core.next(seq__34683_35151__$1);
var G__35159 = null;
var G__35160 = (0);
var G__35161 = (0);
seq__34683_35141 = G__35158;
chunk__34684_35142 = G__35159;
count__34685_35143 = G__35160;
i__34686_35144 = G__35161;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34682){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34682));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34698_35165 = cljs.core.seq(scripts);
var chunk__34699_35166 = null;
var count__34700_35167 = (0);
var i__34701_35168 = (0);
while(true){
if((i__34701_35168 < count__34700_35167)){
var vec__34710_35169 = chunk__34699_35166.cljs$core$IIndexed$_nth$arity$2(null,i__34701_35168);
var script_tag_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710_35169,(0),null);
var script_body_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710_35169,(1),null);
eval(script_body_35171);


var G__35172 = seq__34698_35165;
var G__35173 = chunk__34699_35166;
var G__35174 = count__34700_35167;
var G__35175 = (i__34701_35168 + (1));
seq__34698_35165 = G__35172;
chunk__34699_35166 = G__35173;
count__34700_35167 = G__35174;
i__34701_35168 = G__35175;
continue;
} else {
var temp__5735__auto___35176 = cljs.core.seq(seq__34698_35165);
if(temp__5735__auto___35176){
var seq__34698_35177__$1 = temp__5735__auto___35176;
if(cljs.core.chunked_seq_QMARK_(seq__34698_35177__$1)){
var c__4609__auto___35178 = cljs.core.chunk_first(seq__34698_35177__$1);
var G__35179 = cljs.core.chunk_rest(seq__34698_35177__$1);
var G__35180 = c__4609__auto___35178;
var G__35181 = cljs.core.count(c__4609__auto___35178);
var G__35182 = (0);
seq__34698_35165 = G__35179;
chunk__34699_35166 = G__35180;
count__34700_35167 = G__35181;
i__34701_35168 = G__35182;
continue;
} else {
var vec__34713_35183 = cljs.core.first(seq__34698_35177__$1);
var script_tag_35184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34713_35183,(0),null);
var script_body_35185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34713_35183,(1),null);
eval(script_body_35185);


var G__35186 = cljs.core.next(seq__34698_35177__$1);
var G__35187 = null;
var G__35188 = (0);
var G__35189 = (0);
seq__34698_35165 = G__35186;
chunk__34699_35166 = G__35187;
count__34700_35167 = G__35188;
i__34701_35168 = G__35189;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34718){
var vec__34724 = p__34718;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34731 = arguments.length;
switch (G__34731) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34747 = cljs.core.seq(style_keys);
var chunk__34748 = null;
var count__34749 = (0);
var i__34750 = (0);
while(true){
if((i__34750 < count__34749)){
var it = chunk__34748.cljs$core$IIndexed$_nth$arity$2(null,i__34750);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35195 = seq__34747;
var G__35196 = chunk__34748;
var G__35197 = count__34749;
var G__35198 = (i__34750 + (1));
seq__34747 = G__35195;
chunk__34748 = G__35196;
count__34749 = G__35197;
i__34750 = G__35198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34747);
if(temp__5735__auto__){
var seq__34747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34747__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34747__$1);
var G__35199 = cljs.core.chunk_rest(seq__34747__$1);
var G__35200 = c__4609__auto__;
var G__35201 = cljs.core.count(c__4609__auto__);
var G__35202 = (0);
seq__34747 = G__35199;
chunk__34748 = G__35200;
count__34749 = G__35201;
i__34750 = G__35202;
continue;
} else {
var it = cljs.core.first(seq__34747__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35203 = cljs.core.next(seq__34747__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__34747 = G__35203;
chunk__34748 = G__35204;
count__34749 = G__35205;
i__34750 = G__35206;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34762,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34768 = k34762;
var G__34768__$1 = (((G__34768 instanceof cljs.core.Keyword))?G__34768.fqn:null);
switch (G__34768__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34762,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34770){
var vec__34771 = p__34770;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34761){
var self__ = this;
var G__34761__$1 = this;
return (new cljs.core.RecordIter((0),G__34761__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34763,other34764){
var self__ = this;
var this34763__$1 = this;
return (((!((other34764 == null)))) && ((this34763__$1.constructor === other34764.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34763__$1.x,other34764.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34763__$1.y,other34764.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34763__$1.__extmap,other34764.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34761){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34787 = cljs.core.keyword_identical_QMARK_;
var expr__34788 = k__4447__auto__;
if(cljs.core.truth_((pred__34787.cljs$core$IFn$_invoke$arity$2 ? pred__34787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34788) : pred__34787.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34788)))){
return (new shadow.dom.Coordinate(G__34761,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34787.cljs$core$IFn$_invoke$arity$2 ? pred__34787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34788) : pred__34787.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34788)))){
return (new shadow.dom.Coordinate(self__.x,G__34761,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34761),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34761){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34761,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34765){
var extmap__4478__auto__ = (function (){var G__34790 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34765,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34765)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34790);
} else {
return G__34790;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34765),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34765),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34798,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34808 = k34798;
var G__34808__$1 = (((G__34808 instanceof cljs.core.Keyword))?G__34808.fqn:null);
switch (G__34808__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34798,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34811){
var vec__34812 = p__34811;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34797){
var self__ = this;
var G__34797__$1 = this;
return (new cljs.core.RecordIter((0),G__34797__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34799,other34800){
var self__ = this;
var this34799__$1 = this;
return (((!((other34800 == null)))) && ((this34799__$1.constructor === other34800.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34799__$1.w,other34800.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34799__$1.h,other34800.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34799__$1.__extmap,other34800.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34797){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34824 = cljs.core.keyword_identical_QMARK_;
var expr__34825 = k__4447__auto__;
if(cljs.core.truth_((pred__34824.cljs$core$IFn$_invoke$arity$2 ? pred__34824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34825) : pred__34824.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34825)))){
return (new shadow.dom.Size(G__34797,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34824.cljs$core$IFn$_invoke$arity$2 ? pred__34824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34825) : pred__34824.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34825)))){
return (new shadow.dom.Size(self__.w,G__34797,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34797),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34797){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34797,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34801){
var extmap__4478__auto__ = (function (){var G__34835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34801,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34835);
} else {
return G__34835;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34801),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34801),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__35248 = (i + (1));
var G__35249 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35248;
ret = G__35249;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34855){
var vec__34856 = p__34855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34856,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34860 = arguments.length;
switch (G__34860) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35251 = ps;
var G__35252 = (i + (1));
el__$1 = G__35251;
i = G__35252;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34880 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34885_35254 = cljs.core.seq(props);
var chunk__34886_35255 = null;
var count__34887_35256 = (0);
var i__34888_35257 = (0);
while(true){
if((i__34888_35257 < count__34887_35256)){
var vec__34896_35258 = chunk__34886_35255.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35257);
var k_35259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896_35258,(0),null);
var v_35260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896_35258,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35259);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35259),v_35260);


var G__35261 = seq__34885_35254;
var G__35262 = chunk__34886_35255;
var G__35263 = count__34887_35256;
var G__35264 = (i__34888_35257 + (1));
seq__34885_35254 = G__35261;
chunk__34886_35255 = G__35262;
count__34887_35256 = G__35263;
i__34888_35257 = G__35264;
continue;
} else {
var temp__5735__auto___35265 = cljs.core.seq(seq__34885_35254);
if(temp__5735__auto___35265){
var seq__34885_35266__$1 = temp__5735__auto___35265;
if(cljs.core.chunked_seq_QMARK_(seq__34885_35266__$1)){
var c__4609__auto___35267 = cljs.core.chunk_first(seq__34885_35266__$1);
var G__35268 = cljs.core.chunk_rest(seq__34885_35266__$1);
var G__35269 = c__4609__auto___35267;
var G__35270 = cljs.core.count(c__4609__auto___35267);
var G__35271 = (0);
seq__34885_35254 = G__35268;
chunk__34886_35255 = G__35269;
count__34887_35256 = G__35270;
i__34888_35257 = G__35271;
continue;
} else {
var vec__34903_35274 = cljs.core.first(seq__34885_35266__$1);
var k_35275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903_35274,(0),null);
var v_35276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903_35274,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35275);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35275),v_35276);


var G__35277 = cljs.core.next(seq__34885_35266__$1);
var G__35278 = null;
var G__35279 = (0);
var G__35280 = (0);
seq__34885_35254 = G__35277;
chunk__34886_35255 = G__35278;
count__34887_35256 = G__35279;
i__34888_35257 = G__35280;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34912 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34912,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34912,(1),null);
var seq__34916_35281 = cljs.core.seq(node_children);
var chunk__34918_35282 = null;
var count__34919_35283 = (0);
var i__34920_35284 = (0);
while(true){
if((i__34920_35284 < count__34919_35283)){
var child_struct_35285 = chunk__34918_35282.cljs$core$IIndexed$_nth$arity$2(null,i__34920_35284);
if((!((child_struct_35285 == null)))){
if(typeof child_struct_35285 === 'string'){
var text_35286 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35286),child_struct_35285].join(''));
} else {
var children_35287 = shadow.dom.svg_node(child_struct_35285);
if(cljs.core.seq_QMARK_(children_35287)){
var seq__34949_35288 = cljs.core.seq(children_35287);
var chunk__34951_35289 = null;
var count__34952_35290 = (0);
var i__34953_35291 = (0);
while(true){
if((i__34953_35291 < count__34952_35290)){
var child_35292 = chunk__34951_35289.cljs$core$IIndexed$_nth$arity$2(null,i__34953_35291);
if(cljs.core.truth_(child_35292)){
node.appendChild(child_35292);


var G__35293 = seq__34949_35288;
var G__35294 = chunk__34951_35289;
var G__35295 = count__34952_35290;
var G__35296 = (i__34953_35291 + (1));
seq__34949_35288 = G__35293;
chunk__34951_35289 = G__35294;
count__34952_35290 = G__35295;
i__34953_35291 = G__35296;
continue;
} else {
var G__35297 = seq__34949_35288;
var G__35298 = chunk__34951_35289;
var G__35299 = count__34952_35290;
var G__35300 = (i__34953_35291 + (1));
seq__34949_35288 = G__35297;
chunk__34951_35289 = G__35298;
count__34952_35290 = G__35299;
i__34953_35291 = G__35300;
continue;
}
} else {
var temp__5735__auto___35301 = cljs.core.seq(seq__34949_35288);
if(temp__5735__auto___35301){
var seq__34949_35302__$1 = temp__5735__auto___35301;
if(cljs.core.chunked_seq_QMARK_(seq__34949_35302__$1)){
var c__4609__auto___35303 = cljs.core.chunk_first(seq__34949_35302__$1);
var G__35304 = cljs.core.chunk_rest(seq__34949_35302__$1);
var G__35305 = c__4609__auto___35303;
var G__35306 = cljs.core.count(c__4609__auto___35303);
var G__35307 = (0);
seq__34949_35288 = G__35304;
chunk__34951_35289 = G__35305;
count__34952_35290 = G__35306;
i__34953_35291 = G__35307;
continue;
} else {
var child_35308 = cljs.core.first(seq__34949_35302__$1);
if(cljs.core.truth_(child_35308)){
node.appendChild(child_35308);


var G__35309 = cljs.core.next(seq__34949_35302__$1);
var G__35310 = null;
var G__35311 = (0);
var G__35312 = (0);
seq__34949_35288 = G__35309;
chunk__34951_35289 = G__35310;
count__34952_35290 = G__35311;
i__34953_35291 = G__35312;
continue;
} else {
var G__35313 = cljs.core.next(seq__34949_35302__$1);
var G__35314 = null;
var G__35315 = (0);
var G__35316 = (0);
seq__34949_35288 = G__35313;
chunk__34951_35289 = G__35314;
count__34952_35290 = G__35315;
i__34953_35291 = G__35316;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35287);
}
}


var G__35317 = seq__34916_35281;
var G__35318 = chunk__34918_35282;
var G__35319 = count__34919_35283;
var G__35320 = (i__34920_35284 + (1));
seq__34916_35281 = G__35317;
chunk__34918_35282 = G__35318;
count__34919_35283 = G__35319;
i__34920_35284 = G__35320;
continue;
} else {
var G__35321 = seq__34916_35281;
var G__35322 = chunk__34918_35282;
var G__35323 = count__34919_35283;
var G__35324 = (i__34920_35284 + (1));
seq__34916_35281 = G__35321;
chunk__34918_35282 = G__35322;
count__34919_35283 = G__35323;
i__34920_35284 = G__35324;
continue;
}
} else {
var temp__5735__auto___35325 = cljs.core.seq(seq__34916_35281);
if(temp__5735__auto___35325){
var seq__34916_35327__$1 = temp__5735__auto___35325;
if(cljs.core.chunked_seq_QMARK_(seq__34916_35327__$1)){
var c__4609__auto___35328 = cljs.core.chunk_first(seq__34916_35327__$1);
var G__35329 = cljs.core.chunk_rest(seq__34916_35327__$1);
var G__35330 = c__4609__auto___35328;
var G__35331 = cljs.core.count(c__4609__auto___35328);
var G__35332 = (0);
seq__34916_35281 = G__35329;
chunk__34918_35282 = G__35330;
count__34919_35283 = G__35331;
i__34920_35284 = G__35332;
continue;
} else {
var child_struct_35333 = cljs.core.first(seq__34916_35327__$1);
if((!((child_struct_35333 == null)))){
if(typeof child_struct_35333 === 'string'){
var text_35334 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35334),child_struct_35333].join(''));
} else {
var children_35335 = shadow.dom.svg_node(child_struct_35333);
if(cljs.core.seq_QMARK_(children_35335)){
var seq__34955_35336 = cljs.core.seq(children_35335);
var chunk__34957_35337 = null;
var count__34958_35338 = (0);
var i__34959_35339 = (0);
while(true){
if((i__34959_35339 < count__34958_35338)){
var child_35344 = chunk__34957_35337.cljs$core$IIndexed$_nth$arity$2(null,i__34959_35339);
if(cljs.core.truth_(child_35344)){
node.appendChild(child_35344);


var G__35345 = seq__34955_35336;
var G__35346 = chunk__34957_35337;
var G__35347 = count__34958_35338;
var G__35348 = (i__34959_35339 + (1));
seq__34955_35336 = G__35345;
chunk__34957_35337 = G__35346;
count__34958_35338 = G__35347;
i__34959_35339 = G__35348;
continue;
} else {
var G__35350 = seq__34955_35336;
var G__35351 = chunk__34957_35337;
var G__35352 = count__34958_35338;
var G__35353 = (i__34959_35339 + (1));
seq__34955_35336 = G__35350;
chunk__34957_35337 = G__35351;
count__34958_35338 = G__35352;
i__34959_35339 = G__35353;
continue;
}
} else {
var temp__5735__auto___35354__$1 = cljs.core.seq(seq__34955_35336);
if(temp__5735__auto___35354__$1){
var seq__34955_35355__$1 = temp__5735__auto___35354__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34955_35355__$1)){
var c__4609__auto___35356 = cljs.core.chunk_first(seq__34955_35355__$1);
var G__35357 = cljs.core.chunk_rest(seq__34955_35355__$1);
var G__35358 = c__4609__auto___35356;
var G__35359 = cljs.core.count(c__4609__auto___35356);
var G__35360 = (0);
seq__34955_35336 = G__35357;
chunk__34957_35337 = G__35358;
count__34958_35338 = G__35359;
i__34959_35339 = G__35360;
continue;
} else {
var child_35362 = cljs.core.first(seq__34955_35355__$1);
if(cljs.core.truth_(child_35362)){
node.appendChild(child_35362);


var G__35363 = cljs.core.next(seq__34955_35355__$1);
var G__35364 = null;
var G__35365 = (0);
var G__35366 = (0);
seq__34955_35336 = G__35363;
chunk__34957_35337 = G__35364;
count__34958_35338 = G__35365;
i__34959_35339 = G__35366;
continue;
} else {
var G__35367 = cljs.core.next(seq__34955_35355__$1);
var G__35368 = null;
var G__35369 = (0);
var G__35370 = (0);
seq__34955_35336 = G__35367;
chunk__34957_35337 = G__35368;
count__34958_35338 = G__35369;
i__34959_35339 = G__35370;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35335);
}
}


var G__35375 = cljs.core.next(seq__34916_35327__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__34916_35281 = G__35375;
chunk__34918_35282 = G__35376;
count__34919_35283 = G__35377;
i__34920_35284 = G__35378;
continue;
} else {
var G__35379 = cljs.core.next(seq__34916_35327__$1);
var G__35380 = null;
var G__35381 = (0);
var G__35382 = (0);
seq__34916_35281 = G__35379;
chunk__34918_35282 = G__35380;
count__34919_35283 = G__35381;
i__34920_35284 = G__35382;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35383 = arguments.length;
var i__4790__auto___35384 = (0);
while(true){
if((i__4790__auto___35384 < len__4789__auto___35383)){
args__4795__auto__.push((arguments[i__4790__auto___35384]));

var G__35385 = (i__4790__auto___35384 + (1));
i__4790__auto___35384 = G__35385;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34961){
var G__34962 = cljs.core.first(seq34961);
var seq34961__$1 = cljs.core.next(seq34961);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34962,seq34961__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34964 = arguments.length;
switch (G__34964) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__32708__auto___35387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_34969){
var state_val_34970 = (state_34969[(1)]);
if((state_val_34970 === (1))){
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34969__$1,(2),once_or_cleanup);
} else {
if((state_val_34970 === (2))){
var inst_34966 = (state_34969[(2)]);
var inst_34967 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34969__$1 = (function (){var statearr_34971 = state_34969;
(statearr_34971[(7)] = inst_34966);

return statearr_34971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34969__$1,inst_34967);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32617__auto__ = null;
var shadow$dom$state_machine__32617__auto____0 = (function (){
var statearr_34972 = [null,null,null,null,null,null,null,null];
(statearr_34972[(0)] = shadow$dom$state_machine__32617__auto__);

(statearr_34972[(1)] = (1));

return statearr_34972;
});
var shadow$dom$state_machine__32617__auto____1 = (function (state_34969){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_34969);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e34973){if((e34973 instanceof Object)){
var ex__32620__auto__ = e34973;
var statearr_34974_35388 = state_34969;
(statearr_34974_35388[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35389 = state_34969;
state_34969 = G__35389;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
shadow$dom$state_machine__32617__auto__ = function(state_34969){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32617__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32617__auto____1.call(this,state_34969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32617__auto____0;
shadow$dom$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32617__auto____1;
return shadow$dom$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_34975 = f__32709__auto__();
(statearr_34975[(6)] = c__32708__auto___35387);

return statearr_34975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
