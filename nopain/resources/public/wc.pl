#!/usr/bin/perl
use strict;
use warnings;
use utf8;
use open qw(:std :utf8);

my %counts = ();
while(<>) {
    for my $word (split /\W+/) {
        $word = lc $word;
        $counts{$word}++;
    }
}
for my $word (@stop_words) {
    delete($counts{word});
}
print (join " ", %counts);

# vim:set et:
