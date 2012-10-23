goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('fetch.util');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__10409__10410 = route;
var m__10411 = cljs.core.nth.call(null,vec__10409__10410,0,null);
var u__10412 = cljs.core.nth.call(null,vec__10409__10410,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__10411),u__10412], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__10415 = fetch.util.clj__GT_js.call(null,d);
var query__10416 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__10415)));
return [cljs.core.str(query__10416)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__10418 = req.getResponseText();
return callback.call(null,data__10418);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__10419){
var vec__10430__10431 = p__10419;
var opts__10432 = cljs.core.nth.call(null,vec__10430__10431,0,null);
var req__10434 = (new goog.net.XhrIo());
var vec__10433__10435 = fetch.core.parse_route.call(null,route);
var method__10436 = cljs.core.nth.call(null,vec__10433__10435,0,null);
var uri__10437 = cljs.core.nth.call(null,vec__10433__10435,1,null);
var data__10438 = fetch.core.__GT_data.call(null,content);
var callback__10439 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__10439))
{goog.events.listen(req__10434,goog.net.EventType.COMPLETE,(function (){
return callback__10439.call(null,req__10434);
}));
} else
{}
return req__10434.send(uri__10437,method__10436,data__10438,(cljs.core.truth_(opts__10432)?fetch.util.clj__GT_js.call(null,opts__10432):null));
};
var xhr = function (route,content,callback,var_args){
var p__10419 = null;
if (goog.isDef(var_args)) {
  p__10419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__10419);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__10440){
var route = cljs.core.first(arglist__10440);
var content = cljs.core.first(cljs.core.next(arglist__10440));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10440)));
var p__10419 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10440)));
return xhr__delegate(route, content, callback, p__10419);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
