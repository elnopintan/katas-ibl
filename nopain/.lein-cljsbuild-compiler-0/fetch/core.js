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
{var vec__12727__12728 = route;
var m__12729 = cljs.core.nth.call(null,vec__12727__12728,0,null);
var u__12730 = cljs.core.nth.call(null,vec__12727__12728,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__12729),u__12730], true);
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
var cur__12733 = fetch.util.clj__GT_js.call(null,d);
var query__12734 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__12733)));
return [cljs.core.str(query__12734)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__12736 = req.getResponseText();
return callback.call(null,data__12736);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__12737){
var vec__12748__12749 = p__12737;
var opts__12750 = cljs.core.nth.call(null,vec__12748__12749,0,null);
var req__12752 = (new goog.net.XhrIo());
var vec__12751__12753 = fetch.core.parse_route.call(null,route);
var method__12754 = cljs.core.nth.call(null,vec__12751__12753,0,null);
var uri__12755 = cljs.core.nth.call(null,vec__12751__12753,1,null);
var data__12756 = fetch.core.__GT_data.call(null,content);
var callback__12757 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__12757))
{goog.events.listen(req__12752,goog.net.EventType.COMPLETE,(function (){
return callback__12757.call(null,req__12752);
}));
} else
{}
return req__12752.send(uri__12755,method__12754,data__12756,(cljs.core.truth_(opts__12750)?fetch.util.clj__GT_js.call(null,opts__12750):null));
};
var xhr = function (route,content,callback,var_args){
var p__12737 = null;
if (goog.isDef(var_args)) {
  p__12737 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__12737);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__12758){
var route = cljs.core.first(arglist__12758);
var content = cljs.core.first(cljs.core.next(arglist__12758));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12758)));
var p__12737 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12758)));
return xhr__delegate(route, content, callback, p__12737);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
