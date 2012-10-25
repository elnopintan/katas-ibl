goog.provide('nopain.execs');
goog.require('cljs.core');
nopain.execs.exec = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
nopain.execs.add_f = (function add_f(n,f,s){
return cljs.core.swap_BANG_.call(null,nopain.execs.exec,cljs.core.assoc,n,cljs.core.PersistentVector.fromArray([f,s], true));
});
nopain.execs.run = (function run(n){
var vec__7375__7376 = n.call(null,cljs.core.deref.call(null,nopain.execs.exec));
var f__7377 = cljs.core.nth.call(null,vec__7375__7376,0,null);
var ___7378 = cljs.core.nth.call(null,vec__7375__7376,1,null);
return f__7377.call(null);
});
nopain.execs.stop = (function stop(n){
var vec__7383__7384 = n.call(null,cljs.core.deref.call(null,nopain.execs.exec));
var ___7385 = cljs.core.nth.call(null,vec__7383__7384,0,null);
var s__7386 = cljs.core.nth.call(null,vec__7383__7384,1,null);
return s__7386.call(null);
});
