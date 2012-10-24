goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____12774 = reader;
if(and__3822__auto____12774)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____12774;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2369__auto____12775 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12776 = (cljs.reader.read_char[goog.typeOf(x__2369__auto____12775)]);
if(or__3824__auto____12776)
{return or__3824__auto____12776;
} else
{var or__3824__auto____12777 = (cljs.reader.read_char["_"]);
if(or__3824__auto____12777)
{return or__3824__auto____12777;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____12782 = reader;
if(and__3822__auto____12782)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____12782;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2369__auto____12783 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12784 = (cljs.reader.unread[goog.typeOf(x__2369__auto____12783)]);
if(or__3824__auto____12784)
{return or__3824__auto____12784;
} else
{var or__3824__auto____12785 = (cljs.reader.unread["_"]);
if(or__3824__auto____12785)
{return or__3824__auto____12785;
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
var this__12786 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12786.buffer_atom)))
{var idx__12787 = cljs.core.deref.call(null,this__12786.index_atom);
cljs.core.swap_BANG_.call(null,this__12786.index_atom,cljs.core.inc);
return (this__12786.s[idx__12787]);
} else
{var buf__12788 = cljs.core.deref.call(null,this__12786.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12786.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12788);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12789 = this;
return cljs.core.swap_BANG_.call(null,this__12789.buffer_atom,(function (p1__12769_SHARP_){
return cljs.core.cons.call(null,ch,p1__12769_SHARP_);
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
var or__3824__auto____12791 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____12791))
{return or__3824__auto____12791;
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
var or__3824__auto____12796 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____12796)
{return or__3824__auto____12796;
} else
{var and__3822__auto____12798 = (function (){var or__3824__auto____12797 = ("+" === initch);
if(or__3824__auto____12797)
{return or__3824__auto____12797;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____12798))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12799 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12799);
return next_ch__12799;
})());
} else
{return and__3822__auto____12798;
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
reader_error.cljs$lang$applyTo = (function (arglist__12800){
var rdr = cljs.core.first(arglist__12800);
var msg = cljs.core.rest(arglist__12800);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____12804 = !((ch === "#"));
if(and__3822__auto____12804)
{var and__3822__auto____12805 = !((ch === "'"));
if(and__3822__auto____12805)
{var and__3822__auto____12806 = !((ch === ":"));
if(and__3822__auto____12806)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____12806;
}
} else
{return and__3822__auto____12805;
}
} else
{return and__3822__auto____12804;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12811 = (new goog.string.StringBuffer(initch));
var ch__12812 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____12813 = (ch__12812 == null);
if(or__3824__auto____12813)
{return or__3824__auto____12813;
} else
{var or__3824__auto____12814 = cljs.reader.whitespace_QMARK_.call(null,ch__12812);
if(or__3824__auto____12814)
{return or__3824__auto____12814;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12812);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12812);
return sb__12811.toString();
} else
{{
var G__12815 = (function (){sb__12811.append(ch__12812);
return sb__12811;
})();
var G__12816 = cljs.reader.read_char.call(null,rdr);
sb__12811 = G__12815;
ch__12812 = G__12816;
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
var ch__12820 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____12821 = (ch__12820 === "n");
if(or__3824__auto____12821)
{return or__3824__auto____12821;
} else
{var or__3824__auto____12822 = (ch__12820 === "r");
if(or__3824__auto____12822)
{return or__3824__auto____12822;
} else
{return (ch__12820 == null);
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
var matches__12824 = re.exec(s);
if((matches__12824 == null))
{return null;
} else
{if((matches__12824.length === 1))
{return (matches__12824[0]);
} else
{return matches__12824;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12832 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12833 = (groups__12832[2]);
if(!((function (){var or__3824__auto____12834 = (group3__12833 == null);
if(or__3824__auto____12834)
{return or__3824__auto____12834;
} else
{return (group3__12833.length < 1);
}
})()))
{return 0;
} else
{var negate__12835 = ((("-" === (groups__12832[1])))?-1:1);
var a__12836 = (cljs.core.truth_((groups__12832[3]))?[(groups__12832[3]),10]:(cljs.core.truth_((groups__12832[4]))?[(groups__12832[4]),16]:(cljs.core.truth_((groups__12832[5]))?[(groups__12832[5]),8]:(cljs.core.truth_((groups__12832[7]))?[(groups__12832[7]),parseInt((groups__12832[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12837 = (a__12836[0]);
var radix__12838 = (a__12836[1]);
if((n__12837 == null))
{return null;
} else
{return (negate__12835 * parseInt(n__12837,radix__12838));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12842 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12843 = (groups__12842[1]);
var denominator__12844 = (groups__12842[2]);
return (parseInt(numinator__12843) / parseInt(denominator__12844));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12847 = re.exec(s);
if((function (){var and__3822__auto____12848 = !((matches__12847 == null));
if(and__3822__auto____12848)
{return ((matches__12847[0]) === s);
} else
{return and__3822__auto____12848;
}
})())
{if((matches__12847.length === 1))
{return (matches__12847[0]);
} else
{return matches__12847;
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
var code__12850 = parseInt(code_str,16);
return String.fromCharCode(code__12850);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12853 = cljs.reader.read_char.call(null,reader);
var mapresult__12854 = cljs.reader.escape_char_map.call(null,ch__12853);
if(cljs.core.truth_(mapresult__12854))
{return mapresult__12854;
} else
{if((ch__12853 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12853,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12853 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12853,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12853))
{return String.fromCharCode(ch__12853);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12853);
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
var ch__12856 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12856)))
{{
var G__12857 = cljs.reader.read_char.call(null,rdr);
ch__12856 = G__12857;
continue;
}
} else
{return ch__12856;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12864 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12865 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12865))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12865))
{return cljs.core.persistent_BANG_.call(null,a__12864);
} else
{var temp__3971__auto____12866 = cljs.reader.macros.call(null,ch__12865);
if(cljs.core.truth_(temp__3971__auto____12866))
{var macrofn__12867 = temp__3971__auto____12866;
var mret__12868 = macrofn__12867.call(null,rdr,ch__12865);
{
var G__12870 = (((mret__12868 === rdr))?a__12864:cljs.core.conj_BANG_.call(null,a__12864,mret__12868));
a__12864 = G__12870;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12865);
var o__12869 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12871 = (((o__12869 === rdr))?a__12864:cljs.core.conj_BANG_.call(null,a__12864,o__12869));
a__12864 = G__12871;
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
var ch__12876 = cljs.reader.read_char.call(null,rdr);
var dm__12877 = cljs.reader.dispatch_macros.call(null,ch__12876);
if(cljs.core.truth_(dm__12877))
{return dm__12877.call(null,rdr,_);
} else
{var temp__3971__auto____12878 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12876);
if(cljs.core.truth_(temp__3971__auto____12878))
{var obj__12879 = temp__3971__auto____12878;
return obj__12879;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12876);
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
var l__12881 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12881)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12881);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12888 = (new goog.string.StringBuffer(initch));
var ch__12889 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____12890 = (ch__12889 == null);
if(or__3824__auto____12890)
{return or__3824__auto____12890;
} else
{var or__3824__auto____12891 = cljs.reader.whitespace_QMARK_.call(null,ch__12889);
if(or__3824__auto____12891)
{return or__3824__auto____12891;
} else
{return cljs.reader.macros.call(null,ch__12889);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12889);
var s__12892 = buffer__12888.toString();
var or__3824__auto____12893 = cljs.reader.match_number.call(null,s__12892);
if(cljs.core.truth_(or__3824__auto____12893))
{return or__3824__auto____12893;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12892,"]");
}
} else
{{
var G__12894 = (function (){buffer__12888.append(ch__12889);
return buffer__12888;
})();
var G__12895 = cljs.reader.read_char.call(null,reader);
buffer__12888 = G__12894;
ch__12889 = G__12895;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12898 = (new goog.string.StringBuffer());
var ch__12899 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12899 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12899))
{{
var G__12900 = (function (){buffer__12898.append(cljs.reader.escape_char.call(null,buffer__12898,reader));
return buffer__12898;
})();
var G__12901 = cljs.reader.read_char.call(null,reader);
buffer__12898 = G__12900;
ch__12899 = G__12901;
continue;
}
} else
{if(("\"" === ch__12899))
{return buffer__12898.toString();
} else
{if("\uFDD0'default")
{{
var G__12902 = (function (){buffer__12898.append(ch__12899);
return buffer__12898;
})();
var G__12903 = cljs.reader.read_char.call(null,reader);
buffer__12898 = G__12902;
ch__12899 = G__12903;
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
var token__12905 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12905,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12905,0,token__12905.indexOf("/")),cljs.core.subs.call(null,token__12905,(token__12905.indexOf("/") + 1),token__12905.length));
} else
{return cljs.reader.special_symbols.call(null,token__12905,cljs.core.symbol.call(null,token__12905));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12915 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12916 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12915);
var token__12917 = (a__12916[0]);
var ns__12918 = (a__12916[1]);
var name__12919 = (a__12916[2]);
if(cljs.core.truth_((function (){var or__3824__auto____12921 = (function (){var and__3822__auto____12920 = !((void 0 === ns__12918));
if(and__3822__auto____12920)
{return (ns__12918.substring((ns__12918.length - 2),ns__12918.length) === ":/");
} else
{return and__3822__auto____12920;
}
})();
if(cljs.core.truth_(or__3824__auto____12921))
{return or__3824__auto____12921;
} else
{var or__3824__auto____12922 = ((name__12919[(name__12919.length - 1)]) === ":");
if(or__3824__auto____12922)
{return or__3824__auto____12922;
} else
{return !((token__12917.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12917);
} else
{if((function (){var and__3822__auto____12923 = !((ns__12918 == null));
if(and__3822__auto____12923)
{return (ns__12918.length > 0);
} else
{return and__3822__auto____12923;
}
})())
{return cljs.core.keyword.call(null,ns__12918.substring(0,ns__12918.indexOf("/")),name__12919);
} else
{return cljs.core.keyword.call(null,token__12917);
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
var m__12929 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12929))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12930 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12931__12932 = o__12930;
if(G__12931__12932)
{if((function (){var or__3824__auto____12933 = (G__12931__12932.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____12933)
{return or__3824__auto____12933;
} else
{return G__12931__12932.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12931__12932.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12931__12932);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12931__12932);
}
})())
{return cljs.core.with_meta.call(null,o__12930,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12930),m__12929));
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
var ch__12937 = cljs.reader.read_char.call(null,reader);
if((ch__12937 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12937))
{{
var G__12940 = reader;
var G__12941 = eof_is_error;
var G__12942 = sentinel;
var G__12943 = is_recursive;
reader = G__12940;
eof_is_error = G__12941;
sentinel = G__12942;
is_recursive = G__12943;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12937))
{{
var G__12944 = cljs.reader.read_comment.call(null,reader,ch__12937);
var G__12945 = eof_is_error;
var G__12946 = sentinel;
var G__12947 = is_recursive;
reader = G__12944;
eof_is_error = G__12945;
sentinel = G__12946;
is_recursive = G__12947;
continue;
}
} else
{if("\uFDD0'else")
{var f__12938 = cljs.reader.macros.call(null,ch__12937);
var res__12939 = (cljs.core.truth_(f__12938)?f__12938.call(null,reader,ch__12937):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12937))?cljs.reader.read_number.call(null,reader,ch__12937):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12937):null)));
if((res__12939 === reader))
{{
var G__12948 = reader;
var G__12949 = eof_is_error;
var G__12950 = sentinel;
var G__12951 = is_recursive;
reader = G__12948;
eof_is_error = G__12949;
sentinel = G__12950;
is_recursive = G__12951;
continue;
}
} else
{return res__12939;
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
var r__12953 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12953,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12955 = (new goog.string.StringBuffer(s));
while(true){
if((b__12955.getLength() < width))
{{
var G__12956 = b__12955.append("0");
b__12955 = G__12956;
continue;
}
} else
{return b__12955.toString();
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
var and__3822__auto____12959 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____12959))
{var or__3824__auto____12960 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____12960))
{return or__3824__auto____12960;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____12959;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12965 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12966 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12966:dim_norm__12965),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12967 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12969 = (function (low,n,high,msg){
if((function (){var and__3822__auto____12968 = (low <= n);
if(and__3822__auto____12968)
{return (n <= high);
} else
{return and__3822__auto____12968;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____12970 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12967,ts)));
if(cljs.core.truth_(temp__3974__auto____12970))
{var vec__12971__12974 = temp__3974__auto____12970;
var vec__12972__12975 = cljs.core.nth.call(null,vec__12971__12974,0,null);
var ___12976 = cljs.core.nth.call(null,vec__12972__12975,0,null);
var years__12977 = cljs.core.nth.call(null,vec__12972__12975,1,null);
var months__12978 = cljs.core.nth.call(null,vec__12972__12975,2,null);
var days__12979 = cljs.core.nth.call(null,vec__12972__12975,3,null);
var hours__12980 = cljs.core.nth.call(null,vec__12972__12975,4,null);
var minutes__12981 = cljs.core.nth.call(null,vec__12972__12975,5,null);
var seconds__12982 = cljs.core.nth.call(null,vec__12972__12975,6,null);
var milliseconds__12983 = cljs.core.nth.call(null,vec__12972__12975,7,null);
var vec__12973__12984 = cljs.core.nth.call(null,vec__12971__12974,1,null);
var ___12985 = cljs.core.nth.call(null,vec__12973__12984,0,null);
var ___12986 = cljs.core.nth.call(null,vec__12973__12984,1,null);
var ___12987 = cljs.core.nth.call(null,vec__12973__12984,2,null);
var V__12988 = vec__12971__12974;
var vec__12989__12992 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12964_SHARP_){
return parseInt(p1__12964_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12962_SHARP_,p2__12961_SHARP_){
return cljs.core.update_in.call(null,p2__12961_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12962_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12963_SHARP_){
if(cljs.core._EQ_.call(null,p1__12963_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12988));
var vec__12990__12993 = cljs.core.nth.call(null,vec__12989__12992,0,null);
var ___12994 = cljs.core.nth.call(null,vec__12990__12993,0,null);
var y__12995 = cljs.core.nth.call(null,vec__12990__12993,1,null);
var mo__12996 = cljs.core.nth.call(null,vec__12990__12993,2,null);
var d__12997 = cljs.core.nth.call(null,vec__12990__12993,3,null);
var h__12998 = cljs.core.nth.call(null,vec__12990__12993,4,null);
var m__12999 = cljs.core.nth.call(null,vec__12990__12993,5,null);
var s__13000 = cljs.core.nth.call(null,vec__12990__12993,6,null);
var ms__13001 = cljs.core.nth.call(null,vec__12990__12993,7,null);
var vec__12991__13002 = cljs.core.nth.call(null,vec__12989__12992,1,null);
var offset_sign__13003 = cljs.core.nth.call(null,vec__12991__13002,0,null);
var offset_hours__13004 = cljs.core.nth.call(null,vec__12991__13002,1,null);
var offset_minutes__13005 = cljs.core.nth.call(null,vec__12991__13002,2,null);
var offset__13006 = (offset_sign__13003 * ((offset_hours__13004 * 60) + offset_minutes__13005));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12977))?1970:y__12995),((cljs.core.not.call(null,months__12978))?1:check__12969.call(null,1,mo__12996,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12979))?1:check__12969.call(null,1,d__12997,cljs.reader.days_in_month.call(null,mo__12996,cljs.reader.leap_year_QMARK_.call(null,y__12995)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12980))?0:check__12969.call(null,0,h__12998,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12981))?0:check__12969.call(null,0,m__12999,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12982))?0:check__12969.call(null,0,s__13000,((cljs.core._EQ_.call(null,m__12999,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12983))?0:check__12969.call(null,0,ms__13001,999,"timestamp millisecond field must be in range 0..999")),offset__13006], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____13018 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____13018))
{var vec__13019__13020 = temp__3971__auto____13018;
var years__13021 = cljs.core.nth.call(null,vec__13019__13020,0,null);
var months__13022 = cljs.core.nth.call(null,vec__13019__13020,1,null);
var days__13023 = cljs.core.nth.call(null,vec__13019__13020,2,null);
var hours__13024 = cljs.core.nth.call(null,vec__13019__13020,3,null);
var minutes__13025 = cljs.core.nth.call(null,vec__13019__13020,4,null);
var seconds__13026 = cljs.core.nth.call(null,vec__13019__13020,5,null);
var ms__13027 = cljs.core.nth.call(null,vec__13019__13020,6,null);
var offset__13028 = cljs.core.nth.call(null,vec__13019__13020,7,null);
return (new Date((Date.UTC(years__13021,(months__13022 - 1),days__13023,hours__13024,minutes__13025,seconds__13026,ms__13027) - ((offset__13028 * 60) * 1000))));
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
var tag__13032 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____13033 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__13032),null);
if(cljs.core.truth_(temp__3971__auto____13033))
{var pfn__13034 = temp__3971__auto____13033;
return pfn__13034.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__13032)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__13037 = cljs.core.name.call(null,tag);
var old_parser__13038 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__13037,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__13037,f);
return old_parser__13038;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__13041 = cljs.core.name.call(null,tag);
var old_parser__13042 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__13041,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__13041);
return old_parser__13042;
});
