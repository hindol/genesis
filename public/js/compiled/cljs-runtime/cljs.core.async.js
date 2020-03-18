goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32766 = arguments.length;
switch (G__32766) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32767 = (function (f,blockable,meta32768){
this.f = f;
this.blockable = blockable;
this.meta32768 = meta32768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32769,meta32768__$1){
var self__ = this;
var _32769__$1 = this;
return (new cljs.core.async.t_cljs$core$async32767(self__.f,self__.blockable,meta32768__$1));
}));

(cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32769){
var self__ = this;
var _32769__$1 = this;
return self__.meta32768;
}));

(cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32768","meta32768",-1654414523,null)], null);
}));

(cljs.core.async.t_cljs$core$async32767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32767");

(cljs.core.async.t_cljs$core$async32767.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32767.
 */
cljs.core.async.__GT_t_cljs$core$async32767 = (function cljs$core$async$__GT_t_cljs$core$async32767(f__$1,blockable__$1,meta32768){
return (new cljs.core.async.t_cljs$core$async32767(f__$1,blockable__$1,meta32768));
});

}

return (new cljs.core.async.t_cljs$core$async32767(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32772 = arguments.length;
switch (G__32772) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32774 = arguments.length;
switch (G__32774) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32776 = arguments.length;
switch (G__32776) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34227 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34227) : fn1.call(null,val_34227));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34227) : fn1.call(null,val_34227));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32778 = arguments.length;
switch (G__32778) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___34243 = n;
var x_34244 = (0);
while(true){
if((x_34244 < n__4666__auto___34243)){
(a[x_34244] = x_34244);

var G__34248 = (x_34244 + (1));
x_34244 = G__34248;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32779 = (function (flag,meta32780){
this.flag = flag;
this.meta32780 = meta32780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32781,meta32780__$1){
var self__ = this;
var _32781__$1 = this;
return (new cljs.core.async.t_cljs$core$async32779(self__.flag,meta32780__$1));
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32781){
var self__ = this;
var _32781__$1 = this;
return self__.meta32780;
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32780","meta32780",1515446176,null)], null);
}));

(cljs.core.async.t_cljs$core$async32779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32779");

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32779.
 */
cljs.core.async.__GT_t_cljs$core$async32779 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32779(flag__$1,meta32780){
return (new cljs.core.async.t_cljs$core$async32779(flag__$1,meta32780));
});

}

return (new cljs.core.async.t_cljs$core$async32779(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32782 = (function (flag,cb,meta32783){
this.flag = flag;
this.cb = cb;
this.meta32783 = meta32783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32784,meta32783__$1){
var self__ = this;
var _32784__$1 = this;
return (new cljs.core.async.t_cljs$core$async32782(self__.flag,self__.cb,meta32783__$1));
}));

(cljs.core.async.t_cljs$core$async32782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32784){
var self__ = this;
var _32784__$1 = this;
return self__.meta32783;
}));

(cljs.core.async.t_cljs$core$async32782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32783","meta32783",-1563179235,null)], null);
}));

(cljs.core.async.t_cljs$core$async32782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32782");

(cljs.core.async.t_cljs$core$async32782.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32782.
 */
cljs.core.async.__GT_t_cljs$core$async32782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32782(flag__$1,cb__$1,meta32783){
return (new cljs.core.async.t_cljs$core$async32782(flag__$1,cb__$1,meta32783));
});

}

return (new cljs.core.async.t_cljs$core$async32782(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32785_SHARP_){
var G__32787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32787) : fret.call(null,G__32787));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32786_SHARP_){
var G__32788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32788) : fret.call(null,G__32788));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34265 = (i + (1));
i = G__34265;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34269 = arguments.length;
var i__4790__auto___34270 = (0);
while(true){
if((i__4790__auto___34270 < len__4789__auto___34269)){
args__4795__auto__.push((arguments[i__4790__auto___34270]));

var G__34271 = (i__4790__auto___34270 + (1));
i__4790__auto___34270 = G__34271;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32791){
var map__32792 = p__32791;
var map__32792__$1 = (((((!((map__32792 == null))))?(((((map__32792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32792):map__32792);
var opts = map__32792__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32789){
var G__32790 = cljs.core.first(seq32789);
var seq32789__$1 = cljs.core.next(seq32789);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32790,seq32789__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32795 = arguments.length;
switch (G__32795) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32708__auto___34279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_32819){
var state_val_32820 = (state_32819[(1)]);
if((state_val_32820 === (7))){
var inst_32815 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32821_34281 = state_32819__$1;
(statearr_32821_34281[(2)] = inst_32815);

(statearr_32821_34281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (1))){
var state_32819__$1 = state_32819;
var statearr_32822_34284 = state_32819__$1;
(statearr_32822_34284[(2)] = null);

(statearr_32822_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (4))){
var inst_32798 = (state_32819[(7)]);
var inst_32798__$1 = (state_32819[(2)]);
var inst_32799 = (inst_32798__$1 == null);
var state_32819__$1 = (function (){var statearr_32823 = state_32819;
(statearr_32823[(7)] = inst_32798__$1);

return statearr_32823;
})();
if(cljs.core.truth_(inst_32799)){
var statearr_32824_34287 = state_32819__$1;
(statearr_32824_34287[(1)] = (5));

} else {
var statearr_32825_34288 = state_32819__$1;
(statearr_32825_34288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (13))){
var state_32819__$1 = state_32819;
var statearr_32826_34289 = state_32819__$1;
(statearr_32826_34289[(2)] = null);

(statearr_32826_34289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (6))){
var inst_32798 = (state_32819[(7)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32819__$1,(11),to,inst_32798);
} else {
if((state_val_32820 === (3))){
var inst_32817 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32819__$1,inst_32817);
} else {
if((state_val_32820 === (12))){
var state_32819__$1 = state_32819;
var statearr_32827_34292 = state_32819__$1;
(statearr_32827_34292[(2)] = null);

(statearr_32827_34292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (2))){
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32819__$1,(4),from);
} else {
if((state_val_32820 === (11))){
var inst_32808 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
if(cljs.core.truth_(inst_32808)){
var statearr_32828_34293 = state_32819__$1;
(statearr_32828_34293[(1)] = (12));

} else {
var statearr_32829_34294 = state_32819__$1;
(statearr_32829_34294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (9))){
var state_32819__$1 = state_32819;
var statearr_32830_34295 = state_32819__$1;
(statearr_32830_34295[(2)] = null);

(statearr_32830_34295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (5))){
var state_32819__$1 = state_32819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32831_34296 = state_32819__$1;
(statearr_32831_34296[(1)] = (8));

} else {
var statearr_32832_34297 = state_32819__$1;
(statearr_32832_34297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (14))){
var inst_32813 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32833_34298 = state_32819__$1;
(statearr_32833_34298[(2)] = inst_32813);

(statearr_32833_34298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (10))){
var inst_32805 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32834_34299 = state_32819__$1;
(statearr_32834_34299[(2)] = inst_32805);

(statearr_32834_34299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (8))){
var inst_32802 = cljs.core.async.close_BANG_(to);
var state_32819__$1 = state_32819;
var statearr_32835_34300 = state_32819__$1;
(statearr_32835_34300[(2)] = inst_32802);

(statearr_32835_34300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null,null];
(statearr_32836[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_32819){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_32819);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e32837){if((e32837 instanceof Object)){
var ex__32620__auto__ = e32837;
var statearr_32838_34301 = state_32819;
(statearr_32838_34301[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34302 = state_32819;
state_32819 = G__34302;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_32839 = f__32709__auto__();
(statearr_32839[(6)] = c__32708__auto___34279);

return statearr_32839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32840){
var vec__32841 = p__32840;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32841,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32841,(1),null);
var job = vec__32841;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32708__auto___34304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_32848){
var state_val_32849 = (state_32848[(1)]);
if((state_val_32849 === (1))){
var state_32848__$1 = state_32848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32848__$1,(2),res,v);
} else {
if((state_val_32849 === (2))){
var inst_32845 = (state_32848[(2)]);
var inst_32846 = cljs.core.async.close_BANG_(res);
var state_32848__$1 = (function (){var statearr_32850 = state_32848;
(statearr_32850[(7)] = inst_32845);

return statearr_32850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32848__$1,inst_32846);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0 = (function (){
var statearr_32851 = [null,null,null,null,null,null,null,null];
(statearr_32851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__);

(statearr_32851[(1)] = (1));

return statearr_32851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1 = (function (state_32848){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_32848);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e32852){if((e32852 instanceof Object)){
var ex__32620__auto__ = e32852;
var statearr_32853_34306 = state_32848;
(statearr_32853_34306[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34307 = state_32848;
state_32848 = G__34307;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = function(state_32848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1.call(this,state_32848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_32854 = f__32709__auto__();
(statearr_32854[(6)] = c__32708__auto___34304);

return statearr_32854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32855){
var vec__32856 = p__32855;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32856,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32856,(1),null);
var job = vec__32856;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___34308 = n;
var __34309 = (0);
while(true){
if((__34309 < n__4666__auto___34308)){
var G__32859_34310 = type;
var G__32859_34311__$1 = (((G__32859_34310 instanceof cljs.core.Keyword))?G__32859_34310.fqn:null);
switch (G__32859_34311__$1) {
case "compute":
var c__32708__auto___34313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34309,c__32708__auto___34313,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async){
return (function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = ((function (__34309,c__32708__auto___34313,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async){
return (function (state_32872){
var state_val_32873 = (state_32872[(1)]);
if((state_val_32873 === (1))){
var state_32872__$1 = state_32872;
var statearr_32874_34316 = state_32872__$1;
(statearr_32874_34316[(2)] = null);

(statearr_32874_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (2))){
var state_32872__$1 = state_32872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32872__$1,(4),jobs);
} else {
if((state_val_32873 === (3))){
var inst_32870 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32872__$1,inst_32870);
} else {
if((state_val_32873 === (4))){
var inst_32862 = (state_32872[(2)]);
var inst_32863 = process(inst_32862);
var state_32872__$1 = state_32872;
if(cljs.core.truth_(inst_32863)){
var statearr_32875_34324 = state_32872__$1;
(statearr_32875_34324[(1)] = (5));

} else {
var statearr_32876_34325 = state_32872__$1;
(statearr_32876_34325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (5))){
var state_32872__$1 = state_32872;
var statearr_32877_34326 = state_32872__$1;
(statearr_32877_34326[(2)] = null);

(statearr_32877_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (6))){
var state_32872__$1 = state_32872;
var statearr_32878_34327 = state_32872__$1;
(statearr_32878_34327[(2)] = null);

(statearr_32878_34327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (7))){
var inst_32868 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
var statearr_32879_34328 = state_32872__$1;
(statearr_32879_34328[(2)] = inst_32868);

(statearr_32879_34328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34309,c__32708__auto___34313,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async))
;
return ((function (__34309,switch__32616__auto__,c__32708__auto___34313,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0 = (function (){
var statearr_32880 = [null,null,null,null,null,null,null];
(statearr_32880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__);

(statearr_32880[(1)] = (1));

return statearr_32880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1 = (function (state_32872){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_32872);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e32881){if((e32881 instanceof Object)){
var ex__32620__auto__ = e32881;
var statearr_32882_34329 = state_32872;
(statearr_32882_34329[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34330 = state_32872;
state_32872 = G__34330;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = function(state_32872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1.call(this,state_32872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__;
})()
;})(__34309,switch__32616__auto__,c__32708__auto___34313,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async))
})();
var state__32710__auto__ = (function (){var statearr_32883 = f__32709__auto__();
(statearr_32883[(6)] = c__32708__auto___34313);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
});})(__34309,c__32708__auto___34313,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async))
);


break;
case "async":
var c__32708__auto___34331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34309,c__32708__auto___34331,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async){
return (function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = ((function (__34309,c__32708__auto___34331,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async){
return (function (state_32896){
var state_val_32897 = (state_32896[(1)]);
if((state_val_32897 === (1))){
var state_32896__$1 = state_32896;
var statearr_32898_34332 = state_32896__$1;
(statearr_32898_34332[(2)] = null);

(statearr_32898_34332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (2))){
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32896__$1,(4),jobs);
} else {
if((state_val_32897 === (3))){
var inst_32894 = (state_32896[(2)]);
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32896__$1,inst_32894);
} else {
if((state_val_32897 === (4))){
var inst_32886 = (state_32896[(2)]);
var inst_32887 = async(inst_32886);
var state_32896__$1 = state_32896;
if(cljs.core.truth_(inst_32887)){
var statearr_32899_34333 = state_32896__$1;
(statearr_32899_34333[(1)] = (5));

} else {
var statearr_32900_34334 = state_32896__$1;
(statearr_32900_34334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (5))){
var state_32896__$1 = state_32896;
var statearr_32901_34337 = state_32896__$1;
(statearr_32901_34337[(2)] = null);

(statearr_32901_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (6))){
var state_32896__$1 = state_32896;
var statearr_32902_34338 = state_32896__$1;
(statearr_32902_34338[(2)] = null);

(statearr_32902_34338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (7))){
var inst_32892 = (state_32896[(2)]);
var state_32896__$1 = state_32896;
var statearr_32903_34339 = state_32896__$1;
(statearr_32903_34339[(2)] = inst_32892);

(statearr_32903_34339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34309,c__32708__auto___34331,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async))
;
return ((function (__34309,switch__32616__auto__,c__32708__auto___34331,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0 = (function (){
var statearr_32904 = [null,null,null,null,null,null,null];
(statearr_32904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__);

(statearr_32904[(1)] = (1));

return statearr_32904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1 = (function (state_32896){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_32896);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e32905){if((e32905 instanceof Object)){
var ex__32620__auto__ = e32905;
var statearr_32906_34340 = state_32896;
(statearr_32906_34340[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34341 = state_32896;
state_32896 = G__34341;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = function(state_32896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1.call(this,state_32896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__;
})()
;})(__34309,switch__32616__auto__,c__32708__auto___34331,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async))
})();
var state__32710__auto__ = (function (){var statearr_32907 = f__32709__auto__();
(statearr_32907[(6)] = c__32708__auto___34331);

return statearr_32907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
});})(__34309,c__32708__auto___34331,G__32859_34310,G__32859_34311__$1,n__4666__auto___34308,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32859_34311__$1)].join('')));

}

var G__34342 = (__34309 + (1));
__34309 = G__34342;
continue;
} else {
}
break;
}

var c__32708__auto___34343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_32929){
var state_val_32930 = (state_32929[(1)]);
if((state_val_32930 === (7))){
var inst_32925 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
var statearr_32931_34344 = state_32929__$1;
(statearr_32931_34344[(2)] = inst_32925);

(statearr_32931_34344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (1))){
var state_32929__$1 = state_32929;
var statearr_32932_34345 = state_32929__$1;
(statearr_32932_34345[(2)] = null);

(statearr_32932_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (4))){
var inst_32910 = (state_32929[(7)]);
var inst_32910__$1 = (state_32929[(2)]);
var inst_32911 = (inst_32910__$1 == null);
var state_32929__$1 = (function (){var statearr_32933 = state_32929;
(statearr_32933[(7)] = inst_32910__$1);

return statearr_32933;
})();
if(cljs.core.truth_(inst_32911)){
var statearr_32934_34346 = state_32929__$1;
(statearr_32934_34346[(1)] = (5));

} else {
var statearr_32935_34347 = state_32929__$1;
(statearr_32935_34347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (6))){
var inst_32915 = (state_32929[(8)]);
var inst_32910 = (state_32929[(7)]);
var inst_32915__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32917 = [inst_32910,inst_32915__$1];
var inst_32918 = (new cljs.core.PersistentVector(null,2,(5),inst_32916,inst_32917,null));
var state_32929__$1 = (function (){var statearr_32936 = state_32929;
(statearr_32936[(8)] = inst_32915__$1);

return statearr_32936;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32929__$1,(8),jobs,inst_32918);
} else {
if((state_val_32930 === (3))){
var inst_32927 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32929__$1,inst_32927);
} else {
if((state_val_32930 === (2))){
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32929__$1,(4),from);
} else {
if((state_val_32930 === (9))){
var inst_32922 = (state_32929[(2)]);
var state_32929__$1 = (function (){var statearr_32937 = state_32929;
(statearr_32937[(9)] = inst_32922);

return statearr_32937;
})();
var statearr_32938_34349 = state_32929__$1;
(statearr_32938_34349[(2)] = null);

(statearr_32938_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (5))){
var inst_32913 = cljs.core.async.close_BANG_(jobs);
var state_32929__$1 = state_32929;
var statearr_32939_34350 = state_32929__$1;
(statearr_32939_34350[(2)] = inst_32913);

(statearr_32939_34350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (8))){
var inst_32915 = (state_32929[(8)]);
var inst_32920 = (state_32929[(2)]);
var state_32929__$1 = (function (){var statearr_32940 = state_32929;
(statearr_32940[(10)] = inst_32920);

return statearr_32940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32929__$1,(9),results,inst_32915);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0 = (function (){
var statearr_32941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__);

(statearr_32941[(1)] = (1));

return statearr_32941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1 = (function (state_32929){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_32929);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e32942){if((e32942 instanceof Object)){
var ex__32620__auto__ = e32942;
var statearr_32943_34352 = state_32929;
(statearr_32943_34352[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34353 = state_32929;
state_32929 = G__34353;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = function(state_32929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1.call(this,state_32929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_32944 = f__32709__auto__();
(statearr_32944[(6)] = c__32708__auto___34343);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


var c__32708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_32982){
var state_val_32983 = (state_32982[(1)]);
if((state_val_32983 === (7))){
var inst_32978 = (state_32982[(2)]);
var state_32982__$1 = state_32982;
var statearr_32984_34354 = state_32982__$1;
(statearr_32984_34354[(2)] = inst_32978);

(statearr_32984_34354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (20))){
var state_32982__$1 = state_32982;
var statearr_32985_34355 = state_32982__$1;
(statearr_32985_34355[(2)] = null);

(statearr_32985_34355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (1))){
var state_32982__$1 = state_32982;
var statearr_32986_34356 = state_32982__$1;
(statearr_32986_34356[(2)] = null);

(statearr_32986_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (4))){
var inst_32947 = (state_32982[(7)]);
var inst_32947__$1 = (state_32982[(2)]);
var inst_32948 = (inst_32947__$1 == null);
var state_32982__$1 = (function (){var statearr_32987 = state_32982;
(statearr_32987[(7)] = inst_32947__$1);

return statearr_32987;
})();
if(cljs.core.truth_(inst_32948)){
var statearr_32988_34357 = state_32982__$1;
(statearr_32988_34357[(1)] = (5));

} else {
var statearr_32989_34358 = state_32982__$1;
(statearr_32989_34358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (15))){
var inst_32960 = (state_32982[(8)]);
var state_32982__$1 = state_32982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32982__$1,(18),to,inst_32960);
} else {
if((state_val_32983 === (21))){
var inst_32973 = (state_32982[(2)]);
var state_32982__$1 = state_32982;
var statearr_32990_34359 = state_32982__$1;
(statearr_32990_34359[(2)] = inst_32973);

(statearr_32990_34359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (13))){
var inst_32975 = (state_32982[(2)]);
var state_32982__$1 = (function (){var statearr_32991 = state_32982;
(statearr_32991[(9)] = inst_32975);

return statearr_32991;
})();
var statearr_32992_34360 = state_32982__$1;
(statearr_32992_34360[(2)] = null);

(statearr_32992_34360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (6))){
var inst_32947 = (state_32982[(7)]);
var state_32982__$1 = state_32982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32982__$1,(11),inst_32947);
} else {
if((state_val_32983 === (17))){
var inst_32968 = (state_32982[(2)]);
var state_32982__$1 = state_32982;
if(cljs.core.truth_(inst_32968)){
var statearr_32993_34361 = state_32982__$1;
(statearr_32993_34361[(1)] = (19));

} else {
var statearr_32994_34362 = state_32982__$1;
(statearr_32994_34362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (3))){
var inst_32980 = (state_32982[(2)]);
var state_32982__$1 = state_32982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32982__$1,inst_32980);
} else {
if((state_val_32983 === (12))){
var inst_32957 = (state_32982[(10)]);
var state_32982__$1 = state_32982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32982__$1,(14),inst_32957);
} else {
if((state_val_32983 === (2))){
var state_32982__$1 = state_32982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32982__$1,(4),results);
} else {
if((state_val_32983 === (19))){
var state_32982__$1 = state_32982;
var statearr_32995_34363 = state_32982__$1;
(statearr_32995_34363[(2)] = null);

(statearr_32995_34363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (11))){
var inst_32957 = (state_32982[(2)]);
var state_32982__$1 = (function (){var statearr_32996 = state_32982;
(statearr_32996[(10)] = inst_32957);

return statearr_32996;
})();
var statearr_32997_34364 = state_32982__$1;
(statearr_32997_34364[(2)] = null);

(statearr_32997_34364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (9))){
var state_32982__$1 = state_32982;
var statearr_32998_34365 = state_32982__$1;
(statearr_32998_34365[(2)] = null);

(statearr_32998_34365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (5))){
var state_32982__$1 = state_32982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32999_34370 = state_32982__$1;
(statearr_32999_34370[(1)] = (8));

} else {
var statearr_33000_34371 = state_32982__$1;
(statearr_33000_34371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (14))){
var inst_32960 = (state_32982[(8)]);
var inst_32960__$1 = (state_32982[(2)]);
var inst_32961 = (inst_32960__$1 == null);
var inst_32962 = cljs.core.not(inst_32961);
var state_32982__$1 = (function (){var statearr_33001 = state_32982;
(statearr_33001[(8)] = inst_32960__$1);

return statearr_33001;
})();
if(inst_32962){
var statearr_33002_34372 = state_32982__$1;
(statearr_33002_34372[(1)] = (15));

} else {
var statearr_33003_34373 = state_32982__$1;
(statearr_33003_34373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (16))){
var state_32982__$1 = state_32982;
var statearr_33004_34374 = state_32982__$1;
(statearr_33004_34374[(2)] = false);

(statearr_33004_34374[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (10))){
var inst_32954 = (state_32982[(2)]);
var state_32982__$1 = state_32982;
var statearr_33005_34376 = state_32982__$1;
(statearr_33005_34376[(2)] = inst_32954);

(statearr_33005_34376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (18))){
var inst_32965 = (state_32982[(2)]);
var state_32982__$1 = state_32982;
var statearr_33006_34378 = state_32982__$1;
(statearr_33006_34378[(2)] = inst_32965);

(statearr_33006_34378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32983 === (8))){
var inst_32951 = cljs.core.async.close_BANG_(to);
var state_32982__$1 = state_32982;
var statearr_33007_34379 = state_32982__$1;
(statearr_33007_34379[(2)] = inst_32951);

(statearr_33007_34379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0 = (function (){
var statearr_33008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__);

(statearr_33008[(1)] = (1));

return statearr_33008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1 = (function (state_32982){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_32982);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33009){if((e33009 instanceof Object)){
var ex__32620__auto__ = e33009;
var statearr_33010_34380 = state_32982;
(statearr_33010_34380[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34381 = state_32982;
state_32982 = G__34381;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__ = function(state_32982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1.call(this,state_32982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33011 = f__32709__auto__();
(statearr_33011[(6)] = c__32708__auto__);

return statearr_33011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));

return c__32708__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33013 = arguments.length;
switch (G__33013) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33015 = arguments.length;
switch (G__33015) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33017 = arguments.length;
switch (G__33017) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32708__auto___34392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33043){
var state_val_33044 = (state_33043[(1)]);
if((state_val_33044 === (7))){
var inst_33039 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33045_34393 = state_33043__$1;
(statearr_33045_34393[(2)] = inst_33039);

(statearr_33045_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (1))){
var state_33043__$1 = state_33043;
var statearr_33046_34395 = state_33043__$1;
(statearr_33046_34395[(2)] = null);

(statearr_33046_34395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (4))){
var inst_33020 = (state_33043[(7)]);
var inst_33020__$1 = (state_33043[(2)]);
var inst_33021 = (inst_33020__$1 == null);
var state_33043__$1 = (function (){var statearr_33047 = state_33043;
(statearr_33047[(7)] = inst_33020__$1);

return statearr_33047;
})();
if(cljs.core.truth_(inst_33021)){
var statearr_33048_34398 = state_33043__$1;
(statearr_33048_34398[(1)] = (5));

} else {
var statearr_33049_34400 = state_33043__$1;
(statearr_33049_34400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (13))){
var state_33043__$1 = state_33043;
var statearr_33050_34401 = state_33043__$1;
(statearr_33050_34401[(2)] = null);

(statearr_33050_34401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (6))){
var inst_33020 = (state_33043[(7)]);
var inst_33026 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33020) : p.call(null,inst_33020));
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33026)){
var statearr_33051_34402 = state_33043__$1;
(statearr_33051_34402[(1)] = (9));

} else {
var statearr_33052_34403 = state_33043__$1;
(statearr_33052_34403[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (3))){
var inst_33041 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33043__$1,inst_33041);
} else {
if((state_val_33044 === (12))){
var state_33043__$1 = state_33043;
var statearr_33053_34404 = state_33043__$1;
(statearr_33053_34404[(2)] = null);

(statearr_33053_34404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (2))){
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33043__$1,(4),ch);
} else {
if((state_val_33044 === (11))){
var inst_33020 = (state_33043[(7)]);
var inst_33030 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33043__$1,(8),inst_33030,inst_33020);
} else {
if((state_val_33044 === (9))){
var state_33043__$1 = state_33043;
var statearr_33054_34405 = state_33043__$1;
(statearr_33054_34405[(2)] = tc);

(statearr_33054_34405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (5))){
var inst_33023 = cljs.core.async.close_BANG_(tc);
var inst_33024 = cljs.core.async.close_BANG_(fc);
var state_33043__$1 = (function (){var statearr_33055 = state_33043;
(statearr_33055[(8)] = inst_33023);

return statearr_33055;
})();
var statearr_33056_34406 = state_33043__$1;
(statearr_33056_34406[(2)] = inst_33024);

(statearr_33056_34406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (14))){
var inst_33037 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33057_34408 = state_33043__$1;
(statearr_33057_34408[(2)] = inst_33037);

(statearr_33057_34408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (10))){
var state_33043__$1 = state_33043;
var statearr_33058_34410 = state_33043__$1;
(statearr_33058_34410[(2)] = fc);

(statearr_33058_34410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (8))){
var inst_33032 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33032)){
var statearr_33059_34411 = state_33043__$1;
(statearr_33059_34411[(1)] = (12));

} else {
var statearr_33060_34412 = state_33043__$1;
(statearr_33060_34412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33061 = [null,null,null,null,null,null,null,null,null];
(statearr_33061[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33061[(1)] = (1));

return statearr_33061;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33043){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33043);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33062){if((e33062 instanceof Object)){
var ex__32620__auto__ = e33062;
var statearr_33063_34413 = state_33043;
(statearr_33063_34413[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34414 = state_33043;
state_33043 = G__34414;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33064 = f__32709__auto__();
(statearr_33064[(6)] = c__32708__auto___34392);

return statearr_33064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33085){
var state_val_33086 = (state_33085[(1)]);
if((state_val_33086 === (7))){
var inst_33081 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33087_34417 = state_33085__$1;
(statearr_33087_34417[(2)] = inst_33081);

(statearr_33087_34417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (1))){
var inst_33065 = init;
var state_33085__$1 = (function (){var statearr_33088 = state_33085;
(statearr_33088[(7)] = inst_33065);

return statearr_33088;
})();
var statearr_33089_34418 = state_33085__$1;
(statearr_33089_34418[(2)] = null);

(statearr_33089_34418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (4))){
var inst_33068 = (state_33085[(8)]);
var inst_33068__$1 = (state_33085[(2)]);
var inst_33069 = (inst_33068__$1 == null);
var state_33085__$1 = (function (){var statearr_33090 = state_33085;
(statearr_33090[(8)] = inst_33068__$1);

return statearr_33090;
})();
if(cljs.core.truth_(inst_33069)){
var statearr_33091_34419 = state_33085__$1;
(statearr_33091_34419[(1)] = (5));

} else {
var statearr_33092_34420 = state_33085__$1;
(statearr_33092_34420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (6))){
var inst_33065 = (state_33085[(7)]);
var inst_33068 = (state_33085[(8)]);
var inst_33072 = (state_33085[(9)]);
var inst_33072__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33065,inst_33068) : f.call(null,inst_33065,inst_33068));
var inst_33073 = cljs.core.reduced_QMARK_(inst_33072__$1);
var state_33085__$1 = (function (){var statearr_33093 = state_33085;
(statearr_33093[(9)] = inst_33072__$1);

return statearr_33093;
})();
if(inst_33073){
var statearr_33094_34421 = state_33085__$1;
(statearr_33094_34421[(1)] = (8));

} else {
var statearr_33095_34422 = state_33085__$1;
(statearr_33095_34422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (3))){
var inst_33083 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33085__$1,inst_33083);
} else {
if((state_val_33086 === (2))){
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33085__$1,(4),ch);
} else {
if((state_val_33086 === (9))){
var inst_33072 = (state_33085[(9)]);
var inst_33065 = inst_33072;
var state_33085__$1 = (function (){var statearr_33096 = state_33085;
(statearr_33096[(7)] = inst_33065);

return statearr_33096;
})();
var statearr_33097_34423 = state_33085__$1;
(statearr_33097_34423[(2)] = null);

(statearr_33097_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (5))){
var inst_33065 = (state_33085[(7)]);
var state_33085__$1 = state_33085;
var statearr_33098_34424 = state_33085__$1;
(statearr_33098_34424[(2)] = inst_33065);

(statearr_33098_34424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (10))){
var inst_33079 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33099_34425 = state_33085__$1;
(statearr_33099_34425[(2)] = inst_33079);

(statearr_33099_34425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (8))){
var inst_33072 = (state_33085[(9)]);
var inst_33075 = cljs.core.deref(inst_33072);
var state_33085__$1 = state_33085;
var statearr_33100_34427 = state_33085__$1;
(statearr_33100_34427[(2)] = inst_33075);

(statearr_33100_34427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32617__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32617__auto____0 = (function (){
var statearr_33101 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33101[(0)] = cljs$core$async$reduce_$_state_machine__32617__auto__);

(statearr_33101[(1)] = (1));

return statearr_33101;
});
var cljs$core$async$reduce_$_state_machine__32617__auto____1 = (function (state_33085){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33085);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33102){if((e33102 instanceof Object)){
var ex__32620__auto__ = e33102;
var statearr_33103_34429 = state_33085;
(statearr_33103_34429[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34430 = state_33085;
state_33085 = G__34430;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32617__auto__ = function(state_33085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32617__auto____1.call(this,state_33085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32617__auto____0;
cljs$core$async$reduce_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32617__auto____1;
return cljs$core$async$reduce_$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33104 = f__32709__auto__();
(statearr_33104[(6)] = c__32708__auto__);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));

return c__32708__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (1))){
var inst_33105 = cljs.core.async.reduce(f__$1,init,ch);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33110__$1,(2),inst_33105);
} else {
if((state_val_33111 === (2))){
var inst_33107 = (state_33110[(2)]);
var inst_33108 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33107) : f__$1.call(null,inst_33107));
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33110__$1,inst_33108);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32617__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32617__auto____0 = (function (){
var statearr_33112 = [null,null,null,null,null,null,null];
(statearr_33112[(0)] = cljs$core$async$transduce_$_state_machine__32617__auto__);

(statearr_33112[(1)] = (1));

return statearr_33112;
});
var cljs$core$async$transduce_$_state_machine__32617__auto____1 = (function (state_33110){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33110);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33113){if((e33113 instanceof Object)){
var ex__32620__auto__ = e33113;
var statearr_33114_34431 = state_33110;
(statearr_33114_34431[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_33110;
state_33110 = G__34432;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32617__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32617__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32617__auto____0;
cljs$core$async$transduce_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32617__auto____1;
return cljs$core$async$transduce_$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33115 = f__32709__auto__();
(statearr_33115[(6)] = c__32708__auto__);

return statearr_33115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));

return c__32708__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33117 = arguments.length;
switch (G__33117) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33142){
var state_val_33143 = (state_33142[(1)]);
if((state_val_33143 === (7))){
var inst_33124 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33144_34434 = state_33142__$1;
(statearr_33144_34434[(2)] = inst_33124);

(statearr_33144_34434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (1))){
var inst_33118 = cljs.core.seq(coll);
var inst_33119 = inst_33118;
var state_33142__$1 = (function (){var statearr_33145 = state_33142;
(statearr_33145[(7)] = inst_33119);

return statearr_33145;
})();
var statearr_33146_34435 = state_33142__$1;
(statearr_33146_34435[(2)] = null);

(statearr_33146_34435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (4))){
var inst_33119 = (state_33142[(7)]);
var inst_33122 = cljs.core.first(inst_33119);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33142__$1,(7),ch,inst_33122);
} else {
if((state_val_33143 === (13))){
var inst_33136 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33147_34436 = state_33142__$1;
(statearr_33147_34436[(2)] = inst_33136);

(statearr_33147_34436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (6))){
var inst_33127 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33127)){
var statearr_33148_34437 = state_33142__$1;
(statearr_33148_34437[(1)] = (8));

} else {
var statearr_33149_34438 = state_33142__$1;
(statearr_33149_34438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (3))){
var inst_33140 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33142__$1,inst_33140);
} else {
if((state_val_33143 === (12))){
var state_33142__$1 = state_33142;
var statearr_33150_34439 = state_33142__$1;
(statearr_33150_34439[(2)] = null);

(statearr_33150_34439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (2))){
var inst_33119 = (state_33142[(7)]);
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33119)){
var statearr_33151_34440 = state_33142__$1;
(statearr_33151_34440[(1)] = (4));

} else {
var statearr_33152_34441 = state_33142__$1;
(statearr_33152_34441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (11))){
var inst_33133 = cljs.core.async.close_BANG_(ch);
var state_33142__$1 = state_33142;
var statearr_33153_34442 = state_33142__$1;
(statearr_33153_34442[(2)] = inst_33133);

(statearr_33153_34442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (9))){
var state_33142__$1 = state_33142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33154_34443 = state_33142__$1;
(statearr_33154_34443[(1)] = (11));

} else {
var statearr_33155_34444 = state_33142__$1;
(statearr_33155_34444[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (5))){
var inst_33119 = (state_33142[(7)]);
var state_33142__$1 = state_33142;
var statearr_33156_34447 = state_33142__$1;
(statearr_33156_34447[(2)] = inst_33119);

(statearr_33156_34447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (10))){
var inst_33138 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33157_34448 = state_33142__$1;
(statearr_33157_34448[(2)] = inst_33138);

(statearr_33157_34448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (8))){
var inst_33119 = (state_33142[(7)]);
var inst_33129 = cljs.core.next(inst_33119);
var inst_33119__$1 = inst_33129;
var state_33142__$1 = (function (){var statearr_33158 = state_33142;
(statearr_33158[(7)] = inst_33119__$1);

return statearr_33158;
})();
var statearr_33159_34449 = state_33142__$1;
(statearr_33159_34449[(2)] = null);

(statearr_33159_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33160 = [null,null,null,null,null,null,null,null];
(statearr_33160[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33160[(1)] = (1));

return statearr_33160;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33142){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33142);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33161){if((e33161 instanceof Object)){
var ex__32620__auto__ = e33161;
var statearr_33162_34450 = state_33142;
(statearr_33162_34450[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34451 = state_33142;
state_33142 = G__34451;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33163 = f__32709__auto__();
(statearr_33163[(6)] = c__32708__auto__);

return statearr_33163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));

return c__32708__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33164 = (function (ch,cs,meta33165){
this.ch = ch;
this.cs = cs;
this.meta33165 = meta33165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33166,meta33165__$1){
var self__ = this;
var _33166__$1 = this;
return (new cljs.core.async.t_cljs$core$async33164(self__.ch,self__.cs,meta33165__$1));
}));

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33166){
var self__ = this;
var _33166__$1 = this;
return self__.meta33165;
}));

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33164.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33165","meta33165",-54500903,null)], null);
}));

(cljs.core.async.t_cljs$core$async33164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33164");

(cljs.core.async.t_cljs$core$async33164.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33164.
 */
cljs.core.async.__GT_t_cljs$core$async33164 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33164(ch__$1,cs__$1,meta33165){
return (new cljs.core.async.t_cljs$core$async33164(ch__$1,cs__$1,meta33165));
});

}

return (new cljs.core.async.t_cljs$core$async33164(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32708__auto___34457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33299){
var state_val_33300 = (state_33299[(1)]);
if((state_val_33300 === (7))){
var inst_33295 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33301_34458 = state_33299__$1;
(statearr_33301_34458[(2)] = inst_33295);

(statearr_33301_34458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (20))){
var inst_33200 = (state_33299[(7)]);
var inst_33212 = cljs.core.first(inst_33200);
var inst_33213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33212,(0),null);
var inst_33214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33212,(1),null);
var state_33299__$1 = (function (){var statearr_33302 = state_33299;
(statearr_33302[(8)] = inst_33213);

return statearr_33302;
})();
if(cljs.core.truth_(inst_33214)){
var statearr_33303_34460 = state_33299__$1;
(statearr_33303_34460[(1)] = (22));

} else {
var statearr_33304_34462 = state_33299__$1;
(statearr_33304_34462[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (27))){
var inst_33249 = (state_33299[(9)]);
var inst_33169 = (state_33299[(10)]);
var inst_33244 = (state_33299[(11)]);
var inst_33242 = (state_33299[(12)]);
var inst_33249__$1 = cljs.core._nth(inst_33242,inst_33244);
var inst_33250 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33249__$1,inst_33169,done);
var state_33299__$1 = (function (){var statearr_33305 = state_33299;
(statearr_33305[(9)] = inst_33249__$1);

return statearr_33305;
})();
if(cljs.core.truth_(inst_33250)){
var statearr_33306_34463 = state_33299__$1;
(statearr_33306_34463[(1)] = (30));

} else {
var statearr_33307_34464 = state_33299__$1;
(statearr_33307_34464[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (1))){
var state_33299__$1 = state_33299;
var statearr_33308_34465 = state_33299__$1;
(statearr_33308_34465[(2)] = null);

(statearr_33308_34465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (24))){
var inst_33200 = (state_33299[(7)]);
var inst_33219 = (state_33299[(2)]);
var inst_33220 = cljs.core.next(inst_33200);
var inst_33178 = inst_33220;
var inst_33179 = null;
var inst_33180 = (0);
var inst_33181 = (0);
var state_33299__$1 = (function (){var statearr_33309 = state_33299;
(statearr_33309[(13)] = inst_33179);

(statearr_33309[(14)] = inst_33178);

(statearr_33309[(15)] = inst_33181);

(statearr_33309[(16)] = inst_33219);

(statearr_33309[(17)] = inst_33180);

return statearr_33309;
})();
var statearr_33310_34466 = state_33299__$1;
(statearr_33310_34466[(2)] = null);

(statearr_33310_34466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (39))){
var state_33299__$1 = state_33299;
var statearr_33314_34467 = state_33299__$1;
(statearr_33314_34467[(2)] = null);

(statearr_33314_34467[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (4))){
var inst_33169 = (state_33299[(10)]);
var inst_33169__$1 = (state_33299[(2)]);
var inst_33170 = (inst_33169__$1 == null);
var state_33299__$1 = (function (){var statearr_33315 = state_33299;
(statearr_33315[(10)] = inst_33169__$1);

return statearr_33315;
})();
if(cljs.core.truth_(inst_33170)){
var statearr_33316_34468 = state_33299__$1;
(statearr_33316_34468[(1)] = (5));

} else {
var statearr_33317_34469 = state_33299__$1;
(statearr_33317_34469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (15))){
var inst_33179 = (state_33299[(13)]);
var inst_33178 = (state_33299[(14)]);
var inst_33181 = (state_33299[(15)]);
var inst_33180 = (state_33299[(17)]);
var inst_33196 = (state_33299[(2)]);
var inst_33197 = (inst_33181 + (1));
var tmp33311 = inst_33179;
var tmp33312 = inst_33178;
var tmp33313 = inst_33180;
var inst_33178__$1 = tmp33312;
var inst_33179__$1 = tmp33311;
var inst_33180__$1 = tmp33313;
var inst_33181__$1 = inst_33197;
var state_33299__$1 = (function (){var statearr_33318 = state_33299;
(statearr_33318[(13)] = inst_33179__$1);

(statearr_33318[(14)] = inst_33178__$1);

(statearr_33318[(18)] = inst_33196);

(statearr_33318[(15)] = inst_33181__$1);

(statearr_33318[(17)] = inst_33180__$1);

return statearr_33318;
})();
var statearr_33319_34477 = state_33299__$1;
(statearr_33319_34477[(2)] = null);

(statearr_33319_34477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (21))){
var inst_33223 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33323_34478 = state_33299__$1;
(statearr_33323_34478[(2)] = inst_33223);

(statearr_33323_34478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (31))){
var inst_33249 = (state_33299[(9)]);
var inst_33253 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33249);
var state_33299__$1 = state_33299;
var statearr_33324_34479 = state_33299__$1;
(statearr_33324_34479[(2)] = inst_33253);

(statearr_33324_34479[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (32))){
var inst_33243 = (state_33299[(19)]);
var inst_33241 = (state_33299[(20)]);
var inst_33244 = (state_33299[(11)]);
var inst_33242 = (state_33299[(12)]);
var inst_33255 = (state_33299[(2)]);
var inst_33256 = (inst_33244 + (1));
var tmp33320 = inst_33243;
var tmp33321 = inst_33241;
var tmp33322 = inst_33242;
var inst_33241__$1 = tmp33321;
var inst_33242__$1 = tmp33322;
var inst_33243__$1 = tmp33320;
var inst_33244__$1 = inst_33256;
var state_33299__$1 = (function (){var statearr_33325 = state_33299;
(statearr_33325[(21)] = inst_33255);

(statearr_33325[(19)] = inst_33243__$1);

(statearr_33325[(20)] = inst_33241__$1);

(statearr_33325[(11)] = inst_33244__$1);

(statearr_33325[(12)] = inst_33242__$1);

return statearr_33325;
})();
var statearr_33326_34486 = state_33299__$1;
(statearr_33326_34486[(2)] = null);

(statearr_33326_34486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (40))){
var inst_33268 = (state_33299[(22)]);
var inst_33272 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33268);
var state_33299__$1 = state_33299;
var statearr_33327_34487 = state_33299__$1;
(statearr_33327_34487[(2)] = inst_33272);

(statearr_33327_34487[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (33))){
var inst_33259 = (state_33299[(23)]);
var inst_33261 = cljs.core.chunked_seq_QMARK_(inst_33259);
var state_33299__$1 = state_33299;
if(inst_33261){
var statearr_33328_34488 = state_33299__$1;
(statearr_33328_34488[(1)] = (36));

} else {
var statearr_33329_34492 = state_33299__$1;
(statearr_33329_34492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (13))){
var inst_33190 = (state_33299[(24)]);
var inst_33193 = cljs.core.async.close_BANG_(inst_33190);
var state_33299__$1 = state_33299;
var statearr_33330_34493 = state_33299__$1;
(statearr_33330_34493[(2)] = inst_33193);

(statearr_33330_34493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (22))){
var inst_33213 = (state_33299[(8)]);
var inst_33216 = cljs.core.async.close_BANG_(inst_33213);
var state_33299__$1 = state_33299;
var statearr_33331_34494 = state_33299__$1;
(statearr_33331_34494[(2)] = inst_33216);

(statearr_33331_34494[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (36))){
var inst_33259 = (state_33299[(23)]);
var inst_33263 = cljs.core.chunk_first(inst_33259);
var inst_33264 = cljs.core.chunk_rest(inst_33259);
var inst_33265 = cljs.core.count(inst_33263);
var inst_33241 = inst_33264;
var inst_33242 = inst_33263;
var inst_33243 = inst_33265;
var inst_33244 = (0);
var state_33299__$1 = (function (){var statearr_33332 = state_33299;
(statearr_33332[(19)] = inst_33243);

(statearr_33332[(20)] = inst_33241);

(statearr_33332[(11)] = inst_33244);

(statearr_33332[(12)] = inst_33242);

return statearr_33332;
})();
var statearr_33333_34502 = state_33299__$1;
(statearr_33333_34502[(2)] = null);

(statearr_33333_34502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (41))){
var inst_33259 = (state_33299[(23)]);
var inst_33274 = (state_33299[(2)]);
var inst_33275 = cljs.core.next(inst_33259);
var inst_33241 = inst_33275;
var inst_33242 = null;
var inst_33243 = (0);
var inst_33244 = (0);
var state_33299__$1 = (function (){var statearr_33334 = state_33299;
(statearr_33334[(25)] = inst_33274);

(statearr_33334[(19)] = inst_33243);

(statearr_33334[(20)] = inst_33241);

(statearr_33334[(11)] = inst_33244);

(statearr_33334[(12)] = inst_33242);

return statearr_33334;
})();
var statearr_33335_34503 = state_33299__$1;
(statearr_33335_34503[(2)] = null);

(statearr_33335_34503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (43))){
var state_33299__$1 = state_33299;
var statearr_33336_34504 = state_33299__$1;
(statearr_33336_34504[(2)] = null);

(statearr_33336_34504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (29))){
var inst_33283 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33337_34505 = state_33299__$1;
(statearr_33337_34505[(2)] = inst_33283);

(statearr_33337_34505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (44))){
var inst_33292 = (state_33299[(2)]);
var state_33299__$1 = (function (){var statearr_33338 = state_33299;
(statearr_33338[(26)] = inst_33292);

return statearr_33338;
})();
var statearr_33339_34506 = state_33299__$1;
(statearr_33339_34506[(2)] = null);

(statearr_33339_34506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (6))){
var inst_33233 = (state_33299[(27)]);
var inst_33232 = cljs.core.deref(cs);
var inst_33233__$1 = cljs.core.keys(inst_33232);
var inst_33234 = cljs.core.count(inst_33233__$1);
var inst_33235 = cljs.core.reset_BANG_(dctr,inst_33234);
var inst_33240 = cljs.core.seq(inst_33233__$1);
var inst_33241 = inst_33240;
var inst_33242 = null;
var inst_33243 = (0);
var inst_33244 = (0);
var state_33299__$1 = (function (){var statearr_33340 = state_33299;
(statearr_33340[(27)] = inst_33233__$1);

(statearr_33340[(19)] = inst_33243);

(statearr_33340[(28)] = inst_33235);

(statearr_33340[(20)] = inst_33241);

(statearr_33340[(11)] = inst_33244);

(statearr_33340[(12)] = inst_33242);

return statearr_33340;
})();
var statearr_33341_34507 = state_33299__$1;
(statearr_33341_34507[(2)] = null);

(statearr_33341_34507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (28))){
var inst_33259 = (state_33299[(23)]);
var inst_33241 = (state_33299[(20)]);
var inst_33259__$1 = cljs.core.seq(inst_33241);
var state_33299__$1 = (function (){var statearr_33342 = state_33299;
(statearr_33342[(23)] = inst_33259__$1);

return statearr_33342;
})();
if(inst_33259__$1){
var statearr_33343_34508 = state_33299__$1;
(statearr_33343_34508[(1)] = (33));

} else {
var statearr_33344_34509 = state_33299__$1;
(statearr_33344_34509[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (25))){
var inst_33243 = (state_33299[(19)]);
var inst_33244 = (state_33299[(11)]);
var inst_33246 = (inst_33244 < inst_33243);
var inst_33247 = inst_33246;
var state_33299__$1 = state_33299;
if(cljs.core.truth_(inst_33247)){
var statearr_33345_34510 = state_33299__$1;
(statearr_33345_34510[(1)] = (27));

} else {
var statearr_33346_34511 = state_33299__$1;
(statearr_33346_34511[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (34))){
var state_33299__$1 = state_33299;
var statearr_33347_34512 = state_33299__$1;
(statearr_33347_34512[(2)] = null);

(statearr_33347_34512[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (17))){
var state_33299__$1 = state_33299;
var statearr_33348_34513 = state_33299__$1;
(statearr_33348_34513[(2)] = null);

(statearr_33348_34513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (3))){
var inst_33297 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33299__$1,inst_33297);
} else {
if((state_val_33300 === (12))){
var inst_33228 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33349_34517 = state_33299__$1;
(statearr_33349_34517[(2)] = inst_33228);

(statearr_33349_34517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (2))){
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33299__$1,(4),ch);
} else {
if((state_val_33300 === (23))){
var state_33299__$1 = state_33299;
var statearr_33350_34521 = state_33299__$1;
(statearr_33350_34521[(2)] = null);

(statearr_33350_34521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (35))){
var inst_33281 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33351_34522 = state_33299__$1;
(statearr_33351_34522[(2)] = inst_33281);

(statearr_33351_34522[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (19))){
var inst_33200 = (state_33299[(7)]);
var inst_33204 = cljs.core.chunk_first(inst_33200);
var inst_33205 = cljs.core.chunk_rest(inst_33200);
var inst_33206 = cljs.core.count(inst_33204);
var inst_33178 = inst_33205;
var inst_33179 = inst_33204;
var inst_33180 = inst_33206;
var inst_33181 = (0);
var state_33299__$1 = (function (){var statearr_33352 = state_33299;
(statearr_33352[(13)] = inst_33179);

(statearr_33352[(14)] = inst_33178);

(statearr_33352[(15)] = inst_33181);

(statearr_33352[(17)] = inst_33180);

return statearr_33352;
})();
var statearr_33353_34526 = state_33299__$1;
(statearr_33353_34526[(2)] = null);

(statearr_33353_34526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (11))){
var inst_33178 = (state_33299[(14)]);
var inst_33200 = (state_33299[(7)]);
var inst_33200__$1 = cljs.core.seq(inst_33178);
var state_33299__$1 = (function (){var statearr_33354 = state_33299;
(statearr_33354[(7)] = inst_33200__$1);

return statearr_33354;
})();
if(inst_33200__$1){
var statearr_33355_34527 = state_33299__$1;
(statearr_33355_34527[(1)] = (16));

} else {
var statearr_33356_34528 = state_33299__$1;
(statearr_33356_34528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (9))){
var inst_33230 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33357_34529 = state_33299__$1;
(statearr_33357_34529[(2)] = inst_33230);

(statearr_33357_34529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (5))){
var inst_33176 = cljs.core.deref(cs);
var inst_33177 = cljs.core.seq(inst_33176);
var inst_33178 = inst_33177;
var inst_33179 = null;
var inst_33180 = (0);
var inst_33181 = (0);
var state_33299__$1 = (function (){var statearr_33358 = state_33299;
(statearr_33358[(13)] = inst_33179);

(statearr_33358[(14)] = inst_33178);

(statearr_33358[(15)] = inst_33181);

(statearr_33358[(17)] = inst_33180);

return statearr_33358;
})();
var statearr_33359_34531 = state_33299__$1;
(statearr_33359_34531[(2)] = null);

(statearr_33359_34531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (14))){
var state_33299__$1 = state_33299;
var statearr_33360_34532 = state_33299__$1;
(statearr_33360_34532[(2)] = null);

(statearr_33360_34532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (45))){
var inst_33289 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33361_34533 = state_33299__$1;
(statearr_33361_34533[(2)] = inst_33289);

(statearr_33361_34533[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (26))){
var inst_33233 = (state_33299[(27)]);
var inst_33285 = (state_33299[(2)]);
var inst_33286 = cljs.core.seq(inst_33233);
var state_33299__$1 = (function (){var statearr_33362 = state_33299;
(statearr_33362[(29)] = inst_33285);

return statearr_33362;
})();
if(inst_33286){
var statearr_33363_34534 = state_33299__$1;
(statearr_33363_34534[(1)] = (42));

} else {
var statearr_33364_34535 = state_33299__$1;
(statearr_33364_34535[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (16))){
var inst_33200 = (state_33299[(7)]);
var inst_33202 = cljs.core.chunked_seq_QMARK_(inst_33200);
var state_33299__$1 = state_33299;
if(inst_33202){
var statearr_33365_34536 = state_33299__$1;
(statearr_33365_34536[(1)] = (19));

} else {
var statearr_33366_34537 = state_33299__$1;
(statearr_33366_34537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (38))){
var inst_33278 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33367_34538 = state_33299__$1;
(statearr_33367_34538[(2)] = inst_33278);

(statearr_33367_34538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (30))){
var state_33299__$1 = state_33299;
var statearr_33368_34539 = state_33299__$1;
(statearr_33368_34539[(2)] = null);

(statearr_33368_34539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (10))){
var inst_33179 = (state_33299[(13)]);
var inst_33181 = (state_33299[(15)]);
var inst_33189 = cljs.core._nth(inst_33179,inst_33181);
var inst_33190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33189,(0),null);
var inst_33191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33189,(1),null);
var state_33299__$1 = (function (){var statearr_33369 = state_33299;
(statearr_33369[(24)] = inst_33190);

return statearr_33369;
})();
if(cljs.core.truth_(inst_33191)){
var statearr_33370_34540 = state_33299__$1;
(statearr_33370_34540[(1)] = (13));

} else {
var statearr_33371_34541 = state_33299__$1;
(statearr_33371_34541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (18))){
var inst_33226 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33372_34542 = state_33299__$1;
(statearr_33372_34542[(2)] = inst_33226);

(statearr_33372_34542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (42))){
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33299__$1,(45),dchan);
} else {
if((state_val_33300 === (37))){
var inst_33169 = (state_33299[(10)]);
var inst_33259 = (state_33299[(23)]);
var inst_33268 = (state_33299[(22)]);
var inst_33268__$1 = cljs.core.first(inst_33259);
var inst_33269 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33268__$1,inst_33169,done);
var state_33299__$1 = (function (){var statearr_33373 = state_33299;
(statearr_33373[(22)] = inst_33268__$1);

return statearr_33373;
})();
if(cljs.core.truth_(inst_33269)){
var statearr_33374_34543 = state_33299__$1;
(statearr_33374_34543[(1)] = (39));

} else {
var statearr_33375_34544 = state_33299__$1;
(statearr_33375_34544[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (8))){
var inst_33181 = (state_33299[(15)]);
var inst_33180 = (state_33299[(17)]);
var inst_33183 = (inst_33181 < inst_33180);
var inst_33184 = inst_33183;
var state_33299__$1 = state_33299;
if(cljs.core.truth_(inst_33184)){
var statearr_33376_34545 = state_33299__$1;
(statearr_33376_34545[(1)] = (10));

} else {
var statearr_33377_34546 = state_33299__$1;
(statearr_33377_34546[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32617__auto__ = null;
var cljs$core$async$mult_$_state_machine__32617__auto____0 = (function (){
var statearr_33378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33378[(0)] = cljs$core$async$mult_$_state_machine__32617__auto__);

(statearr_33378[(1)] = (1));

return statearr_33378;
});
var cljs$core$async$mult_$_state_machine__32617__auto____1 = (function (state_33299){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33299);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33379){if((e33379 instanceof Object)){
var ex__32620__auto__ = e33379;
var statearr_33380_34547 = state_33299;
(statearr_33380_34547[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_33299;
state_33299 = G__34548;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32617__auto__ = function(state_33299){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32617__auto____1.call(this,state_33299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32617__auto____0;
cljs$core$async$mult_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32617__auto____1;
return cljs$core$async$mult_$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33381 = f__32709__auto__();
(statearr_33381[(6)] = c__32708__auto___34457);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33383 = arguments.length;
switch (G__33383) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34559 = arguments.length;
var i__4790__auto___34560 = (0);
while(true){
if((i__4790__auto___34560 < len__4789__auto___34559)){
args__4795__auto__.push((arguments[i__4790__auto___34560]));

var G__34561 = (i__4790__auto___34560 + (1));
i__4790__auto___34560 = G__34561;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33388){
var map__33389 = p__33388;
var map__33389__$1 = (((((!((map__33389 == null))))?(((((map__33389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33389):map__33389);
var opts = map__33389__$1;
var statearr_33391_34562 = state;
(statearr_33391_34562[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33392_34563 = state;
(statearr_33392_34563[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33393_34564 = state;
(statearr_33393_34564[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33384){
var G__33385 = cljs.core.first(seq33384);
var seq33384__$1 = cljs.core.next(seq33384);
var G__33386 = cljs.core.first(seq33384__$1);
var seq33384__$2 = cljs.core.next(seq33384__$1);
var G__33387 = cljs.core.first(seq33384__$2);
var seq33384__$3 = cljs.core.next(seq33384__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33385,G__33386,G__33387,seq33384__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33394 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33395){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33395 = meta33395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33396,meta33395__$1){
var self__ = this;
var _33396__$1 = this;
return (new cljs.core.async.t_cljs$core$async33394(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33395__$1));
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33396){
var self__ = this;
var _33396__$1 = this;
return self__.meta33395;
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33395","meta33395",846664343,null)], null);
}));

(cljs.core.async.t_cljs$core$async33394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33394");

(cljs.core.async.t_cljs$core$async33394.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33394.
 */
cljs.core.async.__GT_t_cljs$core$async33394 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33394(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33395){
return (new cljs.core.async.t_cljs$core$async33394(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33395));
});

}

return (new cljs.core.async.t_cljs$core$async33394(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32708__auto___34592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33498){
var state_val_33499 = (state_33498[(1)]);
if((state_val_33499 === (7))){
var inst_33413 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33500_34593 = state_33498__$1;
(statearr_33500_34593[(2)] = inst_33413);

(statearr_33500_34593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (20))){
var inst_33425 = (state_33498[(7)]);
var state_33498__$1 = state_33498;
var statearr_33501_34594 = state_33498__$1;
(statearr_33501_34594[(2)] = inst_33425);

(statearr_33501_34594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (27))){
var state_33498__$1 = state_33498;
var statearr_33502_34595 = state_33498__$1;
(statearr_33502_34595[(2)] = null);

(statearr_33502_34595[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (1))){
var inst_33400 = (state_33498[(8)]);
var inst_33400__$1 = calc_state();
var inst_33402 = (inst_33400__$1 == null);
var inst_33403 = cljs.core.not(inst_33402);
var state_33498__$1 = (function (){var statearr_33503 = state_33498;
(statearr_33503[(8)] = inst_33400__$1);

return statearr_33503;
})();
if(inst_33403){
var statearr_33504_34596 = state_33498__$1;
(statearr_33504_34596[(1)] = (2));

} else {
var statearr_33505_34597 = state_33498__$1;
(statearr_33505_34597[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (24))){
var inst_33472 = (state_33498[(9)]);
var inst_33449 = (state_33498[(10)]);
var inst_33458 = (state_33498[(11)]);
var inst_33472__$1 = (inst_33449.cljs$core$IFn$_invoke$arity$1 ? inst_33449.cljs$core$IFn$_invoke$arity$1(inst_33458) : inst_33449.call(null,inst_33458));
var state_33498__$1 = (function (){var statearr_33506 = state_33498;
(statearr_33506[(9)] = inst_33472__$1);

return statearr_33506;
})();
if(cljs.core.truth_(inst_33472__$1)){
var statearr_33507_34598 = state_33498__$1;
(statearr_33507_34598[(1)] = (29));

} else {
var statearr_33508_34599 = state_33498__$1;
(statearr_33508_34599[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (4))){
var inst_33416 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33416)){
var statearr_33509_34600 = state_33498__$1;
(statearr_33509_34600[(1)] = (8));

} else {
var statearr_33510_34601 = state_33498__$1;
(statearr_33510_34601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (15))){
var inst_33443 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33443)){
var statearr_33511_34602 = state_33498__$1;
(statearr_33511_34602[(1)] = (19));

} else {
var statearr_33512_34603 = state_33498__$1;
(statearr_33512_34603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (21))){
var inst_33448 = (state_33498[(12)]);
var inst_33448__$1 = (state_33498[(2)]);
var inst_33449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33498__$1 = (function (){var statearr_33513 = state_33498;
(statearr_33513[(10)] = inst_33449);

(statearr_33513[(12)] = inst_33448__$1);

(statearr_33513[(13)] = inst_33450);

return statearr_33513;
})();
return cljs.core.async.ioc_alts_BANG_(state_33498__$1,(22),inst_33451);
} else {
if((state_val_33499 === (31))){
var inst_33480 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33480)){
var statearr_33514_34610 = state_33498__$1;
(statearr_33514_34610[(1)] = (32));

} else {
var statearr_33515_34611 = state_33498__$1;
(statearr_33515_34611[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (32))){
var inst_33457 = (state_33498[(14)]);
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33498__$1,(35),out,inst_33457);
} else {
if((state_val_33499 === (33))){
var inst_33448 = (state_33498[(12)]);
var inst_33425 = inst_33448;
var state_33498__$1 = (function (){var statearr_33516 = state_33498;
(statearr_33516[(7)] = inst_33425);

return statearr_33516;
})();
var statearr_33517_34612 = state_33498__$1;
(statearr_33517_34612[(2)] = null);

(statearr_33517_34612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (13))){
var inst_33425 = (state_33498[(7)]);
var inst_33432 = inst_33425.cljs$lang$protocol_mask$partition0$;
var inst_33433 = (inst_33432 & (64));
var inst_33434 = inst_33425.cljs$core$ISeq$;
var inst_33435 = (cljs.core.PROTOCOL_SENTINEL === inst_33434);
var inst_33436 = ((inst_33433) || (inst_33435));
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33436)){
var statearr_33518_34613 = state_33498__$1;
(statearr_33518_34613[(1)] = (16));

} else {
var statearr_33519_34614 = state_33498__$1;
(statearr_33519_34614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (22))){
var inst_33457 = (state_33498[(14)]);
var inst_33458 = (state_33498[(11)]);
var inst_33456 = (state_33498[(2)]);
var inst_33457__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33456,(0),null);
var inst_33458__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33456,(1),null);
var inst_33459 = (inst_33457__$1 == null);
var inst_33460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33458__$1,change);
var inst_33461 = ((inst_33459) || (inst_33460));
var state_33498__$1 = (function (){var statearr_33520 = state_33498;
(statearr_33520[(14)] = inst_33457__$1);

(statearr_33520[(11)] = inst_33458__$1);

return statearr_33520;
})();
if(cljs.core.truth_(inst_33461)){
var statearr_33521_34621 = state_33498__$1;
(statearr_33521_34621[(1)] = (23));

} else {
var statearr_33522_34622 = state_33498__$1;
(statearr_33522_34622[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (36))){
var inst_33448 = (state_33498[(12)]);
var inst_33425 = inst_33448;
var state_33498__$1 = (function (){var statearr_33523 = state_33498;
(statearr_33523[(7)] = inst_33425);

return statearr_33523;
})();
var statearr_33524_34623 = state_33498__$1;
(statearr_33524_34623[(2)] = null);

(statearr_33524_34623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (29))){
var inst_33472 = (state_33498[(9)]);
var state_33498__$1 = state_33498;
var statearr_33525_34624 = state_33498__$1;
(statearr_33525_34624[(2)] = inst_33472);

(statearr_33525_34624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (6))){
var state_33498__$1 = state_33498;
var statearr_33526_34625 = state_33498__$1;
(statearr_33526_34625[(2)] = false);

(statearr_33526_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (28))){
var inst_33468 = (state_33498[(2)]);
var inst_33469 = calc_state();
var inst_33425 = inst_33469;
var state_33498__$1 = (function (){var statearr_33527 = state_33498;
(statearr_33527[(15)] = inst_33468);

(statearr_33527[(7)] = inst_33425);

return statearr_33527;
})();
var statearr_33528_34626 = state_33498__$1;
(statearr_33528_34626[(2)] = null);

(statearr_33528_34626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (25))){
var inst_33494 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33529_34627 = state_33498__$1;
(statearr_33529_34627[(2)] = inst_33494);

(statearr_33529_34627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (34))){
var inst_33492 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33530_34628 = state_33498__$1;
(statearr_33530_34628[(2)] = inst_33492);

(statearr_33530_34628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (17))){
var state_33498__$1 = state_33498;
var statearr_33531_34629 = state_33498__$1;
(statearr_33531_34629[(2)] = false);

(statearr_33531_34629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (3))){
var state_33498__$1 = state_33498;
var statearr_33532_34630 = state_33498__$1;
(statearr_33532_34630[(2)] = false);

(statearr_33532_34630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (12))){
var inst_33496 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33498__$1,inst_33496);
} else {
if((state_val_33499 === (2))){
var inst_33400 = (state_33498[(8)]);
var inst_33405 = inst_33400.cljs$lang$protocol_mask$partition0$;
var inst_33406 = (inst_33405 & (64));
var inst_33407 = inst_33400.cljs$core$ISeq$;
var inst_33408 = (cljs.core.PROTOCOL_SENTINEL === inst_33407);
var inst_33409 = ((inst_33406) || (inst_33408));
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33409)){
var statearr_33533_34631 = state_33498__$1;
(statearr_33533_34631[(1)] = (5));

} else {
var statearr_33534_34632 = state_33498__$1;
(statearr_33534_34632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (23))){
var inst_33457 = (state_33498[(14)]);
var inst_33463 = (inst_33457 == null);
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33463)){
var statearr_33535_34633 = state_33498__$1;
(statearr_33535_34633[(1)] = (26));

} else {
var statearr_33536_34634 = state_33498__$1;
(statearr_33536_34634[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (35))){
var inst_33483 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33483)){
var statearr_33537_34635 = state_33498__$1;
(statearr_33537_34635[(1)] = (36));

} else {
var statearr_33538_34636 = state_33498__$1;
(statearr_33538_34636[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (19))){
var inst_33425 = (state_33498[(7)]);
var inst_33445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33425);
var state_33498__$1 = state_33498;
var statearr_33539_34637 = state_33498__$1;
(statearr_33539_34637[(2)] = inst_33445);

(statearr_33539_34637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (11))){
var inst_33425 = (state_33498[(7)]);
var inst_33429 = (inst_33425 == null);
var inst_33430 = cljs.core.not(inst_33429);
var state_33498__$1 = state_33498;
if(inst_33430){
var statearr_33540_34638 = state_33498__$1;
(statearr_33540_34638[(1)] = (13));

} else {
var statearr_33541_34639 = state_33498__$1;
(statearr_33541_34639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (9))){
var inst_33400 = (state_33498[(8)]);
var state_33498__$1 = state_33498;
var statearr_33542_34640 = state_33498__$1;
(statearr_33542_34640[(2)] = inst_33400);

(statearr_33542_34640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (5))){
var state_33498__$1 = state_33498;
var statearr_33543_34641 = state_33498__$1;
(statearr_33543_34641[(2)] = true);

(statearr_33543_34641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (14))){
var state_33498__$1 = state_33498;
var statearr_33544_34642 = state_33498__$1;
(statearr_33544_34642[(2)] = false);

(statearr_33544_34642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (26))){
var inst_33458 = (state_33498[(11)]);
var inst_33465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33458);
var state_33498__$1 = state_33498;
var statearr_33545_34643 = state_33498__$1;
(statearr_33545_34643[(2)] = inst_33465);

(statearr_33545_34643[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (16))){
var state_33498__$1 = state_33498;
var statearr_33546_34644 = state_33498__$1;
(statearr_33546_34644[(2)] = true);

(statearr_33546_34644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (38))){
var inst_33488 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33547_34645 = state_33498__$1;
(statearr_33547_34645[(2)] = inst_33488);

(statearr_33547_34645[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (30))){
var inst_33449 = (state_33498[(10)]);
var inst_33450 = (state_33498[(13)]);
var inst_33458 = (state_33498[(11)]);
var inst_33475 = cljs.core.empty_QMARK_(inst_33449);
var inst_33476 = (inst_33450.cljs$core$IFn$_invoke$arity$1 ? inst_33450.cljs$core$IFn$_invoke$arity$1(inst_33458) : inst_33450.call(null,inst_33458));
var inst_33477 = cljs.core.not(inst_33476);
var inst_33478 = ((inst_33475) && (inst_33477));
var state_33498__$1 = state_33498;
var statearr_33548_34651 = state_33498__$1;
(statearr_33548_34651[(2)] = inst_33478);

(statearr_33548_34651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (10))){
var inst_33400 = (state_33498[(8)]);
var inst_33421 = (state_33498[(2)]);
var inst_33422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33425 = inst_33400;
var state_33498__$1 = (function (){var statearr_33549 = state_33498;
(statearr_33549[(7)] = inst_33425);

(statearr_33549[(16)] = inst_33422);

(statearr_33549[(17)] = inst_33424);

(statearr_33549[(18)] = inst_33423);

return statearr_33549;
})();
var statearr_33550_34652 = state_33498__$1;
(statearr_33550_34652[(2)] = null);

(statearr_33550_34652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (18))){
var inst_33440 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33551_34653 = state_33498__$1;
(statearr_33551_34653[(2)] = inst_33440);

(statearr_33551_34653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (37))){
var state_33498__$1 = state_33498;
var statearr_33552_34654 = state_33498__$1;
(statearr_33552_34654[(2)] = null);

(statearr_33552_34654[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (8))){
var inst_33400 = (state_33498[(8)]);
var inst_33418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33400);
var state_33498__$1 = state_33498;
var statearr_33553_34655 = state_33498__$1;
(statearr_33553_34655[(2)] = inst_33418);

(statearr_33553_34655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32617__auto__ = null;
var cljs$core$async$mix_$_state_machine__32617__auto____0 = (function (){
var statearr_33554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33554[(0)] = cljs$core$async$mix_$_state_machine__32617__auto__);

(statearr_33554[(1)] = (1));

return statearr_33554;
});
var cljs$core$async$mix_$_state_machine__32617__auto____1 = (function (state_33498){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33498);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33555){if((e33555 instanceof Object)){
var ex__32620__auto__ = e33555;
var statearr_33556_34658 = state_33498;
(statearr_33556_34658[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33555;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34659 = state_33498;
state_33498 = G__34659;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32617__auto__ = function(state_33498){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32617__auto____1.call(this,state_33498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32617__auto____0;
cljs$core$async$mix_$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32617__auto____1;
return cljs$core$async$mix_$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33557 = f__32709__auto__();
(statearr_33557[(6)] = c__32708__auto___34592);

return statearr_33557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33559 = arguments.length;
switch (G__33559) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33562 = arguments.length;
switch (G__33562) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33560_SHARP_){
if(cljs.core.truth_((p1__33560_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33560_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33560_SHARP_.call(null,topic)))){
return p1__33560_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33560_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33564 = meta33564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33565,meta33564__$1){
var self__ = this;
var _33565__$1 = this;
return (new cljs.core.async.t_cljs$core$async33563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33564__$1));
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33565){
var self__ = this;
var _33565__$1 = this;
return self__.meta33564;
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33564","meta33564",281542893,null)], null);
}));

(cljs.core.async.t_cljs$core$async33563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33563");

(cljs.core.async.t_cljs$core$async33563.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33563.
 */
cljs.core.async.__GT_t_cljs$core$async33563 = (function cljs$core$async$__GT_t_cljs$core$async33563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33564){
return (new cljs.core.async.t_cljs$core$async33563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33564));
});

}

return (new cljs.core.async.t_cljs$core$async33563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32708__auto___34666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33637){
var state_val_33638 = (state_33637[(1)]);
if((state_val_33638 === (7))){
var inst_33633 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33639_34667 = state_33637__$1;
(statearr_33639_34667[(2)] = inst_33633);

(statearr_33639_34667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (20))){
var state_33637__$1 = state_33637;
var statearr_33640_34668 = state_33637__$1;
(statearr_33640_34668[(2)] = null);

(statearr_33640_34668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (1))){
var state_33637__$1 = state_33637;
var statearr_33641_34669 = state_33637__$1;
(statearr_33641_34669[(2)] = null);

(statearr_33641_34669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (24))){
var inst_33616 = (state_33637[(7)]);
var inst_33625 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33616);
var state_33637__$1 = state_33637;
var statearr_33642_34670 = state_33637__$1;
(statearr_33642_34670[(2)] = inst_33625);

(statearr_33642_34670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (4))){
var inst_33568 = (state_33637[(8)]);
var inst_33568__$1 = (state_33637[(2)]);
var inst_33569 = (inst_33568__$1 == null);
var state_33637__$1 = (function (){var statearr_33643 = state_33637;
(statearr_33643[(8)] = inst_33568__$1);

return statearr_33643;
})();
if(cljs.core.truth_(inst_33569)){
var statearr_33644_34671 = state_33637__$1;
(statearr_33644_34671[(1)] = (5));

} else {
var statearr_33645_34672 = state_33637__$1;
(statearr_33645_34672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (15))){
var inst_33610 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33646_34673 = state_33637__$1;
(statearr_33646_34673[(2)] = inst_33610);

(statearr_33646_34673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (21))){
var inst_33630 = (state_33637[(2)]);
var state_33637__$1 = (function (){var statearr_33647 = state_33637;
(statearr_33647[(9)] = inst_33630);

return statearr_33647;
})();
var statearr_33648_34674 = state_33637__$1;
(statearr_33648_34674[(2)] = null);

(statearr_33648_34674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (13))){
var inst_33592 = (state_33637[(10)]);
var inst_33594 = cljs.core.chunked_seq_QMARK_(inst_33592);
var state_33637__$1 = state_33637;
if(inst_33594){
var statearr_33649_34675 = state_33637__$1;
(statearr_33649_34675[(1)] = (16));

} else {
var statearr_33650_34676 = state_33637__$1;
(statearr_33650_34676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (22))){
var inst_33622 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33622)){
var statearr_33651_34677 = state_33637__$1;
(statearr_33651_34677[(1)] = (23));

} else {
var statearr_33652_34678 = state_33637__$1;
(statearr_33652_34678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (6))){
var inst_33618 = (state_33637[(11)]);
var inst_33616 = (state_33637[(7)]);
var inst_33568 = (state_33637[(8)]);
var inst_33616__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33568) : topic_fn.call(null,inst_33568));
var inst_33617 = cljs.core.deref(mults);
var inst_33618__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33617,inst_33616__$1);
var state_33637__$1 = (function (){var statearr_33653 = state_33637;
(statearr_33653[(11)] = inst_33618__$1);

(statearr_33653[(7)] = inst_33616__$1);

return statearr_33653;
})();
if(cljs.core.truth_(inst_33618__$1)){
var statearr_33654_34679 = state_33637__$1;
(statearr_33654_34679[(1)] = (19));

} else {
var statearr_33655_34680 = state_33637__$1;
(statearr_33655_34680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (25))){
var inst_33627 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33656_34681 = state_33637__$1;
(statearr_33656_34681[(2)] = inst_33627);

(statearr_33656_34681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (17))){
var inst_33592 = (state_33637[(10)]);
var inst_33601 = cljs.core.first(inst_33592);
var inst_33602 = cljs.core.async.muxch_STAR_(inst_33601);
var inst_33603 = cljs.core.async.close_BANG_(inst_33602);
var inst_33604 = cljs.core.next(inst_33592);
var inst_33578 = inst_33604;
var inst_33579 = null;
var inst_33580 = (0);
var inst_33581 = (0);
var state_33637__$1 = (function (){var statearr_33657 = state_33637;
(statearr_33657[(12)] = inst_33578);

(statearr_33657[(13)] = inst_33603);

(statearr_33657[(14)] = inst_33581);

(statearr_33657[(15)] = inst_33579);

(statearr_33657[(16)] = inst_33580);

return statearr_33657;
})();
var statearr_33658_34687 = state_33637__$1;
(statearr_33658_34687[(2)] = null);

(statearr_33658_34687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (3))){
var inst_33635 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33637__$1,inst_33635);
} else {
if((state_val_33638 === (12))){
var inst_33612 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33659_34688 = state_33637__$1;
(statearr_33659_34688[(2)] = inst_33612);

(statearr_33659_34688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (2))){
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33637__$1,(4),ch);
} else {
if((state_val_33638 === (23))){
var state_33637__$1 = state_33637;
var statearr_33660_34689 = state_33637__$1;
(statearr_33660_34689[(2)] = null);

(statearr_33660_34689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (19))){
var inst_33618 = (state_33637[(11)]);
var inst_33568 = (state_33637[(8)]);
var inst_33620 = cljs.core.async.muxch_STAR_(inst_33618);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33637__$1,(22),inst_33620,inst_33568);
} else {
if((state_val_33638 === (11))){
var inst_33578 = (state_33637[(12)]);
var inst_33592 = (state_33637[(10)]);
var inst_33592__$1 = cljs.core.seq(inst_33578);
var state_33637__$1 = (function (){var statearr_33661 = state_33637;
(statearr_33661[(10)] = inst_33592__$1);

return statearr_33661;
})();
if(inst_33592__$1){
var statearr_33662_34690 = state_33637__$1;
(statearr_33662_34690[(1)] = (13));

} else {
var statearr_33663_34691 = state_33637__$1;
(statearr_33663_34691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (9))){
var inst_33614 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33664_34692 = state_33637__$1;
(statearr_33664_34692[(2)] = inst_33614);

(statearr_33664_34692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (5))){
var inst_33575 = cljs.core.deref(mults);
var inst_33576 = cljs.core.vals(inst_33575);
var inst_33577 = cljs.core.seq(inst_33576);
var inst_33578 = inst_33577;
var inst_33579 = null;
var inst_33580 = (0);
var inst_33581 = (0);
var state_33637__$1 = (function (){var statearr_33665 = state_33637;
(statearr_33665[(12)] = inst_33578);

(statearr_33665[(14)] = inst_33581);

(statearr_33665[(15)] = inst_33579);

(statearr_33665[(16)] = inst_33580);

return statearr_33665;
})();
var statearr_33666_34693 = state_33637__$1;
(statearr_33666_34693[(2)] = null);

(statearr_33666_34693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (14))){
var state_33637__$1 = state_33637;
var statearr_33670_34694 = state_33637__$1;
(statearr_33670_34694[(2)] = null);

(statearr_33670_34694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (16))){
var inst_33592 = (state_33637[(10)]);
var inst_33596 = cljs.core.chunk_first(inst_33592);
var inst_33597 = cljs.core.chunk_rest(inst_33592);
var inst_33598 = cljs.core.count(inst_33596);
var inst_33578 = inst_33597;
var inst_33579 = inst_33596;
var inst_33580 = inst_33598;
var inst_33581 = (0);
var state_33637__$1 = (function (){var statearr_33671 = state_33637;
(statearr_33671[(12)] = inst_33578);

(statearr_33671[(14)] = inst_33581);

(statearr_33671[(15)] = inst_33579);

(statearr_33671[(16)] = inst_33580);

return statearr_33671;
})();
var statearr_33672_34695 = state_33637__$1;
(statearr_33672_34695[(2)] = null);

(statearr_33672_34695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (10))){
var inst_33578 = (state_33637[(12)]);
var inst_33581 = (state_33637[(14)]);
var inst_33579 = (state_33637[(15)]);
var inst_33580 = (state_33637[(16)]);
var inst_33586 = cljs.core._nth(inst_33579,inst_33581);
var inst_33587 = cljs.core.async.muxch_STAR_(inst_33586);
var inst_33588 = cljs.core.async.close_BANG_(inst_33587);
var inst_33589 = (inst_33581 + (1));
var tmp33667 = inst_33578;
var tmp33668 = inst_33579;
var tmp33669 = inst_33580;
var inst_33578__$1 = tmp33667;
var inst_33579__$1 = tmp33668;
var inst_33580__$1 = tmp33669;
var inst_33581__$1 = inst_33589;
var state_33637__$1 = (function (){var statearr_33673 = state_33637;
(statearr_33673[(12)] = inst_33578__$1);

(statearr_33673[(17)] = inst_33588);

(statearr_33673[(14)] = inst_33581__$1);

(statearr_33673[(15)] = inst_33579__$1);

(statearr_33673[(16)] = inst_33580__$1);

return statearr_33673;
})();
var statearr_33674_34696 = state_33637__$1;
(statearr_33674_34696[(2)] = null);

(statearr_33674_34696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (18))){
var inst_33607 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33675_34697 = state_33637__$1;
(statearr_33675_34697[(2)] = inst_33607);

(statearr_33675_34697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (8))){
var inst_33581 = (state_33637[(14)]);
var inst_33580 = (state_33637[(16)]);
var inst_33583 = (inst_33581 < inst_33580);
var inst_33584 = inst_33583;
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33584)){
var statearr_33676_34708 = state_33637__$1;
(statearr_33676_34708[(1)] = (10));

} else {
var statearr_33677_34709 = state_33637__$1;
(statearr_33677_34709[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33678[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33678[(1)] = (1));

return statearr_33678;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33637){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33637);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33679){if((e33679 instanceof Object)){
var ex__32620__auto__ = e33679;
var statearr_33680_34716 = state_33637;
(statearr_33680_34716[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34717 = state_33637;
state_33637 = G__34717;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33681 = f__32709__auto__();
(statearr_33681[(6)] = c__32708__auto___34666);

return statearr_33681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33683 = arguments.length;
switch (G__33683) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33685 = arguments.length;
switch (G__33685) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33687 = arguments.length;
switch (G__33687) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32708__auto___34722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33726){
var state_val_33727 = (state_33726[(1)]);
if((state_val_33727 === (7))){
var state_33726__$1 = state_33726;
var statearr_33728_34723 = state_33726__$1;
(statearr_33728_34723[(2)] = null);

(statearr_33728_34723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (1))){
var state_33726__$1 = state_33726;
var statearr_33729_34727 = state_33726__$1;
(statearr_33729_34727[(2)] = null);

(statearr_33729_34727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (4))){
var inst_33690 = (state_33726[(7)]);
var inst_33692 = (inst_33690 < cnt);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33692)){
var statearr_33730_34728 = state_33726__$1;
(statearr_33730_34728[(1)] = (6));

} else {
var statearr_33731_34730 = state_33726__$1;
(statearr_33731_34730[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (15))){
var inst_33722 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33732_34732 = state_33726__$1;
(statearr_33732_34732[(2)] = inst_33722);

(statearr_33732_34732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (13))){
var inst_33715 = cljs.core.async.close_BANG_(out);
var state_33726__$1 = state_33726;
var statearr_33733_34733 = state_33726__$1;
(statearr_33733_34733[(2)] = inst_33715);

(statearr_33733_34733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (6))){
var state_33726__$1 = state_33726;
var statearr_33734_34734 = state_33726__$1;
(statearr_33734_34734[(2)] = null);

(statearr_33734_34734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (3))){
var inst_33724 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33726__$1,inst_33724);
} else {
if((state_val_33727 === (12))){
var inst_33712 = (state_33726[(8)]);
var inst_33712__$1 = (state_33726[(2)]);
var inst_33713 = cljs.core.some(cljs.core.nil_QMARK_,inst_33712__$1);
var state_33726__$1 = (function (){var statearr_33735 = state_33726;
(statearr_33735[(8)] = inst_33712__$1);

return statearr_33735;
})();
if(cljs.core.truth_(inst_33713)){
var statearr_33736_34735 = state_33726__$1;
(statearr_33736_34735[(1)] = (13));

} else {
var statearr_33737_34736 = state_33726__$1;
(statearr_33737_34736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (2))){
var inst_33689 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33690 = (0);
var state_33726__$1 = (function (){var statearr_33738 = state_33726;
(statearr_33738[(7)] = inst_33690);

(statearr_33738[(9)] = inst_33689);

return statearr_33738;
})();
var statearr_33739_34737 = state_33726__$1;
(statearr_33739_34737[(2)] = null);

(statearr_33739_34737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (11))){
var inst_33690 = (state_33726[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33726,(10),Object,null,(9));
var inst_33699 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33690) : chs__$1.call(null,inst_33690));
var inst_33700 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33690) : done.call(null,inst_33690));
var inst_33701 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33699,inst_33700);
var state_33726__$1 = state_33726;
var statearr_33740_34738 = state_33726__$1;
(statearr_33740_34738[(2)] = inst_33701);


cljs.core.async.impl.ioc_helpers.process_exception(state_33726__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (9))){
var inst_33690 = (state_33726[(7)]);
var inst_33703 = (state_33726[(2)]);
var inst_33704 = (inst_33690 + (1));
var inst_33690__$1 = inst_33704;
var state_33726__$1 = (function (){var statearr_33741 = state_33726;
(statearr_33741[(7)] = inst_33690__$1);

(statearr_33741[(10)] = inst_33703);

return statearr_33741;
})();
var statearr_33742_34739 = state_33726__$1;
(statearr_33742_34739[(2)] = null);

(statearr_33742_34739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (5))){
var inst_33710 = (state_33726[(2)]);
var state_33726__$1 = (function (){var statearr_33743 = state_33726;
(statearr_33743[(11)] = inst_33710);

return statearr_33743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33726__$1,(12),dchan);
} else {
if((state_val_33727 === (14))){
var inst_33712 = (state_33726[(8)]);
var inst_33717 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33712);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33726__$1,(16),out,inst_33717);
} else {
if((state_val_33727 === (16))){
var inst_33719 = (state_33726[(2)]);
var state_33726__$1 = (function (){var statearr_33744 = state_33726;
(statearr_33744[(12)] = inst_33719);

return statearr_33744;
})();
var statearr_33745_34740 = state_33726__$1;
(statearr_33745_34740[(2)] = null);

(statearr_33745_34740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (10))){
var inst_33694 = (state_33726[(2)]);
var inst_33695 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33726__$1 = (function (){var statearr_33746 = state_33726;
(statearr_33746[(13)] = inst_33694);

return statearr_33746;
})();
var statearr_33747_34741 = state_33726__$1;
(statearr_33747_34741[(2)] = inst_33695);


cljs.core.async.impl.ioc_helpers.process_exception(state_33726__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (8))){
var inst_33708 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33748_34742 = state_33726__$1;
(statearr_33748_34742[(2)] = inst_33708);

(statearr_33748_34742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33749[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33749[(1)] = (1));

return statearr_33749;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33726){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33726);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33750){if((e33750 instanceof Object)){
var ex__32620__auto__ = e33750;
var statearr_33751_34743 = state_33726;
(statearr_33751_34743[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_33726;
state_33726 = G__34744;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33752 = f__32709__auto__();
(statearr_33752[(6)] = c__32708__auto___34722);

return statearr_33752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33755 = arguments.length;
switch (G__33755) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32708__auto___34746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33787){
var state_val_33788 = (state_33787[(1)]);
if((state_val_33788 === (7))){
var inst_33767 = (state_33787[(7)]);
var inst_33766 = (state_33787[(8)]);
var inst_33766__$1 = (state_33787[(2)]);
var inst_33767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33766__$1,(0),null);
var inst_33768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33766__$1,(1),null);
var inst_33769 = (inst_33767__$1 == null);
var state_33787__$1 = (function (){var statearr_33789 = state_33787;
(statearr_33789[(7)] = inst_33767__$1);

(statearr_33789[(9)] = inst_33768);

(statearr_33789[(8)] = inst_33766__$1);

return statearr_33789;
})();
if(cljs.core.truth_(inst_33769)){
var statearr_33790_34751 = state_33787__$1;
(statearr_33790_34751[(1)] = (8));

} else {
var statearr_33791_34752 = state_33787__$1;
(statearr_33791_34752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (1))){
var inst_33756 = cljs.core.vec(chs);
var inst_33757 = inst_33756;
var state_33787__$1 = (function (){var statearr_33792 = state_33787;
(statearr_33792[(10)] = inst_33757);

return statearr_33792;
})();
var statearr_33793_34753 = state_33787__$1;
(statearr_33793_34753[(2)] = null);

(statearr_33793_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (4))){
var inst_33757 = (state_33787[(10)]);
var state_33787__$1 = state_33787;
return cljs.core.async.ioc_alts_BANG_(state_33787__$1,(7),inst_33757);
} else {
if((state_val_33788 === (6))){
var inst_33783 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33794_34754 = state_33787__$1;
(statearr_33794_34754[(2)] = inst_33783);

(statearr_33794_34754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (3))){
var inst_33785 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33787__$1,inst_33785);
} else {
if((state_val_33788 === (2))){
var inst_33757 = (state_33787[(10)]);
var inst_33759 = cljs.core.count(inst_33757);
var inst_33760 = (inst_33759 > (0));
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33760)){
var statearr_33796_34755 = state_33787__$1;
(statearr_33796_34755[(1)] = (4));

} else {
var statearr_33797_34756 = state_33787__$1;
(statearr_33797_34756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (11))){
var inst_33757 = (state_33787[(10)]);
var inst_33776 = (state_33787[(2)]);
var tmp33795 = inst_33757;
var inst_33757__$1 = tmp33795;
var state_33787__$1 = (function (){var statearr_33798 = state_33787;
(statearr_33798[(10)] = inst_33757__$1);

(statearr_33798[(11)] = inst_33776);

return statearr_33798;
})();
var statearr_33799_34757 = state_33787__$1;
(statearr_33799_34757[(2)] = null);

(statearr_33799_34757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (9))){
var inst_33767 = (state_33787[(7)]);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33787__$1,(11),out,inst_33767);
} else {
if((state_val_33788 === (5))){
var inst_33781 = cljs.core.async.close_BANG_(out);
var state_33787__$1 = state_33787;
var statearr_33800_34758 = state_33787__$1;
(statearr_33800_34758[(2)] = inst_33781);

(statearr_33800_34758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (10))){
var inst_33779 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33801_34759 = state_33787__$1;
(statearr_33801_34759[(2)] = inst_33779);

(statearr_33801_34759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (8))){
var inst_33757 = (state_33787[(10)]);
var inst_33767 = (state_33787[(7)]);
var inst_33768 = (state_33787[(9)]);
var inst_33766 = (state_33787[(8)]);
var inst_33771 = (function (){var cs = inst_33757;
var vec__33762 = inst_33766;
var v = inst_33767;
var c = inst_33768;
return (function (p1__33753_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33753_SHARP_);
});
})();
var inst_33772 = cljs.core.filterv(inst_33771,inst_33757);
var inst_33757__$1 = inst_33772;
var state_33787__$1 = (function (){var statearr_33802 = state_33787;
(statearr_33802[(10)] = inst_33757__$1);

return statearr_33802;
})();
var statearr_33803_34760 = state_33787__$1;
(statearr_33803_34760[(2)] = null);

(statearr_33803_34760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33804[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33804[(1)] = (1));

return statearr_33804;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33787){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33787);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33805){if((e33805 instanceof Object)){
var ex__32620__auto__ = e33805;
var statearr_33806_34766 = state_33787;
(statearr_33806_34766[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34767 = state_33787;
state_33787 = G__34767;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33807 = f__32709__auto__();
(statearr_33807[(6)] = c__32708__auto___34746);

return statearr_33807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33809 = arguments.length;
switch (G__33809) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32708__auto___34774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33833){
var state_val_33834 = (state_33833[(1)]);
if((state_val_33834 === (7))){
var inst_33815 = (state_33833[(7)]);
var inst_33815__$1 = (state_33833[(2)]);
var inst_33816 = (inst_33815__$1 == null);
var inst_33817 = cljs.core.not(inst_33816);
var state_33833__$1 = (function (){var statearr_33835 = state_33833;
(statearr_33835[(7)] = inst_33815__$1);

return statearr_33835;
})();
if(inst_33817){
var statearr_33836_34775 = state_33833__$1;
(statearr_33836_34775[(1)] = (8));

} else {
var statearr_33837_34776 = state_33833__$1;
(statearr_33837_34776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (1))){
var inst_33810 = (0);
var state_33833__$1 = (function (){var statearr_33838 = state_33833;
(statearr_33838[(8)] = inst_33810);

return statearr_33838;
})();
var statearr_33839_34777 = state_33833__$1;
(statearr_33839_34777[(2)] = null);

(statearr_33839_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (4))){
var state_33833__$1 = state_33833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33833__$1,(7),ch);
} else {
if((state_val_33834 === (6))){
var inst_33828 = (state_33833[(2)]);
var state_33833__$1 = state_33833;
var statearr_33840_34778 = state_33833__$1;
(statearr_33840_34778[(2)] = inst_33828);

(statearr_33840_34778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (3))){
var inst_33830 = (state_33833[(2)]);
var inst_33831 = cljs.core.async.close_BANG_(out);
var state_33833__$1 = (function (){var statearr_33841 = state_33833;
(statearr_33841[(9)] = inst_33830);

return statearr_33841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33833__$1,inst_33831);
} else {
if((state_val_33834 === (2))){
var inst_33810 = (state_33833[(8)]);
var inst_33812 = (inst_33810 < n);
var state_33833__$1 = state_33833;
if(cljs.core.truth_(inst_33812)){
var statearr_33842_34779 = state_33833__$1;
(statearr_33842_34779[(1)] = (4));

} else {
var statearr_33843_34780 = state_33833__$1;
(statearr_33843_34780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (11))){
var inst_33810 = (state_33833[(8)]);
var inst_33820 = (state_33833[(2)]);
var inst_33821 = (inst_33810 + (1));
var inst_33810__$1 = inst_33821;
var state_33833__$1 = (function (){var statearr_33844 = state_33833;
(statearr_33844[(10)] = inst_33820);

(statearr_33844[(8)] = inst_33810__$1);

return statearr_33844;
})();
var statearr_33845_34781 = state_33833__$1;
(statearr_33845_34781[(2)] = null);

(statearr_33845_34781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (9))){
var state_33833__$1 = state_33833;
var statearr_33846_34782 = state_33833__$1;
(statearr_33846_34782[(2)] = null);

(statearr_33846_34782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (5))){
var state_33833__$1 = state_33833;
var statearr_33847_34783 = state_33833__$1;
(statearr_33847_34783[(2)] = null);

(statearr_33847_34783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (10))){
var inst_33825 = (state_33833[(2)]);
var state_33833__$1 = state_33833;
var statearr_33848_34784 = state_33833__$1;
(statearr_33848_34784[(2)] = inst_33825);

(statearr_33848_34784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33834 === (8))){
var inst_33815 = (state_33833[(7)]);
var state_33833__$1 = state_33833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33833__$1,(11),out,inst_33815);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33849[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33849[(1)] = (1));

return statearr_33849;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33833){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33833);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33850){if((e33850 instanceof Object)){
var ex__32620__auto__ = e33850;
var statearr_33851_34785 = state_33833;
(statearr_33851_34785[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34786 = state_33833;
state_33833 = G__34786;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33852 = f__32709__auto__();
(statearr_33852[(6)] = c__32708__auto___34774);

return statearr_33852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33854 = (function (f,ch,meta33855){
this.f = f;
this.ch = ch;
this.meta33855 = meta33855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33856,meta33855__$1){
var self__ = this;
var _33856__$1 = this;
return (new cljs.core.async.t_cljs$core$async33854(self__.f,self__.ch,meta33855__$1));
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33856){
var self__ = this;
var _33856__$1 = this;
return self__.meta33855;
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33857 = (function (f,ch,meta33855,_,fn1,meta33858){
this.f = f;
this.ch = ch;
this.meta33855 = meta33855;
this._ = _;
this.fn1 = fn1;
this.meta33858 = meta33858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33859,meta33858__$1){
var self__ = this;
var _33859__$1 = this;
return (new cljs.core.async.t_cljs$core$async33857(self__.f,self__.ch,self__.meta33855,self__._,self__.fn1,meta33858__$1));
}));

(cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33859){
var self__ = this;
var _33859__$1 = this;
return self__.meta33858;
}));

(cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33853_SHARP_){
var G__33860 = (((p1__33853_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33853_SHARP_) : self__.f.call(null,p1__33853_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33860) : f1.call(null,G__33860));
});
}));

(cljs.core.async.t_cljs$core$async33857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33855","meta33855",1518798573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33854","cljs.core.async/t_cljs$core$async33854",577772099,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33858","meta33858",1001927402,null)], null);
}));

(cljs.core.async.t_cljs$core$async33857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33857");

(cljs.core.async.t_cljs$core$async33857.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33857.
 */
cljs.core.async.__GT_t_cljs$core$async33857 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33857(f__$1,ch__$1,meta33855__$1,___$2,fn1__$1,meta33858){
return (new cljs.core.async.t_cljs$core$async33857(f__$1,ch__$1,meta33855__$1,___$2,fn1__$1,meta33858));
});

}

return (new cljs.core.async.t_cljs$core$async33857(self__.f,self__.ch,self__.meta33855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33861 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33861) : self__.f.call(null,G__33861));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33855","meta33855",1518798573,null)], null);
}));

(cljs.core.async.t_cljs$core$async33854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33854");

(cljs.core.async.t_cljs$core$async33854.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33854.
 */
cljs.core.async.__GT_t_cljs$core$async33854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33854(f__$1,ch__$1,meta33855){
return (new cljs.core.async.t_cljs$core$async33854(f__$1,ch__$1,meta33855));
});

}

return (new cljs.core.async.t_cljs$core$async33854(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33862 = (function (f,ch,meta33863){
this.f = f;
this.ch = ch;
this.meta33863 = meta33863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33864,meta33863__$1){
var self__ = this;
var _33864__$1 = this;
return (new cljs.core.async.t_cljs$core$async33862(self__.f,self__.ch,meta33863__$1));
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33864){
var self__ = this;
var _33864__$1 = this;
return self__.meta33863;
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33863","meta33863",-1777242211,null)], null);
}));

(cljs.core.async.t_cljs$core$async33862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33862");

(cljs.core.async.t_cljs$core$async33862.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33862.
 */
cljs.core.async.__GT_t_cljs$core$async33862 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33862(f__$1,ch__$1,meta33863){
return (new cljs.core.async.t_cljs$core$async33862(f__$1,ch__$1,meta33863));
});

}

return (new cljs.core.async.t_cljs$core$async33862(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33865 = (function (p,ch,meta33866){
this.p = p;
this.ch = ch;
this.meta33866 = meta33866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33867,meta33866__$1){
var self__ = this;
var _33867__$1 = this;
return (new cljs.core.async.t_cljs$core$async33865(self__.p,self__.ch,meta33866__$1));
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33867){
var self__ = this;
var _33867__$1 = this;
return self__.meta33866;
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33866","meta33866",126319855,null)], null);
}));

(cljs.core.async.t_cljs$core$async33865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33865");

(cljs.core.async.t_cljs$core$async33865.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33865.
 */
cljs.core.async.__GT_t_cljs$core$async33865 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33865(p__$1,ch__$1,meta33866){
return (new cljs.core.async.t_cljs$core$async33865(p__$1,ch__$1,meta33866));
});

}

return (new cljs.core.async.t_cljs$core$async33865(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33869 = arguments.length;
switch (G__33869) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32708__auto___34792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33890){
var state_val_33891 = (state_33890[(1)]);
if((state_val_33891 === (7))){
var inst_33886 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33892_34793 = state_33890__$1;
(statearr_33892_34793[(2)] = inst_33886);

(statearr_33892_34793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (1))){
var state_33890__$1 = state_33890;
var statearr_33893_34794 = state_33890__$1;
(statearr_33893_34794[(2)] = null);

(statearr_33893_34794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (4))){
var inst_33872 = (state_33890[(7)]);
var inst_33872__$1 = (state_33890[(2)]);
var inst_33873 = (inst_33872__$1 == null);
var state_33890__$1 = (function (){var statearr_33894 = state_33890;
(statearr_33894[(7)] = inst_33872__$1);

return statearr_33894;
})();
if(cljs.core.truth_(inst_33873)){
var statearr_33895_34795 = state_33890__$1;
(statearr_33895_34795[(1)] = (5));

} else {
var statearr_33896_34796 = state_33890__$1;
(statearr_33896_34796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (6))){
var inst_33872 = (state_33890[(7)]);
var inst_33877 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33872) : p.call(null,inst_33872));
var state_33890__$1 = state_33890;
if(cljs.core.truth_(inst_33877)){
var statearr_33897_34802 = state_33890__$1;
(statearr_33897_34802[(1)] = (8));

} else {
var statearr_33898_34803 = state_33890__$1;
(statearr_33898_34803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (3))){
var inst_33888 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33890__$1,inst_33888);
} else {
if((state_val_33891 === (2))){
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33890__$1,(4),ch);
} else {
if((state_val_33891 === (11))){
var inst_33880 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33899_34804 = state_33890__$1;
(statearr_33899_34804[(2)] = inst_33880);

(statearr_33899_34804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (9))){
var state_33890__$1 = state_33890;
var statearr_33900_34805 = state_33890__$1;
(statearr_33900_34805[(2)] = null);

(statearr_33900_34805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (5))){
var inst_33875 = cljs.core.async.close_BANG_(out);
var state_33890__$1 = state_33890;
var statearr_33901_34806 = state_33890__$1;
(statearr_33901_34806[(2)] = inst_33875);

(statearr_33901_34806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (10))){
var inst_33883 = (state_33890[(2)]);
var state_33890__$1 = (function (){var statearr_33902 = state_33890;
(statearr_33902[(8)] = inst_33883);

return statearr_33902;
})();
var statearr_33903_34807 = state_33890__$1;
(statearr_33903_34807[(2)] = null);

(statearr_33903_34807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (8))){
var inst_33872 = (state_33890[(7)]);
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33890__$1,(11),out,inst_33872);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_33904 = [null,null,null,null,null,null,null,null,null];
(statearr_33904[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_33904[(1)] = (1));

return statearr_33904;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_33890){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33890);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e33905){if((e33905 instanceof Object)){
var ex__32620__auto__ = e33905;
var statearr_33906_34809 = state_33890;
(statearr_33906_34809[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34810 = state_33890;
state_33890 = G__34810;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_33890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_33890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_33907 = f__32709__auto__();
(statearr_33907[(6)] = c__32708__auto___34792);

return statearr_33907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33909 = arguments.length;
switch (G__33909) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_33971){
var state_val_33972 = (state_33971[(1)]);
if((state_val_33972 === (7))){
var inst_33967 = (state_33971[(2)]);
var state_33971__$1 = state_33971;
var statearr_33973_34816 = state_33971__$1;
(statearr_33973_34816[(2)] = inst_33967);

(statearr_33973_34816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (20))){
var inst_33937 = (state_33971[(7)]);
var inst_33948 = (state_33971[(2)]);
var inst_33949 = cljs.core.next(inst_33937);
var inst_33923 = inst_33949;
var inst_33924 = null;
var inst_33925 = (0);
var inst_33926 = (0);
var state_33971__$1 = (function (){var statearr_33974 = state_33971;
(statearr_33974[(8)] = inst_33924);

(statearr_33974[(9)] = inst_33948);

(statearr_33974[(10)] = inst_33923);

(statearr_33974[(11)] = inst_33926);

(statearr_33974[(12)] = inst_33925);

return statearr_33974;
})();
var statearr_33975_34817 = state_33971__$1;
(statearr_33975_34817[(2)] = null);

(statearr_33975_34817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (1))){
var state_33971__$1 = state_33971;
var statearr_33976_34818 = state_33971__$1;
(statearr_33976_34818[(2)] = null);

(statearr_33976_34818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (4))){
var inst_33912 = (state_33971[(13)]);
var inst_33912__$1 = (state_33971[(2)]);
var inst_33913 = (inst_33912__$1 == null);
var state_33971__$1 = (function (){var statearr_33977 = state_33971;
(statearr_33977[(13)] = inst_33912__$1);

return statearr_33977;
})();
if(cljs.core.truth_(inst_33913)){
var statearr_33978_34819 = state_33971__$1;
(statearr_33978_34819[(1)] = (5));

} else {
var statearr_33979_34820 = state_33971__$1;
(statearr_33979_34820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (15))){
var state_33971__$1 = state_33971;
var statearr_33983_34821 = state_33971__$1;
(statearr_33983_34821[(2)] = null);

(statearr_33983_34821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (21))){
var state_33971__$1 = state_33971;
var statearr_33984_34822 = state_33971__$1;
(statearr_33984_34822[(2)] = null);

(statearr_33984_34822[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (13))){
var inst_33924 = (state_33971[(8)]);
var inst_33923 = (state_33971[(10)]);
var inst_33926 = (state_33971[(11)]);
var inst_33925 = (state_33971[(12)]);
var inst_33933 = (state_33971[(2)]);
var inst_33934 = (inst_33926 + (1));
var tmp33980 = inst_33924;
var tmp33981 = inst_33923;
var tmp33982 = inst_33925;
var inst_33923__$1 = tmp33981;
var inst_33924__$1 = tmp33980;
var inst_33925__$1 = tmp33982;
var inst_33926__$1 = inst_33934;
var state_33971__$1 = (function (){var statearr_33985 = state_33971;
(statearr_33985[(8)] = inst_33924__$1);

(statearr_33985[(10)] = inst_33923__$1);

(statearr_33985[(11)] = inst_33926__$1);

(statearr_33985[(14)] = inst_33933);

(statearr_33985[(12)] = inst_33925__$1);

return statearr_33985;
})();
var statearr_33986_34823 = state_33971__$1;
(statearr_33986_34823[(2)] = null);

(statearr_33986_34823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (22))){
var state_33971__$1 = state_33971;
var statearr_33987_34827 = state_33971__$1;
(statearr_33987_34827[(2)] = null);

(statearr_33987_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (6))){
var inst_33912 = (state_33971[(13)]);
var inst_33921 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33912) : f.call(null,inst_33912));
var inst_33922 = cljs.core.seq(inst_33921);
var inst_33923 = inst_33922;
var inst_33924 = null;
var inst_33925 = (0);
var inst_33926 = (0);
var state_33971__$1 = (function (){var statearr_33988 = state_33971;
(statearr_33988[(8)] = inst_33924);

(statearr_33988[(10)] = inst_33923);

(statearr_33988[(11)] = inst_33926);

(statearr_33988[(12)] = inst_33925);

return statearr_33988;
})();
var statearr_33989_34828 = state_33971__$1;
(statearr_33989_34828[(2)] = null);

(statearr_33989_34828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (17))){
var inst_33937 = (state_33971[(7)]);
var inst_33941 = cljs.core.chunk_first(inst_33937);
var inst_33942 = cljs.core.chunk_rest(inst_33937);
var inst_33943 = cljs.core.count(inst_33941);
var inst_33923 = inst_33942;
var inst_33924 = inst_33941;
var inst_33925 = inst_33943;
var inst_33926 = (0);
var state_33971__$1 = (function (){var statearr_33990 = state_33971;
(statearr_33990[(8)] = inst_33924);

(statearr_33990[(10)] = inst_33923);

(statearr_33990[(11)] = inst_33926);

(statearr_33990[(12)] = inst_33925);

return statearr_33990;
})();
var statearr_33991_34829 = state_33971__$1;
(statearr_33991_34829[(2)] = null);

(statearr_33991_34829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (3))){
var inst_33969 = (state_33971[(2)]);
var state_33971__$1 = state_33971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33971__$1,inst_33969);
} else {
if((state_val_33972 === (12))){
var inst_33957 = (state_33971[(2)]);
var state_33971__$1 = state_33971;
var statearr_33992_34830 = state_33971__$1;
(statearr_33992_34830[(2)] = inst_33957);

(statearr_33992_34830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (2))){
var state_33971__$1 = state_33971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33971__$1,(4),in$);
} else {
if((state_val_33972 === (23))){
var inst_33965 = (state_33971[(2)]);
var state_33971__$1 = state_33971;
var statearr_33993_34831 = state_33971__$1;
(statearr_33993_34831[(2)] = inst_33965);

(statearr_33993_34831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (19))){
var inst_33952 = (state_33971[(2)]);
var state_33971__$1 = state_33971;
var statearr_33994_34832 = state_33971__$1;
(statearr_33994_34832[(2)] = inst_33952);

(statearr_33994_34832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (11))){
var inst_33937 = (state_33971[(7)]);
var inst_33923 = (state_33971[(10)]);
var inst_33937__$1 = cljs.core.seq(inst_33923);
var state_33971__$1 = (function (){var statearr_33995 = state_33971;
(statearr_33995[(7)] = inst_33937__$1);

return statearr_33995;
})();
if(inst_33937__$1){
var statearr_33996_34833 = state_33971__$1;
(statearr_33996_34833[(1)] = (14));

} else {
var statearr_33997_34834 = state_33971__$1;
(statearr_33997_34834[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (9))){
var inst_33959 = (state_33971[(2)]);
var inst_33960 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33971__$1 = (function (){var statearr_33998 = state_33971;
(statearr_33998[(15)] = inst_33959);

return statearr_33998;
})();
if(cljs.core.truth_(inst_33960)){
var statearr_33999_34836 = state_33971__$1;
(statearr_33999_34836[(1)] = (21));

} else {
var statearr_34000_34837 = state_33971__$1;
(statearr_34000_34837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (5))){
var inst_33915 = cljs.core.async.close_BANG_(out);
var state_33971__$1 = state_33971;
var statearr_34001_34838 = state_33971__$1;
(statearr_34001_34838[(2)] = inst_33915);

(statearr_34001_34838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (14))){
var inst_33937 = (state_33971[(7)]);
var inst_33939 = cljs.core.chunked_seq_QMARK_(inst_33937);
var state_33971__$1 = state_33971;
if(inst_33939){
var statearr_34002_34839 = state_33971__$1;
(statearr_34002_34839[(1)] = (17));

} else {
var statearr_34003_34840 = state_33971__$1;
(statearr_34003_34840[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (16))){
var inst_33955 = (state_33971[(2)]);
var state_33971__$1 = state_33971;
var statearr_34004_34841 = state_33971__$1;
(statearr_34004_34841[(2)] = inst_33955);

(statearr_34004_34841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (10))){
var inst_33924 = (state_33971[(8)]);
var inst_33926 = (state_33971[(11)]);
var inst_33931 = cljs.core._nth(inst_33924,inst_33926);
var state_33971__$1 = state_33971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33971__$1,(13),out,inst_33931);
} else {
if((state_val_33972 === (18))){
var inst_33937 = (state_33971[(7)]);
var inst_33946 = cljs.core.first(inst_33937);
var state_33971__$1 = state_33971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33971__$1,(20),out,inst_33946);
} else {
if((state_val_33972 === (8))){
var inst_33926 = (state_33971[(11)]);
var inst_33925 = (state_33971[(12)]);
var inst_33928 = (inst_33926 < inst_33925);
var inst_33929 = inst_33928;
var state_33971__$1 = state_33971;
if(cljs.core.truth_(inst_33929)){
var statearr_34005_34842 = state_33971__$1;
(statearr_34005_34842[(1)] = (10));

} else {
var statearr_34006_34843 = state_33971__$1;
(statearr_34006_34843[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32617__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32617__auto____0 = (function (){
var statearr_34007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34007[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32617__auto__);

(statearr_34007[(1)] = (1));

return statearr_34007;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32617__auto____1 = (function (state_33971){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_33971);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e34008){if((e34008 instanceof Object)){
var ex__32620__auto__ = e34008;
var statearr_34009_34844 = state_33971;
(statearr_34009_34844[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34845 = state_33971;
state_33971 = G__34845;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32617__auto__ = function(state_33971){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32617__auto____1.call(this,state_33971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32617__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32617__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_34010 = f__32709__auto__();
(statearr_34010[(6)] = c__32708__auto__);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));

return c__32708__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34012 = arguments.length;
switch (G__34012) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34014 = arguments.length;
switch (G__34014) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34016 = arguments.length;
switch (G__34016) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32708__auto___34853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_34040){
var state_val_34041 = (state_34040[(1)]);
if((state_val_34041 === (7))){
var inst_34035 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
var statearr_34042_34854 = state_34040__$1;
(statearr_34042_34854[(2)] = inst_34035);

(statearr_34042_34854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (1))){
var inst_34017 = null;
var state_34040__$1 = (function (){var statearr_34043 = state_34040;
(statearr_34043[(7)] = inst_34017);

return statearr_34043;
})();
var statearr_34044_34861 = state_34040__$1;
(statearr_34044_34861[(2)] = null);

(statearr_34044_34861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (4))){
var inst_34020 = (state_34040[(8)]);
var inst_34020__$1 = (state_34040[(2)]);
var inst_34021 = (inst_34020__$1 == null);
var inst_34022 = cljs.core.not(inst_34021);
var state_34040__$1 = (function (){var statearr_34045 = state_34040;
(statearr_34045[(8)] = inst_34020__$1);

return statearr_34045;
})();
if(inst_34022){
var statearr_34046_34862 = state_34040__$1;
(statearr_34046_34862[(1)] = (5));

} else {
var statearr_34047_34863 = state_34040__$1;
(statearr_34047_34863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (6))){
var state_34040__$1 = state_34040;
var statearr_34048_34864 = state_34040__$1;
(statearr_34048_34864[(2)] = null);

(statearr_34048_34864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (3))){
var inst_34037 = (state_34040[(2)]);
var inst_34038 = cljs.core.async.close_BANG_(out);
var state_34040__$1 = (function (){var statearr_34049 = state_34040;
(statearr_34049[(9)] = inst_34037);

return statearr_34049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34040__$1,inst_34038);
} else {
if((state_val_34041 === (2))){
var state_34040__$1 = state_34040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34040__$1,(4),ch);
} else {
if((state_val_34041 === (11))){
var inst_34020 = (state_34040[(8)]);
var inst_34029 = (state_34040[(2)]);
var inst_34017 = inst_34020;
var state_34040__$1 = (function (){var statearr_34050 = state_34040;
(statearr_34050[(10)] = inst_34029);

(statearr_34050[(7)] = inst_34017);

return statearr_34050;
})();
var statearr_34051_34865 = state_34040__$1;
(statearr_34051_34865[(2)] = null);

(statearr_34051_34865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (9))){
var inst_34020 = (state_34040[(8)]);
var state_34040__$1 = state_34040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34040__$1,(11),out,inst_34020);
} else {
if((state_val_34041 === (5))){
var inst_34020 = (state_34040[(8)]);
var inst_34017 = (state_34040[(7)]);
var inst_34024 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34020,inst_34017);
var state_34040__$1 = state_34040;
if(inst_34024){
var statearr_34053_34866 = state_34040__$1;
(statearr_34053_34866[(1)] = (8));

} else {
var statearr_34054_34867 = state_34040__$1;
(statearr_34054_34867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (10))){
var inst_34032 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
var statearr_34055_34868 = state_34040__$1;
(statearr_34055_34868[(2)] = inst_34032);

(statearr_34055_34868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (8))){
var inst_34017 = (state_34040[(7)]);
var tmp34052 = inst_34017;
var inst_34017__$1 = tmp34052;
var state_34040__$1 = (function (){var statearr_34056 = state_34040;
(statearr_34056[(7)] = inst_34017__$1);

return statearr_34056;
})();
var statearr_34057_34869 = state_34040__$1;
(statearr_34057_34869[(2)] = null);

(statearr_34057_34869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_34058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34058[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_34058[(1)] = (1));

return statearr_34058;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_34040){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_34040);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e34059){if((e34059 instanceof Object)){
var ex__32620__auto__ = e34059;
var statearr_34060_34870 = state_34040;
(statearr_34060_34870[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34871 = state_34040;
state_34040 = G__34871;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_34040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_34040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_34061 = f__32709__auto__();
(statearr_34061[(6)] = c__32708__auto___34853);

return statearr_34061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34063 = arguments.length;
switch (G__34063) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32708__auto___34873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_34101){
var state_val_34102 = (state_34101[(1)]);
if((state_val_34102 === (7))){
var inst_34097 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34103_34874 = state_34101__$1;
(statearr_34103_34874[(2)] = inst_34097);

(statearr_34103_34874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (1))){
var inst_34064 = (new Array(n));
var inst_34065 = inst_34064;
var inst_34066 = (0);
var state_34101__$1 = (function (){var statearr_34104 = state_34101;
(statearr_34104[(7)] = inst_34066);

(statearr_34104[(8)] = inst_34065);

return statearr_34104;
})();
var statearr_34105_34875 = state_34101__$1;
(statearr_34105_34875[(2)] = null);

(statearr_34105_34875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (4))){
var inst_34069 = (state_34101[(9)]);
var inst_34069__$1 = (state_34101[(2)]);
var inst_34070 = (inst_34069__$1 == null);
var inst_34071 = cljs.core.not(inst_34070);
var state_34101__$1 = (function (){var statearr_34106 = state_34101;
(statearr_34106[(9)] = inst_34069__$1);

return statearr_34106;
})();
if(inst_34071){
var statearr_34107_34876 = state_34101__$1;
(statearr_34107_34876[(1)] = (5));

} else {
var statearr_34108_34877 = state_34101__$1;
(statearr_34108_34877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (15))){
var inst_34091 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34109_34878 = state_34101__$1;
(statearr_34109_34878[(2)] = inst_34091);

(statearr_34109_34878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (13))){
var state_34101__$1 = state_34101;
var statearr_34110_34879 = state_34101__$1;
(statearr_34110_34879[(2)] = null);

(statearr_34110_34879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (6))){
var inst_34066 = (state_34101[(7)]);
var inst_34087 = (inst_34066 > (0));
var state_34101__$1 = state_34101;
if(cljs.core.truth_(inst_34087)){
var statearr_34111_34883 = state_34101__$1;
(statearr_34111_34883[(1)] = (12));

} else {
var statearr_34112_34884 = state_34101__$1;
(statearr_34112_34884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (3))){
var inst_34099 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34101__$1,inst_34099);
} else {
if((state_val_34102 === (12))){
var inst_34065 = (state_34101[(8)]);
var inst_34089 = cljs.core.vec(inst_34065);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34101__$1,(15),out,inst_34089);
} else {
if((state_val_34102 === (2))){
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34101__$1,(4),ch);
} else {
if((state_val_34102 === (11))){
var inst_34081 = (state_34101[(2)]);
var inst_34082 = (new Array(n));
var inst_34065 = inst_34082;
var inst_34066 = (0);
var state_34101__$1 = (function (){var statearr_34113 = state_34101;
(statearr_34113[(10)] = inst_34081);

(statearr_34113[(7)] = inst_34066);

(statearr_34113[(8)] = inst_34065);

return statearr_34113;
})();
var statearr_34114_34892 = state_34101__$1;
(statearr_34114_34892[(2)] = null);

(statearr_34114_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (9))){
var inst_34065 = (state_34101[(8)]);
var inst_34079 = cljs.core.vec(inst_34065);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34101__$1,(11),out,inst_34079);
} else {
if((state_val_34102 === (5))){
var inst_34066 = (state_34101[(7)]);
var inst_34069 = (state_34101[(9)]);
var inst_34074 = (state_34101[(11)]);
var inst_34065 = (state_34101[(8)]);
var inst_34073 = (inst_34065[inst_34066] = inst_34069);
var inst_34074__$1 = (inst_34066 + (1));
var inst_34075 = (inst_34074__$1 < n);
var state_34101__$1 = (function (){var statearr_34115 = state_34101;
(statearr_34115[(11)] = inst_34074__$1);

(statearr_34115[(12)] = inst_34073);

return statearr_34115;
})();
if(cljs.core.truth_(inst_34075)){
var statearr_34116_34899 = state_34101__$1;
(statearr_34116_34899[(1)] = (8));

} else {
var statearr_34117_34900 = state_34101__$1;
(statearr_34117_34900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (14))){
var inst_34094 = (state_34101[(2)]);
var inst_34095 = cljs.core.async.close_BANG_(out);
var state_34101__$1 = (function (){var statearr_34119 = state_34101;
(statearr_34119[(13)] = inst_34094);

return statearr_34119;
})();
var statearr_34120_34901 = state_34101__$1;
(statearr_34120_34901[(2)] = inst_34095);

(statearr_34120_34901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (10))){
var inst_34085 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34121_34902 = state_34101__$1;
(statearr_34121_34902[(2)] = inst_34085);

(statearr_34121_34902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (8))){
var inst_34074 = (state_34101[(11)]);
var inst_34065 = (state_34101[(8)]);
var tmp34118 = inst_34065;
var inst_34065__$1 = tmp34118;
var inst_34066 = inst_34074;
var state_34101__$1 = (function (){var statearr_34122 = state_34101;
(statearr_34122[(7)] = inst_34066);

(statearr_34122[(8)] = inst_34065__$1);

return statearr_34122;
})();
var statearr_34123_34906 = state_34101__$1;
(statearr_34123_34906[(2)] = null);

(statearr_34123_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_34124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34124[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_34124[(1)] = (1));

return statearr_34124;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_34101){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_34101);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e34125){if((e34125 instanceof Object)){
var ex__32620__auto__ = e34125;
var statearr_34126_34907 = state_34101;
(statearr_34126_34907[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34909 = state_34101;
state_34101 = G__34909;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_34101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_34101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_34127 = f__32709__auto__();
(statearr_34127[(6)] = c__32708__auto___34873);

return statearr_34127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34129 = arguments.length;
switch (G__34129) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32708__auto___34911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32709__auto__ = (function (){var switch__32616__auto__ = (function (state_34171){
var state_val_34172 = (state_34171[(1)]);
if((state_val_34172 === (7))){
var inst_34167 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34173_34915 = state_34171__$1;
(statearr_34173_34915[(2)] = inst_34167);

(statearr_34173_34915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (1))){
var inst_34130 = [];
var inst_34131 = inst_34130;
var inst_34132 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34171__$1 = (function (){var statearr_34174 = state_34171;
(statearr_34174[(7)] = inst_34132);

(statearr_34174[(8)] = inst_34131);

return statearr_34174;
})();
var statearr_34175_34922 = state_34171__$1;
(statearr_34175_34922[(2)] = null);

(statearr_34175_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (4))){
var inst_34135 = (state_34171[(9)]);
var inst_34135__$1 = (state_34171[(2)]);
var inst_34136 = (inst_34135__$1 == null);
var inst_34137 = cljs.core.not(inst_34136);
var state_34171__$1 = (function (){var statearr_34176 = state_34171;
(statearr_34176[(9)] = inst_34135__$1);

return statearr_34176;
})();
if(inst_34137){
var statearr_34177_34923 = state_34171__$1;
(statearr_34177_34923[(1)] = (5));

} else {
var statearr_34178_34930 = state_34171__$1;
(statearr_34178_34930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (15))){
var inst_34161 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34179_34931 = state_34171__$1;
(statearr_34179_34931[(2)] = inst_34161);

(statearr_34179_34931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (13))){
var state_34171__$1 = state_34171;
var statearr_34180_34932 = state_34171__$1;
(statearr_34180_34932[(2)] = null);

(statearr_34180_34932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (6))){
var inst_34131 = (state_34171[(8)]);
var inst_34156 = inst_34131.length;
var inst_34157 = (inst_34156 > (0));
var state_34171__$1 = state_34171;
if(cljs.core.truth_(inst_34157)){
var statearr_34181_34933 = state_34171__$1;
(statearr_34181_34933[(1)] = (12));

} else {
var statearr_34182_34934 = state_34171__$1;
(statearr_34182_34934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (3))){
var inst_34169 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34171__$1,inst_34169);
} else {
if((state_val_34172 === (12))){
var inst_34131 = (state_34171[(8)]);
var inst_34159 = cljs.core.vec(inst_34131);
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34171__$1,(15),out,inst_34159);
} else {
if((state_val_34172 === (2))){
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34171__$1,(4),ch);
} else {
if((state_val_34172 === (11))){
var inst_34135 = (state_34171[(9)]);
var inst_34139 = (state_34171[(10)]);
var inst_34149 = (state_34171[(2)]);
var inst_34150 = [];
var inst_34151 = inst_34150.push(inst_34135);
var inst_34131 = inst_34150;
var inst_34132 = inst_34139;
var state_34171__$1 = (function (){var statearr_34183 = state_34171;
(statearr_34183[(11)] = inst_34149);

(statearr_34183[(7)] = inst_34132);

(statearr_34183[(12)] = inst_34151);

(statearr_34183[(8)] = inst_34131);

return statearr_34183;
})();
var statearr_34184_34935 = state_34171__$1;
(statearr_34184_34935[(2)] = null);

(statearr_34184_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (9))){
var inst_34131 = (state_34171[(8)]);
var inst_34147 = cljs.core.vec(inst_34131);
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34171__$1,(11),out,inst_34147);
} else {
if((state_val_34172 === (5))){
var inst_34132 = (state_34171[(7)]);
var inst_34135 = (state_34171[(9)]);
var inst_34139 = (state_34171[(10)]);
var inst_34139__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34135) : f.call(null,inst_34135));
var inst_34140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34139__$1,inst_34132);
var inst_34141 = cljs.core.keyword_identical_QMARK_(inst_34132,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34142 = ((inst_34140) || (inst_34141));
var state_34171__$1 = (function (){var statearr_34185 = state_34171;
(statearr_34185[(10)] = inst_34139__$1);

return statearr_34185;
})();
if(cljs.core.truth_(inst_34142)){
var statearr_34186_34936 = state_34171__$1;
(statearr_34186_34936[(1)] = (8));

} else {
var statearr_34187_34937 = state_34171__$1;
(statearr_34187_34937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (14))){
var inst_34164 = (state_34171[(2)]);
var inst_34165 = cljs.core.async.close_BANG_(out);
var state_34171__$1 = (function (){var statearr_34189 = state_34171;
(statearr_34189[(13)] = inst_34164);

return statearr_34189;
})();
var statearr_34190_34944 = state_34171__$1;
(statearr_34190_34944[(2)] = inst_34165);

(statearr_34190_34944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (10))){
var inst_34154 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34191_34945 = state_34171__$1;
(statearr_34191_34945[(2)] = inst_34154);

(statearr_34191_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (8))){
var inst_34135 = (state_34171[(9)]);
var inst_34139 = (state_34171[(10)]);
var inst_34131 = (state_34171[(8)]);
var inst_34144 = inst_34131.push(inst_34135);
var tmp34188 = inst_34131;
var inst_34131__$1 = tmp34188;
var inst_34132 = inst_34139;
var state_34171__$1 = (function (){var statearr_34192 = state_34171;
(statearr_34192[(7)] = inst_34132);

(statearr_34192[(14)] = inst_34144);

(statearr_34192[(8)] = inst_34131__$1);

return statearr_34192;
})();
var statearr_34193_34946 = state_34171__$1;
(statearr_34193_34946[(2)] = null);

(statearr_34193_34946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32617__auto__ = null;
var cljs$core$async$state_machine__32617__auto____0 = (function (){
var statearr_34194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34194[(0)] = cljs$core$async$state_machine__32617__auto__);

(statearr_34194[(1)] = (1));

return statearr_34194;
});
var cljs$core$async$state_machine__32617__auto____1 = (function (state_34171){
while(true){
var ret_value__32618__auto__ = (function (){try{while(true){
var result__32619__auto__ = switch__32616__auto__(state_34171);
if(cljs.core.keyword_identical_QMARK_(result__32619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32619__auto__;
}
break;
}
}catch (e34195){if((e34195 instanceof Object)){
var ex__32620__auto__ = e34195;
var statearr_34196_34947 = state_34171;
(statearr_34196_34947[(5)] = ex__32620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_34171;
state_34171 = G__34948;
continue;
} else {
return ret_value__32618__auto__;
}
break;
}
});
cljs$core$async$state_machine__32617__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32617__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32617__auto____0;
cljs$core$async$state_machine__32617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32617__auto____1;
return cljs$core$async$state_machine__32617__auto__;
})()
})();
var state__32710__auto__ = (function (){var statearr_34197 = f__32709__auto__();
(statearr_34197[(6)] = c__32708__auto___34911);

return statearr_34197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32710__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
