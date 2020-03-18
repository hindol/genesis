goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__31160 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__31160.cljs$core$IFn$_invoke$arity$1 ? fexpr__31160.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__31160.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31202){
var vec__31203 = p__31202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31203,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__31216 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__31216)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__31216)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__31216)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__31216)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__31216)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31216)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31216)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__31236){
var map__31237 = p__31236;
var map__31237__$1 = (((((!((map__31237 == null))))?(((((map__31237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31237):map__31237);
var request = map__31237__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31237__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31237__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31237__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__31270 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__31270,default_headers);

cljs_http.core.apply_response_type_BANG_(G__31270,response_type);

G__31270.setTimeoutInterval(timeout);

G__31270.setWithCredentials(send_credentials);

return G__31270;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__31286){
var map__31287 = p__31286;
var map__31287__$1 = (((((!((map__31287 == null))))?(((((map__31287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31287):map__31287);
var request = map__31287__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__31318 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__31318) : cljs_http.core.error_kw.call(null,G__31318));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_31553 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__31333_31561 = xhr;
G__31333_31561.setProgressEventsEnabled(true);

G__31333_31561.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_31553,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__31333_31561.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_31553,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__30867__auto___31562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30868__auto__ = (function (){var switch__30844__auto__ = (function (state_31387){
var state_val_31388 = (state_31387[(1)]);
if((state_val_31388 === (1))){
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31387__$1,(2),cancel);
} else {
if((state_val_31388 === (2))){
var inst_31366 = (state_31387[(2)]);
var inst_31371 = xhr.isComplete();
var inst_31372 = cljs.core.not(inst_31371);
var state_31387__$1 = (function (){var statearr_31400 = state_31387;
(statearr_31400[(7)] = inst_31366);

return statearr_31400;
})();
if(inst_31372){
var statearr_31401_31563 = state_31387__$1;
(statearr_31401_31563[(1)] = (3));

} else {
var statearr_31402_31564 = state_31387__$1;
(statearr_31402_31564[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (3))){
var inst_31378 = xhr.abort();
var state_31387__$1 = state_31387;
var statearr_31403_31565 = state_31387__$1;
(statearr_31403_31565[(2)] = inst_31378);

(statearr_31403_31565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (4))){
var state_31387__$1 = state_31387;
var statearr_31404_31566 = state_31387__$1;
(statearr_31404_31566[(2)] = null);

(statearr_31404_31566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (5))){
var inst_31381 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31387__$1,inst_31381);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__30845__auto__ = null;
var cljs_http$core$xhr_$_state_machine__30845__auto____0 = (function (){
var statearr_31405 = [null,null,null,null,null,null,null,null];
(statearr_31405[(0)] = cljs_http$core$xhr_$_state_machine__30845__auto__);

(statearr_31405[(1)] = (1));

return statearr_31405;
});
var cljs_http$core$xhr_$_state_machine__30845__auto____1 = (function (state_31387){
while(true){
var ret_value__30846__auto__ = (function (){try{while(true){
var result__30847__auto__ = switch__30844__auto__(state_31387);
if(cljs.core.keyword_identical_QMARK_(result__30847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30847__auto__;
}
break;
}
}catch (e31406){if((e31406 instanceof Object)){
var ex__30848__auto__ = e31406;
var statearr_31407_31567 = state_31387;
(statearr_31407_31567[(5)] = ex__30848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31568 = state_31387;
state_31387 = G__31568;
continue;
} else {
return ret_value__30846__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__30845__auto__ = function(state_31387){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__30845__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__30845__auto____1.call(this,state_31387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__30845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__30845__auto____0;
cljs_http$core$xhr_$_state_machine__30845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__30845__auto____1;
return cljs_http$core$xhr_$_state_machine__30845__auto__;
})()
})();
var state__30869__auto__ = (function (){var statearr_31436 = f__30868__auto__();
(statearr_31436[(6)] = c__30867__auto___31562);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30869__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__31437){
var map__31438 = p__31437;
var map__31438__$1 = (((((!((map__31438 == null))))?(((((map__31438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31438):map__31438);
var request = map__31438__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31438__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31438__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31438__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31438__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_31577 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_31577], null));

if(cljs.core.truth_(cancel)){
var c__30867__auto___31578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30868__auto__ = (function (){var switch__30844__auto__ = (function (state_31479){
var state_val_31480 = (state_31479[(1)]);
if((state_val_31480 === (1))){
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31479__$1,(2),cancel);
} else {
if((state_val_31480 === (2))){
var inst_31476 = (state_31479[(2)]);
var inst_31477 = jsonp.cancel(req_31577);
var state_31479__$1 = (function (){var statearr_31486 = state_31479;
(statearr_31486[(7)] = inst_31476);

return statearr_31486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31479__$1,inst_31477);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__30845__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__30845__auto____0 = (function (){
var statearr_31492 = [null,null,null,null,null,null,null,null];
(statearr_31492[(0)] = cljs_http$core$jsonp_$_state_machine__30845__auto__);

(statearr_31492[(1)] = (1));

return statearr_31492;
});
var cljs_http$core$jsonp_$_state_machine__30845__auto____1 = (function (state_31479){
while(true){
var ret_value__30846__auto__ = (function (){try{while(true){
var result__30847__auto__ = switch__30844__auto__(state_31479);
if(cljs.core.keyword_identical_QMARK_(result__30847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30847__auto__;
}
break;
}
}catch (e31502){if((e31502 instanceof Object)){
var ex__30848__auto__ = e31502;
var statearr_31504_31583 = state_31479;
(statearr_31504_31583[(5)] = ex__30848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31584 = state_31479;
state_31479 = G__31584;
continue;
} else {
return ret_value__30846__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__30845__auto__ = function(state_31479){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__30845__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__30845__auto____1.call(this,state_31479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__30845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__30845__auto____0;
cljs_http$core$jsonp_$_state_machine__30845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__30845__auto____1;
return cljs_http$core$jsonp_$_state_machine__30845__auto__;
})()
})();
var state__30869__auto__ = (function (){var statearr_31509 = f__30868__auto__();
(statearr_31509[(6)] = c__30867__auto___31578);

return statearr_31509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30869__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__31512){
var map__31513 = p__31512;
var map__31513__$1 = (((((!((map__31513 == null))))?(((((map__31513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31513):map__31513);
var request = map__31513__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31513__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
