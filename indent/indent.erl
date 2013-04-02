-module(indent).
-export([indent/1]).

indent(File) ->
    {ok,Io} = file:open(File,[read]),
    indented_lines(Io,[0]).

indented_lines(Io,Stack) ->
    case file:read_line(Io) of
	eof ->
	    true;
	{ok, Line} -> indented_line(Io,Stack,Line)
    end.

indented_line(Io,Stack,Line) ->
    Count = count_indentation(0,Line),
    case new_stack(Count, Stack) of
	error ->
	    false;
	New_Stack -> indented_lines(Io,New_Stack)
    end.

count_indentation(N,[$ |Rest]) ->
    count_indentation(N+1,Rest);
count_indentation(N,_) when (N rem 8) == 0 ->
    N/8;
count_indentation(_,_) ->
    error.

new_stack(error,_)->
    error;
new_stack(_,[])->
    error;
new_stack(N,[N|_Rest] = Stack) ->
    Stack;
new_stack(N,[First|Rest]) when N < First ->
    new_stack(N,Rest);
new_stack(N,Stack) ->
    [N|Stack].
