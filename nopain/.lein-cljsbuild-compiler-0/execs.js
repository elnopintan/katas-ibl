goog.provide('nopain.execs');
goog.require('cljs.core');
nopain.execs.exec = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
nopain.execs.add_f = (function add_f(n,f,s){
return cljs.core.swap_BANG_.cljs$lang$arity$4(nopain.execs.exec,cljs.core.assoc,n,cljs.core.PersistentVector.fromArray([f,s], true));
});
nopain.execs.run = (function run(n){
var vec__16731__16732 = (n.cljs$lang$arity$1 ? n.cljs$lang$arity$1(cljs.core.deref(nopain.execs.exec)) : n.call(null,cljs.core.deref(nopain.execs.exec)));
var f__16733 = cljs.core.nth.cljs$lang$arity$3(vec__16731__16732,0,null);
var ___16734 = cljs.core.nth.cljs$lang$arity$3(vec__16731__16732,1,null);
return (f__16733.cljs$lang$arity$0 ? f__16733.cljs$lang$arity$0() : f__16733.call(null));
});
nopain.execs.stop = (function stop(n){
var vec__16739__16740 = (n.cljs$lang$arity$1 ? n.cljs$lang$arity$1(cljs.core.deref(nopain.execs.exec)) : n.call(null,cljs.core.deref(nopain.execs.exec)));
var ___16741 = cljs.core.nth.cljs$lang$arity$3(vec__16739__16740,0,null);
var s__16742 = cljs.core.nth.cljs$lang$arity$3(vec__16739__16740,1,null);
return (s__16742.cljs$lang$arity$0 ? s__16742.cljs$lang$arity$0() : s__16742.call(null));
});
