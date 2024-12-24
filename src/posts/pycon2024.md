---
title: Pycon 2024
description: I gave a pycon talk on how to create methods out of nothing. I'm like a python alchemist!
categories: [code, tech]
date: '2024-12-23'
edited: '2024-12-24'
published: true
---

<script lang="ts">
  import Youtube from "svelte-youtube-embed";
</script>

# PyCon 2024

This year I had the privilege of getting to talk at PyCon AU, held in Melbourne. It was a nice change of pace from the security conferences I normally attend, being dedicated to the programming language rather than any specific industry meant that the attendees had an incredibly diverse range of careers and experiences. 

Not only did I learn a lot, I think I can say that I walked away with a bunch of new friends! That and it was possibly the most queer conference i've ever attended, almost as gay as pride tbh.

## My Talk

I ended up speaking on the first day, in the [DevOops specialist track](https://2024.pycon.org.au/devoops/). This group of talks was dedicated to the mistakes people have made while programming, and what they've learnt from them. 

My talk was the result of playing with a few things as a way of entertaining myself while writing a bunch of boilerplate REST clients. Turns out you can write less code, while making it even less legible by using some of the features exposed via python's dunder methods (magic methods.) 

PyCon kindly recorded and published the talk, and the code is up on my github for interest.

<Youtube id="b8xmPKYN0j8" />

## Talks of interest

The whole conference was absolutely packed with some stellar talks. I'd say just watch all of them honestly, but here's a list of some of my favourites:

- [Quantifying Nebraska](https://2024.pycon.org.au/program/LYLY7H/)
- [Dependency Management: the cause of - and solution to - all supply chain problems](https://2024.pycon.org.au/program/P7UKEN/)
- [AI Perceptions of Gender](https://2024.pycon.org.au/program/JD8WMZ/)
- [Failsafes and Safety Fails: How to crash a train and other lessons for software engineers](https://2024.pycon.org.au/program/GF3NJK/)
- [Commissioning tools at the Australian Synchrotron, or, how to get a bazillion dollars worth of toys to play nicely together](https://2024.pycon.org.au/program/MQQJYE/)


## Flip Floperator

Apparently there's a running joke at the conference about the Flip Floperator, which is a weird operator in ruby where once the state is set to true from a conditional, it will return true until another conditional is met. Its kind of an odd implementation of a hardware flip flop. 

Anyway, a friend I made at the conference told me I should have a crack at an implementation while I was bored at the airport. Here's mine:

```python
from collections.abc import Callable, Iterator
from typing import TypeVar, Iterable

T = TypeVar("T")
R = TypeVar("R")

type Lambda = Callable[[T], R]

def flipFlop(input: Iterable[T], a: Lambda, b: Lambda) -> Iterator[Tuple[bool, T]]: 
    
    t = False

    for i in input:   
        if not t and a(i):
            
            t = True
        
        if t and b(i):
            
            t = False
            yield t, i

        yield t, i

if __name__ == "__main__":

    l = [1, 2, 3, 4, 5, 6]

    for t, i in flipFlop(l, lambda x: x == 2, lambda x: x == 4):
        if t:
            print(i)

```