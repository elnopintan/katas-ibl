goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__7701 = (((x == null))?null:x);
if((p[goog.typeOf(x__7701)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7702__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7702 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7702__delegate.call(this, array, i, idxs);
};
G__7702.cljs$lang$maxFixedArity = 2;
G__7702.cljs$lang$applyTo = (function (arglist__7703){
var array = cljs.core.first(arglist__7703);
var i = cljs.core.first(cljs.core.next(arglist__7703));
var idxs = cljs.core.rest(cljs.core.next(arglist__7703));
return G__7702__delegate(array, i, idxs);
});
G__7702.cljs$lang$arity$variadic = G__7702__delegate;
return G__7702;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____7788 = this$;
if(and__3822__auto____7788)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7788;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2369__auto____7789 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7790 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7789)]);
if(or__3824__auto____7790)
{return or__3824__auto____7790;
} else
{var or__3824__auto____7791 = (cljs.core._invoke["_"]);
if(or__3824__auto____7791)
{return or__3824__auto____7791;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7792 = this$;
if(and__3822__auto____7792)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7792;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2369__auto____7793 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7794 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7793)]);
if(or__3824__auto____7794)
{return or__3824__auto____7794;
} else
{var or__3824__auto____7795 = (cljs.core._invoke["_"]);
if(or__3824__auto____7795)
{return or__3824__auto____7795;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7796 = this$;
if(and__3822__auto____7796)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7796;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2369__auto____7797 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7798 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7797)]);
if(or__3824__auto____7798)
{return or__3824__auto____7798;
} else
{var or__3824__auto____7799 = (cljs.core._invoke["_"]);
if(or__3824__auto____7799)
{return or__3824__auto____7799;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7800 = this$;
if(and__3822__auto____7800)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7800;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2369__auto____7801 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7802 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7801)]);
if(or__3824__auto____7802)
{return or__3824__auto____7802;
} else
{var or__3824__auto____7803 = (cljs.core._invoke["_"]);
if(or__3824__auto____7803)
{return or__3824__auto____7803;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7804 = this$;
if(and__3822__auto____7804)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7804;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2369__auto____7805 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7806 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7805)]);
if(or__3824__auto____7806)
{return or__3824__auto____7806;
} else
{var or__3824__auto____7807 = (cljs.core._invoke["_"]);
if(or__3824__auto____7807)
{return or__3824__auto____7807;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7808 = this$;
if(and__3822__auto____7808)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7808;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2369__auto____7809 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7810 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7809)]);
if(or__3824__auto____7810)
{return or__3824__auto____7810;
} else
{var or__3824__auto____7811 = (cljs.core._invoke["_"]);
if(or__3824__auto____7811)
{return or__3824__auto____7811;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7812 = this$;
if(and__3822__auto____7812)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7812;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2369__auto____7813 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7814 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7813)]);
if(or__3824__auto____7814)
{return or__3824__auto____7814;
} else
{var or__3824__auto____7815 = (cljs.core._invoke["_"]);
if(or__3824__auto____7815)
{return or__3824__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7816 = this$;
if(and__3822__auto____7816)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7816;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2369__auto____7817 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7818 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7817)]);
if(or__3824__auto____7818)
{return or__3824__auto____7818;
} else
{var or__3824__auto____7819 = (cljs.core._invoke["_"]);
if(or__3824__auto____7819)
{return or__3824__auto____7819;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7820 = this$;
if(and__3822__auto____7820)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7820;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2369__auto____7821 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7822 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7821)]);
if(or__3824__auto____7822)
{return or__3824__auto____7822;
} else
{var or__3824__auto____7823 = (cljs.core._invoke["_"]);
if(or__3824__auto____7823)
{return or__3824__auto____7823;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7824 = this$;
if(and__3822__auto____7824)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7824;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2369__auto____7825 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7826 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7825)]);
if(or__3824__auto____7826)
{return or__3824__auto____7826;
} else
{var or__3824__auto____7827 = (cljs.core._invoke["_"]);
if(or__3824__auto____7827)
{return or__3824__auto____7827;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7828 = this$;
if(and__3822__auto____7828)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7828;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2369__auto____7829 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7830 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7829)]);
if(or__3824__auto____7830)
{return or__3824__auto____7830;
} else
{var or__3824__auto____7831 = (cljs.core._invoke["_"]);
if(or__3824__auto____7831)
{return or__3824__auto____7831;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7832 = this$;
if(and__3822__auto____7832)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7832;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2369__auto____7833 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7834 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7833)]);
if(or__3824__auto____7834)
{return or__3824__auto____7834;
} else
{var or__3824__auto____7835 = (cljs.core._invoke["_"]);
if(or__3824__auto____7835)
{return or__3824__auto____7835;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7836 = this$;
if(and__3822__auto____7836)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7836;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2369__auto____7837 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7838 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7837)]);
if(or__3824__auto____7838)
{return or__3824__auto____7838;
} else
{var or__3824__auto____7839 = (cljs.core._invoke["_"]);
if(or__3824__auto____7839)
{return or__3824__auto____7839;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7840 = this$;
if(and__3822__auto____7840)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7840;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2369__auto____7841 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7842 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7841)]);
if(or__3824__auto____7842)
{return or__3824__auto____7842;
} else
{var or__3824__auto____7843 = (cljs.core._invoke["_"]);
if(or__3824__auto____7843)
{return or__3824__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7844 = this$;
if(and__3822__auto____7844)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7844;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2369__auto____7845 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7846 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7845)]);
if(or__3824__auto____7846)
{return or__3824__auto____7846;
} else
{var or__3824__auto____7847 = (cljs.core._invoke["_"]);
if(or__3824__auto____7847)
{return or__3824__auto____7847;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7848 = this$;
if(and__3822__auto____7848)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7848;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2369__auto____7849 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7850 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7849)]);
if(or__3824__auto____7850)
{return or__3824__auto____7850;
} else
{var or__3824__auto____7851 = (cljs.core._invoke["_"]);
if(or__3824__auto____7851)
{return or__3824__auto____7851;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7852 = this$;
if(and__3822__auto____7852)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7852;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2369__auto____7853 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7854 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7853)]);
if(or__3824__auto____7854)
{return or__3824__auto____7854;
} else
{var or__3824__auto____7855 = (cljs.core._invoke["_"]);
if(or__3824__auto____7855)
{return or__3824__auto____7855;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7856 = this$;
if(and__3822__auto____7856)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7856;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2369__auto____7857 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7858 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7857)]);
if(or__3824__auto____7858)
{return or__3824__auto____7858;
} else
{var or__3824__auto____7859 = (cljs.core._invoke["_"]);
if(or__3824__auto____7859)
{return or__3824__auto____7859;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7860 = this$;
if(and__3822__auto____7860)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7860;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2369__auto____7861 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7862 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7861)]);
if(or__3824__auto____7862)
{return or__3824__auto____7862;
} else
{var or__3824__auto____7863 = (cljs.core._invoke["_"]);
if(or__3824__auto____7863)
{return or__3824__auto____7863;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7864 = this$;
if(and__3822__auto____7864)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7864;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2369__auto____7865 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7866 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7865)]);
if(or__3824__auto____7866)
{return or__3824__auto____7866;
} else
{var or__3824__auto____7867 = (cljs.core._invoke["_"]);
if(or__3824__auto____7867)
{return or__3824__auto____7867;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7868 = this$;
if(and__3822__auto____7868)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7868;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2369__auto____7869 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7870 = (cljs.core._invoke[goog.typeOf(x__2369__auto____7869)]);
if(or__3824__auto____7870)
{return or__3824__auto____7870;
} else
{var or__3824__auto____7871 = (cljs.core._invoke["_"]);
if(or__3824__auto____7871)
{return or__3824__auto____7871;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____7876 = coll;
if(and__3822__auto____7876)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7876;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2369__auto____7877 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7878 = (cljs.core._count[goog.typeOf(x__2369__auto____7877)]);
if(or__3824__auto____7878)
{return or__3824__auto____7878;
} else
{var or__3824__auto____7879 = (cljs.core._count["_"]);
if(or__3824__auto____7879)
{return or__3824__auto____7879;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7884 = coll;
if(and__3822__auto____7884)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7884;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2369__auto____7885 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7886 = (cljs.core._empty[goog.typeOf(x__2369__auto____7885)]);
if(or__3824__auto____7886)
{return or__3824__auto____7886;
} else
{var or__3824__auto____7887 = (cljs.core._empty["_"]);
if(or__3824__auto____7887)
{return or__3824__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7892 = coll;
if(and__3822__auto____7892)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7892;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2369__auto____7893 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7894 = (cljs.core._conj[goog.typeOf(x__2369__auto____7893)]);
if(or__3824__auto____7894)
{return or__3824__auto____7894;
} else
{var or__3824__auto____7895 = (cljs.core._conj["_"]);
if(or__3824__auto____7895)
{return or__3824__auto____7895;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____7904 = coll;
if(and__3822__auto____7904)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7904;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2369__auto____7905 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7906 = (cljs.core._nth[goog.typeOf(x__2369__auto____7905)]);
if(or__3824__auto____7906)
{return or__3824__auto____7906;
} else
{var or__3824__auto____7907 = (cljs.core._nth["_"]);
if(or__3824__auto____7907)
{return or__3824__auto____7907;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7908 = coll;
if(and__3822__auto____7908)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7908;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2369__auto____7909 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7910 = (cljs.core._nth[goog.typeOf(x__2369__auto____7909)]);
if(or__3824__auto____7910)
{return or__3824__auto____7910;
} else
{var or__3824__auto____7911 = (cljs.core._nth["_"]);
if(or__3824__auto____7911)
{return or__3824__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____7916 = coll;
if(and__3822__auto____7916)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7916;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2369__auto____7917 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7918 = (cljs.core._first[goog.typeOf(x__2369__auto____7917)]);
if(or__3824__auto____7918)
{return or__3824__auto____7918;
} else
{var or__3824__auto____7919 = (cljs.core._first["_"]);
if(or__3824__auto____7919)
{return or__3824__auto____7919;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7924 = coll;
if(and__3822__auto____7924)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7924;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2369__auto____7925 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7926 = (cljs.core._rest[goog.typeOf(x__2369__auto____7925)]);
if(or__3824__auto____7926)
{return or__3824__auto____7926;
} else
{var or__3824__auto____7927 = (cljs.core._rest["_"]);
if(or__3824__auto____7927)
{return or__3824__auto____7927;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7932 = coll;
if(and__3822__auto____7932)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7932;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2369__auto____7933 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7934 = (cljs.core._next[goog.typeOf(x__2369__auto____7933)]);
if(or__3824__auto____7934)
{return or__3824__auto____7934;
} else
{var or__3824__auto____7935 = (cljs.core._next["_"]);
if(or__3824__auto____7935)
{return or__3824__auto____7935;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____7944 = o;
if(and__3822__auto____7944)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7944;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2369__auto____7945 = (((o == null))?null:o);
return (function (){var or__3824__auto____7946 = (cljs.core._lookup[goog.typeOf(x__2369__auto____7945)]);
if(or__3824__auto____7946)
{return or__3824__auto____7946;
} else
{var or__3824__auto____7947 = (cljs.core._lookup["_"]);
if(or__3824__auto____7947)
{return or__3824__auto____7947;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7948 = o;
if(and__3822__auto____7948)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7948;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2369__auto____7949 = (((o == null))?null:o);
return (function (){var or__3824__auto____7950 = (cljs.core._lookup[goog.typeOf(x__2369__auto____7949)]);
if(or__3824__auto____7950)
{return or__3824__auto____7950;
} else
{var or__3824__auto____7951 = (cljs.core._lookup["_"]);
if(or__3824__auto____7951)
{return or__3824__auto____7951;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____7956 = coll;
if(and__3822__auto____7956)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7956;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2369__auto____7957 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7958 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2369__auto____7957)]);
if(or__3824__auto____7958)
{return or__3824__auto____7958;
} else
{var or__3824__auto____7959 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7959)
{return or__3824__auto____7959;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7964 = coll;
if(and__3822__auto____7964)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7964;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2369__auto____7965 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7966 = (cljs.core._assoc[goog.typeOf(x__2369__auto____7965)]);
if(or__3824__auto____7966)
{return or__3824__auto____7966;
} else
{var or__3824__auto____7967 = (cljs.core._assoc["_"]);
if(or__3824__auto____7967)
{return or__3824__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7972 = coll;
if(and__3822__auto____7972)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7972;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2369__auto____7973 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7974 = (cljs.core._dissoc[goog.typeOf(x__2369__auto____7973)]);
if(or__3824__auto____7974)
{return or__3824__auto____7974;
} else
{var or__3824__auto____7975 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7975)
{return or__3824__auto____7975;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7980 = coll;
if(and__3822__auto____7980)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7980;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2369__auto____7981 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7982 = (cljs.core._key[goog.typeOf(x__2369__auto____7981)]);
if(or__3824__auto____7982)
{return or__3824__auto____7982;
} else
{var or__3824__auto____7983 = (cljs.core._key["_"]);
if(or__3824__auto____7983)
{return or__3824__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7988 = coll;
if(and__3822__auto____7988)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7988;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2369__auto____7989 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7990 = (cljs.core._val[goog.typeOf(x__2369__auto____7989)]);
if(or__3824__auto____7990)
{return or__3824__auto____7990;
} else
{var or__3824__auto____7991 = (cljs.core._val["_"]);
if(or__3824__auto____7991)
{return or__3824__auto____7991;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7996 = coll;
if(and__3822__auto____7996)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7996;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2369__auto____7997 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7998 = (cljs.core._disjoin[goog.typeOf(x__2369__auto____7997)]);
if(or__3824__auto____7998)
{return or__3824__auto____7998;
} else
{var or__3824__auto____7999 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7999)
{return or__3824__auto____7999;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8004 = coll;
if(and__3822__auto____8004)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8004;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2369__auto____8005 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8006 = (cljs.core._peek[goog.typeOf(x__2369__auto____8005)]);
if(or__3824__auto____8006)
{return or__3824__auto____8006;
} else
{var or__3824__auto____8007 = (cljs.core._peek["_"]);
if(or__3824__auto____8007)
{return or__3824__auto____8007;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8012 = coll;
if(and__3822__auto____8012)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8012;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2369__auto____8013 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8014 = (cljs.core._pop[goog.typeOf(x__2369__auto____8013)]);
if(or__3824__auto____8014)
{return or__3824__auto____8014;
} else
{var or__3824__auto____8015 = (cljs.core._pop["_"]);
if(or__3824__auto____8015)
{return or__3824__auto____8015;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8020 = coll;
if(and__3822__auto____8020)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8020;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2369__auto____8021 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8022 = (cljs.core._assoc_n[goog.typeOf(x__2369__auto____8021)]);
if(or__3824__auto____8022)
{return or__3824__auto____8022;
} else
{var or__3824__auto____8023 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8023)
{return or__3824__auto____8023;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8028 = o;
if(and__3822__auto____8028)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8028;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2369__auto____8029 = (((o == null))?null:o);
return (function (){var or__3824__auto____8030 = (cljs.core._deref[goog.typeOf(x__2369__auto____8029)]);
if(or__3824__auto____8030)
{return or__3824__auto____8030;
} else
{var or__3824__auto____8031 = (cljs.core._deref["_"]);
if(or__3824__auto____8031)
{return or__3824__auto____8031;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8036 = o;
if(and__3822__auto____8036)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8036;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2369__auto____8037 = (((o == null))?null:o);
return (function (){var or__3824__auto____8038 = (cljs.core._deref_with_timeout[goog.typeOf(x__2369__auto____8037)]);
if(or__3824__auto____8038)
{return or__3824__auto____8038;
} else
{var or__3824__auto____8039 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8039)
{return or__3824__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8044 = o;
if(and__3822__auto____8044)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8044;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2369__auto____8045 = (((o == null))?null:o);
return (function (){var or__3824__auto____8046 = (cljs.core._meta[goog.typeOf(x__2369__auto____8045)]);
if(or__3824__auto____8046)
{return or__3824__auto____8046;
} else
{var or__3824__auto____8047 = (cljs.core._meta["_"]);
if(or__3824__auto____8047)
{return or__3824__auto____8047;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8052 = o;
if(and__3822__auto____8052)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8052;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2369__auto____8053 = (((o == null))?null:o);
return (function (){var or__3824__auto____8054 = (cljs.core._with_meta[goog.typeOf(x__2369__auto____8053)]);
if(or__3824__auto____8054)
{return or__3824__auto____8054;
} else
{var or__3824__auto____8055 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8055)
{return or__3824__auto____8055;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____8064 = coll;
if(and__3822__auto____8064)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____8064;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2369__auto____8065 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8066 = (cljs.core._reduce[goog.typeOf(x__2369__auto____8065)]);
if(or__3824__auto____8066)
{return or__3824__auto____8066;
} else
{var or__3824__auto____8067 = (cljs.core._reduce["_"]);
if(or__3824__auto____8067)
{return or__3824__auto____8067;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____8068 = coll;
if(and__3822__auto____8068)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____8068;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2369__auto____8069 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8070 = (cljs.core._reduce[goog.typeOf(x__2369__auto____8069)]);
if(or__3824__auto____8070)
{return or__3824__auto____8070;
} else
{var or__3824__auto____8071 = (cljs.core._reduce["_"]);
if(or__3824__auto____8071)
{return or__3824__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____8076 = coll;
if(and__3822__auto____8076)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____8076;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2369__auto____8077 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8078 = (cljs.core._kv_reduce[goog.typeOf(x__2369__auto____8077)]);
if(or__3824__auto____8078)
{return or__3824__auto____8078;
} else
{var or__3824__auto____8079 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____8079)
{return or__3824__auto____8079;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____8084 = o;
if(and__3822__auto____8084)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____8084;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2369__auto____8085 = (((o == null))?null:o);
return (function (){var or__3824__auto____8086 = (cljs.core._equiv[goog.typeOf(x__2369__auto____8085)]);
if(or__3824__auto____8086)
{return or__3824__auto____8086;
} else
{var or__3824__auto____8087 = (cljs.core._equiv["_"]);
if(or__3824__auto____8087)
{return or__3824__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____8092 = o;
if(and__3822__auto____8092)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____8092;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2369__auto____8093 = (((o == null))?null:o);
return (function (){var or__3824__auto____8094 = (cljs.core._hash[goog.typeOf(x__2369__auto____8093)]);
if(or__3824__auto____8094)
{return or__3824__auto____8094;
} else
{var or__3824__auto____8095 = (cljs.core._hash["_"]);
if(or__3824__auto____8095)
{return or__3824__auto____8095;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____8100 = o;
if(and__3822__auto____8100)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____8100;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2369__auto____8101 = (((o == null))?null:o);
return (function (){var or__3824__auto____8102 = (cljs.core._seq[goog.typeOf(x__2369__auto____8101)]);
if(or__3824__auto____8102)
{return or__3824__auto____8102;
} else
{var or__3824__auto____8103 = (cljs.core._seq["_"]);
if(or__3824__auto____8103)
{return or__3824__auto____8103;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____8108 = coll;
if(and__3822__auto____8108)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____8108;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2369__auto____8109 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8110 = (cljs.core._rseq[goog.typeOf(x__2369__auto____8109)]);
if(or__3824__auto____8110)
{return or__3824__auto____8110;
} else
{var or__3824__auto____8111 = (cljs.core._rseq["_"]);
if(or__3824__auto____8111)
{return or__3824__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____8116 = coll;
if(and__3822__auto____8116)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____8116;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2369__auto____8117 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8118 = (cljs.core._sorted_seq[goog.typeOf(x__2369__auto____8117)]);
if(or__3824__auto____8118)
{return or__3824__auto____8118;
} else
{var or__3824__auto____8119 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____8119)
{return or__3824__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____8124 = coll;
if(and__3822__auto____8124)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____8124;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2369__auto____8125 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8126 = (cljs.core._sorted_seq_from[goog.typeOf(x__2369__auto____8125)]);
if(or__3824__auto____8126)
{return or__3824__auto____8126;
} else
{var or__3824__auto____8127 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____8127)
{return or__3824__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____8132 = coll;
if(and__3822__auto____8132)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____8132;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2369__auto____8133 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8134 = (cljs.core._entry_key[goog.typeOf(x__2369__auto____8133)]);
if(or__3824__auto____8134)
{return or__3824__auto____8134;
} else
{var or__3824__auto____8135 = (cljs.core._entry_key["_"]);
if(or__3824__auto____8135)
{return or__3824__auto____8135;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____8140 = coll;
if(and__3822__auto____8140)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____8140;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2369__auto____8141 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8142 = (cljs.core._comparator[goog.typeOf(x__2369__auto____8141)]);
if(or__3824__auto____8142)
{return or__3824__auto____8142;
} else
{var or__3824__auto____8143 = (cljs.core._comparator["_"]);
if(or__3824__auto____8143)
{return or__3824__auto____8143;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____8148 = o;
if(and__3822__auto____8148)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____8148;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2369__auto____8149 = (((o == null))?null:o);
return (function (){var or__3824__auto____8150 = (cljs.core._pr_seq[goog.typeOf(x__2369__auto____8149)]);
if(or__3824__auto____8150)
{return or__3824__auto____8150;
} else
{var or__3824__auto____8151 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____8151)
{return or__3824__auto____8151;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____8156 = d;
if(and__3822__auto____8156)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____8156;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2369__auto____8157 = (((d == null))?null:d);
return (function (){var or__3824__auto____8158 = (cljs.core._realized_QMARK_[goog.typeOf(x__2369__auto____8157)]);
if(or__3824__auto____8158)
{return or__3824__auto____8158;
} else
{var or__3824__auto____8159 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____8159)
{return or__3824__auto____8159;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____8164 = this$;
if(and__3822__auto____8164)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____8164;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2369__auto____8165 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8166 = (cljs.core._notify_watches[goog.typeOf(x__2369__auto____8165)]);
if(or__3824__auto____8166)
{return or__3824__auto____8166;
} else
{var or__3824__auto____8167 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____8167)
{return or__3824__auto____8167;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____8172 = this$;
if(and__3822__auto____8172)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____8172;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2369__auto____8173 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8174 = (cljs.core._add_watch[goog.typeOf(x__2369__auto____8173)]);
if(or__3824__auto____8174)
{return or__3824__auto____8174;
} else
{var or__3824__auto____8175 = (cljs.core._add_watch["_"]);
if(or__3824__auto____8175)
{return or__3824__auto____8175;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____8180 = this$;
if(and__3822__auto____8180)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____8180;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2369__auto____8181 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8182 = (cljs.core._remove_watch[goog.typeOf(x__2369__auto____8181)]);
if(or__3824__auto____8182)
{return or__3824__auto____8182;
} else
{var or__3824__auto____8183 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____8183)
{return or__3824__auto____8183;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____8188 = coll;
if(and__3822__auto____8188)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____8188;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2369__auto____8189 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8190 = (cljs.core._as_transient[goog.typeOf(x__2369__auto____8189)]);
if(or__3824__auto____8190)
{return or__3824__auto____8190;
} else
{var or__3824__auto____8191 = (cljs.core._as_transient["_"]);
if(or__3824__auto____8191)
{return or__3824__auto____8191;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____8196 = tcoll;
if(and__3822__auto____8196)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____8196;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2369__auto____8197 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8198 = (cljs.core._conj_BANG_[goog.typeOf(x__2369__auto____8197)]);
if(or__3824__auto____8198)
{return or__3824__auto____8198;
} else
{var or__3824__auto____8199 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____8199)
{return or__3824__auto____8199;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____8204 = tcoll;
if(and__3822__auto____8204)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____8204;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2369__auto____8205 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8206 = (cljs.core._persistent_BANG_[goog.typeOf(x__2369__auto____8205)]);
if(or__3824__auto____8206)
{return or__3824__auto____8206;
} else
{var or__3824__auto____8207 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____8207)
{return or__3824__auto____8207;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____8212 = tcoll;
if(and__3822__auto____8212)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____8212;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2369__auto____8213 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8214 = (cljs.core._assoc_BANG_[goog.typeOf(x__2369__auto____8213)]);
if(or__3824__auto____8214)
{return or__3824__auto____8214;
} else
{var or__3824__auto____8215 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____8215)
{return or__3824__auto____8215;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____8220 = tcoll;
if(and__3822__auto____8220)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____8220;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2369__auto____8221 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8222 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2369__auto____8221)]);
if(or__3824__auto____8222)
{return or__3824__auto____8222;
} else
{var or__3824__auto____8223 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____8223)
{return or__3824__auto____8223;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____8228 = tcoll;
if(and__3822__auto____8228)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____8228;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2369__auto____8229 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8230 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2369__auto____8229)]);
if(or__3824__auto____8230)
{return or__3824__auto____8230;
} else
{var or__3824__auto____8231 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____8231)
{return or__3824__auto____8231;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____8236 = tcoll;
if(and__3822__auto____8236)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____8236;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2369__auto____8237 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8238 = (cljs.core._pop_BANG_[goog.typeOf(x__2369__auto____8237)]);
if(or__3824__auto____8238)
{return or__3824__auto____8238;
} else
{var or__3824__auto____8239 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____8239)
{return or__3824__auto____8239;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____8244 = tcoll;
if(and__3822__auto____8244)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____8244;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2369__auto____8245 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8246 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2369__auto____8245)]);
if(or__3824__auto____8246)
{return or__3824__auto____8246;
} else
{var or__3824__auto____8247 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____8247)
{return or__3824__auto____8247;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____8252 = x;
if(and__3822__auto____8252)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____8252;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2369__auto____8253 = (((x == null))?null:x);
return (function (){var or__3824__auto____8254 = (cljs.core._compare[goog.typeOf(x__2369__auto____8253)]);
if(or__3824__auto____8254)
{return or__3824__auto____8254;
} else
{var or__3824__auto____8255 = (cljs.core._compare["_"]);
if(or__3824__auto____8255)
{return or__3824__auto____8255;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____8260 = coll;
if(and__3822__auto____8260)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____8260;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2369__auto____8261 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8262 = (cljs.core._drop_first[goog.typeOf(x__2369__auto____8261)]);
if(or__3824__auto____8262)
{return or__3824__auto____8262;
} else
{var or__3824__auto____8263 = (cljs.core._drop_first["_"]);
if(or__3824__auto____8263)
{return or__3824__auto____8263;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____8268 = coll;
if(and__3822__auto____8268)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____8268;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2369__auto____8269 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8270 = (cljs.core._chunked_first[goog.typeOf(x__2369__auto____8269)]);
if(or__3824__auto____8270)
{return or__3824__auto____8270;
} else
{var or__3824__auto____8271 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____8271)
{return or__3824__auto____8271;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____8276 = coll;
if(and__3822__auto____8276)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____8276;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2369__auto____8277 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8278 = (cljs.core._chunked_rest[goog.typeOf(x__2369__auto____8277)]);
if(or__3824__auto____8278)
{return or__3824__auto____8278;
} else
{var or__3824__auto____8279 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____8279)
{return or__3824__auto____8279;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8284 = coll;
if(and__3822__auto____8284)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8284;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2369__auto____8285 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8286 = (cljs.core._chunked_next[goog.typeOf(x__2369__auto____8285)]);
if(or__3824__auto____8286)
{return or__3824__auto____8286;
} else
{var or__3824__auto____8287 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8287)
{return or__3824__auto____8287;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____8289 = (x === y);
if(or__3824__auto____8289)
{return or__3824__auto____8289;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8290__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8291 = y;
var G__8292 = cljs.core.first.call(null,more);
var G__8293 = cljs.core.next.call(null,more);
x = G__8291;
y = G__8292;
more = G__8293;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8290 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8290__delegate.call(this, x, y, more);
};
G__8290.cljs$lang$maxFixedArity = 2;
G__8290.cljs$lang$applyTo = (function (arglist__8294){
var x = cljs.core.first(arglist__8294);
var y = cljs.core.first(cljs.core.next(arglist__8294));
var more = cljs.core.rest(cljs.core.next(arglist__8294));
return G__8290__delegate(x, y, more);
});
G__8290.cljs$lang$arity$variadic = G__8290__delegate;
return G__8290;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8295 = null;
var G__8295__2 = (function (o,k){
return null;
});
var G__8295__3 = (function (o,k,not_found){
return not_found;
});
G__8295 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8295__2.call(this,o,k);
case 3:
return G__8295__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8295;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8296 = null;
var G__8296__2 = (function (_,f){
return f.call(null);
});
var G__8296__3 = (function (_,f,start){
return start;
});
G__8296 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8296__2.call(this,_,f);
case 3:
return G__8296__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8296;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8297 = null;
var G__8297__2 = (function (_,n){
return null;
});
var G__8297__3 = (function (_,n,not_found){
return not_found;
});
G__8297 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8297__2.call(this,_,n);
case 3:
return G__8297__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8297;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____8298 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8298)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8298;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__8311 = cljs.core._count.call(null,cicoll);
if((cnt__8311 === 0))
{return f.call(null);
} else
{var val__8312 = cljs.core._nth.call(null,cicoll,0);
var n__8313 = 1;
while(true){
if((n__8313 < cnt__8311))
{var nval__8314 = f.call(null,val__8312,cljs.core._nth.call(null,cicoll,n__8313));
if(cljs.core.reduced_QMARK_.call(null,nval__8314))
{return cljs.core.deref.call(null,nval__8314);
} else
{{
var G__8323 = nval__8314;
var G__8324 = (n__8313 + 1);
val__8312 = G__8323;
n__8313 = G__8324;
continue;
}
}
} else
{return val__8312;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8315 = cljs.core._count.call(null,cicoll);
var val__8316 = val;
var n__8317 = 0;
while(true){
if((n__8317 < cnt__8315))
{var nval__8318 = f.call(null,val__8316,cljs.core._nth.call(null,cicoll,n__8317));
if(cljs.core.reduced_QMARK_.call(null,nval__8318))
{return cljs.core.deref.call(null,nval__8318);
} else
{{
var G__8325 = nval__8318;
var G__8326 = (n__8317 + 1);
val__8316 = G__8325;
n__8317 = G__8326;
continue;
}
}
} else
{return val__8316;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8319 = cljs.core._count.call(null,cicoll);
var val__8320 = val;
var n__8321 = idx;
while(true){
if((n__8321 < cnt__8319))
{var nval__8322 = f.call(null,val__8320,cljs.core._nth.call(null,cicoll,n__8321));
if(cljs.core.reduced_QMARK_.call(null,nval__8322))
{return cljs.core.deref.call(null,nval__8322);
} else
{{
var G__8327 = nval__8322;
var G__8328 = (n__8321 + 1);
val__8320 = G__8327;
n__8321 = G__8328;
continue;
}
}
} else
{return val__8320;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__8341 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8342 = (arr[0]);
var n__8343 = 1;
while(true){
if((n__8343 < cnt__8341))
{var nval__8344 = f.call(null,val__8342,(arr[n__8343]));
if(cljs.core.reduced_QMARK_.call(null,nval__8344))
{return cljs.core.deref.call(null,nval__8344);
} else
{{
var G__8353 = nval__8344;
var G__8354 = (n__8343 + 1);
val__8342 = G__8353;
n__8343 = G__8354;
continue;
}
}
} else
{return val__8342;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8345 = arr.length;
var val__8346 = val;
var n__8347 = 0;
while(true){
if((n__8347 < cnt__8345))
{var nval__8348 = f.call(null,val__8346,(arr[n__8347]));
if(cljs.core.reduced_QMARK_.call(null,nval__8348))
{return cljs.core.deref.call(null,nval__8348);
} else
{{
var G__8355 = nval__8348;
var G__8356 = (n__8347 + 1);
val__8346 = G__8355;
n__8347 = G__8356;
continue;
}
}
} else
{return val__8346;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8349 = arr.length;
var val__8350 = val;
var n__8351 = idx;
while(true){
if((n__8351 < cnt__8349))
{var nval__8352 = f.call(null,val__8350,(arr[n__8351]));
if(cljs.core.reduced_QMARK_.call(null,nval__8352))
{return cljs.core.deref.call(null,nval__8352);
} else
{{
var G__8357 = nval__8352;
var G__8358 = (n__8351 + 1);
val__8350 = G__8357;
n__8351 = G__8358;
continue;
}
}
} else
{return val__8350;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8360 = this;
if(((this__8360.i + 1) < this__8360.a.length))
{return (new cljs.core.IndexedSeq(this__8360.a,(this__8360.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8361 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8362 = this;
var c__8363 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8363 > 0))
{return (new cljs.core.RSeq(coll,(c__8363 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8364 = this;
var this__8365 = this;
return cljs.core.pr_str.call(null,this__8365);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8366 = this;
if(cljs.core.counted_QMARK_.call(null,this__8366.a))
{return cljs.core.ci_reduce.call(null,this__8366.a,f,(this__8366.a[this__8366.i]),(this__8366.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8366.a[this__8366.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8367 = this;
if(cljs.core.counted_QMARK_.call(null,this__8367.a))
{return cljs.core.ci_reduce.call(null,this__8367.a,f,start,this__8367.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8368 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8369 = this;
return (this__8369.a.length - this__8369.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8370 = this;
return (this__8370.a[this__8370.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8371 = this;
if(((this__8371.i + 1) < this__8371.a.length))
{return (new cljs.core.IndexedSeq(this__8371.a,(this__8371.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8372 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8373 = this;
var i__8374 = (n + this__8373.i);
if((i__8374 < this__8373.a.length))
{return (this__8373.a[i__8374]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8375 = this;
var i__8376 = (n + this__8375.i);
if((i__8376 < this__8375.a.length))
{return (this__8375.a[i__8376]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8377 = null;
var G__8377__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8377__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8377 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8377__2.call(this,array,f);
case 3:
return G__8377__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8377;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8378 = null;
var G__8378__2 = (function (array,k){
return (array[k]);
});
var G__8378__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8378 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8378__2.call(this,array,k);
case 3:
return G__8378__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8378;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8379 = null;
var G__8379__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8379__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8379 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8379__2.call(this,array,n);
case 3:
return G__8379__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8379;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8380 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8381 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8382 = this;
var this__8383 = this;
return cljs.core.pr_str.call(null,this__8383);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8384 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8385 = this;
return (this__8385.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8386 = this;
return cljs.core._nth.call(null,this__8386.ci,this__8386.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8387 = this;
if((this__8387.i > 0))
{return (new cljs.core.RSeq(this__8387.ci,(this__8387.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8388 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8389 = this;
return (new cljs.core.RSeq(this__8389.ci,this__8389.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8390 = this;
return this__8390.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8394__8395 = coll;
if(G__8394__8395)
{if((function (){var or__3824__auto____8396 = (G__8394__8395.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____8396)
{return or__3824__auto____8396;
} else
{return G__8394__8395.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8394__8395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8394__8395);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8394__8395);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8401__8402 = coll;
if(G__8401__8402)
{if((function (){var or__3824__auto____8403 = (G__8401__8402.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8403)
{return or__3824__auto____8403;
} else
{return G__8401__8402.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8401__8402.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8401__8402);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8401__8402);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8404 = cljs.core.seq.call(null,coll);
if((s__8404 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8404);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__8409__8410 = coll;
if(G__8409__8410)
{if((function (){var or__3824__auto____8411 = (G__8409__8410.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8411)
{return or__3824__auto____8411;
} else
{return G__8409__8410.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8409__8410.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8409__8410);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8409__8410);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8412 = cljs.core.seq.call(null,coll);
if(!((s__8412 == null)))
{return cljs.core._rest.call(null,s__8412);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8416__8417 = coll;
if(G__8416__8417)
{if((function (){var or__3824__auto____8418 = (G__8416__8417.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____8418)
{return or__3824__auto____8418;
} else
{return G__8416__8417.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8416__8417.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8416__8417);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8416__8417);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__8420 = cljs.core.next.call(null,s);
if(!((sn__8420 == null)))
{{
var G__8421 = sn__8420;
s = G__8421;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__8422__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8423 = conj.call(null,coll,x);
var G__8424 = cljs.core.first.call(null,xs);
var G__8425 = cljs.core.next.call(null,xs);
coll = G__8423;
x = G__8424;
xs = G__8425;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8422 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8422__delegate.call(this, coll, x, xs);
};
G__8422.cljs$lang$maxFixedArity = 2;
G__8422.cljs$lang$applyTo = (function (arglist__8426){
var coll = cljs.core.first(arglist__8426);
var x = cljs.core.first(cljs.core.next(arglist__8426));
var xs = cljs.core.rest(cljs.core.next(arglist__8426));
return G__8422__delegate(coll, x, xs);
});
G__8422.cljs$lang$arity$variadic = G__8422__delegate;
return G__8422;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__8429 = cljs.core.seq.call(null,coll);
var acc__8430 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8429))
{return (acc__8430 + cljs.core._count.call(null,s__8429));
} else
{{
var G__8431 = cljs.core.next.call(null,s__8429);
var G__8432 = (acc__8430 + 1);
s__8429 = G__8431;
acc__8430 = G__8432;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__8439__8440 = coll;
if(G__8439__8440)
{if((function (){var or__3824__auto____8441 = (G__8439__8440.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8441)
{return or__3824__auto____8441;
} else
{return G__8439__8440.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8439__8440.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8439__8440);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8439__8440);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__8442__8443 = coll;
if(G__8442__8443)
{if((function (){var or__3824__auto____8444 = (G__8442__8443.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8444)
{return or__3824__auto____8444;
} else
{return G__8442__8443.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8442__8443.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8442__8443);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8442__8443);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__8447__delegate = function (coll,k,v,kvs){
while(true){
var ret__8446 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8448 = ret__8446;
var G__8449 = cljs.core.first.call(null,kvs);
var G__8450 = cljs.core.second.call(null,kvs);
var G__8451 = cljs.core.nnext.call(null,kvs);
coll = G__8448;
k = G__8449;
v = G__8450;
kvs = G__8451;
continue;
}
} else
{return ret__8446;
}
break;
}
};
var G__8447 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8447__delegate.call(this, coll, k, v, kvs);
};
G__8447.cljs$lang$maxFixedArity = 3;
G__8447.cljs$lang$applyTo = (function (arglist__8452){
var coll = cljs.core.first(arglist__8452);
var k = cljs.core.first(cljs.core.next(arglist__8452));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8452)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8452)));
return G__8447__delegate(coll, k, v, kvs);
});
G__8447.cljs$lang$arity$variadic = G__8447__delegate;
return G__8447;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__8455__delegate = function (coll,k,ks){
while(true){
var ret__8454 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8456 = ret__8454;
var G__8457 = cljs.core.first.call(null,ks);
var G__8458 = cljs.core.next.call(null,ks);
coll = G__8456;
k = G__8457;
ks = G__8458;
continue;
}
} else
{return ret__8454;
}
break;
}
};
var G__8455 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8455__delegate.call(this, coll, k, ks);
};
G__8455.cljs$lang$maxFixedArity = 2;
G__8455.cljs$lang$applyTo = (function (arglist__8459){
var coll = cljs.core.first(arglist__8459);
var k = cljs.core.first(cljs.core.next(arglist__8459));
var ks = cljs.core.rest(cljs.core.next(arglist__8459));
return G__8455__delegate(coll, k, ks);
});
G__8455.cljs$lang$arity$variadic = G__8455__delegate;
return G__8455;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__8463__8464 = o;
if(G__8463__8464)
{if((function (){var or__3824__auto____8465 = (G__8463__8464.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8465)
{return or__3824__auto____8465;
} else
{return G__8463__8464.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8463__8464.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8463__8464);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8463__8464);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__8468__delegate = function (coll,k,ks){
while(true){
var ret__8467 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8469 = ret__8467;
var G__8470 = cljs.core.first.call(null,ks);
var G__8471 = cljs.core.next.call(null,ks);
coll = G__8469;
k = G__8470;
ks = G__8471;
continue;
}
} else
{return ret__8467;
}
break;
}
};
var G__8468 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8468__delegate.call(this, coll, k, ks);
};
G__8468.cljs$lang$maxFixedArity = 2;
G__8468.cljs$lang$applyTo = (function (arglist__8472){
var coll = cljs.core.first(arglist__8472);
var k = cljs.core.first(cljs.core.next(arglist__8472));
var ks = cljs.core.rest(cljs.core.next(arglist__8472));
return G__8468__delegate(coll, k, ks);
});
G__8468.cljs$lang$arity$variadic = G__8468__delegate;
return G__8468;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__8474 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8474);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8474;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8476 = (cljs.core.string_hash_cache[k]);
if(!((h__8476 == null)))
{return h__8476;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____8478 = goog.isString(o);
if(and__3822__auto____8478)
{return check_cache;
} else
{return and__3822__auto____8478;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8482__8483 = x;
if(G__8482__8483)
{if((function (){var or__3824__auto____8484 = (G__8482__8483.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____8484)
{return or__3824__auto____8484;
} else
{return G__8482__8483.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8482__8483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8482__8483);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8482__8483);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8488__8489 = x;
if(G__8488__8489)
{if((function (){var or__3824__auto____8490 = (G__8488__8489.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____8490)
{return or__3824__auto____8490;
} else
{return G__8488__8489.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8488__8489.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8488__8489);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8488__8489);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8494__8495 = x;
if(G__8494__8495)
{if((function (){var or__3824__auto____8496 = (G__8494__8495.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____8496)
{return or__3824__auto____8496;
} else
{return G__8494__8495.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8494__8495.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8494__8495);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8494__8495);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8500__8501 = x;
if(G__8500__8501)
{if((function (){var or__3824__auto____8502 = (G__8500__8501.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____8502)
{return or__3824__auto____8502;
} else
{return G__8500__8501.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8500__8501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8500__8501);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8500__8501);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8506__8507 = x;
if(G__8506__8507)
{if((function (){var or__3824__auto____8508 = (G__8506__8507.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____8508)
{return or__3824__auto____8508;
} else
{return G__8506__8507.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8506__8507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8506__8507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8506__8507);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8512__8513 = x;
if(G__8512__8513)
{if((function (){var or__3824__auto____8514 = (G__8512__8513.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8514)
{return or__3824__auto____8514;
} else
{return G__8512__8513.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8512__8513.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8512__8513);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8512__8513);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8518__8519 = x;
if(G__8518__8519)
{if((function (){var or__3824__auto____8520 = (G__8518__8519.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8520)
{return or__3824__auto____8520;
} else
{return G__8518__8519.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8518__8519.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8518__8519);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8518__8519);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8524__8525 = x;
if(G__8524__8525)
{if((function (){var or__3824__auto____8526 = (G__8524__8525.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8526)
{return or__3824__auto____8526;
} else
{return G__8524__8525.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8524__8525.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8524__8525);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8524__8525);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8530__8531 = x;
if(G__8530__8531)
{if((function (){var or__3824__auto____8532 = (G__8530__8531.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____8532)
{return or__3824__auto____8532;
} else
{return G__8530__8531.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8530__8531.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8530__8531);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8530__8531);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8536__8537 = x;
if(G__8536__8537)
{if(cljs.core.truth_((function (){var or__3824__auto____8538 = null;
if(cljs.core.truth_(or__3824__auto____8538))
{return or__3824__auto____8538;
} else
{return G__8536__8537.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8536__8537.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8536__8537);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8536__8537);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__8539__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8539 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8539__delegate.call(this, keyvals);
};
G__8539.cljs$lang$maxFixedArity = 0;
G__8539.cljs$lang$applyTo = (function (arglist__8540){
var keyvals = cljs.core.seq(arglist__8540);;
return G__8539__delegate(keyvals);
});
G__8539.cljs$lang$arity$variadic = G__8539__delegate;
return G__8539;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__8542 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8542.push(key);
}));
return keys__8542;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8546 = i;
var j__8547 = j;
var len__8548 = len;
while(true){
if((len__8548 === 0))
{return to;
} else
{(to[j__8547] = (from[i__8546]));
{
var G__8549 = (i__8546 + 1);
var G__8550 = (j__8547 + 1);
var G__8551 = (len__8548 - 1);
i__8546 = G__8549;
j__8547 = G__8550;
len__8548 = G__8551;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8555 = (i + (len - 1));
var j__8556 = (j + (len - 1));
var len__8557 = len;
while(true){
if((len__8557 === 0))
{return to;
} else
{(to[j__8556] = (from[i__8555]));
{
var G__8558 = (i__8555 - 1);
var G__8559 = (j__8556 - 1);
var G__8560 = (len__8557 - 1);
i__8555 = G__8558;
j__8556 = G__8559;
len__8557 = G__8560;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__8564__8565 = s;
if(G__8564__8565)
{if((function (){var or__3824__auto____8566 = (G__8564__8565.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8566)
{return or__3824__auto____8566;
} else
{return G__8564__8565.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8564__8565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8564__8565);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8564__8565);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8570__8571 = s;
if(G__8570__8571)
{if((function (){var or__3824__auto____8572 = (G__8570__8571.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8572)
{return or__3824__auto____8572;
} else
{return G__8570__8571.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8570__8571.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8570__8571);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8570__8571);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____8575 = goog.isString(x);
if(and__3822__auto____8575)
{return !((function (){var or__3824__auto____8576 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____8576)
{return or__3824__auto____8576;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____8575;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8578 = goog.isString(x);
if(and__3822__auto____8578)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____8578;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8580 = goog.isString(x);
if(and__3822__auto____8580)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____8580;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____8585 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____8585)
{return or__3824__auto____8585;
} else
{var G__8586__8587 = f;
if(G__8586__8587)
{if((function (){var or__3824__auto____8588 = (G__8586__8587.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____8588)
{return or__3824__auto____8588;
} else
{return G__8586__8587.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8586__8587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8586__8587);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8586__8587);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8590 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____8590)
{return (n == n.toFixed());
} else
{return and__3822__auto____8590;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8593 = coll;
if(cljs.core.truth_(and__3822__auto____8593))
{var and__3822__auto____8594 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____8594)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8594;
}
} else
{return and__3822__auto____8593;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__8603__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8599 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8600 = more;
while(true){
var x__8601 = cljs.core.first.call(null,xs__8600);
var etc__8602 = cljs.core.next.call(null,xs__8600);
if(cljs.core.truth_(xs__8600))
{if(cljs.core.contains_QMARK_.call(null,s__8599,x__8601))
{return false;
} else
{{
var G__8604 = cljs.core.conj.call(null,s__8599,x__8601);
var G__8605 = etc__8602;
s__8599 = G__8604;
xs__8600 = G__8605;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8603 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8603__delegate.call(this, x, y, more);
};
G__8603.cljs$lang$maxFixedArity = 2;
G__8603.cljs$lang$applyTo = (function (arglist__8606){
var x = cljs.core.first(arglist__8606);
var y = cljs.core.first(cljs.core.next(arglist__8606));
var more = cljs.core.rest(cljs.core.next(arglist__8606));
return G__8603__delegate(x, y, more);
});
G__8603.cljs$lang$arity$variadic = G__8603__delegate;
return G__8603;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__8610__8611 = x;
if(G__8610__8611)
{if(cljs.core.truth_((function (){var or__3824__auto____8612 = null;
if(cljs.core.truth_(or__3824__auto____8612))
{return or__3824__auto____8612;
} else
{return G__8610__8611.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8610__8611.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8610__8611);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8610__8611);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__8617 = cljs.core.count.call(null,xs);
var yl__8618 = cljs.core.count.call(null,ys);
if((xl__8617 < yl__8618))
{return -1;
} else
{if((xl__8617 > yl__8618))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8617,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8619 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____8620 = (d__8619 === 0);
if(and__3822__auto____8620)
{return ((n + 1) < len);
} else
{return and__3822__auto____8620;
}
})())
{{
var G__8621 = xs;
var G__8622 = ys;
var G__8623 = len;
var G__8624 = (n + 1);
xs = G__8621;
ys = G__8622;
len = G__8623;
n = G__8624;
continue;
}
} else
{return d__8619;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8626 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8626))
{return r__8626;
} else
{if(cljs.core.truth_(r__8626))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__8628 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8628,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8628);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____8634 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8634)
{var s__8635 = temp__3971__auto____8634;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8635),cljs.core.next.call(null,s__8635));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8636 = val;
var coll__8637 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8637)
{var nval__8638 = f.call(null,val__8636,cljs.core.first.call(null,coll__8637));
if(cljs.core.reduced_QMARK_.call(null,nval__8638))
{return cljs.core.deref.call(null,nval__8638);
} else
{{
var G__8639 = nval__8638;
var G__8640 = cljs.core.next.call(null,coll__8637);
val__8636 = G__8639;
coll__8637 = G__8640;
continue;
}
}
} else
{return val__8636;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__8642 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8642);
return cljs.core.vec.call(null,a__8642);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__8649__8650 = coll;
if(G__8649__8650)
{if((function (){var or__3824__auto____8651 = (G__8649__8650.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8651)
{return or__3824__auto____8651;
} else
{return G__8649__8650.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8649__8650.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8649__8650);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8649__8650);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8652__8653 = coll;
if(G__8652__8653)
{if((function (){var or__3824__auto____8654 = (G__8652__8653.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8654)
{return or__3824__auto____8654;
} else
{return G__8652__8653.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8652__8653.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8652__8653);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8652__8653);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__8655 = this;
return this__8655.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__8656__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8656__delegate.call(this, x, y, more);
};
G__8656.cljs$lang$maxFixedArity = 2;
G__8656.cljs$lang$applyTo = (function (arglist__8657){
var x = cljs.core.first(arglist__8657);
var y = cljs.core.first(cljs.core.next(arglist__8657));
var more = cljs.core.rest(cljs.core.next(arglist__8657));
return G__8656__delegate(x, y, more);
});
G__8656.cljs$lang$arity$variadic = G__8656__delegate;
return G__8656;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__8658__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8658 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8658__delegate.call(this, x, y, more);
};
G__8658.cljs$lang$maxFixedArity = 2;
G__8658.cljs$lang$applyTo = (function (arglist__8659){
var x = cljs.core.first(arglist__8659);
var y = cljs.core.first(cljs.core.next(arglist__8659));
var more = cljs.core.rest(cljs.core.next(arglist__8659));
return G__8658__delegate(x, y, more);
});
G__8658.cljs$lang$arity$variadic = G__8658__delegate;
return G__8658;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__8660__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8660 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8660__delegate.call(this, x, y, more);
};
G__8660.cljs$lang$maxFixedArity = 2;
G__8660.cljs$lang$applyTo = (function (arglist__8661){
var x = cljs.core.first(arglist__8661);
var y = cljs.core.first(cljs.core.next(arglist__8661));
var more = cljs.core.rest(cljs.core.next(arglist__8661));
return G__8660__delegate(x, y, more);
});
G__8660.cljs$lang$arity$variadic = G__8660__delegate;
return G__8660;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__8662__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8662 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8662__delegate.call(this, x, y, more);
};
G__8662.cljs$lang$maxFixedArity = 2;
G__8662.cljs$lang$applyTo = (function (arglist__8663){
var x = cljs.core.first(arglist__8663);
var y = cljs.core.first(cljs.core.next(arglist__8663));
var more = cljs.core.rest(cljs.core.next(arglist__8663));
return G__8662__delegate(x, y, more);
});
G__8662.cljs$lang$arity$variadic = G__8662__delegate;
return G__8662;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__8664__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8665 = y;
var G__8666 = cljs.core.first.call(null,more);
var G__8667 = cljs.core.next.call(null,more);
x = G__8665;
y = G__8666;
more = G__8667;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8664 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8664__delegate.call(this, x, y, more);
};
G__8664.cljs$lang$maxFixedArity = 2;
G__8664.cljs$lang$applyTo = (function (arglist__8668){
var x = cljs.core.first(arglist__8668);
var y = cljs.core.first(cljs.core.next(arglist__8668));
var more = cljs.core.rest(cljs.core.next(arglist__8668));
return G__8664__delegate(x, y, more);
});
G__8664.cljs$lang$arity$variadic = G__8664__delegate;
return G__8664;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__8669__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8670 = y;
var G__8671 = cljs.core.first.call(null,more);
var G__8672 = cljs.core.next.call(null,more);
x = G__8670;
y = G__8671;
more = G__8672;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8669 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8669__delegate.call(this, x, y, more);
};
G__8669.cljs$lang$maxFixedArity = 2;
G__8669.cljs$lang$applyTo = (function (arglist__8673){
var x = cljs.core.first(arglist__8673);
var y = cljs.core.first(cljs.core.next(arglist__8673));
var more = cljs.core.rest(cljs.core.next(arglist__8673));
return G__8669__delegate(x, y, more);
});
G__8669.cljs$lang$arity$variadic = G__8669__delegate;
return G__8669;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__8674__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8675 = y;
var G__8676 = cljs.core.first.call(null,more);
var G__8677 = cljs.core.next.call(null,more);
x = G__8675;
y = G__8676;
more = G__8677;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8674 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8674__delegate.call(this, x, y, more);
};
G__8674.cljs$lang$maxFixedArity = 2;
G__8674.cljs$lang$applyTo = (function (arglist__8678){
var x = cljs.core.first(arglist__8678);
var y = cljs.core.first(cljs.core.next(arglist__8678));
var more = cljs.core.rest(cljs.core.next(arglist__8678));
return G__8674__delegate(x, y, more);
});
G__8674.cljs$lang$arity$variadic = G__8674__delegate;
return G__8674;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__8679__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8680 = y;
var G__8681 = cljs.core.first.call(null,more);
var G__8682 = cljs.core.next.call(null,more);
x = G__8680;
y = G__8681;
more = G__8682;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8679 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8679__delegate.call(this, x, y, more);
};
G__8679.cljs$lang$maxFixedArity = 2;
G__8679.cljs$lang$applyTo = (function (arglist__8683){
var x = cljs.core.first(arglist__8683);
var y = cljs.core.first(cljs.core.next(arglist__8683));
var more = cljs.core.rest(cljs.core.next(arglist__8683));
return G__8679__delegate(x, y, more);
});
G__8679.cljs$lang$arity$variadic = G__8679__delegate;
return G__8679;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__8684__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8684 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8684__delegate.call(this, x, y, more);
};
G__8684.cljs$lang$maxFixedArity = 2;
G__8684.cljs$lang$applyTo = (function (arglist__8685){
var x = cljs.core.first(arglist__8685);
var y = cljs.core.first(cljs.core.next(arglist__8685));
var more = cljs.core.rest(cljs.core.next(arglist__8685));
return G__8684__delegate(x, y, more);
});
G__8684.cljs$lang$arity$variadic = G__8684__delegate;
return G__8684;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__8686__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8686 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8686__delegate.call(this, x, y, more);
};
G__8686.cljs$lang$maxFixedArity = 2;
G__8686.cljs$lang$applyTo = (function (arglist__8687){
var x = cljs.core.first(arglist__8687);
var y = cljs.core.first(cljs.core.next(arglist__8687));
var more = cljs.core.rest(cljs.core.next(arglist__8687));
return G__8686__delegate(x, y, more);
});
G__8686.cljs$lang$arity$variadic = G__8686__delegate;
return G__8686;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8689 = (n % d);
return cljs.core.fix.call(null,((n - rem__8689) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8691 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8691));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__8694 = (v - ((v >> 1) & 1431655765));
var v__8695 = ((v__8694 & 858993459) + ((v__8694 >> 2) & 858993459));
return ((((v__8695 + (v__8695 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__8696__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8697 = y;
var G__8698 = cljs.core.first.call(null,more);
var G__8699 = cljs.core.next.call(null,more);
x = G__8697;
y = G__8698;
more = G__8699;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8696 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8696__delegate.call(this, x, y, more);
};
G__8696.cljs$lang$maxFixedArity = 2;
G__8696.cljs$lang$applyTo = (function (arglist__8700){
var x = cljs.core.first(arglist__8700);
var y = cljs.core.first(cljs.core.next(arglist__8700));
var more = cljs.core.rest(cljs.core.next(arglist__8700));
return G__8696__delegate(x, y, more);
});
G__8696.cljs$lang$arity$variadic = G__8696__delegate;
return G__8696;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8704 = n;
var xs__8705 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8706 = xs__8705;
if(and__3822__auto____8706)
{return (n__8704 > 0);
} else
{return and__3822__auto____8706;
}
})()))
{{
var G__8707 = (n__8704 - 1);
var G__8708 = cljs.core.next.call(null,xs__8705);
n__8704 = G__8707;
xs__8705 = G__8708;
continue;
}
} else
{return xs__8705;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8709__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8710 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8711 = cljs.core.next.call(null,more);
sb = G__8710;
more = G__8711;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8709 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8709__delegate.call(this, x, ys);
};
G__8709.cljs$lang$maxFixedArity = 1;
G__8709.cljs$lang$applyTo = (function (arglist__8712){
var x = cljs.core.first(arglist__8712);
var ys = cljs.core.rest(arglist__8712);
return G__8709__delegate(x, ys);
});
G__8709.cljs$lang$arity$variadic = G__8709__delegate;
return G__8709;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8713__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8714 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8715 = cljs.core.next.call(null,more);
sb = G__8714;
more = G__8715;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8713 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8713__delegate.call(this, x, ys);
};
G__8713.cljs$lang$maxFixedArity = 1;
G__8713.cljs$lang$applyTo = (function (arglist__8716){
var x = cljs.core.first(arglist__8716);
var ys = cljs.core.rest(arglist__8716);
return G__8713__delegate(x, ys);
});
G__8713.cljs$lang$arity$variadic = G__8713__delegate;
return G__8713;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__8717){
var fmt = cljs.core.first(arglist__8717);
var args = cljs.core.rest(arglist__8717);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8720 = cljs.core.seq.call(null,x);
var ys__8721 = cljs.core.seq.call(null,y);
while(true){
if((xs__8720 == null))
{return (ys__8721 == null);
} else
{if((ys__8721 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8720),cljs.core.first.call(null,ys__8721)))
{{
var G__8722 = cljs.core.next.call(null,xs__8720);
var G__8723 = cljs.core.next.call(null,ys__8721);
xs__8720 = G__8722;
ys__8721 = G__8723;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8724_SHARP_,p2__8725_SHARP_){
return cljs.core.hash_combine.call(null,p1__8724_SHARP_,cljs.core.hash.call(null,p2__8725_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8729 = 0;
var s__8730 = cljs.core.seq.call(null,m);
while(true){
if(s__8730)
{var e__8731 = cljs.core.first.call(null,s__8730);
{
var G__8732 = ((h__8729 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8731)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8731)))) % 4503599627370496);
var G__8733 = cljs.core.next.call(null,s__8730);
h__8729 = G__8732;
s__8730 = G__8733;
continue;
}
} else
{return h__8729;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8737 = 0;
var s__8738 = cljs.core.seq.call(null,s);
while(true){
if(s__8738)
{var e__8739 = cljs.core.first.call(null,s__8738);
{
var G__8740 = ((h__8737 + cljs.core.hash.call(null,e__8739)) % 4503599627370496);
var G__8741 = cljs.core.next.call(null,s__8738);
h__8737 = G__8740;
s__8738 = G__8741;
continue;
}
} else
{return h__8737;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8762__8763 = cljs.core.seq.call(null,fn_map);
if(G__8762__8763)
{var G__8765__8767 = cljs.core.first.call(null,G__8762__8763);
var vec__8766__8768 = G__8765__8767;
var key_name__8769 = cljs.core.nth.call(null,vec__8766__8768,0,null);
var f__8770 = cljs.core.nth.call(null,vec__8766__8768,1,null);
var G__8762__8771 = G__8762__8763;
var G__8765__8772 = G__8765__8767;
var G__8762__8773 = G__8762__8771;
while(true){
var vec__8774__8775 = G__8765__8772;
var key_name__8776 = cljs.core.nth.call(null,vec__8774__8775,0,null);
var f__8777 = cljs.core.nth.call(null,vec__8774__8775,1,null);
var G__8762__8778 = G__8762__8773;
var str_name__8779 = cljs.core.name.call(null,key_name__8776);
(obj[str_name__8779] = f__8777);
var temp__3974__auto____8780 = cljs.core.next.call(null,G__8762__8778);
if(temp__3974__auto____8780)
{var G__8762__8781 = temp__3974__auto____8780;
{
var G__8782 = cljs.core.first.call(null,G__8762__8781);
var G__8783 = G__8762__8781;
G__8765__8772 = G__8782;
G__8762__8773 = G__8783;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8784 = this;
var h__2198__auto____8785 = this__8784.__hash;
if(!((h__2198__auto____8785 == null)))
{return h__2198__auto____8785;
} else
{var h__2198__auto____8786 = cljs.core.hash_coll.call(null,coll);
this__8784.__hash = h__2198__auto____8786;
return h__2198__auto____8786;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8787 = this;
if((this__8787.count === 1))
{return null;
} else
{return this__8787.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8788 = this;
return (new cljs.core.List(this__8788.meta,o,coll,(this__8788.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8789 = this;
var this__8790 = this;
return cljs.core.pr_str.call(null,this__8790);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8791 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8792 = this;
return this__8792.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8793 = this;
return this__8793.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8794 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8795 = this;
return this__8795.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8796 = this;
if((this__8796.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8796.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8797 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8798 = this;
return (new cljs.core.List(meta,this__8798.first,this__8798.rest,this__8798.count,this__8798.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8799 = this;
return this__8799.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8800 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8801 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8802 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8803 = this;
return (new cljs.core.List(this__8803.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8804 = this;
var this__8805 = this;
return cljs.core.pr_str.call(null,this__8805);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8806 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8807 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8808 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8809 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8810 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8811 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8812 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8813 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8814 = this;
return this__8814.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8815 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8819__8820 = coll;
if(G__8819__8820)
{if((function (){var or__3824__auto____8821 = (G__8819__8820.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____8821)
{return or__3824__auto____8821;
} else
{return G__8819__8820.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8819__8820.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8819__8820);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8819__8820);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__8822__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8822 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8822__delegate.call(this, x, y, z, items);
};
G__8822.cljs$lang$maxFixedArity = 3;
G__8822.cljs$lang$applyTo = (function (arglist__8823){
var x = cljs.core.first(arglist__8823);
var y = cljs.core.first(cljs.core.next(arglist__8823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8823)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8823)));
return G__8822__delegate(x, y, z, items);
});
G__8822.cljs$lang$arity$variadic = G__8822__delegate;
return G__8822;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8824 = this;
var h__2198__auto____8825 = this__8824.__hash;
if(!((h__2198__auto____8825 == null)))
{return h__2198__auto____8825;
} else
{var h__2198__auto____8826 = cljs.core.hash_coll.call(null,coll);
this__8824.__hash = h__2198__auto____8826;
return h__2198__auto____8826;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8827 = this;
if((this__8827.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8827.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8828 = this;
return (new cljs.core.Cons(null,o,coll,this__8828.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8829 = this;
var this__8830 = this;
return cljs.core.pr_str.call(null,this__8830);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8831 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8832 = this;
return this__8832.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8833 = this;
if((this__8833.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8833.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8834 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8835 = this;
return (new cljs.core.Cons(meta,this__8835.first,this__8835.rest,this__8835.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8836 = this;
return this__8836.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8837 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8837.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____8842 = (coll == null);
if(or__3824__auto____8842)
{return or__3824__auto____8842;
} else
{var G__8843__8844 = coll;
if(G__8843__8844)
{if((function (){var or__3824__auto____8845 = (G__8843__8844.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8845)
{return or__3824__auto____8845;
} else
{return G__8843__8844.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8843__8844.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8843__8844);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8843__8844);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8849__8850 = x;
if(G__8849__8850)
{if((function (){var or__3824__auto____8851 = (G__8849__8850.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____8851)
{return or__3824__auto____8851;
} else
{return G__8849__8850.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8849__8850.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8849__8850);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8849__8850);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8852 = null;
var G__8852__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8852__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8852 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8852__2.call(this,string,f);
case 3:
return G__8852__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8852;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8853 = null;
var G__8853__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8853__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8853 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8853__2.call(this,string,k);
case 3:
return G__8853__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8853;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8854 = null;
var G__8854__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8854__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8854 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8854__2.call(this,string,n);
case 3:
return G__8854__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8854;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__8866 = null;
var G__8866__2 = (function (this_sym8857,coll){
var this__8859 = this;
var this_sym8857__8860 = this;
var ___8861 = this_sym8857__8860;
if((coll == null))
{return null;
} else
{var strobj__8862 = coll.strobj;
if((strobj__8862 == null))
{return cljs.core._lookup.call(null,coll,this__8859.k,null);
} else
{return (strobj__8862[this__8859.k]);
}
}
});
var G__8866__3 = (function (this_sym8858,coll,not_found){
var this__8859 = this;
var this_sym8858__8863 = this;
var ___8864 = this_sym8858__8863;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8859.k,not_found);
}
});
G__8866 = function(this_sym8858,coll,not_found){
switch(arguments.length){
case 2:
return G__8866__2.call(this,this_sym8858,coll);
case 3:
return G__8866__3.call(this,this_sym8858,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8866;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8855,args8856){
var this__8865 = this;
return this_sym8855.call.apply(this_sym8855,[this_sym8855].concat(args8856.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8875 = null;
var G__8875__2 = (function (this_sym8869,coll){
var this_sym8869__8871 = this;
var this__8872 = this_sym8869__8871;
return cljs.core._lookup.call(null,coll,this__8872.toString(),null);
});
var G__8875__3 = (function (this_sym8870,coll,not_found){
var this_sym8870__8873 = this;
var this__8874 = this_sym8870__8873;
return cljs.core._lookup.call(null,coll,this__8874.toString(),not_found);
});
G__8875 = function(this_sym8870,coll,not_found){
switch(arguments.length){
case 2:
return G__8875__2.call(this,this_sym8870,coll);
case 3:
return G__8875__3.call(this,this_sym8870,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8875;
})()
;
String.prototype.apply = (function (this_sym8867,args8868){
return this_sym8867.call.apply(this_sym8867,[this_sym8867].concat(args8868.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8877 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8877;
} else
{lazy_seq.x = x__8877.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8878 = this;
var h__2198__auto____8879 = this__8878.__hash;
if(!((h__2198__auto____8879 == null)))
{return h__2198__auto____8879;
} else
{var h__2198__auto____8880 = cljs.core.hash_coll.call(null,coll);
this__8878.__hash = h__2198__auto____8880;
return h__2198__auto____8880;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8881 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8882 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8883 = this;
var this__8884 = this;
return cljs.core.pr_str.call(null,this__8884);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8885 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8886 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8887 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8888 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8889 = this;
return (new cljs.core.LazySeq(meta,this__8889.realized,this__8889.x,this__8889.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8890 = this;
return this__8890.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8891 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8891.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8892 = this;
return this__8892.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8893 = this;
var ___8894 = this;
(this__8893.buf[this__8893.end] = o);
return this__8893.end = (this__8893.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8895 = this;
var ___8896 = this;
var ret__8897 = (new cljs.core.ArrayChunk(this__8895.buf,0,this__8895.end));
this__8895.buf = null;
return ret__8897;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8898 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8898.arr[this__8898.off]),(this__8898.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8899 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8899.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8900 = this;
if((this__8900.off === this__8900.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8900.arr,(this__8900.off + 1),this__8900.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8901 = this;
return (this__8901.arr[(this__8901.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8902 = this;
if((function (){var and__3822__auto____8903 = (i >= 0);
if(and__3822__auto____8903)
{return (i < (this__8902.end - this__8902.off));
} else
{return and__3822__auto____8903;
}
})())
{return (this__8902.arr[(this__8902.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8904 = this;
return (this__8904.end - this__8904.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8905 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8906 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8907 = this;
return cljs.core._nth.call(null,this__8907.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8908 = this;
if((cljs.core._count.call(null,this__8908.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8908.chunk),this__8908.more,this__8908.meta));
} else
{if((this__8908.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8908.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8909 = this;
if((this__8909.more == null))
{return null;
} else
{return this__8909.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8910 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8911 = this;
return (new cljs.core.ChunkedCons(this__8911.chunk,this__8911.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8912 = this;
return this__8912.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8913 = this;
return this__8913.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8914 = this;
if((this__8914.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8914.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8918__8919 = s;
if(G__8918__8919)
{if(cljs.core.truth_((function (){var or__3824__auto____8920 = null;
if(cljs.core.truth_(or__3824__auto____8920))
{return or__3824__auto____8920;
} else
{return G__8918__8919.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8918__8919.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8918__8919);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8918__8919);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8923 = [];
var s__8924 = s;
while(true){
if(cljs.core.seq.call(null,s__8924))
{ary__8923.push(cljs.core.first.call(null,s__8924));
{
var G__8925 = cljs.core.next.call(null,s__8924);
s__8924 = G__8925;
continue;
}
} else
{return ary__8923;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8929 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8930 = 0;
var xs__8931 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8931)
{(ret__8929[i__8930] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8931)));
{
var G__8932 = (i__8930 + 1);
var G__8933 = cljs.core.next.call(null,xs__8931);
i__8930 = G__8932;
xs__8931 = G__8933;
continue;
}
} else
{}
break;
}
return ret__8929;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8941 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8942 = cljs.core.seq.call(null,init_val_or_seq);
var i__8943 = 0;
var s__8944 = s__8942;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8945 = s__8944;
if(and__3822__auto____8945)
{return (i__8943 < size);
} else
{return and__3822__auto____8945;
}
})()))
{(a__8941[i__8943] = cljs.core.first.call(null,s__8944));
{
var G__8948 = (i__8943 + 1);
var G__8949 = cljs.core.next.call(null,s__8944);
i__8943 = G__8948;
s__8944 = G__8949;
continue;
}
} else
{return a__8941;
}
break;
}
} else
{var n__2533__auto____8946 = size;
var i__8947 = 0;
while(true){
if((i__8947 < n__2533__auto____8946))
{(a__8941[i__8947] = init_val_or_seq);
{
var G__8950 = (i__8947 + 1);
i__8947 = G__8950;
continue;
}
} else
{}
break;
}
return a__8941;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8958 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8959 = cljs.core.seq.call(null,init_val_or_seq);
var i__8960 = 0;
var s__8961 = s__8959;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8962 = s__8961;
if(and__3822__auto____8962)
{return (i__8960 < size);
} else
{return and__3822__auto____8962;
}
})()))
{(a__8958[i__8960] = cljs.core.first.call(null,s__8961));
{
var G__8965 = (i__8960 + 1);
var G__8966 = cljs.core.next.call(null,s__8961);
i__8960 = G__8965;
s__8961 = G__8966;
continue;
}
} else
{return a__8958;
}
break;
}
} else
{var n__2533__auto____8963 = size;
var i__8964 = 0;
while(true){
if((i__8964 < n__2533__auto____8963))
{(a__8958[i__8964] = init_val_or_seq);
{
var G__8967 = (i__8964 + 1);
i__8964 = G__8967;
continue;
}
} else
{}
break;
}
return a__8958;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8975 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8976 = cljs.core.seq.call(null,init_val_or_seq);
var i__8977 = 0;
var s__8978 = s__8976;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8979 = s__8978;
if(and__3822__auto____8979)
{return (i__8977 < size);
} else
{return and__3822__auto____8979;
}
})()))
{(a__8975[i__8977] = cljs.core.first.call(null,s__8978));
{
var G__8982 = (i__8977 + 1);
var G__8983 = cljs.core.next.call(null,s__8978);
i__8977 = G__8982;
s__8978 = G__8983;
continue;
}
} else
{return a__8975;
}
break;
}
} else
{var n__2533__auto____8980 = size;
var i__8981 = 0;
while(true){
if((i__8981 < n__2533__auto____8980))
{(a__8975[i__8981] = init_val_or_seq);
{
var G__8984 = (i__8981 + 1);
i__8981 = G__8984;
continue;
}
} else
{}
break;
}
return a__8975;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__8989 = s;
var i__8990 = n;
var sum__8991 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8992 = (i__8990 > 0);
if(and__3822__auto____8992)
{return cljs.core.seq.call(null,s__8989);
} else
{return and__3822__auto____8992;
}
})()))
{{
var G__8993 = cljs.core.next.call(null,s__8989);
var G__8994 = (i__8990 - 1);
var G__8995 = (sum__8991 + 1);
s__8989 = G__8993;
i__8990 = G__8994;
sum__8991 = G__8995;
continue;
}
} else
{return sum__8991;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9000 = cljs.core.seq.call(null,x);
if(s__9000)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9000))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9000),concat.call(null,cljs.core.chunk_rest.call(null,s__9000),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9000),concat.call(null,cljs.core.rest.call(null,s__9000),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9004__delegate = function (x,y,zs){
var cat__9003 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9002 = cljs.core.seq.call(null,xys);
if(xys__9002)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9002))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9002),cat.call(null,cljs.core.chunk_rest.call(null,xys__9002),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9002),cat.call(null,cljs.core.rest.call(null,xys__9002),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__9003.call(null,concat.call(null,x,y),zs);
};
var G__9004 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9004__delegate.call(this, x, y, zs);
};
G__9004.cljs$lang$maxFixedArity = 2;
G__9004.cljs$lang$applyTo = (function (arglist__9005){
var x = cljs.core.first(arglist__9005);
var y = cljs.core.first(cljs.core.next(arglist__9005));
var zs = cljs.core.rest(cljs.core.next(arglist__9005));
return G__9004__delegate(x, y, zs);
});
G__9004.cljs$lang$arity$variadic = G__9004__delegate;
return G__9004;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__9006__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9006 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9006__delegate.call(this, a, b, c, d, more);
};
G__9006.cljs$lang$maxFixedArity = 4;
G__9006.cljs$lang$applyTo = (function (arglist__9007){
var a = cljs.core.first(arglist__9007);
var b = cljs.core.first(cljs.core.next(arglist__9007));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9007)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9007))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9007))));
return G__9006__delegate(a, b, c, d, more);
});
G__9006.cljs$lang$arity$variadic = G__9006__delegate;
return G__9006;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__9049 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9050 = cljs.core._first.call(null,args__9049);
var args__9051 = cljs.core._rest.call(null,args__9049);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9050);
} else
{return f.call(null,a__9050);
}
} else
{var b__9052 = cljs.core._first.call(null,args__9051);
var args__9053 = cljs.core._rest.call(null,args__9051);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9050,b__9052);
} else
{return f.call(null,a__9050,b__9052);
}
} else
{var c__9054 = cljs.core._first.call(null,args__9053);
var args__9055 = cljs.core._rest.call(null,args__9053);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9050,b__9052,c__9054);
} else
{return f.call(null,a__9050,b__9052,c__9054);
}
} else
{var d__9056 = cljs.core._first.call(null,args__9055);
var args__9057 = cljs.core._rest.call(null,args__9055);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9050,b__9052,c__9054,d__9056);
} else
{return f.call(null,a__9050,b__9052,c__9054,d__9056);
}
} else
{var e__9058 = cljs.core._first.call(null,args__9057);
var args__9059 = cljs.core._rest.call(null,args__9057);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9050,b__9052,c__9054,d__9056,e__9058);
} else
{return f.call(null,a__9050,b__9052,c__9054,d__9056,e__9058);
}
} else
{var f__9060 = cljs.core._first.call(null,args__9059);
var args__9061 = cljs.core._rest.call(null,args__9059);
if((argc === 6))
{if(f__9060.cljs$lang$arity$6)
{return f__9060.cljs$lang$arity$6(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060);
}
} else
{var g__9062 = cljs.core._first.call(null,args__9061);
var args__9063 = cljs.core._rest.call(null,args__9061);
if((argc === 7))
{if(f__9060.cljs$lang$arity$7)
{return f__9060.cljs$lang$arity$7(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062);
}
} else
{var h__9064 = cljs.core._first.call(null,args__9063);
var args__9065 = cljs.core._rest.call(null,args__9063);
if((argc === 8))
{if(f__9060.cljs$lang$arity$8)
{return f__9060.cljs$lang$arity$8(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064);
}
} else
{var i__9066 = cljs.core._first.call(null,args__9065);
var args__9067 = cljs.core._rest.call(null,args__9065);
if((argc === 9))
{if(f__9060.cljs$lang$arity$9)
{return f__9060.cljs$lang$arity$9(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066);
}
} else
{var j__9068 = cljs.core._first.call(null,args__9067);
var args__9069 = cljs.core._rest.call(null,args__9067);
if((argc === 10))
{if(f__9060.cljs$lang$arity$10)
{return f__9060.cljs$lang$arity$10(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068);
}
} else
{var k__9070 = cljs.core._first.call(null,args__9069);
var args__9071 = cljs.core._rest.call(null,args__9069);
if((argc === 11))
{if(f__9060.cljs$lang$arity$11)
{return f__9060.cljs$lang$arity$11(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070);
}
} else
{var l__9072 = cljs.core._first.call(null,args__9071);
var args__9073 = cljs.core._rest.call(null,args__9071);
if((argc === 12))
{if(f__9060.cljs$lang$arity$12)
{return f__9060.cljs$lang$arity$12(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072);
}
} else
{var m__9074 = cljs.core._first.call(null,args__9073);
var args__9075 = cljs.core._rest.call(null,args__9073);
if((argc === 13))
{if(f__9060.cljs$lang$arity$13)
{return f__9060.cljs$lang$arity$13(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074);
}
} else
{var n__9076 = cljs.core._first.call(null,args__9075);
var args__9077 = cljs.core._rest.call(null,args__9075);
if((argc === 14))
{if(f__9060.cljs$lang$arity$14)
{return f__9060.cljs$lang$arity$14(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076);
}
} else
{var o__9078 = cljs.core._first.call(null,args__9077);
var args__9079 = cljs.core._rest.call(null,args__9077);
if((argc === 15))
{if(f__9060.cljs$lang$arity$15)
{return f__9060.cljs$lang$arity$15(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078);
}
} else
{var p__9080 = cljs.core._first.call(null,args__9079);
var args__9081 = cljs.core._rest.call(null,args__9079);
if((argc === 16))
{if(f__9060.cljs$lang$arity$16)
{return f__9060.cljs$lang$arity$16(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080);
}
} else
{var q__9082 = cljs.core._first.call(null,args__9081);
var args__9083 = cljs.core._rest.call(null,args__9081);
if((argc === 17))
{if(f__9060.cljs$lang$arity$17)
{return f__9060.cljs$lang$arity$17(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082);
}
} else
{var r__9084 = cljs.core._first.call(null,args__9083);
var args__9085 = cljs.core._rest.call(null,args__9083);
if((argc === 18))
{if(f__9060.cljs$lang$arity$18)
{return f__9060.cljs$lang$arity$18(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082,r__9084);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082,r__9084);
}
} else
{var s__9086 = cljs.core._first.call(null,args__9085);
var args__9087 = cljs.core._rest.call(null,args__9085);
if((argc === 19))
{if(f__9060.cljs$lang$arity$19)
{return f__9060.cljs$lang$arity$19(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082,r__9084,s__9086);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082,r__9084,s__9086);
}
} else
{var t__9088 = cljs.core._first.call(null,args__9087);
var args__9089 = cljs.core._rest.call(null,args__9087);
if((argc === 20))
{if(f__9060.cljs$lang$arity$20)
{return f__9060.cljs$lang$arity$20(a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082,r__9084,s__9086,t__9088);
} else
{return f__9060.call(null,a__9050,b__9052,c__9054,d__9056,e__9058,f__9060,g__9062,h__9064,i__9066,j__9068,k__9070,l__9072,m__9074,n__9076,o__9078,p__9080,q__9082,r__9084,s__9086,t__9088);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__9104 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9105 = cljs.core.bounded_count.call(null,args,(fixed_arity__9104 + 1));
if((bc__9105 <= fixed_arity__9104))
{return cljs.core.apply_to.call(null,f,bc__9105,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__9106 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9107 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9108 = cljs.core.bounded_count.call(null,arglist__9106,(fixed_arity__9107 + 1));
if((bc__9108 <= fixed_arity__9107))
{return cljs.core.apply_to.call(null,f,bc__9108,arglist__9106);
} else
{return f.cljs$lang$applyTo(arglist__9106);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9106));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__9109 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9110 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9111 = cljs.core.bounded_count.call(null,arglist__9109,(fixed_arity__9110 + 1));
if((bc__9111 <= fixed_arity__9110))
{return cljs.core.apply_to.call(null,f,bc__9111,arglist__9109);
} else
{return f.cljs$lang$applyTo(arglist__9109);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9109));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__9112 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9113 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9114 = cljs.core.bounded_count.call(null,arglist__9112,(fixed_arity__9113 + 1));
if((bc__9114 <= fixed_arity__9113))
{return cljs.core.apply_to.call(null,f,bc__9114,arglist__9112);
} else
{return f.cljs$lang$applyTo(arglist__9112);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9112));
}
});
var apply__6 = (function() { 
var G__9118__delegate = function (f,a,b,c,d,args){
var arglist__9115 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9116 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9117 = cljs.core.bounded_count.call(null,arglist__9115,(fixed_arity__9116 + 1));
if((bc__9117 <= fixed_arity__9116))
{return cljs.core.apply_to.call(null,f,bc__9117,arglist__9115);
} else
{return f.cljs$lang$applyTo(arglist__9115);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9115));
}
};
var G__9118 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9118__delegate.call(this, f, a, b, c, d, args);
};
G__9118.cljs$lang$maxFixedArity = 5;
G__9118.cljs$lang$applyTo = (function (arglist__9119){
var f = cljs.core.first(arglist__9119);
var a = cljs.core.first(cljs.core.next(arglist__9119));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9119)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9119))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9119)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9119)))));
return G__9118__delegate(f, a, b, c, d, args);
});
G__9118.cljs$lang$arity$variadic = G__9118__delegate;
return G__9118;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__9120){
var obj = cljs.core.first(arglist__9120);
var f = cljs.core.first(cljs.core.next(arglist__9120));
var args = cljs.core.rest(cljs.core.next(arglist__9120));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__9121__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9121 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9121__delegate.call(this, x, y, more);
};
G__9121.cljs$lang$maxFixedArity = 2;
G__9121.cljs$lang$applyTo = (function (arglist__9122){
var x = cljs.core.first(arglist__9122);
var y = cljs.core.first(cljs.core.next(arglist__9122));
var more = cljs.core.rest(cljs.core.next(arglist__9122));
return G__9121__delegate(x, y, more);
});
G__9121.cljs$lang$arity$variadic = G__9121__delegate;
return G__9121;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__9123 = pred;
var G__9124 = cljs.core.next.call(null,coll);
pred = G__9123;
coll = G__9124;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____9126 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____9126))
{return or__3824__auto____9126;
} else
{{
var G__9127 = pred;
var G__9128 = cljs.core.next.call(null,coll);
pred = G__9127;
coll = G__9128;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__9129 = null;
var G__9129__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9129__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9129__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9129__3 = (function() { 
var G__9130__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9130 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9130__delegate.call(this, x, y, zs);
};
G__9130.cljs$lang$maxFixedArity = 2;
G__9130.cljs$lang$applyTo = (function (arglist__9131){
var x = cljs.core.first(arglist__9131);
var y = cljs.core.first(cljs.core.next(arglist__9131));
var zs = cljs.core.rest(cljs.core.next(arglist__9131));
return G__9130__delegate(x, y, zs);
});
G__9130.cljs$lang$arity$variadic = G__9130__delegate;
return G__9130;
})()
;
G__9129 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__9129__0.call(this);
case 1:
return G__9129__1.call(this,x);
case 2:
return G__9129__2.call(this,x,y);
default:
return G__9129__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__9129.cljs$lang$maxFixedArity = 2;
G__9129.cljs$lang$applyTo = G__9129__3.cljs$lang$applyTo;
return G__9129;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9132__delegate = function (args){
return x;
};
var G__9132 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9132__delegate.call(this, args);
};
G__9132.cljs$lang$maxFixedArity = 0;
G__9132.cljs$lang$applyTo = (function (arglist__9133){
var args = cljs.core.seq(arglist__9133);;
return G__9132__delegate(args);
});
G__9132.cljs$lang$arity$variadic = G__9132__delegate;
return G__9132;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__9140 = null;
var G__9140__0 = (function (){
return f.call(null,g.call(null));
});
var G__9140__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9140__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9140__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9140__4 = (function() { 
var G__9141__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9141 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9141__delegate.call(this, x, y, z, args);
};
G__9141.cljs$lang$maxFixedArity = 3;
G__9141.cljs$lang$applyTo = (function (arglist__9142){
var x = cljs.core.first(arglist__9142);
var y = cljs.core.first(cljs.core.next(arglist__9142));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9142)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9142)));
return G__9141__delegate(x, y, z, args);
});
G__9141.cljs$lang$arity$variadic = G__9141__delegate;
return G__9141;
})()
;
G__9140 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9140__0.call(this);
case 1:
return G__9140__1.call(this,x);
case 2:
return G__9140__2.call(this,x,y);
case 3:
return G__9140__3.call(this,x,y,z);
default:
return G__9140__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9140.cljs$lang$maxFixedArity = 3;
G__9140.cljs$lang$applyTo = G__9140__4.cljs$lang$applyTo;
return G__9140;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__9143 = null;
var G__9143__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9143__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9143__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9143__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9143__4 = (function() { 
var G__9144__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9144 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9144__delegate.call(this, x, y, z, args);
};
G__9144.cljs$lang$maxFixedArity = 3;
G__9144.cljs$lang$applyTo = (function (arglist__9145){
var x = cljs.core.first(arglist__9145);
var y = cljs.core.first(cljs.core.next(arglist__9145));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9145)));
return G__9144__delegate(x, y, z, args);
});
G__9144.cljs$lang$arity$variadic = G__9144__delegate;
return G__9144;
})()
;
G__9143 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9143__0.call(this);
case 1:
return G__9143__1.call(this,x);
case 2:
return G__9143__2.call(this,x,y);
case 3:
return G__9143__3.call(this,x,y,z);
default:
return G__9143__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9143.cljs$lang$maxFixedArity = 3;
G__9143.cljs$lang$applyTo = G__9143__4.cljs$lang$applyTo;
return G__9143;
})()
});
var comp__4 = (function() { 
var G__9146__delegate = function (f1,f2,f3,fs){
var fs__9137 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__9147__delegate = function (args){
var ret__9138 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9137),args);
var fs__9139 = cljs.core.next.call(null,fs__9137);
while(true){
if(fs__9139)
{{
var G__9148 = cljs.core.first.call(null,fs__9139).call(null,ret__9138);
var G__9149 = cljs.core.next.call(null,fs__9139);
ret__9138 = G__9148;
fs__9139 = G__9149;
continue;
}
} else
{return ret__9138;
}
break;
}
};
var G__9147 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9147__delegate.call(this, args);
};
G__9147.cljs$lang$maxFixedArity = 0;
G__9147.cljs$lang$applyTo = (function (arglist__9150){
var args = cljs.core.seq(arglist__9150);;
return G__9147__delegate(args);
});
G__9147.cljs$lang$arity$variadic = G__9147__delegate;
return G__9147;
})()
;
};
var G__9146 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9146__delegate.call(this, f1, f2, f3, fs);
};
G__9146.cljs$lang$maxFixedArity = 3;
G__9146.cljs$lang$applyTo = (function (arglist__9151){
var f1 = cljs.core.first(arglist__9151);
var f2 = cljs.core.first(cljs.core.next(arglist__9151));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9151)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9151)));
return G__9146__delegate(f1, f2, f3, fs);
});
G__9146.cljs$lang$arity$variadic = G__9146__delegate;
return G__9146;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__9152__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9152 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9152__delegate.call(this, args);
};
G__9152.cljs$lang$maxFixedArity = 0;
G__9152.cljs$lang$applyTo = (function (arglist__9153){
var args = cljs.core.seq(arglist__9153);;
return G__9152__delegate(args);
});
G__9152.cljs$lang$arity$variadic = G__9152__delegate;
return G__9152;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__9154__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9154 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9154__delegate.call(this, args);
};
G__9154.cljs$lang$maxFixedArity = 0;
G__9154.cljs$lang$applyTo = (function (arglist__9155){
var args = cljs.core.seq(arglist__9155);;
return G__9154__delegate(args);
});
G__9154.cljs$lang$arity$variadic = G__9154__delegate;
return G__9154;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9156__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9156 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9156__delegate.call(this, args);
};
G__9156.cljs$lang$maxFixedArity = 0;
G__9156.cljs$lang$applyTo = (function (arglist__9157){
var args = cljs.core.seq(arglist__9157);;
return G__9156__delegate(args);
});
G__9156.cljs$lang$arity$variadic = G__9156__delegate;
return G__9156;
})()
;
});
var partial__5 = (function() { 
var G__9158__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9159__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9159 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9159__delegate.call(this, args);
};
G__9159.cljs$lang$maxFixedArity = 0;
G__9159.cljs$lang$applyTo = (function (arglist__9160){
var args = cljs.core.seq(arglist__9160);;
return G__9159__delegate(args);
});
G__9159.cljs$lang$arity$variadic = G__9159__delegate;
return G__9159;
})()
;
};
var G__9158 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9158__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9158.cljs$lang$maxFixedArity = 4;
G__9158.cljs$lang$applyTo = (function (arglist__9161){
var f = cljs.core.first(arglist__9161);
var arg1 = cljs.core.first(cljs.core.next(arglist__9161));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9161)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9161))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9161))));
return G__9158__delegate(f, arg1, arg2, arg3, more);
});
G__9158.cljs$lang$arity$variadic = G__9158__delegate;
return G__9158;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__9162 = null;
var G__9162__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__9162__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__9162__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__9162__4 = (function() { 
var G__9163__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__9163 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9163__delegate.call(this, a, b, c, ds);
};
G__9163.cljs$lang$maxFixedArity = 3;
G__9163.cljs$lang$applyTo = (function (arglist__9164){
var a = cljs.core.first(arglist__9164);
var b = cljs.core.first(cljs.core.next(arglist__9164));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9164)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9164)));
return G__9163__delegate(a, b, c, ds);
});
G__9163.cljs$lang$arity$variadic = G__9163__delegate;
return G__9163;
})()
;
G__9162 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__9162__1.call(this,a);
case 2:
return G__9162__2.call(this,a,b);
case 3:
return G__9162__3.call(this,a,b,c);
default:
return G__9162__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9162.cljs$lang$maxFixedArity = 3;
G__9162.cljs$lang$applyTo = G__9162__4.cljs$lang$applyTo;
return G__9162;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__9165 = null;
var G__9165__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9165__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__9165__4 = (function() { 
var G__9166__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__9166 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9166__delegate.call(this, a, b, c, ds);
};
G__9166.cljs$lang$maxFixedArity = 3;
G__9166.cljs$lang$applyTo = (function (arglist__9167){
var a = cljs.core.first(arglist__9167);
var b = cljs.core.first(cljs.core.next(arglist__9167));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9167)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9167)));
return G__9166__delegate(a, b, c, ds);
});
G__9166.cljs$lang$arity$variadic = G__9166__delegate;
return G__9166;
})()
;
G__9165 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9165__2.call(this,a,b);
case 3:
return G__9165__3.call(this,a,b,c);
default:
return G__9165__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9165.cljs$lang$maxFixedArity = 3;
G__9165.cljs$lang$applyTo = G__9165__4.cljs$lang$applyTo;
return G__9165;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__9168 = null;
var G__9168__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9168__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__9168__4 = (function() { 
var G__9169__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__9169 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9169__delegate.call(this, a, b, c, ds);
};
G__9169.cljs$lang$maxFixedArity = 3;
G__9169.cljs$lang$applyTo = (function (arglist__9170){
var a = cljs.core.first(arglist__9170);
var b = cljs.core.first(cljs.core.next(arglist__9170));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9170)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9170)));
return G__9169__delegate(a, b, c, ds);
});
G__9169.cljs$lang$arity$variadic = G__9169__delegate;
return G__9169;
})()
;
G__9168 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9168__2.call(this,a,b);
case 3:
return G__9168__3.call(this,a,b,c);
default:
return G__9168__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9168.cljs$lang$maxFixedArity = 3;
G__9168.cljs$lang$applyTo = G__9168__4.cljs$lang$applyTo;
return G__9168;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__9186 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9194 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9194)
{var s__9195 = temp__3974__auto____9194;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9195))
{var c__9196 = cljs.core.chunk_first.call(null,s__9195);
var size__9197 = cljs.core.count.call(null,c__9196);
var b__9198 = cljs.core.chunk_buffer.call(null,size__9197);
var n__2533__auto____9199 = size__9197;
var i__9200 = 0;
while(true){
if((i__9200 < n__2533__auto____9199))
{cljs.core.chunk_append.call(null,b__9198,f.call(null,(idx + i__9200),cljs.core._nth.call(null,c__9196,i__9200)));
{
var G__9201 = (i__9200 + 1);
i__9200 = G__9201;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9198),mapi.call(null,(idx + size__9197),cljs.core.chunk_rest.call(null,s__9195)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9195)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__9195)));
}
} else
{return null;
}
}),null));
});
return mapi__9186.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9211 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9211)
{var s__9212 = temp__3974__auto____9211;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9212))
{var c__9213 = cljs.core.chunk_first.call(null,s__9212);
var size__9214 = cljs.core.count.call(null,c__9213);
var b__9215 = cljs.core.chunk_buffer.call(null,size__9214);
var n__2533__auto____9216 = size__9214;
var i__9217 = 0;
while(true){
if((i__9217 < n__2533__auto____9216))
{var x__9218 = f.call(null,cljs.core._nth.call(null,c__9213,i__9217));
if((x__9218 == null))
{} else
{cljs.core.chunk_append.call(null,b__9215,x__9218);
}
{
var G__9220 = (i__9217 + 1);
i__9217 = G__9220;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9215),keep.call(null,f,cljs.core.chunk_rest.call(null,s__9212)));
} else
{var x__9219 = f.call(null,cljs.core.first.call(null,s__9212));
if((x__9219 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__9212));
} else
{return cljs.core.cons.call(null,x__9219,keep.call(null,f,cljs.core.rest.call(null,s__9212)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__9246 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9256 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9256)
{var s__9257 = temp__3974__auto____9256;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9257))
{var c__9258 = cljs.core.chunk_first.call(null,s__9257);
var size__9259 = cljs.core.count.call(null,c__9258);
var b__9260 = cljs.core.chunk_buffer.call(null,size__9259);
var n__2533__auto____9261 = size__9259;
var i__9262 = 0;
while(true){
if((i__9262 < n__2533__auto____9261))
{var x__9263 = f.call(null,(idx + i__9262),cljs.core._nth.call(null,c__9258,i__9262));
if((x__9263 == null))
{} else
{cljs.core.chunk_append.call(null,b__9260,x__9263);
}
{
var G__9265 = (i__9262 + 1);
i__9262 = G__9265;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9260),keepi.call(null,(idx + size__9259),cljs.core.chunk_rest.call(null,s__9257)));
} else
{var x__9264 = f.call(null,idx,cljs.core.first.call(null,s__9257));
if((x__9264 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9257));
} else
{return cljs.core.cons.call(null,x__9264,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9257)));
}
}
} else
{return null;
}
}),null));
});
return keepi__9246.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9351 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9351))
{return p.call(null,y);
} else
{return and__3822__auto____9351;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9352 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9352))
{var and__3822__auto____9353 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9353))
{return p.call(null,z);
} else
{return and__3822__auto____9353;
}
} else
{return and__3822__auto____9352;
}
})());
});
var ep1__4 = (function() { 
var G__9422__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9354 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9354))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9354;
}
})());
};
var G__9422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9422__delegate.call(this, x, y, z, args);
};
G__9422.cljs$lang$maxFixedArity = 3;
G__9422.cljs$lang$applyTo = (function (arglist__9423){
var x = cljs.core.first(arglist__9423);
var y = cljs.core.first(cljs.core.next(arglist__9423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9423)));
return G__9422__delegate(x, y, z, args);
});
G__9422.cljs$lang$arity$variadic = G__9422__delegate;
return G__9422;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9366 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9366))
{return p2.call(null,x);
} else
{return and__3822__auto____9366;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9367 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9367))
{var and__3822__auto____9368 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9368))
{var and__3822__auto____9369 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9369))
{return p2.call(null,y);
} else
{return and__3822__auto____9369;
}
} else
{return and__3822__auto____9368;
}
} else
{return and__3822__auto____9367;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9370 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9370))
{var and__3822__auto____9371 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9371))
{var and__3822__auto____9372 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9372))
{var and__3822__auto____9373 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9373))
{var and__3822__auto____9374 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9374))
{return p2.call(null,z);
} else
{return and__3822__auto____9374;
}
} else
{return and__3822__auto____9373;
}
} else
{return and__3822__auto____9372;
}
} else
{return and__3822__auto____9371;
}
} else
{return and__3822__auto____9370;
}
})());
});
var ep2__4 = (function() { 
var G__9424__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9375 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9375))
{return cljs.core.every_QMARK_.call(null,(function (p1__9221_SHARP_){
var and__3822__auto____9376 = p1.call(null,p1__9221_SHARP_);
if(cljs.core.truth_(and__3822__auto____9376))
{return p2.call(null,p1__9221_SHARP_);
} else
{return and__3822__auto____9376;
}
}),args);
} else
{return and__3822__auto____9375;
}
})());
};
var G__9424 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9424__delegate.call(this, x, y, z, args);
};
G__9424.cljs$lang$maxFixedArity = 3;
G__9424.cljs$lang$applyTo = (function (arglist__9425){
var x = cljs.core.first(arglist__9425);
var y = cljs.core.first(cljs.core.next(arglist__9425));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9425)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9425)));
return G__9424__delegate(x, y, z, args);
});
G__9424.cljs$lang$arity$variadic = G__9424__delegate;
return G__9424;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9395 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9395))
{var and__3822__auto____9396 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9396))
{return p3.call(null,x);
} else
{return and__3822__auto____9396;
}
} else
{return and__3822__auto____9395;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9397 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9397))
{var and__3822__auto____9398 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9398))
{var and__3822__auto____9399 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9399))
{var and__3822__auto____9400 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9400))
{var and__3822__auto____9401 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9401))
{return p3.call(null,y);
} else
{return and__3822__auto____9401;
}
} else
{return and__3822__auto____9400;
}
} else
{return and__3822__auto____9399;
}
} else
{return and__3822__auto____9398;
}
} else
{return and__3822__auto____9397;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9402 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9402))
{var and__3822__auto____9403 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9403))
{var and__3822__auto____9404 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9404))
{var and__3822__auto____9405 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9405))
{var and__3822__auto____9406 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9406))
{var and__3822__auto____9407 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____9407))
{var and__3822__auto____9408 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9408))
{var and__3822__auto____9409 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____9409))
{return p3.call(null,z);
} else
{return and__3822__auto____9409;
}
} else
{return and__3822__auto____9408;
}
} else
{return and__3822__auto____9407;
}
} else
{return and__3822__auto____9406;
}
} else
{return and__3822__auto____9405;
}
} else
{return and__3822__auto____9404;
}
} else
{return and__3822__auto____9403;
}
} else
{return and__3822__auto____9402;
}
})());
});
var ep3__4 = (function() { 
var G__9426__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9410 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9410))
{return cljs.core.every_QMARK_.call(null,(function (p1__9222_SHARP_){
var and__3822__auto____9411 = p1.call(null,p1__9222_SHARP_);
if(cljs.core.truth_(and__3822__auto____9411))
{var and__3822__auto____9412 = p2.call(null,p1__9222_SHARP_);
if(cljs.core.truth_(and__3822__auto____9412))
{return p3.call(null,p1__9222_SHARP_);
} else
{return and__3822__auto____9412;
}
} else
{return and__3822__auto____9411;
}
}),args);
} else
{return and__3822__auto____9410;
}
})());
};
var G__9426 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9426__delegate.call(this, x, y, z, args);
};
G__9426.cljs$lang$maxFixedArity = 3;
G__9426.cljs$lang$applyTo = (function (arglist__9427){
var x = cljs.core.first(arglist__9427);
var y = cljs.core.first(cljs.core.next(arglist__9427));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9427)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9427)));
return G__9426__delegate(x, y, z, args);
});
G__9426.cljs$lang$arity$variadic = G__9426__delegate;
return G__9426;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__9428__delegate = function (p1,p2,p3,ps){
var ps__9413 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9223_SHARP_){
return p1__9223_SHARP_.call(null,x);
}),ps__9413);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9224_SHARP_){
var and__3822__auto____9418 = p1__9224_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9418))
{return p1__9224_SHARP_.call(null,y);
} else
{return and__3822__auto____9418;
}
}),ps__9413);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9225_SHARP_){
var and__3822__auto____9419 = p1__9225_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9419))
{var and__3822__auto____9420 = p1__9225_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____9420))
{return p1__9225_SHARP_.call(null,z);
} else
{return and__3822__auto____9420;
}
} else
{return and__3822__auto____9419;
}
}),ps__9413);
});
var epn__4 = (function() { 
var G__9429__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9421 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9421))
{return cljs.core.every_QMARK_.call(null,(function (p1__9226_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9226_SHARP_,args);
}),ps__9413);
} else
{return and__3822__auto____9421;
}
})());
};
var G__9429 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9429__delegate.call(this, x, y, z, args);
};
G__9429.cljs$lang$maxFixedArity = 3;
G__9429.cljs$lang$applyTo = (function (arglist__9430){
var x = cljs.core.first(arglist__9430);
var y = cljs.core.first(cljs.core.next(arglist__9430));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9430)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9430)));
return G__9429__delegate(x, y, z, args);
});
G__9429.cljs$lang$arity$variadic = G__9429__delegate;
return G__9429;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__9428 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9428__delegate.call(this, p1, p2, p3, ps);
};
G__9428.cljs$lang$maxFixedArity = 3;
G__9428.cljs$lang$applyTo = (function (arglist__9431){
var p1 = cljs.core.first(arglist__9431);
var p2 = cljs.core.first(cljs.core.next(arglist__9431));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9431)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9431)));
return G__9428__delegate(p1, p2, p3, ps);
});
G__9428.cljs$lang$arity$variadic = G__9428__delegate;
return G__9428;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____9512 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9512))
{return or__3824__auto____9512;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____9513 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9513))
{return or__3824__auto____9513;
} else
{var or__3824__auto____9514 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____9514))
{return or__3824__auto____9514;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9583__delegate = function (x,y,z,args){
var or__3824__auto____9515 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9515))
{return or__3824__auto____9515;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9583 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9583__delegate.call(this, x, y, z, args);
};
G__9583.cljs$lang$maxFixedArity = 3;
G__9583.cljs$lang$applyTo = (function (arglist__9584){
var x = cljs.core.first(arglist__9584);
var y = cljs.core.first(cljs.core.next(arglist__9584));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9584)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9584)));
return G__9583__delegate(x, y, z, args);
});
G__9583.cljs$lang$arity$variadic = G__9583__delegate;
return G__9583;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____9527 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9527))
{return or__3824__auto____9527;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____9528 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9528))
{return or__3824__auto____9528;
} else
{var or__3824__auto____9529 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9529))
{return or__3824__auto____9529;
} else
{var or__3824__auto____9530 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9530))
{return or__3824__auto____9530;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____9531 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9531))
{return or__3824__auto____9531;
} else
{var or__3824__auto____9532 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9532))
{return or__3824__auto____9532;
} else
{var or__3824__auto____9533 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9533))
{return or__3824__auto____9533;
} else
{var or__3824__auto____9534 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9534))
{return or__3824__auto____9534;
} else
{var or__3824__auto____9535 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9535))
{return or__3824__auto____9535;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9585__delegate = function (x,y,z,args){
var or__3824__auto____9536 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9536))
{return or__3824__auto____9536;
} else
{return cljs.core.some.call(null,(function (p1__9266_SHARP_){
var or__3824__auto____9537 = p1.call(null,p1__9266_SHARP_);
if(cljs.core.truth_(or__3824__auto____9537))
{return or__3824__auto____9537;
} else
{return p2.call(null,p1__9266_SHARP_);
}
}),args);
}
};
var G__9585 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9585__delegate.call(this, x, y, z, args);
};
G__9585.cljs$lang$maxFixedArity = 3;
G__9585.cljs$lang$applyTo = (function (arglist__9586){
var x = cljs.core.first(arglist__9586);
var y = cljs.core.first(cljs.core.next(arglist__9586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9586)));
return G__9585__delegate(x, y, z, args);
});
G__9585.cljs$lang$arity$variadic = G__9585__delegate;
return G__9585;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____9556 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9556))
{return or__3824__auto____9556;
} else
{var or__3824__auto____9557 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9557))
{return or__3824__auto____9557;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____9558 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9558))
{return or__3824__auto____9558;
} else
{var or__3824__auto____9559 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9559))
{return or__3824__auto____9559;
} else
{var or__3824__auto____9560 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9560))
{return or__3824__auto____9560;
} else
{var or__3824__auto____9561 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9561))
{return or__3824__auto____9561;
} else
{var or__3824__auto____9562 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9562))
{return or__3824__auto____9562;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____9563 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9563))
{return or__3824__auto____9563;
} else
{var or__3824__auto____9564 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9564))
{return or__3824__auto____9564;
} else
{var or__3824__auto____9565 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9565))
{return or__3824__auto____9565;
} else
{var or__3824__auto____9566 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9566))
{return or__3824__auto____9566;
} else
{var or__3824__auto____9567 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9567))
{return or__3824__auto____9567;
} else
{var or__3824__auto____9568 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____9568))
{return or__3824__auto____9568;
} else
{var or__3824__auto____9569 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9569))
{return or__3824__auto____9569;
} else
{var or__3824__auto____9570 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____9570))
{return or__3824__auto____9570;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__9587__delegate = function (x,y,z,args){
var or__3824__auto____9571 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9571))
{return or__3824__auto____9571;
} else
{return cljs.core.some.call(null,(function (p1__9267_SHARP_){
var or__3824__auto____9572 = p1.call(null,p1__9267_SHARP_);
if(cljs.core.truth_(or__3824__auto____9572))
{return or__3824__auto____9572;
} else
{var or__3824__auto____9573 = p2.call(null,p1__9267_SHARP_);
if(cljs.core.truth_(or__3824__auto____9573))
{return or__3824__auto____9573;
} else
{return p3.call(null,p1__9267_SHARP_);
}
}
}),args);
}
};
var G__9587 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9587__delegate.call(this, x, y, z, args);
};
G__9587.cljs$lang$maxFixedArity = 3;
G__9587.cljs$lang$applyTo = (function (arglist__9588){
var x = cljs.core.first(arglist__9588);
var y = cljs.core.first(cljs.core.next(arglist__9588));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9588)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9588)));
return G__9587__delegate(x, y, z, args);
});
G__9587.cljs$lang$arity$variadic = G__9587__delegate;
return G__9587;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__9589__delegate = function (p1,p2,p3,ps){
var ps__9574 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__9268_SHARP_){
return p1__9268_SHARP_.call(null,x);
}),ps__9574);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9269_SHARP_){
var or__3824__auto____9579 = p1__9269_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9579))
{return or__3824__auto____9579;
} else
{return p1__9269_SHARP_.call(null,y);
}
}),ps__9574);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9270_SHARP_){
var or__3824__auto____9580 = p1__9270_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9580))
{return or__3824__auto____9580;
} else
{var or__3824__auto____9581 = p1__9270_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____9581))
{return or__3824__auto____9581;
} else
{return p1__9270_SHARP_.call(null,z);
}
}
}),ps__9574);
});
var spn__4 = (function() { 
var G__9590__delegate = function (x,y,z,args){
var or__3824__auto____9582 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9582))
{return or__3824__auto____9582;
} else
{return cljs.core.some.call(null,(function (p1__9271_SHARP_){
return cljs.core.some.call(null,p1__9271_SHARP_,args);
}),ps__9574);
}
};
var G__9590 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9590__delegate.call(this, x, y, z, args);
};
G__9590.cljs$lang$maxFixedArity = 3;
G__9590.cljs$lang$applyTo = (function (arglist__9591){
var x = cljs.core.first(arglist__9591);
var y = cljs.core.first(cljs.core.next(arglist__9591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9591)));
return G__9590__delegate(x, y, z, args);
});
G__9590.cljs$lang$arity$variadic = G__9590__delegate;
return G__9590;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__9589 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9589__delegate.call(this, p1, p2, p3, ps);
};
G__9589.cljs$lang$maxFixedArity = 3;
G__9589.cljs$lang$applyTo = (function (arglist__9592){
var p1 = cljs.core.first(arglist__9592);
var p2 = cljs.core.first(cljs.core.next(arglist__9592));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9592)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9592)));
return G__9589__delegate(p1, p2, p3, ps);
});
G__9589.cljs$lang$arity$variadic = G__9589__delegate;
return G__9589;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9611 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9611)
{var s__9612 = temp__3974__auto____9611;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9612))
{var c__9613 = cljs.core.chunk_first.call(null,s__9612);
var size__9614 = cljs.core.count.call(null,c__9613);
var b__9615 = cljs.core.chunk_buffer.call(null,size__9614);
var n__2533__auto____9616 = size__9614;
var i__9617 = 0;
while(true){
if((i__9617 < n__2533__auto____9616))
{cljs.core.chunk_append.call(null,b__9615,f.call(null,cljs.core._nth.call(null,c__9613,i__9617)));
{
var G__9629 = (i__9617 + 1);
i__9617 = G__9629;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9615),map.call(null,f,cljs.core.chunk_rest.call(null,s__9612)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9612)),map.call(null,f,cljs.core.rest.call(null,s__9612)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9618 = cljs.core.seq.call(null,c1);
var s2__9619 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9620 = s1__9618;
if(and__3822__auto____9620)
{return s2__9619;
} else
{return and__3822__auto____9620;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9618),cljs.core.first.call(null,s2__9619)),map.call(null,f,cljs.core.rest.call(null,s1__9618),cljs.core.rest.call(null,s2__9619)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9621 = cljs.core.seq.call(null,c1);
var s2__9622 = cljs.core.seq.call(null,c2);
var s3__9623 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____9624 = s1__9621;
if(and__3822__auto____9624)
{var and__3822__auto____9625 = s2__9622;
if(and__3822__auto____9625)
{return s3__9623;
} else
{return and__3822__auto____9625;
}
} else
{return and__3822__auto____9624;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9621),cljs.core.first.call(null,s2__9622),cljs.core.first.call(null,s3__9623)),map.call(null,f,cljs.core.rest.call(null,s1__9621),cljs.core.rest.call(null,s2__9622),cljs.core.rest.call(null,s3__9623)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9630__delegate = function (f,c1,c2,c3,colls){
var step__9628 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9627 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9627))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9627),step.call(null,map.call(null,cljs.core.rest,ss__9627)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9432_SHARP_){
return cljs.core.apply.call(null,f,p1__9432_SHARP_);
}),step__9628.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9630 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9630__delegate.call(this, f, c1, c2, c3, colls);
};
G__9630.cljs$lang$maxFixedArity = 4;
G__9630.cljs$lang$applyTo = (function (arglist__9631){
var f = cljs.core.first(arglist__9631);
var c1 = cljs.core.first(cljs.core.next(arglist__9631));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9631)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9631))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9631))));
return G__9630__delegate(f, c1, c2, c3, colls);
});
G__9630.cljs$lang$arity$variadic = G__9630__delegate;
return G__9630;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____9634 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9634)
{var s__9635 = temp__3974__auto____9634;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9635),take.call(null,(n - 1),cljs.core.rest.call(null,s__9635)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__9641 = (function (n,coll){
while(true){
var s__9639 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9640 = (n > 0);
if(and__3822__auto____9640)
{return s__9639;
} else
{return and__3822__auto____9640;
}
})()))
{{
var G__9642 = (n - 1);
var G__9643 = cljs.core.rest.call(null,s__9639);
n = G__9642;
coll = G__9643;
continue;
}
} else
{return s__9639;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9641.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__9646 = cljs.core.seq.call(null,coll);
var lead__9647 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9647)
{{
var G__9648 = cljs.core.next.call(null,s__9646);
var G__9649 = cljs.core.next.call(null,lead__9647);
s__9646 = G__9648;
lead__9647 = G__9649;
continue;
}
} else
{return s__9646;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9655 = (function (pred,coll){
while(true){
var s__9653 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9654 = s__9653;
if(and__3822__auto____9654)
{return pred.call(null,cljs.core.first.call(null,s__9653));
} else
{return and__3822__auto____9654;
}
})()))
{{
var G__9656 = pred;
var G__9657 = cljs.core.rest.call(null,s__9653);
pred = G__9656;
coll = G__9657;
continue;
}
} else
{return s__9653;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9655.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9660 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9660)
{var s__9661 = temp__3974__auto____9660;
return cljs.core.concat.call(null,s__9661,cycle.call(null,s__9661));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9666 = cljs.core.seq.call(null,c1);
var s2__9667 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9668 = s1__9666;
if(and__3822__auto____9668)
{return s2__9667;
} else
{return and__3822__auto____9668;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9666),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9667),interleave.call(null,cljs.core.rest.call(null,s1__9666),cljs.core.rest.call(null,s2__9667))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9670__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9669 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9669))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9669),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9669)));
} else
{return null;
}
}),null));
};
var G__9670 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9670__delegate.call(this, c1, c2, colls);
};
G__9670.cljs$lang$maxFixedArity = 2;
G__9670.cljs$lang$applyTo = (function (arglist__9671){
var c1 = cljs.core.first(arglist__9671);
var c2 = cljs.core.first(cljs.core.next(arglist__9671));
var colls = cljs.core.rest(cljs.core.next(arglist__9671));
return G__9670__delegate(c1, c2, colls);
});
G__9670.cljs$lang$arity$variadic = G__9670__delegate;
return G__9670;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9681 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9679 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9679)
{var coll__9680 = temp__3971__auto____9679;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9680),cat.call(null,cljs.core.rest.call(null,coll__9680),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9681.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__9682__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9682 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9682__delegate.call(this, f, coll, colls);
};
G__9682.cljs$lang$maxFixedArity = 2;
G__9682.cljs$lang$applyTo = (function (arglist__9683){
var f = cljs.core.first(arglist__9683);
var coll = cljs.core.first(cljs.core.next(arglist__9683));
var colls = cljs.core.rest(cljs.core.next(arglist__9683));
return G__9682__delegate(f, coll, colls);
});
G__9682.cljs$lang$arity$variadic = G__9682__delegate;
return G__9682;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9693 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9693)
{var s__9694 = temp__3974__auto____9693;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9694))
{var c__9695 = cljs.core.chunk_first.call(null,s__9694);
var size__9696 = cljs.core.count.call(null,c__9695);
var b__9697 = cljs.core.chunk_buffer.call(null,size__9696);
var n__2533__auto____9698 = size__9696;
var i__9699 = 0;
while(true){
if((i__9699 < n__2533__auto____9698))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9695,i__9699))))
{cljs.core.chunk_append.call(null,b__9697,cljs.core._nth.call(null,c__9695,i__9699));
} else
{}
{
var G__9702 = (i__9699 + 1);
i__9699 = G__9702;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9697),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9694)));
} else
{var f__9700 = cljs.core.first.call(null,s__9694);
var r__9701 = cljs.core.rest.call(null,s__9694);
if(cljs.core.truth_(pred.call(null,f__9700)))
{return cljs.core.cons.call(null,f__9700,filter.call(null,pred,r__9701));
} else
{return filter.call(null,pred,r__9701);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9705 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9705.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9703_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9703_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9709__9710 = to;
if(G__9709__9710)
{if((function (){var or__3824__auto____9711 = (G__9709__9710.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9711)
{return or__3824__auto____9711;
} else
{return G__9709__9710.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9709__9710.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9709__9710);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9709__9710);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__9712__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9712 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9712__delegate.call(this, f, c1, c2, c3, colls);
};
G__9712.cljs$lang$maxFixedArity = 4;
G__9712.cljs$lang$applyTo = (function (arglist__9713){
var f = cljs.core.first(arglist__9713);
var c1 = cljs.core.first(cljs.core.next(arglist__9713));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9713)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9713))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9713))));
return G__9712__delegate(f, c1, c2, c3, colls);
});
G__9712.cljs$lang$arity$variadic = G__9712__delegate;
return G__9712;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9720 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9720)
{var s__9721 = temp__3974__auto____9720;
var p__9722 = cljs.core.take.call(null,n,s__9721);
if((n === cljs.core.count.call(null,p__9722)))
{return cljs.core.cons.call(null,p__9722,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9721)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9723 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9723)
{var s__9724 = temp__3974__auto____9723;
var p__9725 = cljs.core.take.call(null,n,s__9724);
if((n === cljs.core.count.call(null,p__9725)))
{return cljs.core.cons.call(null,p__9725,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9724)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9725,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9730 = cljs.core.lookup_sentinel;
var m__9731 = m;
var ks__9732 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9732)
{var m__9733 = cljs.core._lookup.call(null,m__9731,cljs.core.first.call(null,ks__9732),sentinel__9730);
if((sentinel__9730 === m__9733))
{return not_found;
} else
{{
var G__9734 = sentinel__9730;
var G__9735 = m__9733;
var G__9736 = cljs.core.next.call(null,ks__9732);
sentinel__9730 = G__9734;
m__9731 = G__9735;
ks__9732 = G__9736;
continue;
}
}
} else
{return m__9731;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9737,v){
var vec__9742__9743 = p__9737;
var k__9744 = cljs.core.nth.call(null,vec__9742__9743,0,null);
var ks__9745 = cljs.core.nthnext.call(null,vec__9742__9743,1);
if(cljs.core.truth_(ks__9745))
{return cljs.core.assoc.call(null,m,k__9744,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9744,null),ks__9745,v));
} else
{return cljs.core.assoc.call(null,m,k__9744,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9746,f,args){
var vec__9751__9752 = p__9746;
var k__9753 = cljs.core.nth.call(null,vec__9751__9752,0,null);
var ks__9754 = cljs.core.nthnext.call(null,vec__9751__9752,1);
if(cljs.core.truth_(ks__9754))
{return cljs.core.assoc.call(null,m,k__9753,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9753,null),ks__9754,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9753,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9753,null),args));
}
};
var update_in = function (m,p__9746,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9746, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9755){
var m = cljs.core.first(arglist__9755);
var p__9746 = cljs.core.first(cljs.core.next(arglist__9755));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9755)));
return update_in__delegate(m, p__9746, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9758 = this;
var h__2198__auto____9759 = this__9758.__hash;
if(!((h__2198__auto____9759 == null)))
{return h__2198__auto____9759;
} else
{var h__2198__auto____9760 = cljs.core.hash_coll.call(null,coll);
this__9758.__hash = h__2198__auto____9760;
return h__2198__auto____9760;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9761 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9762 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9763 = this;
var new_array__9764 = this__9763.array.slice();
(new_array__9764[k] = v);
return (new cljs.core.Vector(this__9763.meta,new_array__9764,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9795 = null;
var G__9795__2 = (function (this_sym9765,k){
var this__9767 = this;
var this_sym9765__9768 = this;
var coll__9769 = this_sym9765__9768;
return coll__9769.cljs$core$ILookup$_lookup$arity$2(coll__9769,k);
});
var G__9795__3 = (function (this_sym9766,k,not_found){
var this__9767 = this;
var this_sym9766__9770 = this;
var coll__9771 = this_sym9766__9770;
return coll__9771.cljs$core$ILookup$_lookup$arity$3(coll__9771,k,not_found);
});
G__9795 = function(this_sym9766,k,not_found){
switch(arguments.length){
case 2:
return G__9795__2.call(this,this_sym9766,k);
case 3:
return G__9795__3.call(this,this_sym9766,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9795;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9756,args9757){
var this__9772 = this;
return this_sym9756.call.apply(this_sym9756,[this_sym9756].concat(args9757.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9773 = this;
var new_array__9774 = this__9773.array.slice();
new_array__9774.push(o);
return (new cljs.core.Vector(this__9773.meta,new_array__9774,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9775 = this;
var this__9776 = this;
return cljs.core.pr_str.call(null,this__9776);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9777 = this;
return cljs.core.ci_reduce.call(null,this__9777.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9778 = this;
return cljs.core.ci_reduce.call(null,this__9778.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9779 = this;
if((this__9779.array.length > 0))
{var vector_seq__9780 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9779.array.length))
{return cljs.core.cons.call(null,(this__9779.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9780.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9781 = this;
return this__9781.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9782 = this;
var count__9783 = this__9782.array.length;
if((count__9783 > 0))
{return (this__9782.array[(count__9783 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9784 = this;
if((this__9784.array.length > 0))
{var new_array__9785 = this__9784.array.slice();
new_array__9785.pop();
return (new cljs.core.Vector(this__9784.meta,new_array__9785,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9786 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9787 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9788 = this;
return (new cljs.core.Vector(meta,this__9788.array,this__9788.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9789 = this;
return this__9789.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9790 = this;
if((function (){var and__3822__auto____9791 = (0 <= n);
if(and__3822__auto____9791)
{return (n < this__9790.array.length);
} else
{return and__3822__auto____9791;
}
})())
{return (this__9790.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9792 = this;
if((function (){var and__3822__auto____9793 = (0 <= n);
if(and__3822__auto____9793)
{return (n < this__9792.array.length);
} else
{return and__3822__auto____9793;
}
})())
{return (this__9792.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9794 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9794.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9797 = pv.cnt;
if((cnt__9797 < 32))
{return 0;
} else
{return (((cnt__9797 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9803 = level;
var ret__9804 = node;
while(true){
if((ll__9803 === 0))
{return ret__9804;
} else
{var embed__9805 = ret__9804;
var r__9806 = cljs.core.pv_fresh_node.call(null,edit);
var ___9807 = cljs.core.pv_aset.call(null,r__9806,0,embed__9805);
{
var G__9808 = (ll__9803 - 5);
var G__9809 = r__9806;
ll__9803 = G__9808;
ret__9804 = G__9809;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9815 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9816 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9815,subidx__9816,tailnode);
return ret__9815;
} else
{var child__9817 = cljs.core.pv_aget.call(null,parent,subidx__9816);
if(!((child__9817 == null)))
{var node_to_insert__9818 = push_tail.call(null,pv,(level - 5),child__9817,tailnode);
cljs.core.pv_aset.call(null,ret__9815,subidx__9816,node_to_insert__9818);
return ret__9815;
} else
{var node_to_insert__9819 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9815,subidx__9816,node_to_insert__9819);
return ret__9815;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____9823 = (0 <= i);
if(and__3822__auto____9823)
{return (i < pv.cnt);
} else
{return and__3822__auto____9823;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9824 = pv.root;
var level__9825 = pv.shift;
while(true){
if((level__9825 > 0))
{{
var G__9826 = cljs.core.pv_aget.call(null,node__9824,((i >>> level__9825) & 31));
var G__9827 = (level__9825 - 5);
node__9824 = G__9826;
level__9825 = G__9827;
continue;
}
} else
{return node__9824.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9830 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9830,(i & 31),val);
return ret__9830;
} else
{var subidx__9831 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9830,subidx__9831,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9831),i,val));
return ret__9830;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9837 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9838 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9837));
if((function (){var and__3822__auto____9839 = (new_child__9838 == null);
if(and__3822__auto____9839)
{return (subidx__9837 === 0);
} else
{return and__3822__auto____9839;
}
})())
{return null;
} else
{var ret__9840 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9840,subidx__9837,new_child__9838);
return ret__9840;
}
} else
{if((subidx__9837 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9841 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9841,subidx__9837,null);
return ret__9841;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9844 = this;
return (new cljs.core.TransientVector(this__9844.cnt,this__9844.shift,cljs.core.tv_editable_root.call(null,this__9844.root),cljs.core.tv_editable_tail.call(null,this__9844.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9845 = this;
var h__2198__auto____9846 = this__9845.__hash;
if(!((h__2198__auto____9846 == null)))
{return h__2198__auto____9846;
} else
{var h__2198__auto____9847 = cljs.core.hash_coll.call(null,coll);
this__9845.__hash = h__2198__auto____9847;
return h__2198__auto____9847;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9848 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9849 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9850 = this;
if((function (){var and__3822__auto____9851 = (0 <= k);
if(and__3822__auto____9851)
{return (k < this__9850.cnt);
} else
{return and__3822__auto____9851;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9852 = this__9850.tail.slice();
(new_tail__9852[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9850.meta,this__9850.cnt,this__9850.shift,this__9850.root,new_tail__9852,null));
} else
{return (new cljs.core.PersistentVector(this__9850.meta,this__9850.cnt,this__9850.shift,cljs.core.do_assoc.call(null,coll,this__9850.shift,this__9850.root,k,v),this__9850.tail,null));
}
} else
{if((k === this__9850.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9850.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9900 = null;
var G__9900__2 = (function (this_sym9853,k){
var this__9855 = this;
var this_sym9853__9856 = this;
var coll__9857 = this_sym9853__9856;
return coll__9857.cljs$core$ILookup$_lookup$arity$2(coll__9857,k);
});
var G__9900__3 = (function (this_sym9854,k,not_found){
var this__9855 = this;
var this_sym9854__9858 = this;
var coll__9859 = this_sym9854__9858;
return coll__9859.cljs$core$ILookup$_lookup$arity$3(coll__9859,k,not_found);
});
G__9900 = function(this_sym9854,k,not_found){
switch(arguments.length){
case 2:
return G__9900__2.call(this,this_sym9854,k);
case 3:
return G__9900__3.call(this,this_sym9854,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9900;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9842,args9843){
var this__9860 = this;
return this_sym9842.call.apply(this_sym9842,[this_sym9842].concat(args9843.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9861 = this;
var step_init__9862 = [0,init];
var i__9863 = 0;
while(true){
if((i__9863 < this__9861.cnt))
{var arr__9864 = cljs.core.array_for.call(null,v,i__9863);
var len__9865 = arr__9864.length;
var init__9869 = (function (){var j__9866 = 0;
var init__9867 = (step_init__9862[1]);
while(true){
if((j__9866 < len__9865))
{var init__9868 = f.call(null,init__9867,(j__9866 + i__9863),(arr__9864[j__9866]));
if(cljs.core.reduced_QMARK_.call(null,init__9868))
{return init__9868;
} else
{{
var G__9901 = (j__9866 + 1);
var G__9902 = init__9868;
j__9866 = G__9901;
init__9867 = G__9902;
continue;
}
}
} else
{(step_init__9862[0] = len__9865);
(step_init__9862[1] = init__9867);
return init__9867;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9869))
{return cljs.core.deref.call(null,init__9869);
} else
{{
var G__9903 = (i__9863 + (step_init__9862[0]));
i__9863 = G__9903;
continue;
}
}
} else
{return (step_init__9862[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9870 = this;
if(((this__9870.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9871 = this__9870.tail.slice();
new_tail__9871.push(o);
return (new cljs.core.PersistentVector(this__9870.meta,(this__9870.cnt + 1),this__9870.shift,this__9870.root,new_tail__9871,null));
} else
{var root_overflow_QMARK___9872 = ((this__9870.cnt >>> 5) > (1 << this__9870.shift));
var new_shift__9873 = ((root_overflow_QMARK___9872)?(this__9870.shift + 5):this__9870.shift);
var new_root__9875 = ((root_overflow_QMARK___9872)?(function (){var n_r__9874 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9874,0,this__9870.root);
cljs.core.pv_aset.call(null,n_r__9874,1,cljs.core.new_path.call(null,null,this__9870.shift,(new cljs.core.VectorNode(null,this__9870.tail))));
return n_r__9874;
})():cljs.core.push_tail.call(null,coll,this__9870.shift,this__9870.root,(new cljs.core.VectorNode(null,this__9870.tail))));
return (new cljs.core.PersistentVector(this__9870.meta,(this__9870.cnt + 1),new_shift__9873,new_root__9875,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9876 = this;
if((this__9876.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9876.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9877 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9878 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9879 = this;
var this__9880 = this;
return cljs.core.pr_str.call(null,this__9880);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9881 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9882 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9883 = this;
if((this__9883.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9884 = this;
return this__9884.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9885 = this;
if((this__9885.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9885.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9886 = this;
if((this__9886.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9886.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9886.meta);
} else
{if((1 < (this__9886.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9886.meta,(this__9886.cnt - 1),this__9886.shift,this__9886.root,this__9886.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9887 = cljs.core.array_for.call(null,coll,(this__9886.cnt - 2));
var nr__9888 = cljs.core.pop_tail.call(null,coll,this__9886.shift,this__9886.root);
var new_root__9889 = (((nr__9888 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9888);
var cnt_1__9890 = (this__9886.cnt - 1);
if((function (){var and__3822__auto____9891 = (5 < this__9886.shift);
if(and__3822__auto____9891)
{return (cljs.core.pv_aget.call(null,new_root__9889,1) == null);
} else
{return and__3822__auto____9891;
}
})())
{return (new cljs.core.PersistentVector(this__9886.meta,cnt_1__9890,(this__9886.shift - 5),cljs.core.pv_aget.call(null,new_root__9889,0),new_tail__9887,null));
} else
{return (new cljs.core.PersistentVector(this__9886.meta,cnt_1__9890,this__9886.shift,new_root__9889,new_tail__9887,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9892 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9893 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9894 = this;
return (new cljs.core.PersistentVector(meta,this__9894.cnt,this__9894.shift,this__9894.root,this__9894.tail,this__9894.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9895 = this;
return this__9895.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9896 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9897 = this;
if((function (){var and__3822__auto____9898 = (0 <= n);
if(and__3822__auto____9898)
{return (n < this__9897.cnt);
} else
{return and__3822__auto____9898;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9899 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9899.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9904 = xs.length;
var xs__9905 = (((no_clone === true))?xs:xs.slice());
if((l__9904 < 32))
{return (new cljs.core.PersistentVector(null,l__9904,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9905,null));
} else
{var node__9906 = xs__9905.slice(0,32);
var v__9907 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9906,null));
var i__9908 = 32;
var out__9909 = cljs.core._as_transient.call(null,v__9907);
while(true){
if((i__9908 < l__9904))
{{
var G__9910 = (i__9908 + 1);
var G__9911 = cljs.core.conj_BANG_.call(null,out__9909,(xs__9905[i__9908]));
i__9908 = G__9910;
out__9909 = G__9911;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9909);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9912){
var args = cljs.core.seq(arglist__9912);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9913 = this;
if(((this__9913.off + 1) < this__9913.node.length))
{var s__9914 = cljs.core.chunked_seq.call(null,this__9913.vec,this__9913.node,this__9913.i,(this__9913.off + 1));
if((s__9914 == null))
{return null;
} else
{return s__9914;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9915 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9916 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9917 = this;
return (this__9917.node[this__9917.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9918 = this;
if(((this__9918.off + 1) < this__9918.node.length))
{var s__9919 = cljs.core.chunked_seq.call(null,this__9918.vec,this__9918.node,this__9918.i,(this__9918.off + 1));
if((s__9919 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9919;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9920 = this;
var l__9921 = this__9920.node.length;
var s__9922 = ((((this__9920.i + l__9921) < cljs.core._count.call(null,this__9920.vec)))?cljs.core.chunked_seq.call(null,this__9920.vec,(this__9920.i + l__9921),0):null);
if((s__9922 == null))
{return null;
} else
{return s__9922;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9923 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9924 = this;
return cljs.core.chunked_seq.call(null,this__9924.vec,this__9924.node,this__9924.i,this__9924.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9925 = this;
return this__9925.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9926 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9926.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9927 = this;
return cljs.core.array_chunk.call(null,this__9927.node,this__9927.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9928 = this;
var l__9929 = this__9928.node.length;
var s__9930 = ((((this__9928.i + l__9929) < cljs.core._count.call(null,this__9928.vec)))?cljs.core.chunked_seq.call(null,this__9928.vec,(this__9928.i + l__9929),0):null);
if((s__9930 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9930;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9933 = this;
var h__2198__auto____9934 = this__9933.__hash;
if(!((h__2198__auto____9934 == null)))
{return h__2198__auto____9934;
} else
{var h__2198__auto____9935 = cljs.core.hash_coll.call(null,coll);
this__9933.__hash = h__2198__auto____9935;
return h__2198__auto____9935;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9936 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9937 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9938 = this;
var v_pos__9939 = (this__9938.start + key);
return (new cljs.core.Subvec(this__9938.meta,cljs.core._assoc.call(null,this__9938.v,v_pos__9939,val),this__9938.start,((this__9938.end > (v_pos__9939 + 1)) ? this__9938.end : (v_pos__9939 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9965 = null;
var G__9965__2 = (function (this_sym9940,k){
var this__9942 = this;
var this_sym9940__9943 = this;
var coll__9944 = this_sym9940__9943;
return coll__9944.cljs$core$ILookup$_lookup$arity$2(coll__9944,k);
});
var G__9965__3 = (function (this_sym9941,k,not_found){
var this__9942 = this;
var this_sym9941__9945 = this;
var coll__9946 = this_sym9941__9945;
return coll__9946.cljs$core$ILookup$_lookup$arity$3(coll__9946,k,not_found);
});
G__9965 = function(this_sym9941,k,not_found){
switch(arguments.length){
case 2:
return G__9965__2.call(this,this_sym9941,k);
case 3:
return G__9965__3.call(this,this_sym9941,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9965;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9931,args9932){
var this__9947 = this;
return this_sym9931.call.apply(this_sym9931,[this_sym9931].concat(args9932.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9948 = this;
return (new cljs.core.Subvec(this__9948.meta,cljs.core._assoc_n.call(null,this__9948.v,this__9948.end,o),this__9948.start,(this__9948.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9949 = this;
var this__9950 = this;
return cljs.core.pr_str.call(null,this__9950);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9951 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9952 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9953 = this;
var subvec_seq__9954 = (function subvec_seq(i){
if((i === this__9953.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9953.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9954.call(null,this__9953.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9955 = this;
return (this__9955.end - this__9955.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9956 = this;
return cljs.core._nth.call(null,this__9956.v,(this__9956.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9957 = this;
if((this__9957.start === this__9957.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9957.meta,this__9957.v,this__9957.start,(this__9957.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9958 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9959 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9960 = this;
return (new cljs.core.Subvec(meta,this__9960.v,this__9960.start,this__9960.end,this__9960.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9961 = this;
return this__9961.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9962 = this;
return cljs.core._nth.call(null,this__9962.v,(this__9962.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9963 = this;
return cljs.core._nth.call(null,this__9963.v,(this__9963.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9964 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9964.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9967 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9967,0,tl.length);
return ret__9967;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9971 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9972 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9971,subidx__9972,(((level === 5))?tail_node:(function (){var child__9973 = cljs.core.pv_aget.call(null,ret__9971,subidx__9972);
if(!((child__9973 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9973,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9971;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9978 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9979 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9980 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9978,subidx__9979));
if((function (){var and__3822__auto____9981 = (new_child__9980 == null);
if(and__3822__auto____9981)
{return (subidx__9979 === 0);
} else
{return and__3822__auto____9981;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9978,subidx__9979,new_child__9980);
return node__9978;
}
} else
{if((subidx__9979 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9978,subidx__9979,null);
return node__9978;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9986 = (0 <= i);
if(and__3822__auto____9986)
{return (i < tv.cnt);
} else
{return and__3822__auto____9986;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9987 = tv.root;
var node__9988 = root__9987;
var level__9989 = tv.shift;
while(true){
if((level__9989 > 0))
{{
var G__9990 = cljs.core.tv_ensure_editable.call(null,root__9987.edit,cljs.core.pv_aget.call(null,node__9988,((i >>> level__9989) & 31)));
var G__9991 = (level__9989 - 5);
node__9988 = G__9990;
level__9989 = G__9991;
continue;
}
} else
{return node__9988.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__10031 = null;
var G__10031__2 = (function (this_sym9994,k){
var this__9996 = this;
var this_sym9994__9997 = this;
var coll__9998 = this_sym9994__9997;
return coll__9998.cljs$core$ILookup$_lookup$arity$2(coll__9998,k);
});
var G__10031__3 = (function (this_sym9995,k,not_found){
var this__9996 = this;
var this_sym9995__9999 = this;
var coll__10000 = this_sym9995__9999;
return coll__10000.cljs$core$ILookup$_lookup$arity$3(coll__10000,k,not_found);
});
G__10031 = function(this_sym9995,k,not_found){
switch(arguments.length){
case 2:
return G__10031__2.call(this,this_sym9995,k);
case 3:
return G__10031__3.call(this,this_sym9995,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10031;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9992,args9993){
var this__10001 = this;
return this_sym9992.call.apply(this_sym9992,[this_sym9992].concat(args9993.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10002 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10003 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10004 = this;
if(this__10004.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10005 = this;
if((function (){var and__3822__auto____10006 = (0 <= n);
if(and__3822__auto____10006)
{return (n < this__10005.cnt);
} else
{return and__3822__auto____10006;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10007 = this;
if(this__10007.root.edit)
{return this__10007.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10008 = this;
if(this__10008.root.edit)
{if((function (){var and__3822__auto____10009 = (0 <= n);
if(and__3822__auto____10009)
{return (n < this__10008.cnt);
} else
{return and__3822__auto____10009;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10008.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10014 = (function go(level,node){
var node__10012 = cljs.core.tv_ensure_editable.call(null,this__10008.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10012,(n & 31),val);
return node__10012;
} else
{var subidx__10013 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10012,subidx__10013,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10012,subidx__10013)));
return node__10012;
}
}).call(null,this__10008.shift,this__10008.root);
this__10008.root = new_root__10014;
return tcoll;
}
} else
{if((n === this__10008.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10008.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__10015 = this;
if(this__10015.root.edit)
{if((this__10015.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10015.cnt))
{this__10015.cnt = 0;
return tcoll;
} else
{if((((this__10015.cnt - 1) & 31) > 0))
{this__10015.cnt = (this__10015.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10016 = cljs.core.editable_array_for.call(null,tcoll,(this__10015.cnt - 2));
var new_root__10018 = (function (){var nr__10017 = cljs.core.tv_pop_tail.call(null,tcoll,this__10015.shift,this__10015.root);
if(!((nr__10017 == null)))
{return nr__10017;
} else
{return (new cljs.core.VectorNode(this__10015.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10019 = (5 < this__10015.shift);
if(and__3822__auto____10019)
{return (cljs.core.pv_aget.call(null,new_root__10018,1) == null);
} else
{return and__3822__auto____10019;
}
})())
{var new_root__10020 = cljs.core.tv_ensure_editable.call(null,this__10015.root.edit,cljs.core.pv_aget.call(null,new_root__10018,0));
this__10015.root = new_root__10020;
this__10015.shift = (this__10015.shift - 5);
this__10015.cnt = (this__10015.cnt - 1);
this__10015.tail = new_tail__10016;
return tcoll;
} else
{this__10015.root = new_root__10018;
this__10015.cnt = (this__10015.cnt - 1);
this__10015.tail = new_tail__10016;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10021 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10022 = this;
if(this__10022.root.edit)
{if(((this__10022.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10022.tail[(this__10022.cnt & 31)] = o);
this__10022.cnt = (this__10022.cnt + 1);
return tcoll;
} else
{var tail_node__10023 = (new cljs.core.VectorNode(this__10022.root.edit,this__10022.tail));
var new_tail__10024 = cljs.core.make_array.call(null,32);
(new_tail__10024[0] = o);
this__10022.tail = new_tail__10024;
if(((this__10022.cnt >>> 5) > (1 << this__10022.shift)))
{var new_root_array__10025 = cljs.core.make_array.call(null,32);
var new_shift__10026 = (this__10022.shift + 5);
(new_root_array__10025[0] = this__10022.root);
(new_root_array__10025[1] = cljs.core.new_path.call(null,this__10022.root.edit,this__10022.shift,tail_node__10023));
this__10022.root = (new cljs.core.VectorNode(this__10022.root.edit,new_root_array__10025));
this__10022.shift = new_shift__10026;
this__10022.cnt = (this__10022.cnt + 1);
return tcoll;
} else
{var new_root__10027 = cljs.core.tv_push_tail.call(null,tcoll,this__10022.shift,this__10022.root,tail_node__10023);
this__10022.root = new_root__10027;
this__10022.cnt = (this__10022.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10028 = this;
if(this__10028.root.edit)
{this__10028.root.edit = null;
var len__10029 = (this__10028.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10030 = cljs.core.make_array.call(null,len__10029);
cljs.core.array_copy.call(null,this__10028.tail,0,trimmed_tail__10030,0,len__10029);
return (new cljs.core.PersistentVector(null,this__10028.cnt,this__10028.shift,this__10028.root,trimmed_tail__10030,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10032 = this;
var h__2198__auto____10033 = this__10032.__hash;
if(!((h__2198__auto____10033 == null)))
{return h__2198__auto____10033;
} else
{var h__2198__auto____10034 = cljs.core.hash_coll.call(null,coll);
this__10032.__hash = h__2198__auto____10034;
return h__2198__auto____10034;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10035 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10036 = this;
var this__10037 = this;
return cljs.core.pr_str.call(null,this__10037);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10038 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10039 = this;
return cljs.core._first.call(null,this__10039.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10040 = this;
var temp__3971__auto____10041 = cljs.core.next.call(null,this__10040.front);
if(temp__3971__auto____10041)
{var f1__10042 = temp__3971__auto____10041;
return (new cljs.core.PersistentQueueSeq(this__10040.meta,f1__10042,this__10040.rear,null));
} else
{if((this__10040.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10040.meta,this__10040.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10043 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10044 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10044.front,this__10044.rear,this__10044.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10045 = this;
return this__10045.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10046 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10046.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10047 = this;
var h__2198__auto____10048 = this__10047.__hash;
if(!((h__2198__auto____10048 == null)))
{return h__2198__auto____10048;
} else
{var h__2198__auto____10049 = cljs.core.hash_coll.call(null,coll);
this__10047.__hash = h__2198__auto____10049;
return h__2198__auto____10049;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10050 = this;
if(cljs.core.truth_(this__10050.front))
{return (new cljs.core.PersistentQueue(this__10050.meta,(this__10050.count + 1),this__10050.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10051 = this__10050.rear;
if(cljs.core.truth_(or__3824__auto____10051))
{return or__3824__auto____10051;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10050.meta,(this__10050.count + 1),cljs.core.conj.call(null,this__10050.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10052 = this;
var this__10053 = this;
return cljs.core.pr_str.call(null,this__10053);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10054 = this;
var rear__10055 = cljs.core.seq.call(null,this__10054.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10056 = this__10054.front;
if(cljs.core.truth_(or__3824__auto____10056))
{return or__3824__auto____10056;
} else
{return rear__10055;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10054.front,cljs.core.seq.call(null,rear__10055),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10057 = this;
return this__10057.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10058 = this;
return cljs.core._first.call(null,this__10058.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10059 = this;
if(cljs.core.truth_(this__10059.front))
{var temp__3971__auto____10060 = cljs.core.next.call(null,this__10059.front);
if(temp__3971__auto____10060)
{var f1__10061 = temp__3971__auto____10060;
return (new cljs.core.PersistentQueue(this__10059.meta,(this__10059.count - 1),f1__10061,this__10059.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10059.meta,(this__10059.count - 1),cljs.core.seq.call(null,this__10059.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10062 = this;
return cljs.core.first.call(null,this__10062.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10063 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10064 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10065 = this;
return (new cljs.core.PersistentQueue(meta,this__10065.count,this__10065.front,this__10065.rear,this__10065.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10066 = this;
return this__10066.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10067 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10068 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__10071 = array.length;
var i__10072 = 0;
while(true){
if((i__10072 < len__10071))
{if((k === (array[i__10072])))
{return i__10072;
} else
{{
var G__10073 = (i__10072 + incr);
i__10072 = G__10073;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__10076 = cljs.core.hash.call(null,a);
var b__10077 = cljs.core.hash.call(null,b);
if((a__10076 < b__10077))
{return -1;
} else
{if((a__10076 > b__10077))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__10085 = m.keys;
var len__10086 = ks__10085.length;
var so__10087 = m.strobj;
var out__10088 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10089 = 0;
var out__10090 = cljs.core.transient$.call(null,out__10088);
while(true){
if((i__10089 < len__10086))
{var k__10091 = (ks__10085[i__10089]);
{
var G__10092 = (i__10089 + 1);
var G__10093 = cljs.core.assoc_BANG_.call(null,out__10090,k__10091,(so__10087[k__10091]));
i__10089 = G__10092;
out__10090 = G__10093;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10090,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__10099 = {};
var l__10100 = ks.length;
var i__10101 = 0;
while(true){
if((i__10101 < l__10100))
{var k__10102 = (ks[i__10101]);
(new_obj__10099[k__10102] = (obj[k__10102]));
{
var G__10103 = (i__10101 + 1);
i__10101 = G__10103;
continue;
}
} else
{}
break;
}
return new_obj__10099;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10106 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10107 = this;
var h__2198__auto____10108 = this__10107.__hash;
if(!((h__2198__auto____10108 == null)))
{return h__2198__auto____10108;
} else
{var h__2198__auto____10109 = cljs.core.hash_imap.call(null,coll);
this__10107.__hash = h__2198__auto____10109;
return h__2198__auto____10109;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10110 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10111 = this;
if((function (){var and__3822__auto____10112 = goog.isString(k);
if(and__3822__auto____10112)
{return !((cljs.core.scan_array.call(null,1,k,this__10111.keys) == null));
} else
{return and__3822__auto____10112;
}
})())
{return (this__10111.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10113 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____10114 = (this__10113.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____10114)
{return or__3824__auto____10114;
} else
{return (this__10113.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__10113.keys) == null)))
{var new_strobj__10115 = cljs.core.obj_clone.call(null,this__10113.strobj,this__10113.keys);
(new_strobj__10115[k] = v);
return (new cljs.core.ObjMap(this__10113.meta,this__10113.keys,new_strobj__10115,(this__10113.update_count + 1),null));
} else
{var new_strobj__10116 = cljs.core.obj_clone.call(null,this__10113.strobj,this__10113.keys);
var new_keys__10117 = this__10113.keys.slice();
(new_strobj__10116[k] = v);
new_keys__10117.push(k);
return (new cljs.core.ObjMap(this__10113.meta,new_keys__10117,new_strobj__10116,(this__10113.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10118 = this;
if((function (){var and__3822__auto____10119 = goog.isString(k);
if(and__3822__auto____10119)
{return !((cljs.core.scan_array.call(null,1,k,this__10118.keys) == null));
} else
{return and__3822__auto____10119;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__10141 = null;
var G__10141__2 = (function (this_sym10120,k){
var this__10122 = this;
var this_sym10120__10123 = this;
var coll__10124 = this_sym10120__10123;
return coll__10124.cljs$core$ILookup$_lookup$arity$2(coll__10124,k);
});
var G__10141__3 = (function (this_sym10121,k,not_found){
var this__10122 = this;
var this_sym10121__10125 = this;
var coll__10126 = this_sym10121__10125;
return coll__10126.cljs$core$ILookup$_lookup$arity$3(coll__10126,k,not_found);
});
G__10141 = function(this_sym10121,k,not_found){
switch(arguments.length){
case 2:
return G__10141__2.call(this,this_sym10121,k);
case 3:
return G__10141__3.call(this,this_sym10121,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10141;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym10104,args10105){
var this__10127 = this;
return this_sym10104.call.apply(this_sym10104,[this_sym10104].concat(args10105.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10128 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10129 = this;
var this__10130 = this;
return cljs.core.pr_str.call(null,this__10130);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10131 = this;
if((this__10131.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10094_SHARP_){
return cljs.core.vector.call(null,p1__10094_SHARP_,(this__10131.strobj[p1__10094_SHARP_]));
}),this__10131.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10132 = this;
return this__10132.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10133 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10134 = this;
return (new cljs.core.ObjMap(meta,this__10134.keys,this__10134.strobj,this__10134.update_count,this__10134.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10135 = this;
return this__10135.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10136 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10136.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10137 = this;
if((function (){var and__3822__auto____10138 = goog.isString(k);
if(and__3822__auto____10138)
{return !((cljs.core.scan_array.call(null,1,k,this__10137.keys) == null));
} else
{return and__3822__auto____10138;
}
})())
{var new_keys__10139 = this__10137.keys.slice();
var new_strobj__10140 = cljs.core.obj_clone.call(null,this__10137.strobj,this__10137.keys);
new_keys__10139.splice(cljs.core.scan_array.call(null,1,k,new_keys__10139),1);
cljs.core.js_delete.call(null,new_strobj__10140,k);
return (new cljs.core.ObjMap(this__10137.meta,new_keys__10139,new_strobj__10140,(this__10137.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10145 = this;
var h__2198__auto____10146 = this__10145.__hash;
if(!((h__2198__auto____10146 == null)))
{return h__2198__auto____10146;
} else
{var h__2198__auto____10147 = cljs.core.hash_imap.call(null,coll);
this__10145.__hash = h__2198__auto____10147;
return h__2198__auto____10147;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10148 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10149 = this;
var bucket__10150 = (this__10149.hashobj[cljs.core.hash.call(null,k)]);
var i__10151 = (cljs.core.truth_(bucket__10150)?cljs.core.scan_array.call(null,2,k,bucket__10150):null);
if(cljs.core.truth_(i__10151))
{return (bucket__10150[(i__10151 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10152 = this;
var h__10153 = cljs.core.hash.call(null,k);
var bucket__10154 = (this__10152.hashobj[h__10153]);
if(cljs.core.truth_(bucket__10154))
{var new_bucket__10155 = bucket__10154.slice();
var new_hashobj__10156 = goog.object.clone(this__10152.hashobj);
(new_hashobj__10156[h__10153] = new_bucket__10155);
var temp__3971__auto____10157 = cljs.core.scan_array.call(null,2,k,new_bucket__10155);
if(cljs.core.truth_(temp__3971__auto____10157))
{var i__10158 = temp__3971__auto____10157;
(new_bucket__10155[(i__10158 + 1)] = v);
return (new cljs.core.HashMap(this__10152.meta,this__10152.count,new_hashobj__10156,null));
} else
{new_bucket__10155.push(k,v);
return (new cljs.core.HashMap(this__10152.meta,(this__10152.count + 1),new_hashobj__10156,null));
}
} else
{var new_hashobj__10159 = goog.object.clone(this__10152.hashobj);
(new_hashobj__10159[h__10153] = [k,v]);
return (new cljs.core.HashMap(this__10152.meta,(this__10152.count + 1),new_hashobj__10159,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10160 = this;
var bucket__10161 = (this__10160.hashobj[cljs.core.hash.call(null,k)]);
var i__10162 = (cljs.core.truth_(bucket__10161)?cljs.core.scan_array.call(null,2,k,bucket__10161):null);
if(cljs.core.truth_(i__10162))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__10187 = null;
var G__10187__2 = (function (this_sym10163,k){
var this__10165 = this;
var this_sym10163__10166 = this;
var coll__10167 = this_sym10163__10166;
return coll__10167.cljs$core$ILookup$_lookup$arity$2(coll__10167,k);
});
var G__10187__3 = (function (this_sym10164,k,not_found){
var this__10165 = this;
var this_sym10164__10168 = this;
var coll__10169 = this_sym10164__10168;
return coll__10169.cljs$core$ILookup$_lookup$arity$3(coll__10169,k,not_found);
});
G__10187 = function(this_sym10164,k,not_found){
switch(arguments.length){
case 2:
return G__10187__2.call(this,this_sym10164,k);
case 3:
return G__10187__3.call(this,this_sym10164,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10187;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym10143,args10144){
var this__10170 = this;
return this_sym10143.call.apply(this_sym10143,[this_sym10143].concat(args10144.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10171 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10172 = this;
var this__10173 = this;
return cljs.core.pr_str.call(null,this__10173);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10174 = this;
if((this__10174.count > 0))
{var hashes__10175 = cljs.core.js_keys.call(null,this__10174.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10142_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10174.hashobj[p1__10142_SHARP_])));
}),hashes__10175);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10176 = this;
return this__10176.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10177 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10178 = this;
return (new cljs.core.HashMap(meta,this__10178.count,this__10178.hashobj,this__10178.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10179 = this;
return this__10179.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10180 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10180.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10181 = this;
var h__10182 = cljs.core.hash.call(null,k);
var bucket__10183 = (this__10181.hashobj[h__10182]);
var i__10184 = (cljs.core.truth_(bucket__10183)?cljs.core.scan_array.call(null,2,k,bucket__10183):null);
if(cljs.core.not.call(null,i__10184))
{return coll;
} else
{var new_hashobj__10185 = goog.object.clone(this__10181.hashobj);
if((3 > bucket__10183.length))
{cljs.core.js_delete.call(null,new_hashobj__10185,h__10182);
} else
{var new_bucket__10186 = bucket__10183.slice();
new_bucket__10186.splice(i__10184,2);
(new_hashobj__10185[h__10182] = new_bucket__10186);
}
return (new cljs.core.HashMap(this__10181.meta,(this__10181.count - 1),new_hashobj__10185,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10188 = ks.length;
var i__10189 = 0;
var out__10190 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10189 < len__10188))
{{
var G__10191 = (i__10189 + 1);
var G__10192 = cljs.core.assoc.call(null,out__10190,(ks[i__10189]),(vs[i__10189]));
i__10189 = G__10191;
out__10190 = G__10192;
continue;
}
} else
{return out__10190;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10196 = m.arr;
var len__10197 = arr__10196.length;
var i__10198 = 0;
while(true){
if((len__10197 <= i__10198))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10196[i__10198]),k))
{return i__10198;
} else
{if("\uFDD0'else")
{{
var G__10199 = (i__10198 + 2);
i__10198 = G__10199;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10202 = this;
return (new cljs.core.TransientArrayMap({},this__10202.arr.length,this__10202.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10203 = this;
var h__2198__auto____10204 = this__10203.__hash;
if(!((h__2198__auto____10204 == null)))
{return h__2198__auto____10204;
} else
{var h__2198__auto____10205 = cljs.core.hash_imap.call(null,coll);
this__10203.__hash = h__2198__auto____10205;
return h__2198__auto____10205;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10206 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10207 = this;
var idx__10208 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10208 === -1))
{return not_found;
} else
{return (this__10207.arr[(idx__10208 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10209 = this;
var idx__10210 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10210 === -1))
{if((this__10209.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10209.meta,(this__10209.cnt + 1),(function (){var G__10211__10212 = this__10209.arr.slice();
G__10211__10212.push(k);
G__10211__10212.push(v);
return G__10211__10212;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10209.arr[(idx__10210 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10209.meta,this__10209.cnt,(function (){var G__10213__10214 = this__10209.arr.slice();
(G__10213__10214[(idx__10210 + 1)] = v);
return G__10213__10214;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10215 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10247 = null;
var G__10247__2 = (function (this_sym10216,k){
var this__10218 = this;
var this_sym10216__10219 = this;
var coll__10220 = this_sym10216__10219;
return coll__10220.cljs$core$ILookup$_lookup$arity$2(coll__10220,k);
});
var G__10247__3 = (function (this_sym10217,k,not_found){
var this__10218 = this;
var this_sym10217__10221 = this;
var coll__10222 = this_sym10217__10221;
return coll__10222.cljs$core$ILookup$_lookup$arity$3(coll__10222,k,not_found);
});
G__10247 = function(this_sym10217,k,not_found){
switch(arguments.length){
case 2:
return G__10247__2.call(this,this_sym10217,k);
case 3:
return G__10247__3.call(this,this_sym10217,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10247;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym10200,args10201){
var this__10223 = this;
return this_sym10200.call.apply(this_sym10200,[this_sym10200].concat(args10201.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10224 = this;
var len__10225 = this__10224.arr.length;
var i__10226 = 0;
var init__10227 = init;
while(true){
if((i__10226 < len__10225))
{var init__10228 = f.call(null,init__10227,(this__10224.arr[i__10226]),(this__10224.arr[(i__10226 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10228))
{return cljs.core.deref.call(null,init__10228);
} else
{{
var G__10248 = (i__10226 + 2);
var G__10249 = init__10228;
i__10226 = G__10248;
init__10227 = G__10249;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10229 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10230 = this;
var this__10231 = this;
return cljs.core.pr_str.call(null,this__10231);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10232 = this;
if((this__10232.cnt > 0))
{var len__10233 = this__10232.arr.length;
var array_map_seq__10234 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10233))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10232.arr[i]),(this__10232.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__10234.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10235 = this;
return this__10235.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10236 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10237 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10237.cnt,this__10237.arr,this__10237.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10238 = this;
return this__10238.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10239 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10239.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10240 = this;
var idx__10241 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10241 >= 0))
{var len__10242 = this__10240.arr.length;
var new_len__10243 = (len__10242 - 2);
if((new_len__10243 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__10244 = cljs.core.make_array.call(null,new_len__10243);
var s__10245 = 0;
var d__10246 = 0;
while(true){
if((s__10245 >= len__10242))
{return (new cljs.core.PersistentArrayMap(this__10240.meta,(this__10240.cnt - 1),new_arr__10244,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10240.arr[s__10245])))
{{
var G__10250 = (s__10245 + 2);
var G__10251 = d__10246;
s__10245 = G__10250;
d__10246 = G__10251;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10244[d__10246] = (this__10240.arr[s__10245]));
(new_arr__10244[(d__10246 + 1)] = (this__10240.arr[(s__10245 + 1)]));
{
var G__10252 = (s__10245 + 2);
var G__10253 = (d__10246 + 2);
s__10245 = G__10252;
d__10246 = G__10253;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__10254 = cljs.core.count.call(null,ks);
var i__10255 = 0;
var out__10256 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10255 < len__10254))
{{
var G__10257 = (i__10255 + 1);
var G__10258 = cljs.core.assoc_BANG_.call(null,out__10256,(ks[i__10255]),(vs[i__10255]));
i__10255 = G__10257;
out__10256 = G__10258;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10256);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10259 = this;
if(cljs.core.truth_(this__10259.editable_QMARK_))
{var idx__10260 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10260 >= 0))
{(this__10259.arr[idx__10260] = (this__10259.arr[(this__10259.len - 2)]));
(this__10259.arr[(idx__10260 + 1)] = (this__10259.arr[(this__10259.len - 1)]));
var G__10261__10262 = this__10259.arr;
G__10261__10262.pop();
G__10261__10262.pop();
G__10261__10262;
this__10259.len = (this__10259.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10263 = this;
if(cljs.core.truth_(this__10263.editable_QMARK_))
{var idx__10264 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10264 === -1))
{if(((this__10263.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10263.len = (this__10263.len + 2);
this__10263.arr.push(key);
this__10263.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10263.len,this__10263.arr),key,val);
}
} else
{if((val === (this__10263.arr[(idx__10264 + 1)])))
{return tcoll;
} else
{(this__10263.arr[(idx__10264 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10265 = this;
if(cljs.core.truth_(this__10265.editable_QMARK_))
{if((function (){var G__10266__10267 = o;
if(G__10266__10267)
{if((function (){var or__3824__auto____10268 = (G__10266__10267.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10268)
{return or__3824__auto____10268;
} else
{return G__10266__10267.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10266__10267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10266__10267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10266__10267);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10269 = cljs.core.seq.call(null,o);
var tcoll__10270 = tcoll;
while(true){
var temp__3971__auto____10271 = cljs.core.first.call(null,es__10269);
if(cljs.core.truth_(temp__3971__auto____10271))
{var e__10272 = temp__3971__auto____10271;
{
var G__10278 = cljs.core.next.call(null,es__10269);
var G__10279 = tcoll__10270.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__10270,cljs.core.key.call(null,e__10272),cljs.core.val.call(null,e__10272));
es__10269 = G__10278;
tcoll__10270 = G__10279;
continue;
}
} else
{return tcoll__10270;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10273 = this;
if(cljs.core.truth_(this__10273.editable_QMARK_))
{this__10273.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10273.len,2),this__10273.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10274 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10275 = this;
if(cljs.core.truth_(this__10275.editable_QMARK_))
{var idx__10276 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__10276 === -1))
{return not_found;
} else
{return (this__10275.arr[(idx__10276 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10277 = this;
if(cljs.core.truth_(this__10277.editable_QMARK_))
{return cljs.core.quot.call(null,this__10277.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10282 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10283 = 0;
while(true){
if((i__10283 < len))
{{
var G__10284 = cljs.core.assoc_BANG_.call(null,out__10282,(arr[i__10283]),(arr[(i__10283 + 1)]));
var G__10285 = (i__10283 + 2);
out__10282 = G__10284;
i__10283 = G__10285;
continue;
}
} else
{return out__10282;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__10290__10291 = arr.slice();
(G__10290__10291[i] = a);
return G__10290__10291;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10292__10293 = arr.slice();
(G__10292__10293[i] = a);
(G__10292__10293[j] = b);
return G__10292__10293;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__10295 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10295,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10295,(2 * i),(new_arr__10295.length - (2 * i)));
return new_arr__10295;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__10298 = inode.ensure_editable(edit);
(editable__10298.arr[i] = a);
return editable__10298;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10299 = inode.ensure_editable(edit);
(editable__10299.arr[i] = a);
(editable__10299.arr[j] = b);
return editable__10299;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__10306 = arr.length;
var i__10307 = 0;
var init__10308 = init;
while(true){
if((i__10307 < len__10306))
{var init__10311 = (function (){var k__10309 = (arr[i__10307]);
if(!((k__10309 == null)))
{return f.call(null,init__10308,k__10309,(arr[(i__10307 + 1)]));
} else
{var node__10310 = (arr[(i__10307 + 1)]);
if(!((node__10310 == null)))
{return node__10310.kv_reduce(f,init__10308);
} else
{return init__10308;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10311))
{return cljs.core.deref.call(null,init__10311);
} else
{{
var G__10312 = (i__10307 + 2);
var G__10313 = init__10311;
i__10307 = G__10312;
init__10308 = G__10313;
continue;
}
}
} else
{return init__10308;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__10314 = this;
var inode__10315 = this;
if((this__10314.bitmap === bit))
{return null;
} else
{var editable__10316 = inode__10315.ensure_editable(e);
var earr__10317 = editable__10316.arr;
var len__10318 = earr__10317.length;
editable__10316.bitmap = (bit ^ editable__10316.bitmap);
cljs.core.array_copy.call(null,earr__10317,(2 * (i + 1)),earr__10317,(2 * i),(len__10318 - (2 * (i + 1))));
(earr__10317[(len__10318 - 2)] = null);
(earr__10317[(len__10318 - 1)] = null);
return editable__10316;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10319 = this;
var inode__10320 = this;
var bit__10321 = (1 << ((hash >>> shift) & 0x01f));
var idx__10322 = cljs.core.bitmap_indexed_node_index.call(null,this__10319.bitmap,bit__10321);
if(((this__10319.bitmap & bit__10321) === 0))
{var n__10323 = cljs.core.bit_count.call(null,this__10319.bitmap);
if(((2 * n__10323) < this__10319.arr.length))
{var editable__10324 = inode__10320.ensure_editable(edit);
var earr__10325 = editable__10324.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10325,(2 * idx__10322),earr__10325,(2 * (idx__10322 + 1)),(2 * (n__10323 - idx__10322)));
(earr__10325[(2 * idx__10322)] = key);
(earr__10325[((2 * idx__10322) + 1)] = val);
editable__10324.bitmap = (editable__10324.bitmap | bit__10321);
return editable__10324;
} else
{if((n__10323 >= 16))
{var nodes__10326 = cljs.core.make_array.call(null,32);
var jdx__10327 = ((hash >>> shift) & 0x01f);
(nodes__10326[jdx__10327] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10328 = 0;
var j__10329 = 0;
while(true){
if((i__10328 < 32))
{if((((this__10319.bitmap >>> i__10328) & 1) === 0))
{{
var G__10382 = (i__10328 + 1);
var G__10383 = j__10329;
i__10328 = G__10382;
j__10329 = G__10383;
continue;
}
} else
{(nodes__10326[i__10328] = ((!(((this__10319.arr[j__10329]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10319.arr[j__10329])),(this__10319.arr[j__10329]),(this__10319.arr[(j__10329 + 1)]),added_leaf_QMARK_):(this__10319.arr[(j__10329 + 1)])));
{
var G__10384 = (i__10328 + 1);
var G__10385 = (j__10329 + 2);
i__10328 = G__10384;
j__10329 = G__10385;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10323 + 1),nodes__10326));
} else
{if("\uFDD0'else")
{var new_arr__10330 = cljs.core.make_array.call(null,(2 * (n__10323 + 4)));
cljs.core.array_copy.call(null,this__10319.arr,0,new_arr__10330,0,(2 * idx__10322));
(new_arr__10330[(2 * idx__10322)] = key);
(new_arr__10330[((2 * idx__10322) + 1)] = val);
cljs.core.array_copy.call(null,this__10319.arr,(2 * idx__10322),new_arr__10330,(2 * (idx__10322 + 1)),(2 * (n__10323 - idx__10322)));
added_leaf_QMARK_.val = true;
var editable__10331 = inode__10320.ensure_editable(edit);
editable__10331.arr = new_arr__10330;
editable__10331.bitmap = (editable__10331.bitmap | bit__10321);
return editable__10331;
} else
{return null;
}
}
}
} else
{var key_or_nil__10332 = (this__10319.arr[(2 * idx__10322)]);
var val_or_node__10333 = (this__10319.arr[((2 * idx__10322) + 1)]);
if((key_or_nil__10332 == null))
{var n__10334 = val_or_node__10333.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10334 === val_or_node__10333))
{return inode__10320;
} else
{return cljs.core.edit_and_set.call(null,inode__10320,edit,((2 * idx__10322) + 1),n__10334);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10332))
{if((val === val_or_node__10333))
{return inode__10320;
} else
{return cljs.core.edit_and_set.call(null,inode__10320,edit,((2 * idx__10322) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10320,edit,(2 * idx__10322),null,((2 * idx__10322) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10332,val_or_node__10333,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10335 = this;
var inode__10336 = this;
return cljs.core.create_inode_seq.call(null,this__10335.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10337 = this;
var inode__10338 = this;
var bit__10339 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10337.bitmap & bit__10339) === 0))
{return inode__10338;
} else
{var idx__10340 = cljs.core.bitmap_indexed_node_index.call(null,this__10337.bitmap,bit__10339);
var key_or_nil__10341 = (this__10337.arr[(2 * idx__10340)]);
var val_or_node__10342 = (this__10337.arr[((2 * idx__10340) + 1)]);
if((key_or_nil__10341 == null))
{var n__10343 = val_or_node__10342.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10343 === val_or_node__10342))
{return inode__10338;
} else
{if(!((n__10343 == null)))
{return cljs.core.edit_and_set.call(null,inode__10338,edit,((2 * idx__10340) + 1),n__10343);
} else
{if((this__10337.bitmap === bit__10339))
{return null;
} else
{if("\uFDD0'else")
{return inode__10338.edit_and_remove_pair(edit,bit__10339,idx__10340);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10341))
{(removed_leaf_QMARK_[0] = true);
return inode__10338.edit_and_remove_pair(edit,bit__10339,idx__10340);
} else
{if("\uFDD0'else")
{return inode__10338;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10344 = this;
var inode__10345 = this;
if((e === this__10344.edit))
{return inode__10345;
} else
{var n__10346 = cljs.core.bit_count.call(null,this__10344.bitmap);
var new_arr__10347 = cljs.core.make_array.call(null,(((n__10346 < 0))?4:(2 * (n__10346 + 1))));
cljs.core.array_copy.call(null,this__10344.arr,0,new_arr__10347,0,(2 * n__10346));
return (new cljs.core.BitmapIndexedNode(e,this__10344.bitmap,new_arr__10347));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10348 = this;
var inode__10349 = this;
return cljs.core.inode_kv_reduce.call(null,this__10348.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10350 = this;
var inode__10351 = this;
var bit__10352 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10350.bitmap & bit__10352) === 0))
{return not_found;
} else
{var idx__10353 = cljs.core.bitmap_indexed_node_index.call(null,this__10350.bitmap,bit__10352);
var key_or_nil__10354 = (this__10350.arr[(2 * idx__10353)]);
var val_or_node__10355 = (this__10350.arr[((2 * idx__10353) + 1)]);
if((key_or_nil__10354 == null))
{return val_or_node__10355.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10354))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10354,val_or_node__10355], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__10356 = this;
var inode__10357 = this;
var bit__10358 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10356.bitmap & bit__10358) === 0))
{return inode__10357;
} else
{var idx__10359 = cljs.core.bitmap_indexed_node_index.call(null,this__10356.bitmap,bit__10358);
var key_or_nil__10360 = (this__10356.arr[(2 * idx__10359)]);
var val_or_node__10361 = (this__10356.arr[((2 * idx__10359) + 1)]);
if((key_or_nil__10360 == null))
{var n__10362 = val_or_node__10361.inode_without((shift + 5),hash,key);
if((n__10362 === val_or_node__10361))
{return inode__10357;
} else
{if(!((n__10362 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10356.bitmap,cljs.core.clone_and_set.call(null,this__10356.arr,((2 * idx__10359) + 1),n__10362)));
} else
{if((this__10356.bitmap === bit__10358))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10356.bitmap ^ bit__10358),cljs.core.remove_pair.call(null,this__10356.arr,idx__10359)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10360))
{return (new cljs.core.BitmapIndexedNode(null,(this__10356.bitmap ^ bit__10358),cljs.core.remove_pair.call(null,this__10356.arr,idx__10359)));
} else
{if("\uFDD0'else")
{return inode__10357;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10363 = this;
var inode__10364 = this;
var bit__10365 = (1 << ((hash >>> shift) & 0x01f));
var idx__10366 = cljs.core.bitmap_indexed_node_index.call(null,this__10363.bitmap,bit__10365);
if(((this__10363.bitmap & bit__10365) === 0))
{var n__10367 = cljs.core.bit_count.call(null,this__10363.bitmap);
if((n__10367 >= 16))
{var nodes__10368 = cljs.core.make_array.call(null,32);
var jdx__10369 = ((hash >>> shift) & 0x01f);
(nodes__10368[jdx__10369] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10370 = 0;
var j__10371 = 0;
while(true){
if((i__10370 < 32))
{if((((this__10363.bitmap >>> i__10370) & 1) === 0))
{{
var G__10386 = (i__10370 + 1);
var G__10387 = j__10371;
i__10370 = G__10386;
j__10371 = G__10387;
continue;
}
} else
{(nodes__10368[i__10370] = ((!(((this__10363.arr[j__10371]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10363.arr[j__10371])),(this__10363.arr[j__10371]),(this__10363.arr[(j__10371 + 1)]),added_leaf_QMARK_):(this__10363.arr[(j__10371 + 1)])));
{
var G__10388 = (i__10370 + 1);
var G__10389 = (j__10371 + 2);
i__10370 = G__10388;
j__10371 = G__10389;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10367 + 1),nodes__10368));
} else
{var new_arr__10372 = cljs.core.make_array.call(null,(2 * (n__10367 + 1)));
cljs.core.array_copy.call(null,this__10363.arr,0,new_arr__10372,0,(2 * idx__10366));
(new_arr__10372[(2 * idx__10366)] = key);
(new_arr__10372[((2 * idx__10366) + 1)] = val);
cljs.core.array_copy.call(null,this__10363.arr,(2 * idx__10366),new_arr__10372,(2 * (idx__10366 + 1)),(2 * (n__10367 - idx__10366)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10363.bitmap | bit__10365),new_arr__10372));
}
} else
{var key_or_nil__10373 = (this__10363.arr[(2 * idx__10366)]);
var val_or_node__10374 = (this__10363.arr[((2 * idx__10366) + 1)]);
if((key_or_nil__10373 == null))
{var n__10375 = val_or_node__10374.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10375 === val_or_node__10374))
{return inode__10364;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10363.bitmap,cljs.core.clone_and_set.call(null,this__10363.arr,((2 * idx__10366) + 1),n__10375)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10373))
{if((val === val_or_node__10374))
{return inode__10364;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10363.bitmap,cljs.core.clone_and_set.call(null,this__10363.arr,((2 * idx__10366) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10363.bitmap,cljs.core.clone_and_set.call(null,this__10363.arr,(2 * idx__10366),null,((2 * idx__10366) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10373,val_or_node__10374,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10376 = this;
var inode__10377 = this;
var bit__10378 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10376.bitmap & bit__10378) === 0))
{return not_found;
} else
{var idx__10379 = cljs.core.bitmap_indexed_node_index.call(null,this__10376.bitmap,bit__10378);
var key_or_nil__10380 = (this__10376.arr[(2 * idx__10379)]);
var val_or_node__10381 = (this__10376.arr[((2 * idx__10379) + 1)]);
if((key_or_nil__10380 == null))
{return val_or_node__10381.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10380))
{return val_or_node__10381;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__10397 = array_node.arr;
var len__10398 = (2 * (array_node.cnt - 1));
var new_arr__10399 = cljs.core.make_array.call(null,len__10398);
var i__10400 = 0;
var j__10401 = 1;
var bitmap__10402 = 0;
while(true){
if((i__10400 < len__10398))
{if((function (){var and__3822__auto____10403 = !((i__10400 === idx));
if(and__3822__auto____10403)
{return !(((arr__10397[i__10400]) == null));
} else
{return and__3822__auto____10403;
}
})())
{(new_arr__10399[j__10401] = (arr__10397[i__10400]));
{
var G__10404 = (i__10400 + 1);
var G__10405 = (j__10401 + 2);
var G__10406 = (bitmap__10402 | (1 << i__10400));
i__10400 = G__10404;
j__10401 = G__10405;
bitmap__10402 = G__10406;
continue;
}
} else
{{
var G__10407 = (i__10400 + 1);
var G__10408 = j__10401;
var G__10409 = bitmap__10402;
i__10400 = G__10407;
j__10401 = G__10408;
bitmap__10402 = G__10409;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10402,new_arr__10399));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10410 = this;
var inode__10411 = this;
var idx__10412 = ((hash >>> shift) & 0x01f);
var node__10413 = (this__10410.arr[idx__10412]);
if((node__10413 == null))
{var editable__10414 = cljs.core.edit_and_set.call(null,inode__10411,edit,idx__10412,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10414.cnt = (editable__10414.cnt + 1);
return editable__10414;
} else
{var n__10415 = node__10413.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10415 === node__10413))
{return inode__10411;
} else
{return cljs.core.edit_and_set.call(null,inode__10411,edit,idx__10412,n__10415);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10416 = this;
var inode__10417 = this;
return cljs.core.create_array_node_seq.call(null,this__10416.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10418 = this;
var inode__10419 = this;
var idx__10420 = ((hash >>> shift) & 0x01f);
var node__10421 = (this__10418.arr[idx__10420]);
if((node__10421 == null))
{return inode__10419;
} else
{var n__10422 = node__10421.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10422 === node__10421))
{return inode__10419;
} else
{if((n__10422 == null))
{if((this__10418.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10419,edit,idx__10420);
} else
{var editable__10423 = cljs.core.edit_and_set.call(null,inode__10419,edit,idx__10420,n__10422);
editable__10423.cnt = (editable__10423.cnt - 1);
return editable__10423;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10419,edit,idx__10420,n__10422);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10424 = this;
var inode__10425 = this;
if((e === this__10424.edit))
{return inode__10425;
} else
{return (new cljs.core.ArrayNode(e,this__10424.cnt,this__10424.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10426 = this;
var inode__10427 = this;
var len__10428 = this__10426.arr.length;
var i__10429 = 0;
var init__10430 = init;
while(true){
if((i__10429 < len__10428))
{var node__10431 = (this__10426.arr[i__10429]);
if(!((node__10431 == null)))
{var init__10432 = node__10431.kv_reduce(f,init__10430);
if(cljs.core.reduced_QMARK_.call(null,init__10432))
{return cljs.core.deref.call(null,init__10432);
} else
{{
var G__10451 = (i__10429 + 1);
var G__10452 = init__10432;
i__10429 = G__10451;
init__10430 = G__10452;
continue;
}
}
} else
{return null;
}
} else
{return init__10430;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10433 = this;
var inode__10434 = this;
var idx__10435 = ((hash >>> shift) & 0x01f);
var node__10436 = (this__10433.arr[idx__10435]);
if(!((node__10436 == null)))
{return node__10436.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10437 = this;
var inode__10438 = this;
var idx__10439 = ((hash >>> shift) & 0x01f);
var node__10440 = (this__10437.arr[idx__10439]);
if(!((node__10440 == null)))
{var n__10441 = node__10440.inode_without((shift + 5),hash,key);
if((n__10441 === node__10440))
{return inode__10438;
} else
{if((n__10441 == null))
{if((this__10437.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10438,null,idx__10439);
} else
{return (new cljs.core.ArrayNode(null,(this__10437.cnt - 1),cljs.core.clone_and_set.call(null,this__10437.arr,idx__10439,n__10441)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10437.cnt,cljs.core.clone_and_set.call(null,this__10437.arr,idx__10439,n__10441)));
} else
{return null;
}
}
}
} else
{return inode__10438;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10442 = this;
var inode__10443 = this;
var idx__10444 = ((hash >>> shift) & 0x01f);
var node__10445 = (this__10442.arr[idx__10444]);
if((node__10445 == null))
{return (new cljs.core.ArrayNode(null,(this__10442.cnt + 1),cljs.core.clone_and_set.call(null,this__10442.arr,idx__10444,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10446 = node__10445.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10446 === node__10445))
{return inode__10443;
} else
{return (new cljs.core.ArrayNode(null,this__10442.cnt,cljs.core.clone_and_set.call(null,this__10442.arr,idx__10444,n__10446)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10447 = this;
var inode__10448 = this;
var idx__10449 = ((hash >>> shift) & 0x01f);
var node__10450 = (this__10447.arr[idx__10449]);
if(!((node__10450 == null)))
{return node__10450.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10455 = (2 * cnt);
var i__10456 = 0;
while(true){
if((i__10456 < lim__10455))
{if(cljs.core.key_test.call(null,key,(arr[i__10456])))
{return i__10456;
} else
{{
var G__10457 = (i__10456 + 2);
i__10456 = G__10457;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10458 = this;
var inode__10459 = this;
if((hash === this__10458.collision_hash))
{var idx__10460 = cljs.core.hash_collision_node_find_index.call(null,this__10458.arr,this__10458.cnt,key);
if((idx__10460 === -1))
{if((this__10458.arr.length > (2 * this__10458.cnt)))
{var editable__10461 = cljs.core.edit_and_set.call(null,inode__10459,edit,(2 * this__10458.cnt),key,((2 * this__10458.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10461.cnt = (editable__10461.cnt + 1);
return editable__10461;
} else
{var len__10462 = this__10458.arr.length;
var new_arr__10463 = cljs.core.make_array.call(null,(len__10462 + 2));
cljs.core.array_copy.call(null,this__10458.arr,0,new_arr__10463,0,len__10462);
(new_arr__10463[len__10462] = key);
(new_arr__10463[(len__10462 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10459.ensure_editable_array(edit,(this__10458.cnt + 1),new_arr__10463);
}
} else
{if(((this__10458.arr[(idx__10460 + 1)]) === val))
{return inode__10459;
} else
{return cljs.core.edit_and_set.call(null,inode__10459,edit,(idx__10460 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10458.collision_hash >>> shift) & 0x01f)),[null,inode__10459,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10464 = this;
var inode__10465 = this;
return cljs.core.create_inode_seq.call(null,this__10464.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10466 = this;
var inode__10467 = this;
var idx__10468 = cljs.core.hash_collision_node_find_index.call(null,this__10466.arr,this__10466.cnt,key);
if((idx__10468 === -1))
{return inode__10467;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10466.cnt === 1))
{return null;
} else
{var editable__10469 = inode__10467.ensure_editable(edit);
var earr__10470 = editable__10469.arr;
(earr__10470[idx__10468] = (earr__10470[((2 * this__10466.cnt) - 2)]));
(earr__10470[(idx__10468 + 1)] = (earr__10470[((2 * this__10466.cnt) - 1)]));
(earr__10470[((2 * this__10466.cnt) - 1)] = null);
(earr__10470[((2 * this__10466.cnt) - 2)] = null);
editable__10469.cnt = (editable__10469.cnt - 1);
return editable__10469;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10471 = this;
var inode__10472 = this;
if((e === this__10471.edit))
{return inode__10472;
} else
{var new_arr__10473 = cljs.core.make_array.call(null,(2 * (this__10471.cnt + 1)));
cljs.core.array_copy.call(null,this__10471.arr,0,new_arr__10473,0,(2 * this__10471.cnt));
return (new cljs.core.HashCollisionNode(e,this__10471.collision_hash,this__10471.cnt,new_arr__10473));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10474 = this;
var inode__10475 = this;
return cljs.core.inode_kv_reduce.call(null,this__10474.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10476 = this;
var inode__10477 = this;
var idx__10478 = cljs.core.hash_collision_node_find_index.call(null,this__10476.arr,this__10476.cnt,key);
if((idx__10478 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10476.arr[idx__10478])))
{return cljs.core.PersistentVector.fromArray([(this__10476.arr[idx__10478]),(this__10476.arr[(idx__10478 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__10479 = this;
var inode__10480 = this;
var idx__10481 = cljs.core.hash_collision_node_find_index.call(null,this__10479.arr,this__10479.cnt,key);
if((idx__10481 === -1))
{return inode__10480;
} else
{if((this__10479.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10479.collision_hash,(this__10479.cnt - 1),cljs.core.remove_pair.call(null,this__10479.arr,cljs.core.quot.call(null,idx__10481,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10482 = this;
var inode__10483 = this;
if((hash === this__10482.collision_hash))
{var idx__10484 = cljs.core.hash_collision_node_find_index.call(null,this__10482.arr,this__10482.cnt,key);
if((idx__10484 === -1))
{var len__10485 = this__10482.arr.length;
var new_arr__10486 = cljs.core.make_array.call(null,(len__10485 + 2));
cljs.core.array_copy.call(null,this__10482.arr,0,new_arr__10486,0,len__10485);
(new_arr__10486[len__10485] = key);
(new_arr__10486[(len__10485 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10482.collision_hash,(this__10482.cnt + 1),new_arr__10486));
} else
{if(cljs.core._EQ_.call(null,(this__10482.arr[idx__10484]),val))
{return inode__10483;
} else
{return (new cljs.core.HashCollisionNode(null,this__10482.collision_hash,this__10482.cnt,cljs.core.clone_and_set.call(null,this__10482.arr,(idx__10484 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10482.collision_hash >>> shift) & 0x01f)),[null,inode__10483])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10487 = this;
var inode__10488 = this;
var idx__10489 = cljs.core.hash_collision_node_find_index.call(null,this__10487.arr,this__10487.cnt,key);
if((idx__10489 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10487.arr[idx__10489])))
{return (this__10487.arr[(idx__10489 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__10490 = this;
var inode__10491 = this;
if((e === this__10490.edit))
{this__10490.arr = array;
this__10490.cnt = count;
return inode__10491;
} else
{return (new cljs.core.HashCollisionNode(this__10490.edit,this__10490.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10496 = cljs.core.hash.call(null,key1);
if((key1hash__10496 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10496,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10497 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10496,key1,val1,added_leaf_QMARK___10497).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10497);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10498 = cljs.core.hash.call(null,key1);
if((key1hash__10498 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10498,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10499 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10498,key1,val1,added_leaf_QMARK___10499).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10499);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10500 = this;
var h__2198__auto____10501 = this__10500.__hash;
if(!((h__2198__auto____10501 == null)))
{return h__2198__auto____10501;
} else
{var h__2198__auto____10502 = cljs.core.hash_coll.call(null,coll);
this__10500.__hash = h__2198__auto____10502;
return h__2198__auto____10502;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10503 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10504 = this;
var this__10505 = this;
return cljs.core.pr_str.call(null,this__10505);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10506 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10507 = this;
if((this__10507.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10507.nodes[this__10507.i]),(this__10507.nodes[(this__10507.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10507.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10508 = this;
if((this__10508.s == null))
{return cljs.core.create_inode_seq.call(null,this__10508.nodes,(this__10508.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10508.nodes,this__10508.i,cljs.core.next.call(null,this__10508.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10509 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10510 = this;
return (new cljs.core.NodeSeq(meta,this__10510.nodes,this__10510.i,this__10510.s,this__10510.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10511 = this;
return this__10511.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10512 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10512.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10519 = nodes.length;
var j__10520 = i;
while(true){
if((j__10520 < len__10519))
{if(!(((nodes[j__10520]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10520,null,null));
} else
{var temp__3971__auto____10521 = (nodes[(j__10520 + 1)]);
if(cljs.core.truth_(temp__3971__auto____10521))
{var node__10522 = temp__3971__auto____10521;
var temp__3971__auto____10523 = node__10522.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10523))
{var node_seq__10524 = temp__3971__auto____10523;
return (new cljs.core.NodeSeq(null,nodes,(j__10520 + 2),node_seq__10524,null));
} else
{{
var G__10525 = (j__10520 + 2);
j__10520 = G__10525;
continue;
}
}
} else
{{
var G__10526 = (j__10520 + 2);
j__10520 = G__10526;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10527 = this;
var h__2198__auto____10528 = this__10527.__hash;
if(!((h__2198__auto____10528 == null)))
{return h__2198__auto____10528;
} else
{var h__2198__auto____10529 = cljs.core.hash_coll.call(null,coll);
this__10527.__hash = h__2198__auto____10529;
return h__2198__auto____10529;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10530 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10531 = this;
var this__10532 = this;
return cljs.core.pr_str.call(null,this__10532);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10533 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10534 = this;
return cljs.core.first.call(null,this__10534.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10535 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10535.nodes,this__10535.i,cljs.core.next.call(null,this__10535.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10536 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10537 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10537.nodes,this__10537.i,this__10537.s,this__10537.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10538 = this;
return this__10538.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10539 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10539.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10546 = nodes.length;
var j__10547 = i;
while(true){
if((j__10547 < len__10546))
{var temp__3971__auto____10548 = (nodes[j__10547]);
if(cljs.core.truth_(temp__3971__auto____10548))
{var nj__10549 = temp__3971__auto____10548;
var temp__3971__auto____10550 = nj__10549.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10550))
{var ns__10551 = temp__3971__auto____10550;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10547 + 1),ns__10551,null));
} else
{{
var G__10552 = (j__10547 + 1);
j__10547 = G__10552;
continue;
}
}
} else
{{
var G__10553 = (j__10547 + 1);
j__10547 = G__10553;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10556 = this;
return (new cljs.core.TransientHashMap({},this__10556.root,this__10556.cnt,this__10556.has_nil_QMARK_,this__10556.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10557 = this;
var h__2198__auto____10558 = this__10557.__hash;
if(!((h__2198__auto____10558 == null)))
{return h__2198__auto____10558;
} else
{var h__2198__auto____10559 = cljs.core.hash_imap.call(null,coll);
this__10557.__hash = h__2198__auto____10559;
return h__2198__auto____10559;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10560 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10561 = this;
if((k == null))
{if(this__10561.has_nil_QMARK_)
{return this__10561.nil_val;
} else
{return not_found;
}
} else
{if((this__10561.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10561.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10562 = this;
if((k == null))
{if((function (){var and__3822__auto____10563 = this__10562.has_nil_QMARK_;
if(and__3822__auto____10563)
{return (v === this__10562.nil_val);
} else
{return and__3822__auto____10563;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10562.meta,((this__10562.has_nil_QMARK_)?this__10562.cnt:(this__10562.cnt + 1)),this__10562.root,true,v,null));
}
} else
{var added_leaf_QMARK___10564 = (new cljs.core.Box(false));
var new_root__10565 = (((this__10562.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10562.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10564);
if((new_root__10565 === this__10562.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10562.meta,((added_leaf_QMARK___10564.val)?(this__10562.cnt + 1):this__10562.cnt),new_root__10565,this__10562.has_nil_QMARK_,this__10562.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10566 = this;
if((k == null))
{return this__10566.has_nil_QMARK_;
} else
{if((this__10566.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10566.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10589 = null;
var G__10589__2 = (function (this_sym10567,k){
var this__10569 = this;
var this_sym10567__10570 = this;
var coll__10571 = this_sym10567__10570;
return coll__10571.cljs$core$ILookup$_lookup$arity$2(coll__10571,k);
});
var G__10589__3 = (function (this_sym10568,k,not_found){
var this__10569 = this;
var this_sym10568__10572 = this;
var coll__10573 = this_sym10568__10572;
return coll__10573.cljs$core$ILookup$_lookup$arity$3(coll__10573,k,not_found);
});
G__10589 = function(this_sym10568,k,not_found){
switch(arguments.length){
case 2:
return G__10589__2.call(this,this_sym10568,k);
case 3:
return G__10589__3.call(this,this_sym10568,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10589;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10554,args10555){
var this__10574 = this;
return this_sym10554.call.apply(this_sym10554,[this_sym10554].concat(args10555.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10575 = this;
var init__10576 = ((this__10575.has_nil_QMARK_)?f.call(null,init,null,this__10575.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10576))
{return cljs.core.deref.call(null,init__10576);
} else
{if(!((this__10575.root == null)))
{return this__10575.root.kv_reduce(f,init__10576);
} else
{if("\uFDD0'else")
{return init__10576;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10577 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10578 = this;
var this__10579 = this;
return cljs.core.pr_str.call(null,this__10579);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10580 = this;
if((this__10580.cnt > 0))
{var s__10581 = ((!((this__10580.root == null)))?this__10580.root.inode_seq():null);
if(this__10580.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10580.nil_val], true),s__10581);
} else
{return s__10581;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10582 = this;
return this__10582.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10583 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10584 = this;
return (new cljs.core.PersistentHashMap(meta,this__10584.cnt,this__10584.root,this__10584.has_nil_QMARK_,this__10584.nil_val,this__10584.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10585 = this;
return this__10585.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10586 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10586.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10587 = this;
if((k == null))
{if(this__10587.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10587.meta,(this__10587.cnt - 1),this__10587.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10587.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10588 = this__10587.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10588 === this__10587.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10587.meta,(this__10587.cnt - 1),new_root__10588,this__10587.has_nil_QMARK_,this__10587.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__10590 = ks.length;
var i__10591 = 0;
var out__10592 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10591 < len__10590))
{{
var G__10593 = (i__10591 + 1);
var G__10594 = cljs.core.assoc_BANG_.call(null,out__10592,(ks[i__10591]),(vs[i__10591]));
i__10591 = G__10593;
out__10592 = G__10594;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10592);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10595 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10596 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10597 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10598 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10599 = this;
if((k == null))
{if(this__10599.has_nil_QMARK_)
{return this__10599.nil_val;
} else
{return null;
}
} else
{if((this__10599.root == null))
{return null;
} else
{return this__10599.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10600 = this;
if((k == null))
{if(this__10600.has_nil_QMARK_)
{return this__10600.nil_val;
} else
{return not_found;
}
} else
{if((this__10600.root == null))
{return not_found;
} else
{return this__10600.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10601 = this;
if(this__10601.edit)
{return this__10601.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10602 = this;
var tcoll__10603 = this;
if(this__10602.edit)
{if((function (){var G__10604__10605 = o;
if(G__10604__10605)
{if((function (){var or__3824__auto____10606 = (G__10604__10605.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10606)
{return or__3824__auto____10606;
} else
{return G__10604__10605.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10604__10605.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10604__10605);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10604__10605);
}
})())
{return tcoll__10603.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10607 = cljs.core.seq.call(null,o);
var tcoll__10608 = tcoll__10603;
while(true){
var temp__3971__auto____10609 = cljs.core.first.call(null,es__10607);
if(cljs.core.truth_(temp__3971__auto____10609))
{var e__10610 = temp__3971__auto____10609;
{
var G__10621 = cljs.core.next.call(null,es__10607);
var G__10622 = tcoll__10608.assoc_BANG_(cljs.core.key.call(null,e__10610),cljs.core.val.call(null,e__10610));
es__10607 = G__10621;
tcoll__10608 = G__10622;
continue;
}
} else
{return tcoll__10608;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10611 = this;
var tcoll__10612 = this;
if(this__10611.edit)
{if((k == null))
{if((this__10611.nil_val === v))
{} else
{this__10611.nil_val = v;
}
if(this__10611.has_nil_QMARK_)
{} else
{this__10611.count = (this__10611.count + 1);
this__10611.has_nil_QMARK_ = true;
}
return tcoll__10612;
} else
{var added_leaf_QMARK___10613 = (new cljs.core.Box(false));
var node__10614 = (((this__10611.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10611.root).inode_assoc_BANG_(this__10611.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10613);
if((node__10614 === this__10611.root))
{} else
{this__10611.root = node__10614;
}
if(added_leaf_QMARK___10613.val)
{this__10611.count = (this__10611.count + 1);
} else
{}
return tcoll__10612;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10615 = this;
var tcoll__10616 = this;
if(this__10615.edit)
{if((k == null))
{if(this__10615.has_nil_QMARK_)
{this__10615.has_nil_QMARK_ = false;
this__10615.nil_val = null;
this__10615.count = (this__10615.count - 1);
return tcoll__10616;
} else
{return tcoll__10616;
}
} else
{if((this__10615.root == null))
{return tcoll__10616;
} else
{var removed_leaf_QMARK___10617 = (new cljs.core.Box(false));
var node__10618 = this__10615.root.inode_without_BANG_(this__10615.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10617);
if((node__10618 === this__10615.root))
{} else
{this__10615.root = node__10618;
}
if(cljs.core.truth_((removed_leaf_QMARK___10617[0])))
{this__10615.count = (this__10615.count - 1);
} else
{}
return tcoll__10616;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10619 = this;
var tcoll__10620 = this;
if(this__10619.edit)
{this__10619.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10619.count,this__10619.root,this__10619.has_nil_QMARK_,this__10619.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10625 = node;
var stack__10626 = stack;
while(true){
if(!((t__10625 == null)))
{{
var G__10627 = ((ascending_QMARK_)?t__10625.left:t__10625.right);
var G__10628 = cljs.core.conj.call(null,stack__10626,t__10625);
t__10625 = G__10627;
stack__10626 = G__10628;
continue;
}
} else
{return stack__10626;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10629 = this;
var h__2198__auto____10630 = this__10629.__hash;
if(!((h__2198__auto____10630 == null)))
{return h__2198__auto____10630;
} else
{var h__2198__auto____10631 = cljs.core.hash_coll.call(null,coll);
this__10629.__hash = h__2198__auto____10631;
return h__2198__auto____10631;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10632 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10633 = this;
var this__10634 = this;
return cljs.core.pr_str.call(null,this__10634);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10635 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10636 = this;
if((this__10636.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10636.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10637 = this;
return cljs.core.peek.call(null,this__10637.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10638 = this;
var t__10639 = cljs.core.first.call(null,this__10638.stack);
var next_stack__10640 = cljs.core.tree_map_seq_push.call(null,((this__10638.ascending_QMARK_)?t__10639.right:t__10639.left),cljs.core.next.call(null,this__10638.stack),this__10638.ascending_QMARK_);
if(!((next_stack__10640 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10640,this__10638.ascending_QMARK_,(this__10638.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10641 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10642 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10642.stack,this__10642.ascending_QMARK_,this__10642.cnt,this__10642.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10643 = this;
return this__10643.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____10645 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____10645)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____10645;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____10647 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____10647)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____10647;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__10651 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10651))
{return cljs.core.deref.call(null,init__10651);
} else
{var init__10652 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10651):init__10651);
if(cljs.core.reduced_QMARK_.call(null,init__10652))
{return cljs.core.deref.call(null,init__10652);
} else
{var init__10653 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10652):init__10652);
if(cljs.core.reduced_QMARK_.call(null,init__10653))
{return cljs.core.deref.call(null,init__10653);
} else
{return init__10653;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10656 = this;
var h__2198__auto____10657 = this__10656.__hash;
if(!((h__2198__auto____10657 == null)))
{return h__2198__auto____10657;
} else
{var h__2198__auto____10658 = cljs.core.hash_coll.call(null,coll);
this__10656.__hash = h__2198__auto____10658;
return h__2198__auto____10658;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10659 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10660 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10661 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10661.key,this__10661.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10709 = null;
var G__10709__2 = (function (this_sym10662,k){
var this__10664 = this;
var this_sym10662__10665 = this;
var node__10666 = this_sym10662__10665;
return node__10666.cljs$core$ILookup$_lookup$arity$2(node__10666,k);
});
var G__10709__3 = (function (this_sym10663,k,not_found){
var this__10664 = this;
var this_sym10663__10667 = this;
var node__10668 = this_sym10663__10667;
return node__10668.cljs$core$ILookup$_lookup$arity$3(node__10668,k,not_found);
});
G__10709 = function(this_sym10663,k,not_found){
switch(arguments.length){
case 2:
return G__10709__2.call(this,this_sym10663,k);
case 3:
return G__10709__3.call(this,this_sym10663,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10709;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10654,args10655){
var this__10669 = this;
return this_sym10654.call.apply(this_sym10654,[this_sym10654].concat(args10655.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10670 = this;
return cljs.core.PersistentVector.fromArray([this__10670.key,this__10670.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10671 = this;
return this__10671.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10672 = this;
return this__10672.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10673 = this;
var node__10674 = this;
return ins.balance_right(node__10674);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10675 = this;
var node__10676 = this;
return (new cljs.core.RedNode(this__10675.key,this__10675.val,this__10675.left,this__10675.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10677 = this;
var node__10678 = this;
return cljs.core.balance_right_del.call(null,this__10677.key,this__10677.val,this__10677.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10679 = this;
var node__10680 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10681 = this;
var node__10682 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10682,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10683 = this;
var node__10684 = this;
return cljs.core.balance_left_del.call(null,this__10683.key,this__10683.val,del,this__10683.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10685 = this;
var node__10686 = this;
return ins.balance_left(node__10686);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10687 = this;
var node__10688 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10688,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10710 = null;
var G__10710__0 = (function (){
var this__10689 = this;
var this__10691 = this;
return cljs.core.pr_str.call(null,this__10691);
});
G__10710 = function(){
switch(arguments.length){
case 0:
return G__10710__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10710;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10692 = this;
var node__10693 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10693,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10694 = this;
var node__10695 = this;
return node__10695;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10696 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10697 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10698 = this;
return cljs.core.list.call(null,this__10698.key,this__10698.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10699 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10700 = this;
return this__10700.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10701 = this;
return cljs.core.PersistentVector.fromArray([this__10701.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10702 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10702.key,this__10702.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10703 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10704 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10704.key,this__10704.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10705 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10706 = this;
if((n === 0))
{return this__10706.key;
} else
{if((n === 1))
{return this__10706.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10707 = this;
if((n === 0))
{return this__10707.key;
} else
{if((n === 1))
{return this__10707.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10708 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10713 = this;
var h__2198__auto____10714 = this__10713.__hash;
if(!((h__2198__auto____10714 == null)))
{return h__2198__auto____10714;
} else
{var h__2198__auto____10715 = cljs.core.hash_coll.call(null,coll);
this__10713.__hash = h__2198__auto____10715;
return h__2198__auto____10715;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10716 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10717 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10718 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10718.key,this__10718.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10766 = null;
var G__10766__2 = (function (this_sym10719,k){
var this__10721 = this;
var this_sym10719__10722 = this;
var node__10723 = this_sym10719__10722;
return node__10723.cljs$core$ILookup$_lookup$arity$2(node__10723,k);
});
var G__10766__3 = (function (this_sym10720,k,not_found){
var this__10721 = this;
var this_sym10720__10724 = this;
var node__10725 = this_sym10720__10724;
return node__10725.cljs$core$ILookup$_lookup$arity$3(node__10725,k,not_found);
});
G__10766 = function(this_sym10720,k,not_found){
switch(arguments.length){
case 2:
return G__10766__2.call(this,this_sym10720,k);
case 3:
return G__10766__3.call(this,this_sym10720,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10766;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10711,args10712){
var this__10726 = this;
return this_sym10711.call.apply(this_sym10711,[this_sym10711].concat(args10712.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10727 = this;
return cljs.core.PersistentVector.fromArray([this__10727.key,this__10727.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10728 = this;
return this__10728.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10729 = this;
return this__10729.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10730 = this;
var node__10731 = this;
return (new cljs.core.RedNode(this__10730.key,this__10730.val,this__10730.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10732 = this;
var node__10733 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10734 = this;
var node__10735 = this;
return (new cljs.core.RedNode(this__10734.key,this__10734.val,this__10734.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10736 = this;
var node__10737 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10738 = this;
var node__10739 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10739,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10740 = this;
var node__10741 = this;
return (new cljs.core.RedNode(this__10740.key,this__10740.val,del,this__10740.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10742 = this;
var node__10743 = this;
return (new cljs.core.RedNode(this__10742.key,this__10742.val,ins,this__10742.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10744 = this;
var node__10745 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10744.left))
{return (new cljs.core.RedNode(this__10744.key,this__10744.val,this__10744.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10744.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10744.right))
{return (new cljs.core.RedNode(this__10744.right.key,this__10744.right.val,(new cljs.core.BlackNode(this__10744.key,this__10744.val,this__10744.left,this__10744.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10744.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10745,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10767 = null;
var G__10767__0 = (function (){
var this__10746 = this;
var this__10748 = this;
return cljs.core.pr_str.call(null,this__10748);
});
G__10767 = function(){
switch(arguments.length){
case 0:
return G__10767__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10767;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10749 = this;
var node__10750 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10749.right))
{return (new cljs.core.RedNode(this__10749.key,this__10749.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10749.left,null)),this__10749.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10749.left))
{return (new cljs.core.RedNode(this__10749.left.key,this__10749.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10749.left.left,null)),(new cljs.core.BlackNode(this__10749.key,this__10749.val,this__10749.left.right,this__10749.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10750,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10751 = this;
var node__10752 = this;
return (new cljs.core.BlackNode(this__10751.key,this__10751.val,this__10751.left,this__10751.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10753 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10754 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10755 = this;
return cljs.core.list.call(null,this__10755.key,this__10755.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10756 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10757 = this;
return this__10757.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10758 = this;
return cljs.core.PersistentVector.fromArray([this__10758.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10759 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10759.key,this__10759.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10760 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10761 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10761.key,this__10761.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10762 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10763 = this;
if((n === 0))
{return this__10763.key;
} else
{if((n === 1))
{return this__10763.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10764 = this;
if((n === 0))
{return this__10764.key;
} else
{if((n === 1))
{return this__10764.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10765 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10771 = comp.call(null,k,tree.key);
if((c__10771 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10771 < 0))
{var ins__10772 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10772 == null)))
{return tree.add_left(ins__10772);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10773 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10773 == null)))
{return tree.add_right(ins__10773);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__10776 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10776))
{return (new cljs.core.RedNode(app__10776.key,app__10776.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10776.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10776.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10776,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10777 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10777))
{return (new cljs.core.RedNode(app__10777.key,app__10777.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10777.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10777.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10777,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__10783 = comp.call(null,k,tree.key);
if((c__10783 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10783 < 0))
{var del__10784 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10785 = !((del__10784 == null));
if(or__3824__auto____10785)
{return or__3824__auto____10785;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10784,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10784,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10786 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10787 = !((del__10786 == null));
if(or__3824__auto____10787)
{return or__3824__auto____10787;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10786);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10786,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__10790 = tree.key;
var c__10791 = comp.call(null,k,tk__10790);
if((c__10791 === 0))
{return tree.replace(tk__10790,v,tree.left,tree.right);
} else
{if((c__10791 < 0))
{return tree.replace(tk__10790,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10790,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10794 = this;
var h__2198__auto____10795 = this__10794.__hash;
if(!((h__2198__auto____10795 == null)))
{return h__2198__auto____10795;
} else
{var h__2198__auto____10796 = cljs.core.hash_imap.call(null,coll);
this__10794.__hash = h__2198__auto____10796;
return h__2198__auto____10796;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10797 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10798 = this;
var n__10799 = coll.entry_at(k);
if(!((n__10799 == null)))
{return n__10799.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10800 = this;
var found__10801 = [null];
var t__10802 = cljs.core.tree_map_add.call(null,this__10800.comp,this__10800.tree,k,v,found__10801);
if((t__10802 == null))
{var found_node__10803 = cljs.core.nth.call(null,found__10801,0);
if(cljs.core._EQ_.call(null,v,found_node__10803.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10800.comp,cljs.core.tree_map_replace.call(null,this__10800.comp,this__10800.tree,k,v),this__10800.cnt,this__10800.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10800.comp,t__10802.blacken(),(this__10800.cnt + 1),this__10800.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10804 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10838 = null;
var G__10838__2 = (function (this_sym10805,k){
var this__10807 = this;
var this_sym10805__10808 = this;
var coll__10809 = this_sym10805__10808;
return coll__10809.cljs$core$ILookup$_lookup$arity$2(coll__10809,k);
});
var G__10838__3 = (function (this_sym10806,k,not_found){
var this__10807 = this;
var this_sym10806__10810 = this;
var coll__10811 = this_sym10806__10810;
return coll__10811.cljs$core$ILookup$_lookup$arity$3(coll__10811,k,not_found);
});
G__10838 = function(this_sym10806,k,not_found){
switch(arguments.length){
case 2:
return G__10838__2.call(this,this_sym10806,k);
case 3:
return G__10838__3.call(this,this_sym10806,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10838;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10792,args10793){
var this__10812 = this;
return this_sym10792.call.apply(this_sym10792,[this_sym10792].concat(args10793.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10813 = this;
if(!((this__10813.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10813.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10814 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10815 = this;
if((this__10815.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10815.tree,false,this__10815.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10816 = this;
var this__10817 = this;
return cljs.core.pr_str.call(null,this__10817);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10818 = this;
var coll__10819 = this;
var t__10820 = this__10818.tree;
while(true){
if(!((t__10820 == null)))
{var c__10821 = this__10818.comp.call(null,k,t__10820.key);
if((c__10821 === 0))
{return t__10820;
} else
{if((c__10821 < 0))
{{
var G__10839 = t__10820.left;
t__10820 = G__10839;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10840 = t__10820.right;
t__10820 = G__10840;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10822 = this;
if((this__10822.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10822.tree,ascending_QMARK_,this__10822.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10823 = this;
if((this__10823.cnt > 0))
{var stack__10824 = null;
var t__10825 = this__10823.tree;
while(true){
if(!((t__10825 == null)))
{var c__10826 = this__10823.comp.call(null,k,t__10825.key);
if((c__10826 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10824,t__10825),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10826 < 0))
{{
var G__10841 = cljs.core.conj.call(null,stack__10824,t__10825);
var G__10842 = t__10825.left;
stack__10824 = G__10841;
t__10825 = G__10842;
continue;
}
} else
{{
var G__10843 = stack__10824;
var G__10844 = t__10825.right;
stack__10824 = G__10843;
t__10825 = G__10844;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10826 > 0))
{{
var G__10845 = cljs.core.conj.call(null,stack__10824,t__10825);
var G__10846 = t__10825.right;
stack__10824 = G__10845;
t__10825 = G__10846;
continue;
}
} else
{{
var G__10847 = stack__10824;
var G__10848 = t__10825.left;
stack__10824 = G__10847;
t__10825 = G__10848;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10824 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10824,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10827 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10828 = this;
return this__10828.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10829 = this;
if((this__10829.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10829.tree,true,this__10829.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10830 = this;
return this__10830.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10831 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10832 = this;
return (new cljs.core.PersistentTreeMap(this__10832.comp,this__10832.tree,this__10832.cnt,meta,this__10832.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10833 = this;
return this__10833.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10834 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10834.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10835 = this;
var found__10836 = [null];
var t__10837 = cljs.core.tree_map_remove.call(null,this__10835.comp,this__10835.tree,k,found__10836);
if((t__10837 == null))
{if((cljs.core.nth.call(null,found__10836,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10835.comp,null,0,this__10835.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10835.comp,t__10837.blacken(),(this__10835.cnt - 1),this__10835.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__10851 = cljs.core.seq.call(null,keyvals);
var out__10852 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10851)
{{
var G__10853 = cljs.core.nnext.call(null,in__10851);
var G__10854 = cljs.core.assoc_BANG_.call(null,out__10852,cljs.core.first.call(null,in__10851),cljs.core.second.call(null,in__10851));
in__10851 = G__10853;
out__10852 = G__10854;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10852);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__10855){
var keyvals = cljs.core.seq(arglist__10855);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__10856){
var keyvals = cljs.core.seq(arglist__10856);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__10860 = [];
var obj__10861 = {};
var kvs__10862 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10862)
{ks__10860.push(cljs.core.first.call(null,kvs__10862));
(obj__10861[cljs.core.first.call(null,kvs__10862)] = cljs.core.second.call(null,kvs__10862));
{
var G__10863 = cljs.core.nnext.call(null,kvs__10862);
kvs__10862 = G__10863;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10860,obj__10861);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__10864){
var keyvals = cljs.core.seq(arglist__10864);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10867 = cljs.core.seq.call(null,keyvals);
var out__10868 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10867)
{{
var G__10869 = cljs.core.nnext.call(null,in__10867);
var G__10870 = cljs.core.assoc.call(null,out__10868,cljs.core.first.call(null,in__10867),cljs.core.second.call(null,in__10867));
in__10867 = G__10869;
out__10868 = G__10870;
continue;
}
} else
{return out__10868;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10871){
var keyvals = cljs.core.seq(arglist__10871);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__10874 = cljs.core.seq.call(null,keyvals);
var out__10875 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10874)
{{
var G__10876 = cljs.core.nnext.call(null,in__10874);
var G__10877 = cljs.core.assoc.call(null,out__10875,cljs.core.first.call(null,in__10874),cljs.core.second.call(null,in__10874));
in__10874 = G__10876;
out__10875 = G__10877;
continue;
}
} else
{return out__10875;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10878){
var comparator = cljs.core.first(arglist__10878);
var keyvals = cljs.core.rest(arglist__10878);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__10879_SHARP_,p2__10880_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____10882 = p1__10879_SHARP_;
if(cljs.core.truth_(or__3824__auto____10882))
{return or__3824__auto____10882;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10880_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10883){
var maps = cljs.core.seq(arglist__10883);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__10891 = (function (m,e){
var k__10889 = cljs.core.first.call(null,e);
var v__10890 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10889))
{return cljs.core.assoc.call(null,m,k__10889,f.call(null,cljs.core._lookup.call(null,m,k__10889,null),v__10890));
} else
{return cljs.core.assoc.call(null,m,k__10889,v__10890);
}
});
var merge2__10893 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10891,(function (){var or__3824__auto____10892 = m1;
if(cljs.core.truth_(or__3824__auto____10892))
{return or__3824__auto____10892;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10893,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10894){
var f = cljs.core.first(arglist__10894);
var maps = cljs.core.rest(arglist__10894);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10899 = cljs.core.ObjMap.EMPTY;
var keys__10900 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10900)
{var key__10901 = cljs.core.first.call(null,keys__10900);
var entry__10902 = cljs.core._lookup.call(null,map,key__10901,"\uFDD0'cljs.core/not-found");
{
var G__10903 = ((cljs.core.not_EQ_.call(null,entry__10902,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__10899,key__10901,entry__10902):ret__10899);
var G__10904 = cljs.core.next.call(null,keys__10900);
ret__10899 = G__10903;
keys__10900 = G__10904;
continue;
}
} else
{return ret__10899;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10908 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10908.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10909 = this;
var h__2198__auto____10910 = this__10909.__hash;
if(!((h__2198__auto____10910 == null)))
{return h__2198__auto____10910;
} else
{var h__2198__auto____10911 = cljs.core.hash_iset.call(null,coll);
this__10909.__hash = h__2198__auto____10911;
return h__2198__auto____10911;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10912 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10913 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10913.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10934 = null;
var G__10934__2 = (function (this_sym10914,k){
var this__10916 = this;
var this_sym10914__10917 = this;
var coll__10918 = this_sym10914__10917;
return coll__10918.cljs$core$ILookup$_lookup$arity$2(coll__10918,k);
});
var G__10934__3 = (function (this_sym10915,k,not_found){
var this__10916 = this;
var this_sym10915__10919 = this;
var coll__10920 = this_sym10915__10919;
return coll__10920.cljs$core$ILookup$_lookup$arity$3(coll__10920,k,not_found);
});
G__10934 = function(this_sym10915,k,not_found){
switch(arguments.length){
case 2:
return G__10934__2.call(this,this_sym10915,k);
case 3:
return G__10934__3.call(this,this_sym10915,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10934;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10906,args10907){
var this__10921 = this;
return this_sym10906.call.apply(this_sym10906,[this_sym10906].concat(args10907.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10922 = this;
return (new cljs.core.PersistentHashSet(this__10922.meta,cljs.core.assoc.call(null,this__10922.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10923 = this;
var this__10924 = this;
return cljs.core.pr_str.call(null,this__10924);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10925 = this;
return cljs.core.keys.call(null,this__10925.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10926 = this;
return (new cljs.core.PersistentHashSet(this__10926.meta,cljs.core.dissoc.call(null,this__10926.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10927 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10928 = this;
var and__3822__auto____10929 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10929)
{var and__3822__auto____10930 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10930)
{return cljs.core.every_QMARK_.call(null,(function (p1__10905_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10905_SHARP_);
}),other);
} else
{return and__3822__auto____10930;
}
} else
{return and__3822__auto____10929;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10931 = this;
return (new cljs.core.PersistentHashSet(meta,this__10931.hash_map,this__10931.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10932 = this;
return this__10932.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10933 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10933.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10935 = cljs.core.count.call(null,items);
var i__10936 = 0;
var out__10937 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10936 < len__10935))
{{
var G__10938 = (i__10936 + 1);
var G__10939 = cljs.core.conj_BANG_.call(null,out__10937,(items[i__10936]));
i__10936 = G__10938;
out__10937 = G__10939;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10937);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10957 = null;
var G__10957__2 = (function (this_sym10943,k){
var this__10945 = this;
var this_sym10943__10946 = this;
var tcoll__10947 = this_sym10943__10946;
if((cljs.core._lookup.call(null,this__10945.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10957__3 = (function (this_sym10944,k,not_found){
var this__10945 = this;
var this_sym10944__10948 = this;
var tcoll__10949 = this_sym10944__10948;
if((cljs.core._lookup.call(null,this__10945.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10957 = function(this_sym10944,k,not_found){
switch(arguments.length){
case 2:
return G__10957__2.call(this,this_sym10944,k);
case 3:
return G__10957__3.call(this,this_sym10944,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10957;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10941,args10942){
var this__10950 = this;
return this_sym10941.call.apply(this_sym10941,[this_sym10941].concat(args10942.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10951 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10952 = this;
if((cljs.core._lookup.call(null,this__10952.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10953 = this;
return cljs.core.count.call(null,this__10953.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10954 = this;
this__10954.transient_map = cljs.core.dissoc_BANG_.call(null,this__10954.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10955 = this;
this__10955.transient_map = cljs.core.assoc_BANG_.call(null,this__10955.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10956 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10956.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10960 = this;
var h__2198__auto____10961 = this__10960.__hash;
if(!((h__2198__auto____10961 == null)))
{return h__2198__auto____10961;
} else
{var h__2198__auto____10962 = cljs.core.hash_iset.call(null,coll);
this__10960.__hash = h__2198__auto____10962;
return h__2198__auto____10962;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10963 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10964 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10964.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10990 = null;
var G__10990__2 = (function (this_sym10965,k){
var this__10967 = this;
var this_sym10965__10968 = this;
var coll__10969 = this_sym10965__10968;
return coll__10969.cljs$core$ILookup$_lookup$arity$2(coll__10969,k);
});
var G__10990__3 = (function (this_sym10966,k,not_found){
var this__10967 = this;
var this_sym10966__10970 = this;
var coll__10971 = this_sym10966__10970;
return coll__10971.cljs$core$ILookup$_lookup$arity$3(coll__10971,k,not_found);
});
G__10990 = function(this_sym10966,k,not_found){
switch(arguments.length){
case 2:
return G__10990__2.call(this,this_sym10966,k);
case 3:
return G__10990__3.call(this,this_sym10966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10990;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10958,args10959){
var this__10972 = this;
return this_sym10958.call.apply(this_sym10958,[this_sym10958].concat(args10959.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10973 = this;
return (new cljs.core.PersistentTreeSet(this__10973.meta,cljs.core.assoc.call(null,this__10973.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10974 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10974.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10975 = this;
var this__10976 = this;
return cljs.core.pr_str.call(null,this__10976);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10977 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10977.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10978 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10978.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10979 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10980 = this;
return cljs.core._comparator.call(null,this__10980.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10981 = this;
return cljs.core.keys.call(null,this__10981.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10982 = this;
return (new cljs.core.PersistentTreeSet(this__10982.meta,cljs.core.dissoc.call(null,this__10982.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10983 = this;
return cljs.core.count.call(null,this__10983.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10984 = this;
var and__3822__auto____10985 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10985)
{var and__3822__auto____10986 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10986)
{return cljs.core.every_QMARK_.call(null,(function (p1__10940_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10940_SHARP_);
}),other);
} else
{return and__3822__auto____10986;
}
} else
{return and__3822__auto____10985;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10987 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10987.tree_map,this__10987.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10988 = this;
return this__10988.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10989 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10989.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10995__delegate = function (keys){
var in__10993 = cljs.core.seq.call(null,keys);
var out__10994 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10993))
{{
var G__10996 = cljs.core.next.call(null,in__10993);
var G__10997 = cljs.core.conj_BANG_.call(null,out__10994,cljs.core.first.call(null,in__10993));
in__10993 = G__10996;
out__10994 = G__10997;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10994);
}
break;
}
};
var G__10995 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10995__delegate.call(this, keys);
};
G__10995.cljs$lang$maxFixedArity = 0;
G__10995.cljs$lang$applyTo = (function (arglist__10998){
var keys = cljs.core.seq(arglist__10998);;
return G__10995__delegate(keys);
});
G__10995.cljs$lang$arity$variadic = G__10995__delegate;
return G__10995;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10999){
var keys = cljs.core.seq(arglist__10999);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__11001){
var comparator = cljs.core.first(arglist__11001);
var keys = cljs.core.rest(arglist__11001);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__11007 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11008 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11008))
{var e__11009 = temp__3971__auto____11008;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11009));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11007,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11000_SHARP_){
var temp__3971__auto____11010 = cljs.core.find.call(null,smap,p1__11000_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11010))
{var e__11011 = temp__3971__auto____11010;
return cljs.core.second.call(null,e__11011);
} else
{return p1__11000_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11041 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11034,seen){
while(true){
var vec__11035__11036 = p__11034;
var f__11037 = cljs.core.nth.call(null,vec__11035__11036,0,null);
var xs__11038 = vec__11035__11036;
var temp__3974__auto____11039 = cljs.core.seq.call(null,xs__11038);
if(temp__3974__auto____11039)
{var s__11040 = temp__3974__auto____11039;
if(cljs.core.contains_QMARK_.call(null,seen,f__11037))
{{
var G__11042 = cljs.core.rest.call(null,s__11040);
var G__11043 = seen;
p__11034 = G__11042;
seen = G__11043;
continue;
}
} else
{return cljs.core.cons.call(null,f__11037,step.call(null,cljs.core.rest.call(null,s__11040),cljs.core.conj.call(null,seen,f__11037)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11041.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11046 = cljs.core.PersistentVector.EMPTY;
var s__11047 = s;
while(true){
if(cljs.core.next.call(null,s__11047))
{{
var G__11048 = cljs.core.conj.call(null,ret__11046,cljs.core.first.call(null,s__11047));
var G__11049 = cljs.core.next.call(null,s__11047);
ret__11046 = G__11048;
s__11047 = G__11049;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11046);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____11052 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11052)
{return or__3824__auto____11052;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11053 = x.lastIndexOf("/");
if((i__11053 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11053 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____11056 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11056)
{return or__3824__auto____11056;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11057 = x.lastIndexOf("/");
if((i__11057 > -1))
{return cljs.core.subs.call(null,x,2,i__11057);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__11064 = cljs.core.ObjMap.EMPTY;
var ks__11065 = cljs.core.seq.call(null,keys);
var vs__11066 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____11067 = ks__11065;
if(and__3822__auto____11067)
{return vs__11066;
} else
{return and__3822__auto____11067;
}
})())
{{
var G__11068 = cljs.core.assoc.call(null,map__11064,cljs.core.first.call(null,ks__11065),cljs.core.first.call(null,vs__11066));
var G__11069 = cljs.core.next.call(null,ks__11065);
var G__11070 = cljs.core.next.call(null,vs__11066);
map__11064 = G__11068;
ks__11065 = G__11069;
vs__11066 = G__11070;
continue;
}
} else
{return map__11064;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__11073__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11058_SHARP_,p2__11059_SHARP_){
return max_key.call(null,k,p1__11058_SHARP_,p2__11059_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11073 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11073__delegate.call(this, k, x, y, more);
};
G__11073.cljs$lang$maxFixedArity = 3;
G__11073.cljs$lang$applyTo = (function (arglist__11074){
var k = cljs.core.first(arglist__11074);
var x = cljs.core.first(cljs.core.next(arglist__11074));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11074)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11074)));
return G__11073__delegate(k, x, y, more);
});
G__11073.cljs$lang$arity$variadic = G__11073__delegate;
return G__11073;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__11075__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11071_SHARP_,p2__11072_SHARP_){
return min_key.call(null,k,p1__11071_SHARP_,p2__11072_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11075 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11075__delegate.call(this, k, x, y, more);
};
G__11075.cljs$lang$maxFixedArity = 3;
G__11075.cljs$lang$applyTo = (function (arglist__11076){
var k = cljs.core.first(arglist__11076);
var x = cljs.core.first(cljs.core.next(arglist__11076));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11076)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11076)));
return G__11075__delegate(k, x, y, more);
});
G__11075.cljs$lang$arity$variadic = G__11075__delegate;
return G__11075;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11079 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11079)
{var s__11080 = temp__3974__auto____11079;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11080),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11080)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11083 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11083)
{var s__11084 = temp__3974__auto____11083;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11084))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11084),take_while.call(null,pred,cljs.core.rest.call(null,s__11084)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__11086 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11086.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__11098 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____11099 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____11099))
{var vec__11100__11101 = temp__3974__auto____11099;
var e__11102 = cljs.core.nth.call(null,vec__11100__11101,0,null);
var s__11103 = vec__11100__11101;
if(cljs.core.truth_(include__11098.call(null,e__11102)))
{return s__11103;
} else
{return cljs.core.next.call(null,s__11103);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11098,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11104 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____11104))
{var vec__11105__11106 = temp__3974__auto____11104;
var e__11107 = cljs.core.nth.call(null,vec__11105__11106,0,null);
var s__11108 = vec__11105__11106;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11107))?s__11108:cljs.core.next.call(null,s__11108)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__11120 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____11121 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____11121))
{var vec__11122__11123 = temp__3974__auto____11121;
var e__11124 = cljs.core.nth.call(null,vec__11122__11123,0,null);
var s__11125 = vec__11122__11123;
if(cljs.core.truth_(include__11120.call(null,e__11124)))
{return s__11125;
} else
{return cljs.core.next.call(null,s__11125);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11120,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11126 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____11126))
{var vec__11127__11128 = temp__3974__auto____11126;
var e__11129 = cljs.core.nth.call(null,vec__11127__11128,0,null);
var s__11130 = vec__11127__11128;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11129))?s__11130:cljs.core.next.call(null,s__11130)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__11131 = this;
var h__2198__auto____11132 = this__11131.__hash;
if(!((h__2198__auto____11132 == null)))
{return h__2198__auto____11132;
} else
{var h__2198__auto____11133 = cljs.core.hash_coll.call(null,rng);
this__11131.__hash = h__2198__auto____11133;
return h__2198__auto____11133;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__11134 = this;
if((this__11134.step > 0))
{if(((this__11134.start + this__11134.step) < this__11134.end))
{return (new cljs.core.Range(this__11134.meta,(this__11134.start + this__11134.step),this__11134.end,this__11134.step,null));
} else
{return null;
}
} else
{if(((this__11134.start + this__11134.step) > this__11134.end))
{return (new cljs.core.Range(this__11134.meta,(this__11134.start + this__11134.step),this__11134.end,this__11134.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11135 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11136 = this;
var this__11137 = this;
return cljs.core.pr_str.call(null,this__11137);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11138 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11139 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11140 = this;
if((this__11140.step > 0))
{if((this__11140.start < this__11140.end))
{return rng;
} else
{return null;
}
} else
{if((this__11140.start > this__11140.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11141 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__11141.end - this__11141.start) / this__11141.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11142 = this;
return this__11142.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11143 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__11143.meta,(this__11143.start + this__11143.step),this__11143.end,this__11143.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11144 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11145 = this;
return (new cljs.core.Range(meta,this__11145.start,this__11145.end,this__11145.step,this__11145.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11146 = this;
return this__11146.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11147 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11147.start + (n * this__11147.step));
} else
{if((function (){var and__3822__auto____11148 = (this__11147.start > this__11147.end);
if(and__3822__auto____11148)
{return (this__11147.step === 0);
} else
{return and__3822__auto____11148;
}
})())
{return this__11147.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11149 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11149.start + (n * this__11149.step));
} else
{if((function (){var and__3822__auto____11150 = (this__11149.start > this__11149.end);
if(and__3822__auto____11150)
{return (this__11149.step === 0);
} else
{return and__3822__auto____11150;
}
})())
{return this__11149.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11151 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11151.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11154 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11154)
{var s__11155 = temp__3974__auto____11154;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11155),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11155)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11162 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11162)
{var s__11163 = temp__3974__auto____11162;
var fst__11164 = cljs.core.first.call(null,s__11163);
var fv__11165 = f.call(null,fst__11164);
var run__11166 = cljs.core.cons.call(null,fst__11164,cljs.core.take_while.call(null,(function (p1__11156_SHARP_){
return cljs.core._EQ_.call(null,fv__11165,f.call(null,p1__11156_SHARP_));
}),cljs.core.next.call(null,s__11163)));
return cljs.core.cons.call(null,run__11166,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11166),s__11163))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____11181 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11181)
{var s__11182 = temp__3971__auto____11181;
return reductions.call(null,f,cljs.core.first.call(null,s__11182),cljs.core.rest.call(null,s__11182));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11183 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11183)
{var s__11184 = temp__3974__auto____11183;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11184)),cljs.core.rest.call(null,s__11184));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__11187 = null;
var G__11187__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11187__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11187__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11187__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11187__4 = (function() { 
var G__11188__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11188 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11188__delegate.call(this, x, y, z, args);
};
G__11188.cljs$lang$maxFixedArity = 3;
G__11188.cljs$lang$applyTo = (function (arglist__11189){
var x = cljs.core.first(arglist__11189);
var y = cljs.core.first(cljs.core.next(arglist__11189));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11189)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11189)));
return G__11188__delegate(x, y, z, args);
});
G__11188.cljs$lang$arity$variadic = G__11188__delegate;
return G__11188;
})()
;
G__11187 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11187__0.call(this);
case 1:
return G__11187__1.call(this,x);
case 2:
return G__11187__2.call(this,x,y);
case 3:
return G__11187__3.call(this,x,y,z);
default:
return G__11187__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11187.cljs$lang$maxFixedArity = 3;
G__11187.cljs$lang$applyTo = G__11187__4.cljs$lang$applyTo;
return G__11187;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11190 = null;
var G__11190__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11190__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11190__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11190__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11190__4 = (function() { 
var G__11191__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11191 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11191__delegate.call(this, x, y, z, args);
};
G__11191.cljs$lang$maxFixedArity = 3;
G__11191.cljs$lang$applyTo = (function (arglist__11192){
var x = cljs.core.first(arglist__11192);
var y = cljs.core.first(cljs.core.next(arglist__11192));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11192)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11192)));
return G__11191__delegate(x, y, z, args);
});
G__11191.cljs$lang$arity$variadic = G__11191__delegate;
return G__11191;
})()
;
G__11190 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11190__0.call(this);
case 1:
return G__11190__1.call(this,x);
case 2:
return G__11190__2.call(this,x,y);
case 3:
return G__11190__3.call(this,x,y,z);
default:
return G__11190__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11190.cljs$lang$maxFixedArity = 3;
G__11190.cljs$lang$applyTo = G__11190__4.cljs$lang$applyTo;
return G__11190;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11193 = null;
var G__11193__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11193__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11193__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11193__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11193__4 = (function() { 
var G__11194__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11194 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11194__delegate.call(this, x, y, z, args);
};
G__11194.cljs$lang$maxFixedArity = 3;
G__11194.cljs$lang$applyTo = (function (arglist__11195){
var x = cljs.core.first(arglist__11195);
var y = cljs.core.first(cljs.core.next(arglist__11195));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11195)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11195)));
return G__11194__delegate(x, y, z, args);
});
G__11194.cljs$lang$arity$variadic = G__11194__delegate;
return G__11194;
})()
;
G__11193 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11193__0.call(this);
case 1:
return G__11193__1.call(this,x);
case 2:
return G__11193__2.call(this,x,y);
case 3:
return G__11193__3.call(this,x,y,z);
default:
return G__11193__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11193.cljs$lang$maxFixedArity = 3;
G__11193.cljs$lang$applyTo = G__11193__4.cljs$lang$applyTo;
return G__11193;
})()
});
var juxt__4 = (function() { 
var G__11196__delegate = function (f,g,h,fs){
var fs__11186 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11197 = null;
var G__11197__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11167_SHARP_,p2__11168_SHARP_){
return cljs.core.conj.call(null,p1__11167_SHARP_,p2__11168_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__11186);
});
var G__11197__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11169_SHARP_,p2__11170_SHARP_){
return cljs.core.conj.call(null,p1__11169_SHARP_,p2__11170_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__11186);
});
var G__11197__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11171_SHARP_,p2__11172_SHARP_){
return cljs.core.conj.call(null,p1__11171_SHARP_,p2__11172_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__11186);
});
var G__11197__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11173_SHARP_,p2__11174_SHARP_){
return cljs.core.conj.call(null,p1__11173_SHARP_,p2__11174_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__11186);
});
var G__11197__4 = (function() { 
var G__11198__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11175_SHARP_,p2__11176_SHARP_){
return cljs.core.conj.call(null,p1__11175_SHARP_,cljs.core.apply.call(null,p2__11176_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__11186);
};
var G__11198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11198__delegate.call(this, x, y, z, args);
};
G__11198.cljs$lang$maxFixedArity = 3;
G__11198.cljs$lang$applyTo = (function (arglist__11199){
var x = cljs.core.first(arglist__11199);
var y = cljs.core.first(cljs.core.next(arglist__11199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11199)));
return G__11198__delegate(x, y, z, args);
});
G__11198.cljs$lang$arity$variadic = G__11198__delegate;
return G__11198;
})()
;
G__11197 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11197__0.call(this);
case 1:
return G__11197__1.call(this,x);
case 2:
return G__11197__2.call(this,x,y);
case 3:
return G__11197__3.call(this,x,y,z);
default:
return G__11197__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11197.cljs$lang$maxFixedArity = 3;
G__11197.cljs$lang$applyTo = G__11197__4.cljs$lang$applyTo;
return G__11197;
})()
};
var G__11196 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11196__delegate.call(this, f, g, h, fs);
};
G__11196.cljs$lang$maxFixedArity = 3;
G__11196.cljs$lang$applyTo = (function (arglist__11200){
var f = cljs.core.first(arglist__11200);
var g = cljs.core.first(cljs.core.next(arglist__11200));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11200)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11200)));
return G__11196__delegate(f, g, h, fs);
});
G__11196.cljs$lang$arity$variadic = G__11196__delegate;
return G__11196;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__11203 = cljs.core.next.call(null,coll);
coll = G__11203;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11202 = cljs.core.seq.call(null,coll);
if(and__3822__auto____11202)
{return (n > 0);
} else
{return and__3822__auto____11202;
}
})()))
{{
var G__11204 = (n - 1);
var G__11205 = cljs.core.next.call(null,coll);
n = G__11204;
coll = G__11205;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__11207 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11207),s))
{if((cljs.core.count.call(null,matches__11207) === 1))
{return cljs.core.first.call(null,matches__11207);
} else
{return cljs.core.vec.call(null,matches__11207);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__11209 = re.exec(s);
if((matches__11209 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11209) === 1))
{return cljs.core.first.call(null,matches__11209);
} else
{return cljs.core.vec.call(null,matches__11209);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11214 = cljs.core.re_find.call(null,re,s);
var match_idx__11215 = s.search(re);
var match_str__11216 = ((cljs.core.coll_QMARK_.call(null,match_data__11214))?cljs.core.first.call(null,match_data__11214):match_data__11214);
var post_match__11217 = cljs.core.subs.call(null,s,(match_idx__11215 + cljs.core.count.call(null,match_str__11216)));
if(cljs.core.truth_(match_data__11214))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11214,re_seq.call(null,re,post_match__11217));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11224__11225 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11226 = cljs.core.nth.call(null,vec__11224__11225,0,null);
var flags__11227 = cljs.core.nth.call(null,vec__11224__11225,1,null);
var pattern__11228 = cljs.core.nth.call(null,vec__11224__11225,2,null);
return (new RegExp(pattern__11228,flags__11227));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__11218_SHARP_){
return print_one.call(null,p1__11218_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____11238 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____11238))
{var and__3822__auto____11242 = (function (){var G__11239__11240 = obj;
if(G__11239__11240)
{if((function (){var or__3824__auto____11241 = (G__11239__11240.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11241)
{return or__3824__auto____11241;
} else
{return G__11239__11240.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11239__11240.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11239__11240);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11239__11240);
}
})();
if(cljs.core.truth_(and__3822__auto____11242))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____11242;
}
} else
{return and__3822__auto____11238;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____11243 = !((obj == null));
if(and__3822__auto____11243)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____11243;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11244__11245 = obj;
if(G__11244__11245)
{if((function (){var or__3824__auto____11246 = (G__11244__11245.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____11246)
{return or__3824__auto____11246;
} else
{return G__11244__11245.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11244__11245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11244__11245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11244__11245);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__11266 = (new goog.string.StringBuffer());
var G__11267__11268 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11267__11268)
{var string__11269 = cljs.core.first.call(null,G__11267__11268);
var G__11267__11270 = G__11267__11268;
while(true){
sb__11266.append(string__11269);
var temp__3974__auto____11271 = cljs.core.next.call(null,G__11267__11270);
if(temp__3974__auto____11271)
{var G__11267__11272 = temp__3974__auto____11271;
{
var G__11285 = cljs.core.first.call(null,G__11267__11272);
var G__11286 = G__11267__11272;
string__11269 = G__11285;
G__11267__11270 = G__11286;
continue;
}
} else
{}
break;
}
} else
{}
var G__11273__11274 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11273__11274)
{var obj__11275 = cljs.core.first.call(null,G__11273__11274);
var G__11273__11276 = G__11273__11274;
while(true){
sb__11266.append(" ");
var G__11277__11278 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11275,opts));
if(G__11277__11278)
{var string__11279 = cljs.core.first.call(null,G__11277__11278);
var G__11277__11280 = G__11277__11278;
while(true){
sb__11266.append(string__11279);
var temp__3974__auto____11281 = cljs.core.next.call(null,G__11277__11280);
if(temp__3974__auto____11281)
{var G__11277__11282 = temp__3974__auto____11281;
{
var G__11287 = cljs.core.first.call(null,G__11277__11282);
var G__11288 = G__11277__11282;
string__11279 = G__11287;
G__11277__11280 = G__11288;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11283 = cljs.core.next.call(null,G__11273__11276);
if(temp__3974__auto____11283)
{var G__11273__11284 = temp__3974__auto____11283;
{
var G__11289 = cljs.core.first.call(null,G__11273__11284);
var G__11290 = G__11273__11284;
obj__11275 = G__11289;
G__11273__11276 = G__11290;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11266;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__11292 = cljs.core.pr_sb.call(null,objs,opts);
sb__11292.append("\n");
return [cljs.core.str(sb__11292)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11311__11312 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11311__11312)
{var string__11313 = cljs.core.first.call(null,G__11311__11312);
var G__11311__11314 = G__11311__11312;
while(true){
cljs.core.string_print.call(null,string__11313);
var temp__3974__auto____11315 = cljs.core.next.call(null,G__11311__11314);
if(temp__3974__auto____11315)
{var G__11311__11316 = temp__3974__auto____11315;
{
var G__11329 = cljs.core.first.call(null,G__11311__11316);
var G__11330 = G__11311__11316;
string__11313 = G__11329;
G__11311__11314 = G__11330;
continue;
}
} else
{}
break;
}
} else
{}
var G__11317__11318 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11317__11318)
{var obj__11319 = cljs.core.first.call(null,G__11317__11318);
var G__11317__11320 = G__11317__11318;
while(true){
cljs.core.string_print.call(null," ");
var G__11321__11322 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11319,opts));
if(G__11321__11322)
{var string__11323 = cljs.core.first.call(null,G__11321__11322);
var G__11321__11324 = G__11321__11322;
while(true){
cljs.core.string_print.call(null,string__11323);
var temp__3974__auto____11325 = cljs.core.next.call(null,G__11321__11324);
if(temp__3974__auto____11325)
{var G__11321__11326 = temp__3974__auto____11325;
{
var G__11331 = cljs.core.first.call(null,G__11321__11326);
var G__11332 = G__11321__11326;
string__11323 = G__11331;
G__11321__11324 = G__11332;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11327 = cljs.core.next.call(null,G__11317__11320);
if(temp__3974__auto____11327)
{var G__11317__11328 = temp__3974__auto____11327;
{
var G__11333 = cljs.core.first.call(null,G__11317__11328);
var G__11334 = G__11317__11328;
obj__11319 = G__11333;
G__11317__11320 = G__11334;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__11335){
var objs = cljs.core.seq(arglist__11335);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__11336){
var objs = cljs.core.seq(arglist__11336);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__11337){
var objs = cljs.core.seq(arglist__11337);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__11338){
var objs = cljs.core.seq(arglist__11338);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__11339){
var objs = cljs.core.seq(arglist__11339);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__11340){
var objs = cljs.core.seq(arglist__11340);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__11341){
var objs = cljs.core.seq(arglist__11341);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__11342){
var objs = cljs.core.seq(arglist__11342);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__11343){
var fmt = cljs.core.first(arglist__11343);
var args = cljs.core.rest(arglist__11343);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11344 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11344,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11345 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11345,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11346 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11346,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11347 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11347))
{var nspc__11348 = temp__3974__auto____11347;
return [cljs.core.str(nspc__11348),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11349 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11349))
{var nspc__11350 = temp__3974__auto____11349;
return [cljs.core.str(nspc__11350),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11351 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11351,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__11353 = (function (n,len){
var ns__11352 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11352) < len))
{{
var G__11355 = [cljs.core.str("0"),cljs.core.str(ns__11352)].join('');
ns__11352 = G__11355;
continue;
}
} else
{return ns__11352;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11353.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11353.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11353.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11353.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11353.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11353.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11354 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11354,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11356 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11357 = this;
var G__11358__11359 = cljs.core.seq.call(null,this__11357.watches);
if(G__11358__11359)
{var G__11361__11363 = cljs.core.first.call(null,G__11358__11359);
var vec__11362__11364 = G__11361__11363;
var key__11365 = cljs.core.nth.call(null,vec__11362__11364,0,null);
var f__11366 = cljs.core.nth.call(null,vec__11362__11364,1,null);
var G__11358__11367 = G__11358__11359;
var G__11361__11368 = G__11361__11363;
var G__11358__11369 = G__11358__11367;
while(true){
var vec__11370__11371 = G__11361__11368;
var key__11372 = cljs.core.nth.call(null,vec__11370__11371,0,null);
var f__11373 = cljs.core.nth.call(null,vec__11370__11371,1,null);
var G__11358__11374 = G__11358__11369;
f__11373.call(null,key__11372,this$,oldval,newval);
var temp__3974__auto____11375 = cljs.core.next.call(null,G__11358__11374);
if(temp__3974__auto____11375)
{var G__11358__11376 = temp__3974__auto____11375;
{
var G__11383 = cljs.core.first.call(null,G__11358__11376);
var G__11384 = G__11358__11376;
G__11361__11368 = G__11383;
G__11358__11369 = G__11384;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__11377 = this;
return this$.watches = cljs.core.assoc.call(null,this__11377.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11378 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11378.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11379 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11379.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11380 = this;
return this__11380.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11381 = this;
return this__11381.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11382 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11396__delegate = function (x,p__11385){
var map__11391__11392 = p__11385;
var map__11391__11393 = ((cljs.core.seq_QMARK_.call(null,map__11391__11392))?cljs.core.apply.call(null,cljs.core.hash_map,map__11391__11392):map__11391__11392);
var validator__11394 = cljs.core._lookup.call(null,map__11391__11393,"\uFDD0'validator",null);
var meta__11395 = cljs.core._lookup.call(null,map__11391__11393,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11395,validator__11394,null));
};
var G__11396 = function (x,var_args){
var p__11385 = null;
if (goog.isDef(var_args)) {
  p__11385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11396__delegate.call(this, x, p__11385);
};
G__11396.cljs$lang$maxFixedArity = 1;
G__11396.cljs$lang$applyTo = (function (arglist__11397){
var x = cljs.core.first(arglist__11397);
var p__11385 = cljs.core.rest(arglist__11397);
return G__11396__delegate(x, p__11385);
});
G__11396.cljs$lang$arity$variadic = G__11396__delegate;
return G__11396;
})()
;
atom = function(x,var_args){
var p__11385 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____11401 = a.validator;
if(cljs.core.truth_(temp__3974__auto____11401))
{var validate__11402 = temp__3974__auto____11401;
if(cljs.core.truth_(validate__11402.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__11403 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11403,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__11404__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11404 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11404__delegate.call(this, a, f, x, y, z, more);
};
G__11404.cljs$lang$maxFixedArity = 5;
G__11404.cljs$lang$applyTo = (function (arglist__11405){
var a = cljs.core.first(arglist__11405);
var f = cljs.core.first(cljs.core.next(arglist__11405));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11405)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11405))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11405)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11405)))));
return G__11404__delegate(a, f, x, y, z, more);
});
G__11404.cljs$lang$arity$variadic = G__11404__delegate;
return G__11404;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11406){
var iref = cljs.core.first(arglist__11406);
var f = cljs.core.first(cljs.core.next(arglist__11406));
var args = cljs.core.rest(cljs.core.next(arglist__11406));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__11407 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11407.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11408 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11408.state,(function (p__11409){
var map__11410__11411 = p__11409;
var map__11410__11412 = ((cljs.core.seq_QMARK_.call(null,map__11410__11411))?cljs.core.apply.call(null,cljs.core.hash_map,map__11410__11411):map__11410__11411);
var curr_state__11413 = map__11410__11412;
var done__11414 = cljs.core._lookup.call(null,map__11410__11412,"\uFDD0'done",null);
if(cljs.core.truth_(done__11414))
{return curr_state__11413;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11408.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__11435__11436 = options;
var map__11435__11437 = ((cljs.core.seq_QMARK_.call(null,map__11435__11436))?cljs.core.apply.call(null,cljs.core.hash_map,map__11435__11436):map__11435__11436);
var keywordize_keys__11438 = cljs.core._lookup.call(null,map__11435__11437,"\uFDD0'keywordize-keys",null);
var keyfn__11439 = (cljs.core.truth_(keywordize_keys__11438)?cljs.core.keyword:cljs.core.str);
var f__11454 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2468__auto____11453 = (function iter__11447(s__11448){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11448__11451 = s__11448;
while(true){
if(cljs.core.seq.call(null,s__11448__11451))
{var k__11452 = cljs.core.first.call(null,s__11448__11451);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11439.call(null,k__11452),thisfn.call(null,(x[k__11452]))], true),iter__11447.call(null,cljs.core.rest.call(null,s__11448__11451)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2468__auto____11453.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__11454.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11455){
var x = cljs.core.first(arglist__11455);
var options = cljs.core.rest(arglist__11455);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__11460 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11464__delegate = function (args){
var temp__3971__auto____11461 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11460),args,null);
if(cljs.core.truth_(temp__3971__auto____11461))
{var v__11462 = temp__3971__auto____11461;
return v__11462;
} else
{var ret__11463 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11460,cljs.core.assoc,args,ret__11463);
return ret__11463;
}
};
var G__11464 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11464__delegate.call(this, args);
};
G__11464.cljs$lang$maxFixedArity = 0;
G__11464.cljs$lang$applyTo = (function (arglist__11465){
var args = cljs.core.seq(arglist__11465);;
return G__11464__delegate(args);
});
G__11464.cljs$lang$arity$variadic = G__11464__delegate;
return G__11464;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__11467 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11467))
{{
var G__11468 = ret__11467;
f = G__11468;
continue;
}
} else
{return ret__11467;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11469__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11469 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11469__delegate.call(this, f, args);
};
G__11469.cljs$lang$maxFixedArity = 1;
G__11469.cljs$lang$applyTo = (function (arglist__11470){
var f = cljs.core.first(arglist__11470);
var args = cljs.core.rest(arglist__11470);
return G__11469__delegate(f, args);
});
G__11469.cljs$lang$arity$variadic = G__11469__delegate;
return G__11469;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__11472 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11472,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11472,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____11481 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____11481)
{return or__3824__auto____11481;
} else
{var or__3824__auto____11482 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____11482)
{return or__3824__auto____11482;
} else
{var and__3822__auto____11483 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____11483)
{var and__3822__auto____11484 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____11484)
{var and__3822__auto____11485 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____11485)
{var ret__11486 = true;
var i__11487 = 0;
while(true){
if((function (){var or__3824__auto____11488 = cljs.core.not.call(null,ret__11486);
if(or__3824__auto____11488)
{return or__3824__auto____11488;
} else
{return (i__11487 === cljs.core.count.call(null,parent));
}
})())
{return ret__11486;
} else
{{
var G__11489 = isa_QMARK_.call(null,h,child.call(null,i__11487),parent.call(null,i__11487));
var G__11490 = (i__11487 + 1);
ret__11486 = G__11489;
i__11487 = G__11490;
continue;
}
}
break;
}
} else
{return and__3822__auto____11485;
}
} else
{return and__3822__auto____11484;
}
} else
{return and__3822__auto____11483;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__11499 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11500 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11501 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11502 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____11503 = ((cljs.core.contains_QMARK_.call(null,tp__11499.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11501.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11501.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11499,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11502.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11500,parent,ta__11501),"\uFDD0'descendants":tf__11502.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11501,tag,td__11500)});
})());
if(cljs.core.truth_(or__3824__auto____11503))
{return or__3824__auto____11503;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__11508 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11509 = (cljs.core.truth_(parentMap__11508.call(null,tag))?cljs.core.disj.call(null,parentMap__11508.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11510 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11509))?cljs.core.assoc.call(null,parentMap__11508,tag,childsParents__11509):cljs.core.dissoc.call(null,parentMap__11508,tag));
var deriv_seq__11511 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11491_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11491_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11491_SHARP_),cljs.core.second.call(null,p1__11491_SHARP_)));
}),cljs.core.seq.call(null,newParents__11510)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11508.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11492_SHARP_,p2__11493_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11492_SHARP_,p2__11493_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11511));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__11519 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____11521 = (cljs.core.truth_((function (){var and__3822__auto____11520 = xprefs__11519;
if(cljs.core.truth_(and__3822__auto____11520))
{return xprefs__11519.call(null,y);
} else
{return and__3822__auto____11520;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____11521))
{return or__3824__auto____11521;
} else
{var or__3824__auto____11523 = (function (){var ps__11522 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11522) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11522),prefer_table)))
{} else
{}
{
var G__11526 = cljs.core.rest.call(null,ps__11522);
ps__11522 = G__11526;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11523))
{return or__3824__auto____11523;
} else
{var or__3824__auto____11525 = (function (){var ps__11524 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11524) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11524),y,prefer_table)))
{} else
{}
{
var G__11527 = cljs.core.rest.call(null,ps__11524);
ps__11524 = G__11527;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11525))
{return or__3824__auto____11525;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____11529 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____11529))
{return or__3824__auto____11529;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11547 = cljs.core.reduce.call(null,(function (be,p__11539){
var vec__11540__11541 = p__11539;
var k__11542 = cljs.core.nth.call(null,vec__11540__11541,0,null);
var ___11543 = cljs.core.nth.call(null,vec__11540__11541,1,null);
var e__11544 = vec__11540__11541;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11542))
{var be2__11546 = (cljs.core.truth_((function (){var or__3824__auto____11545 = (be == null);
if(or__3824__auto____11545)
{return or__3824__auto____11545;
} else
{return cljs.core.dominates.call(null,k__11542,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11544:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11546),k__11542,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11542),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11546)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11546;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11547))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11547));
return cljs.core.second.call(null,best_entry__11547);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____11552 = mf;
if(and__3822__auto____11552)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____11552;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2369__auto____11553 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11554 = (cljs.core._reset[goog.typeOf(x__2369__auto____11553)]);
if(or__3824__auto____11554)
{return or__3824__auto____11554;
} else
{var or__3824__auto____11555 = (cljs.core._reset["_"]);
if(or__3824__auto____11555)
{return or__3824__auto____11555;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____11560 = mf;
if(and__3822__auto____11560)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____11560;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2369__auto____11561 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11562 = (cljs.core._add_method[goog.typeOf(x__2369__auto____11561)]);
if(or__3824__auto____11562)
{return or__3824__auto____11562;
} else
{var or__3824__auto____11563 = (cljs.core._add_method["_"]);
if(or__3824__auto____11563)
{return or__3824__auto____11563;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____11568 = mf;
if(and__3822__auto____11568)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____11568;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2369__auto____11569 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11570 = (cljs.core._remove_method[goog.typeOf(x__2369__auto____11569)]);
if(or__3824__auto____11570)
{return or__3824__auto____11570;
} else
{var or__3824__auto____11571 = (cljs.core._remove_method["_"]);
if(or__3824__auto____11571)
{return or__3824__auto____11571;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____11576 = mf;
if(and__3822__auto____11576)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____11576;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2369__auto____11577 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11578 = (cljs.core._prefer_method[goog.typeOf(x__2369__auto____11577)]);
if(or__3824__auto____11578)
{return or__3824__auto____11578;
} else
{var or__3824__auto____11579 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____11579)
{return or__3824__auto____11579;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____11584 = mf;
if(and__3822__auto____11584)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____11584;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2369__auto____11585 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11586 = (cljs.core._get_method[goog.typeOf(x__2369__auto____11585)]);
if(or__3824__auto____11586)
{return or__3824__auto____11586;
} else
{var or__3824__auto____11587 = (cljs.core._get_method["_"]);
if(or__3824__auto____11587)
{return or__3824__auto____11587;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____11592 = mf;
if(and__3822__auto____11592)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____11592;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2369__auto____11593 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11594 = (cljs.core._methods[goog.typeOf(x__2369__auto____11593)]);
if(or__3824__auto____11594)
{return or__3824__auto____11594;
} else
{var or__3824__auto____11595 = (cljs.core._methods["_"]);
if(or__3824__auto____11595)
{return or__3824__auto____11595;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____11600 = mf;
if(and__3822__auto____11600)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____11600;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2369__auto____11601 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11602 = (cljs.core._prefers[goog.typeOf(x__2369__auto____11601)]);
if(or__3824__auto____11602)
{return or__3824__auto____11602;
} else
{var or__3824__auto____11603 = (cljs.core._prefers["_"]);
if(or__3824__auto____11603)
{return or__3824__auto____11603;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____11608 = mf;
if(and__3822__auto____11608)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____11608;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2369__auto____11609 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11610 = (cljs.core._dispatch[goog.typeOf(x__2369__auto____11609)]);
if(or__3824__auto____11610)
{return or__3824__auto____11610;
} else
{var or__3824__auto____11611 = (cljs.core._dispatch["_"]);
if(or__3824__auto____11611)
{return or__3824__auto____11611;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11614 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11615 = cljs.core._get_method.call(null,mf,dispatch_val__11614);
if(cljs.core.truth_(target_fn__11615))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11614)].join('')));
}
return cljs.core.apply.call(null,target_fn__11615,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11616 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11617 = this;
cljs.core.swap_BANG_.call(null,this__11617.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11617.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11617.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11617.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11618 = this;
cljs.core.swap_BANG_.call(null,this__11618.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11618.method_cache,this__11618.method_table,this__11618.cached_hierarchy,this__11618.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11619 = this;
cljs.core.swap_BANG_.call(null,this__11619.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11619.method_cache,this__11619.method_table,this__11619.cached_hierarchy,this__11619.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11620 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11620.cached_hierarchy),cljs.core.deref.call(null,this__11620.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11620.method_cache,this__11620.method_table,this__11620.cached_hierarchy,this__11620.hierarchy);
}
var temp__3971__auto____11621 = cljs.core.deref.call(null,this__11620.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____11621))
{var target_fn__11622 = temp__3971__auto____11621;
return target_fn__11622;
} else
{var temp__3971__auto____11623 = cljs.core.find_and_cache_best_method.call(null,this__11620.name,dispatch_val,this__11620.hierarchy,this__11620.method_table,this__11620.prefer_table,this__11620.method_cache,this__11620.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____11623))
{var target_fn__11624 = temp__3971__auto____11623;
return target_fn__11624;
} else
{return cljs.core.deref.call(null,this__11620.method_table).call(null,this__11620.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11625 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11625.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11625.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11625.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11625.method_cache,this__11625.method_table,this__11625.cached_hierarchy,this__11625.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11626 = this;
return cljs.core.deref.call(null,this__11626.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11627 = this;
return cljs.core.deref.call(null,this__11627.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11628 = this;
return cljs.core.do_dispatch.call(null,mf,this__11628.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11630__delegate = function (_,args){
var self__11629 = this;
return cljs.core._dispatch.call(null,self__11629,args);
};
var G__11630 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11630__delegate.call(this, _, args);
};
G__11630.cljs$lang$maxFixedArity = 1;
G__11630.cljs$lang$applyTo = (function (arglist__11631){
var _ = cljs.core.first(arglist__11631);
var args = cljs.core.rest(arglist__11631);
return G__11630__delegate(_, args);
});
G__11630.cljs$lang$arity$variadic = G__11630__delegate;
return G__11630;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11632 = this;
return cljs.core._dispatch.call(null,self__11632,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11633 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11635,_){
var this__11634 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11634.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11636 = this;
var and__3822__auto____11637 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____11637)
{return (this__11636.uuid === other.uuid);
} else
{return and__3822__auto____11637;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11638 = this;
var this__11639 = this;
return cljs.core.pr_str.call(null,this__11639);
});
cljs.core.UUID;
