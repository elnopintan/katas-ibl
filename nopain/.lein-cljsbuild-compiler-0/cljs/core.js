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
var x__6464 = (((x == null))?null:x);
if((p[goog.typeOf(x__6464)]))
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
var G__6465__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6465 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6465__delegate.call(this, array, i, idxs);
};
G__6465.cljs$lang$maxFixedArity = 2;
G__6465.cljs$lang$applyTo = (function (arglist__6466){
var array = cljs.core.first(arglist__6466);
var i = cljs.core.first(cljs.core.next(arglist__6466));
var idxs = cljs.core.rest(cljs.core.next(arglist__6466));
return G__6465__delegate(array, i, idxs);
});
G__6465.cljs$lang$arity$variadic = G__6465__delegate;
return G__6465;
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
if((function (){var and__3822__auto____6551 = this$;
if(and__3822__auto____6551)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6551;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2369__auto____6552 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6553 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6552)]);
if(or__3824__auto____6553)
{return or__3824__auto____6553;
} else
{var or__3824__auto____6554 = (cljs.core._invoke["_"]);
if(or__3824__auto____6554)
{return or__3824__auto____6554;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6555 = this$;
if(and__3822__auto____6555)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6555;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2369__auto____6556 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6557 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6556)]);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
} else
{var or__3824__auto____6558 = (cljs.core._invoke["_"]);
if(or__3824__auto____6558)
{return or__3824__auto____6558;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6559 = this$;
if(and__3822__auto____6559)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6559;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2369__auto____6560 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6561 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6560)]);
if(or__3824__auto____6561)
{return or__3824__auto____6561;
} else
{var or__3824__auto____6562 = (cljs.core._invoke["_"]);
if(or__3824__auto____6562)
{return or__3824__auto____6562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6563 = this$;
if(and__3822__auto____6563)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6563;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2369__auto____6564 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6565 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6564)]);
if(or__3824__auto____6565)
{return or__3824__auto____6565;
} else
{var or__3824__auto____6566 = (cljs.core._invoke["_"]);
if(or__3824__auto____6566)
{return or__3824__auto____6566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6567 = this$;
if(and__3822__auto____6567)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6567;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2369__auto____6568 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6569 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6568)]);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{var or__3824__auto____6570 = (cljs.core._invoke["_"]);
if(or__3824__auto____6570)
{return or__3824__auto____6570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6571 = this$;
if(and__3822__auto____6571)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6571;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2369__auto____6572 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6573 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6572)]);
if(or__3824__auto____6573)
{return or__3824__auto____6573;
} else
{var or__3824__auto____6574 = (cljs.core._invoke["_"]);
if(or__3824__auto____6574)
{return or__3824__auto____6574;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6575 = this$;
if(and__3822__auto____6575)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6575;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2369__auto____6576 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6577 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6576)]);
if(or__3824__auto____6577)
{return or__3824__auto____6577;
} else
{var or__3824__auto____6578 = (cljs.core._invoke["_"]);
if(or__3824__auto____6578)
{return or__3824__auto____6578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6579 = this$;
if(and__3822__auto____6579)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6579;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2369__auto____6580 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6581 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6580)]);
if(or__3824__auto____6581)
{return or__3824__auto____6581;
} else
{var or__3824__auto____6582 = (cljs.core._invoke["_"]);
if(or__3824__auto____6582)
{return or__3824__auto____6582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6583 = this$;
if(and__3822__auto____6583)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6583;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2369__auto____6584 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6585 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6584)]);
if(or__3824__auto____6585)
{return or__3824__auto____6585;
} else
{var or__3824__auto____6586 = (cljs.core._invoke["_"]);
if(or__3824__auto____6586)
{return or__3824__auto____6586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6587 = this$;
if(and__3822__auto____6587)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6587;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2369__auto____6588 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6589 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6588)]);
if(or__3824__auto____6589)
{return or__3824__auto____6589;
} else
{var or__3824__auto____6590 = (cljs.core._invoke["_"]);
if(or__3824__auto____6590)
{return or__3824__auto____6590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6591 = this$;
if(and__3822__auto____6591)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6591;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2369__auto____6592 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6593 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6592)]);
if(or__3824__auto____6593)
{return or__3824__auto____6593;
} else
{var or__3824__auto____6594 = (cljs.core._invoke["_"]);
if(or__3824__auto____6594)
{return or__3824__auto____6594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6595 = this$;
if(and__3822__auto____6595)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6595;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2369__auto____6596 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6597 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6596)]);
if(or__3824__auto____6597)
{return or__3824__auto____6597;
} else
{var or__3824__auto____6598 = (cljs.core._invoke["_"]);
if(or__3824__auto____6598)
{return or__3824__auto____6598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6599 = this$;
if(and__3822__auto____6599)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6599;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2369__auto____6600 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6601 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6600)]);
if(or__3824__auto____6601)
{return or__3824__auto____6601;
} else
{var or__3824__auto____6602 = (cljs.core._invoke["_"]);
if(or__3824__auto____6602)
{return or__3824__auto____6602;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6603 = this$;
if(and__3822__auto____6603)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6603;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2369__auto____6604 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6605 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6604)]);
if(or__3824__auto____6605)
{return or__3824__auto____6605;
} else
{var or__3824__auto____6606 = (cljs.core._invoke["_"]);
if(or__3824__auto____6606)
{return or__3824__auto____6606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6607 = this$;
if(and__3822__auto____6607)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6607;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2369__auto____6608 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6609 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6608)]);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{var or__3824__auto____6610 = (cljs.core._invoke["_"]);
if(or__3824__auto____6610)
{return or__3824__auto____6610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6611 = this$;
if(and__3822__auto____6611)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6611;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2369__auto____6612 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6613 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6612)]);
if(or__3824__auto____6613)
{return or__3824__auto____6613;
} else
{var or__3824__auto____6614 = (cljs.core._invoke["_"]);
if(or__3824__auto____6614)
{return or__3824__auto____6614;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6615 = this$;
if(and__3822__auto____6615)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6615;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2369__auto____6616 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6617 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6616)]);
if(or__3824__auto____6617)
{return or__3824__auto____6617;
} else
{var or__3824__auto____6618 = (cljs.core._invoke["_"]);
if(or__3824__auto____6618)
{return or__3824__auto____6618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6619 = this$;
if(and__3822__auto____6619)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6619;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2369__auto____6620 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6621 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6620)]);
if(or__3824__auto____6621)
{return or__3824__auto____6621;
} else
{var or__3824__auto____6622 = (cljs.core._invoke["_"]);
if(or__3824__auto____6622)
{return or__3824__auto____6622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6623 = this$;
if(and__3822__auto____6623)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6623;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2369__auto____6624 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6625 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6624)]);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{var or__3824__auto____6626 = (cljs.core._invoke["_"]);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6627 = this$;
if(and__3822__auto____6627)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6627;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2369__auto____6628 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6629 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6628)]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{var or__3824__auto____6630 = (cljs.core._invoke["_"]);
if(or__3824__auto____6630)
{return or__3824__auto____6630;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6631 = this$;
if(and__3822__auto____6631)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6631;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2369__auto____6632 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6633 = (cljs.core._invoke[goog.typeOf(x__2369__auto____6632)]);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
} else
{var or__3824__auto____6634 = (cljs.core._invoke["_"]);
if(or__3824__auto____6634)
{return or__3824__auto____6634;
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
if((function (){var and__3822__auto____6639 = coll;
if(and__3822__auto____6639)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6639;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2369__auto____6640 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6641 = (cljs.core._count[goog.typeOf(x__2369__auto____6640)]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{var or__3824__auto____6642 = (cljs.core._count["_"]);
if(or__3824__auto____6642)
{return or__3824__auto____6642;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6647 = coll;
if(and__3822__auto____6647)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6647;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2369__auto____6648 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6649 = (cljs.core._empty[goog.typeOf(x__2369__auto____6648)]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{var or__3824__auto____6650 = (cljs.core._empty["_"]);
if(or__3824__auto____6650)
{return or__3824__auto____6650;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6655 = coll;
if(and__3822__auto____6655)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6655;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2369__auto____6656 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6657 = (cljs.core._conj[goog.typeOf(x__2369__auto____6656)]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{var or__3824__auto____6658 = (cljs.core._conj["_"]);
if(or__3824__auto____6658)
{return or__3824__auto____6658;
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
if((function (){var and__3822__auto____6667 = coll;
if(and__3822__auto____6667)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6667;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2369__auto____6668 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6669 = (cljs.core._nth[goog.typeOf(x__2369__auto____6668)]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
} else
{var or__3824__auto____6670 = (cljs.core._nth["_"]);
if(or__3824__auto____6670)
{return or__3824__auto____6670;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6671 = coll;
if(and__3822__auto____6671)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6671;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2369__auto____6672 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6673 = (cljs.core._nth[goog.typeOf(x__2369__auto____6672)]);
if(or__3824__auto____6673)
{return or__3824__auto____6673;
} else
{var or__3824__auto____6674 = (cljs.core._nth["_"]);
if(or__3824__auto____6674)
{return or__3824__auto____6674;
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
if((function (){var and__3822__auto____6679 = coll;
if(and__3822__auto____6679)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6679;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2369__auto____6680 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6681 = (cljs.core._first[goog.typeOf(x__2369__auto____6680)]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{var or__3824__auto____6682 = (cljs.core._first["_"]);
if(or__3824__auto____6682)
{return or__3824__auto____6682;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6687 = coll;
if(and__3822__auto____6687)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6687;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2369__auto____6688 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6689 = (cljs.core._rest[goog.typeOf(x__2369__auto____6688)]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{var or__3824__auto____6690 = (cljs.core._rest["_"]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6695 = coll;
if(and__3822__auto____6695)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6695;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2369__auto____6696 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6697 = (cljs.core._next[goog.typeOf(x__2369__auto____6696)]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{var or__3824__auto____6698 = (cljs.core._next["_"]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
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
if((function (){var and__3822__auto____6707 = o;
if(and__3822__auto____6707)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6707;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2369__auto____6708 = (((o == null))?null:o);
return (function (){var or__3824__auto____6709 = (cljs.core._lookup[goog.typeOf(x__2369__auto____6708)]);
if(or__3824__auto____6709)
{return or__3824__auto____6709;
} else
{var or__3824__auto____6710 = (cljs.core._lookup["_"]);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6711 = o;
if(and__3822__auto____6711)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6711;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2369__auto____6712 = (((o == null))?null:o);
return (function (){var or__3824__auto____6713 = (cljs.core._lookup[goog.typeOf(x__2369__auto____6712)]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{var or__3824__auto____6714 = (cljs.core._lookup["_"]);
if(or__3824__auto____6714)
{return or__3824__auto____6714;
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
if((function (){var and__3822__auto____6719 = coll;
if(and__3822__auto____6719)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6719;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2369__auto____6720 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6721 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2369__auto____6720)]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{var or__3824__auto____6722 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6727 = coll;
if(and__3822__auto____6727)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6727;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2369__auto____6728 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6729 = (cljs.core._assoc[goog.typeOf(x__2369__auto____6728)]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{var or__3824__auto____6730 = (cljs.core._assoc["_"]);
if(or__3824__auto____6730)
{return or__3824__auto____6730;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6735 = coll;
if(and__3822__auto____6735)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6735;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2369__auto____6736 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6737 = (cljs.core._dissoc[goog.typeOf(x__2369__auto____6736)]);
if(or__3824__auto____6737)
{return or__3824__auto____6737;
} else
{var or__3824__auto____6738 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6738)
{return or__3824__auto____6738;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6743 = coll;
if(and__3822__auto____6743)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6743;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2369__auto____6744 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6745 = (cljs.core._key[goog.typeOf(x__2369__auto____6744)]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{var or__3824__auto____6746 = (cljs.core._key["_"]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6751 = coll;
if(and__3822__auto____6751)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6751;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2369__auto____6752 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6753 = (cljs.core._val[goog.typeOf(x__2369__auto____6752)]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{var or__3824__auto____6754 = (cljs.core._val["_"]);
if(or__3824__auto____6754)
{return or__3824__auto____6754;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6759 = coll;
if(and__3822__auto____6759)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6759;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2369__auto____6760 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6761 = (cljs.core._disjoin[goog.typeOf(x__2369__auto____6760)]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{var or__3824__auto____6762 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6762)
{return or__3824__auto____6762;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6767 = coll;
if(and__3822__auto____6767)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6767;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2369__auto____6768 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6769 = (cljs.core._peek[goog.typeOf(x__2369__auto____6768)]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{var or__3824__auto____6770 = (cljs.core._peek["_"]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6775 = coll;
if(and__3822__auto____6775)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6775;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2369__auto____6776 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6777 = (cljs.core._pop[goog.typeOf(x__2369__auto____6776)]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{var or__3824__auto____6778 = (cljs.core._pop["_"]);
if(or__3824__auto____6778)
{return or__3824__auto____6778;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6783 = coll;
if(and__3822__auto____6783)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6783;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2369__auto____6784 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6785 = (cljs.core._assoc_n[goog.typeOf(x__2369__auto____6784)]);
if(or__3824__auto____6785)
{return or__3824__auto____6785;
} else
{var or__3824__auto____6786 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6786)
{return or__3824__auto____6786;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6791 = o;
if(and__3822__auto____6791)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6791;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2369__auto____6792 = (((o == null))?null:o);
return (function (){var or__3824__auto____6793 = (cljs.core._deref[goog.typeOf(x__2369__auto____6792)]);
if(or__3824__auto____6793)
{return or__3824__auto____6793;
} else
{var or__3824__auto____6794 = (cljs.core._deref["_"]);
if(or__3824__auto____6794)
{return or__3824__auto____6794;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6799 = o;
if(and__3822__auto____6799)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6799;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2369__auto____6800 = (((o == null))?null:o);
return (function (){var or__3824__auto____6801 = (cljs.core._deref_with_timeout[goog.typeOf(x__2369__auto____6800)]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{var or__3824__auto____6802 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6802)
{return or__3824__auto____6802;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6807 = o;
if(and__3822__auto____6807)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6807;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2369__auto____6808 = (((o == null))?null:o);
return (function (){var or__3824__auto____6809 = (cljs.core._meta[goog.typeOf(x__2369__auto____6808)]);
if(or__3824__auto____6809)
{return or__3824__auto____6809;
} else
{var or__3824__auto____6810 = (cljs.core._meta["_"]);
if(or__3824__auto____6810)
{return or__3824__auto____6810;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6815 = o;
if(and__3822__auto____6815)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6815;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2369__auto____6816 = (((o == null))?null:o);
return (function (){var or__3824__auto____6817 = (cljs.core._with_meta[goog.typeOf(x__2369__auto____6816)]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{var or__3824__auto____6818 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6818)
{return or__3824__auto____6818;
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
if((function (){var and__3822__auto____6827 = coll;
if(and__3822__auto____6827)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6827;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2369__auto____6828 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6829 = (cljs.core._reduce[goog.typeOf(x__2369__auto____6828)]);
if(or__3824__auto____6829)
{return or__3824__auto____6829;
} else
{var or__3824__auto____6830 = (cljs.core._reduce["_"]);
if(or__3824__auto____6830)
{return or__3824__auto____6830;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6831 = coll;
if(and__3822__auto____6831)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6831;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2369__auto____6832 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6833 = (cljs.core._reduce[goog.typeOf(x__2369__auto____6832)]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{var or__3824__auto____6834 = (cljs.core._reduce["_"]);
if(or__3824__auto____6834)
{return or__3824__auto____6834;
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
if((function (){var and__3822__auto____6839 = coll;
if(and__3822__auto____6839)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6839;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2369__auto____6840 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6841 = (cljs.core._kv_reduce[goog.typeOf(x__2369__auto____6840)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6847 = o;
if(and__3822__auto____6847)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6847;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2369__auto____6848 = (((o == null))?null:o);
return (function (){var or__3824__auto____6849 = (cljs.core._equiv[goog.typeOf(x__2369__auto____6848)]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{var or__3824__auto____6850 = (cljs.core._equiv["_"]);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6855 = o;
if(and__3822__auto____6855)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6855;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2369__auto____6856 = (((o == null))?null:o);
return (function (){var or__3824__auto____6857 = (cljs.core._hash[goog.typeOf(x__2369__auto____6856)]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{var or__3824__auto____6858 = (cljs.core._hash["_"]);
if(or__3824__auto____6858)
{return or__3824__auto____6858;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6863 = o;
if(and__3822__auto____6863)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6863;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2369__auto____6864 = (((o == null))?null:o);
return (function (){var or__3824__auto____6865 = (cljs.core._seq[goog.typeOf(x__2369__auto____6864)]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{var or__3824__auto____6866 = (cljs.core._seq["_"]);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
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
if((function (){var and__3822__auto____6871 = coll;
if(and__3822__auto____6871)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6871;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2369__auto____6872 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6873 = (cljs.core._rseq[goog.typeOf(x__2369__auto____6872)]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{var or__3824__auto____6874 = (cljs.core._rseq["_"]);
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6879 = coll;
if(and__3822__auto____6879)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6879;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2369__auto____6880 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6881 = (cljs.core._sorted_seq[goog.typeOf(x__2369__auto____6880)]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{var or__3824__auto____6882 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6887 = coll;
if(and__3822__auto____6887)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6887;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2369__auto____6888 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6889 = (cljs.core._sorted_seq_from[goog.typeOf(x__2369__auto____6888)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6895 = coll;
if(and__3822__auto____6895)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6895;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2369__auto____6896 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6897 = (cljs.core._entry_key[goog.typeOf(x__2369__auto____6896)]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{var or__3824__auto____6898 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6898)
{return or__3824__auto____6898;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6903 = coll;
if(and__3822__auto____6903)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6903;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2369__auto____6904 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6905 = (cljs.core._comparator[goog.typeOf(x__2369__auto____6904)]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{var or__3824__auto____6906 = (cljs.core._comparator["_"]);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6911 = o;
if(and__3822__auto____6911)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6911;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2369__auto____6912 = (((o == null))?null:o);
return (function (){var or__3824__auto____6913 = (cljs.core._pr_seq[goog.typeOf(x__2369__auto____6912)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6919 = d;
if(and__3822__auto____6919)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6919;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2369__auto____6920 = (((d == null))?null:d);
return (function (){var or__3824__auto____6921 = (cljs.core._realized_QMARK_[goog.typeOf(x__2369__auto____6920)]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{var or__3824__auto____6922 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6922)
{return or__3824__auto____6922;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6927 = this$;
if(and__3822__auto____6927)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6927;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2369__auto____6928 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6929 = (cljs.core._notify_watches[goog.typeOf(x__2369__auto____6928)]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{var or__3824__auto____6930 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6930)
{return or__3824__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6935 = this$;
if(and__3822__auto____6935)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6935;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2369__auto____6936 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6937 = (cljs.core._add_watch[goog.typeOf(x__2369__auto____6936)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6943 = this$;
if(and__3822__auto____6943)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6943;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2369__auto____6944 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6945 = (cljs.core._remove_watch[goog.typeOf(x__2369__auto____6944)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6951 = coll;
if(and__3822__auto____6951)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6951;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2369__auto____6952 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6953 = (cljs.core._as_transient[goog.typeOf(x__2369__auto____6952)]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{var or__3824__auto____6954 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6959 = tcoll;
if(and__3822__auto____6959)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6959;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2369__auto____6960 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6961 = (cljs.core._conj_BANG_[goog.typeOf(x__2369__auto____6960)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6967 = tcoll;
if(and__3822__auto____6967)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6967;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2369__auto____6968 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6969 = (cljs.core._persistent_BANG_[goog.typeOf(x__2369__auto____6968)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6975 = tcoll;
if(and__3822__auto____6975)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6975;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2369__auto____6976 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6977 = (cljs.core._assoc_BANG_[goog.typeOf(x__2369__auto____6976)]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{var or__3824__auto____6978 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6983 = tcoll;
if(and__3822__auto____6983)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6983;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2369__auto____6984 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6985 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2369__auto____6984)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6991 = tcoll;
if(and__3822__auto____6991)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6991;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2369__auto____6992 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6993 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2369__auto____6992)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6999 = tcoll;
if(and__3822__auto____6999)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6999;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2369__auto____7000 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7001 = (cljs.core._pop_BANG_[goog.typeOf(x__2369__auto____7000)]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{var or__3824__auto____7002 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7007 = tcoll;
if(and__3822__auto____7007)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7007;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2369__auto____7008 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7009 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2369__auto____7008)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7015 = x;
if(and__3822__auto____7015)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7015;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2369__auto____7016 = (((x == null))?null:x);
return (function (){var or__3824__auto____7017 = (cljs.core._compare[goog.typeOf(x__2369__auto____7016)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._compare["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7023 = coll;
if(and__3822__auto____7023)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7023;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2369__auto____7024 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7025 = (cljs.core._drop_first[goog.typeOf(x__2369__auto____7024)]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{var or__3824__auto____7026 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7026)
{return or__3824__auto____7026;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7031 = coll;
if(and__3822__auto____7031)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7031;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2369__auto____7032 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7033 = (cljs.core._chunked_first[goog.typeOf(x__2369__auto____7032)]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{var or__3824__auto____7034 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7039 = coll;
if(and__3822__auto____7039)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7039;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2369__auto____7040 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7041 = (cljs.core._chunked_rest[goog.typeOf(x__2369__auto____7040)]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{var or__3824__auto____7042 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7042)
{return or__3824__auto____7042;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7047 = coll;
if(and__3822__auto____7047)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7047;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2369__auto____7048 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7049 = (cljs.core._chunked_next[goog.typeOf(x__2369__auto____7048)]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{var or__3824__auto____7050 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7050)
{return or__3824__auto____7050;
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
var or__3824__auto____7052 = (x === y);
if(or__3824__auto____7052)
{return or__3824__auto____7052;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7053__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7054 = y;
var G__7055 = cljs.core.first.call(null,more);
var G__7056 = cljs.core.next.call(null,more);
x = G__7054;
y = G__7055;
more = G__7056;
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
var G__7053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7053__delegate.call(this, x, y, more);
};
G__7053.cljs$lang$maxFixedArity = 2;
G__7053.cljs$lang$applyTo = (function (arglist__7057){
var x = cljs.core.first(arglist__7057);
var y = cljs.core.first(cljs.core.next(arglist__7057));
var more = cljs.core.rest(cljs.core.next(arglist__7057));
return G__7053__delegate(x, y, more);
});
G__7053.cljs$lang$arity$variadic = G__7053__delegate;
return G__7053;
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
var G__7058 = null;
var G__7058__2 = (function (o,k){
return null;
});
var G__7058__3 = (function (o,k,not_found){
return not_found;
});
G__7058 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7058__2.call(this,o,k);
case 3:
return G__7058__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7058;
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
var G__7059 = null;
var G__7059__2 = (function (_,f){
return f.call(null);
});
var G__7059__3 = (function (_,f,start){
return start;
});
G__7059 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7059__2.call(this,_,f);
case 3:
return G__7059__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7059;
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
var G__7060 = null;
var G__7060__2 = (function (_,n){
return null;
});
var G__7060__3 = (function (_,n,not_found){
return not_found;
});
G__7060 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7060__2.call(this,_,n);
case 3:
return G__7060__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7060;
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
var and__3822__auto____7061 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7061)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7061;
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
var cnt__7074 = cljs.core._count.call(null,cicoll);
if((cnt__7074 === 0))
{return f.call(null);
} else
{var val__7075 = cljs.core._nth.call(null,cicoll,0);
var n__7076 = 1;
while(true){
if((n__7076 < cnt__7074))
{var nval__7077 = f.call(null,val__7075,cljs.core._nth.call(null,cicoll,n__7076));
if(cljs.core.reduced_QMARK_.call(null,nval__7077))
{return cljs.core.deref.call(null,nval__7077);
} else
{{
var G__7086 = nval__7077;
var G__7087 = (n__7076 + 1);
val__7075 = G__7086;
n__7076 = G__7087;
continue;
}
}
} else
{return val__7075;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7078 = cljs.core._count.call(null,cicoll);
var val__7079 = val;
var n__7080 = 0;
while(true){
if((n__7080 < cnt__7078))
{var nval__7081 = f.call(null,val__7079,cljs.core._nth.call(null,cicoll,n__7080));
if(cljs.core.reduced_QMARK_.call(null,nval__7081))
{return cljs.core.deref.call(null,nval__7081);
} else
{{
var G__7088 = nval__7081;
var G__7089 = (n__7080 + 1);
val__7079 = G__7088;
n__7080 = G__7089;
continue;
}
}
} else
{return val__7079;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7082 = cljs.core._count.call(null,cicoll);
var val__7083 = val;
var n__7084 = idx;
while(true){
if((n__7084 < cnt__7082))
{var nval__7085 = f.call(null,val__7083,cljs.core._nth.call(null,cicoll,n__7084));
if(cljs.core.reduced_QMARK_.call(null,nval__7085))
{return cljs.core.deref.call(null,nval__7085);
} else
{{
var G__7090 = nval__7085;
var G__7091 = (n__7084 + 1);
val__7083 = G__7090;
n__7084 = G__7091;
continue;
}
}
} else
{return val__7083;
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
var cnt__7104 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7105 = (arr[0]);
var n__7106 = 1;
while(true){
if((n__7106 < cnt__7104))
{var nval__7107 = f.call(null,val__7105,(arr[n__7106]));
if(cljs.core.reduced_QMARK_.call(null,nval__7107))
{return cljs.core.deref.call(null,nval__7107);
} else
{{
var G__7116 = nval__7107;
var G__7117 = (n__7106 + 1);
val__7105 = G__7116;
n__7106 = G__7117;
continue;
}
}
} else
{return val__7105;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7108 = arr.length;
var val__7109 = val;
var n__7110 = 0;
while(true){
if((n__7110 < cnt__7108))
{var nval__7111 = f.call(null,val__7109,(arr[n__7110]));
if(cljs.core.reduced_QMARK_.call(null,nval__7111))
{return cljs.core.deref.call(null,nval__7111);
} else
{{
var G__7118 = nval__7111;
var G__7119 = (n__7110 + 1);
val__7109 = G__7118;
n__7110 = G__7119;
continue;
}
}
} else
{return val__7109;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7112 = arr.length;
var val__7113 = val;
var n__7114 = idx;
while(true){
if((n__7114 < cnt__7112))
{var nval__7115 = f.call(null,val__7113,(arr[n__7114]));
if(cljs.core.reduced_QMARK_.call(null,nval__7115))
{return cljs.core.deref.call(null,nval__7115);
} else
{{
var G__7120 = nval__7115;
var G__7121 = (n__7114 + 1);
val__7113 = G__7120;
n__7114 = G__7121;
continue;
}
}
} else
{return val__7113;
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
var this__7122 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7123 = this;
if(((this__7123.i + 1) < this__7123.a.length))
{return (new cljs.core.IndexedSeq(this__7123.a,(this__7123.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7124 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7125 = this;
var c__7126 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7126 > 0))
{return (new cljs.core.RSeq(coll,(c__7126 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7127 = this;
var this__7128 = this;
return cljs.core.pr_str.call(null,this__7128);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7129 = this;
if(cljs.core.counted_QMARK_.call(null,this__7129.a))
{return cljs.core.ci_reduce.call(null,this__7129.a,f,(this__7129.a[this__7129.i]),(this__7129.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7129.a[this__7129.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7130 = this;
if(cljs.core.counted_QMARK_.call(null,this__7130.a))
{return cljs.core.ci_reduce.call(null,this__7130.a,f,start,this__7130.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7131 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7132 = this;
return (this__7132.a.length - this__7132.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7133 = this;
return (this__7133.a[this__7133.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7134 = this;
if(((this__7134.i + 1) < this__7134.a.length))
{return (new cljs.core.IndexedSeq(this__7134.a,(this__7134.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7135 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7136 = this;
var i__7137 = (n + this__7136.i);
if((i__7137 < this__7136.a.length))
{return (this__7136.a[i__7137]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7138 = this;
var i__7139 = (n + this__7138.i);
if((i__7139 < this__7138.a.length))
{return (this__7138.a[i__7139]);
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
var G__7140 = null;
var G__7140__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7140__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7140 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7140__2.call(this,array,f);
case 3:
return G__7140__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7140;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7141 = null;
var G__7141__2 = (function (array,k){
return (array[k]);
});
var G__7141__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7141 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7141__2.call(this,array,k);
case 3:
return G__7141__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7141;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7142 = null;
var G__7142__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7142__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7142 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7142__2.call(this,array,n);
case 3:
return G__7142__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7142;
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
var this__7143 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7144 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7145 = this;
var this__7146 = this;
return cljs.core.pr_str.call(null,this__7146);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7147 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7148 = this;
return (this__7148.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7149 = this;
return cljs.core._nth.call(null,this__7149.ci,this__7149.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7150 = this;
if((this__7150.i > 0))
{return (new cljs.core.RSeq(this__7150.ci,(this__7150.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7151 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7152 = this;
return (new cljs.core.RSeq(this__7152.ci,this__7152.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7153 = this;
return this__7153.meta;
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
{if((function (){var G__7157__7158 = coll;
if(G__7157__7158)
{if((function (){var or__3824__auto____7159 = (G__7157__7158.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7159)
{return or__3824__auto____7159;
} else
{return G__7157__7158.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7157__7158.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7157__7158);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7157__7158);
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
{if((function (){var G__7164__7165 = coll;
if(G__7164__7165)
{if((function (){var or__3824__auto____7166 = (G__7164__7165.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7166)
{return or__3824__auto____7166;
} else
{return G__7164__7165.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7164__7165.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7164__7165);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7164__7165);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7167 = cljs.core.seq.call(null,coll);
if((s__7167 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7167);
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
{if((function (){var G__7172__7173 = coll;
if(G__7172__7173)
{if((function (){var or__3824__auto____7174 = (G__7172__7173.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7174)
{return or__3824__auto____7174;
} else
{return G__7172__7173.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7172__7173.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7172__7173);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7172__7173);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7175 = cljs.core.seq.call(null,coll);
if(!((s__7175 == null)))
{return cljs.core._rest.call(null,s__7175);
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
{if((function (){var G__7179__7180 = coll;
if(G__7179__7180)
{if((function (){var or__3824__auto____7181 = (G__7179__7180.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7181)
{return or__3824__auto____7181;
} else
{return G__7179__7180.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7179__7180.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7179__7180);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7179__7180);
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
var sn__7183 = cljs.core.next.call(null,s);
if(!((sn__7183 == null)))
{{
var G__7184 = sn__7183;
s = G__7184;
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
var G__7185__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7186 = conj.call(null,coll,x);
var G__7187 = cljs.core.first.call(null,xs);
var G__7188 = cljs.core.next.call(null,xs);
coll = G__7186;
x = G__7187;
xs = G__7188;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7185 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7185__delegate.call(this, coll, x, xs);
};
G__7185.cljs$lang$maxFixedArity = 2;
G__7185.cljs$lang$applyTo = (function (arglist__7189){
var coll = cljs.core.first(arglist__7189);
var x = cljs.core.first(cljs.core.next(arglist__7189));
var xs = cljs.core.rest(cljs.core.next(arglist__7189));
return G__7185__delegate(coll, x, xs);
});
G__7185.cljs$lang$arity$variadic = G__7185__delegate;
return G__7185;
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
var s__7192 = cljs.core.seq.call(null,coll);
var acc__7193 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7192))
{return (acc__7193 + cljs.core._count.call(null,s__7192));
} else
{{
var G__7194 = cljs.core.next.call(null,s__7192);
var G__7195 = (acc__7193 + 1);
s__7192 = G__7194;
acc__7193 = G__7195;
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
{if((function (){var G__7202__7203 = coll;
if(G__7202__7203)
{if((function (){var or__3824__auto____7204 = (G__7202__7203.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7204)
{return or__3824__auto____7204;
} else
{return G__7202__7203.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7202__7203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7202__7203);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7202__7203);
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
{if((function (){var G__7205__7206 = coll;
if(G__7205__7206)
{if((function (){var or__3824__auto____7207 = (G__7205__7206.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7207)
{return or__3824__auto____7207;
} else
{return G__7205__7206.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7205__7206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7205__7206);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7205__7206);
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
var G__7210__delegate = function (coll,k,v,kvs){
while(true){
var ret__7209 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7211 = ret__7209;
var G__7212 = cljs.core.first.call(null,kvs);
var G__7213 = cljs.core.second.call(null,kvs);
var G__7214 = cljs.core.nnext.call(null,kvs);
coll = G__7211;
k = G__7212;
v = G__7213;
kvs = G__7214;
continue;
}
} else
{return ret__7209;
}
break;
}
};
var G__7210 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7210__delegate.call(this, coll, k, v, kvs);
};
G__7210.cljs$lang$maxFixedArity = 3;
G__7210.cljs$lang$applyTo = (function (arglist__7215){
var coll = cljs.core.first(arglist__7215);
var k = cljs.core.first(cljs.core.next(arglist__7215));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7215)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7215)));
return G__7210__delegate(coll, k, v, kvs);
});
G__7210.cljs$lang$arity$variadic = G__7210__delegate;
return G__7210;
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
var G__7218__delegate = function (coll,k,ks){
while(true){
var ret__7217 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7219 = ret__7217;
var G__7220 = cljs.core.first.call(null,ks);
var G__7221 = cljs.core.next.call(null,ks);
coll = G__7219;
k = G__7220;
ks = G__7221;
continue;
}
} else
{return ret__7217;
}
break;
}
};
var G__7218 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7218__delegate.call(this, coll, k, ks);
};
G__7218.cljs$lang$maxFixedArity = 2;
G__7218.cljs$lang$applyTo = (function (arglist__7222){
var coll = cljs.core.first(arglist__7222);
var k = cljs.core.first(cljs.core.next(arglist__7222));
var ks = cljs.core.rest(cljs.core.next(arglist__7222));
return G__7218__delegate(coll, k, ks);
});
G__7218.cljs$lang$arity$variadic = G__7218__delegate;
return G__7218;
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
if((function (){var G__7226__7227 = o;
if(G__7226__7227)
{if((function (){var or__3824__auto____7228 = (G__7226__7227.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7228)
{return or__3824__auto____7228;
} else
{return G__7226__7227.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7226__7227.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7226__7227);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7226__7227);
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
var G__7231__delegate = function (coll,k,ks){
while(true){
var ret__7230 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7232 = ret__7230;
var G__7233 = cljs.core.first.call(null,ks);
var G__7234 = cljs.core.next.call(null,ks);
coll = G__7232;
k = G__7233;
ks = G__7234;
continue;
}
} else
{return ret__7230;
}
break;
}
};
var G__7231 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7231__delegate.call(this, coll, k, ks);
};
G__7231.cljs$lang$maxFixedArity = 2;
G__7231.cljs$lang$applyTo = (function (arglist__7235){
var coll = cljs.core.first(arglist__7235);
var k = cljs.core.first(cljs.core.next(arglist__7235));
var ks = cljs.core.rest(cljs.core.next(arglist__7235));
return G__7231__delegate(coll, k, ks);
});
G__7231.cljs$lang$arity$variadic = G__7231__delegate;
return G__7231;
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
var h__7237 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7237);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7237;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7239 = (cljs.core.string_hash_cache[k]);
if(!((h__7239 == null)))
{return h__7239;
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
if((function (){var and__3822__auto____7241 = goog.isString(o);
if(and__3822__auto____7241)
{return check_cache;
} else
{return and__3822__auto____7241;
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
{var G__7245__7246 = x;
if(G__7245__7246)
{if((function (){var or__3824__auto____7247 = (G__7245__7246.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7247)
{return or__3824__auto____7247;
} else
{return G__7245__7246.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7245__7246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7245__7246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7245__7246);
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
{var G__7251__7252 = x;
if(G__7251__7252)
{if((function (){var or__3824__auto____7253 = (G__7251__7252.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7253)
{return or__3824__auto____7253;
} else
{return G__7251__7252.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7251__7252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7251__7252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7251__7252);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7257__7258 = x;
if(G__7257__7258)
{if((function (){var or__3824__auto____7259 = (G__7257__7258.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7259)
{return or__3824__auto____7259;
} else
{return G__7257__7258.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7257__7258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7257__7258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7257__7258);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7263__7264 = x;
if(G__7263__7264)
{if((function (){var or__3824__auto____7265 = (G__7263__7264.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7265)
{return or__3824__auto____7265;
} else
{return G__7263__7264.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7263__7264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7263__7264);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7263__7264);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7269__7270 = x;
if(G__7269__7270)
{if((function (){var or__3824__auto____7271 = (G__7269__7270.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7271)
{return or__3824__auto____7271;
} else
{return G__7269__7270.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7269__7270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7269__7270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7269__7270);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7275__7276 = x;
if(G__7275__7276)
{if((function (){var or__3824__auto____7277 = (G__7275__7276.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7277)
{return or__3824__auto____7277;
} else
{return G__7275__7276.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7275__7276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7275__7276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7275__7276);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7281__7282 = x;
if(G__7281__7282)
{if((function (){var or__3824__auto____7283 = (G__7281__7282.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7283)
{return or__3824__auto____7283;
} else
{return G__7281__7282.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7281__7282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7281__7282);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7281__7282);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7287__7288 = x;
if(G__7287__7288)
{if((function (){var or__3824__auto____7289 = (G__7287__7288.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7289)
{return or__3824__auto____7289;
} else
{return G__7287__7288.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7287__7288.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7287__7288);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7287__7288);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7293__7294 = x;
if(G__7293__7294)
{if((function (){var or__3824__auto____7295 = (G__7293__7294.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7295)
{return or__3824__auto____7295;
} else
{return G__7293__7294.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7293__7294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7293__7294);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7293__7294);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7299__7300 = x;
if(G__7299__7300)
{if(cljs.core.truth_((function (){var or__3824__auto____7301 = null;
if(cljs.core.truth_(or__3824__auto____7301))
{return or__3824__auto____7301;
} else
{return G__7299__7300.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7299__7300.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7299__7300);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7299__7300);
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
var G__7302__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7302 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7302__delegate.call(this, keyvals);
};
G__7302.cljs$lang$maxFixedArity = 0;
G__7302.cljs$lang$applyTo = (function (arglist__7303){
var keyvals = cljs.core.seq(arglist__7303);;
return G__7302__delegate(keyvals);
});
G__7302.cljs$lang$arity$variadic = G__7302__delegate;
return G__7302;
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
var keys__7305 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7305.push(key);
}));
return keys__7305;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7309 = i;
var j__7310 = j;
var len__7311 = len;
while(true){
if((len__7311 === 0))
{return to;
} else
{(to[j__7310] = (from[i__7309]));
{
var G__7312 = (i__7309 + 1);
var G__7313 = (j__7310 + 1);
var G__7314 = (len__7311 - 1);
i__7309 = G__7312;
j__7310 = G__7313;
len__7311 = G__7314;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7318 = (i + (len - 1));
var j__7319 = (j + (len - 1));
var len__7320 = len;
while(true){
if((len__7320 === 0))
{return to;
} else
{(to[j__7319] = (from[i__7318]));
{
var G__7321 = (i__7318 - 1);
var G__7322 = (j__7319 - 1);
var G__7323 = (len__7320 - 1);
i__7318 = G__7321;
j__7319 = G__7322;
len__7320 = G__7323;
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
{var G__7327__7328 = s;
if(G__7327__7328)
{if((function (){var or__3824__auto____7329 = (G__7327__7328.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7329)
{return or__3824__auto____7329;
} else
{return G__7327__7328.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7327__7328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7327__7328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7327__7328);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7333__7334 = s;
if(G__7333__7334)
{if((function (){var or__3824__auto____7335 = (G__7333__7334.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7335)
{return or__3824__auto____7335;
} else
{return G__7333__7334.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7333__7334.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7333__7334);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7333__7334);
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
var and__3822__auto____7338 = goog.isString(x);
if(and__3822__auto____7338)
{return !((function (){var or__3824__auto____7339 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7339)
{return or__3824__auto____7339;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7338;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7341 = goog.isString(x);
if(and__3822__auto____7341)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7341;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7343 = goog.isString(x);
if(and__3822__auto____7343)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7343;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7348 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7348)
{return or__3824__auto____7348;
} else
{var G__7349__7350 = f;
if(G__7349__7350)
{if((function (){var or__3824__auto____7351 = (G__7349__7350.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7351)
{return or__3824__auto____7351;
} else
{return G__7349__7350.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7349__7350.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7349__7350);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7349__7350);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7353 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7353)
{return (n == n.toFixed());
} else
{return and__3822__auto____7353;
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
if(cljs.core.truth_((function (){var and__3822__auto____7356 = coll;
if(cljs.core.truth_(and__3822__auto____7356))
{var and__3822__auto____7357 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7357)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7357;
}
} else
{return and__3822__auto____7356;
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
var G__7366__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7362 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7363 = more;
while(true){
var x__7364 = cljs.core.first.call(null,xs__7363);
var etc__7365 = cljs.core.next.call(null,xs__7363);
if(cljs.core.truth_(xs__7363))
{if(cljs.core.contains_QMARK_.call(null,s__7362,x__7364))
{return false;
} else
{{
var G__7367 = cljs.core.conj.call(null,s__7362,x__7364);
var G__7368 = etc__7365;
s__7362 = G__7367;
xs__7363 = G__7368;
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
var G__7366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7366__delegate.call(this, x, y, more);
};
G__7366.cljs$lang$maxFixedArity = 2;
G__7366.cljs$lang$applyTo = (function (arglist__7369){
var x = cljs.core.first(arglist__7369);
var y = cljs.core.first(cljs.core.next(arglist__7369));
var more = cljs.core.rest(cljs.core.next(arglist__7369));
return G__7366__delegate(x, y, more);
});
G__7366.cljs$lang$arity$variadic = G__7366__delegate;
return G__7366;
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
{if((function (){var G__7373__7374 = x;
if(G__7373__7374)
{if(cljs.core.truth_((function (){var or__3824__auto____7375 = null;
if(cljs.core.truth_(or__3824__auto____7375))
{return or__3824__auto____7375;
} else
{return G__7373__7374.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7373__7374.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7373__7374);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7373__7374);
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
var xl__7380 = cljs.core.count.call(null,xs);
var yl__7381 = cljs.core.count.call(null,ys);
if((xl__7380 < yl__7381))
{return -1;
} else
{if((xl__7380 > yl__7381))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7380,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7382 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7383 = (d__7382 === 0);
if(and__3822__auto____7383)
{return ((n + 1) < len);
} else
{return and__3822__auto____7383;
}
})())
{{
var G__7384 = xs;
var G__7385 = ys;
var G__7386 = len;
var G__7387 = (n + 1);
xs = G__7384;
ys = G__7385;
len = G__7386;
n = G__7387;
continue;
}
} else
{return d__7382;
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
var r__7389 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7389))
{return r__7389;
} else
{if(cljs.core.truth_(r__7389))
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
{var a__7391 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7391,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7391);
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
var temp__3971__auto____7397 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7397)
{var s__7398 = temp__3971__auto____7397;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7398),cljs.core.next.call(null,s__7398));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7399 = val;
var coll__7400 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7400)
{var nval__7401 = f.call(null,val__7399,cljs.core.first.call(null,coll__7400));
if(cljs.core.reduced_QMARK_.call(null,nval__7401))
{return cljs.core.deref.call(null,nval__7401);
} else
{{
var G__7402 = nval__7401;
var G__7403 = cljs.core.next.call(null,coll__7400);
val__7399 = G__7402;
coll__7400 = G__7403;
continue;
}
}
} else
{return val__7399;
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
var a__7405 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7405);
return cljs.core.vec.call(null,a__7405);
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
if((function (){var G__7412__7413 = coll;
if(G__7412__7413)
{if((function (){var or__3824__auto____7414 = (G__7412__7413.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7414)
{return or__3824__auto____7414;
} else
{return G__7412__7413.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7412__7413.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7412__7413);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7412__7413);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7415__7416 = coll;
if(G__7415__7416)
{if((function (){var or__3824__auto____7417 = (G__7415__7416.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7417)
{return or__3824__auto____7417;
} else
{return G__7415__7416.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7415__7416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7415__7416);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7415__7416);
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
var this__7418 = this;
return this__7418.val;
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
var G__7419__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7419__delegate.call(this, x, y, more);
};
G__7419.cljs$lang$maxFixedArity = 2;
G__7419.cljs$lang$applyTo = (function (arglist__7420){
var x = cljs.core.first(arglist__7420);
var y = cljs.core.first(cljs.core.next(arglist__7420));
var more = cljs.core.rest(cljs.core.next(arglist__7420));
return G__7419__delegate(x, y, more);
});
G__7419.cljs$lang$arity$variadic = G__7419__delegate;
return G__7419;
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
var G__7421__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7421__delegate.call(this, x, y, more);
};
G__7421.cljs$lang$maxFixedArity = 2;
G__7421.cljs$lang$applyTo = (function (arglist__7422){
var x = cljs.core.first(arglist__7422);
var y = cljs.core.first(cljs.core.next(arglist__7422));
var more = cljs.core.rest(cljs.core.next(arglist__7422));
return G__7421__delegate(x, y, more);
});
G__7421.cljs$lang$arity$variadic = G__7421__delegate;
return G__7421;
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
var G__7423__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7423 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7423__delegate.call(this, x, y, more);
};
G__7423.cljs$lang$maxFixedArity = 2;
G__7423.cljs$lang$applyTo = (function (arglist__7424){
var x = cljs.core.first(arglist__7424);
var y = cljs.core.first(cljs.core.next(arglist__7424));
var more = cljs.core.rest(cljs.core.next(arglist__7424));
return G__7423__delegate(x, y, more);
});
G__7423.cljs$lang$arity$variadic = G__7423__delegate;
return G__7423;
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
var G__7425__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7425__delegate.call(this, x, y, more);
};
G__7425.cljs$lang$maxFixedArity = 2;
G__7425.cljs$lang$applyTo = (function (arglist__7426){
var x = cljs.core.first(arglist__7426);
var y = cljs.core.first(cljs.core.next(arglist__7426));
var more = cljs.core.rest(cljs.core.next(arglist__7426));
return G__7425__delegate(x, y, more);
});
G__7425.cljs$lang$arity$variadic = G__7425__delegate;
return G__7425;
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
var G__7427__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7428 = y;
var G__7429 = cljs.core.first.call(null,more);
var G__7430 = cljs.core.next.call(null,more);
x = G__7428;
y = G__7429;
more = G__7430;
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
var G__7427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7427__delegate.call(this, x, y, more);
};
G__7427.cljs$lang$maxFixedArity = 2;
G__7427.cljs$lang$applyTo = (function (arglist__7431){
var x = cljs.core.first(arglist__7431);
var y = cljs.core.first(cljs.core.next(arglist__7431));
var more = cljs.core.rest(cljs.core.next(arglist__7431));
return G__7427__delegate(x, y, more);
});
G__7427.cljs$lang$arity$variadic = G__7427__delegate;
return G__7427;
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
var G__7432__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7433 = y;
var G__7434 = cljs.core.first.call(null,more);
var G__7435 = cljs.core.next.call(null,more);
x = G__7433;
y = G__7434;
more = G__7435;
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
var G__7432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7432__delegate.call(this, x, y, more);
};
G__7432.cljs$lang$maxFixedArity = 2;
G__7432.cljs$lang$applyTo = (function (arglist__7436){
var x = cljs.core.first(arglist__7436);
var y = cljs.core.first(cljs.core.next(arglist__7436));
var more = cljs.core.rest(cljs.core.next(arglist__7436));
return G__7432__delegate(x, y, more);
});
G__7432.cljs$lang$arity$variadic = G__7432__delegate;
return G__7432;
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
var G__7437__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7438 = y;
var G__7439 = cljs.core.first.call(null,more);
var G__7440 = cljs.core.next.call(null,more);
x = G__7438;
y = G__7439;
more = G__7440;
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
var G__7437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7437__delegate.call(this, x, y, more);
};
G__7437.cljs$lang$maxFixedArity = 2;
G__7437.cljs$lang$applyTo = (function (arglist__7441){
var x = cljs.core.first(arglist__7441);
var y = cljs.core.first(cljs.core.next(arglist__7441));
var more = cljs.core.rest(cljs.core.next(arglist__7441));
return G__7437__delegate(x, y, more);
});
G__7437.cljs$lang$arity$variadic = G__7437__delegate;
return G__7437;
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
var G__7442__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7443 = y;
var G__7444 = cljs.core.first.call(null,more);
var G__7445 = cljs.core.next.call(null,more);
x = G__7443;
y = G__7444;
more = G__7445;
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
var G__7442 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7442__delegate.call(this, x, y, more);
};
G__7442.cljs$lang$maxFixedArity = 2;
G__7442.cljs$lang$applyTo = (function (arglist__7446){
var x = cljs.core.first(arglist__7446);
var y = cljs.core.first(cljs.core.next(arglist__7446));
var more = cljs.core.rest(cljs.core.next(arglist__7446));
return G__7442__delegate(x, y, more);
});
G__7442.cljs$lang$arity$variadic = G__7442__delegate;
return G__7442;
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
var G__7447__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7447__delegate.call(this, x, y, more);
};
G__7447.cljs$lang$maxFixedArity = 2;
G__7447.cljs$lang$applyTo = (function (arglist__7448){
var x = cljs.core.first(arglist__7448);
var y = cljs.core.first(cljs.core.next(arglist__7448));
var more = cljs.core.rest(cljs.core.next(arglist__7448));
return G__7447__delegate(x, y, more);
});
G__7447.cljs$lang$arity$variadic = G__7447__delegate;
return G__7447;
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
var G__7449__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7449 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7449__delegate.call(this, x, y, more);
};
G__7449.cljs$lang$maxFixedArity = 2;
G__7449.cljs$lang$applyTo = (function (arglist__7450){
var x = cljs.core.first(arglist__7450);
var y = cljs.core.first(cljs.core.next(arglist__7450));
var more = cljs.core.rest(cljs.core.next(arglist__7450));
return G__7449__delegate(x, y, more);
});
G__7449.cljs$lang$arity$variadic = G__7449__delegate;
return G__7449;
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
var rem__7452 = (n % d);
return cljs.core.fix.call(null,((n - rem__7452) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7454 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7454));
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
var v__7457 = (v - ((v >> 1) & 1431655765));
var v__7458 = ((v__7457 & 858993459) + ((v__7457 >> 2) & 858993459));
return ((((v__7458 + (v__7458 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7459__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7460 = y;
var G__7461 = cljs.core.first.call(null,more);
var G__7462 = cljs.core.next.call(null,more);
x = G__7460;
y = G__7461;
more = G__7462;
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
var G__7459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7459__delegate.call(this, x, y, more);
};
G__7459.cljs$lang$maxFixedArity = 2;
G__7459.cljs$lang$applyTo = (function (arglist__7463){
var x = cljs.core.first(arglist__7463);
var y = cljs.core.first(cljs.core.next(arglist__7463));
var more = cljs.core.rest(cljs.core.next(arglist__7463));
return G__7459__delegate(x, y, more);
});
G__7459.cljs$lang$arity$variadic = G__7459__delegate;
return G__7459;
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
var n__7467 = n;
var xs__7468 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7469 = xs__7468;
if(and__3822__auto____7469)
{return (n__7467 > 0);
} else
{return and__3822__auto____7469;
}
})()))
{{
var G__7470 = (n__7467 - 1);
var G__7471 = cljs.core.next.call(null,xs__7468);
n__7467 = G__7470;
xs__7468 = G__7471;
continue;
}
} else
{return xs__7468;
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
var G__7472__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7473 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7474 = cljs.core.next.call(null,more);
sb = G__7473;
more = G__7474;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7472 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7472__delegate.call(this, x, ys);
};
G__7472.cljs$lang$maxFixedArity = 1;
G__7472.cljs$lang$applyTo = (function (arglist__7475){
var x = cljs.core.first(arglist__7475);
var ys = cljs.core.rest(arglist__7475);
return G__7472__delegate(x, ys);
});
G__7472.cljs$lang$arity$variadic = G__7472__delegate;
return G__7472;
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
var G__7476__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7477 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7478 = cljs.core.next.call(null,more);
sb = G__7477;
more = G__7478;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7476 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7476__delegate.call(this, x, ys);
};
G__7476.cljs$lang$maxFixedArity = 1;
G__7476.cljs$lang$applyTo = (function (arglist__7479){
var x = cljs.core.first(arglist__7479);
var ys = cljs.core.rest(arglist__7479);
return G__7476__delegate(x, ys);
});
G__7476.cljs$lang$arity$variadic = G__7476__delegate;
return G__7476;
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
format.cljs$lang$applyTo = (function (arglist__7480){
var fmt = cljs.core.first(arglist__7480);
var args = cljs.core.rest(arglist__7480);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7483 = cljs.core.seq.call(null,x);
var ys__7484 = cljs.core.seq.call(null,y);
while(true){
if((xs__7483 == null))
{return (ys__7484 == null);
} else
{if((ys__7484 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7483),cljs.core.first.call(null,ys__7484)))
{{
var G__7485 = cljs.core.next.call(null,xs__7483);
var G__7486 = cljs.core.next.call(null,ys__7484);
xs__7483 = G__7485;
ys__7484 = G__7486;
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
return cljs.core.reduce.call(null,(function (p1__7487_SHARP_,p2__7488_SHARP_){
return cljs.core.hash_combine.call(null,p1__7487_SHARP_,cljs.core.hash.call(null,p2__7488_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7492 = 0;
var s__7493 = cljs.core.seq.call(null,m);
while(true){
if(s__7493)
{var e__7494 = cljs.core.first.call(null,s__7493);
{
var G__7495 = ((h__7492 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7494)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7494)))) % 4503599627370496);
var G__7496 = cljs.core.next.call(null,s__7493);
h__7492 = G__7495;
s__7493 = G__7496;
continue;
}
} else
{return h__7492;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7500 = 0;
var s__7501 = cljs.core.seq.call(null,s);
while(true){
if(s__7501)
{var e__7502 = cljs.core.first.call(null,s__7501);
{
var G__7503 = ((h__7500 + cljs.core.hash.call(null,e__7502)) % 4503599627370496);
var G__7504 = cljs.core.next.call(null,s__7501);
h__7500 = G__7503;
s__7501 = G__7504;
continue;
}
} else
{return h__7500;
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
var G__7525__7526 = cljs.core.seq.call(null,fn_map);
if(G__7525__7526)
{var G__7528__7530 = cljs.core.first.call(null,G__7525__7526);
var vec__7529__7531 = G__7528__7530;
var key_name__7532 = cljs.core.nth.call(null,vec__7529__7531,0,null);
var f__7533 = cljs.core.nth.call(null,vec__7529__7531,1,null);
var G__7525__7534 = G__7525__7526;
var G__7528__7535 = G__7528__7530;
var G__7525__7536 = G__7525__7534;
while(true){
var vec__7537__7538 = G__7528__7535;
var key_name__7539 = cljs.core.nth.call(null,vec__7537__7538,0,null);
var f__7540 = cljs.core.nth.call(null,vec__7537__7538,1,null);
var G__7525__7541 = G__7525__7536;
var str_name__7542 = cljs.core.name.call(null,key_name__7539);
(obj[str_name__7542] = f__7540);
var temp__3974__auto____7543 = cljs.core.next.call(null,G__7525__7541);
if(temp__3974__auto____7543)
{var G__7525__7544 = temp__3974__auto____7543;
{
var G__7545 = cljs.core.first.call(null,G__7525__7544);
var G__7546 = G__7525__7544;
G__7528__7535 = G__7545;
G__7525__7536 = G__7546;
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
var this__7547 = this;
var h__2198__auto____7548 = this__7547.__hash;
if(!((h__2198__auto____7548 == null)))
{return h__2198__auto____7548;
} else
{var h__2198__auto____7549 = cljs.core.hash_coll.call(null,coll);
this__7547.__hash = h__2198__auto____7549;
return h__2198__auto____7549;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7550 = this;
if((this__7550.count === 1))
{return null;
} else
{return this__7550.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7551 = this;
return (new cljs.core.List(this__7551.meta,o,coll,(this__7551.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7552 = this;
var this__7553 = this;
return cljs.core.pr_str.call(null,this__7553);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7554 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7555 = this;
return this__7555.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7556 = this;
return this__7556.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7557 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7558 = this;
return this__7558.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7559 = this;
if((this__7559.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7559.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7560 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7561 = this;
return (new cljs.core.List(meta,this__7561.first,this__7561.rest,this__7561.count,this__7561.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7562 = this;
return this__7562.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7563 = this;
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
var this__7564 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7565 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7566 = this;
return (new cljs.core.List(this__7566.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7567 = this;
var this__7568 = this;
return cljs.core.pr_str.call(null,this__7568);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7569 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7570 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7571 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7572 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7573 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7574 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7575 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7576 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7577 = this;
return this__7577.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7578 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7582__7583 = coll;
if(G__7582__7583)
{if((function (){var or__3824__auto____7584 = (G__7582__7583.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7584)
{return or__3824__auto____7584;
} else
{return G__7582__7583.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7582__7583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7582__7583);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7582__7583);
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
var G__7585__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7585 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7585__delegate.call(this, x, y, z, items);
};
G__7585.cljs$lang$maxFixedArity = 3;
G__7585.cljs$lang$applyTo = (function (arglist__7586){
var x = cljs.core.first(arglist__7586);
var y = cljs.core.first(cljs.core.next(arglist__7586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7586)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7586)));
return G__7585__delegate(x, y, z, items);
});
G__7585.cljs$lang$arity$variadic = G__7585__delegate;
return G__7585;
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
var this__7587 = this;
var h__2198__auto____7588 = this__7587.__hash;
if(!((h__2198__auto____7588 == null)))
{return h__2198__auto____7588;
} else
{var h__2198__auto____7589 = cljs.core.hash_coll.call(null,coll);
this__7587.__hash = h__2198__auto____7589;
return h__2198__auto____7589;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7590 = this;
if((this__7590.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7590.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7591 = this;
return (new cljs.core.Cons(null,o,coll,this__7591.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7592 = this;
var this__7593 = this;
return cljs.core.pr_str.call(null,this__7593);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7594 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7595 = this;
return this__7595.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7596 = this;
if((this__7596.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7596.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7597 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7598 = this;
return (new cljs.core.Cons(meta,this__7598.first,this__7598.rest,this__7598.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7599 = this;
return this__7599.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7600 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7600.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7605 = (coll == null);
if(or__3824__auto____7605)
{return or__3824__auto____7605;
} else
{var G__7606__7607 = coll;
if(G__7606__7607)
{if((function (){var or__3824__auto____7608 = (G__7606__7607.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7608)
{return or__3824__auto____7608;
} else
{return G__7606__7607.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7606__7607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7606__7607);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7606__7607);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7612__7613 = x;
if(G__7612__7613)
{if((function (){var or__3824__auto____7614 = (G__7612__7613.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7614)
{return or__3824__auto____7614;
} else
{return G__7612__7613.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7612__7613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7612__7613);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7612__7613);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7615 = null;
var G__7615__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7615__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7615 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7615__2.call(this,string,f);
case 3:
return G__7615__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7615;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7616 = null;
var G__7616__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7616__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7616 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7616__2.call(this,string,k);
case 3:
return G__7616__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7616;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7617 = null;
var G__7617__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7617__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7617 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7617__2.call(this,string,n);
case 3:
return G__7617__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7617;
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
var G__7629 = null;
var G__7629__2 = (function (this_sym7620,coll){
var this__7622 = this;
var this_sym7620__7623 = this;
var ___7624 = this_sym7620__7623;
if((coll == null))
{return null;
} else
{var strobj__7625 = coll.strobj;
if((strobj__7625 == null))
{return cljs.core._lookup.call(null,coll,this__7622.k,null);
} else
{return (strobj__7625[this__7622.k]);
}
}
});
var G__7629__3 = (function (this_sym7621,coll,not_found){
var this__7622 = this;
var this_sym7621__7626 = this;
var ___7627 = this_sym7621__7626;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7622.k,not_found);
}
});
G__7629 = function(this_sym7621,coll,not_found){
switch(arguments.length){
case 2:
return G__7629__2.call(this,this_sym7621,coll);
case 3:
return G__7629__3.call(this,this_sym7621,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7629;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7618,args7619){
var this__7628 = this;
return this_sym7618.call.apply(this_sym7618,[this_sym7618].concat(args7619.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7638 = null;
var G__7638__2 = (function (this_sym7632,coll){
var this_sym7632__7634 = this;
var this__7635 = this_sym7632__7634;
return cljs.core._lookup.call(null,coll,this__7635.toString(),null);
});
var G__7638__3 = (function (this_sym7633,coll,not_found){
var this_sym7633__7636 = this;
var this__7637 = this_sym7633__7636;
return cljs.core._lookup.call(null,coll,this__7637.toString(),not_found);
});
G__7638 = function(this_sym7633,coll,not_found){
switch(arguments.length){
case 2:
return G__7638__2.call(this,this_sym7633,coll);
case 3:
return G__7638__3.call(this,this_sym7633,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7638;
})()
;
String.prototype.apply = (function (this_sym7630,args7631){
return this_sym7630.call.apply(this_sym7630,[this_sym7630].concat(args7631.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7640 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7640;
} else
{lazy_seq.x = x__7640.call(null);
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
var this__7641 = this;
var h__2198__auto____7642 = this__7641.__hash;
if(!((h__2198__auto____7642 == null)))
{return h__2198__auto____7642;
} else
{var h__2198__auto____7643 = cljs.core.hash_coll.call(null,coll);
this__7641.__hash = h__2198__auto____7643;
return h__2198__auto____7643;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7644 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7645 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7646 = this;
var this__7647 = this;
return cljs.core.pr_str.call(null,this__7647);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7648 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7649 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7650 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7651 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7652 = this;
return (new cljs.core.LazySeq(meta,this__7652.realized,this__7652.x,this__7652.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7653 = this;
return this__7653.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7654 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7654.meta);
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
var this__7655 = this;
return this__7655.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7656 = this;
var ___7657 = this;
(this__7656.buf[this__7656.end] = o);
return this__7656.end = (this__7656.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7658 = this;
var ___7659 = this;
var ret__7660 = (new cljs.core.ArrayChunk(this__7658.buf,0,this__7658.end));
this__7658.buf = null;
return ret__7660;
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
var this__7661 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7661.arr[this__7661.off]),(this__7661.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7662 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7662.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7663 = this;
if((this__7663.off === this__7663.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7663.arr,(this__7663.off + 1),this__7663.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7664 = this;
return (this__7664.arr[(this__7664.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7665 = this;
if((function (){var and__3822__auto____7666 = (i >= 0);
if(and__3822__auto____7666)
{return (i < (this__7665.end - this__7665.off));
} else
{return and__3822__auto____7666;
}
})())
{return (this__7665.arr[(this__7665.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7667 = this;
return (this__7667.end - this__7667.off);
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
var this__7668 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7669 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7670 = this;
return cljs.core._nth.call(null,this__7670.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7671 = this;
if((cljs.core._count.call(null,this__7671.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7671.chunk),this__7671.more,this__7671.meta));
} else
{if((this__7671.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7671.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7672 = this;
if((this__7672.more == null))
{return null;
} else
{return this__7672.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7673 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7674 = this;
return (new cljs.core.ChunkedCons(this__7674.chunk,this__7674.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7675 = this;
return this__7675.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7676 = this;
return this__7676.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7677 = this;
if((this__7677.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7677.more;
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
if((function (){var G__7681__7682 = s;
if(G__7681__7682)
{if(cljs.core.truth_((function (){var or__3824__auto____7683 = null;
if(cljs.core.truth_(or__3824__auto____7683))
{return or__3824__auto____7683;
} else
{return G__7681__7682.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7681__7682.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7681__7682);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7681__7682);
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
var ary__7686 = [];
var s__7687 = s;
while(true){
if(cljs.core.seq.call(null,s__7687))
{ary__7686.push(cljs.core.first.call(null,s__7687));
{
var G__7688 = cljs.core.next.call(null,s__7687);
s__7687 = G__7688;
continue;
}
} else
{return ary__7686;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7692 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7693 = 0;
var xs__7694 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7694)
{(ret__7692[i__7693] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7694)));
{
var G__7695 = (i__7693 + 1);
var G__7696 = cljs.core.next.call(null,xs__7694);
i__7693 = G__7695;
xs__7694 = G__7696;
continue;
}
} else
{}
break;
}
return ret__7692;
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
var a__7704 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7705 = cljs.core.seq.call(null,init_val_or_seq);
var i__7706 = 0;
var s__7707 = s__7705;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7708 = s__7707;
if(and__3822__auto____7708)
{return (i__7706 < size);
} else
{return and__3822__auto____7708;
}
})()))
{(a__7704[i__7706] = cljs.core.first.call(null,s__7707));
{
var G__7711 = (i__7706 + 1);
var G__7712 = cljs.core.next.call(null,s__7707);
i__7706 = G__7711;
s__7707 = G__7712;
continue;
}
} else
{return a__7704;
}
break;
}
} else
{var n__2533__auto____7709 = size;
var i__7710 = 0;
while(true){
if((i__7710 < n__2533__auto____7709))
{(a__7704[i__7710] = init_val_or_seq);
{
var G__7713 = (i__7710 + 1);
i__7710 = G__7713;
continue;
}
} else
{}
break;
}
return a__7704;
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
var a__7721 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7722 = cljs.core.seq.call(null,init_val_or_seq);
var i__7723 = 0;
var s__7724 = s__7722;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7725 = s__7724;
if(and__3822__auto____7725)
{return (i__7723 < size);
} else
{return and__3822__auto____7725;
}
})()))
{(a__7721[i__7723] = cljs.core.first.call(null,s__7724));
{
var G__7728 = (i__7723 + 1);
var G__7729 = cljs.core.next.call(null,s__7724);
i__7723 = G__7728;
s__7724 = G__7729;
continue;
}
} else
{return a__7721;
}
break;
}
} else
{var n__2533__auto____7726 = size;
var i__7727 = 0;
while(true){
if((i__7727 < n__2533__auto____7726))
{(a__7721[i__7727] = init_val_or_seq);
{
var G__7730 = (i__7727 + 1);
i__7727 = G__7730;
continue;
}
} else
{}
break;
}
return a__7721;
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
var a__7738 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7739 = cljs.core.seq.call(null,init_val_or_seq);
var i__7740 = 0;
var s__7741 = s__7739;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7742 = s__7741;
if(and__3822__auto____7742)
{return (i__7740 < size);
} else
{return and__3822__auto____7742;
}
})()))
{(a__7738[i__7740] = cljs.core.first.call(null,s__7741));
{
var G__7745 = (i__7740 + 1);
var G__7746 = cljs.core.next.call(null,s__7741);
i__7740 = G__7745;
s__7741 = G__7746;
continue;
}
} else
{return a__7738;
}
break;
}
} else
{var n__2533__auto____7743 = size;
var i__7744 = 0;
while(true){
if((i__7744 < n__2533__auto____7743))
{(a__7738[i__7744] = init_val_or_seq);
{
var G__7747 = (i__7744 + 1);
i__7744 = G__7747;
continue;
}
} else
{}
break;
}
return a__7738;
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
{var s__7752 = s;
var i__7753 = n;
var sum__7754 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7755 = (i__7753 > 0);
if(and__3822__auto____7755)
{return cljs.core.seq.call(null,s__7752);
} else
{return and__3822__auto____7755;
}
})()))
{{
var G__7756 = cljs.core.next.call(null,s__7752);
var G__7757 = (i__7753 - 1);
var G__7758 = (sum__7754 + 1);
s__7752 = G__7756;
i__7753 = G__7757;
sum__7754 = G__7758;
continue;
}
} else
{return sum__7754;
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
var s__7763 = cljs.core.seq.call(null,x);
if(s__7763)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7763))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7763),concat.call(null,cljs.core.chunk_rest.call(null,s__7763),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7763),concat.call(null,cljs.core.rest.call(null,s__7763),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7767__delegate = function (x,y,zs){
var cat__7766 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7765 = cljs.core.seq.call(null,xys);
if(xys__7765)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7765))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7765),cat.call(null,cljs.core.chunk_rest.call(null,xys__7765),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7765),cat.call(null,cljs.core.rest.call(null,xys__7765),zs));
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
return cat__7766.call(null,concat.call(null,x,y),zs);
};
var G__7767 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7767__delegate.call(this, x, y, zs);
};
G__7767.cljs$lang$maxFixedArity = 2;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var x = cljs.core.first(arglist__7768);
var y = cljs.core.first(cljs.core.next(arglist__7768));
var zs = cljs.core.rest(cljs.core.next(arglist__7768));
return G__7767__delegate(x, y, zs);
});
G__7767.cljs$lang$arity$variadic = G__7767__delegate;
return G__7767;
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
var G__7769__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7769 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7769__delegate.call(this, a, b, c, d, more);
};
G__7769.cljs$lang$maxFixedArity = 4;
G__7769.cljs$lang$applyTo = (function (arglist__7770){
var a = cljs.core.first(arglist__7770);
var b = cljs.core.first(cljs.core.next(arglist__7770));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7770)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7770))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7770))));
return G__7769__delegate(a, b, c, d, more);
});
G__7769.cljs$lang$arity$variadic = G__7769__delegate;
return G__7769;
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
var args__7812 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7813 = cljs.core._first.call(null,args__7812);
var args__7814 = cljs.core._rest.call(null,args__7812);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7813);
} else
{return f.call(null,a__7813);
}
} else
{var b__7815 = cljs.core._first.call(null,args__7814);
var args__7816 = cljs.core._rest.call(null,args__7814);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7813,b__7815);
} else
{return f.call(null,a__7813,b__7815);
}
} else
{var c__7817 = cljs.core._first.call(null,args__7816);
var args__7818 = cljs.core._rest.call(null,args__7816);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7813,b__7815,c__7817);
} else
{return f.call(null,a__7813,b__7815,c__7817);
}
} else
{var d__7819 = cljs.core._first.call(null,args__7818);
var args__7820 = cljs.core._rest.call(null,args__7818);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7813,b__7815,c__7817,d__7819);
} else
{return f.call(null,a__7813,b__7815,c__7817,d__7819);
}
} else
{var e__7821 = cljs.core._first.call(null,args__7820);
var args__7822 = cljs.core._rest.call(null,args__7820);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7813,b__7815,c__7817,d__7819,e__7821);
} else
{return f.call(null,a__7813,b__7815,c__7817,d__7819,e__7821);
}
} else
{var f__7823 = cljs.core._first.call(null,args__7822);
var args__7824 = cljs.core._rest.call(null,args__7822);
if((argc === 6))
{if(f__7823.cljs$lang$arity$6)
{return f__7823.cljs$lang$arity$6(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823);
}
} else
{var g__7825 = cljs.core._first.call(null,args__7824);
var args__7826 = cljs.core._rest.call(null,args__7824);
if((argc === 7))
{if(f__7823.cljs$lang$arity$7)
{return f__7823.cljs$lang$arity$7(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825);
}
} else
{var h__7827 = cljs.core._first.call(null,args__7826);
var args__7828 = cljs.core._rest.call(null,args__7826);
if((argc === 8))
{if(f__7823.cljs$lang$arity$8)
{return f__7823.cljs$lang$arity$8(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827);
}
} else
{var i__7829 = cljs.core._first.call(null,args__7828);
var args__7830 = cljs.core._rest.call(null,args__7828);
if((argc === 9))
{if(f__7823.cljs$lang$arity$9)
{return f__7823.cljs$lang$arity$9(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829);
}
} else
{var j__7831 = cljs.core._first.call(null,args__7830);
var args__7832 = cljs.core._rest.call(null,args__7830);
if((argc === 10))
{if(f__7823.cljs$lang$arity$10)
{return f__7823.cljs$lang$arity$10(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831);
}
} else
{var k__7833 = cljs.core._first.call(null,args__7832);
var args__7834 = cljs.core._rest.call(null,args__7832);
if((argc === 11))
{if(f__7823.cljs$lang$arity$11)
{return f__7823.cljs$lang$arity$11(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833);
}
} else
{var l__7835 = cljs.core._first.call(null,args__7834);
var args__7836 = cljs.core._rest.call(null,args__7834);
if((argc === 12))
{if(f__7823.cljs$lang$arity$12)
{return f__7823.cljs$lang$arity$12(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835);
}
} else
{var m__7837 = cljs.core._first.call(null,args__7836);
var args__7838 = cljs.core._rest.call(null,args__7836);
if((argc === 13))
{if(f__7823.cljs$lang$arity$13)
{return f__7823.cljs$lang$arity$13(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837);
}
} else
{var n__7839 = cljs.core._first.call(null,args__7838);
var args__7840 = cljs.core._rest.call(null,args__7838);
if((argc === 14))
{if(f__7823.cljs$lang$arity$14)
{return f__7823.cljs$lang$arity$14(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839);
}
} else
{var o__7841 = cljs.core._first.call(null,args__7840);
var args__7842 = cljs.core._rest.call(null,args__7840);
if((argc === 15))
{if(f__7823.cljs$lang$arity$15)
{return f__7823.cljs$lang$arity$15(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841);
}
} else
{var p__7843 = cljs.core._first.call(null,args__7842);
var args__7844 = cljs.core._rest.call(null,args__7842);
if((argc === 16))
{if(f__7823.cljs$lang$arity$16)
{return f__7823.cljs$lang$arity$16(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843);
}
} else
{var q__7845 = cljs.core._first.call(null,args__7844);
var args__7846 = cljs.core._rest.call(null,args__7844);
if((argc === 17))
{if(f__7823.cljs$lang$arity$17)
{return f__7823.cljs$lang$arity$17(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845);
}
} else
{var r__7847 = cljs.core._first.call(null,args__7846);
var args__7848 = cljs.core._rest.call(null,args__7846);
if((argc === 18))
{if(f__7823.cljs$lang$arity$18)
{return f__7823.cljs$lang$arity$18(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845,r__7847);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845,r__7847);
}
} else
{var s__7849 = cljs.core._first.call(null,args__7848);
var args__7850 = cljs.core._rest.call(null,args__7848);
if((argc === 19))
{if(f__7823.cljs$lang$arity$19)
{return f__7823.cljs$lang$arity$19(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845,r__7847,s__7849);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845,r__7847,s__7849);
}
} else
{var t__7851 = cljs.core._first.call(null,args__7850);
var args__7852 = cljs.core._rest.call(null,args__7850);
if((argc === 20))
{if(f__7823.cljs$lang$arity$20)
{return f__7823.cljs$lang$arity$20(a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845,r__7847,s__7849,t__7851);
} else
{return f__7823.call(null,a__7813,b__7815,c__7817,d__7819,e__7821,f__7823,g__7825,h__7827,i__7829,j__7831,k__7833,l__7835,m__7837,n__7839,o__7841,p__7843,q__7845,r__7847,s__7849,t__7851);
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
var fixed_arity__7867 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7868 = cljs.core.bounded_count.call(null,args,(fixed_arity__7867 + 1));
if((bc__7868 <= fixed_arity__7867))
{return cljs.core.apply_to.call(null,f,bc__7868,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7869 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7870 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7871 = cljs.core.bounded_count.call(null,arglist__7869,(fixed_arity__7870 + 1));
if((bc__7871 <= fixed_arity__7870))
{return cljs.core.apply_to.call(null,f,bc__7871,arglist__7869);
} else
{return f.cljs$lang$applyTo(arglist__7869);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7869));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7872 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7873 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7874 = cljs.core.bounded_count.call(null,arglist__7872,(fixed_arity__7873 + 1));
if((bc__7874 <= fixed_arity__7873))
{return cljs.core.apply_to.call(null,f,bc__7874,arglist__7872);
} else
{return f.cljs$lang$applyTo(arglist__7872);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7872));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7875 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7876 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7877 = cljs.core.bounded_count.call(null,arglist__7875,(fixed_arity__7876 + 1));
if((bc__7877 <= fixed_arity__7876))
{return cljs.core.apply_to.call(null,f,bc__7877,arglist__7875);
} else
{return f.cljs$lang$applyTo(arglist__7875);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7875));
}
});
var apply__6 = (function() { 
var G__7881__delegate = function (f,a,b,c,d,args){
var arglist__7878 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7879 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7880 = cljs.core.bounded_count.call(null,arglist__7878,(fixed_arity__7879 + 1));
if((bc__7880 <= fixed_arity__7879))
{return cljs.core.apply_to.call(null,f,bc__7880,arglist__7878);
} else
{return f.cljs$lang$applyTo(arglist__7878);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7878));
}
};
var G__7881 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7881__delegate.call(this, f, a, b, c, d, args);
};
G__7881.cljs$lang$maxFixedArity = 5;
G__7881.cljs$lang$applyTo = (function (arglist__7882){
var f = cljs.core.first(arglist__7882);
var a = cljs.core.first(cljs.core.next(arglist__7882));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7882)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7882))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7882)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7882)))));
return G__7881__delegate(f, a, b, c, d, args);
});
G__7881.cljs$lang$arity$variadic = G__7881__delegate;
return G__7881;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7883){
var obj = cljs.core.first(arglist__7883);
var f = cljs.core.first(cljs.core.next(arglist__7883));
var args = cljs.core.rest(cljs.core.next(arglist__7883));
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
var G__7884__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7884 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7884__delegate.call(this, x, y, more);
};
G__7884.cljs$lang$maxFixedArity = 2;
G__7884.cljs$lang$applyTo = (function (arglist__7885){
var x = cljs.core.first(arglist__7885);
var y = cljs.core.first(cljs.core.next(arglist__7885));
var more = cljs.core.rest(cljs.core.next(arglist__7885));
return G__7884__delegate(x, y, more);
});
G__7884.cljs$lang$arity$variadic = G__7884__delegate;
return G__7884;
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
var G__7886 = pred;
var G__7887 = cljs.core.next.call(null,coll);
pred = G__7886;
coll = G__7887;
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
{var or__3824__auto____7889 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7889))
{return or__3824__auto____7889;
} else
{{
var G__7890 = pred;
var G__7891 = cljs.core.next.call(null,coll);
pred = G__7890;
coll = G__7891;
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
var G__7892 = null;
var G__7892__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7892__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7892__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7892__3 = (function() { 
var G__7893__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7893 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7893__delegate.call(this, x, y, zs);
};
G__7893.cljs$lang$maxFixedArity = 2;
G__7893.cljs$lang$applyTo = (function (arglist__7894){
var x = cljs.core.first(arglist__7894);
var y = cljs.core.first(cljs.core.next(arglist__7894));
var zs = cljs.core.rest(cljs.core.next(arglist__7894));
return G__7893__delegate(x, y, zs);
});
G__7893.cljs$lang$arity$variadic = G__7893__delegate;
return G__7893;
})()
;
G__7892 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7892__0.call(this);
case 1:
return G__7892__1.call(this,x);
case 2:
return G__7892__2.call(this,x,y);
default:
return G__7892__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7892.cljs$lang$maxFixedArity = 2;
G__7892.cljs$lang$applyTo = G__7892__3.cljs$lang$applyTo;
return G__7892;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7895__delegate = function (args){
return x;
};
var G__7895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7895__delegate.call(this, args);
};
G__7895.cljs$lang$maxFixedArity = 0;
G__7895.cljs$lang$applyTo = (function (arglist__7896){
var args = cljs.core.seq(arglist__7896);;
return G__7895__delegate(args);
});
G__7895.cljs$lang$arity$variadic = G__7895__delegate;
return G__7895;
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
var G__7903 = null;
var G__7903__0 = (function (){
return f.call(null,g.call(null));
});
var G__7903__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7903__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7903__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7903__4 = (function() { 
var G__7904__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7904 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7904__delegate.call(this, x, y, z, args);
};
G__7904.cljs$lang$maxFixedArity = 3;
G__7904.cljs$lang$applyTo = (function (arglist__7905){
var x = cljs.core.first(arglist__7905);
var y = cljs.core.first(cljs.core.next(arglist__7905));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7905)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7905)));
return G__7904__delegate(x, y, z, args);
});
G__7904.cljs$lang$arity$variadic = G__7904__delegate;
return G__7904;
})()
;
G__7903 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7903__0.call(this);
case 1:
return G__7903__1.call(this,x);
case 2:
return G__7903__2.call(this,x,y);
case 3:
return G__7903__3.call(this,x,y,z);
default:
return G__7903__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7903.cljs$lang$maxFixedArity = 3;
G__7903.cljs$lang$applyTo = G__7903__4.cljs$lang$applyTo;
return G__7903;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7906 = null;
var G__7906__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7906__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7906__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7906__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7906__4 = (function() { 
var G__7907__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7907__delegate.call(this, x, y, z, args);
};
G__7907.cljs$lang$maxFixedArity = 3;
G__7907.cljs$lang$applyTo = (function (arglist__7908){
var x = cljs.core.first(arglist__7908);
var y = cljs.core.first(cljs.core.next(arglist__7908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7908)));
return G__7907__delegate(x, y, z, args);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
})()
;
G__7906 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7906__0.call(this);
case 1:
return G__7906__1.call(this,x);
case 2:
return G__7906__2.call(this,x,y);
case 3:
return G__7906__3.call(this,x,y,z);
default:
return G__7906__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7906.cljs$lang$maxFixedArity = 3;
G__7906.cljs$lang$applyTo = G__7906__4.cljs$lang$applyTo;
return G__7906;
})()
});
var comp__4 = (function() { 
var G__7909__delegate = function (f1,f2,f3,fs){
var fs__7900 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7910__delegate = function (args){
var ret__7901 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7900),args);
var fs__7902 = cljs.core.next.call(null,fs__7900);
while(true){
if(fs__7902)
{{
var G__7911 = cljs.core.first.call(null,fs__7902).call(null,ret__7901);
var G__7912 = cljs.core.next.call(null,fs__7902);
ret__7901 = G__7911;
fs__7902 = G__7912;
continue;
}
} else
{return ret__7901;
}
break;
}
};
var G__7910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7910__delegate.call(this, args);
};
G__7910.cljs$lang$maxFixedArity = 0;
G__7910.cljs$lang$applyTo = (function (arglist__7913){
var args = cljs.core.seq(arglist__7913);;
return G__7910__delegate(args);
});
G__7910.cljs$lang$arity$variadic = G__7910__delegate;
return G__7910;
})()
;
};
var G__7909 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7909__delegate.call(this, f1, f2, f3, fs);
};
G__7909.cljs$lang$maxFixedArity = 3;
G__7909.cljs$lang$applyTo = (function (arglist__7914){
var f1 = cljs.core.first(arglist__7914);
var f2 = cljs.core.first(cljs.core.next(arglist__7914));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7914)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7914)));
return G__7909__delegate(f1, f2, f3, fs);
});
G__7909.cljs$lang$arity$variadic = G__7909__delegate;
return G__7909;
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
var G__7915__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7915 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7915__delegate.call(this, args);
};
G__7915.cljs$lang$maxFixedArity = 0;
G__7915.cljs$lang$applyTo = (function (arglist__7916){
var args = cljs.core.seq(arglist__7916);;
return G__7915__delegate(args);
});
G__7915.cljs$lang$arity$variadic = G__7915__delegate;
return G__7915;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7917__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7917 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7917__delegate.call(this, args);
};
G__7917.cljs$lang$maxFixedArity = 0;
G__7917.cljs$lang$applyTo = (function (arglist__7918){
var args = cljs.core.seq(arglist__7918);;
return G__7917__delegate(args);
});
G__7917.cljs$lang$arity$variadic = G__7917__delegate;
return G__7917;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7919__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7919 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7919__delegate.call(this, args);
};
G__7919.cljs$lang$maxFixedArity = 0;
G__7919.cljs$lang$applyTo = (function (arglist__7920){
var args = cljs.core.seq(arglist__7920);;
return G__7919__delegate(args);
});
G__7919.cljs$lang$arity$variadic = G__7919__delegate;
return G__7919;
})()
;
});
var partial__5 = (function() { 
var G__7921__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7922__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7922 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7922__delegate.call(this, args);
};
G__7922.cljs$lang$maxFixedArity = 0;
G__7922.cljs$lang$applyTo = (function (arglist__7923){
var args = cljs.core.seq(arglist__7923);;
return G__7922__delegate(args);
});
G__7922.cljs$lang$arity$variadic = G__7922__delegate;
return G__7922;
})()
;
};
var G__7921 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7921__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7921.cljs$lang$maxFixedArity = 4;
G__7921.cljs$lang$applyTo = (function (arglist__7924){
var f = cljs.core.first(arglist__7924);
var arg1 = cljs.core.first(cljs.core.next(arglist__7924));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7924)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7924))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7924))));
return G__7921__delegate(f, arg1, arg2, arg3, more);
});
G__7921.cljs$lang$arity$variadic = G__7921__delegate;
return G__7921;
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
var G__7925 = null;
var G__7925__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7925__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7925__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7925__4 = (function() { 
var G__7926__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7926__delegate.call(this, a, b, c, ds);
};
G__7926.cljs$lang$maxFixedArity = 3;
G__7926.cljs$lang$applyTo = (function (arglist__7927){
var a = cljs.core.first(arglist__7927);
var b = cljs.core.first(cljs.core.next(arglist__7927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7927)));
return G__7926__delegate(a, b, c, ds);
});
G__7926.cljs$lang$arity$variadic = G__7926__delegate;
return G__7926;
})()
;
G__7925 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7925__1.call(this,a);
case 2:
return G__7925__2.call(this,a,b);
case 3:
return G__7925__3.call(this,a,b,c);
default:
return G__7925__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7925.cljs$lang$maxFixedArity = 3;
G__7925.cljs$lang$applyTo = G__7925__4.cljs$lang$applyTo;
return G__7925;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7928 = null;
var G__7928__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7928__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7928__4 = (function() { 
var G__7929__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7929 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7929__delegate.call(this, a, b, c, ds);
};
G__7929.cljs$lang$maxFixedArity = 3;
G__7929.cljs$lang$applyTo = (function (arglist__7930){
var a = cljs.core.first(arglist__7930);
var b = cljs.core.first(cljs.core.next(arglist__7930));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7930)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7930)));
return G__7929__delegate(a, b, c, ds);
});
G__7929.cljs$lang$arity$variadic = G__7929__delegate;
return G__7929;
})()
;
G__7928 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7928__2.call(this,a,b);
case 3:
return G__7928__3.call(this,a,b,c);
default:
return G__7928__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7928.cljs$lang$maxFixedArity = 3;
G__7928.cljs$lang$applyTo = G__7928__4.cljs$lang$applyTo;
return G__7928;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7931 = null;
var G__7931__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7931__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7931__4 = (function() { 
var G__7932__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7932 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7932__delegate.call(this, a, b, c, ds);
};
G__7932.cljs$lang$maxFixedArity = 3;
G__7932.cljs$lang$applyTo = (function (arglist__7933){
var a = cljs.core.first(arglist__7933);
var b = cljs.core.first(cljs.core.next(arglist__7933));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7933)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7933)));
return G__7932__delegate(a, b, c, ds);
});
G__7932.cljs$lang$arity$variadic = G__7932__delegate;
return G__7932;
})()
;
G__7931 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7931__2.call(this,a,b);
case 3:
return G__7931__3.call(this,a,b,c);
default:
return G__7931__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7931.cljs$lang$maxFixedArity = 3;
G__7931.cljs$lang$applyTo = G__7931__4.cljs$lang$applyTo;
return G__7931;
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
var mapi__7949 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7957 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7957)
{var s__7958 = temp__3974__auto____7957;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7958))
{var c__7959 = cljs.core.chunk_first.call(null,s__7958);
var size__7960 = cljs.core.count.call(null,c__7959);
var b__7961 = cljs.core.chunk_buffer.call(null,size__7960);
var n__2533__auto____7962 = size__7960;
var i__7963 = 0;
while(true){
if((i__7963 < n__2533__auto____7962))
{cljs.core.chunk_append.call(null,b__7961,f.call(null,(idx + i__7963),cljs.core._nth.call(null,c__7959,i__7963)));
{
var G__7964 = (i__7963 + 1);
i__7963 = G__7964;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7961),mapi.call(null,(idx + size__7960),cljs.core.chunk_rest.call(null,s__7958)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7958)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7958)));
}
} else
{return null;
}
}),null));
});
return mapi__7949.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7974 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7974)
{var s__7975 = temp__3974__auto____7974;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7975))
{var c__7976 = cljs.core.chunk_first.call(null,s__7975);
var size__7977 = cljs.core.count.call(null,c__7976);
var b__7978 = cljs.core.chunk_buffer.call(null,size__7977);
var n__2533__auto____7979 = size__7977;
var i__7980 = 0;
while(true){
if((i__7980 < n__2533__auto____7979))
{var x__7981 = f.call(null,cljs.core._nth.call(null,c__7976,i__7980));
if((x__7981 == null))
{} else
{cljs.core.chunk_append.call(null,b__7978,x__7981);
}
{
var G__7983 = (i__7980 + 1);
i__7980 = G__7983;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7978),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7975)));
} else
{var x__7982 = f.call(null,cljs.core.first.call(null,s__7975));
if((x__7982 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7975));
} else
{return cljs.core.cons.call(null,x__7982,keep.call(null,f,cljs.core.rest.call(null,s__7975)));
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
var keepi__8009 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8019 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8019)
{var s__8020 = temp__3974__auto____8019;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8020))
{var c__8021 = cljs.core.chunk_first.call(null,s__8020);
var size__8022 = cljs.core.count.call(null,c__8021);
var b__8023 = cljs.core.chunk_buffer.call(null,size__8022);
var n__2533__auto____8024 = size__8022;
var i__8025 = 0;
while(true){
if((i__8025 < n__2533__auto____8024))
{var x__8026 = f.call(null,(idx + i__8025),cljs.core._nth.call(null,c__8021,i__8025));
if((x__8026 == null))
{} else
{cljs.core.chunk_append.call(null,b__8023,x__8026);
}
{
var G__8028 = (i__8025 + 1);
i__8025 = G__8028;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8023),keepi.call(null,(idx + size__8022),cljs.core.chunk_rest.call(null,s__8020)));
} else
{var x__8027 = f.call(null,idx,cljs.core.first.call(null,s__8020));
if((x__8027 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8020));
} else
{return cljs.core.cons.call(null,x__8027,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8020)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8009.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8114 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8114))
{return p.call(null,y);
} else
{return and__3822__auto____8114;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8115 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8115))
{var and__3822__auto____8116 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8116))
{return p.call(null,z);
} else
{return and__3822__auto____8116;
}
} else
{return and__3822__auto____8115;
}
})());
});
var ep1__4 = (function() { 
var G__8185__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8117 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8117))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8117;
}
})());
};
var G__8185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8185__delegate.call(this, x, y, z, args);
};
G__8185.cljs$lang$maxFixedArity = 3;
G__8185.cljs$lang$applyTo = (function (arglist__8186){
var x = cljs.core.first(arglist__8186);
var y = cljs.core.first(cljs.core.next(arglist__8186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8186)));
return G__8185__delegate(x, y, z, args);
});
G__8185.cljs$lang$arity$variadic = G__8185__delegate;
return G__8185;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8129 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8129))
{return p2.call(null,x);
} else
{return and__3822__auto____8129;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8130 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8130))
{var and__3822__auto____8131 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8131))
{var and__3822__auto____8132 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8132))
{return p2.call(null,y);
} else
{return and__3822__auto____8132;
}
} else
{return and__3822__auto____8131;
}
} else
{return and__3822__auto____8130;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8133 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8133))
{var and__3822__auto____8134 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8134))
{var and__3822__auto____8135 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8135))
{var and__3822__auto____8136 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8136))
{var and__3822__auto____8137 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8137))
{return p2.call(null,z);
} else
{return and__3822__auto____8137;
}
} else
{return and__3822__auto____8136;
}
} else
{return and__3822__auto____8135;
}
} else
{return and__3822__auto____8134;
}
} else
{return and__3822__auto____8133;
}
})());
});
var ep2__4 = (function() { 
var G__8187__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8138 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8138))
{return cljs.core.every_QMARK_.call(null,(function (p1__7984_SHARP_){
var and__3822__auto____8139 = p1.call(null,p1__7984_SHARP_);
if(cljs.core.truth_(and__3822__auto____8139))
{return p2.call(null,p1__7984_SHARP_);
} else
{return and__3822__auto____8139;
}
}),args);
} else
{return and__3822__auto____8138;
}
})());
};
var G__8187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8187__delegate.call(this, x, y, z, args);
};
G__8187.cljs$lang$maxFixedArity = 3;
G__8187.cljs$lang$applyTo = (function (arglist__8188){
var x = cljs.core.first(arglist__8188);
var y = cljs.core.first(cljs.core.next(arglist__8188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8188)));
return G__8187__delegate(x, y, z, args);
});
G__8187.cljs$lang$arity$variadic = G__8187__delegate;
return G__8187;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8158 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8158))
{var and__3822__auto____8159 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8159))
{return p3.call(null,x);
} else
{return and__3822__auto____8159;
}
} else
{return and__3822__auto____8158;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8160 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8160))
{var and__3822__auto____8161 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8161))
{var and__3822__auto____8162 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8162))
{var and__3822__auto____8163 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8163))
{var and__3822__auto____8164 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8164))
{return p3.call(null,y);
} else
{return and__3822__auto____8164;
}
} else
{return and__3822__auto____8163;
}
} else
{return and__3822__auto____8162;
}
} else
{return and__3822__auto____8161;
}
} else
{return and__3822__auto____8160;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8165 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8165))
{var and__3822__auto____8166 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8166))
{var and__3822__auto____8167 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8167))
{var and__3822__auto____8168 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8168))
{var and__3822__auto____8169 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8169))
{var and__3822__auto____8170 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8170))
{var and__3822__auto____8171 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8171))
{var and__3822__auto____8172 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8172))
{return p3.call(null,z);
} else
{return and__3822__auto____8172;
}
} else
{return and__3822__auto____8171;
}
} else
{return and__3822__auto____8170;
}
} else
{return and__3822__auto____8169;
}
} else
{return and__3822__auto____8168;
}
} else
{return and__3822__auto____8167;
}
} else
{return and__3822__auto____8166;
}
} else
{return and__3822__auto____8165;
}
})());
});
var ep3__4 = (function() { 
var G__8189__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8173 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8173))
{return cljs.core.every_QMARK_.call(null,(function (p1__7985_SHARP_){
var and__3822__auto____8174 = p1.call(null,p1__7985_SHARP_);
if(cljs.core.truth_(and__3822__auto____8174))
{var and__3822__auto____8175 = p2.call(null,p1__7985_SHARP_);
if(cljs.core.truth_(and__3822__auto____8175))
{return p3.call(null,p1__7985_SHARP_);
} else
{return and__3822__auto____8175;
}
} else
{return and__3822__auto____8174;
}
}),args);
} else
{return and__3822__auto____8173;
}
})());
};
var G__8189 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8189__delegate.call(this, x, y, z, args);
};
G__8189.cljs$lang$maxFixedArity = 3;
G__8189.cljs$lang$applyTo = (function (arglist__8190){
var x = cljs.core.first(arglist__8190);
var y = cljs.core.first(cljs.core.next(arglist__8190));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8190)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8190)));
return G__8189__delegate(x, y, z, args);
});
G__8189.cljs$lang$arity$variadic = G__8189__delegate;
return G__8189;
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
var G__8191__delegate = function (p1,p2,p3,ps){
var ps__8176 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7986_SHARP_){
return p1__7986_SHARP_.call(null,x);
}),ps__8176);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7987_SHARP_){
var and__3822__auto____8181 = p1__7987_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8181))
{return p1__7987_SHARP_.call(null,y);
} else
{return and__3822__auto____8181;
}
}),ps__8176);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7988_SHARP_){
var and__3822__auto____8182 = p1__7988_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8182))
{var and__3822__auto____8183 = p1__7988_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8183))
{return p1__7988_SHARP_.call(null,z);
} else
{return and__3822__auto____8183;
}
} else
{return and__3822__auto____8182;
}
}),ps__8176);
});
var epn__4 = (function() { 
var G__8192__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8184 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8184))
{return cljs.core.every_QMARK_.call(null,(function (p1__7989_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7989_SHARP_,args);
}),ps__8176);
} else
{return and__3822__auto____8184;
}
})());
};
var G__8192 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8192__delegate.call(this, x, y, z, args);
};
G__8192.cljs$lang$maxFixedArity = 3;
G__8192.cljs$lang$applyTo = (function (arglist__8193){
var x = cljs.core.first(arglist__8193);
var y = cljs.core.first(cljs.core.next(arglist__8193));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8193)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8193)));
return G__8192__delegate(x, y, z, args);
});
G__8192.cljs$lang$arity$variadic = G__8192__delegate;
return G__8192;
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
var G__8191 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8191__delegate.call(this, p1, p2, p3, ps);
};
G__8191.cljs$lang$maxFixedArity = 3;
G__8191.cljs$lang$applyTo = (function (arglist__8194){
var p1 = cljs.core.first(arglist__8194);
var p2 = cljs.core.first(cljs.core.next(arglist__8194));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8194)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8194)));
return G__8191__delegate(p1, p2, p3, ps);
});
G__8191.cljs$lang$arity$variadic = G__8191__delegate;
return G__8191;
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
var or__3824__auto____8275 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8275))
{return or__3824__auto____8275;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8276 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8276))
{return or__3824__auto____8276;
} else
{var or__3824__auto____8277 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8277))
{return or__3824__auto____8277;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8346__delegate = function (x,y,z,args){
var or__3824__auto____8278 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8278))
{return or__3824__auto____8278;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8346__delegate.call(this, x, y, z, args);
};
G__8346.cljs$lang$maxFixedArity = 3;
G__8346.cljs$lang$applyTo = (function (arglist__8347){
var x = cljs.core.first(arglist__8347);
var y = cljs.core.first(cljs.core.next(arglist__8347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8347)));
return G__8346__delegate(x, y, z, args);
});
G__8346.cljs$lang$arity$variadic = G__8346__delegate;
return G__8346;
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
var or__3824__auto____8290 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8290))
{return or__3824__auto____8290;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8291 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8291))
{return or__3824__auto____8291;
} else
{var or__3824__auto____8292 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8292))
{return or__3824__auto____8292;
} else
{var or__3824__auto____8293 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8293))
{return or__3824__auto____8293;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8294 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8294))
{return or__3824__auto____8294;
} else
{var or__3824__auto____8295 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8295))
{return or__3824__auto____8295;
} else
{var or__3824__auto____8296 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{var or__3824__auto____8297 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{var or__3824__auto____8298 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8348__delegate = function (x,y,z,args){
var or__3824__auto____8299 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8299))
{return or__3824__auto____8299;
} else
{return cljs.core.some.call(null,(function (p1__8029_SHARP_){
var or__3824__auto____8300 = p1.call(null,p1__8029_SHARP_);
if(cljs.core.truth_(or__3824__auto____8300))
{return or__3824__auto____8300;
} else
{return p2.call(null,p1__8029_SHARP_);
}
}),args);
}
};
var G__8348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8348__delegate.call(this, x, y, z, args);
};
G__8348.cljs$lang$maxFixedArity = 3;
G__8348.cljs$lang$applyTo = (function (arglist__8349){
var x = cljs.core.first(arglist__8349);
var y = cljs.core.first(cljs.core.next(arglist__8349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8349)));
return G__8348__delegate(x, y, z, args);
});
G__8348.cljs$lang$arity$variadic = G__8348__delegate;
return G__8348;
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
var or__3824__auto____8319 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8319))
{return or__3824__auto____8319;
} else
{var or__3824__auto____8320 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8321 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8321))
{return or__3824__auto____8321;
} else
{var or__3824__auto____8322 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8322))
{return or__3824__auto____8322;
} else
{var or__3824__auto____8323 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8323))
{return or__3824__auto____8323;
} else
{var or__3824__auto____8324 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8324))
{return or__3824__auto____8324;
} else
{var or__3824__auto____8325 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8325))
{return or__3824__auto____8325;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8326 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8326))
{return or__3824__auto____8326;
} else
{var or__3824__auto____8327 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8327))
{return or__3824__auto____8327;
} else
{var or__3824__auto____8328 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8328))
{return or__3824__auto____8328;
} else
{var or__3824__auto____8329 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8329))
{return or__3824__auto____8329;
} else
{var or__3824__auto____8330 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8330))
{return or__3824__auto____8330;
} else
{var or__3824__auto____8331 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8331))
{return or__3824__auto____8331;
} else
{var or__3824__auto____8332 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8332))
{return or__3824__auto____8332;
} else
{var or__3824__auto____8333 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8333))
{return or__3824__auto____8333;
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
var G__8350__delegate = function (x,y,z,args){
var or__3824__auto____8334 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8334))
{return or__3824__auto____8334;
} else
{return cljs.core.some.call(null,(function (p1__8030_SHARP_){
var or__3824__auto____8335 = p1.call(null,p1__8030_SHARP_);
if(cljs.core.truth_(or__3824__auto____8335))
{return or__3824__auto____8335;
} else
{var or__3824__auto____8336 = p2.call(null,p1__8030_SHARP_);
if(cljs.core.truth_(or__3824__auto____8336))
{return or__3824__auto____8336;
} else
{return p3.call(null,p1__8030_SHARP_);
}
}
}),args);
}
};
var G__8350 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8350__delegate.call(this, x, y, z, args);
};
G__8350.cljs$lang$maxFixedArity = 3;
G__8350.cljs$lang$applyTo = (function (arglist__8351){
var x = cljs.core.first(arglist__8351);
var y = cljs.core.first(cljs.core.next(arglist__8351));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8351)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8351)));
return G__8350__delegate(x, y, z, args);
});
G__8350.cljs$lang$arity$variadic = G__8350__delegate;
return G__8350;
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
var G__8352__delegate = function (p1,p2,p3,ps){
var ps__8337 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8031_SHARP_){
return p1__8031_SHARP_.call(null,x);
}),ps__8337);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8032_SHARP_){
var or__3824__auto____8342 = p1__8032_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8342))
{return or__3824__auto____8342;
} else
{return p1__8032_SHARP_.call(null,y);
}
}),ps__8337);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8033_SHARP_){
var or__3824__auto____8343 = p1__8033_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8343))
{return or__3824__auto____8343;
} else
{var or__3824__auto____8344 = p1__8033_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8344))
{return or__3824__auto____8344;
} else
{return p1__8033_SHARP_.call(null,z);
}
}
}),ps__8337);
});
var spn__4 = (function() { 
var G__8353__delegate = function (x,y,z,args){
var or__3824__auto____8345 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8345))
{return or__3824__auto____8345;
} else
{return cljs.core.some.call(null,(function (p1__8034_SHARP_){
return cljs.core.some.call(null,p1__8034_SHARP_,args);
}),ps__8337);
}
};
var G__8353 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8353__delegate.call(this, x, y, z, args);
};
G__8353.cljs$lang$maxFixedArity = 3;
G__8353.cljs$lang$applyTo = (function (arglist__8354){
var x = cljs.core.first(arglist__8354);
var y = cljs.core.first(cljs.core.next(arglist__8354));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8354)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8354)));
return G__8353__delegate(x, y, z, args);
});
G__8353.cljs$lang$arity$variadic = G__8353__delegate;
return G__8353;
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
var G__8352 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8352__delegate.call(this, p1, p2, p3, ps);
};
G__8352.cljs$lang$maxFixedArity = 3;
G__8352.cljs$lang$applyTo = (function (arglist__8355){
var p1 = cljs.core.first(arglist__8355);
var p2 = cljs.core.first(cljs.core.next(arglist__8355));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8355)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8355)));
return G__8352__delegate(p1, p2, p3, ps);
});
G__8352.cljs$lang$arity$variadic = G__8352__delegate;
return G__8352;
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
var temp__3974__auto____8374 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8374)
{var s__8375 = temp__3974__auto____8374;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8375))
{var c__8376 = cljs.core.chunk_first.call(null,s__8375);
var size__8377 = cljs.core.count.call(null,c__8376);
var b__8378 = cljs.core.chunk_buffer.call(null,size__8377);
var n__2533__auto____8379 = size__8377;
var i__8380 = 0;
while(true){
if((i__8380 < n__2533__auto____8379))
{cljs.core.chunk_append.call(null,b__8378,f.call(null,cljs.core._nth.call(null,c__8376,i__8380)));
{
var G__8392 = (i__8380 + 1);
i__8380 = G__8392;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8378),map.call(null,f,cljs.core.chunk_rest.call(null,s__8375)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8375)),map.call(null,f,cljs.core.rest.call(null,s__8375)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8381 = cljs.core.seq.call(null,c1);
var s2__8382 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8383 = s1__8381;
if(and__3822__auto____8383)
{return s2__8382;
} else
{return and__3822__auto____8383;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8381),cljs.core.first.call(null,s2__8382)),map.call(null,f,cljs.core.rest.call(null,s1__8381),cljs.core.rest.call(null,s2__8382)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8384 = cljs.core.seq.call(null,c1);
var s2__8385 = cljs.core.seq.call(null,c2);
var s3__8386 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8387 = s1__8384;
if(and__3822__auto____8387)
{var and__3822__auto____8388 = s2__8385;
if(and__3822__auto____8388)
{return s3__8386;
} else
{return and__3822__auto____8388;
}
} else
{return and__3822__auto____8387;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8384),cljs.core.first.call(null,s2__8385),cljs.core.first.call(null,s3__8386)),map.call(null,f,cljs.core.rest.call(null,s1__8384),cljs.core.rest.call(null,s2__8385),cljs.core.rest.call(null,s3__8386)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8393__delegate = function (f,c1,c2,c3,colls){
var step__8391 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8390 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8390))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8390),step.call(null,map.call(null,cljs.core.rest,ss__8390)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8195_SHARP_){
return cljs.core.apply.call(null,f,p1__8195_SHARP_);
}),step__8391.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8393 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8393__delegate.call(this, f, c1, c2, c3, colls);
};
G__8393.cljs$lang$maxFixedArity = 4;
G__8393.cljs$lang$applyTo = (function (arglist__8394){
var f = cljs.core.first(arglist__8394);
var c1 = cljs.core.first(cljs.core.next(arglist__8394));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8394)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8394))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8394))));
return G__8393__delegate(f, c1, c2, c3, colls);
});
G__8393.cljs$lang$arity$variadic = G__8393__delegate;
return G__8393;
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
{var temp__3974__auto____8397 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8397)
{var s__8398 = temp__3974__auto____8397;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8398),take.call(null,(n - 1),cljs.core.rest.call(null,s__8398)));
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
var step__8404 = (function (n,coll){
while(true){
var s__8402 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8403 = (n > 0);
if(and__3822__auto____8403)
{return s__8402;
} else
{return and__3822__auto____8403;
}
})()))
{{
var G__8405 = (n - 1);
var G__8406 = cljs.core.rest.call(null,s__8402);
n = G__8405;
coll = G__8406;
continue;
}
} else
{return s__8402;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8404.call(null,n,coll);
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
var s__8409 = cljs.core.seq.call(null,coll);
var lead__8410 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8410)
{{
var G__8411 = cljs.core.next.call(null,s__8409);
var G__8412 = cljs.core.next.call(null,lead__8410);
s__8409 = G__8411;
lead__8410 = G__8412;
continue;
}
} else
{return s__8409;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8418 = (function (pred,coll){
while(true){
var s__8416 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8417 = s__8416;
if(and__3822__auto____8417)
{return pred.call(null,cljs.core.first.call(null,s__8416));
} else
{return and__3822__auto____8417;
}
})()))
{{
var G__8419 = pred;
var G__8420 = cljs.core.rest.call(null,s__8416);
pred = G__8419;
coll = G__8420;
continue;
}
} else
{return s__8416;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8418.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8423 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8423)
{var s__8424 = temp__3974__auto____8423;
return cljs.core.concat.call(null,s__8424,cycle.call(null,s__8424));
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
var s1__8429 = cljs.core.seq.call(null,c1);
var s2__8430 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8431 = s1__8429;
if(and__3822__auto____8431)
{return s2__8430;
} else
{return and__3822__auto____8431;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8429),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8430),interleave.call(null,cljs.core.rest.call(null,s1__8429),cljs.core.rest.call(null,s2__8430))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8433__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8432 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8432))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8432),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8432)));
} else
{return null;
}
}),null));
};
var G__8433 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8433__delegate.call(this, c1, c2, colls);
};
G__8433.cljs$lang$maxFixedArity = 2;
G__8433.cljs$lang$applyTo = (function (arglist__8434){
var c1 = cljs.core.first(arglist__8434);
var c2 = cljs.core.first(cljs.core.next(arglist__8434));
var colls = cljs.core.rest(cljs.core.next(arglist__8434));
return G__8433__delegate(c1, c2, colls);
});
G__8433.cljs$lang$arity$variadic = G__8433__delegate;
return G__8433;
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
var cat__8444 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8442 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8442)
{var coll__8443 = temp__3971__auto____8442;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8443),cat.call(null,cljs.core.rest.call(null,coll__8443),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8444.call(null,null,colls);
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
var G__8445__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8445 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8445__delegate.call(this, f, coll, colls);
};
G__8445.cljs$lang$maxFixedArity = 2;
G__8445.cljs$lang$applyTo = (function (arglist__8446){
var f = cljs.core.first(arglist__8446);
var coll = cljs.core.first(cljs.core.next(arglist__8446));
var colls = cljs.core.rest(cljs.core.next(arglist__8446));
return G__8445__delegate(f, coll, colls);
});
G__8445.cljs$lang$arity$variadic = G__8445__delegate;
return G__8445;
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
var temp__3974__auto____8456 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8456)
{var s__8457 = temp__3974__auto____8456;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8457))
{var c__8458 = cljs.core.chunk_first.call(null,s__8457);
var size__8459 = cljs.core.count.call(null,c__8458);
var b__8460 = cljs.core.chunk_buffer.call(null,size__8459);
var n__2533__auto____8461 = size__8459;
var i__8462 = 0;
while(true){
if((i__8462 < n__2533__auto____8461))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8458,i__8462))))
{cljs.core.chunk_append.call(null,b__8460,cljs.core._nth.call(null,c__8458,i__8462));
} else
{}
{
var G__8465 = (i__8462 + 1);
i__8462 = G__8465;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8460),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8457)));
} else
{var f__8463 = cljs.core.first.call(null,s__8457);
var r__8464 = cljs.core.rest.call(null,s__8457);
if(cljs.core.truth_(pred.call(null,f__8463)))
{return cljs.core.cons.call(null,f__8463,filter.call(null,pred,r__8464));
} else
{return filter.call(null,pred,r__8464);
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
var walk__8468 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8468.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8466_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8466_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8472__8473 = to;
if(G__8472__8473)
{if((function (){var or__3824__auto____8474 = (G__8472__8473.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8474)
{return or__3824__auto____8474;
} else
{return G__8472__8473.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8472__8473.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8472__8473);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8472__8473);
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
var G__8475__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8475 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8475__delegate.call(this, f, c1, c2, c3, colls);
};
G__8475.cljs$lang$maxFixedArity = 4;
G__8475.cljs$lang$applyTo = (function (arglist__8476){
var f = cljs.core.first(arglist__8476);
var c1 = cljs.core.first(cljs.core.next(arglist__8476));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8476)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8476))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8476))));
return G__8475__delegate(f, c1, c2, c3, colls);
});
G__8475.cljs$lang$arity$variadic = G__8475__delegate;
return G__8475;
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
var temp__3974__auto____8483 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8483)
{var s__8484 = temp__3974__auto____8483;
var p__8485 = cljs.core.take.call(null,n,s__8484);
if((n === cljs.core.count.call(null,p__8485)))
{return cljs.core.cons.call(null,p__8485,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8484)));
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
var temp__3974__auto____8486 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8486)
{var s__8487 = temp__3974__auto____8486;
var p__8488 = cljs.core.take.call(null,n,s__8487);
if((n === cljs.core.count.call(null,p__8488)))
{return cljs.core.cons.call(null,p__8488,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8487)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8488,pad)));
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
var sentinel__8493 = cljs.core.lookup_sentinel;
var m__8494 = m;
var ks__8495 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8495)
{var m__8496 = cljs.core._lookup.call(null,m__8494,cljs.core.first.call(null,ks__8495),sentinel__8493);
if((sentinel__8493 === m__8496))
{return not_found;
} else
{{
var G__8497 = sentinel__8493;
var G__8498 = m__8496;
var G__8499 = cljs.core.next.call(null,ks__8495);
sentinel__8493 = G__8497;
m__8494 = G__8498;
ks__8495 = G__8499;
continue;
}
}
} else
{return m__8494;
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
cljs.core.assoc_in = (function assoc_in(m,p__8500,v){
var vec__8505__8506 = p__8500;
var k__8507 = cljs.core.nth.call(null,vec__8505__8506,0,null);
var ks__8508 = cljs.core.nthnext.call(null,vec__8505__8506,1);
if(cljs.core.truth_(ks__8508))
{return cljs.core.assoc.call(null,m,k__8507,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8507,null),ks__8508,v));
} else
{return cljs.core.assoc.call(null,m,k__8507,v);
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
var update_in__delegate = function (m,p__8509,f,args){
var vec__8514__8515 = p__8509;
var k__8516 = cljs.core.nth.call(null,vec__8514__8515,0,null);
var ks__8517 = cljs.core.nthnext.call(null,vec__8514__8515,1);
if(cljs.core.truth_(ks__8517))
{return cljs.core.assoc.call(null,m,k__8516,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8516,null),ks__8517,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8516,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8516,null),args));
}
};
var update_in = function (m,p__8509,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8509, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8518){
var m = cljs.core.first(arglist__8518);
var p__8509 = cljs.core.first(cljs.core.next(arglist__8518));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8518)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8518)));
return update_in__delegate(m, p__8509, f, args);
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
var this__8521 = this;
var h__2198__auto____8522 = this__8521.__hash;
if(!((h__2198__auto____8522 == null)))
{return h__2198__auto____8522;
} else
{var h__2198__auto____8523 = cljs.core.hash_coll.call(null,coll);
this__8521.__hash = h__2198__auto____8523;
return h__2198__auto____8523;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8524 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8525 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8526 = this;
var new_array__8527 = this__8526.array.slice();
(new_array__8527[k] = v);
return (new cljs.core.Vector(this__8526.meta,new_array__8527,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8558 = null;
var G__8558__2 = (function (this_sym8528,k){
var this__8530 = this;
var this_sym8528__8531 = this;
var coll__8532 = this_sym8528__8531;
return coll__8532.cljs$core$ILookup$_lookup$arity$2(coll__8532,k);
});
var G__8558__3 = (function (this_sym8529,k,not_found){
var this__8530 = this;
var this_sym8529__8533 = this;
var coll__8534 = this_sym8529__8533;
return coll__8534.cljs$core$ILookup$_lookup$arity$3(coll__8534,k,not_found);
});
G__8558 = function(this_sym8529,k,not_found){
switch(arguments.length){
case 2:
return G__8558__2.call(this,this_sym8529,k);
case 3:
return G__8558__3.call(this,this_sym8529,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8558;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8519,args8520){
var this__8535 = this;
return this_sym8519.call.apply(this_sym8519,[this_sym8519].concat(args8520.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8536 = this;
var new_array__8537 = this__8536.array.slice();
new_array__8537.push(o);
return (new cljs.core.Vector(this__8536.meta,new_array__8537,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8538 = this;
var this__8539 = this;
return cljs.core.pr_str.call(null,this__8539);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8540 = this;
return cljs.core.ci_reduce.call(null,this__8540.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8541 = this;
return cljs.core.ci_reduce.call(null,this__8541.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8542 = this;
if((this__8542.array.length > 0))
{var vector_seq__8543 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8542.array.length))
{return cljs.core.cons.call(null,(this__8542.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8543.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8544 = this;
return this__8544.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8545 = this;
var count__8546 = this__8545.array.length;
if((count__8546 > 0))
{return (this__8545.array[(count__8546 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8547 = this;
if((this__8547.array.length > 0))
{var new_array__8548 = this__8547.array.slice();
new_array__8548.pop();
return (new cljs.core.Vector(this__8547.meta,new_array__8548,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8549 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8550 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8551 = this;
return (new cljs.core.Vector(meta,this__8551.array,this__8551.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8552 = this;
return this__8552.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8553 = this;
if((function (){var and__3822__auto____8554 = (0 <= n);
if(and__3822__auto____8554)
{return (n < this__8553.array.length);
} else
{return and__3822__auto____8554;
}
})())
{return (this__8553.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8555 = this;
if((function (){var and__3822__auto____8556 = (0 <= n);
if(and__3822__auto____8556)
{return (n < this__8555.array.length);
} else
{return and__3822__auto____8556;
}
})())
{return (this__8555.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8557 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8557.meta);
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
var cnt__8560 = pv.cnt;
if((cnt__8560 < 32))
{return 0;
} else
{return (((cnt__8560 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8566 = level;
var ret__8567 = node;
while(true){
if((ll__8566 === 0))
{return ret__8567;
} else
{var embed__8568 = ret__8567;
var r__8569 = cljs.core.pv_fresh_node.call(null,edit);
var ___8570 = cljs.core.pv_aset.call(null,r__8569,0,embed__8568);
{
var G__8571 = (ll__8566 - 5);
var G__8572 = r__8569;
ll__8566 = G__8571;
ret__8567 = G__8572;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8578 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8579 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8578,subidx__8579,tailnode);
return ret__8578;
} else
{var child__8580 = cljs.core.pv_aget.call(null,parent,subidx__8579);
if(!((child__8580 == null)))
{var node_to_insert__8581 = push_tail.call(null,pv,(level - 5),child__8580,tailnode);
cljs.core.pv_aset.call(null,ret__8578,subidx__8579,node_to_insert__8581);
return ret__8578;
} else
{var node_to_insert__8582 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8578,subidx__8579,node_to_insert__8582);
return ret__8578;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8586 = (0 <= i);
if(and__3822__auto____8586)
{return (i < pv.cnt);
} else
{return and__3822__auto____8586;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8587 = pv.root;
var level__8588 = pv.shift;
while(true){
if((level__8588 > 0))
{{
var G__8589 = cljs.core.pv_aget.call(null,node__8587,((i >>> level__8588) & 31));
var G__8590 = (level__8588 - 5);
node__8587 = G__8589;
level__8588 = G__8590;
continue;
}
} else
{return node__8587.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8593 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8593,(i & 31),val);
return ret__8593;
} else
{var subidx__8594 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8593,subidx__8594,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8594),i,val));
return ret__8593;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8600 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8601 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8600));
if((function (){var and__3822__auto____8602 = (new_child__8601 == null);
if(and__3822__auto____8602)
{return (subidx__8600 === 0);
} else
{return and__3822__auto____8602;
}
})())
{return null;
} else
{var ret__8603 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8603,subidx__8600,new_child__8601);
return ret__8603;
}
} else
{if((subidx__8600 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8604 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8604,subidx__8600,null);
return ret__8604;
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
var this__8607 = this;
return (new cljs.core.TransientVector(this__8607.cnt,this__8607.shift,cljs.core.tv_editable_root.call(null,this__8607.root),cljs.core.tv_editable_tail.call(null,this__8607.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8608 = this;
var h__2198__auto____8609 = this__8608.__hash;
if(!((h__2198__auto____8609 == null)))
{return h__2198__auto____8609;
} else
{var h__2198__auto____8610 = cljs.core.hash_coll.call(null,coll);
this__8608.__hash = h__2198__auto____8610;
return h__2198__auto____8610;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8611 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8612 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8613 = this;
if((function (){var and__3822__auto____8614 = (0 <= k);
if(and__3822__auto____8614)
{return (k < this__8613.cnt);
} else
{return and__3822__auto____8614;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8615 = this__8613.tail.slice();
(new_tail__8615[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8613.meta,this__8613.cnt,this__8613.shift,this__8613.root,new_tail__8615,null));
} else
{return (new cljs.core.PersistentVector(this__8613.meta,this__8613.cnt,this__8613.shift,cljs.core.do_assoc.call(null,coll,this__8613.shift,this__8613.root,k,v),this__8613.tail,null));
}
} else
{if((k === this__8613.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8613.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8663 = null;
var G__8663__2 = (function (this_sym8616,k){
var this__8618 = this;
var this_sym8616__8619 = this;
var coll__8620 = this_sym8616__8619;
return coll__8620.cljs$core$ILookup$_lookup$arity$2(coll__8620,k);
});
var G__8663__3 = (function (this_sym8617,k,not_found){
var this__8618 = this;
var this_sym8617__8621 = this;
var coll__8622 = this_sym8617__8621;
return coll__8622.cljs$core$ILookup$_lookup$arity$3(coll__8622,k,not_found);
});
G__8663 = function(this_sym8617,k,not_found){
switch(arguments.length){
case 2:
return G__8663__2.call(this,this_sym8617,k);
case 3:
return G__8663__3.call(this,this_sym8617,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8663;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8605,args8606){
var this__8623 = this;
return this_sym8605.call.apply(this_sym8605,[this_sym8605].concat(args8606.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8624 = this;
var step_init__8625 = [0,init];
var i__8626 = 0;
while(true){
if((i__8626 < this__8624.cnt))
{var arr__8627 = cljs.core.array_for.call(null,v,i__8626);
var len__8628 = arr__8627.length;
var init__8632 = (function (){var j__8629 = 0;
var init__8630 = (step_init__8625[1]);
while(true){
if((j__8629 < len__8628))
{var init__8631 = f.call(null,init__8630,(j__8629 + i__8626),(arr__8627[j__8629]));
if(cljs.core.reduced_QMARK_.call(null,init__8631))
{return init__8631;
} else
{{
var G__8664 = (j__8629 + 1);
var G__8665 = init__8631;
j__8629 = G__8664;
init__8630 = G__8665;
continue;
}
}
} else
{(step_init__8625[0] = len__8628);
(step_init__8625[1] = init__8630);
return init__8630;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8632))
{return cljs.core.deref.call(null,init__8632);
} else
{{
var G__8666 = (i__8626 + (step_init__8625[0]));
i__8626 = G__8666;
continue;
}
}
} else
{return (step_init__8625[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8633 = this;
if(((this__8633.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8634 = this__8633.tail.slice();
new_tail__8634.push(o);
return (new cljs.core.PersistentVector(this__8633.meta,(this__8633.cnt + 1),this__8633.shift,this__8633.root,new_tail__8634,null));
} else
{var root_overflow_QMARK___8635 = ((this__8633.cnt >>> 5) > (1 << this__8633.shift));
var new_shift__8636 = ((root_overflow_QMARK___8635)?(this__8633.shift + 5):this__8633.shift);
var new_root__8638 = ((root_overflow_QMARK___8635)?(function (){var n_r__8637 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8637,0,this__8633.root);
cljs.core.pv_aset.call(null,n_r__8637,1,cljs.core.new_path.call(null,null,this__8633.shift,(new cljs.core.VectorNode(null,this__8633.tail))));
return n_r__8637;
})():cljs.core.push_tail.call(null,coll,this__8633.shift,this__8633.root,(new cljs.core.VectorNode(null,this__8633.tail))));
return (new cljs.core.PersistentVector(this__8633.meta,(this__8633.cnt + 1),new_shift__8636,new_root__8638,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8639 = this;
if((this__8639.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8639.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8640 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8641 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8642 = this;
var this__8643 = this;
return cljs.core.pr_str.call(null,this__8643);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8644 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8645 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8646 = this;
if((this__8646.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8647 = this;
return this__8647.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8648 = this;
if((this__8648.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8648.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8649 = this;
if((this__8649.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8649.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8649.meta);
} else
{if((1 < (this__8649.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8649.meta,(this__8649.cnt - 1),this__8649.shift,this__8649.root,this__8649.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8650 = cljs.core.array_for.call(null,coll,(this__8649.cnt - 2));
var nr__8651 = cljs.core.pop_tail.call(null,coll,this__8649.shift,this__8649.root);
var new_root__8652 = (((nr__8651 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8651);
var cnt_1__8653 = (this__8649.cnt - 1);
if((function (){var and__3822__auto____8654 = (5 < this__8649.shift);
if(and__3822__auto____8654)
{return (cljs.core.pv_aget.call(null,new_root__8652,1) == null);
} else
{return and__3822__auto____8654;
}
})())
{return (new cljs.core.PersistentVector(this__8649.meta,cnt_1__8653,(this__8649.shift - 5),cljs.core.pv_aget.call(null,new_root__8652,0),new_tail__8650,null));
} else
{return (new cljs.core.PersistentVector(this__8649.meta,cnt_1__8653,this__8649.shift,new_root__8652,new_tail__8650,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8655 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8656 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8657 = this;
return (new cljs.core.PersistentVector(meta,this__8657.cnt,this__8657.shift,this__8657.root,this__8657.tail,this__8657.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8658 = this;
return this__8658.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8659 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8660 = this;
if((function (){var and__3822__auto____8661 = (0 <= n);
if(and__3822__auto____8661)
{return (n < this__8660.cnt);
} else
{return and__3822__auto____8661;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8662 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8662.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8667 = xs.length;
var xs__8668 = (((no_clone === true))?xs:xs.slice());
if((l__8667 < 32))
{return (new cljs.core.PersistentVector(null,l__8667,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8668,null));
} else
{var node__8669 = xs__8668.slice(0,32);
var v__8670 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8669,null));
var i__8671 = 32;
var out__8672 = cljs.core._as_transient.call(null,v__8670);
while(true){
if((i__8671 < l__8667))
{{
var G__8673 = (i__8671 + 1);
var G__8674 = cljs.core.conj_BANG_.call(null,out__8672,(xs__8668[i__8671]));
i__8671 = G__8673;
out__8672 = G__8674;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8672);
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
vector.cljs$lang$applyTo = (function (arglist__8675){
var args = cljs.core.seq(arglist__8675);;
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
var this__8676 = this;
if(((this__8676.off + 1) < this__8676.node.length))
{var s__8677 = cljs.core.chunked_seq.call(null,this__8676.vec,this__8676.node,this__8676.i,(this__8676.off + 1));
if((s__8677 == null))
{return null;
} else
{return s__8677;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8678 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8679 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8680 = this;
return (this__8680.node[this__8680.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8681 = this;
if(((this__8681.off + 1) < this__8681.node.length))
{var s__8682 = cljs.core.chunked_seq.call(null,this__8681.vec,this__8681.node,this__8681.i,(this__8681.off + 1));
if((s__8682 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8682;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8683 = this;
var l__8684 = this__8683.node.length;
var s__8685 = ((((this__8683.i + l__8684) < cljs.core._count.call(null,this__8683.vec)))?cljs.core.chunked_seq.call(null,this__8683.vec,(this__8683.i + l__8684),0):null);
if((s__8685 == null))
{return null;
} else
{return s__8685;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8687 = this;
return cljs.core.chunked_seq.call(null,this__8687.vec,this__8687.node,this__8687.i,this__8687.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8688 = this;
return this__8688.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8689 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8689.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8690 = this;
return cljs.core.array_chunk.call(null,this__8690.node,this__8690.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8691 = this;
var l__8692 = this__8691.node.length;
var s__8693 = ((((this__8691.i + l__8692) < cljs.core._count.call(null,this__8691.vec)))?cljs.core.chunked_seq.call(null,this__8691.vec,(this__8691.i + l__8692),0):null);
if((s__8693 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8693;
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
var this__8696 = this;
var h__2198__auto____8697 = this__8696.__hash;
if(!((h__2198__auto____8697 == null)))
{return h__2198__auto____8697;
} else
{var h__2198__auto____8698 = cljs.core.hash_coll.call(null,coll);
this__8696.__hash = h__2198__auto____8698;
return h__2198__auto____8698;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8699 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8700 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8701 = this;
var v_pos__8702 = (this__8701.start + key);
return (new cljs.core.Subvec(this__8701.meta,cljs.core._assoc.call(null,this__8701.v,v_pos__8702,val),this__8701.start,((this__8701.end > (v_pos__8702 + 1)) ? this__8701.end : (v_pos__8702 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8728 = null;
var G__8728__2 = (function (this_sym8703,k){
var this__8705 = this;
var this_sym8703__8706 = this;
var coll__8707 = this_sym8703__8706;
return coll__8707.cljs$core$ILookup$_lookup$arity$2(coll__8707,k);
});
var G__8728__3 = (function (this_sym8704,k,not_found){
var this__8705 = this;
var this_sym8704__8708 = this;
var coll__8709 = this_sym8704__8708;
return coll__8709.cljs$core$ILookup$_lookup$arity$3(coll__8709,k,not_found);
});
G__8728 = function(this_sym8704,k,not_found){
switch(arguments.length){
case 2:
return G__8728__2.call(this,this_sym8704,k);
case 3:
return G__8728__3.call(this,this_sym8704,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8728;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8694,args8695){
var this__8710 = this;
return this_sym8694.call.apply(this_sym8694,[this_sym8694].concat(args8695.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8711 = this;
return (new cljs.core.Subvec(this__8711.meta,cljs.core._assoc_n.call(null,this__8711.v,this__8711.end,o),this__8711.start,(this__8711.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8712 = this;
var this__8713 = this;
return cljs.core.pr_str.call(null,this__8713);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8714 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8715 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8716 = this;
var subvec_seq__8717 = (function subvec_seq(i){
if((i === this__8716.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8716.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8717.call(null,this__8716.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8718 = this;
return (this__8718.end - this__8718.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8719 = this;
return cljs.core._nth.call(null,this__8719.v,(this__8719.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8720 = this;
if((this__8720.start === this__8720.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8720.meta,this__8720.v,this__8720.start,(this__8720.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8721 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8723 = this;
return (new cljs.core.Subvec(meta,this__8723.v,this__8723.start,this__8723.end,this__8723.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8724 = this;
return this__8724.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8725 = this;
return cljs.core._nth.call(null,this__8725.v,(this__8725.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8726 = this;
return cljs.core._nth.call(null,this__8726.v,(this__8726.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8727 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8727.meta);
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
var ret__8730 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8730,0,tl.length);
return ret__8730;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8734 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8735 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8734,subidx__8735,(((level === 5))?tail_node:(function (){var child__8736 = cljs.core.pv_aget.call(null,ret__8734,subidx__8735);
if(!((child__8736 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8736,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8734;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8741 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8742 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8743 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8741,subidx__8742));
if((function (){var and__3822__auto____8744 = (new_child__8743 == null);
if(and__3822__auto____8744)
{return (subidx__8742 === 0);
} else
{return and__3822__auto____8744;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8741,subidx__8742,new_child__8743);
return node__8741;
}
} else
{if((subidx__8742 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8741,subidx__8742,null);
return node__8741;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8749 = (0 <= i);
if(and__3822__auto____8749)
{return (i < tv.cnt);
} else
{return and__3822__auto____8749;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8750 = tv.root;
var node__8751 = root__8750;
var level__8752 = tv.shift;
while(true){
if((level__8752 > 0))
{{
var G__8753 = cljs.core.tv_ensure_editable.call(null,root__8750.edit,cljs.core.pv_aget.call(null,node__8751,((i >>> level__8752) & 31)));
var G__8754 = (level__8752 - 5);
node__8751 = G__8753;
level__8752 = G__8754;
continue;
}
} else
{return node__8751.arr;
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
var G__8794 = null;
var G__8794__2 = (function (this_sym8757,k){
var this__8759 = this;
var this_sym8757__8760 = this;
var coll__8761 = this_sym8757__8760;
return coll__8761.cljs$core$ILookup$_lookup$arity$2(coll__8761,k);
});
var G__8794__3 = (function (this_sym8758,k,not_found){
var this__8759 = this;
var this_sym8758__8762 = this;
var coll__8763 = this_sym8758__8762;
return coll__8763.cljs$core$ILookup$_lookup$arity$3(coll__8763,k,not_found);
});
G__8794 = function(this_sym8758,k,not_found){
switch(arguments.length){
case 2:
return G__8794__2.call(this,this_sym8758,k);
case 3:
return G__8794__3.call(this,this_sym8758,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8794;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8755,args8756){
var this__8764 = this;
return this_sym8755.call.apply(this_sym8755,[this_sym8755].concat(args8756.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8765 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8766 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8767 = this;
if(this__8767.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8768 = this;
if((function (){var and__3822__auto____8769 = (0 <= n);
if(and__3822__auto____8769)
{return (n < this__8768.cnt);
} else
{return and__3822__auto____8769;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8770 = this;
if(this__8770.root.edit)
{return this__8770.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8771 = this;
if(this__8771.root.edit)
{if((function (){var and__3822__auto____8772 = (0 <= n);
if(and__3822__auto____8772)
{return (n < this__8771.cnt);
} else
{return and__3822__auto____8772;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8771.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8777 = (function go(level,node){
var node__8775 = cljs.core.tv_ensure_editable.call(null,this__8771.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8775,(n & 31),val);
return node__8775;
} else
{var subidx__8776 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8775,subidx__8776,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8775,subidx__8776)));
return node__8775;
}
}).call(null,this__8771.shift,this__8771.root);
this__8771.root = new_root__8777;
return tcoll;
}
} else
{if((n === this__8771.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8771.cnt)].join('')));
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
var this__8778 = this;
if(this__8778.root.edit)
{if((this__8778.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8778.cnt))
{this__8778.cnt = 0;
return tcoll;
} else
{if((((this__8778.cnt - 1) & 31) > 0))
{this__8778.cnt = (this__8778.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8779 = cljs.core.editable_array_for.call(null,tcoll,(this__8778.cnt - 2));
var new_root__8781 = (function (){var nr__8780 = cljs.core.tv_pop_tail.call(null,tcoll,this__8778.shift,this__8778.root);
if(!((nr__8780 == null)))
{return nr__8780;
} else
{return (new cljs.core.VectorNode(this__8778.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8782 = (5 < this__8778.shift);
if(and__3822__auto____8782)
{return (cljs.core.pv_aget.call(null,new_root__8781,1) == null);
} else
{return and__3822__auto____8782;
}
})())
{var new_root__8783 = cljs.core.tv_ensure_editable.call(null,this__8778.root.edit,cljs.core.pv_aget.call(null,new_root__8781,0));
this__8778.root = new_root__8783;
this__8778.shift = (this__8778.shift - 5);
this__8778.cnt = (this__8778.cnt - 1);
this__8778.tail = new_tail__8779;
return tcoll;
} else
{this__8778.root = new_root__8781;
this__8778.cnt = (this__8778.cnt - 1);
this__8778.tail = new_tail__8779;
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
var this__8784 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8785 = this;
if(this__8785.root.edit)
{if(((this__8785.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8785.tail[(this__8785.cnt & 31)] = o);
this__8785.cnt = (this__8785.cnt + 1);
return tcoll;
} else
{var tail_node__8786 = (new cljs.core.VectorNode(this__8785.root.edit,this__8785.tail));
var new_tail__8787 = cljs.core.make_array.call(null,32);
(new_tail__8787[0] = o);
this__8785.tail = new_tail__8787;
if(((this__8785.cnt >>> 5) > (1 << this__8785.shift)))
{var new_root_array__8788 = cljs.core.make_array.call(null,32);
var new_shift__8789 = (this__8785.shift + 5);
(new_root_array__8788[0] = this__8785.root);
(new_root_array__8788[1] = cljs.core.new_path.call(null,this__8785.root.edit,this__8785.shift,tail_node__8786));
this__8785.root = (new cljs.core.VectorNode(this__8785.root.edit,new_root_array__8788));
this__8785.shift = new_shift__8789;
this__8785.cnt = (this__8785.cnt + 1);
return tcoll;
} else
{var new_root__8790 = cljs.core.tv_push_tail.call(null,tcoll,this__8785.shift,this__8785.root,tail_node__8786);
this__8785.root = new_root__8790;
this__8785.cnt = (this__8785.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8791 = this;
if(this__8791.root.edit)
{this__8791.root.edit = null;
var len__8792 = (this__8791.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8793 = cljs.core.make_array.call(null,len__8792);
cljs.core.array_copy.call(null,this__8791.tail,0,trimmed_tail__8793,0,len__8792);
return (new cljs.core.PersistentVector(null,this__8791.cnt,this__8791.shift,this__8791.root,trimmed_tail__8793,null));
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
var this__8795 = this;
var h__2198__auto____8796 = this__8795.__hash;
if(!((h__2198__auto____8796 == null)))
{return h__2198__auto____8796;
} else
{var h__2198__auto____8797 = cljs.core.hash_coll.call(null,coll);
this__8795.__hash = h__2198__auto____8797;
return h__2198__auto____8797;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8798 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8799 = this;
var this__8800 = this;
return cljs.core.pr_str.call(null,this__8800);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8801 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8802 = this;
return cljs.core._first.call(null,this__8802.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8803 = this;
var temp__3971__auto____8804 = cljs.core.next.call(null,this__8803.front);
if(temp__3971__auto____8804)
{var f1__8805 = temp__3971__auto____8804;
return (new cljs.core.PersistentQueueSeq(this__8803.meta,f1__8805,this__8803.rear,null));
} else
{if((this__8803.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8803.meta,this__8803.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8806 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8807 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8807.front,this__8807.rear,this__8807.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8808 = this;
return this__8808.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8809 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8809.meta);
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
var this__8810 = this;
var h__2198__auto____8811 = this__8810.__hash;
if(!((h__2198__auto____8811 == null)))
{return h__2198__auto____8811;
} else
{var h__2198__auto____8812 = cljs.core.hash_coll.call(null,coll);
this__8810.__hash = h__2198__auto____8812;
return h__2198__auto____8812;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8813 = this;
if(cljs.core.truth_(this__8813.front))
{return (new cljs.core.PersistentQueue(this__8813.meta,(this__8813.count + 1),this__8813.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8814 = this__8813.rear;
if(cljs.core.truth_(or__3824__auto____8814))
{return or__3824__auto____8814;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8813.meta,(this__8813.count + 1),cljs.core.conj.call(null,this__8813.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8815 = this;
var this__8816 = this;
return cljs.core.pr_str.call(null,this__8816);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8817 = this;
var rear__8818 = cljs.core.seq.call(null,this__8817.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8819 = this__8817.front;
if(cljs.core.truth_(or__3824__auto____8819))
{return or__3824__auto____8819;
} else
{return rear__8818;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8817.front,cljs.core.seq.call(null,rear__8818),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8820 = this;
return this__8820.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8821 = this;
return cljs.core._first.call(null,this__8821.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8822 = this;
if(cljs.core.truth_(this__8822.front))
{var temp__3971__auto____8823 = cljs.core.next.call(null,this__8822.front);
if(temp__3971__auto____8823)
{var f1__8824 = temp__3971__auto____8823;
return (new cljs.core.PersistentQueue(this__8822.meta,(this__8822.count - 1),f1__8824,this__8822.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8822.meta,(this__8822.count - 1),cljs.core.seq.call(null,this__8822.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8825 = this;
return cljs.core.first.call(null,this__8825.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8826 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8827 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8828 = this;
return (new cljs.core.PersistentQueue(meta,this__8828.count,this__8828.front,this__8828.rear,this__8828.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8829 = this;
return this__8829.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8830 = this;
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
var this__8831 = this;
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
var len__8834 = array.length;
var i__8835 = 0;
while(true){
if((i__8835 < len__8834))
{if((k === (array[i__8835])))
{return i__8835;
} else
{{
var G__8836 = (i__8835 + incr);
i__8835 = G__8836;
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
var a__8839 = cljs.core.hash.call(null,a);
var b__8840 = cljs.core.hash.call(null,b);
if((a__8839 < b__8840))
{return -1;
} else
{if((a__8839 > b__8840))
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
var ks__8848 = m.keys;
var len__8849 = ks__8848.length;
var so__8850 = m.strobj;
var out__8851 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8852 = 0;
var out__8853 = cljs.core.transient$.call(null,out__8851);
while(true){
if((i__8852 < len__8849))
{var k__8854 = (ks__8848[i__8852]);
{
var G__8855 = (i__8852 + 1);
var G__8856 = cljs.core.assoc_BANG_.call(null,out__8853,k__8854,(so__8850[k__8854]));
i__8852 = G__8855;
out__8853 = G__8856;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8853,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8862 = {};
var l__8863 = ks.length;
var i__8864 = 0;
while(true){
if((i__8864 < l__8863))
{var k__8865 = (ks[i__8864]);
(new_obj__8862[k__8865] = (obj[k__8865]));
{
var G__8866 = (i__8864 + 1);
i__8864 = G__8866;
continue;
}
} else
{}
break;
}
return new_obj__8862;
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
var this__8869 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8870 = this;
var h__2198__auto____8871 = this__8870.__hash;
if(!((h__2198__auto____8871 == null)))
{return h__2198__auto____8871;
} else
{var h__2198__auto____8872 = cljs.core.hash_imap.call(null,coll);
this__8870.__hash = h__2198__auto____8872;
return h__2198__auto____8872;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8873 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8874 = this;
if((function (){var and__3822__auto____8875 = goog.isString(k);
if(and__3822__auto____8875)
{return !((cljs.core.scan_array.call(null,1,k,this__8874.keys) == null));
} else
{return and__3822__auto____8875;
}
})())
{return (this__8874.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8876 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8877 = (this__8876.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8877)
{return or__3824__auto____8877;
} else
{return (this__8876.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8876.keys) == null)))
{var new_strobj__8878 = cljs.core.obj_clone.call(null,this__8876.strobj,this__8876.keys);
(new_strobj__8878[k] = v);
return (new cljs.core.ObjMap(this__8876.meta,this__8876.keys,new_strobj__8878,(this__8876.update_count + 1),null));
} else
{var new_strobj__8879 = cljs.core.obj_clone.call(null,this__8876.strobj,this__8876.keys);
var new_keys__8880 = this__8876.keys.slice();
(new_strobj__8879[k] = v);
new_keys__8880.push(k);
return (new cljs.core.ObjMap(this__8876.meta,new_keys__8880,new_strobj__8879,(this__8876.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8881 = this;
if((function (){var and__3822__auto____8882 = goog.isString(k);
if(and__3822__auto____8882)
{return !((cljs.core.scan_array.call(null,1,k,this__8881.keys) == null));
} else
{return and__3822__auto____8882;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8904 = null;
var G__8904__2 = (function (this_sym8883,k){
var this__8885 = this;
var this_sym8883__8886 = this;
var coll__8887 = this_sym8883__8886;
return coll__8887.cljs$core$ILookup$_lookup$arity$2(coll__8887,k);
});
var G__8904__3 = (function (this_sym8884,k,not_found){
var this__8885 = this;
var this_sym8884__8888 = this;
var coll__8889 = this_sym8884__8888;
return coll__8889.cljs$core$ILookup$_lookup$arity$3(coll__8889,k,not_found);
});
G__8904 = function(this_sym8884,k,not_found){
switch(arguments.length){
case 2:
return G__8904__2.call(this,this_sym8884,k);
case 3:
return G__8904__3.call(this,this_sym8884,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8904;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8867,args8868){
var this__8890 = this;
return this_sym8867.call.apply(this_sym8867,[this_sym8867].concat(args8868.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8891 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8892 = this;
var this__8893 = this;
return cljs.core.pr_str.call(null,this__8893);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8894 = this;
if((this__8894.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8857_SHARP_){
return cljs.core.vector.call(null,p1__8857_SHARP_,(this__8894.strobj[p1__8857_SHARP_]));
}),this__8894.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8895 = this;
return this__8895.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8896 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8897 = this;
return (new cljs.core.ObjMap(meta,this__8897.keys,this__8897.strobj,this__8897.update_count,this__8897.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8898 = this;
return this__8898.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8899 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8899.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8900 = this;
if((function (){var and__3822__auto____8901 = goog.isString(k);
if(and__3822__auto____8901)
{return !((cljs.core.scan_array.call(null,1,k,this__8900.keys) == null));
} else
{return and__3822__auto____8901;
}
})())
{var new_keys__8902 = this__8900.keys.slice();
var new_strobj__8903 = cljs.core.obj_clone.call(null,this__8900.strobj,this__8900.keys);
new_keys__8902.splice(cljs.core.scan_array.call(null,1,k,new_keys__8902),1);
cljs.core.js_delete.call(null,new_strobj__8903,k);
return (new cljs.core.ObjMap(this__8900.meta,new_keys__8902,new_strobj__8903,(this__8900.update_count + 1),null));
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
var this__8908 = this;
var h__2198__auto____8909 = this__8908.__hash;
if(!((h__2198__auto____8909 == null)))
{return h__2198__auto____8909;
} else
{var h__2198__auto____8910 = cljs.core.hash_imap.call(null,coll);
this__8908.__hash = h__2198__auto____8910;
return h__2198__auto____8910;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8911 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8912 = this;
var bucket__8913 = (this__8912.hashobj[cljs.core.hash.call(null,k)]);
var i__8914 = (cljs.core.truth_(bucket__8913)?cljs.core.scan_array.call(null,2,k,bucket__8913):null);
if(cljs.core.truth_(i__8914))
{return (bucket__8913[(i__8914 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8915 = this;
var h__8916 = cljs.core.hash.call(null,k);
var bucket__8917 = (this__8915.hashobj[h__8916]);
if(cljs.core.truth_(bucket__8917))
{var new_bucket__8918 = bucket__8917.slice();
var new_hashobj__8919 = goog.object.clone(this__8915.hashobj);
(new_hashobj__8919[h__8916] = new_bucket__8918);
var temp__3971__auto____8920 = cljs.core.scan_array.call(null,2,k,new_bucket__8918);
if(cljs.core.truth_(temp__3971__auto____8920))
{var i__8921 = temp__3971__auto____8920;
(new_bucket__8918[(i__8921 + 1)] = v);
return (new cljs.core.HashMap(this__8915.meta,this__8915.count,new_hashobj__8919,null));
} else
{new_bucket__8918.push(k,v);
return (new cljs.core.HashMap(this__8915.meta,(this__8915.count + 1),new_hashobj__8919,null));
}
} else
{var new_hashobj__8922 = goog.object.clone(this__8915.hashobj);
(new_hashobj__8922[h__8916] = [k,v]);
return (new cljs.core.HashMap(this__8915.meta,(this__8915.count + 1),new_hashobj__8922,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8923 = this;
var bucket__8924 = (this__8923.hashobj[cljs.core.hash.call(null,k)]);
var i__8925 = (cljs.core.truth_(bucket__8924)?cljs.core.scan_array.call(null,2,k,bucket__8924):null);
if(cljs.core.truth_(i__8925))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8950 = null;
var G__8950__2 = (function (this_sym8926,k){
var this__8928 = this;
var this_sym8926__8929 = this;
var coll__8930 = this_sym8926__8929;
return coll__8930.cljs$core$ILookup$_lookup$arity$2(coll__8930,k);
});
var G__8950__3 = (function (this_sym8927,k,not_found){
var this__8928 = this;
var this_sym8927__8931 = this;
var coll__8932 = this_sym8927__8931;
return coll__8932.cljs$core$ILookup$_lookup$arity$3(coll__8932,k,not_found);
});
G__8950 = function(this_sym8927,k,not_found){
switch(arguments.length){
case 2:
return G__8950__2.call(this,this_sym8927,k);
case 3:
return G__8950__3.call(this,this_sym8927,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8950;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8906,args8907){
var this__8933 = this;
return this_sym8906.call.apply(this_sym8906,[this_sym8906].concat(args8907.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8934 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8935 = this;
var this__8936 = this;
return cljs.core.pr_str.call(null,this__8936);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8937 = this;
if((this__8937.count > 0))
{var hashes__8938 = cljs.core.js_keys.call(null,this__8937.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8905_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8937.hashobj[p1__8905_SHARP_])));
}),hashes__8938);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8939 = this;
return this__8939.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8940 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8941 = this;
return (new cljs.core.HashMap(meta,this__8941.count,this__8941.hashobj,this__8941.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8942 = this;
return this__8942.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8943 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8943.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8944 = this;
var h__8945 = cljs.core.hash.call(null,k);
var bucket__8946 = (this__8944.hashobj[h__8945]);
var i__8947 = (cljs.core.truth_(bucket__8946)?cljs.core.scan_array.call(null,2,k,bucket__8946):null);
if(cljs.core.not.call(null,i__8947))
{return coll;
} else
{var new_hashobj__8948 = goog.object.clone(this__8944.hashobj);
if((3 > bucket__8946.length))
{cljs.core.js_delete.call(null,new_hashobj__8948,h__8945);
} else
{var new_bucket__8949 = bucket__8946.slice();
new_bucket__8949.splice(i__8947,2);
(new_hashobj__8948[h__8945] = new_bucket__8949);
}
return (new cljs.core.HashMap(this__8944.meta,(this__8944.count - 1),new_hashobj__8948,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8951 = ks.length;
var i__8952 = 0;
var out__8953 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8952 < len__8951))
{{
var G__8954 = (i__8952 + 1);
var G__8955 = cljs.core.assoc.call(null,out__8953,(ks[i__8952]),(vs[i__8952]));
i__8952 = G__8954;
out__8953 = G__8955;
continue;
}
} else
{return out__8953;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8959 = m.arr;
var len__8960 = arr__8959.length;
var i__8961 = 0;
while(true){
if((len__8960 <= i__8961))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8959[i__8961]),k))
{return i__8961;
} else
{if("\uFDD0'else")
{{
var G__8962 = (i__8961 + 2);
i__8961 = G__8962;
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
var this__8965 = this;
return (new cljs.core.TransientArrayMap({},this__8965.arr.length,this__8965.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8966 = this;
var h__2198__auto____8967 = this__8966.__hash;
if(!((h__2198__auto____8967 == null)))
{return h__2198__auto____8967;
} else
{var h__2198__auto____8968 = cljs.core.hash_imap.call(null,coll);
this__8966.__hash = h__2198__auto____8968;
return h__2198__auto____8968;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8969 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8970 = this;
var idx__8971 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8971 === -1))
{return not_found;
} else
{return (this__8970.arr[(idx__8971 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8972 = this;
var idx__8973 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8973 === -1))
{if((this__8972.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8972.meta,(this__8972.cnt + 1),(function (){var G__8974__8975 = this__8972.arr.slice();
G__8974__8975.push(k);
G__8974__8975.push(v);
return G__8974__8975;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8972.arr[(idx__8973 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8972.meta,this__8972.cnt,(function (){var G__8976__8977 = this__8972.arr.slice();
(G__8976__8977[(idx__8973 + 1)] = v);
return G__8976__8977;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8978 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9010 = null;
var G__9010__2 = (function (this_sym8979,k){
var this__8981 = this;
var this_sym8979__8982 = this;
var coll__8983 = this_sym8979__8982;
return coll__8983.cljs$core$ILookup$_lookup$arity$2(coll__8983,k);
});
var G__9010__3 = (function (this_sym8980,k,not_found){
var this__8981 = this;
var this_sym8980__8984 = this;
var coll__8985 = this_sym8980__8984;
return coll__8985.cljs$core$ILookup$_lookup$arity$3(coll__8985,k,not_found);
});
G__9010 = function(this_sym8980,k,not_found){
switch(arguments.length){
case 2:
return G__9010__2.call(this,this_sym8980,k);
case 3:
return G__9010__3.call(this,this_sym8980,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9010;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8963,args8964){
var this__8986 = this;
return this_sym8963.call.apply(this_sym8963,[this_sym8963].concat(args8964.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8987 = this;
var len__8988 = this__8987.arr.length;
var i__8989 = 0;
var init__8990 = init;
while(true){
if((i__8989 < len__8988))
{var init__8991 = f.call(null,init__8990,(this__8987.arr[i__8989]),(this__8987.arr[(i__8989 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8991))
{return cljs.core.deref.call(null,init__8991);
} else
{{
var G__9011 = (i__8989 + 2);
var G__9012 = init__8991;
i__8989 = G__9011;
init__8990 = G__9012;
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
var this__8992 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8993 = this;
var this__8994 = this;
return cljs.core.pr_str.call(null,this__8994);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8995 = this;
if((this__8995.cnt > 0))
{var len__8996 = this__8995.arr.length;
var array_map_seq__8997 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8996))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8995.arr[i]),(this__8995.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8997.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8998 = this;
return this__8998.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8999 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9000 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9000.cnt,this__9000.arr,this__9000.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9001 = this;
return this__9001.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9002 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9002.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9003 = this;
var idx__9004 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9004 >= 0))
{var len__9005 = this__9003.arr.length;
var new_len__9006 = (len__9005 - 2);
if((new_len__9006 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9007 = cljs.core.make_array.call(null,new_len__9006);
var s__9008 = 0;
var d__9009 = 0;
while(true){
if((s__9008 >= len__9005))
{return (new cljs.core.PersistentArrayMap(this__9003.meta,(this__9003.cnt - 1),new_arr__9007,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9003.arr[s__9008])))
{{
var G__9013 = (s__9008 + 2);
var G__9014 = d__9009;
s__9008 = G__9013;
d__9009 = G__9014;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9007[d__9009] = (this__9003.arr[s__9008]));
(new_arr__9007[(d__9009 + 1)] = (this__9003.arr[(s__9008 + 1)]));
{
var G__9015 = (s__9008 + 2);
var G__9016 = (d__9009 + 2);
s__9008 = G__9015;
d__9009 = G__9016;
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
var len__9017 = cljs.core.count.call(null,ks);
var i__9018 = 0;
var out__9019 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9018 < len__9017))
{{
var G__9020 = (i__9018 + 1);
var G__9021 = cljs.core.assoc_BANG_.call(null,out__9019,(ks[i__9018]),(vs[i__9018]));
i__9018 = G__9020;
out__9019 = G__9021;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9019);
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
var this__9022 = this;
if(cljs.core.truth_(this__9022.editable_QMARK_))
{var idx__9023 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9023 >= 0))
{(this__9022.arr[idx__9023] = (this__9022.arr[(this__9022.len - 2)]));
(this__9022.arr[(idx__9023 + 1)] = (this__9022.arr[(this__9022.len - 1)]));
var G__9024__9025 = this__9022.arr;
G__9024__9025.pop();
G__9024__9025.pop();
G__9024__9025;
this__9022.len = (this__9022.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9026 = this;
if(cljs.core.truth_(this__9026.editable_QMARK_))
{var idx__9027 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9027 === -1))
{if(((this__9026.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9026.len = (this__9026.len + 2);
this__9026.arr.push(key);
this__9026.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9026.len,this__9026.arr),key,val);
}
} else
{if((val === (this__9026.arr[(idx__9027 + 1)])))
{return tcoll;
} else
{(this__9026.arr[(idx__9027 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9028 = this;
if(cljs.core.truth_(this__9028.editable_QMARK_))
{if((function (){var G__9029__9030 = o;
if(G__9029__9030)
{if((function (){var or__3824__auto____9031 = (G__9029__9030.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9031)
{return or__3824__auto____9031;
} else
{return G__9029__9030.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9029__9030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9029__9030);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9029__9030);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9032 = cljs.core.seq.call(null,o);
var tcoll__9033 = tcoll;
while(true){
var temp__3971__auto____9034 = cljs.core.first.call(null,es__9032);
if(cljs.core.truth_(temp__3971__auto____9034))
{var e__9035 = temp__3971__auto____9034;
{
var G__9041 = cljs.core.next.call(null,es__9032);
var G__9042 = tcoll__9033.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9033,cljs.core.key.call(null,e__9035),cljs.core.val.call(null,e__9035));
es__9032 = G__9041;
tcoll__9033 = G__9042;
continue;
}
} else
{return tcoll__9033;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9036 = this;
if(cljs.core.truth_(this__9036.editable_QMARK_))
{this__9036.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9036.len,2),this__9036.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9037 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9038 = this;
if(cljs.core.truth_(this__9038.editable_QMARK_))
{var idx__9039 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9039 === -1))
{return not_found;
} else
{return (this__9038.arr[(idx__9039 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9040 = this;
if(cljs.core.truth_(this__9040.editable_QMARK_))
{return cljs.core.quot.call(null,this__9040.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9045 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9046 = 0;
while(true){
if((i__9046 < len))
{{
var G__9047 = cljs.core.assoc_BANG_.call(null,out__9045,(arr[i__9046]),(arr[(i__9046 + 1)]));
var G__9048 = (i__9046 + 2);
out__9045 = G__9047;
i__9046 = G__9048;
continue;
}
} else
{return out__9045;
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
var G__9053__9054 = arr.slice();
(G__9053__9054[i] = a);
return G__9053__9054;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9055__9056 = arr.slice();
(G__9055__9056[i] = a);
(G__9055__9056[j] = b);
return G__9055__9056;
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
var new_arr__9058 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9058,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9058,(2 * i),(new_arr__9058.length - (2 * i)));
return new_arr__9058;
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
var editable__9061 = inode.ensure_editable(edit);
(editable__9061.arr[i] = a);
return editable__9061;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9062 = inode.ensure_editable(edit);
(editable__9062.arr[i] = a);
(editable__9062.arr[j] = b);
return editable__9062;
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
var len__9069 = arr.length;
var i__9070 = 0;
var init__9071 = init;
while(true){
if((i__9070 < len__9069))
{var init__9074 = (function (){var k__9072 = (arr[i__9070]);
if(!((k__9072 == null)))
{return f.call(null,init__9071,k__9072,(arr[(i__9070 + 1)]));
} else
{var node__9073 = (arr[(i__9070 + 1)]);
if(!((node__9073 == null)))
{return node__9073.kv_reduce(f,init__9071);
} else
{return init__9071;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9074))
{return cljs.core.deref.call(null,init__9074);
} else
{{
var G__9075 = (i__9070 + 2);
var G__9076 = init__9074;
i__9070 = G__9075;
init__9071 = G__9076;
continue;
}
}
} else
{return init__9071;
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
var this__9077 = this;
var inode__9078 = this;
if((this__9077.bitmap === bit))
{return null;
} else
{var editable__9079 = inode__9078.ensure_editable(e);
var earr__9080 = editable__9079.arr;
var len__9081 = earr__9080.length;
editable__9079.bitmap = (bit ^ editable__9079.bitmap);
cljs.core.array_copy.call(null,earr__9080,(2 * (i + 1)),earr__9080,(2 * i),(len__9081 - (2 * (i + 1))));
(earr__9080[(len__9081 - 2)] = null);
(earr__9080[(len__9081 - 1)] = null);
return editable__9079;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9082 = this;
var inode__9083 = this;
var bit__9084 = (1 << ((hash >>> shift) & 0x01f));
var idx__9085 = cljs.core.bitmap_indexed_node_index.call(null,this__9082.bitmap,bit__9084);
if(((this__9082.bitmap & bit__9084) === 0))
{var n__9086 = cljs.core.bit_count.call(null,this__9082.bitmap);
if(((2 * n__9086) < this__9082.arr.length))
{var editable__9087 = inode__9083.ensure_editable(edit);
var earr__9088 = editable__9087.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9088,(2 * idx__9085),earr__9088,(2 * (idx__9085 + 1)),(2 * (n__9086 - idx__9085)));
(earr__9088[(2 * idx__9085)] = key);
(earr__9088[((2 * idx__9085) + 1)] = val);
editable__9087.bitmap = (editable__9087.bitmap | bit__9084);
return editable__9087;
} else
{if((n__9086 >= 16))
{var nodes__9089 = cljs.core.make_array.call(null,32);
var jdx__9090 = ((hash >>> shift) & 0x01f);
(nodes__9089[jdx__9090] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9091 = 0;
var j__9092 = 0;
while(true){
if((i__9091 < 32))
{if((((this__9082.bitmap >>> i__9091) & 1) === 0))
{{
var G__9145 = (i__9091 + 1);
var G__9146 = j__9092;
i__9091 = G__9145;
j__9092 = G__9146;
continue;
}
} else
{(nodes__9089[i__9091] = ((!(((this__9082.arr[j__9092]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9082.arr[j__9092])),(this__9082.arr[j__9092]),(this__9082.arr[(j__9092 + 1)]),added_leaf_QMARK_):(this__9082.arr[(j__9092 + 1)])));
{
var G__9147 = (i__9091 + 1);
var G__9148 = (j__9092 + 2);
i__9091 = G__9147;
j__9092 = G__9148;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9086 + 1),nodes__9089));
} else
{if("\uFDD0'else")
{var new_arr__9093 = cljs.core.make_array.call(null,(2 * (n__9086 + 4)));
cljs.core.array_copy.call(null,this__9082.arr,0,new_arr__9093,0,(2 * idx__9085));
(new_arr__9093[(2 * idx__9085)] = key);
(new_arr__9093[((2 * idx__9085) + 1)] = val);
cljs.core.array_copy.call(null,this__9082.arr,(2 * idx__9085),new_arr__9093,(2 * (idx__9085 + 1)),(2 * (n__9086 - idx__9085)));
added_leaf_QMARK_.val = true;
var editable__9094 = inode__9083.ensure_editable(edit);
editable__9094.arr = new_arr__9093;
editable__9094.bitmap = (editable__9094.bitmap | bit__9084);
return editable__9094;
} else
{return null;
}
}
}
} else
{var key_or_nil__9095 = (this__9082.arr[(2 * idx__9085)]);
var val_or_node__9096 = (this__9082.arr[((2 * idx__9085) + 1)]);
if((key_or_nil__9095 == null))
{var n__9097 = val_or_node__9096.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9097 === val_or_node__9096))
{return inode__9083;
} else
{return cljs.core.edit_and_set.call(null,inode__9083,edit,((2 * idx__9085) + 1),n__9097);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9095))
{if((val === val_or_node__9096))
{return inode__9083;
} else
{return cljs.core.edit_and_set.call(null,inode__9083,edit,((2 * idx__9085) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9083,edit,(2 * idx__9085),null,((2 * idx__9085) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9095,val_or_node__9096,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9098 = this;
var inode__9099 = this;
return cljs.core.create_inode_seq.call(null,this__9098.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9100 = this;
var inode__9101 = this;
var bit__9102 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9100.bitmap & bit__9102) === 0))
{return inode__9101;
} else
{var idx__9103 = cljs.core.bitmap_indexed_node_index.call(null,this__9100.bitmap,bit__9102);
var key_or_nil__9104 = (this__9100.arr[(2 * idx__9103)]);
var val_or_node__9105 = (this__9100.arr[((2 * idx__9103) + 1)]);
if((key_or_nil__9104 == null))
{var n__9106 = val_or_node__9105.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9106 === val_or_node__9105))
{return inode__9101;
} else
{if(!((n__9106 == null)))
{return cljs.core.edit_and_set.call(null,inode__9101,edit,((2 * idx__9103) + 1),n__9106);
} else
{if((this__9100.bitmap === bit__9102))
{return null;
} else
{if("\uFDD0'else")
{return inode__9101.edit_and_remove_pair(edit,bit__9102,idx__9103);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9104))
{(removed_leaf_QMARK_[0] = true);
return inode__9101.edit_and_remove_pair(edit,bit__9102,idx__9103);
} else
{if("\uFDD0'else")
{return inode__9101;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9107 = this;
var inode__9108 = this;
if((e === this__9107.edit))
{return inode__9108;
} else
{var n__9109 = cljs.core.bit_count.call(null,this__9107.bitmap);
var new_arr__9110 = cljs.core.make_array.call(null,(((n__9109 < 0))?4:(2 * (n__9109 + 1))));
cljs.core.array_copy.call(null,this__9107.arr,0,new_arr__9110,0,(2 * n__9109));
return (new cljs.core.BitmapIndexedNode(e,this__9107.bitmap,new_arr__9110));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9111 = this;
var inode__9112 = this;
return cljs.core.inode_kv_reduce.call(null,this__9111.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9113 = this;
var inode__9114 = this;
var bit__9115 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9113.bitmap & bit__9115) === 0))
{return not_found;
} else
{var idx__9116 = cljs.core.bitmap_indexed_node_index.call(null,this__9113.bitmap,bit__9115);
var key_or_nil__9117 = (this__9113.arr[(2 * idx__9116)]);
var val_or_node__9118 = (this__9113.arr[((2 * idx__9116) + 1)]);
if((key_or_nil__9117 == null))
{return val_or_node__9118.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9117))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9117,val_or_node__9118], true);
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
var this__9119 = this;
var inode__9120 = this;
var bit__9121 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9119.bitmap & bit__9121) === 0))
{return inode__9120;
} else
{var idx__9122 = cljs.core.bitmap_indexed_node_index.call(null,this__9119.bitmap,bit__9121);
var key_or_nil__9123 = (this__9119.arr[(2 * idx__9122)]);
var val_or_node__9124 = (this__9119.arr[((2 * idx__9122) + 1)]);
if((key_or_nil__9123 == null))
{var n__9125 = val_or_node__9124.inode_without((shift + 5),hash,key);
if((n__9125 === val_or_node__9124))
{return inode__9120;
} else
{if(!((n__9125 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9119.bitmap,cljs.core.clone_and_set.call(null,this__9119.arr,((2 * idx__9122) + 1),n__9125)));
} else
{if((this__9119.bitmap === bit__9121))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9119.bitmap ^ bit__9121),cljs.core.remove_pair.call(null,this__9119.arr,idx__9122)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9123))
{return (new cljs.core.BitmapIndexedNode(null,(this__9119.bitmap ^ bit__9121),cljs.core.remove_pair.call(null,this__9119.arr,idx__9122)));
} else
{if("\uFDD0'else")
{return inode__9120;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9126 = this;
var inode__9127 = this;
var bit__9128 = (1 << ((hash >>> shift) & 0x01f));
var idx__9129 = cljs.core.bitmap_indexed_node_index.call(null,this__9126.bitmap,bit__9128);
if(((this__9126.bitmap & bit__9128) === 0))
{var n__9130 = cljs.core.bit_count.call(null,this__9126.bitmap);
if((n__9130 >= 16))
{var nodes__9131 = cljs.core.make_array.call(null,32);
var jdx__9132 = ((hash >>> shift) & 0x01f);
(nodes__9131[jdx__9132] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9133 = 0;
var j__9134 = 0;
while(true){
if((i__9133 < 32))
{if((((this__9126.bitmap >>> i__9133) & 1) === 0))
{{
var G__9149 = (i__9133 + 1);
var G__9150 = j__9134;
i__9133 = G__9149;
j__9134 = G__9150;
continue;
}
} else
{(nodes__9131[i__9133] = ((!(((this__9126.arr[j__9134]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9126.arr[j__9134])),(this__9126.arr[j__9134]),(this__9126.arr[(j__9134 + 1)]),added_leaf_QMARK_):(this__9126.arr[(j__9134 + 1)])));
{
var G__9151 = (i__9133 + 1);
var G__9152 = (j__9134 + 2);
i__9133 = G__9151;
j__9134 = G__9152;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9130 + 1),nodes__9131));
} else
{var new_arr__9135 = cljs.core.make_array.call(null,(2 * (n__9130 + 1)));
cljs.core.array_copy.call(null,this__9126.arr,0,new_arr__9135,0,(2 * idx__9129));
(new_arr__9135[(2 * idx__9129)] = key);
(new_arr__9135[((2 * idx__9129) + 1)] = val);
cljs.core.array_copy.call(null,this__9126.arr,(2 * idx__9129),new_arr__9135,(2 * (idx__9129 + 1)),(2 * (n__9130 - idx__9129)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9126.bitmap | bit__9128),new_arr__9135));
}
} else
{var key_or_nil__9136 = (this__9126.arr[(2 * idx__9129)]);
var val_or_node__9137 = (this__9126.arr[((2 * idx__9129) + 1)]);
if((key_or_nil__9136 == null))
{var n__9138 = val_or_node__9137.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9138 === val_or_node__9137))
{return inode__9127;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9126.bitmap,cljs.core.clone_and_set.call(null,this__9126.arr,((2 * idx__9129) + 1),n__9138)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9136))
{if((val === val_or_node__9137))
{return inode__9127;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9126.bitmap,cljs.core.clone_and_set.call(null,this__9126.arr,((2 * idx__9129) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9126.bitmap,cljs.core.clone_and_set.call(null,this__9126.arr,(2 * idx__9129),null,((2 * idx__9129) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9136,val_or_node__9137,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9139 = this;
var inode__9140 = this;
var bit__9141 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9139.bitmap & bit__9141) === 0))
{return not_found;
} else
{var idx__9142 = cljs.core.bitmap_indexed_node_index.call(null,this__9139.bitmap,bit__9141);
var key_or_nil__9143 = (this__9139.arr[(2 * idx__9142)]);
var val_or_node__9144 = (this__9139.arr[((2 * idx__9142) + 1)]);
if((key_or_nil__9143 == null))
{return val_or_node__9144.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9143))
{return val_or_node__9144;
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
var arr__9160 = array_node.arr;
var len__9161 = (2 * (array_node.cnt - 1));
var new_arr__9162 = cljs.core.make_array.call(null,len__9161);
var i__9163 = 0;
var j__9164 = 1;
var bitmap__9165 = 0;
while(true){
if((i__9163 < len__9161))
{if((function (){var and__3822__auto____9166 = !((i__9163 === idx));
if(and__3822__auto____9166)
{return !(((arr__9160[i__9163]) == null));
} else
{return and__3822__auto____9166;
}
})())
{(new_arr__9162[j__9164] = (arr__9160[i__9163]));
{
var G__9167 = (i__9163 + 1);
var G__9168 = (j__9164 + 2);
var G__9169 = (bitmap__9165 | (1 << i__9163));
i__9163 = G__9167;
j__9164 = G__9168;
bitmap__9165 = G__9169;
continue;
}
} else
{{
var G__9170 = (i__9163 + 1);
var G__9171 = j__9164;
var G__9172 = bitmap__9165;
i__9163 = G__9170;
j__9164 = G__9171;
bitmap__9165 = G__9172;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9165,new_arr__9162));
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
var this__9173 = this;
var inode__9174 = this;
var idx__9175 = ((hash >>> shift) & 0x01f);
var node__9176 = (this__9173.arr[idx__9175]);
if((node__9176 == null))
{var editable__9177 = cljs.core.edit_and_set.call(null,inode__9174,edit,idx__9175,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9177.cnt = (editable__9177.cnt + 1);
return editable__9177;
} else
{var n__9178 = node__9176.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9178 === node__9176))
{return inode__9174;
} else
{return cljs.core.edit_and_set.call(null,inode__9174,edit,idx__9175,n__9178);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9179 = this;
var inode__9180 = this;
return cljs.core.create_array_node_seq.call(null,this__9179.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9181 = this;
var inode__9182 = this;
var idx__9183 = ((hash >>> shift) & 0x01f);
var node__9184 = (this__9181.arr[idx__9183]);
if((node__9184 == null))
{return inode__9182;
} else
{var n__9185 = node__9184.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9185 === node__9184))
{return inode__9182;
} else
{if((n__9185 == null))
{if((this__9181.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9182,edit,idx__9183);
} else
{var editable__9186 = cljs.core.edit_and_set.call(null,inode__9182,edit,idx__9183,n__9185);
editable__9186.cnt = (editable__9186.cnt - 1);
return editable__9186;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9182,edit,idx__9183,n__9185);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9187 = this;
var inode__9188 = this;
if((e === this__9187.edit))
{return inode__9188;
} else
{return (new cljs.core.ArrayNode(e,this__9187.cnt,this__9187.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9189 = this;
var inode__9190 = this;
var len__9191 = this__9189.arr.length;
var i__9192 = 0;
var init__9193 = init;
while(true){
if((i__9192 < len__9191))
{var node__9194 = (this__9189.arr[i__9192]);
if(!((node__9194 == null)))
{var init__9195 = node__9194.kv_reduce(f,init__9193);
if(cljs.core.reduced_QMARK_.call(null,init__9195))
{return cljs.core.deref.call(null,init__9195);
} else
{{
var G__9214 = (i__9192 + 1);
var G__9215 = init__9195;
i__9192 = G__9214;
init__9193 = G__9215;
continue;
}
}
} else
{return null;
}
} else
{return init__9193;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9196 = this;
var inode__9197 = this;
var idx__9198 = ((hash >>> shift) & 0x01f);
var node__9199 = (this__9196.arr[idx__9198]);
if(!((node__9199 == null)))
{return node__9199.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9200 = this;
var inode__9201 = this;
var idx__9202 = ((hash >>> shift) & 0x01f);
var node__9203 = (this__9200.arr[idx__9202]);
if(!((node__9203 == null)))
{var n__9204 = node__9203.inode_without((shift + 5),hash,key);
if((n__9204 === node__9203))
{return inode__9201;
} else
{if((n__9204 == null))
{if((this__9200.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9201,null,idx__9202);
} else
{return (new cljs.core.ArrayNode(null,(this__9200.cnt - 1),cljs.core.clone_and_set.call(null,this__9200.arr,idx__9202,n__9204)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9200.cnt,cljs.core.clone_and_set.call(null,this__9200.arr,idx__9202,n__9204)));
} else
{return null;
}
}
}
} else
{return inode__9201;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9205 = this;
var inode__9206 = this;
var idx__9207 = ((hash >>> shift) & 0x01f);
var node__9208 = (this__9205.arr[idx__9207]);
if((node__9208 == null))
{return (new cljs.core.ArrayNode(null,(this__9205.cnt + 1),cljs.core.clone_and_set.call(null,this__9205.arr,idx__9207,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9209 = node__9208.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9209 === node__9208))
{return inode__9206;
} else
{return (new cljs.core.ArrayNode(null,this__9205.cnt,cljs.core.clone_and_set.call(null,this__9205.arr,idx__9207,n__9209)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9210 = this;
var inode__9211 = this;
var idx__9212 = ((hash >>> shift) & 0x01f);
var node__9213 = (this__9210.arr[idx__9212]);
if(!((node__9213 == null)))
{return node__9213.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9218 = (2 * cnt);
var i__9219 = 0;
while(true){
if((i__9219 < lim__9218))
{if(cljs.core.key_test.call(null,key,(arr[i__9219])))
{return i__9219;
} else
{{
var G__9220 = (i__9219 + 2);
i__9219 = G__9220;
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
var this__9221 = this;
var inode__9222 = this;
if((hash === this__9221.collision_hash))
{var idx__9223 = cljs.core.hash_collision_node_find_index.call(null,this__9221.arr,this__9221.cnt,key);
if((idx__9223 === -1))
{if((this__9221.arr.length > (2 * this__9221.cnt)))
{var editable__9224 = cljs.core.edit_and_set.call(null,inode__9222,edit,(2 * this__9221.cnt),key,((2 * this__9221.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9224.cnt = (editable__9224.cnt + 1);
return editable__9224;
} else
{var len__9225 = this__9221.arr.length;
var new_arr__9226 = cljs.core.make_array.call(null,(len__9225 + 2));
cljs.core.array_copy.call(null,this__9221.arr,0,new_arr__9226,0,len__9225);
(new_arr__9226[len__9225] = key);
(new_arr__9226[(len__9225 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9222.ensure_editable_array(edit,(this__9221.cnt + 1),new_arr__9226);
}
} else
{if(((this__9221.arr[(idx__9223 + 1)]) === val))
{return inode__9222;
} else
{return cljs.core.edit_and_set.call(null,inode__9222,edit,(idx__9223 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9221.collision_hash >>> shift) & 0x01f)),[null,inode__9222,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9227 = this;
var inode__9228 = this;
return cljs.core.create_inode_seq.call(null,this__9227.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9229 = this;
var inode__9230 = this;
var idx__9231 = cljs.core.hash_collision_node_find_index.call(null,this__9229.arr,this__9229.cnt,key);
if((idx__9231 === -1))
{return inode__9230;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9229.cnt === 1))
{return null;
} else
{var editable__9232 = inode__9230.ensure_editable(edit);
var earr__9233 = editable__9232.arr;
(earr__9233[idx__9231] = (earr__9233[((2 * this__9229.cnt) - 2)]));
(earr__9233[(idx__9231 + 1)] = (earr__9233[((2 * this__9229.cnt) - 1)]));
(earr__9233[((2 * this__9229.cnt) - 1)] = null);
(earr__9233[((2 * this__9229.cnt) - 2)] = null);
editable__9232.cnt = (editable__9232.cnt - 1);
return editable__9232;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9234 = this;
var inode__9235 = this;
if((e === this__9234.edit))
{return inode__9235;
} else
{var new_arr__9236 = cljs.core.make_array.call(null,(2 * (this__9234.cnt + 1)));
cljs.core.array_copy.call(null,this__9234.arr,0,new_arr__9236,0,(2 * this__9234.cnt));
return (new cljs.core.HashCollisionNode(e,this__9234.collision_hash,this__9234.cnt,new_arr__9236));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9237 = this;
var inode__9238 = this;
return cljs.core.inode_kv_reduce.call(null,this__9237.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9239 = this;
var inode__9240 = this;
var idx__9241 = cljs.core.hash_collision_node_find_index.call(null,this__9239.arr,this__9239.cnt,key);
if((idx__9241 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9239.arr[idx__9241])))
{return cljs.core.PersistentVector.fromArray([(this__9239.arr[idx__9241]),(this__9239.arr[(idx__9241 + 1)])], true);
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
var this__9242 = this;
var inode__9243 = this;
var idx__9244 = cljs.core.hash_collision_node_find_index.call(null,this__9242.arr,this__9242.cnt,key);
if((idx__9244 === -1))
{return inode__9243;
} else
{if((this__9242.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9242.collision_hash,(this__9242.cnt - 1),cljs.core.remove_pair.call(null,this__9242.arr,cljs.core.quot.call(null,idx__9244,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9245 = this;
var inode__9246 = this;
if((hash === this__9245.collision_hash))
{var idx__9247 = cljs.core.hash_collision_node_find_index.call(null,this__9245.arr,this__9245.cnt,key);
if((idx__9247 === -1))
{var len__9248 = this__9245.arr.length;
var new_arr__9249 = cljs.core.make_array.call(null,(len__9248 + 2));
cljs.core.array_copy.call(null,this__9245.arr,0,new_arr__9249,0,len__9248);
(new_arr__9249[len__9248] = key);
(new_arr__9249[(len__9248 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9245.collision_hash,(this__9245.cnt + 1),new_arr__9249));
} else
{if(cljs.core._EQ_.call(null,(this__9245.arr[idx__9247]),val))
{return inode__9246;
} else
{return (new cljs.core.HashCollisionNode(null,this__9245.collision_hash,this__9245.cnt,cljs.core.clone_and_set.call(null,this__9245.arr,(idx__9247 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9245.collision_hash >>> shift) & 0x01f)),[null,inode__9246])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9250 = this;
var inode__9251 = this;
var idx__9252 = cljs.core.hash_collision_node_find_index.call(null,this__9250.arr,this__9250.cnt,key);
if((idx__9252 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9250.arr[idx__9252])))
{return (this__9250.arr[(idx__9252 + 1)]);
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
var this__9253 = this;
var inode__9254 = this;
if((e === this__9253.edit))
{this__9253.arr = array;
this__9253.cnt = count;
return inode__9254;
} else
{return (new cljs.core.HashCollisionNode(this__9253.edit,this__9253.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9259 = cljs.core.hash.call(null,key1);
if((key1hash__9259 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9259,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9260 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9259,key1,val1,added_leaf_QMARK___9260).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9260);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9261 = cljs.core.hash.call(null,key1);
if((key1hash__9261 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9261,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9262 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9261,key1,val1,added_leaf_QMARK___9262).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9262);
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
var this__9263 = this;
var h__2198__auto____9264 = this__9263.__hash;
if(!((h__2198__auto____9264 == null)))
{return h__2198__auto____9264;
} else
{var h__2198__auto____9265 = cljs.core.hash_coll.call(null,coll);
this__9263.__hash = h__2198__auto____9265;
return h__2198__auto____9265;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9266 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9267 = this;
var this__9268 = this;
return cljs.core.pr_str.call(null,this__9268);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9269 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9270 = this;
if((this__9270.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9270.nodes[this__9270.i]),(this__9270.nodes[(this__9270.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9270.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9271 = this;
if((this__9271.s == null))
{return cljs.core.create_inode_seq.call(null,this__9271.nodes,(this__9271.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9271.nodes,this__9271.i,cljs.core.next.call(null,this__9271.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9272 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9273 = this;
return (new cljs.core.NodeSeq(meta,this__9273.nodes,this__9273.i,this__9273.s,this__9273.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9274 = this;
return this__9274.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9275 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9275.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9282 = nodes.length;
var j__9283 = i;
while(true){
if((j__9283 < len__9282))
{if(!(((nodes[j__9283]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9283,null,null));
} else
{var temp__3971__auto____9284 = (nodes[(j__9283 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9284))
{var node__9285 = temp__3971__auto____9284;
var temp__3971__auto____9286 = node__9285.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9286))
{var node_seq__9287 = temp__3971__auto____9286;
return (new cljs.core.NodeSeq(null,nodes,(j__9283 + 2),node_seq__9287,null));
} else
{{
var G__9288 = (j__9283 + 2);
j__9283 = G__9288;
continue;
}
}
} else
{{
var G__9289 = (j__9283 + 2);
j__9283 = G__9289;
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
var this__9290 = this;
var h__2198__auto____9291 = this__9290.__hash;
if(!((h__2198__auto____9291 == null)))
{return h__2198__auto____9291;
} else
{var h__2198__auto____9292 = cljs.core.hash_coll.call(null,coll);
this__9290.__hash = h__2198__auto____9292;
return h__2198__auto____9292;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9293 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9294 = this;
var this__9295 = this;
return cljs.core.pr_str.call(null,this__9295);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9296 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9297 = this;
return cljs.core.first.call(null,this__9297.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9298 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9298.nodes,this__9298.i,cljs.core.next.call(null,this__9298.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9299 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9300 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9300.nodes,this__9300.i,this__9300.s,this__9300.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9301 = this;
return this__9301.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9302 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9302.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9309 = nodes.length;
var j__9310 = i;
while(true){
if((j__9310 < len__9309))
{var temp__3971__auto____9311 = (nodes[j__9310]);
if(cljs.core.truth_(temp__3971__auto____9311))
{var nj__9312 = temp__3971__auto____9311;
var temp__3971__auto____9313 = nj__9312.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9313))
{var ns__9314 = temp__3971__auto____9313;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9310 + 1),ns__9314,null));
} else
{{
var G__9315 = (j__9310 + 1);
j__9310 = G__9315;
continue;
}
}
} else
{{
var G__9316 = (j__9310 + 1);
j__9310 = G__9316;
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
var this__9319 = this;
return (new cljs.core.TransientHashMap({},this__9319.root,this__9319.cnt,this__9319.has_nil_QMARK_,this__9319.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9320 = this;
var h__2198__auto____9321 = this__9320.__hash;
if(!((h__2198__auto____9321 == null)))
{return h__2198__auto____9321;
} else
{var h__2198__auto____9322 = cljs.core.hash_imap.call(null,coll);
this__9320.__hash = h__2198__auto____9322;
return h__2198__auto____9322;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9323 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9324 = this;
if((k == null))
{if(this__9324.has_nil_QMARK_)
{return this__9324.nil_val;
} else
{return not_found;
}
} else
{if((this__9324.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9324.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9325 = this;
if((k == null))
{if((function (){var and__3822__auto____9326 = this__9325.has_nil_QMARK_;
if(and__3822__auto____9326)
{return (v === this__9325.nil_val);
} else
{return and__3822__auto____9326;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9325.meta,((this__9325.has_nil_QMARK_)?this__9325.cnt:(this__9325.cnt + 1)),this__9325.root,true,v,null));
}
} else
{var added_leaf_QMARK___9327 = (new cljs.core.Box(false));
var new_root__9328 = (((this__9325.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9325.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9327);
if((new_root__9328 === this__9325.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9325.meta,((added_leaf_QMARK___9327.val)?(this__9325.cnt + 1):this__9325.cnt),new_root__9328,this__9325.has_nil_QMARK_,this__9325.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9329 = this;
if((k == null))
{return this__9329.has_nil_QMARK_;
} else
{if((this__9329.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9329.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9352 = null;
var G__9352__2 = (function (this_sym9330,k){
var this__9332 = this;
var this_sym9330__9333 = this;
var coll__9334 = this_sym9330__9333;
return coll__9334.cljs$core$ILookup$_lookup$arity$2(coll__9334,k);
});
var G__9352__3 = (function (this_sym9331,k,not_found){
var this__9332 = this;
var this_sym9331__9335 = this;
var coll__9336 = this_sym9331__9335;
return coll__9336.cljs$core$ILookup$_lookup$arity$3(coll__9336,k,not_found);
});
G__9352 = function(this_sym9331,k,not_found){
switch(arguments.length){
case 2:
return G__9352__2.call(this,this_sym9331,k);
case 3:
return G__9352__3.call(this,this_sym9331,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9352;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9317,args9318){
var this__9337 = this;
return this_sym9317.call.apply(this_sym9317,[this_sym9317].concat(args9318.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9338 = this;
var init__9339 = ((this__9338.has_nil_QMARK_)?f.call(null,init,null,this__9338.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9339))
{return cljs.core.deref.call(null,init__9339);
} else
{if(!((this__9338.root == null)))
{return this__9338.root.kv_reduce(f,init__9339);
} else
{if("\uFDD0'else")
{return init__9339;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9340 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9341 = this;
var this__9342 = this;
return cljs.core.pr_str.call(null,this__9342);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9343 = this;
if((this__9343.cnt > 0))
{var s__9344 = ((!((this__9343.root == null)))?this__9343.root.inode_seq():null);
if(this__9343.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9343.nil_val], true),s__9344);
} else
{return s__9344;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9345 = this;
return this__9345.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9346 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9347 = this;
return (new cljs.core.PersistentHashMap(meta,this__9347.cnt,this__9347.root,this__9347.has_nil_QMARK_,this__9347.nil_val,this__9347.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9348 = this;
return this__9348.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9349 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9349.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9350 = this;
if((k == null))
{if(this__9350.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9350.meta,(this__9350.cnt - 1),this__9350.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9350.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9351 = this__9350.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9351 === this__9350.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9350.meta,(this__9350.cnt - 1),new_root__9351,this__9350.has_nil_QMARK_,this__9350.nil_val,null));
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
var len__9353 = ks.length;
var i__9354 = 0;
var out__9355 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9354 < len__9353))
{{
var G__9356 = (i__9354 + 1);
var G__9357 = cljs.core.assoc_BANG_.call(null,out__9355,(ks[i__9354]),(vs[i__9354]));
i__9354 = G__9356;
out__9355 = G__9357;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9355);
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
var this__9358 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9359 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9360 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9361 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9362 = this;
if((k == null))
{if(this__9362.has_nil_QMARK_)
{return this__9362.nil_val;
} else
{return null;
}
} else
{if((this__9362.root == null))
{return null;
} else
{return this__9362.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9363 = this;
if((k == null))
{if(this__9363.has_nil_QMARK_)
{return this__9363.nil_val;
} else
{return not_found;
}
} else
{if((this__9363.root == null))
{return not_found;
} else
{return this__9363.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9364 = this;
if(this__9364.edit)
{return this__9364.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9365 = this;
var tcoll__9366 = this;
if(this__9365.edit)
{if((function (){var G__9367__9368 = o;
if(G__9367__9368)
{if((function (){var or__3824__auto____9369 = (G__9367__9368.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9369)
{return or__3824__auto____9369;
} else
{return G__9367__9368.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9367__9368.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9367__9368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9367__9368);
}
})())
{return tcoll__9366.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9370 = cljs.core.seq.call(null,o);
var tcoll__9371 = tcoll__9366;
while(true){
var temp__3971__auto____9372 = cljs.core.first.call(null,es__9370);
if(cljs.core.truth_(temp__3971__auto____9372))
{var e__9373 = temp__3971__auto____9372;
{
var G__9384 = cljs.core.next.call(null,es__9370);
var G__9385 = tcoll__9371.assoc_BANG_(cljs.core.key.call(null,e__9373),cljs.core.val.call(null,e__9373));
es__9370 = G__9384;
tcoll__9371 = G__9385;
continue;
}
} else
{return tcoll__9371;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9374 = this;
var tcoll__9375 = this;
if(this__9374.edit)
{if((k == null))
{if((this__9374.nil_val === v))
{} else
{this__9374.nil_val = v;
}
if(this__9374.has_nil_QMARK_)
{} else
{this__9374.count = (this__9374.count + 1);
this__9374.has_nil_QMARK_ = true;
}
return tcoll__9375;
} else
{var added_leaf_QMARK___9376 = (new cljs.core.Box(false));
var node__9377 = (((this__9374.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9374.root).inode_assoc_BANG_(this__9374.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9376);
if((node__9377 === this__9374.root))
{} else
{this__9374.root = node__9377;
}
if(added_leaf_QMARK___9376.val)
{this__9374.count = (this__9374.count + 1);
} else
{}
return tcoll__9375;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9378 = this;
var tcoll__9379 = this;
if(this__9378.edit)
{if((k == null))
{if(this__9378.has_nil_QMARK_)
{this__9378.has_nil_QMARK_ = false;
this__9378.nil_val = null;
this__9378.count = (this__9378.count - 1);
return tcoll__9379;
} else
{return tcoll__9379;
}
} else
{if((this__9378.root == null))
{return tcoll__9379;
} else
{var removed_leaf_QMARK___9380 = (new cljs.core.Box(false));
var node__9381 = this__9378.root.inode_without_BANG_(this__9378.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9380);
if((node__9381 === this__9378.root))
{} else
{this__9378.root = node__9381;
}
if(cljs.core.truth_((removed_leaf_QMARK___9380[0])))
{this__9378.count = (this__9378.count - 1);
} else
{}
return tcoll__9379;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9382 = this;
var tcoll__9383 = this;
if(this__9382.edit)
{this__9382.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9382.count,this__9382.root,this__9382.has_nil_QMARK_,this__9382.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9388 = node;
var stack__9389 = stack;
while(true){
if(!((t__9388 == null)))
{{
var G__9390 = ((ascending_QMARK_)?t__9388.left:t__9388.right);
var G__9391 = cljs.core.conj.call(null,stack__9389,t__9388);
t__9388 = G__9390;
stack__9389 = G__9391;
continue;
}
} else
{return stack__9389;
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
var this__9392 = this;
var h__2198__auto____9393 = this__9392.__hash;
if(!((h__2198__auto____9393 == null)))
{return h__2198__auto____9393;
} else
{var h__2198__auto____9394 = cljs.core.hash_coll.call(null,coll);
this__9392.__hash = h__2198__auto____9394;
return h__2198__auto____9394;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9395 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9396 = this;
var this__9397 = this;
return cljs.core.pr_str.call(null,this__9397);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9398 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9399 = this;
if((this__9399.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9399.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9400 = this;
return cljs.core.peek.call(null,this__9400.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9401 = this;
var t__9402 = cljs.core.first.call(null,this__9401.stack);
var next_stack__9403 = cljs.core.tree_map_seq_push.call(null,((this__9401.ascending_QMARK_)?t__9402.right:t__9402.left),cljs.core.next.call(null,this__9401.stack),this__9401.ascending_QMARK_);
if(!((next_stack__9403 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9403,this__9401.ascending_QMARK_,(this__9401.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9404 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9405 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9405.stack,this__9405.ascending_QMARK_,this__9405.cnt,this__9405.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9406 = this;
return this__9406.meta;
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
{if((function (){var and__3822__auto____9408 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9408)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9408;
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
{if((function (){var and__3822__auto____9410 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9410)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9410;
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
var init__9414 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9414))
{return cljs.core.deref.call(null,init__9414);
} else
{var init__9415 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9414):init__9414);
if(cljs.core.reduced_QMARK_.call(null,init__9415))
{return cljs.core.deref.call(null,init__9415);
} else
{var init__9416 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9415):init__9415);
if(cljs.core.reduced_QMARK_.call(null,init__9416))
{return cljs.core.deref.call(null,init__9416);
} else
{return init__9416;
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
var this__9419 = this;
var h__2198__auto____9420 = this__9419.__hash;
if(!((h__2198__auto____9420 == null)))
{return h__2198__auto____9420;
} else
{var h__2198__auto____9421 = cljs.core.hash_coll.call(null,coll);
this__9419.__hash = h__2198__auto____9421;
return h__2198__auto____9421;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9422 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9423 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9424 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9424.key,this__9424.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9472 = null;
var G__9472__2 = (function (this_sym9425,k){
var this__9427 = this;
var this_sym9425__9428 = this;
var node__9429 = this_sym9425__9428;
return node__9429.cljs$core$ILookup$_lookup$arity$2(node__9429,k);
});
var G__9472__3 = (function (this_sym9426,k,not_found){
var this__9427 = this;
var this_sym9426__9430 = this;
var node__9431 = this_sym9426__9430;
return node__9431.cljs$core$ILookup$_lookup$arity$3(node__9431,k,not_found);
});
G__9472 = function(this_sym9426,k,not_found){
switch(arguments.length){
case 2:
return G__9472__2.call(this,this_sym9426,k);
case 3:
return G__9472__3.call(this,this_sym9426,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9472;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9417,args9418){
var this__9432 = this;
return this_sym9417.call.apply(this_sym9417,[this_sym9417].concat(args9418.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9433 = this;
return cljs.core.PersistentVector.fromArray([this__9433.key,this__9433.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9434 = this;
return this__9434.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9435 = this;
return this__9435.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9436 = this;
var node__9437 = this;
return ins.balance_right(node__9437);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9438 = this;
var node__9439 = this;
return (new cljs.core.RedNode(this__9438.key,this__9438.val,this__9438.left,this__9438.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9440 = this;
var node__9441 = this;
return cljs.core.balance_right_del.call(null,this__9440.key,this__9440.val,this__9440.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9442 = this;
var node__9443 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9444 = this;
var node__9445 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9445,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9446 = this;
var node__9447 = this;
return cljs.core.balance_left_del.call(null,this__9446.key,this__9446.val,del,this__9446.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9448 = this;
var node__9449 = this;
return ins.balance_left(node__9449);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9450 = this;
var node__9451 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9451,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9473 = null;
var G__9473__0 = (function (){
var this__9452 = this;
var this__9454 = this;
return cljs.core.pr_str.call(null,this__9454);
});
G__9473 = function(){
switch(arguments.length){
case 0:
return G__9473__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9473;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9455 = this;
var node__9456 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9456,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9457 = this;
var node__9458 = this;
return node__9458;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9459 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9460 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9461 = this;
return cljs.core.list.call(null,this__9461.key,this__9461.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9462 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9463 = this;
return this__9463.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9464 = this;
return cljs.core.PersistentVector.fromArray([this__9464.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9465 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9465.key,this__9465.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9466 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9467 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9467.key,this__9467.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9468 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9469 = this;
if((n === 0))
{return this__9469.key;
} else
{if((n === 1))
{return this__9469.val;
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
var this__9470 = this;
if((n === 0))
{return this__9470.key;
} else
{if((n === 1))
{return this__9470.val;
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
var this__9471 = this;
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
var this__9476 = this;
var h__2198__auto____9477 = this__9476.__hash;
if(!((h__2198__auto____9477 == null)))
{return h__2198__auto____9477;
} else
{var h__2198__auto____9478 = cljs.core.hash_coll.call(null,coll);
this__9476.__hash = h__2198__auto____9478;
return h__2198__auto____9478;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9479 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9480 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9481 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9481.key,this__9481.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9529 = null;
var G__9529__2 = (function (this_sym9482,k){
var this__9484 = this;
var this_sym9482__9485 = this;
var node__9486 = this_sym9482__9485;
return node__9486.cljs$core$ILookup$_lookup$arity$2(node__9486,k);
});
var G__9529__3 = (function (this_sym9483,k,not_found){
var this__9484 = this;
var this_sym9483__9487 = this;
var node__9488 = this_sym9483__9487;
return node__9488.cljs$core$ILookup$_lookup$arity$3(node__9488,k,not_found);
});
G__9529 = function(this_sym9483,k,not_found){
switch(arguments.length){
case 2:
return G__9529__2.call(this,this_sym9483,k);
case 3:
return G__9529__3.call(this,this_sym9483,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9529;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9474,args9475){
var this__9489 = this;
return this_sym9474.call.apply(this_sym9474,[this_sym9474].concat(args9475.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9490 = this;
return cljs.core.PersistentVector.fromArray([this__9490.key,this__9490.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9491 = this;
return this__9491.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9492 = this;
return this__9492.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9493 = this;
var node__9494 = this;
return (new cljs.core.RedNode(this__9493.key,this__9493.val,this__9493.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9495 = this;
var node__9496 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9497 = this;
var node__9498 = this;
return (new cljs.core.RedNode(this__9497.key,this__9497.val,this__9497.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9499 = this;
var node__9500 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9501 = this;
var node__9502 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9502,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9503 = this;
var node__9504 = this;
return (new cljs.core.RedNode(this__9503.key,this__9503.val,del,this__9503.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9505 = this;
var node__9506 = this;
return (new cljs.core.RedNode(this__9505.key,this__9505.val,ins,this__9505.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9507 = this;
var node__9508 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9507.left))
{return (new cljs.core.RedNode(this__9507.key,this__9507.val,this__9507.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9507.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9507.right))
{return (new cljs.core.RedNode(this__9507.right.key,this__9507.right.val,(new cljs.core.BlackNode(this__9507.key,this__9507.val,this__9507.left,this__9507.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9507.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9508,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9530 = null;
var G__9530__0 = (function (){
var this__9509 = this;
var this__9511 = this;
return cljs.core.pr_str.call(null,this__9511);
});
G__9530 = function(){
switch(arguments.length){
case 0:
return G__9530__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9530;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9512 = this;
var node__9513 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9512.right))
{return (new cljs.core.RedNode(this__9512.key,this__9512.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9512.left,null)),this__9512.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9512.left))
{return (new cljs.core.RedNode(this__9512.left.key,this__9512.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9512.left.left,null)),(new cljs.core.BlackNode(this__9512.key,this__9512.val,this__9512.left.right,this__9512.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9513,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9514 = this;
var node__9515 = this;
return (new cljs.core.BlackNode(this__9514.key,this__9514.val,this__9514.left,this__9514.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9516 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9517 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9518 = this;
return cljs.core.list.call(null,this__9518.key,this__9518.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9519 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9520 = this;
return this__9520.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9521 = this;
return cljs.core.PersistentVector.fromArray([this__9521.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9522 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9522.key,this__9522.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9523 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9524 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9524.key,this__9524.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9525 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9526 = this;
if((n === 0))
{return this__9526.key;
} else
{if((n === 1))
{return this__9526.val;
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
var this__9527 = this;
if((n === 0))
{return this__9527.key;
} else
{if((n === 1))
{return this__9527.val;
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
var this__9528 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9534 = comp.call(null,k,tree.key);
if((c__9534 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9534 < 0))
{var ins__9535 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9535 == null)))
{return tree.add_left(ins__9535);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9536 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9536 == null)))
{return tree.add_right(ins__9536);
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
{var app__9539 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9539))
{return (new cljs.core.RedNode(app__9539.key,app__9539.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9539.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9539.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9539,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9540 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9540))
{return (new cljs.core.RedNode(app__9540.key,app__9540.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9540.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9540.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9540,right.right,null)));
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
{var c__9546 = comp.call(null,k,tree.key);
if((c__9546 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9546 < 0))
{var del__9547 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9548 = !((del__9547 == null));
if(or__3824__auto____9548)
{return or__3824__auto____9548;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9547,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9547,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9549 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9550 = !((del__9549 == null));
if(or__3824__auto____9550)
{return or__3824__auto____9550;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9549);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9549,null));
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
var tk__9553 = tree.key;
var c__9554 = comp.call(null,k,tk__9553);
if((c__9554 === 0))
{return tree.replace(tk__9553,v,tree.left,tree.right);
} else
{if((c__9554 < 0))
{return tree.replace(tk__9553,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9553,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9557 = this;
var h__2198__auto____9558 = this__9557.__hash;
if(!((h__2198__auto____9558 == null)))
{return h__2198__auto____9558;
} else
{var h__2198__auto____9559 = cljs.core.hash_imap.call(null,coll);
this__9557.__hash = h__2198__auto____9559;
return h__2198__auto____9559;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9560 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9561 = this;
var n__9562 = coll.entry_at(k);
if(!((n__9562 == null)))
{return n__9562.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9563 = this;
var found__9564 = [null];
var t__9565 = cljs.core.tree_map_add.call(null,this__9563.comp,this__9563.tree,k,v,found__9564);
if((t__9565 == null))
{var found_node__9566 = cljs.core.nth.call(null,found__9564,0);
if(cljs.core._EQ_.call(null,v,found_node__9566.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9563.comp,cljs.core.tree_map_replace.call(null,this__9563.comp,this__9563.tree,k,v),this__9563.cnt,this__9563.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9563.comp,t__9565.blacken(),(this__9563.cnt + 1),this__9563.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9567 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9601 = null;
var G__9601__2 = (function (this_sym9568,k){
var this__9570 = this;
var this_sym9568__9571 = this;
var coll__9572 = this_sym9568__9571;
return coll__9572.cljs$core$ILookup$_lookup$arity$2(coll__9572,k);
});
var G__9601__3 = (function (this_sym9569,k,not_found){
var this__9570 = this;
var this_sym9569__9573 = this;
var coll__9574 = this_sym9569__9573;
return coll__9574.cljs$core$ILookup$_lookup$arity$3(coll__9574,k,not_found);
});
G__9601 = function(this_sym9569,k,not_found){
switch(arguments.length){
case 2:
return G__9601__2.call(this,this_sym9569,k);
case 3:
return G__9601__3.call(this,this_sym9569,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9601;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9555,args9556){
var this__9575 = this;
return this_sym9555.call.apply(this_sym9555,[this_sym9555].concat(args9556.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9576 = this;
if(!((this__9576.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9576.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9577 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9578 = this;
if((this__9578.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9578.tree,false,this__9578.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9579 = this;
var this__9580 = this;
return cljs.core.pr_str.call(null,this__9580);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9581 = this;
var coll__9582 = this;
var t__9583 = this__9581.tree;
while(true){
if(!((t__9583 == null)))
{var c__9584 = this__9581.comp.call(null,k,t__9583.key);
if((c__9584 === 0))
{return t__9583;
} else
{if((c__9584 < 0))
{{
var G__9602 = t__9583.left;
t__9583 = G__9602;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9603 = t__9583.right;
t__9583 = G__9603;
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
var this__9585 = this;
if((this__9585.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9585.tree,ascending_QMARK_,this__9585.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9586 = this;
if((this__9586.cnt > 0))
{var stack__9587 = null;
var t__9588 = this__9586.tree;
while(true){
if(!((t__9588 == null)))
{var c__9589 = this__9586.comp.call(null,k,t__9588.key);
if((c__9589 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9587,t__9588),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9589 < 0))
{{
var G__9604 = cljs.core.conj.call(null,stack__9587,t__9588);
var G__9605 = t__9588.left;
stack__9587 = G__9604;
t__9588 = G__9605;
continue;
}
} else
{{
var G__9606 = stack__9587;
var G__9607 = t__9588.right;
stack__9587 = G__9606;
t__9588 = G__9607;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9589 > 0))
{{
var G__9608 = cljs.core.conj.call(null,stack__9587,t__9588);
var G__9609 = t__9588.right;
stack__9587 = G__9608;
t__9588 = G__9609;
continue;
}
} else
{{
var G__9610 = stack__9587;
var G__9611 = t__9588.left;
stack__9587 = G__9610;
t__9588 = G__9611;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9587 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9587,ascending_QMARK_,-1,null));
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
var this__9590 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9591 = this;
return this__9591.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9592 = this;
if((this__9592.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9592.tree,true,this__9592.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9593 = this;
return this__9593.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9594 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9595 = this;
return (new cljs.core.PersistentTreeMap(this__9595.comp,this__9595.tree,this__9595.cnt,meta,this__9595.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9596 = this;
return this__9596.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9597 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9597.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9598 = this;
var found__9599 = [null];
var t__9600 = cljs.core.tree_map_remove.call(null,this__9598.comp,this__9598.tree,k,found__9599);
if((t__9600 == null))
{if((cljs.core.nth.call(null,found__9599,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9598.comp,null,0,this__9598.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9598.comp,t__9600.blacken(),(this__9598.cnt - 1),this__9598.meta,null));
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
var in__9614 = cljs.core.seq.call(null,keyvals);
var out__9615 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9614)
{{
var G__9616 = cljs.core.nnext.call(null,in__9614);
var G__9617 = cljs.core.assoc_BANG_.call(null,out__9615,cljs.core.first.call(null,in__9614),cljs.core.second.call(null,in__9614));
in__9614 = G__9616;
out__9615 = G__9617;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9615);
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
hash_map.cljs$lang$applyTo = (function (arglist__9618){
var keyvals = cljs.core.seq(arglist__9618);;
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
array_map.cljs$lang$applyTo = (function (arglist__9619){
var keyvals = cljs.core.seq(arglist__9619);;
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
var ks__9623 = [];
var obj__9624 = {};
var kvs__9625 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9625)
{ks__9623.push(cljs.core.first.call(null,kvs__9625));
(obj__9624[cljs.core.first.call(null,kvs__9625)] = cljs.core.second.call(null,kvs__9625));
{
var G__9626 = cljs.core.nnext.call(null,kvs__9625);
kvs__9625 = G__9626;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9623,obj__9624);
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
obj_map.cljs$lang$applyTo = (function (arglist__9627){
var keyvals = cljs.core.seq(arglist__9627);;
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
var in__9630 = cljs.core.seq.call(null,keyvals);
var out__9631 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9630)
{{
var G__9632 = cljs.core.nnext.call(null,in__9630);
var G__9633 = cljs.core.assoc.call(null,out__9631,cljs.core.first.call(null,in__9630),cljs.core.second.call(null,in__9630));
in__9630 = G__9632;
out__9631 = G__9633;
continue;
}
} else
{return out__9631;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9634){
var keyvals = cljs.core.seq(arglist__9634);;
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
var in__9637 = cljs.core.seq.call(null,keyvals);
var out__9638 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9637)
{{
var G__9639 = cljs.core.nnext.call(null,in__9637);
var G__9640 = cljs.core.assoc.call(null,out__9638,cljs.core.first.call(null,in__9637),cljs.core.second.call(null,in__9637));
in__9637 = G__9639;
out__9638 = G__9640;
continue;
}
} else
{return out__9638;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9641){
var comparator = cljs.core.first(arglist__9641);
var keyvals = cljs.core.rest(arglist__9641);
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
{return cljs.core.reduce.call(null,(function (p1__9642_SHARP_,p2__9643_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9645 = p1__9642_SHARP_;
if(cljs.core.truth_(or__3824__auto____9645))
{return or__3824__auto____9645;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9643_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9646){
var maps = cljs.core.seq(arglist__9646);;
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
{var merge_entry__9654 = (function (m,e){
var k__9652 = cljs.core.first.call(null,e);
var v__9653 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9652))
{return cljs.core.assoc.call(null,m,k__9652,f.call(null,cljs.core._lookup.call(null,m,k__9652,null),v__9653));
} else
{return cljs.core.assoc.call(null,m,k__9652,v__9653);
}
});
var merge2__9656 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9654,(function (){var or__3824__auto____9655 = m1;
if(cljs.core.truth_(or__3824__auto____9655))
{return or__3824__auto____9655;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9656,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9657){
var f = cljs.core.first(arglist__9657);
var maps = cljs.core.rest(arglist__9657);
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
var ret__9662 = cljs.core.ObjMap.EMPTY;
var keys__9663 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9663)
{var key__9664 = cljs.core.first.call(null,keys__9663);
var entry__9665 = cljs.core._lookup.call(null,map,key__9664,"\uFDD0'cljs.core/not-found");
{
var G__9666 = ((cljs.core.not_EQ_.call(null,entry__9665,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9662,key__9664,entry__9665):ret__9662);
var G__9667 = cljs.core.next.call(null,keys__9663);
ret__9662 = G__9666;
keys__9663 = G__9667;
continue;
}
} else
{return ret__9662;
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
var this__9671 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9671.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9672 = this;
var h__2198__auto____9673 = this__9672.__hash;
if(!((h__2198__auto____9673 == null)))
{return h__2198__auto____9673;
} else
{var h__2198__auto____9674 = cljs.core.hash_iset.call(null,coll);
this__9672.__hash = h__2198__auto____9674;
return h__2198__auto____9674;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9675 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9676 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9676.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9697 = null;
var G__9697__2 = (function (this_sym9677,k){
var this__9679 = this;
var this_sym9677__9680 = this;
var coll__9681 = this_sym9677__9680;
return coll__9681.cljs$core$ILookup$_lookup$arity$2(coll__9681,k);
});
var G__9697__3 = (function (this_sym9678,k,not_found){
var this__9679 = this;
var this_sym9678__9682 = this;
var coll__9683 = this_sym9678__9682;
return coll__9683.cljs$core$ILookup$_lookup$arity$3(coll__9683,k,not_found);
});
G__9697 = function(this_sym9678,k,not_found){
switch(arguments.length){
case 2:
return G__9697__2.call(this,this_sym9678,k);
case 3:
return G__9697__3.call(this,this_sym9678,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9697;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9669,args9670){
var this__9684 = this;
return this_sym9669.call.apply(this_sym9669,[this_sym9669].concat(args9670.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9685 = this;
return (new cljs.core.PersistentHashSet(this__9685.meta,cljs.core.assoc.call(null,this__9685.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9686 = this;
var this__9687 = this;
return cljs.core.pr_str.call(null,this__9687);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9688 = this;
return cljs.core.keys.call(null,this__9688.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9689 = this;
return (new cljs.core.PersistentHashSet(this__9689.meta,cljs.core.dissoc.call(null,this__9689.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9690 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9691 = this;
var and__3822__auto____9692 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9692)
{var and__3822__auto____9693 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9693)
{return cljs.core.every_QMARK_.call(null,(function (p1__9668_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9668_SHARP_);
}),other);
} else
{return and__3822__auto____9693;
}
} else
{return and__3822__auto____9692;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9694 = this;
return (new cljs.core.PersistentHashSet(meta,this__9694.hash_map,this__9694.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9695 = this;
return this__9695.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9696 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9696.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9698 = cljs.core.count.call(null,items);
var i__9699 = 0;
var out__9700 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9699 < len__9698))
{{
var G__9701 = (i__9699 + 1);
var G__9702 = cljs.core.conj_BANG_.call(null,out__9700,(items[i__9699]));
i__9699 = G__9701;
out__9700 = G__9702;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9700);
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
var G__9720 = null;
var G__9720__2 = (function (this_sym9706,k){
var this__9708 = this;
var this_sym9706__9709 = this;
var tcoll__9710 = this_sym9706__9709;
if((cljs.core._lookup.call(null,this__9708.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9720__3 = (function (this_sym9707,k,not_found){
var this__9708 = this;
var this_sym9707__9711 = this;
var tcoll__9712 = this_sym9707__9711;
if((cljs.core._lookup.call(null,this__9708.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9720 = function(this_sym9707,k,not_found){
switch(arguments.length){
case 2:
return G__9720__2.call(this,this_sym9707,k);
case 3:
return G__9720__3.call(this,this_sym9707,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9720;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9704,args9705){
var this__9713 = this;
return this_sym9704.call.apply(this_sym9704,[this_sym9704].concat(args9705.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9714 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9715 = this;
if((cljs.core._lookup.call(null,this__9715.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9716 = this;
return cljs.core.count.call(null,this__9716.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9717 = this;
this__9717.transient_map = cljs.core.dissoc_BANG_.call(null,this__9717.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9718 = this;
this__9718.transient_map = cljs.core.assoc_BANG_.call(null,this__9718.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9719 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9719.transient_map),null));
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
var this__9723 = this;
var h__2198__auto____9724 = this__9723.__hash;
if(!((h__2198__auto____9724 == null)))
{return h__2198__auto____9724;
} else
{var h__2198__auto____9725 = cljs.core.hash_iset.call(null,coll);
this__9723.__hash = h__2198__auto____9725;
return h__2198__auto____9725;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9726 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9727 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9727.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9753 = null;
var G__9753__2 = (function (this_sym9728,k){
var this__9730 = this;
var this_sym9728__9731 = this;
var coll__9732 = this_sym9728__9731;
return coll__9732.cljs$core$ILookup$_lookup$arity$2(coll__9732,k);
});
var G__9753__3 = (function (this_sym9729,k,not_found){
var this__9730 = this;
var this_sym9729__9733 = this;
var coll__9734 = this_sym9729__9733;
return coll__9734.cljs$core$ILookup$_lookup$arity$3(coll__9734,k,not_found);
});
G__9753 = function(this_sym9729,k,not_found){
switch(arguments.length){
case 2:
return G__9753__2.call(this,this_sym9729,k);
case 3:
return G__9753__3.call(this,this_sym9729,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9753;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9721,args9722){
var this__9735 = this;
return this_sym9721.call.apply(this_sym9721,[this_sym9721].concat(args9722.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9736 = this;
return (new cljs.core.PersistentTreeSet(this__9736.meta,cljs.core.assoc.call(null,this__9736.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9737 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9737.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9738 = this;
var this__9739 = this;
return cljs.core.pr_str.call(null,this__9739);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9740 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9740.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9741 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9741.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9742 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9743 = this;
return cljs.core._comparator.call(null,this__9743.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9744 = this;
return cljs.core.keys.call(null,this__9744.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9745 = this;
return (new cljs.core.PersistentTreeSet(this__9745.meta,cljs.core.dissoc.call(null,this__9745.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9746 = this;
return cljs.core.count.call(null,this__9746.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9747 = this;
var and__3822__auto____9748 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9748)
{var and__3822__auto____9749 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9749)
{return cljs.core.every_QMARK_.call(null,(function (p1__9703_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9703_SHARP_);
}),other);
} else
{return and__3822__auto____9749;
}
} else
{return and__3822__auto____9748;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9750 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9750.tree_map,this__9750.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9751 = this;
return this__9751.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9752 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9752.meta);
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
var G__9758__delegate = function (keys){
var in__9756 = cljs.core.seq.call(null,keys);
var out__9757 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9756))
{{
var G__9759 = cljs.core.next.call(null,in__9756);
var G__9760 = cljs.core.conj_BANG_.call(null,out__9757,cljs.core.first.call(null,in__9756));
in__9756 = G__9759;
out__9757 = G__9760;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9757);
}
break;
}
};
var G__9758 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9758__delegate.call(this, keys);
};
G__9758.cljs$lang$maxFixedArity = 0;
G__9758.cljs$lang$applyTo = (function (arglist__9761){
var keys = cljs.core.seq(arglist__9761);;
return G__9758__delegate(keys);
});
G__9758.cljs$lang$arity$variadic = G__9758__delegate;
return G__9758;
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
sorted_set.cljs$lang$applyTo = (function (arglist__9762){
var keys = cljs.core.seq(arglist__9762);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9764){
var comparator = cljs.core.first(arglist__9764);
var keys = cljs.core.rest(arglist__9764);
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
{var n__9770 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9771 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9771))
{var e__9772 = temp__3971__auto____9771;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9772));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9770,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9763_SHARP_){
var temp__3971__auto____9773 = cljs.core.find.call(null,smap,p1__9763_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9773))
{var e__9774 = temp__3971__auto____9773;
return cljs.core.second.call(null,e__9774);
} else
{return p1__9763_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9804 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9797,seen){
while(true){
var vec__9798__9799 = p__9797;
var f__9800 = cljs.core.nth.call(null,vec__9798__9799,0,null);
var xs__9801 = vec__9798__9799;
var temp__3974__auto____9802 = cljs.core.seq.call(null,xs__9801);
if(temp__3974__auto____9802)
{var s__9803 = temp__3974__auto____9802;
if(cljs.core.contains_QMARK_.call(null,seen,f__9800))
{{
var G__9805 = cljs.core.rest.call(null,s__9803);
var G__9806 = seen;
p__9797 = G__9805;
seen = G__9806;
continue;
}
} else
{return cljs.core.cons.call(null,f__9800,step.call(null,cljs.core.rest.call(null,s__9803),cljs.core.conj.call(null,seen,f__9800)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9804.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9809 = cljs.core.PersistentVector.EMPTY;
var s__9810 = s;
while(true){
if(cljs.core.next.call(null,s__9810))
{{
var G__9811 = cljs.core.conj.call(null,ret__9809,cljs.core.first.call(null,s__9810));
var G__9812 = cljs.core.next.call(null,s__9810);
ret__9809 = G__9811;
s__9810 = G__9812;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9809);
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
{if((function (){var or__3824__auto____9815 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9815)
{return or__3824__auto____9815;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9816 = x.lastIndexOf("/");
if((i__9816 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9816 + 1));
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
if((function (){var or__3824__auto____9819 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9819)
{return or__3824__auto____9819;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9820 = x.lastIndexOf("/");
if((i__9820 > -1))
{return cljs.core.subs.call(null,x,2,i__9820);
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
var map__9827 = cljs.core.ObjMap.EMPTY;
var ks__9828 = cljs.core.seq.call(null,keys);
var vs__9829 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9830 = ks__9828;
if(and__3822__auto____9830)
{return vs__9829;
} else
{return and__3822__auto____9830;
}
})())
{{
var G__9831 = cljs.core.assoc.call(null,map__9827,cljs.core.first.call(null,ks__9828),cljs.core.first.call(null,vs__9829));
var G__9832 = cljs.core.next.call(null,ks__9828);
var G__9833 = cljs.core.next.call(null,vs__9829);
map__9827 = G__9831;
ks__9828 = G__9832;
vs__9829 = G__9833;
continue;
}
} else
{return map__9827;
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
var G__9836__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9821_SHARP_,p2__9822_SHARP_){
return max_key.call(null,k,p1__9821_SHARP_,p2__9822_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9836 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9836__delegate.call(this, k, x, y, more);
};
G__9836.cljs$lang$maxFixedArity = 3;
G__9836.cljs$lang$applyTo = (function (arglist__9837){
var k = cljs.core.first(arglist__9837);
var x = cljs.core.first(cljs.core.next(arglist__9837));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9837)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9837)));
return G__9836__delegate(k, x, y, more);
});
G__9836.cljs$lang$arity$variadic = G__9836__delegate;
return G__9836;
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
var G__9838__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9834_SHARP_,p2__9835_SHARP_){
return min_key.call(null,k,p1__9834_SHARP_,p2__9835_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9838 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9838__delegate.call(this, k, x, y, more);
};
G__9838.cljs$lang$maxFixedArity = 3;
G__9838.cljs$lang$applyTo = (function (arglist__9839){
var k = cljs.core.first(arglist__9839);
var x = cljs.core.first(cljs.core.next(arglist__9839));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9839)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9839)));
return G__9838__delegate(k, x, y, more);
});
G__9838.cljs$lang$arity$variadic = G__9838__delegate;
return G__9838;
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
var temp__3974__auto____9842 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9842)
{var s__9843 = temp__3974__auto____9842;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9843),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9843)));
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
var temp__3974__auto____9846 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9846)
{var s__9847 = temp__3974__auto____9846;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9847))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9847),take_while.call(null,pred,cljs.core.rest.call(null,s__9847)));
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
var comp__9849 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9849.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9861 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9862 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9862))
{var vec__9863__9864 = temp__3974__auto____9862;
var e__9865 = cljs.core.nth.call(null,vec__9863__9864,0,null);
var s__9866 = vec__9863__9864;
if(cljs.core.truth_(include__9861.call(null,e__9865)))
{return s__9866;
} else
{return cljs.core.next.call(null,s__9866);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9861,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9867 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9867))
{var vec__9868__9869 = temp__3974__auto____9867;
var e__9870 = cljs.core.nth.call(null,vec__9868__9869,0,null);
var s__9871 = vec__9868__9869;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9870))?s__9871:cljs.core.next.call(null,s__9871)));
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
var include__9883 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9884 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9884))
{var vec__9885__9886 = temp__3974__auto____9884;
var e__9887 = cljs.core.nth.call(null,vec__9885__9886,0,null);
var s__9888 = vec__9885__9886;
if(cljs.core.truth_(include__9883.call(null,e__9887)))
{return s__9888;
} else
{return cljs.core.next.call(null,s__9888);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9883,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9889 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9889))
{var vec__9890__9891 = temp__3974__auto____9889;
var e__9892 = cljs.core.nth.call(null,vec__9890__9891,0,null);
var s__9893 = vec__9890__9891;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9892))?s__9893:cljs.core.next.call(null,s__9893)));
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
var this__9894 = this;
var h__2198__auto____9895 = this__9894.__hash;
if(!((h__2198__auto____9895 == null)))
{return h__2198__auto____9895;
} else
{var h__2198__auto____9896 = cljs.core.hash_coll.call(null,rng);
this__9894.__hash = h__2198__auto____9896;
return h__2198__auto____9896;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9897 = this;
if((this__9897.step > 0))
{if(((this__9897.start + this__9897.step) < this__9897.end))
{return (new cljs.core.Range(this__9897.meta,(this__9897.start + this__9897.step),this__9897.end,this__9897.step,null));
} else
{return null;
}
} else
{if(((this__9897.start + this__9897.step) > this__9897.end))
{return (new cljs.core.Range(this__9897.meta,(this__9897.start + this__9897.step),this__9897.end,this__9897.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9898 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9899 = this;
var this__9900 = this;
return cljs.core.pr_str.call(null,this__9900);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9901 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9902 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9903 = this;
if((this__9903.step > 0))
{if((this__9903.start < this__9903.end))
{return rng;
} else
{return null;
}
} else
{if((this__9903.start > this__9903.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9904 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9904.end - this__9904.start) / this__9904.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9905 = this;
return this__9905.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9906 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9906.meta,(this__9906.start + this__9906.step),this__9906.end,this__9906.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9907 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9908 = this;
return (new cljs.core.Range(meta,this__9908.start,this__9908.end,this__9908.step,this__9908.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9909 = this;
return this__9909.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9910 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9910.start + (n * this__9910.step));
} else
{if((function (){var and__3822__auto____9911 = (this__9910.start > this__9910.end);
if(and__3822__auto____9911)
{return (this__9910.step === 0);
} else
{return and__3822__auto____9911;
}
})())
{return this__9910.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9912 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9912.start + (n * this__9912.step));
} else
{if((function (){var and__3822__auto____9913 = (this__9912.start > this__9912.end);
if(and__3822__auto____9913)
{return (this__9912.step === 0);
} else
{return and__3822__auto____9913;
}
})())
{return this__9912.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9914 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9914.meta);
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
var temp__3974__auto____9917 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9917)
{var s__9918 = temp__3974__auto____9917;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9918),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9918)));
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
var temp__3974__auto____9925 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9925)
{var s__9926 = temp__3974__auto____9925;
var fst__9927 = cljs.core.first.call(null,s__9926);
var fv__9928 = f.call(null,fst__9927);
var run__9929 = cljs.core.cons.call(null,fst__9927,cljs.core.take_while.call(null,(function (p1__9919_SHARP_){
return cljs.core._EQ_.call(null,fv__9928,f.call(null,p1__9919_SHARP_));
}),cljs.core.next.call(null,s__9926)));
return cljs.core.cons.call(null,run__9929,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9929),s__9926))));
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
var temp__3971__auto____9944 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9944)
{var s__9945 = temp__3971__auto____9944;
return reductions.call(null,f,cljs.core.first.call(null,s__9945),cljs.core.rest.call(null,s__9945));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9946 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9946)
{var s__9947 = temp__3974__auto____9946;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9947)),cljs.core.rest.call(null,s__9947));
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
var G__9950 = null;
var G__9950__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9950__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9950__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9950__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9950__4 = (function() { 
var G__9951__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9951__delegate.call(this, x, y, z, args);
};
G__9951.cljs$lang$maxFixedArity = 3;
G__9951.cljs$lang$applyTo = (function (arglist__9952){
var x = cljs.core.first(arglist__9952);
var y = cljs.core.first(cljs.core.next(arglist__9952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9952)));
return G__9951__delegate(x, y, z, args);
});
G__9951.cljs$lang$arity$variadic = G__9951__delegate;
return G__9951;
})()
;
G__9950 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9950__0.call(this);
case 1:
return G__9950__1.call(this,x);
case 2:
return G__9950__2.call(this,x,y);
case 3:
return G__9950__3.call(this,x,y,z);
default:
return G__9950__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9950.cljs$lang$maxFixedArity = 3;
G__9950.cljs$lang$applyTo = G__9950__4.cljs$lang$applyTo;
return G__9950;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9953 = null;
var G__9953__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9953__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9953__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9953__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9953__4 = (function() { 
var G__9954__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9954 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9954__delegate.call(this, x, y, z, args);
};
G__9954.cljs$lang$maxFixedArity = 3;
G__9954.cljs$lang$applyTo = (function (arglist__9955){
var x = cljs.core.first(arglist__9955);
var y = cljs.core.first(cljs.core.next(arglist__9955));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9955)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9955)));
return G__9954__delegate(x, y, z, args);
});
G__9954.cljs$lang$arity$variadic = G__9954__delegate;
return G__9954;
})()
;
G__9953 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9953__0.call(this);
case 1:
return G__9953__1.call(this,x);
case 2:
return G__9953__2.call(this,x,y);
case 3:
return G__9953__3.call(this,x,y,z);
default:
return G__9953__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9953.cljs$lang$maxFixedArity = 3;
G__9953.cljs$lang$applyTo = G__9953__4.cljs$lang$applyTo;
return G__9953;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9956 = null;
var G__9956__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9956__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9956__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9956__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9956__4 = (function() { 
var G__9957__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9957 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9957__delegate.call(this, x, y, z, args);
};
G__9957.cljs$lang$maxFixedArity = 3;
G__9957.cljs$lang$applyTo = (function (arglist__9958){
var x = cljs.core.first(arglist__9958);
var y = cljs.core.first(cljs.core.next(arglist__9958));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9958)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9958)));
return G__9957__delegate(x, y, z, args);
});
G__9957.cljs$lang$arity$variadic = G__9957__delegate;
return G__9957;
})()
;
G__9956 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9956__0.call(this);
case 1:
return G__9956__1.call(this,x);
case 2:
return G__9956__2.call(this,x,y);
case 3:
return G__9956__3.call(this,x,y,z);
default:
return G__9956__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9956.cljs$lang$maxFixedArity = 3;
G__9956.cljs$lang$applyTo = G__9956__4.cljs$lang$applyTo;
return G__9956;
})()
});
var juxt__4 = (function() { 
var G__9959__delegate = function (f,g,h,fs){
var fs__9949 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9960 = null;
var G__9960__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9930_SHARP_,p2__9931_SHARP_){
return cljs.core.conj.call(null,p1__9930_SHARP_,p2__9931_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9949);
});
var G__9960__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9932_SHARP_,p2__9933_SHARP_){
return cljs.core.conj.call(null,p1__9932_SHARP_,p2__9933_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9949);
});
var G__9960__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9934_SHARP_,p2__9935_SHARP_){
return cljs.core.conj.call(null,p1__9934_SHARP_,p2__9935_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9949);
});
var G__9960__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9936_SHARP_,p2__9937_SHARP_){
return cljs.core.conj.call(null,p1__9936_SHARP_,p2__9937_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9949);
});
var G__9960__4 = (function() { 
var G__9961__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9938_SHARP_,p2__9939_SHARP_){
return cljs.core.conj.call(null,p1__9938_SHARP_,cljs.core.apply.call(null,p2__9939_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9949);
};
var G__9961 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9961__delegate.call(this, x, y, z, args);
};
G__9961.cljs$lang$maxFixedArity = 3;
G__9961.cljs$lang$applyTo = (function (arglist__9962){
var x = cljs.core.first(arglist__9962);
var y = cljs.core.first(cljs.core.next(arglist__9962));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9962)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9962)));
return G__9961__delegate(x, y, z, args);
});
G__9961.cljs$lang$arity$variadic = G__9961__delegate;
return G__9961;
})()
;
G__9960 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9960__0.call(this);
case 1:
return G__9960__1.call(this,x);
case 2:
return G__9960__2.call(this,x,y);
case 3:
return G__9960__3.call(this,x,y,z);
default:
return G__9960__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9960.cljs$lang$maxFixedArity = 3;
G__9960.cljs$lang$applyTo = G__9960__4.cljs$lang$applyTo;
return G__9960;
})()
};
var G__9959 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9959__delegate.call(this, f, g, h, fs);
};
G__9959.cljs$lang$maxFixedArity = 3;
G__9959.cljs$lang$applyTo = (function (arglist__9963){
var f = cljs.core.first(arglist__9963);
var g = cljs.core.first(cljs.core.next(arglist__9963));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9963)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9963)));
return G__9959__delegate(f, g, h, fs);
});
G__9959.cljs$lang$arity$variadic = G__9959__delegate;
return G__9959;
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
var G__9966 = cljs.core.next.call(null,coll);
coll = G__9966;
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
if(cljs.core.truth_((function (){var and__3822__auto____9965 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9965)
{return (n > 0);
} else
{return and__3822__auto____9965;
}
})()))
{{
var G__9967 = (n - 1);
var G__9968 = cljs.core.next.call(null,coll);
n = G__9967;
coll = G__9968;
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
var matches__9970 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9970),s))
{if((cljs.core.count.call(null,matches__9970) === 1))
{return cljs.core.first.call(null,matches__9970);
} else
{return cljs.core.vec.call(null,matches__9970);
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
var matches__9972 = re.exec(s);
if((matches__9972 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9972) === 1))
{return cljs.core.first.call(null,matches__9972);
} else
{return cljs.core.vec.call(null,matches__9972);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9977 = cljs.core.re_find.call(null,re,s);
var match_idx__9978 = s.search(re);
var match_str__9979 = ((cljs.core.coll_QMARK_.call(null,match_data__9977))?cljs.core.first.call(null,match_data__9977):match_data__9977);
var post_match__9980 = cljs.core.subs.call(null,s,(match_idx__9978 + cljs.core.count.call(null,match_str__9979)));
if(cljs.core.truth_(match_data__9977))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9977,re_seq.call(null,re,post_match__9980));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9987__9988 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9989 = cljs.core.nth.call(null,vec__9987__9988,0,null);
var flags__9990 = cljs.core.nth.call(null,vec__9987__9988,1,null);
var pattern__9991 = cljs.core.nth.call(null,vec__9987__9988,2,null);
return (new RegExp(pattern__9991,flags__9990));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9981_SHARP_){
return print_one.call(null,p1__9981_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10001 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10001))
{var and__3822__auto____10005 = (function (){var G__10002__10003 = obj;
if(G__10002__10003)
{if((function (){var or__3824__auto____10004 = (G__10002__10003.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10004)
{return or__3824__auto____10004;
} else
{return G__10002__10003.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10002__10003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10002__10003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10002__10003);
}
})();
if(cljs.core.truth_(and__3822__auto____10005))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10005;
}
} else
{return and__3822__auto____10001;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10006 = !((obj == null));
if(and__3822__auto____10006)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10006;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10007__10008 = obj;
if(G__10007__10008)
{if((function (){var or__3824__auto____10009 = (G__10007__10008.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10009)
{return or__3824__auto____10009;
} else
{return G__10007__10008.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10007__10008.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10007__10008);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10007__10008);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10029 = (new goog.string.StringBuffer());
var G__10030__10031 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10030__10031)
{var string__10032 = cljs.core.first.call(null,G__10030__10031);
var G__10030__10033 = G__10030__10031;
while(true){
sb__10029.append(string__10032);
var temp__3974__auto____10034 = cljs.core.next.call(null,G__10030__10033);
if(temp__3974__auto____10034)
{var G__10030__10035 = temp__3974__auto____10034;
{
var G__10048 = cljs.core.first.call(null,G__10030__10035);
var G__10049 = G__10030__10035;
string__10032 = G__10048;
G__10030__10033 = G__10049;
continue;
}
} else
{}
break;
}
} else
{}
var G__10036__10037 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10036__10037)
{var obj__10038 = cljs.core.first.call(null,G__10036__10037);
var G__10036__10039 = G__10036__10037;
while(true){
sb__10029.append(" ");
var G__10040__10041 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10038,opts));
if(G__10040__10041)
{var string__10042 = cljs.core.first.call(null,G__10040__10041);
var G__10040__10043 = G__10040__10041;
while(true){
sb__10029.append(string__10042);
var temp__3974__auto____10044 = cljs.core.next.call(null,G__10040__10043);
if(temp__3974__auto____10044)
{var G__10040__10045 = temp__3974__auto____10044;
{
var G__10050 = cljs.core.first.call(null,G__10040__10045);
var G__10051 = G__10040__10045;
string__10042 = G__10050;
G__10040__10043 = G__10051;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10046 = cljs.core.next.call(null,G__10036__10039);
if(temp__3974__auto____10046)
{var G__10036__10047 = temp__3974__auto____10046;
{
var G__10052 = cljs.core.first.call(null,G__10036__10047);
var G__10053 = G__10036__10047;
obj__10038 = G__10052;
G__10036__10039 = G__10053;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10029;
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
var sb__10055 = cljs.core.pr_sb.call(null,objs,opts);
sb__10055.append("\n");
return [cljs.core.str(sb__10055)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10074__10075 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10074__10075)
{var string__10076 = cljs.core.first.call(null,G__10074__10075);
var G__10074__10077 = G__10074__10075;
while(true){
cljs.core.string_print.call(null,string__10076);
var temp__3974__auto____10078 = cljs.core.next.call(null,G__10074__10077);
if(temp__3974__auto____10078)
{var G__10074__10079 = temp__3974__auto____10078;
{
var G__10092 = cljs.core.first.call(null,G__10074__10079);
var G__10093 = G__10074__10079;
string__10076 = G__10092;
G__10074__10077 = G__10093;
continue;
}
} else
{}
break;
}
} else
{}
var G__10080__10081 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10080__10081)
{var obj__10082 = cljs.core.first.call(null,G__10080__10081);
var G__10080__10083 = G__10080__10081;
while(true){
cljs.core.string_print.call(null," ");
var G__10084__10085 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10082,opts));
if(G__10084__10085)
{var string__10086 = cljs.core.first.call(null,G__10084__10085);
var G__10084__10087 = G__10084__10085;
while(true){
cljs.core.string_print.call(null,string__10086);
var temp__3974__auto____10088 = cljs.core.next.call(null,G__10084__10087);
if(temp__3974__auto____10088)
{var G__10084__10089 = temp__3974__auto____10088;
{
var G__10094 = cljs.core.first.call(null,G__10084__10089);
var G__10095 = G__10084__10089;
string__10086 = G__10094;
G__10084__10087 = G__10095;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10090 = cljs.core.next.call(null,G__10080__10083);
if(temp__3974__auto____10090)
{var G__10080__10091 = temp__3974__auto____10090;
{
var G__10096 = cljs.core.first.call(null,G__10080__10091);
var G__10097 = G__10080__10091;
obj__10082 = G__10096;
G__10080__10083 = G__10097;
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
pr_str.cljs$lang$applyTo = (function (arglist__10098){
var objs = cljs.core.seq(arglist__10098);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10099){
var objs = cljs.core.seq(arglist__10099);;
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
pr.cljs$lang$applyTo = (function (arglist__10100){
var objs = cljs.core.seq(arglist__10100);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10101){
var objs = cljs.core.seq(arglist__10101);;
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
print_str.cljs$lang$applyTo = (function (arglist__10102){
var objs = cljs.core.seq(arglist__10102);;
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
println.cljs$lang$applyTo = (function (arglist__10103){
var objs = cljs.core.seq(arglist__10103);;
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
println_str.cljs$lang$applyTo = (function (arglist__10104){
var objs = cljs.core.seq(arglist__10104);;
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
prn.cljs$lang$applyTo = (function (arglist__10105){
var objs = cljs.core.seq(arglist__10105);;
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
printf.cljs$lang$applyTo = (function (arglist__10106){
var fmt = cljs.core.first(arglist__10106);
var args = cljs.core.rest(arglist__10106);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10107 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10107,"{",", ","}",opts,coll);
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
var pr_pair__10108 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10108,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10109 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10109,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10110 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10110))
{var nspc__10111 = temp__3974__auto____10110;
return [cljs.core.str(nspc__10111),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10112 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10112))
{var nspc__10113 = temp__3974__auto____10112;
return [cljs.core.str(nspc__10113),cljs.core.str("/")].join('');
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
var pr_pair__10114 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10114,"{",", ","}",opts,coll);
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
var normalize__10116 = (function (n,len){
var ns__10115 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10115) < len))
{{
var G__10118 = [cljs.core.str("0"),cljs.core.str(ns__10115)].join('');
ns__10115 = G__10118;
continue;
}
} else
{return ns__10115;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10116.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10116.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10116.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10116.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10116.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10116.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10117 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10117,"{",", ","}",opts,coll);
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
var this__10119 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10120 = this;
var G__10121__10122 = cljs.core.seq.call(null,this__10120.watches);
if(G__10121__10122)
{var G__10124__10126 = cljs.core.first.call(null,G__10121__10122);
var vec__10125__10127 = G__10124__10126;
var key__10128 = cljs.core.nth.call(null,vec__10125__10127,0,null);
var f__10129 = cljs.core.nth.call(null,vec__10125__10127,1,null);
var G__10121__10130 = G__10121__10122;
var G__10124__10131 = G__10124__10126;
var G__10121__10132 = G__10121__10130;
while(true){
var vec__10133__10134 = G__10124__10131;
var key__10135 = cljs.core.nth.call(null,vec__10133__10134,0,null);
var f__10136 = cljs.core.nth.call(null,vec__10133__10134,1,null);
var G__10121__10137 = G__10121__10132;
f__10136.call(null,key__10135,this$,oldval,newval);
var temp__3974__auto____10138 = cljs.core.next.call(null,G__10121__10137);
if(temp__3974__auto____10138)
{var G__10121__10139 = temp__3974__auto____10138;
{
var G__10146 = cljs.core.first.call(null,G__10121__10139);
var G__10147 = G__10121__10139;
G__10124__10131 = G__10146;
G__10121__10132 = G__10147;
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
var this__10140 = this;
return this$.watches = cljs.core.assoc.call(null,this__10140.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10141 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10141.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10142 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10142.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10143 = this;
return this__10143.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10144 = this;
return this__10144.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10145 = this;
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
var G__10159__delegate = function (x,p__10148){
var map__10154__10155 = p__10148;
var map__10154__10156 = ((cljs.core.seq_QMARK_.call(null,map__10154__10155))?cljs.core.apply.call(null,cljs.core.hash_map,map__10154__10155):map__10154__10155);
var validator__10157 = cljs.core._lookup.call(null,map__10154__10156,"\uFDD0'validator",null);
var meta__10158 = cljs.core._lookup.call(null,map__10154__10156,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10158,validator__10157,null));
};
var G__10159 = function (x,var_args){
var p__10148 = null;
if (goog.isDef(var_args)) {
  p__10148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10159__delegate.call(this, x, p__10148);
};
G__10159.cljs$lang$maxFixedArity = 1;
G__10159.cljs$lang$applyTo = (function (arglist__10160){
var x = cljs.core.first(arglist__10160);
var p__10148 = cljs.core.rest(arglist__10160);
return G__10159__delegate(x, p__10148);
});
G__10159.cljs$lang$arity$variadic = G__10159__delegate;
return G__10159;
})()
;
atom = function(x,var_args){
var p__10148 = var_args;
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
var temp__3974__auto____10164 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10164))
{var validate__10165 = temp__3974__auto____10164;
if(cljs.core.truth_(validate__10165.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10166 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10166,new_value);
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
var G__10167__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10167 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10167__delegate.call(this, a, f, x, y, z, more);
};
G__10167.cljs$lang$maxFixedArity = 5;
G__10167.cljs$lang$applyTo = (function (arglist__10168){
var a = cljs.core.first(arglist__10168);
var f = cljs.core.first(cljs.core.next(arglist__10168));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10168)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10168))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10168)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10168)))));
return G__10167__delegate(a, f, x, y, z, more);
});
G__10167.cljs$lang$arity$variadic = G__10167__delegate;
return G__10167;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10169){
var iref = cljs.core.first(arglist__10169);
var f = cljs.core.first(cljs.core.next(arglist__10169));
var args = cljs.core.rest(cljs.core.next(arglist__10169));
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
var this__10170 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10170.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10171 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10171.state,(function (p__10172){
var map__10173__10174 = p__10172;
var map__10173__10175 = ((cljs.core.seq_QMARK_.call(null,map__10173__10174))?cljs.core.apply.call(null,cljs.core.hash_map,map__10173__10174):map__10173__10174);
var curr_state__10176 = map__10173__10175;
var done__10177 = cljs.core._lookup.call(null,map__10173__10175,"\uFDD0'done",null);
if(cljs.core.truth_(done__10177))
{return curr_state__10176;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10171.f.call(null)});
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
var map__10198__10199 = options;
var map__10198__10200 = ((cljs.core.seq_QMARK_.call(null,map__10198__10199))?cljs.core.apply.call(null,cljs.core.hash_map,map__10198__10199):map__10198__10199);
var keywordize_keys__10201 = cljs.core._lookup.call(null,map__10198__10200,"\uFDD0'keywordize-keys",null);
var keyfn__10202 = (cljs.core.truth_(keywordize_keys__10201)?cljs.core.keyword:cljs.core.str);
var f__10217 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2468__auto____10216 = (function iter__10210(s__10211){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10211__10214 = s__10211;
while(true){
if(cljs.core.seq.call(null,s__10211__10214))
{var k__10215 = cljs.core.first.call(null,s__10211__10214);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10202.call(null,k__10215),thisfn.call(null,(x[k__10215]))], true),iter__10210.call(null,cljs.core.rest.call(null,s__10211__10214)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2468__auto____10216.call(null,cljs.core.js_keys.call(null,x));
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
return f__10217.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10218){
var x = cljs.core.first(arglist__10218);
var options = cljs.core.rest(arglist__10218);
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
var mem__10223 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10227__delegate = function (args){
var temp__3971__auto____10224 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10223),args,null);
if(cljs.core.truth_(temp__3971__auto____10224))
{var v__10225 = temp__3971__auto____10224;
return v__10225;
} else
{var ret__10226 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10223,cljs.core.assoc,args,ret__10226);
return ret__10226;
}
};
var G__10227 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10227__delegate.call(this, args);
};
G__10227.cljs$lang$maxFixedArity = 0;
G__10227.cljs$lang$applyTo = (function (arglist__10228){
var args = cljs.core.seq(arglist__10228);;
return G__10227__delegate(args);
});
G__10227.cljs$lang$arity$variadic = G__10227__delegate;
return G__10227;
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
var ret__10230 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10230))
{{
var G__10231 = ret__10230;
f = G__10231;
continue;
}
} else
{return ret__10230;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10232__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10232 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10232__delegate.call(this, f, args);
};
G__10232.cljs$lang$maxFixedArity = 1;
G__10232.cljs$lang$applyTo = (function (arglist__10233){
var f = cljs.core.first(arglist__10233);
var args = cljs.core.rest(arglist__10233);
return G__10232__delegate(f, args);
});
G__10232.cljs$lang$arity$variadic = G__10232__delegate;
return G__10232;
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
var k__10235 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10235,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10235,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10244 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10244)
{return or__3824__auto____10244;
} else
{var or__3824__auto____10245 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10245)
{return or__3824__auto____10245;
} else
{var and__3822__auto____10246 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10246)
{var and__3822__auto____10247 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10247)
{var and__3822__auto____10248 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10248)
{var ret__10249 = true;
var i__10250 = 0;
while(true){
if((function (){var or__3824__auto____10251 = cljs.core.not.call(null,ret__10249);
if(or__3824__auto____10251)
{return or__3824__auto____10251;
} else
{return (i__10250 === cljs.core.count.call(null,parent));
}
})())
{return ret__10249;
} else
{{
var G__10252 = isa_QMARK_.call(null,h,child.call(null,i__10250),parent.call(null,i__10250));
var G__10253 = (i__10250 + 1);
ret__10249 = G__10252;
i__10250 = G__10253;
continue;
}
}
break;
}
} else
{return and__3822__auto____10248;
}
} else
{return and__3822__auto____10247;
}
} else
{return and__3822__auto____10246;
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
var tp__10262 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10263 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10264 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10265 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10266 = ((cljs.core.contains_QMARK_.call(null,tp__10262.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10264.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10264.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10262,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10265.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10263,parent,ta__10264),"\uFDD0'descendants":tf__10265.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10264,tag,td__10263)});
})());
if(cljs.core.truth_(or__3824__auto____10266))
{return or__3824__auto____10266;
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
var parentMap__10271 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10272 = (cljs.core.truth_(parentMap__10271.call(null,tag))?cljs.core.disj.call(null,parentMap__10271.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10273 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10272))?cljs.core.assoc.call(null,parentMap__10271,tag,childsParents__10272):cljs.core.dissoc.call(null,parentMap__10271,tag));
var deriv_seq__10274 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10254_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10254_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10254_SHARP_),cljs.core.second.call(null,p1__10254_SHARP_)));
}),cljs.core.seq.call(null,newParents__10273)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10271.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10255_SHARP_,p2__10256_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10255_SHARP_,p2__10256_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10274));
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
var xprefs__10282 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10284 = (cljs.core.truth_((function (){var and__3822__auto____10283 = xprefs__10282;
if(cljs.core.truth_(and__3822__auto____10283))
{return xprefs__10282.call(null,y);
} else
{return and__3822__auto____10283;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10284))
{return or__3824__auto____10284;
} else
{var or__3824__auto____10286 = (function (){var ps__10285 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10285) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10285),prefer_table)))
{} else
{}
{
var G__10289 = cljs.core.rest.call(null,ps__10285);
ps__10285 = G__10289;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10286))
{return or__3824__auto____10286;
} else
{var or__3824__auto____10288 = (function (){var ps__10287 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10287) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10287),y,prefer_table)))
{} else
{}
{
var G__10290 = cljs.core.rest.call(null,ps__10287);
ps__10287 = G__10290;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10288))
{return or__3824__auto____10288;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10292 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10292))
{return or__3824__auto____10292;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10310 = cljs.core.reduce.call(null,(function (be,p__10302){
var vec__10303__10304 = p__10302;
var k__10305 = cljs.core.nth.call(null,vec__10303__10304,0,null);
var ___10306 = cljs.core.nth.call(null,vec__10303__10304,1,null);
var e__10307 = vec__10303__10304;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10305))
{var be2__10309 = (cljs.core.truth_((function (){var or__3824__auto____10308 = (be == null);
if(or__3824__auto____10308)
{return or__3824__auto____10308;
} else
{return cljs.core.dominates.call(null,k__10305,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10307:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10309),k__10305,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10305),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10309)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10309;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10310))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10310));
return cljs.core.second.call(null,best_entry__10310);
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
if((function (){var and__3822__auto____10315 = mf;
if(and__3822__auto____10315)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10315;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2369__auto____10316 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10317 = (cljs.core._reset[goog.typeOf(x__2369__auto____10316)]);
if(or__3824__auto____10317)
{return or__3824__auto____10317;
} else
{var or__3824__auto____10318 = (cljs.core._reset["_"]);
if(or__3824__auto____10318)
{return or__3824__auto____10318;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10323 = mf;
if(and__3822__auto____10323)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10323;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2369__auto____10324 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10325 = (cljs.core._add_method[goog.typeOf(x__2369__auto____10324)]);
if(or__3824__auto____10325)
{return or__3824__auto____10325;
} else
{var or__3824__auto____10326 = (cljs.core._add_method["_"]);
if(or__3824__auto____10326)
{return or__3824__auto____10326;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10331 = mf;
if(and__3822__auto____10331)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10331;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2369__auto____10332 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10333 = (cljs.core._remove_method[goog.typeOf(x__2369__auto____10332)]);
if(or__3824__auto____10333)
{return or__3824__auto____10333;
} else
{var or__3824__auto____10334 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10334)
{return or__3824__auto____10334;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10339 = mf;
if(and__3822__auto____10339)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10339;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2369__auto____10340 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10341 = (cljs.core._prefer_method[goog.typeOf(x__2369__auto____10340)]);
if(or__3824__auto____10341)
{return or__3824__auto____10341;
} else
{var or__3824__auto____10342 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10342)
{return or__3824__auto____10342;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10347 = mf;
if(and__3822__auto____10347)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10347;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2369__auto____10348 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10349 = (cljs.core._get_method[goog.typeOf(x__2369__auto____10348)]);
if(or__3824__auto____10349)
{return or__3824__auto____10349;
} else
{var or__3824__auto____10350 = (cljs.core._get_method["_"]);
if(or__3824__auto____10350)
{return or__3824__auto____10350;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10355 = mf;
if(and__3822__auto____10355)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10355;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2369__auto____10356 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10357 = (cljs.core._methods[goog.typeOf(x__2369__auto____10356)]);
if(or__3824__auto____10357)
{return or__3824__auto____10357;
} else
{var or__3824__auto____10358 = (cljs.core._methods["_"]);
if(or__3824__auto____10358)
{return or__3824__auto____10358;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10363 = mf;
if(and__3822__auto____10363)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10363;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2369__auto____10364 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10365 = (cljs.core._prefers[goog.typeOf(x__2369__auto____10364)]);
if(or__3824__auto____10365)
{return or__3824__auto____10365;
} else
{var or__3824__auto____10366 = (cljs.core._prefers["_"]);
if(or__3824__auto____10366)
{return or__3824__auto____10366;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10371 = mf;
if(and__3822__auto____10371)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10371;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2369__auto____10372 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10373 = (cljs.core._dispatch[goog.typeOf(x__2369__auto____10372)]);
if(or__3824__auto____10373)
{return or__3824__auto____10373;
} else
{var or__3824__auto____10374 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10374)
{return or__3824__auto____10374;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10377 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10378 = cljs.core._get_method.call(null,mf,dispatch_val__10377);
if(cljs.core.truth_(target_fn__10378))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10377)].join('')));
}
return cljs.core.apply.call(null,target_fn__10378,args);
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
var this__10379 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10380 = this;
cljs.core.swap_BANG_.call(null,this__10380.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10380.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10380.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10380.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10381 = this;
cljs.core.swap_BANG_.call(null,this__10381.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10381.method_cache,this__10381.method_table,this__10381.cached_hierarchy,this__10381.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10382 = this;
cljs.core.swap_BANG_.call(null,this__10382.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10382.method_cache,this__10382.method_table,this__10382.cached_hierarchy,this__10382.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10383 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10383.cached_hierarchy),cljs.core.deref.call(null,this__10383.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10383.method_cache,this__10383.method_table,this__10383.cached_hierarchy,this__10383.hierarchy);
}
var temp__3971__auto____10384 = cljs.core.deref.call(null,this__10383.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10384))
{var target_fn__10385 = temp__3971__auto____10384;
return target_fn__10385;
} else
{var temp__3971__auto____10386 = cljs.core.find_and_cache_best_method.call(null,this__10383.name,dispatch_val,this__10383.hierarchy,this__10383.method_table,this__10383.prefer_table,this__10383.method_cache,this__10383.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10386))
{var target_fn__10387 = temp__3971__auto____10386;
return target_fn__10387;
} else
{return cljs.core.deref.call(null,this__10383.method_table).call(null,this__10383.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10388 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10388.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10388.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10388.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10388.method_cache,this__10388.method_table,this__10388.cached_hierarchy,this__10388.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10389 = this;
return cljs.core.deref.call(null,this__10389.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10390 = this;
return cljs.core.deref.call(null,this__10390.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10391 = this;
return cljs.core.do_dispatch.call(null,mf,this__10391.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10393__delegate = function (_,args){
var self__10392 = this;
return cljs.core._dispatch.call(null,self__10392,args);
};
var G__10393 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10393__delegate.call(this, _, args);
};
G__10393.cljs$lang$maxFixedArity = 1;
G__10393.cljs$lang$applyTo = (function (arglist__10394){
var _ = cljs.core.first(arglist__10394);
var args = cljs.core.rest(arglist__10394);
return G__10393__delegate(_, args);
});
G__10393.cljs$lang$arity$variadic = G__10393__delegate;
return G__10393;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10395 = this;
return cljs.core._dispatch.call(null,self__10395,args);
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
var this__10396 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10398,_){
var this__10397 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10397.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10399 = this;
var and__3822__auto____10400 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10400)
{return (this__10399.uuid === other.uuid);
} else
{return and__3822__auto____10400;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10401 = this;
var this__10402 = this;
return cljs.core.pr_str.call(null,this__10402);
});
cljs.core.UUID;
