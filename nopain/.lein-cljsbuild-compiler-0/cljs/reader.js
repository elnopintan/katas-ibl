goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____10497 = reader;
if(and__3822__auto____10497)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____10497;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2369__auto____10498 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____10499 = (cljs.reader.read_char[goog.typeOf(x__2369__auto____10498)]);
if(or__3824__auto____10499)
{return or__3824__auto____10499;
} else
{var or__3824__auto____10500 = (cljs.reader.read_char["_"]);
if(or__3824__auto____10500)
{return or__3824__auto____10500;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____10505 = reader;
if(and__3822__auto____10505)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____10505;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2369__auto____10506 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____10507 = (cljs.reader.unread[goog.typeOf(x__2369__auto____10506)]);
if(or__3824__auto____10507)
{return or__3824__auto____10507;
} else
{var or__3824__auto____10508 = (cljs.reader.unread["_"]);
if(or__3824__auto____10508)
{return or__3824__auto____10508;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__10509 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__10509.buffer_atom)))
{var idx__10510 = cljs.core.deref.call(null,this__10509.index_atom);
cljs.core.swap_BANG_.call(null,this__10509.index_atom,cljs.core.inc);
return (this__10509.s[idx__10510]);
} else
{var buf__10511 = cljs.core.deref.call(null,this__10509.buffer_atom);
cljs.core.swap_BANG_.call(null,this__10509.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__10511);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__10512 = this;
return cljs.core.swap_BANG_.call(null,this__10512.buffer_atom,(function (p1__10492_SHARP_){
return cljs.core.cons.call(null,ch,p1__10492_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____10514 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____10514))
{return or__3824__auto____10514;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____10519 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____10519)
{return or__3824__auto____10519;
} else
{var and__3822__auto____10521 = (function (){var or__3824__auto____10520 = ("+" === initch);
if(or__3824__auto____10520)
{return or__3824__auto____10520;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____10521))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__10522 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__10522);
return next_ch__10522;
})());
} else
{return and__3822__auto____10521;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__10523){
var rdr = cljs.core.first(arglist__10523);
var msg = cljs.core.rest(arglist__10523);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____10527 = !((ch === "#"));
if(and__3822__auto____10527)
{var and__3822__auto____10528 = !((ch === "'"));
if(and__3822__auto____10528)
{var and__3822__auto____10529 = !((ch === ":"));
if(and__3822__auto____10529)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____10529;
}
} else
{return and__3822__auto____10528;
}
} else
{return and__3822__auto____10527;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__10534 = (new goog.string.StringBuffer(initch));
var ch__10535 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____10536 = (ch__10535 == null);
if(or__3824__auto____10536)
{return or__3824__auto____10536;
} else
{var or__3824__auto____10537 = cljs.reader.whitespace_QMARK_.call(null,ch__10535);
if(or__3824__auto____10537)
{return or__3824__auto____10537;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__10535);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__10535);
return sb__10534.toString();
} else
{{
var G__10538 = (function (){sb__10534.append(ch__10535);
return sb__10534;
})();
var G__10539 = cljs.reader.read_char.call(null,rdr);
sb__10534 = G__10538;
ch__10535 = G__10539;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__10543 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____10544 = (ch__10543 === "n");
if(or__3824__auto____10544)
{return or__3824__auto____10544;
} else
{var or__3824__auto____10545 = (ch__10543 === "r");
if(or__3824__auto____10545)
{return or__3824__auto____10545;
} else
{return (ch__10543 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__10547 = re.exec(s);
if((matches__10547 == null))
{return null;
} else
{if((matches__10547.length === 1))
{return (matches__10547[0]);
} else
{return matches__10547;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__10555 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__10556 = (groups__10555[2]);
if(!((function (){var or__3824__auto____10557 = (group3__10556 == null);
if(or__3824__auto____10557)
{return or__3824__auto____10557;
} else
{return (group3__10556.length < 1);
}
})()))
{return 0;
} else
{var negate__10558 = ((("-" === (groups__10555[1])))?-1:1);
var a__10559 = (cljs.core.truth_((groups__10555[3]))?[(groups__10555[3]),10]:(cljs.core.truth_((groups__10555[4]))?[(groups__10555[4]),16]:(cljs.core.truth_((groups__10555[5]))?[(groups__10555[5]),8]:(cljs.core.truth_((groups__10555[7]))?[(groups__10555[7]),parseInt((groups__10555[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__10560 = (a__10559[0]);
var radix__10561 = (a__10559[1]);
if((n__10560 == null))
{return null;
} else
{return (negate__10558 * parseInt(n__10560,radix__10561));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__10565 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__10566 = (groups__10565[1]);
var denominator__10567 = (groups__10565[2]);
return (parseInt(numinator__10566) / parseInt(denominator__10567));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__10570 = re.exec(s);
if((function (){var and__3822__auto____10571 = !((matches__10570 == null));
if(and__3822__auto____10571)
{return ((matches__10570[0]) === s);
} else
{return and__3822__auto____10571;
}
})())
{if((matches__10570.length === 1))
{return (matches__10570[0]);
} else
{return matches__10570;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__10573 = parseInt(code_str,16);
return String.fromCharCode(code__10573);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__10576 = cljs.reader.read_char.call(null,reader);
var mapresult__10577 = cljs.reader.escape_char_map.call(null,ch__10576);
if(cljs.core.truth_(mapresult__10577))
{return mapresult__10577;
} else
{if((ch__10576 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__10576,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__10576 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__10576,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__10576))
{return String.fromCharCode(ch__10576);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__10576);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__10579 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__10579)))
{{
var G__10580 = cljs.reader.read_char.call(null,rdr);
ch__10579 = G__10580;
continue;
}
} else
{return ch__10579;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__10587 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__10588 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__10588))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__10588))
{return cljs.core.persistent_BANG_.call(null,a__10587);
} else
{var temp__3971__auto____10589 = cljs.reader.macros.call(null,ch__10588);
if(cljs.core.truth_(temp__3971__auto____10589))
{var macrofn__10590 = temp__3971__auto____10589;
var mret__10591 = macrofn__10590.call(null,rdr,ch__10588);
{
var G__10593 = (((mret__10591 === rdr))?a__10587:cljs.core.conj_BANG_.call(null,a__10587,mret__10591));
a__10587 = G__10593;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__10588);
var o__10592 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__10594 = (((o__10592 === rdr))?a__10587:cljs.core.conj_BANG_.call(null,a__10587,o__10592));
a__10587 = G__10594;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__10599 = cljs.reader.read_char.call(null,rdr);
var dm__10600 = cljs.reader.dispatch_macros.call(null,ch__10599);
if(cljs.core.truth_(dm__10600))
{return dm__10600.call(null,rdr,_);
} else
{var temp__3971__auto____10601 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__10599);
if(cljs.core.truth_(temp__3971__auto____10601))
{var obj__10602 = temp__3971__auto____10601;
return obj__10602;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__10599);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__10604 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__10604)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__10604);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__10611 = (new goog.string.StringBuffer(initch));
var ch__10612 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____10613 = (ch__10612 == null);
if(or__3824__auto____10613)
{return or__3824__auto____10613;
} else
{var or__3824__auto____10614 = cljs.reader.whitespace_QMARK_.call(null,ch__10612);
if(or__3824__auto____10614)
{return or__3824__auto____10614;
} else
{return cljs.reader.macros.call(null,ch__10612);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__10612);
var s__10615 = buffer__10611.toString();
var or__3824__auto____10616 = cljs.reader.match_number.call(null,s__10615);
if(cljs.core.truth_(or__3824__auto____10616))
{return or__3824__auto____10616;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__10615,"]");
}
} else
{{
var G__10617 = (function (){buffer__10611.append(ch__10612);
return buffer__10611;
})();
var G__10618 = cljs.reader.read_char.call(null,reader);
buffer__10611 = G__10617;
ch__10612 = G__10618;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__10621 = (new goog.string.StringBuffer());
var ch__10622 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__10622 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__10622))
{{
var G__10623 = (function (){buffer__10621.append(cljs.reader.escape_char.call(null,buffer__10621,reader));
return buffer__10621;
})();
var G__10624 = cljs.reader.read_char.call(null,reader);
buffer__10621 = G__10623;
ch__10622 = G__10624;
continue;
}
} else
{if(("\"" === ch__10622))
{return buffer__10621.toString();
} else
{if("\uFDD0'default")
{{
var G__10625 = (function (){buffer__10621.append(ch__10622);
return buffer__10621;
})();
var G__10626 = cljs.reader.read_char.call(null,reader);
buffer__10621 = G__10625;
ch__10622 = G__10626;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
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
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__10628 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__10628,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__10628,0,token__10628.indexOf("/")),cljs.core.subs.call(null,token__10628,(token__10628.indexOf("/") + 1),token__10628.length));
} else
{return cljs.reader.special_symbols.call(null,token__10628,cljs.core.symbol.call(null,token__10628));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__10638 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__10639 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__10638);
var token__10640 = (a__10639[0]);
var ns__10641 = (a__10639[1]);
var name__10642 = (a__10639[2]);
if(cljs.core.truth_((function (){var or__3824__auto____10644 = (function (){var and__3822__auto____10643 = !((void 0 === ns__10641));
if(and__3822__auto____10643)
{return (ns__10641.substring((ns__10641.length - 2),ns__10641.length) === ":/");
} else
{return and__3822__auto____10643;
}
})();
if(cljs.core.truth_(or__3824__auto____10644))
{return or__3824__auto____10644;
} else
{var or__3824__auto____10645 = ((name__10642[(name__10642.length - 1)]) === ":");
if(or__3824__auto____10645)
{return or__3824__auto____10645;
} else
{return !((token__10640.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__10640);
} else
{if((function (){var and__3822__auto____10646 = !((ns__10641 == null));
if(and__3822__auto____10646)
{return (ns__10641.length > 0);
} else
{return and__3822__auto____10646;
}
})())
{return cljs.core.keyword.call(null,ns__10641.substring(0,ns__10641.indexOf("/")),name__10642);
} else
{return cljs.core.keyword.call(null,token__10640);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__10652 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__10652))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__10653 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__10654__10655 = o__10653;
if(G__10654__10655)
{if((function (){var or__3824__auto____10656 = (G__10654__10655.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____10656)
{return or__3824__auto____10656;
} else
{return G__10654__10655.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__10654__10655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__10654__10655);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__10654__10655);
}
})())
{return cljs.core.with_meta.call(null,o__10653,cljs.core.merge.call(null,cljs.core.meta.call(null,o__10653),m__10652));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__10660 = cljs.reader.read_char.call(null,reader);
if((ch__10660 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__10660))
{{
var G__10663 = reader;
var G__10664 = eof_is_error;
var G__10665 = sentinel;
var G__10666 = is_recursive;
reader = G__10663;
eof_is_error = G__10664;
sentinel = G__10665;
is_recursive = G__10666;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__10660))
{{
var G__10667 = cljs.reader.read_comment.call(null,reader,ch__10660);
var G__10668 = eof_is_error;
var G__10669 = sentinel;
var G__10670 = is_recursive;
reader = G__10667;
eof_is_error = G__10668;
sentinel = G__10669;
is_recursive = G__10670;
continue;
}
} else
{if("\uFDD0'else")
{var f__10661 = cljs.reader.macros.call(null,ch__10660);
var res__10662 = (cljs.core.truth_(f__10661)?f__10661.call(null,reader,ch__10660):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__10660))?cljs.reader.read_number.call(null,reader,ch__10660):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__10660):null)));
if((res__10662 === reader))
{{
var G__10671 = reader;
var G__10672 = eof_is_error;
var G__10673 = sentinel;
var G__10674 = is_recursive;
reader = G__10671;
eof_is_error = G__10672;
sentinel = G__10673;
is_recursive = G__10674;
continue;
}
} else
{return res__10662;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__10676 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__10676,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__10678 = (new goog.string.StringBuffer(s));
while(true){
if((b__10678.getLength() < width))
{{
var G__10679 = b__10678.append("0");
b__10678 = G__10679;
continue;
}
} else
{return b__10678.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____10682 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____10682))
{var or__3824__auto____10683 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____10683))
{return or__3824__auto____10683;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____10682;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__10688 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__10689 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__10689:dim_norm__10688),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__10690 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__10692 = (function (low,n,high,msg){
if((function (){var and__3822__auto____10691 = (low <= n);
if(and__3822__auto____10691)
{return (n <= high);
} else
{return and__3822__auto____10691;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____10693 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__10690,ts)));
if(cljs.core.truth_(temp__3974__auto____10693))
{var vec__10694__10697 = temp__3974__auto____10693;
var vec__10695__10698 = cljs.core.nth.call(null,vec__10694__10697,0,null);
var ___10699 = cljs.core.nth.call(null,vec__10695__10698,0,null);
var years__10700 = cljs.core.nth.call(null,vec__10695__10698,1,null);
var months__10701 = cljs.core.nth.call(null,vec__10695__10698,2,null);
var days__10702 = cljs.core.nth.call(null,vec__10695__10698,3,null);
var hours__10703 = cljs.core.nth.call(null,vec__10695__10698,4,null);
var minutes__10704 = cljs.core.nth.call(null,vec__10695__10698,5,null);
var seconds__10705 = cljs.core.nth.call(null,vec__10695__10698,6,null);
var milliseconds__10706 = cljs.core.nth.call(null,vec__10695__10698,7,null);
var vec__10696__10707 = cljs.core.nth.call(null,vec__10694__10697,1,null);
var ___10708 = cljs.core.nth.call(null,vec__10696__10707,0,null);
var ___10709 = cljs.core.nth.call(null,vec__10696__10707,1,null);
var ___10710 = cljs.core.nth.call(null,vec__10696__10707,2,null);
var V__10711 = vec__10694__10697;
var vec__10712__10715 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__10687_SHARP_){
return parseInt(p1__10687_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__10685_SHARP_,p2__10684_SHARP_){
return cljs.core.update_in.call(null,p2__10684_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__10685_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__10686_SHARP_){
if(cljs.core._EQ_.call(null,p1__10686_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__10711));
var vec__10713__10716 = cljs.core.nth.call(null,vec__10712__10715,0,null);
var ___10717 = cljs.core.nth.call(null,vec__10713__10716,0,null);
var y__10718 = cljs.core.nth.call(null,vec__10713__10716,1,null);
var mo__10719 = cljs.core.nth.call(null,vec__10713__10716,2,null);
var d__10720 = cljs.core.nth.call(null,vec__10713__10716,3,null);
var h__10721 = cljs.core.nth.call(null,vec__10713__10716,4,null);
var m__10722 = cljs.core.nth.call(null,vec__10713__10716,5,null);
var s__10723 = cljs.core.nth.call(null,vec__10713__10716,6,null);
var ms__10724 = cljs.core.nth.call(null,vec__10713__10716,7,null);
var vec__10714__10725 = cljs.core.nth.call(null,vec__10712__10715,1,null);
var offset_sign__10726 = cljs.core.nth.call(null,vec__10714__10725,0,null);
var offset_hours__10727 = cljs.core.nth.call(null,vec__10714__10725,1,null);
var offset_minutes__10728 = cljs.core.nth.call(null,vec__10714__10725,2,null);
var offset__10729 = (offset_sign__10726 * ((offset_hours__10727 * 60) + offset_minutes__10728));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__10700))?1970:y__10718),((cljs.core.not.call(null,months__10701))?1:check__10692.call(null,1,mo__10719,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__10702))?1:check__10692.call(null,1,d__10720,cljs.reader.days_in_month.call(null,mo__10719,cljs.reader.leap_year_QMARK_.call(null,y__10718)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__10703))?0:check__10692.call(null,0,h__10721,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__10704))?0:check__10692.call(null,0,m__10722,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__10705))?0:check__10692.call(null,0,s__10723,((cljs.core._EQ_.call(null,m__10722,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__10706))?0:check__10692.call(null,0,ms__10724,999,"timestamp millisecond field must be in range 0..999")),offset__10729], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____10741 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____10741))
{var vec__10742__10743 = temp__3971__auto____10741;
var years__10744 = cljs.core.nth.call(null,vec__10742__10743,0,null);
var months__10745 = cljs.core.nth.call(null,vec__10742__10743,1,null);
var days__10746 = cljs.core.nth.call(null,vec__10742__10743,2,null);
var hours__10747 = cljs.core.nth.call(null,vec__10742__10743,3,null);
var minutes__10748 = cljs.core.nth.call(null,vec__10742__10743,4,null);
var seconds__10749 = cljs.core.nth.call(null,vec__10742__10743,5,null);
var ms__10750 = cljs.core.nth.call(null,vec__10742__10743,6,null);
var offset__10751 = cljs.core.nth.call(null,vec__10742__10743,7,null);
return (new Date((Date.UTC(years__10744,(months__10745 - 1),days__10746,hours__10747,minutes__10748,seconds__10749,ms__10750) - ((offset__10751 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__10755 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____10756 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__10755),null);
if(cljs.core.truth_(temp__3971__auto____10756))
{var pfn__10757 = temp__3971__auto____10756;
return pfn__10757.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__10755)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__10760 = cljs.core.name.call(null,tag);
var old_parser__10761 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__10760,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__10760,f);
return old_parser__10761;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__10764 = cljs.core.name.call(null,tag);
var old_parser__10765 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__10764,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__10764);
return old_parser__10765;
});
